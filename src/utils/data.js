import { parse } from 'papaparse';
import { NO_DATA } from './constants';

export const formatNumber = (value, defaultForNan = '') => {
  const formattedNumber = Number(value);

  if (isNaN(formattedNumber)) {
    return defaultForNan;
  }

  return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 2 }).format(formattedNumber);
}

export const parseValuesToNumbers = (data, valueField) => data.map((item) => ({
  ...item,
  [valueField]: item[valueField] ? Number(item[valueField]) : 'NA'
}));

const fetchCSVData = (url) =>
  // eslint-disable-next-line no-undef
  new Promise((resolve) => {
    parse(url, {
      download: true,
      header: true,
      complete: ({ data }) => resolve(data),
    });
  });

export const filterDataByCountry = (data, country, countryField) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  data.filter((item) => item[countryField] === country);
export const filterDataByPurpose = (data, purpose, purposeField) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  data.filter((item) => purpose.includes(item[purposeField]));
export const filterDataByYear = (data, year, yearField) => {
  // eslint-disable-next-line implicit-arrow-linebreak
  const year2 = year.toString();

  return data.filter((item) => year2.includes(item[yearField]))};
export const extractPurposeCodes = (data, purposeField) =>
  data.reduce((codes, prev) => {
    const value = prev[purposeField];

    return value && !codes.includes(value) ? codes.concat(value) : codes;
  }, []);

export const fetchCoreData = (sources, defaultState) => {
  if (window.DIState && sources.length) {
    if (defaultState) window.DIState.setState(defaultState);

    sources.forEach(({ url, state }) => {
      fetchCSVData(url)
        .then((data) => {
          window.DIState.setState({ [state]: data || [] });
        });
    });
  } else {
    console.log('State is not defined');
  }
};

export const getYearsFromRange = (range) => {
  const yearDiff = range[1] - range[0] + 1;
  const count = [];
  for (const key of Array(yearDiff).keys()) {
    count.push(key);
  }

  return count.map((key) => range[0] + key);
};

export const getYearRangeDataAsSum = (data, yearRange, valueField) => {
  return yearRange.reduce((row, column) => {
    const yearData = data.filter((d) => `${d.Year}` === `${column}`);
    const sum = yearData.reduce((_sum, prev) => _sum + Number(prev[valueField] || 0), 0);

    return row.concat(sum);
  }, []);
};

export const getYearRangeData = (data, yearRange, valueField) => {
  return yearRange.map((year) => {
    const yearValue = data.find((item) => `${item.Year}` === `${year}`);
    
    if (yearValue) {
      return Number(yearValue[valueField]) || '';
    }

    return NO_DATA;
  });
};

export const getPropData = (data, Y_var_titles, valueField1,valueField2) => {
  return Y_var_titles.map((y_var) => {
    const Value = data.find((item) => `${item.y_variable}` === `${y_var}`);
    
    if (Value) {
      const text1 = String(Math.round(10000*Value[valueField1])/100);
      const text1b = "%"
      const text2 = " (";
      const text3 = String(parseFloat(Value[valueField2]).toFixed(1));
      const text4 = ")";
    
      return text1.concat(text1b,text2,text3,text4) || '';
    }

    return NO_DATA;
  });
};

export default fetchCSVData;
