(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(48)},26:function(e,t,a){},28:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(17),r=a.n(o),c=(a(26),a(10)),i=a.n(c),u=a(18),m=a(19),s=a(2),p=a(3),E=a(5),v=a(4),h=a(7),d=a(6),g=(a(28),a(8)),N=a.n(g),f=function(e){function t(){return Object(s.a)(this,t),Object(E.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("hr",{className:"top-line"})}}]),t}(n.Component),R=function(e){function t(){return Object(s.a)(this,t),Object(E.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("img",{id:"coins",src:"https://media.giphy.com/media/l3mZaGv4Krokd3GM0/giphy.gif"})}}]),t}(n.Component),C="https://www.countryflags.io/",D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(E.a)(this,Object(v.a)(t).call(this,e))).state={from:"",to:"",amount:"",countries:{}},a.getCurrencyData=a.getCurrencyData.bind(Object(h.a)(a)),a.handleInputChange=a.handleInputChange.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"handleInputChange",value:function(e){this.setState(Object(m.a)({},e.currentTarget.name,e.currentTarget.value))}},{key:"getCurrencyData",value:function(){var e=Object(u.a)(i.a.mark(function e(t){var a,n,l,o,r,c,u,m,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=this.state.amount,n=this.state.from.toUpperCase(),l=n.substring(0,2),o=this.state.to.toUpperCase(),r=o.substring(0,2),c="https://api.exchangeratesapi.io/latest?symbols=",e.next=9,N()("".concat(c).concat(n));case 9:return u=e.sent,e.next=12,N()("".concat(c).concat(o));case 12:return m=e.sent,e.next=15,N()("".concat(c));case 15:s=e.sent,console.log(u.data.rates[n]),console.log(m.data.rates[o]),this.setState({flagOn:!0,countries:s.data.rates,resultFrom:u.data.rates[n],resultTo:m.data.rates[o],result:m.data.rates[o]/u.data.rates[n]*a,resultRounded:Math.floor(m.data.rates[o]/u.data.rates[n]*a),flagFrom:l,flagTo:r});case 19:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(f,null),l.a.createElement("form",{onSubmit:this.getCurrencyData},l.a.createElement("div",{className:"animation"},l.a.createElement(R,null)),l.a.createElement("div",{className:"amount"},l.a.createElement("h1",null,"Amount")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{className:"amount-input",type:"text",name:"amount",value:this.state.amount,id:"amount",onChange:this.handleInputChange})),l.a.createElement("div",{className:"result"},l.a.createElement("input",{className:"result-submit",type:"submit",value:"$ Result $"})),l.a.createElement("div",{className:"result-label"},l.a.createElement("h2",{className:"result-text"},this.state.result>1?this.state.resultRounded:this.state.result)),l.a.createElement("div",{className:"from-and-to-input"},l.a.createElement("container",null,l.a.createElement("h2",null,"Country From"),l.a.createElement("div",{className:"flag-from-div"},l.a.createElement("select",{className:"from",type:"text",name:"from",value:this.state.from,onChange:this.handleInputChange,id:"from"},l.a.createElement("option",{value:" "},"   "),l.a.createElement("option",{value:"USD"},"USD"),l.a.createElement("option",{value:"JPY"},"JPY"),l.a.createElement("option",{value:"BGN"},"BGN"),l.a.createElement("option",{value:"CZK"},"CZK"),l.a.createElement("option",{value:"GBP"},"GBP"),l.a.createElement("option",{value:"DKK"},"DKK"),l.a.createElement("option",{value:"HUF"},"HUF"),l.a.createElement("option",{value:"PLN"},"PLN"),l.a.createElement("option",{value:"RON"},"RON"),l.a.createElement("option",{value:"SEK"},"SEK"),l.a.createElement("option",{value:"CHF"},"CHF"),l.a.createElement("option",{value:"ISK"},"ISK"),l.a.createElement("option",{value:"NOK"},"NOK"),l.a.createElement("option",{value:"HRK"},"HRK"),l.a.createElement("option",{value:"RUB"},"RUB"),l.a.createElement("option",{value:"TRY"},"TRY"),l.a.createElement("option",{value:"AUD"},"AUD"),l.a.createElement("option",{value:"BRL"},"BRL"),l.a.createElement("option",{value:"CAD"},"CAD"),l.a.createElement("option",{value:"CNY"},"CNY"),l.a.createElement("option",{value:"HKD"},"HKD"),l.a.createElement("option",{value:"IDR"},"IDR"),l.a.createElement("option",{value:"ILS"},"ILS"),l.a.createElement("option",{value:"INR"},"INR"),l.a.createElement("option",{value:"KRW"},"KRW"),l.a.createElement("option",{value:"MXN"},"MXN"),l.a.createElement("option",{value:"MYR"},"MYR"),l.a.createElement("option",{value:"NZD"},"NZD"),l.a.createElement("option",{value:"PHP"},"PHP"),l.a.createElement("option",{value:"SGD"},"SGD"),l.a.createElement("option",{value:"THB"},"THB"),l.a.createElement("option",{value:"ZAR"},"ZAR"))),l.a.createElement("div",{className:"flag-from-img"},l.a.createElement("img",{class:"flag-from",src:this.state.flagOn?"".concat(C+this.state.flagFrom,"/shiny/64.png"):null,onChange:this.getCurrencyData}))),l.a.createElement("container",null,l.a.createElement("h2",null,"Country To"),l.a.createElement("div",{className:"flag-to-div"},l.a.createElement("select",{className:"to",type:"text",name:"to",value:this.state.to,onChange:this.handleInputChange,id:"to"},l.a.createElement("option",{value:" "},"   "),l.a.createElement("option",{value:"USD"},"USD"),l.a.createElement("option",{value:"JPY"},"JPY"),l.a.createElement("option",{value:"BGN"},"BGN"),l.a.createElement("option",{value:"CZK"},"CZK"),l.a.createElement("option",{value:"DKK"},"DKK"),l.a.createElement("option",{value:"GBP"},"GBP"),l.a.createElement("option",{value:"HUF"},"HUF"),l.a.createElement("option",{value:"PLN"},"PLN"),l.a.createElement("option",{value:"RON"},"RON"),l.a.createElement("option",{value:"SEK"},"SEK"),l.a.createElement("option",{value:"CHF"},"CHF"),l.a.createElement("option",{value:"ISK"},"ISK"),l.a.createElement("option",{value:"NOK"},"NOK"),l.a.createElement("option",{value:"HRK"},"HRK"),l.a.createElement("option",{value:"RUB"},"RUB"),l.a.createElement("option",{value:"TRY"},"TRY"),l.a.createElement("option",{value:"AUD"},"AUD"),l.a.createElement("option",{value:"BRL"},"BRL"),l.a.createElement("option",{value:"CAD"},"CAD"),l.a.createElement("option",{value:"CNY"},"CNY"),l.a.createElement("option",{value:"HKD"},"HKD"),l.a.createElement("option",{value:"IDR"},"IDR"),l.a.createElement("option",{value:"ILS"},"ILS"),l.a.createElement("option",{value:"INR"},"INR"),l.a.createElement("option",{value:"KRW"},"KRW"),l.a.createElement("option",{value:"MXN"},"MXN"),l.a.createElement("option",{value:"MYR"},"MYR"),l.a.createElement("option",{value:"NZD"},"NZD"),l.a.createElement("option",{value:"PHP"},"PHP"),l.a.createElement("option",{value:"SGD"},"SGD"),l.a.createElement("option",{value:"THB"},"THB"),l.a.createElement("option",{value:"ZAR"},"ZAR"))),l.a.createElement("div",{className:"flag-to-img"},l.a.createElement("img",{className:"flag-to",src:this.state.flagOn?"".concat(C+this.state.flagTo,"/shiny/64.png"):null,onChange:this.getCurrencyData}))))),l.a.createElement(f,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.2409e430.chunk.js.map