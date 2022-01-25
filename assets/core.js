(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,n){"use strict";n.r(e);n(7);var r=n(5),a=n(1),o=function(){function t(){this.id=Math.random(),this.state={},this.listeners=[],Object(a.d)(this,{state:a.e,setState:a.a,getState:a.c})}var e=t.prototype;return e.setState=function(t,e){void 0===e&&(e=!0),this.state=e?Object.assign({},this.state,t):t},e.addListener=function(t){return this.listeners=this.listeners.concat(Object(a.b)(t)),this.listeners.length-1},e.removeListener=function(t){t<this.listeners.length&&this.listeners[t]&&(this.listeners[t](),this.listeners[t]=null)},e.resetListeners=function(){this.listeners=[]},Object(r.a)(t,[{key:"getState",get:function(){return this.state}}]),t}();window.DIState=new o;var i=n(0),c=n.n(i),u=n(2),d=function(t){return c.a.createElement("div",{className:"table-styled"},c.a.createElement("table",null,t.children))},s=function(t){var e=function(t,e){return void 0===e&&(e=!1),t.map((function(t,n){return c.a.createElement("tr",{key:n},t.map((function(t,n){return e?c.a.createElement("th",{key:n},t):c.a.createElement("td",{key:n},t)})))}))};return c.a.createElement(d,null,c.a.createElement("thead",null,e(t.rows.filter((function(t,e){return 0===e})),!0)),c.a.createElement("tbody",null,e(t.rows.filter((function(t,e){return e>0})))))},l=["Reproductive health care","Family planning"],f=[2010,2019],h=function(t){return new Promise((function(e){window.d3.csv(t,(function(t){return e(t)}))}))},p=function(t,e,n){return t.filter((function(t){return t[n]===e}))},w=function(t,e,n){return t.filter((function(t){return e.includes(t[n])}))},m=h;function v(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t[Symbol.iterator]()).next.bind(n)}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var b=function(t){window.DICharts.handler.addChart({className:t,d3:{onAdd:function(t){Array.prototype.forEach.call(t,(function(t){var e=new window.DICharts.Chart(t.parentElement);e.showLoading();window.DIState?window.DIState.addListener((function(){e.showLoading();var n=window.DIState.getState,r=n.country,a=n.dataOne;if(r&&a){var o=w(p(a,r||"United States","donor_name"),l,"purpose_name");!function(t,e,n){for(var r,a=[],o=v(Array(f[1]-f[0]+1).keys());!(r=o()).done;){var c=r.value;a.push(c)}var d=["Purpose code"].concat(a.map((function(t){return f[0]+t}))),h=[d].concat(l.map((function(t){var n=w(e,[t],"purpose_name");return d.reduce((function(e,r,a){if(0===a)return e.concat(t);var o=n.filter((function(t){return t.year===""+r})).reduce((function(t,e){return t+Number(e.usd_disbursement_deflated)}),0);return e.concat(Math.round(o))}),[])})));Object(u.render)(Object(i.createElement)(s,{country:n,rows:h}),t)}(t,o,r||"United States"),e.hideLoading()}})):console.log("State is not defined")}))}}})},S=function(t){var e,n=document.createElement("div");return(e=n.classList).add.apply(e,["spotlight-banner","data-selector--wrapper"]),t.parentElement.insertBefore(n,t),n},g=function(t,e){var n=document.createElement("option");n.value="string"==typeof e?e:e.value,n.text="string"==typeof e?e:e.label,t.appendChild(n)},E=function(t){var e,n=t.wrapper,r=t.options,a=t.defaultOption,o=t.allItemsLabel,i=t.className,c=t.label,u=document.createElement("select");if((e=u.classList).add.apply(e,["data-selector","js-plotly-chart-data-selector",i]),o&&g(u,{label:o,value:"*"}),r.forEach((function(t){return g(u,t)})),u.classList.add("data-selector--active"),a&&(u.value=a),c){var d=document.createElement("label");d.innerHTML=c;var s=document.createElement("div");s.classList.add("labelled-data-selector--wrapper"),s.appendChild(d),s.appendChild(u),n.appendChild(s)}else n.appendChild(u);return u},D=function(t){window.DICharts.handler.addChart({className:t,d3:{onAdd:function(t){Array.prototype.forEach.call(t,(function(t){var e=new window.DICharts.Chart(t.parentElement);e.showLoading();m("https://raw.githubusercontent.com/devinit/di-website-data/main/2022/rh-and-fp-dropdowns.csv").then((function(n){var r=S(t),a=E({wrapper:r,options:n.map((function(t){return t.Donors})),defaultOption:"United States",className:"country-filter",label:"Select Donor"});window.DIState&&window.DIState.setState({country:"United States"}),a.addEventListener("change",(function(t){var e=t.currentTarget.value;window.DIState&&window.DIState.setState({country:e})})),e.hideLoading()}))}))}}})},I=function(t){window.DICharts.handler.addChart({className:t,echarts:{onAdd:function(t){Array.prototype.forEach.call(t,(function(t){var e=new window.DICharts.Chart(t.parentElement);e.showLoading(),window.DIState?window.DIState.addListener((function(){e.showLoading();var t=window.DIState.getState,n=t.country,r=t.dataOne;n&&r&&(console.log(n,r),e.hideLoading())})):(console.log("State is not defined"),e.hideLoading())}))}}})},L=function(t){var e=function(t,e){return void 0===e&&(e=!1),t.map((function(n,r){return c.a.createElement("tr",{key:r},n.map((function(n,a){return e?c.a.createElement("th",{key:a},n):r===t.length-1&&0===a?c.a.createElement("td",{colSpan:2,key:a},n):c.a.createElement("td",{key:a},n)})))}))};return c.a.createElement(d,null,c.a.createElement("thead",null,e(t.rows.filter((function(t,e){return 0===e})),!0)),c.a.createElement("tbody",null,e(t.rows.filter((function(t,e){return e>0})))))};function C(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return A(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t[Symbol.iterator]()).next.bind(n)}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var O=function(t,e,n,r){for(var a,o=[2016,2019],c=[],d=C(Array(o[1]-o[0]+1).keys());!(a=d()).done;){var s=a.value;c.push(s)}var l=["Rank","Recipient"].concat(c.map((function(t){return o[0]+t}))),f=w(t,n,"Code type"),h=function(t){for(var e=[].concat(t),n=[],r=0;r<10;r++){var a=e.reduce((function(t,e){return Number(t[2019])<Number(e[2019])?e:t}));n.push(a);var o=e.indexOf(a);e.splice(o,1)}return{sortedData:n,unsortedData:e}}(p(f,e,"donor_name")),m=h.sortedData,v=function(t,e){var n=[];return e.forEach((function(e){var r=t.map((function(t){return Number(t[e])})).reduce((function(t,e){return Math.round(t+e)}));n.push(r)})),n}(h.unsortedData,c.map((function(t){return(o[0]+t).toString()}))),y=[l].concat(function(t){for(var e=[],n=0;n<10;n++)e.push([n+1,t[n].recipient_name,Math.round(t[n][2016]),Math.round(t[n][2017]),Math.round(t[n][2018]),Math.round(t[n][2019])]);return e}(m)).concat([["All other recipients(sum)"].concat(v)]);Object(u.render)(Object(i.createElement)(L,{rows:y}),r)},j=function(t){window.DICharts.handler.addChart({className:t,echarts:{onAdd:function(t){Array.prototype.forEach.call(t,(function(t){var e=new window.DICharts.Chart(t.parentElement);e.showLoading();var n,r=S(t);window.DIState?window.DIState.addListener((function(){e.showLoading();var a=window.DIState.getState,o=a.country,i=a.dataTwo,c=a.purpose;o&&i&&(n||(n=E({wrapper:r,options:i.reduce((function(t,e){var n=e["Code type"];return t.includes(n)?t:t.concat(n)}),[]),defaultOption:"Reproductive health care and family planning",className:"purpose-code-filter",label:"Select Purpose Code"}),a&&window.DIState.setState({purpose:"Reproductive health care and family planning"}),n.addEventListener("change",(function(t){window.DIState.setState({purpose:t.target.value})}))),O(i,o,c,t),e.hideLoading())})):(console.log("State is not defined"),e.hideLoading())}))}}})};window.addEventListener("load",(function(){window.DIState?(h("https://raw.githubusercontent.com/devinit/di-website-data/main/2022/RH-and-FP-CRS-Data-2019.csv").then((function(t){window.DIState.setState({dataOne:t})})),h("https://raw.githubusercontent.com/devinit/di-website-data/main/2022/donor-by-recip-2019.csv").then((function(t){window.DIState.setState({dataTwo:t})}))):console.log("State is not defined"),D("dicharts--oda-root"),b("dicharts--table-one-root"),I("dicharts--chart-one-root"),j("dicharts--table-two-root")}))},6:function(t,e,n){t.exports=n(13)},7:function(t,e,n){}},[[6,1,2]]]);