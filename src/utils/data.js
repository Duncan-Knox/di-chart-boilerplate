const fetchCSVData = (url) =>
  // eslint-disable-next-line no-undef
  new Promise((resolve) => {
    window.d3.csv(url, (data) => resolve(data));
  });

export const filterDataByCountry = (data, country, countryField) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  data.filter((item) => item[countryField] === country);
export const filterDataByPurpose = (data, purpose, purposeField) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  data.filter((item) => purpose.includes(item[purposeField]));

export const fetchCoreData = () => {
  const crs_data_csv_one =
    'https://raw.githubusercontent.com/devinit/di-website-data/main/2022/RH-and-FP-CRS-Data-2019.csv';
  const crs_data_csv_two =
    'https://raw.githubusercontent.com/devinit/di-website-data/main/2022/donor-by-recip-2019.csv';
  const crs_data_csv_four =
    'https://raw.githubusercontent.com/devinit/di-website-data/main/2022/RH-and-FP-CRS-Data-2019.csv';
  if (window.DIState) {
    window.DIState.setState({ country: 'United States' });
    fetchCSVData(crs_data_csv_one).then((data) => {
      window.DIState.setState({ dataOne: data });
    });
    fetchCSVData(crs_data_csv_two).then((data) => {
      window.DIState.setState({ dataTwo: data });
    });
    fetchCSVData(crs_data_csv_four).then((data) => {
      window.DIState.setState( {dataFour: data} );
    })
  } else {
    console.log('State is not defined');
  }
};

export default fetchCSVData;
