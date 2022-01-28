import deepMerge from 'deepmerge';
import defaultOptions from '../charts/echarts';
import { COUNTRY_FIELD, PURPOSE_FIELD, PURPOSE_TO_FILTER_BY } from '../utils/constants';
import { filterDataByCountry, filterDataByPurpose, formatNumber } from '../utils/data';
import { extractChartData, extractChartYears } from '../utils/barChartOne';

const getSeries = (data) => {
  return [
    {
      name: 'Reproductive Health Care',
      type: 'bar',
      stack: 'oda',
      data: extractChartData(data, 'Reproductive health care'),
    },
    {
      name: 'Family planning',
      type: 'bar',
      stack: 'oda',
      data: extractChartData(data, 'Family planning'),
    }
  ].map((serie, index, series) => {
    if (index === series.length - 1) {
      return {
        ...serie,
        label: {
          normal: {
            show: true,
            position: 'top',
            formatter: (params) => {
              const total = series.reduce((total, s) => {
                const datum = s.data[params.dataIndex];

                return total + parseFloat(datum ? datum : 0);
              }, 0);

              return formatNumber(total);
            },
            color: '#000000',
          },
        },
      };
    }

    return serie;
  });
};

const renderChart = (chartNode, data) => {
  const chart = window.echarts.init(chartNode);
  const option = {
    legend: { show: true, selectedMode: false },
    xAxis: {
      type: 'category',
      data: extractChartYears(data),
    },
    yAxis: {
      type: 'value',
      name: 'USD$ millions (constant 2019 prices)',
      nameLocation: 'middle',
      nameGap: 50,
    },
    grid: {
      top: 60,
    },
    series: getSeries(data),
  };

  chart.setOption(deepMerge(defaultOptions, option));
};

const init = (className) => {
  window.DICharts.handler.addChart({
    className,
    echarts: {
      onAdd: (chartNodes) => {
        Array.prototype.forEach.call(chartNodes, (chartNode) => {
          const dichart = new window.DICharts.Chart(chartNode.parentElement);
          // dichart.showLoading();

          /**
           * ECharts - prefix all browsers global with window
           * i.e window.echarts - echarts won't work without it
           *
           * const chart = window.echarts.init(chartNode);
           */

          const defaultCountry = 'United States';
          dichart.showLoading();
          if (window.DIState) {
            window.DIState.addListener(() => {
              dichart.showLoading();
              const state = window.DIState.getState;
              const { country, dataOne: data } = state;
              if (country && data) {
                const countryData = filterDataByPurpose(
                  filterDataByCountry(data, country || defaultCountry, COUNTRY_FIELD),
                  PURPOSE_TO_FILTER_BY,
                  PURPOSE_FIELD,
                );
                // chart goes here
                renderChart(chartNode, countryData);

                dichart.hideLoading();
              }
            });
          } else {
            console.log('State is not defined');
            dichart.hideLoading();
          }
        });
      },
    },
  });
};

export default init;
