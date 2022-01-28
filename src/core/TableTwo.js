import { createElement } from 'react';
import { render } from 'react-dom';
import { TableTwo } from '../components/TableTwo/TableTwo';
import { filterDataByCountry } from '../utils/data';
import { addFilter, addFilterWrapper } from '../widgets/filters';

const DATA_PURPOSE_COLUMN = 'Code type';
const getGroupedData = (countryData) => {
  let iteratorData = [...countryData];
  const sortedData = [];
  for (let count = 0; count < 10; count++) {
    if (iteratorData.length >= 1) {
      let maxRow = iteratorData.reduce((prev, current) => {
        if (Number(prev['2019']) < Number(current['2019'])) {
          return current;
        } else {
          return prev;
        }
      });
      sortedData.push(maxRow);
      let maxRowIndex = iteratorData.indexOf(maxRow);
      iteratorData.splice(maxRowIndex, 1);
    }
  }

  return { sortedData, unsortedData: iteratorData };
};

const sortedDataRows = (data) => {
  const fullRows = [];
  for (let i = 0; i < 10; i++) {
    if (data.length >= 1) {
      fullRows.push([
        i + 1,
        data[i].recipient_name,
        Math.round(Number(data[i]['2016'])),
        Math.round(Number(data[i]['2017'])),
        Math.round(Number(data[i]['2018'])),
        Math.round(Number(data[i]['2019'])),
      ]);
    }
  }

  return fullRows;
};

const unSortedDataRow = (data, years) => {
  let sumArray = [];
  years.forEach((year) => {
    const sum = data
      .map((d) => {
        return Number(d[year]);
      })
      .reduce((prev, current) => prev + current, 0);
    sumArray.push(Math.round(sum));
  });

  return sumArray;
};

const renderTable = (data, country, purpose, tableNode) => {
  const YEARS = [2016, 2019];
  const yearRange = YEARS[1] - YEARS[0] + 1;
  const count = [];
  for (const key of Array(yearRange).keys()) {
    count.push(key);
  }
  const rowHeader = ['Rank', 'Recipient'].concat(count.map((key) => YEARS[0] + key));
  const purposeData = data.filter((item) => purpose === item[DATA_PURPOSE_COLUMN]);
  const countrySpecificData = filterDataByCountry(purposeData, country, 'donor_name');
  const { sortedData, unsortedData } = getGroupedData(countrySpecificData);
  const unsortedDataSum = unSortedDataRow(
    unsortedData,
    count.map((key) => (YEARS[0] + key).toString()),
  );
  const rows = [rowHeader]
    .concat(sortedDataRows(sortedData))
    .concat([['All other recipients(sum)'].concat(unsortedDataSum)]);

  render(createElement(TableTwo, { rows }), tableNode);
};

const init = (className) => {
  window.DICharts.handler.addChart({
    className,
    echarts: {
      onAdd: (chartNodes) => {
        Array.prototype.forEach.call(chartNodes, (chartNode) => {
          const dichart = new window.DICharts.Chart(chartNode.parentElement);

          /**
           * ECharts - prefix all browsers global with window
           * i.e window.echarts - echarts won't work without it
           *
           * const chart = window.echarts.init(chartNode);
           */

          dichart.showLoading();
          const filterWrapper = addFilterWrapper(chartNode);
          let purposeField;
          if (window.DIState) {
            window.DIState.addListener(() => {
              dichart.showLoading();
              const state = window.DIState.getState;
              const { country, dataTwo: data, purpose } = state;
              if (country && data) {
                if (!purposeField) {
                  purposeField = addFilter({
                    wrapper: filterWrapper,
                    options: data.reduce((options, prev) => {
                      const value = prev[DATA_PURPOSE_COLUMN];
                      if (!options.includes(value)) {
                        return options.concat(value);
                      }

                      return options;
                    }, []),
                    defaultOption: 'Reproductive health care and family planning',
                    className: 'purpose-code-filter',
                    label: 'Select Purpose Code',
                  });
                  if (state) {
                    window.DIState.setState({ purpose: 'Reproductive health care and family planning' });
                  }

                  purposeField.addEventListener('change', (event) => {
                    window.DIState.setState({ purpose: event.target.value });
                  });
                }
                renderTable(data, country, purpose, chartNode);

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