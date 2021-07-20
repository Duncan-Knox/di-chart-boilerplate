// default echart options for DI charts
const defaultOptions = {
  legend: {
    top: 10,
    textStyle: {
      fontFamily: 'Geomanist Regular,sans-serif',
    },
  },
  tooltip: {
    trigger: 'axis',
    textStyle: {
      fontFamily: 'Geomanist Regular,sans-serif',
    },
  },
  toolbox: {
    showTitle: false,
    feature: {
      saveAsImage: {
        title: 'Save as image',
        pixelRatio: 2,
      },
    },
    right: 20,
    tooltip: {
      show: true,
      textStyle: {
        fontFamily: 'Geomanist Regular,sans-serif',
        formatter(param) {
          return `<div>${param.title}</div>`; // user-defined DOM structure
        },
      },
    },
  },
  xAxis: {
    axisLabel: {
      fontFamily: 'Geomanist Regular,sans-serif',
      fontSize: 13,
    },
    splitLine: {
      show: false,
    },
  },
  yAxis: {
    axisLabel: {
      fontFamily: 'Geomanist Regular,sans-serif',
      fontSize: 13,
    },
    splitLine: {
      show: false,
    },
  },
  grid: {
    top: 10,
  },
};

export default defaultOptions;
