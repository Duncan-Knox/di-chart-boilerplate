import { createElement } from 'react';
import { render } from 'react-dom';
import { TableTwo } from '../components/TableTwo/TableTwo';
import { filterDataByCountry, formatNumber, getYearsFromRange } from '../utils/data';
import { addFilter, addFilterWrapper } from '../widgets/filters';
import { PURPOSE_TO_FILTER_BY } from '../utils/constants';

const DATA_PURPOSE_COLUMN = 'Code type';
const YEAR_RANGE = [2019, 2021];

const getGroupedData = (countryData) => {
  let iteratorData = [...countryData];
  const sortedData = [];
  for (let count = 0; count < 10; count++) {
    if (iteratorData.length >= 1) {
      let maxRow = iteratorData.reduce((prev, current) => {
        if (Number(prev[`${YEAR_RANGE[1]}`]) < Number(current[`${YEAR_RANGE[1]}`])) {
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

const sortedDataRows = (data, years) => {
  const fullRows = [];
  for (let i = 0; i < 10; i++) {
    if (data.length >= 1) {
      const rank = i + 1;
      fullRows.push(
        [rank, data[i].recipient_name].concat(years.map((year) => formatNumber(Number(data[i][`${year}`]))))
      );
    }
  }

  return fullRows;
};

const unSortedDataRow = (data, years) => {
  let sumArray = [];
  years.forEach((year) => {
    const sum = data
      .map((d) => Number(d[year]) || 0)
      .reduce((prev, current) => prev + current, 0);
    sumArray.push(formatNumber(sum));
  });

  return sumArray;
};

const renderTable = (data, country, purpose, tableNode) => {
  const years = getYearsFromRange(YEAR_RANGE);
  const rowHeader = ['Rank', 'Recipient'].concat(years);
  const purposeData = data.filter((item) => purpose === item[DATA_PURPOSE_COLUMN]);
  const countrySpecificData = filterDataByCountry(purposeData, country, 'Reporting Organisation Narrative');
  const { sortedData, unsortedData } = getGroupedData(countrySpecificData);
  const unsortedDataSum = unSortedDataRow(unsortedData, years);
  const rows = [rowHeader]
    .concat(sortedDataRows(sortedData, years))
    .concat([['All other recipients (sum)'].concat(unsortedDataSum)]);

  render(createElement(TableTwo, { rows }), tableNode);
};

const init = (className) => {
  window.DICharts.handler.addChart({
    className,
    echarts: {
      onAdd: (chartNodes) => {
        Array.prototype.forEach.call(chartNodes, (chartNode) => {
          const dichart = new window.DICharts.Chart(chartNode.parentElement);

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
                    }, []).filter((d) => !!d).map((country) => ({ label: country, value: country })),
                    defaultOption: PURPOSE_TO_FILTER_BY[0],
                    className: 'purpose-code-filter',
                    label: 'Select Purpose Code',
                  });
                  window.DIState.setState({ purpose: PURPOSE_TO_FILTER_BY[0] });

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
