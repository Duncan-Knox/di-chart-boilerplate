import { addFilter, addFilterWrapper } from '../widgets/filters';

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
                console.log(country)
                if (!purposeField) {
                  purposeField = addFilter({
                    wrapper: filterWrapper,
                    options: data.reduce((options, prev) => {
                      const value = prev['Code type']; // TODO: use a constant or named variable
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
                    window.DIState.setState({purpose: event.target.value})
                  });
                }
                console.log(purpose)

                // FIXME: table goes here

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
