(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);n(9);var a=n(6),r=n(2),o=function(){function e(){this.id=Math.random(),this.state={},this.listeners=[],Object(r.d)(this,{state:r.e,setState:r.a,getState:r.c})}var t=e.prototype;return t.setState=function(e,t){void 0===t&&(t=!0),this.state=t?Object.assign({},this.state,e):e},t.addListener=function(e){return this.listeners=this.listeners.concat(Object(r.b)(e)),this.listeners.length-1},t.removeListener=function(e){e<this.listeners.length&&this.listeners[e]&&(this.listeners[e](),this.listeners[e]=null)},t.resetListeners=function(){this.listeners=[]},Object(a.a)(e,[{key:"getState",get:function(){return this.state}}]),e}();window.DIState=new o;n(11);var i=n(7);function c(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var s=function(e,t){void 0===t&&(t="");var n=Number(e);return isNaN(n)?t:new Intl.NumberFormat("en-IN",{maximumFractionDigits:2}).format(n)},d=function(e){return new Promise((function(t){Object(i.parse)(e,{download:!0,header:!0,complete:function(e){var n=e.data;return t(n)}})}))},l=function(e,t,n){return e.filter((function(e){return e[n]===t}))},f=function(e,t,n){return e.filter((function(e){return t.includes(e[n])}))},p=function(e){for(var t,n=e[1]-e[0]+1,a=[],r=c(Array(n).keys());!(t=r()).done;){var o=t.value;a.push(o)}return a.map((function(t){return e[0]+t}))},m=function(e,t,n){return t.reduce((function(t,a){var r=e.filter((function(e){return""+e.year==""+a})).reduce((function(e,t){return e+Number(t[n]||0)}),0);return t.concat(r)}),[])},h=function(e,t){return e.map((function(e){return Object.assign({},e,{year:Number(e[t])})}))},v="Reporting Organisation Narrative",w=["Reproductive health care","Family planning"],b=[2019,2021],g=n(3),y=n.n(g);var S={rainbow:["#e84439","#eb642b","#f49b21","#109e68","#0089cc","#893f90","#c2135b","#f8c1b2","#f6bb9d","#fccc8e","#92cba9","#88bae5","#c189bb","#e4819b"],default:["#6c120a","#a21e25","#cd2b2a","#dc372d","#ec6250","#f6b0a0","#fbd7cb","#fce3dc"],sunflower:["#7d4712","#ba6b15","#df8000","#f7a838","#fac47e","#fedcab","#fee7c1","#feedd4"],marigold:["#7a2e05","#ac4622","#cb5730","#ee7644","#f4a57c","#facbad","#fcdbbf","#fde5d4"],rose:["#65093d","#8d0e56","#9f1459","#d12568","#e05c86","#f3a5b6","#f6b8c1","#f9cdd0"],lavendar:["#42184c","#632572","#732c85","#994d98","#af73ae","#cb98c4","#deb5d6","#ebcfe5"],bluebell:["#0a3a64","#00538e","#1060a3","#4397d3","#77adde","#a3c7eb","#bcd4f0","#d3e0f4"],leaf:["#08492f","#005b3e","#00694a","#3b8c62","#74bf93","#a2d1b0","#b1d8bb","#c5e1cb"]},D={legend:{top:10,textStyle:{fontFamily:"Geomanist Regular,sans-serif"}},tooltip:{trigger:"axis",textStyle:{fontFamily:"Geomanist Regular,sans-serif"},axisPointer:{type:"none"}},toolbox:{showTitle:!1,feature:{saveAsImage:{show:!1,title:"Save as image",pixelRatio:2}},right:20,tooltip:{show:!0,textStyle:{fontFamily:"Geomanist Regular,sans-serif",formatter:function(e){return"<div>"+e.title+"</div>"}}}},color:S.rainbow,xAxis:{axisLabel:{fontFamily:"Geomanist Regular,sans-serif",fontSize:13},splitLine:{show:!1}},yAxis:{axisLabel:{fontFamily:"Geomanist Regular,sans-serif",fontSize:13},splitLine:{show:!1}},axisPointer:{type:"none"},grid:{top:10}},E=n(0),N=n.n(E),L=n(1),I=N.a.createElement("div",{className:"no-data"},"No Data"),A=function(){return I},C=function(e,t){void 0===t&&(t=!0),t?e.classList.remove("invisible"):e.classList.add("invisible")},O=function(e){e.classList.add("no-data--wrapper"),Object(L.unmountComponentAtNode)(e),Object(L.render)(Object(E.createElement)(A),e)},x=function(e){e.classList.remove("no-data--wrapper"),Object(L.unmountComponentAtNode)(e)},j=function(e){var t,n=document.createElement("div");return(t=n.classList).add.apply(t,["spotlight-banner","data-selector--wrapper"]),e.parentElement.insertBefore(n,e),n},F=function(e,t){var n=document.createElement("option");n.value="string"==typeof t?t:t.value,n.text="string"==typeof t?t:t.label,e.appendChild(n)},U=function(e){var t,n=e.wrapper,a=e.options,r=e.defaultOption,o=e.allItemsLabel,i=e.className,c=e.label,u=document.createElement("select");if((t=u.classList).add.apply(t,["data-selector","js-plotly-chart-data-selector",i]),o&&F(u,{label:o,value:"*"}),a.forEach((function(e){return F(u,e)})),u.classList.add("data-selector--active"),r&&(u.value=r),c){var s=document.createElement("label");s.innerHTML=c;var d=document.createElement("div");d.classList.add("labelled-data-selector--wrapper"),d.appendChild(s),d.appendChild(u),n.appendChild(d)}else n.appendChild(u);return u},T=function(e,t){var n,a=Object(r.f)(e).filter((function(e){return e.purpose_name===t&&e.year>=2019&&e.year<=2021})).map((function(e){return{year:e.year,value:e.x_transaction_value_usd_m_Sum}}));return n={},a.forEach((function(e){n[e.year]?n[e.year]=Object.assign({},n[e.year],{value:(parseFloat(e.value?e.value:0)+parseFloat(n[e.year].value?n[e.year].value:0)).toFixed(3)}):n[e.year]=e})),Object.values(n).map((function(e){return e.value}))},k=function(e,t){return w.map((function(t){return{name:t,type:"bar",stack:"oda",tooltip:{valueFormatter:function(e){return"US$"+s(e)+" million"}},data:T(e,t)}})).map((function(e,t,n){return t===n.length-1?Object.assign({},e,{label:{normal:{show:!0,position:"top",formatter:function(e){var t=n.reduce((function(t,n){var a=n.data[e.dataIndex];return t+parseFloat(a||0)}),0);return s(t)},color:"#000000"}}}):e}))},_=function(e){window.DICharts.handler.addChart({className:e,echarts:{onAdd:function(e){Array.prototype.forEach.call(e,(function(e){var t=new window.DICharts.Chart(e.parentElement);t.showLoading();var n=j(e);window.DIState?window.DIState.addListener((function(){t.showLoading();var a=window.DIState.getState,r=a.country,o=a.dataOne;if(r&&o){var i=f(l(o,r||"US",v),w,"purpose_name");!function(e,t,n){if(!n.length)return C(e,!1),void O(t);C(e),x(t);var a=window.echarts.init(e),r=p(b),o=y()(D,{legend:{show:!0,selectedMode:!1},xAxis:{type:"category",data:r},yAxis:{type:"value",name:"USD$ millions (constant 2019 prices)",nameLocation:"middle",nameGap:50},grid:{top:60},series:k(n)});o.color=["#e84439","#f8c1b2"].concat(o.color),a.setOption(o)}(e,n,i),t.hideLoading()}})):(console.log("State is not defined"),t.hideLoading())}))}}})},R=[2019,2021],P=function(e,t){var n=e.reduce((function(e,t){return e.includes(t["Aid Type Di Name"])||e.push(t["Aid Type Di Name"]),e}),[]),a=n.map((function(n){return function(e,t,n,a,r){var o=f(e,[t],r);return m(o,n,a)}(e,n,t,"Usd Disbursement Deflated Sum","Aid Type Di Name")})),r=function(e,t){var n=Object.keys(t).map((function(e){var n;return(n={})[e]=t[e].reduce((function(e,t){return e+t}),0),n}));return e.map((function(e){return e.map((function(e,t){var a=parseFloat(e),r=parseFloat(n[t]?n[t][t]:1);return isNaN(a)||isNaN(r)||0===a||0===a?0:a/r*100}))}))}(a,function(e){for(var t={},n=0;n<e.length;n++)for(var a=e[n],r=0;r<a.length;r++)t[r]=t[r]?t[r]:[],t[r].push(a[r]);return t}(a));return n.map((function(e,t){return{name:e,type:"bar",stack:"oda",data:r[t]}}))},G=function(e,t){var n=s(function(e,t,n){var a=f(e,[t],"Aid Type Di Name");return m(a,n,"Usd Disbursement Deflated Sum")}(e,t.seriesName,[t.name]));return'\n    <div style="margin-bottom:8px;">\n      '+t.marker+t.seriesName+':\n      <span style="font-weight: bold;">\n        '+s(Number(t.value,10))+"% - US$"+n+" million\n      </span>\n    </div>"},M=function(e,t,n){if(!n.length)return C(e,!1),void O(t);C(e),x(t);var a=window.echarts.init(e),r=p(R),o=y()(D,{legend:{show:!0,selectedMode:!1},tooltip:{trigger:"axis",formatter:function(e){return e.map((function(e){return G(n,e)})).join("")}},xAxis:{type:"category",data:r},yAxis:{type:"value",axisLabel:{formatter:"{value}%"},max:100},grid:{top:60},series:P(n,r)});o.color=["#f8c1b2","#f0826d","#e84439","#bc2629","#8f1b13"].concat(o.color),a.setOption(o,{replaceMerge:["series"]})},$=function(e){window.DICharts.handler.addChart({className:e,echarts:{onAdd:function(e){Array.prototype.forEach.call(e,(function(e){var t=new window.DICharts.Chart(e.parentElement);t.showLoading();var n,a=j(e),r=j(e),o="Reproductive health care";window.DIState?window.DIState.addListener((function(){t.showLoading();var i=window.DIState.getState,c=i.country,u=i.dataFour;if(c&&u){var s=h(f(l(u,c||"US","Donor Name"),[o],"Purpose Name"),"Year");n||(n=U({wrapper:a,options:u.reduce((function(e,t){var n=t["Purpose Name"];return n&&!e.includes(n)?e.concat(n):e}),[]),defaultOption:o,className:"purpose-code-filter",label:"Select purpose code"})).addEventListener("change",(function(t){o=t.target.value;var n=window.DIState.getState.country,a=h(f(l(u,n||"US","Donor Name"),[o],"Purpose Name"),"Year");M(e,r,a)})),M(e,r,s),t.hideLoading()}})):(console.log("State is not defined"),t.hideLoading())}))}}})},H=function(e){window.DICharts.handler.addChart({className:e,d3:{onAdd:function(e){Array.prototype.forEach.call(e,(function(e){var t=new window.DICharts.Chart(e.parentElement);t.showLoading();var n=[],a=j(e);window.DIState?window.DIState.addListener((function(){t.showLoading();var r=window.DIState.getState.dataOne;if(r&&r.length&&!n.length){n=r.reduce((function(e,t){var n=t[v];return e.includes(n)?e:e.concat(n)}),[]).filter((function(e){return!!e})).sort((function(e,t){var n=e.toUpperCase(),a=t.toUpperCase();return n<a?-1:n>a?1:0})).map((function(e){return{label:e,value:e}}));var o=U({wrapper:a,options:n,defaultOption:"US",className:"country-filter",label:"Select Donor"});window.DIState&&window.DIState.setState({country:"US"}),o.addEventListener("change",(function(e){var t=e.currentTarget.value;window.DIState.setState({country:t})})),t.hideLoading(),e.parentElement.classList.add("auto-height")}})):console.log("State is not defined")}))}}})},Y=function(e){return N.a.createElement("div",{className:"table-styled"},N.a.createElement("table",null,e.children))},z=function(e){var t=function(e,t){return void 0===t&&(t=!1),e.map((function(e,n){return N.a.createElement("tr",{key:n},e.map((function(e,n){return t?N.a.createElement("th",{key:n},e):N.a.createElement("td",{key:n},e)})))}))};return N.a.createElement(Y,null,N.a.createElement("thead",null,t(e.rows.filter((function(e,t){return 0===t})),!0)),N.a.createElement("tbody",null,t(e.rows.filter((function(e,t){return t>0})))))},J=function(e){window.DICharts.handler.addChart({className:e,d3:{onAdd:function(e){Array.prototype.forEach.call(e,(function(e){var t=new window.DICharts.Chart(e.parentElement);t.showLoading(),window.DIState?window.DIState.addListener((function(){t.showLoading();var n=window.DIState.getState,a=n.country,r=n.dataOne;if(a&&r){var o=f(l(r,a||"US",v),w,"purpose_name");!function(e,t,n){var a=p(b),r=["Purpose code"].concat(a),o=[r].concat(w.map((function(e){var n=f(t,[e],"purpose_name");return r.reduce((function(t,a,r){if(0===r)return t.concat(e);var o=n.filter((function(e){return parseFloat(e.year)===a})).reduce((function(e,t){return e+Number(t.x_transaction_value_usd_m_Sum)}),0);return t.concat(s(o))}),[])})));Object(L.render)(Object(E.createElement)(z,{country:n,rows:o}),e)}(e,o,a||"US"),t.hideLoading(),e.parentElement.classList.add("auto-height")}})):console.log("State is not defined")}))}}})},B=function(e){var t=function(e,t){return void 0===t&&(t=!1),e.map((function(e,n){return N.a.createElement("tr",{key:n},e.map((function(e,n){return t?N.a.createElement("th",{key:n},e):N.a.createElement("td",{key:n},e)})))}))};return N.a.createElement(Y,null,N.a.createElement("thead",null,t(e.rows.filter((function(e,t){return 0===t})),!0)),N.a.createElement("tbody",null,t(e.rows.filter((function(e,t){return t>0})))))},q=function(e,t,n,a){var r=l(t,n||"US","Donor Name"),o=function(e,t){var n=[["Aid Type",2021,"% Total"]],a=e.reduce((function(e,t){return e.includes(t["Aid Type Di Name"])||void 0!==t["Aid Type Di Name"]&""!==t["Aid Type Di Name"]&&e.push(t["Aid Type Di Name"]),e}),[]),r=t.map((function(e){return Number(e["Usd Disbursement Deflated Sum"])})).reduce((function(e,t){return e+t}),0),o=a.map((function(e){var n=t.find((function(t){return t["Aid Type Di Name"]===e})),a=n?n["Usd Disbursement Deflated Sum"]:0,o=(s(a/r*100)||0)+"%";return[e].concat(s(a),[o])}));return n.concat(o,[["Total",s(r),r?"100%":"0%"]])}(t,function(e){return e.filter((function(e){return 2021===Number(e.Year)}))}(f(r,a,"Purpose Name")));Object(L.render)(Object(E.createElement)(B,{country:n,rows:o}),e)},K=function(e){window.DICharts.handler.addChart({className:e,d3:{onAdd:function(e){Array.prototype.forEach.call(e,(function(e){var t,n=new window.DICharts.Chart(e.parentElement);n.showLoading();var a="US";window.DIState?window.DIState.addListener((function(){n.showLoading();var r=window.DIState.getState,o=r.country,i=r.dataFour;if((a=o)&&i){var c=function(e){var t=[];return e.forEach((function(e){t.includes(e["Purpose Name"])||void 0!==e["Purpose Name"]&&t.push(e["Purpose Name"])})),t}(i),u=c[0];if(!t){var s=j(e);(t=U({wrapper:s,options:c,defaultOption:u,className:"purpose-code-filter",label:"Select Purpose Code"})).addEventListener("change",(function(t){u=t.target.value,q(e,i,a||"US",u)}))}q(e,i,a||"US",u),n.hideLoading(),e.parentElement.classList.add("auto-height")}})):console.log("State is not defined")}))}}})},Q=function(e){var t=function(e,t){return void 0===t&&(t=!1),e.map((function(n,a){return N.a.createElement("tr",{key:a},n.map((function(n,r){return t?N.a.createElement("th",{key:r},n):a===e.length-1&&0===r?N.a.createElement("td",{colSpan:2,key:r},n):N.a.createElement("td",{key:r},n)})))}))};return N.a.createElement(Y,null,N.a.createElement("thead",null,t(e.rows.filter((function(e,t){return 0===t})),!0)),N.a.createElement("tbody",null,t(e.rows.filter((function(e,t){return t>0})))))},V=[2019,2021],W=function(e){return e+".0"},X=function(e,t,n,a){var r=p(V),o=["Rank","Recipient"].concat(r),i=e.filter((function(e){return n===e["Code type"]})),c=function(e){for(var t=[].concat(e),n=[],a=V[1],r=0;r<10;r++)if(t.length>=1){var o=t.reduce((function(e,t){return Number(e[W(a)])<Number(t[W(a)])?t:e}));n.push(o);var i=t.indexOf(o);t.splice(i,1)}return{sortedData:n,unsortedData:t}}(l(i,t,"Reporting Organisation Narrative")),u=c.sortedData,d=function(e,t){var n=[];return t.forEach((function(t){var a=e.map((function(e){return parseFloat(Number(e[W(t)]))||0})).reduce((function(e,t){return e+t}),0);n.push(s(a))})),n}(c.unsortedData,r),f=[o].concat(function(e,t){for(var n=[],a=function(a){if(e.length>=1){var r=a+1;n.push([r,e[a].recipient_name].concat(t.map((function(t){return e[a][W(t)]?s(e[a][W(t)],0):0}))))}},r=0;r<e.length;r++)a(r);return n}(u,r)).concat([["All other recipients (sum)"].concat(d)]);Object(L.render)(Object(E.createElement)(Q,{rows:f}),a)},Z=function(e){window.DICharts.handler.addChart({className:e,echarts:{onAdd:function(e){Array.prototype.forEach.call(e,(function(e){var t=new window.DICharts.Chart(e.parentElement);t.showLoading();var n,a=j(e);window.DIState?window.DIState.addListener((function(){t.showLoading();var r=window.DIState.getState,o=r.country,i=r.dataTwo,c=r.purpose;o&&i&&(n||(n=U({wrapper:a,options:i.reduce((function(e,t){var n=t["Code type"];return e.includes(n)?e:e.concat(n)}),[]).filter((function(e){return!!e})).map((function(e){return{label:e,value:e}})),defaultOption:"Reproductive health care and family planning",className:"purpose-code-filter",label:"Select Purpose Code"}),window.DIState.setState({purpose:"Reproductive health care and family planning"}),n.addEventListener("change",(function(e){window.DIState.setState({purpose:e.target.value})}))),X(i,o,c,e),t.hideLoading(),e.parentElement.classList.add("auto-height"))})):(console.log("State is not defined"),t.hideLoading())}))}}})},ee=function(){var e,t;e=[{url:"https://raw.githubusercontent.com/devinit/di-website-data/main/2022/IATI-RHFP-data-v1.csv",state:"dataOne"},{url:"https://raw.githubusercontent.com/devinit/di-website-data/main/2022/IATI-RHFP-data-v2.csv",state:"dataTwo"},{url:"https://raw.githubusercontent.com/devinit/di-website-data/main/2022/iati_rhfp3.csv",state:"dataThree"},{url:"https://raw.githubusercontent.com/devinit/di-website-data/main/2022/iati_rhfp4.csv",state:"dataFour"}],t={country:"US"},window.DIState&&e.length?(t&&window.DIState.setState(t),e.forEach((function(e){var t=e.url,n=e.state;d(t).then((function(e){var t;window.DIState.setState(((t={})[n]=e||[],t))}))}))):console.log("State is not defined"),H("dicharts--donor-selector"),J("dicharts--table-one"),_("dicharts--chart-one"),Z("dicharts--table-two"),K("dicharts--table-three"),$("dicharts--chart-two")};window.addEventListener("load",(function(){ee()}))},8:function(e,t,n){e.exports=n(16)},9:function(e,t,n){}},[[8,1,2]]]);