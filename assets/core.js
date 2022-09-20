(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(26)},12:function(e,t,n){},14:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);n(12);var r=n(8),a=n(3),o=function(){function e(){this.id=Math.random(),this.state={},this.listeners=[],Object(a.d)(this,{state:a.e,setState:a.a,getState:a.c})}var t=e.prototype;return t.setState=function(e,t){void 0===t&&(t=!0),this.state=t?Object.assign({},this.state,e):e},t.addListener=function(e){return this.listeners=this.listeners.concat(Object(a.b)(e)),this.listeners.length-1},t.removeListener=function(e){e<this.listeners.length&&this.listeners[e]&&(this.listeners[e](),this.listeners[e]=null)},t.resetListeners=function(){this.listeners=[]},Object(r.a)(e,[{key:"getState",get:function(){return this.state}}]),e}();window.DIState=new o;n(14);var i=n(0),u=n.n(i),c=n(1),d=function(e){return u.a.createElement("div",{className:"table-styled"},u.a.createElement("table",null,e.children))},s=function(e){var t=function(e,t){return void 0===t&&(t=!1),e.map((function(e,n){return u.a.createElement("tr",{key:n},e.map((function(e,n){return t?u.a.createElement("th",{key:n},e):u.a.createElement("td",{key:n},e)})))}))};return u.a.createElement(d,null,u.a.createElement("thead",null,t(e.rows.filter((function(e,t){return 0===t})),!0)),u.a.createElement("tbody",null,t(e.rows.filter((function(e,t){return t>0})))))},l=["Reproductive health care","Family planning"],f=[2011,2020],p=[2016,2020],m=n(9);function h(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var w=function(e,t){void 0===t&&(t="");var n=Number(e);return isNaN(n)?t:new Intl.NumberFormat("en-IN",{maximumFractionDigits:2}).format(n)},b=function(e,t){return e.map((function(e){var n;return Object.assign({},e,((n={})[t]=e[t]?Number(e[t]):"NA",n))}))},g=function(e){return new Promise((function(t){Object(m.parse)(e,{download:!0,header:!0,complete:function(e){var n=e.data;return t(n)}})}))},y=function(e,t,n){return e.filter((function(e){return e[n]===t}))},S=function(e,t,n){return e.filter((function(e){return t.includes(e[n])}))},_=function(e){for(var t,n=e[1]-e[0]+1,r=[],a=h(Array(n).keys());!(t=a()).done;){var o=t.value;r.push(o)}return r.map((function(t){return e[0]+t}))},E=function(e,t,n){return t.reduce((function(t,r){var a=e.filter((function(e){return""+e.year==""+r})).reduce((function(e,t){return e+Number(t[n]||0)}),0);return t.concat(a)}),[])},I=g,L=function(e,t,n){var r=_(f),a=["Purpose code"].concat(r),o=l.map((function(e){var n=S(t,[e],"purpose_name");return[e].concat(function(e,t,n){return t.map((function(t){var r=e.find((function(e){return""+e.year==""+t}));return r?Number(r[n])||"":0}))}(n,r,"usd_disbursement_deflated_Sum"))})),u=a.map((function(e,t){return 0===t?"Total":w(o.reduce((function(e,n){return"number"==typeof n[t]?e+n[t]:e}),0))})),d=o.map((function(e){return e.map((function(e){return"number"==typeof e?w(e):e}))})),p=[a].concat(d,[u]);Object(c.render)(Object(i.createElement)(s,{country:n,rows:p}),e)},D=function(e){window.DICharts.handler.addChart({className:e,d3:{onAdd:function(e){Array.prototype.forEach.call(e,(function(e){var t=new window.DICharts.Chart(e.parentElement);t.showLoading();window.DIState?window.DIState.addListener((function(){t.showLoading();var n=window.DIState.getState,r=n.country,a=n.dataOne;if(r&&a){var o=S(y(a,r||"United States","donor_name"),l,"purpose_name");L(e,o,r||"United States"),t.hideLoading(),e.parentElement.classList.add("auto-height")}})):console.log("State is not defined")}))}}})},N=function(e){var t,n=document.createElement("div");return(t=n.classList).add.apply(t,["spotlight-banner","data-selector--wrapper"]),e.parentElement.insertBefore(n,e),n},O=function(e,t){var n=document.createElement("option");n.value="string"==typeof t?t:t.value,n.text="string"==typeof t?t:t.label,e.appendChild(n)},C=function(e){var t,n=e.wrapper,r=e.options,a=e.defaultOption,o=e.allItemsLabel,i=e.className,u=e.label,c=document.createElement("select");if((t=c.classList).add.apply(t,["data-selector","js-plotly-chart-data-selector",i]),o&&O(c,{label:o,value:"*"}),r.forEach((function(e){return O(c,e)})),c.classList.add("data-selector--active"),a&&(c.value=a),u){var d=document.createElement("label");d.innerHTML=u;var s=document.createElement("div");s.classList.add("labelled-data-selector--wrapper"),s.appendChild(d),s.appendChild(c),n.appendChild(s)}else n.appendChild(c);return c},A=function(e){window.DICharts.handler.addChart({className:e,d3:{onAdd:function(e){Array.prototype.forEach.call(e,(function(e){var t=new window.DICharts.Chart(e.parentElement);t.showLoading();I("https://raw.githubusercontent.com/devinit/di-website-data/main/2022/rh-and-fp-dropdowns.csv").then((function(n){n=n.filter((function(e){return""!==e.Donors}));var r=N(e),a=C({wrapper:r,options:n.map((function(e){return e.Donors})),defaultOption:"United States",className:"country-filter",label:"Select donor"});window.DIState&&window.DIState.setState({country:"United States"}),a.addEventListener("change",(function(e){var t=e.currentTarget.value;window.DIState&&window.DIState.setState({country:t})})),t.hideLoading(),e.parentElement.classList.add("auto-height")}))}))}}})},k=n(2),x=n.n(k);var j={rainbow:["#e84439","#eb642b","#f49b21","#109e68","#0089cc","#893f90","#c2135b","#f8c1b2","#f6bb9d","#fccc8e","#92cba9","#88bae5","#c189bb","#e4819b"],default:["#6c120a","#a21e25","#cd2b2a","#dc372d","#ec6250","#f6b0a0","#fbd7cb","#fce3dc"],sunflower:["#7d4712","#ba6b15","#df8000","#f7a838","#fac47e","#fedcab","#fee7c1","#feedd4"],marigold:["#7a2e05","#ac4622","#cb5730","#ee7644","#f4a57c","#facbad","#fcdbbf","#fde5d4"],rose:["#65093d","#8d0e56","#9f1459","#d12568","#e05c86","#f3a5b6","#f6b8c1","#f9cdd0"],lavendar:["#42184c","#632572","#732c85","#994d98","#af73ae","#cb98c4","#deb5d6","#ebcfe5"],bluebell:["#0a3a64","#00538e","#1060a3","#4397d3","#77adde","#a3c7eb","#bcd4f0","#d3e0f4"],leaf:["#08492f","#005b3e","#00694a","#3b8c62","#74bf93","#a2d1b0","#b1d8bb","#c5e1cb"]},U={legend:{top:10,textStyle:{fontFamily:"Geomanist Regular,sans-serif"}},tooltip:{trigger:"axis",textStyle:{fontFamily:"Geomanist Regular,sans-serif"},axisPointer:{type:"none"}},toolbox:{showTitle:!1,feature:{saveAsImage:{show:!1,title:"Save as image",pixelRatio:2}},right:20,tooltip:{show:!0,textStyle:{fontFamily:"Geomanist Regular,sans-serif",formatter:function(e){return"<div>"+e.title+"</div>"}}}},color:j.rainbow,xAxis:{axisLabel:{fontFamily:"Geomanist Regular,sans-serif",fontSize:13},splitLine:{show:!1}},yAxis:{axisLabel:{fontFamily:"Geomanist Regular,sans-serif",fontSize:13},splitLine:{show:!1}},axisPointer:{type:"none"},grid:{top:10}},T=u.a.createElement("div",{className:"no-data"},"No Data"),F=function(){return T},R=function(e,t,n,r,a){var o=S(e,[t],a);return E(o,n,r)},P=function(e,t){void 0===t&&(t=!0),t?e.classList.remove("invisible"):e.classList.add("invisible")},G=function(e){e.classList.add("no-data--wrapper"),Object(c.unmountComponentAtNode)(e),Object(c.render)(Object(i.createElement)(F),e)},$=function(e){e.classList.remove("no-data--wrapper"),Object(c.unmountComponentAtNode)(e)},M=function(e,t){return l.map((function(n){return{name:n,type:"bar",stack:"oda",tooltip:{valueFormatter:function(e){return"US$"+w(e)+" million"}},data:R(e,n,t,"usd_disbursement_deflated_Sum","purpose_name")}})).map((function(e,t,n){return t===n.length-1?Object.assign({},e,{label:{normal:{show:!0,position:"top",fontFamily:"Geomanist Regular,sans-serif",formatter:function(e){var t=n.reduce((function(t,n){var r=n.data[e.dataIndex];return t+parseFloat(r||0)}),0);return w(t)},color:"#000000"}}}):e}))},H=function(e){window.DICharts.handler.addChart({className:e,echarts:{onAdd:function(e){Array.prototype.forEach.call(e,(function(e){var t=new window.DICharts.Chart(e.parentElement);t.showLoading();var n=N(e);window.DIState?window.DIState.addListener((function(){t.showLoading();var r=window.DIState.getState,a=r.country,o=r.dataOne;if(a&&o){var i=S(y(o,a||"United States","donor_name"),l,"purpose_name");!function(e,t,n){if(!n.length)return P(e,!1),void G(t);P(e),$(t);var r=window.echarts.init(e),a=_(f),o=x()(U,{legend:{show:!0,selectedMode:!1},xAxis:{type:"category",data:a},yAxis:{type:"value",name:"US$ millions (constant ".concat(a[a.length-1]," prices)"),nameLocation:"middle",nameGap:50},grid:{top:60},series:M(n,a)});o.color=["#e84439","#f8c1b2"].concat(o.color),r.setOption(o)}(e,n,i),t.hideLoading()}})):(console.log("State is not defined"),t.hideLoading())}))}}})},B=function(e,t){var n=e.reduce((function(e,t){return e.includes(t.aid_type_di_name)||e.push(t.aid_type_di_name),e}),[]),r=n.map((function(n){return R(e,n,t,"usd_disbursement_deflated_Sum","aid_type_di_name")})),a=function(e,t){var n=Object.keys(t).map((function(e){var n;return(n={})[e]=t[e].reduce((function(e,t){return e+t}),0),n}));return e.map((function(e){return e.map((function(e,t){var r=parseFloat(e),a=parseFloat(n[t]?n[t][t]:1);return isNaN(r)||isNaN(a)||0===r||0===r?0:r/a*100}))}))}(r,function(e){for(var t={},n=0;n<e.length;n++)for(var r=e[n],a=0;a<r.length;a++)t[a]=t[a]?t[a]:[],t[a].push(r[a]);return t}(r));return n.map((function(e,t){return{name:e,type:"bar",stack:"oda",data:a[t]}}))},z=function(e,t){var n=w(function(e,t,n){var r=S(e,[t],"aid_type_di_name");return E(r,n,"usd_disbursement_deflated_Sum")}(e,t.seriesName,[t.name]));return'\n    <div style="margin-bottom:8px;">\n      '+t.marker+t.seriesName+':\n      <span style="font-weight: bold;">\n        '+w(Number(t.value,10))+"% - US$"+n+" million\n      </span>\n    </div>"},J=function(e,t,n){if(!n.length)return P(e,!1),void G(t);P(e),$(t);var r=window.echarts.init(e),a=_(p),o=x()(U,{legend:{show:!0,selectedMode:!1},tooltip:{trigger:"axis",formatter:function(e){return e.map((function(e){return z(n,e)})).join("")}},xAxis:{type:"category",data:a},yAxis:{type:"value",axisLabel:{formatter:"{value}%"},max:100},grid:{top:60},series:B(n,a)});o.color=["#f8c1b2","#f0826d","#bc2629","#8f1b13"].concat(o.color),r.setOption(o,{replaceMerge:["series"]})},q=function(e){window.DICharts.handler.addChart({className:e,echarts:{onAdd:function(e){Array.prototype.forEach.call(e,(function(e){var t=new window.DICharts.Chart(e.parentElement);t.showLoading();var n,r=N(e),a=N(e),o="Reproductive health care";window.DIState?window.DIState.addListener((function(){t.showLoading();var i=window.DIState.getState,u=i.country,c=i.odaAidType;if(u&&c){var d=S(y(c,u||"United States","donor_name"),[o],"purpose_name");n||(n=C({wrapper:r,options:c.reduce((function(e,t){var n=t.purpose_name;return n&&!e.includes(n)?e.concat(n):e}),[]),defaultOption:o,className:"purpose-code-filter",label:"Select purpose code"})).addEventListener("change",(function(t){o=t.target.value;var n=window.DIState.getState.country,r=S(y(c,n||"United States","donor_name"),[o],"purpose_name");J(e,a,r)})),J(e,a,d),t.hideLoading()}})):(console.log("State is not defined"),t.hideLoading())}))}}})},K=function(e){var t=function(e,t){return void 0===t&&(t=!1),e.map((function(n,r){return u.a.createElement("tr",{key:r},n.map((function(n,a){return t?u.a.createElement("th",{key:a},n):r===e.length-1&&0===a?u.a.createElement("td",{colSpan:2,key:a},n):u.a.createElement("td",{key:a},n)})))}))};return u.a.createElement(d,null,u.a.createElement("thead",null,t(e.rows.filter((function(e,t){return 0===t})),!0)),u.a.createElement("tbody",null,t(e.rows.filter((function(e,t){return t>0})))))};function Q(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return V(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var W=function(e,t,n,r){for(var a,o=[2016,2020],u=[],d=Q(Array(o[1]-o[0]+1).keys());!(a=d()).done;){var s=a.value;u.push(s)}var l=["Rank","Recipient"].concat(u.map((function(e){return o[0]+e}))),f=e.filter((function(e){return n===e["Code type"]})),p=function(e){var t=[].concat(e),n=[];if(e.length<10)for(var r=0;r<e.length;r++)if(t.length>=1){var a=t.reduce((function(e,t){return Number(e[2020])<Number(t[2020])?t:e}));n.push(a);var o=t.indexOf(a);t.splice(o,1)}for(var i=0;i<10;i++)if(t.length>=1){var u=t.reduce((function(e,t){return Number(e[2020])<Number(t[2020])?t:e}));n.push(u);var c=t.indexOf(u);t.splice(c,1)}return{sortedData:n,unsortedData:t}}(y(f,t,"donor_name")),m=p.sortedData,h=function(e,t){return t.map((function(t){var n=e.map((function(e){return Number(e[t])})).reduce((function(e,t){return e+t}),0);return w(n,0)}))}(p.unsortedData,u.map((function(e){return(o[0]+e).toString()}))),v=[l].concat(function(e){var t=[];if(e.length<10){if(0===e.length)return t;for(var n=0;n<e.length;n++)e.length>=1&&t.push([n+1,e[n].recipient_name,w(Number(e[n][2016]),0),w(Number(e[n][2017]),0),w(Number(e[n][2018]),0),w(Number(e[n][2019]),0),w(Number(e[n][2020]),0)]);return t}for(var r=0;r<10;r++)e.length>=1&&t.push([r+1,e[r].recipient_name,w(Number(e[r][2016]),0),w(Number(e[r][2017]),0),w(Number(e[r][2018]),0),w(Number(e[r][2019]),0),w(Number(e[r][2020]),0)]);return t}(m)).concat([["Total of all other recipients"].concat(h)]);Object(c.render)(Object(i.createElement)(K,{rows:v}),r)},X=function(e){window.DICharts.handler.addChart({className:e,echarts:{onAdd:function(e){Array.prototype.forEach.call(e,(function(e){var t=new window.DICharts.Chart(e.parentElement);t.showLoading();var n,r=N(e),a="Reproductive health care and family planning",o="United States";window.DIState?window.DIState.addListener((function(){t.showLoading();var i=window.DIState.getState,u=i.country,c=i.dataTwo;(o=u)&&c&&(n||(n=C({wrapper:r,options:c.reduce((function(e,t){var n=t["Code type"];return n&&!e.includes(n)?e.concat(n):e}),[]),defaultOption:a,className:"purpose-code-filter",label:"Select purpose code"})).addEventListener("change",(function(t){a=t.target.value,W(c,o,a,e)})),W(c,o,a,e),t.hideLoading(),e.parentElement.classList.add("auto-height"))})):(console.log("State is not defined"),t.hideLoading())}))}}})},Y=function(e){var t=function(e,t){return void 0===t&&(t=!1),e.map((function(e,n){return u.a.createElement("tr",{key:n},e.map((function(e,n){return t?u.a.createElement("th",{key:n},e):u.a.createElement("td",{key:n},e)})))}))};return u.a.createElement(d,null,u.a.createElement("thead",null,t(e.rows.filter((function(e,t){return 0===t})),!0)),u.a.createElement("tbody",null,t(e.rows.filter((function(e,t){return t>0})))))},Z=function(e,t,n,r){var a=y(t,n||"United States","donor_name"),o=function(e,t){var n=[["Aid Type",2020,"% Total"]],r=e.reduce((function(e,t){var n=t.aid_type_di_name;return n&&!e.includes(n)&&e.push(n),e}),[]),a=t.map((function(e){return Number(e.usd_disbursement_deflated_Sum)})).reduce((function(e,t){return e+t}),0),o=r.map((function(e){var n=t.find((function(t){return t.aid_type_di_name===e})),r=n?n.usd_disbursement_deflated_Sum:0,o=0!==r?(w(r/a*100)||0)+"%":0;return[e].concat(w(r,0),[o])}));return n.concat(o,[["Total",w(a,0),a?"100%":"0%"]])}(t,function(e){return e.filter((function(e){return""+e.year=="2020"}))}(S(a,r,"purpose_name")));Object(c.render)(Object(i.createElement)(Y,{country:n,rows:o}),e)},ee=function(e){window.DICharts.handler.addChart({className:e,d3:{onAdd:function(e){Array.prototype.forEach.call(e,(function(e){var t,n=new window.DICharts.Chart(e.parentElement);n.showLoading();var r="United States";window.DIState?window.DIState.addListener((function(){n.showLoading();var a=window.DIState.getState,o=a.country,i=a.odaAidType;if((r=o)&&i){var u=function(e,t){void 0===t&&(t="purpose_name");var n=[];return e.forEach((function(e){e[t]&&!n.includes(e[t])&&n.push(e[t])})),n}(i),c=u[0];if(!t){var d=N(e);(t=C({wrapper:d,options:u,defaultOption:c,className:"purpose-code-filter",label:"Select purpose code"})).addEventListener("change",(function(t){c=t.target.value,Z(e,i,r||"United States",c)}))}Z(e,i,r||"United States",c),n.hideLoading(),e.parentElement.classList.add("auto-height")}})):console.log("State is not defined")}))}}})},te=function(e){var t=function(e,t){return void 0===t&&(t=!1),e.map((function(e,n){return u.a.createElement("tr",{key:n},e.map((function(e,n){return t?u.a.createElement("th",{key:n},e):u.a.createElement("td",{key:n},e)})))}))};return u.a.createElement(d,null,u.a.createElement("thead",null,t(e.rows.filter((function(e,t){return 0===t})),!0)),u.a.createElement("tbody",null,t(e.rows.filter((function(e,t){return t>0})))))},ne={"University, College Or Other Teaching Institution, Research Institute Or Think?Tank":"University, other teaching institution, research institute or think-tank"},re=function(e,t,n){var r,a,o=["Channel"].concat(2020,"% Total"),u=(r=function(e){return e.reduce((function(e,t){var n;return Object.assign({},e,((n={})[t.oecd_aggregated_channel]=parseFloat(e[t.oecd_aggregated_channel]||0)+parseFloat(t.usd_disbursement_deflated_Sum||0),n))}),{})}(t),a=Object.keys(r).reduce((function(e,t){return e+Number(r[t]||0)}),0),Object.keys(r).map((function(e){return[ne[e]||e,w(r[e]),(w(r[e]/a*100||0)||0)+"%"]})).concat([["Total",w(a),a?"100%":"0%"]])),d=[o].concat(u);Object(c.render)(Object(i.createElement)(te,{country:n,rows:d}),e)},ae=function(e){window.DICharts.handler.addChart({className:e,d3:{onAdd:function(e){Array.prototype.forEach.call(e,(function(e){var t=new window.DICharts.Chart(e.parentElement);t.showLoading();var n,r=N(e),a="United States";window.DIState?window.DIState.addListener((function(){t.showLoading();var o=window.DIState.getState,i=o.country,u=o.odaChannels,c=o.purpose;if((a=i)&&u){var d=function(e){return e.reduce((function(e,t){return t.purpose_name&&!e.includes(t.purpose_name)?e.concat(t.purpose_name):e}),[])}(u),s=S(y(u,a||"United States","donor_name"),c||d[0],"purpose_name");n||(n=C({wrapper:r,options:d,defaultOption:d[0],className:"purpose-code-filter",label:"Select purpose code"}),o&&window.DIState.setState({purpose:d[0]}),n.addEventListener("change",(function(e){window.DIState.setState({purpose:e.target.value})}))),re(e,s,a||"United States"),t.hideLoading(),e.parentElement.classList.add("auto-height")}})):console.log("State is not defined")}))}}})},oe=n(10),ie=n.n(oe),ue=n(5),ce=n.n(ue),de=function(e){var t=e.data,n=e.position;return u.a.createElement("div",{className:ce()("custom-legend",{right:"right"===n})},t.map((function(e,t){return u.a.createElement("div",{className:ce()("legend-item",{label:e.label}),key:""+t},!e.label&&e.colour?u.a.createElement("span",{className:"badge",style:{backgroundColor:e.colour}}):null,u.a.createElement("span",{className:"text"},e.caption))})))};de.defaultProps={data:[]};var se=de,le={"University, College Or Other Teaching Institution, Research Institute Or Think?Tank":"University, other teaching institution, research institute or think-tank"},fe=function(e,t,n){void 0===n&&(n="right"),Object(c.render)(Object(i.createElement)(se,{data:t,position:n}),e)},pe=function(e,t,n,r,a){r.push({caption:"Breakdown",label:!0}),r=r.concat(me(t,n,a)),fe(e,r)},me=function(e,t,n){return e.children.sort((function(e,t){return e.value-t.value})).reverse().map((function(e){if(e.value){var r=w(e.value/t.value*100),a=ie()(n).lighten(.2);return{caption:e.name+" | US$"+w(e.value)+" million - "+r+"%",colour:a.hex()}}return{caption:e.name,colour:"#333"}}))},he=function(e,t,n,r,a){!function(e,t,n){if(!t.length)return e.classList.add("invisible"),void G(n);e.classList.remove("invisible"),$(n);var r=window.echarts.init(e),a=j.rainbow,o=t.map((function(e,t){return{caption:e.name,colour:a[t]}})),i=function(){return fe(n,o)},u={tooltip:{show:!0,trigger:"item",formatter:function(e){if(!e.name)return"Go Back";if(e.treePathInfo.length>1){var t=e.treePathInfo[e.treePathInfo.length-2],n=w(e.value/t.value*100);return e.name+" | US$"+w(e.value)+" million - "+n+"%"}return e.name+" | US$"+w(e.value)+" million"}},xAxis:{show:!1},yAxis:{show:!1},series:{type:"sunburst",nodeClick:!1,emphasis:{focus:"descendant"},sort:void 0,data:t.map((function(e,t){return e.itemStyle={color:a[t]},e})),radius:["20%","100%"],label:{show:!1},levels:[{itemStyle:{color:"#333",opacity:.7},r:120},{r:145},{radius:[150,170]}]},toolbox:{showTitle:!1,feature:{saveAsImage:{show:!1}}}};r.setOption(Object.assign({},x()(U,u),{color:a})),i(),r.on("mouseover",(function(e){if(e.name){var r=o.filter((function(t){return e.treePathInfo.find((function(e){return e.name===t.caption}))}));if(e.treePathInfo.length>1){var a=t.find((function(t){return t.name===e.name}));if(a&&a.children)return void pe(n,a,e,r,e.color);var i=e.treePathInfo[e.treePathInfo.length-2],u=t.find((function(e){return e.name===i.name}));u&&u.children?pe(n,u,i,r,r[0].colour):fe(n,r)}}})),r.on("mouseout",(function(){i()}))}(e,function(e,t){var n=e.map((function(e){var n;return Object.assign({},e,((n={})[t.parent]=le[e[t.parent]]||e[t.parent],n[t.child]=le[e[t.child]]||e[t.child],n))}));return n.map((function(e){var n;return e[t.value]?Object.assign({},e,((n={})[t.value]=w(e[t.value]),n)):e})).reduce((function(e,n){return e.includes(n[t.parent])?e:e.concat(n[t.parent])}),[]).map((function(e){return function(e,t,n,r){var a={name:t},o=e.filter((function(e){return e[n.parent]===("string"==typeof t?t:t[n.parent])}));if(o.length)a.children=o.map((function(e){return{name:e[n.child],value:e[n.value]}}));else if("string"==typeof t){var i=e.find((function(e){return e[n.parent]===t}));a.value=i[n.value]}else a.value=t[n.value];return r&&(a.itemStyle={color:r}),a}(n,e,t)}))}(S(y(t,n||"United States","donor_name"),r,"purpose_name"),{parent:"oecd_aggregated_channel",child:"oecd_channel_parent_name",value:"usd_disbursement_deflated_Sum"}),a)},ve=function(e){window.DICharts.handler.addChart({className:e,d3:{onAdd:function(e){Array.prototype.forEach.call(e,(function(e){var t,n,r=new window.DICharts.Chart(e.parentElement),a=N(e),o="United States";if(window.DIState){var i=N(e);window.DIState.addListener((function(){r.showLoading();var u=window.DIState.getState,c=u.country,d=u.odaChannels;if((o=c)&&d){if(!t){var s=function(e,t){return e.reduce((function(e,n){var r=n[t];return r&&!e.includes(r)?e.concat(r):e}),[])}(d,"purpose_name");n=s[0],(t=C({wrapper:a,options:s,defaultOption:n,className:"purpose-code-filter",label:"Select purpose code"})).addEventListener("change",(function(t){n=t.target.value,he(e,b(d,"usd_disbursement_deflated_Sum"),o,n,i)}))}he(e,b(d,"usd_disbursement_deflated_Sum"),o,n,i),r.hideLoading(),e.parentElement.classList.add("auto-height")}}))}else console.log("State is not defined")}))}}})},we=function(){var e,t;e=[{url:"https://raw.githubusercontent.com/devinit/di-website-data/main/2022/RH_and_FP_Purpose_code_trends_chart_OECD.csv",state:"dataOne"},{url:"https://raw.githubusercontent.com/devinit/di-website-data/main/2022/donor_by_recip_2019.csv",state:"dataTwo"},{url:"https://raw.githubusercontent.com/devinit/di-website-data/main/2022/RH_FP_aid_type_OECD.csv",state:"odaAidType"},{url:"https://raw.githubusercontent.com/devinit/di-website-data/main/2022/RH_FP_channels_OECD.csv",state:"odaChannels"}],t={country:"United States"},window.DIState&&e.length?(t&&window.DIState.setState(t),e.forEach((function(e){var t=e.url,n=e.state;g(t).then((function(e){var t;window.DIState.setState(((t={})[n]=e||[],t))}))}))):console.log("State is not defined"),A("dicharts--donor-selector"),D("dicharts--table-one"),H("dicharts--chart-one"),q("dicharts--chart-two"),X("dicharts--table-two"),ee("dicharts--table-three"),ae("dicharts--table-four"),ve("dicharts--chart-three")};window.addEventListener("load",(function(){we()}))}},[[11,1,2]]]);