(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t,a){e.exports=a(320)},159:function(e,t,a){},320:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(146),i=a.n(c),o=(a(159),a(4)),s=a.n(o),u=a(9),l=a(25),m=a(26),p=a(31),d=a(27),h=a(30),f=a(29),g=a(323),E=a(321),v=function(){var e=Object(u.a)(s.a.mark(function e(t){var a,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=8;break}return e.next=6,a.json();case 6:throw n=e.sent,Error(n);case 8:return e.next=10,a.json();case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),y=function(e){return{type:"SET_COORDINATES",latitude:e.latitude,longitude:e.longitude}},w=function(e){return{type:"SET_CITY",city:e}},b=function(e){return{type:"SET_WEATHER",weather:e}},N=function(e){return{type:"SET_ERROR",message:e}},O=function(e){return{type:"TOGGLE_LOADING",isLoading:e}},S=a(40),k=function(e){var t=e.currently,a=t.temperature,n=t.apparentTemperature,r=t.summary,c=e.daily.data.reduce(function(e,t){return e.minTemp=Math.round(Math.min(e.minTemp,t.temperatureLow)),e.maxTemp=Math.round(Math.max(e.maxTemp,t.temperatureHigh)),e},{minTemp:200,maxTemp:-200}),i=c.minTemp,o=c.maxTemp,s=x(e.daily.data),u=s.shift();return{today:Object(S.a)({},u,{summary:r,temperature:Math.round(a),feelsLike:Math.round(n)}),week:s,minTemp:i,maxTemp:o,graphData:j(e.hourly.data.slice(0,24))}},x=function(e){return e.map(function(e){var t=e.summary,a=e.icon,n=e.precipType,r=e.precipProbability,c=e.time,i=e.temperatureLow,o=e.temperatureHigh,s=e.sunriseTime,u=e.sunsetTime,l=e.windSpeed,m=e.windBearing,p=e.humidity;return{summary:t,icon:a,precipType:n,precipProbability:Math.round(100*r)+"%",day:new Date(1e3*c).toDateString().slice(0,3),low:Math.round(i),high:Math.round(o),sunrise:new Date(1e3*s).toLocaleTimeString("en-US").replace(/:\d+/,""),sunset:new Date(1e3*u).toLocaleTimeString("en-US").replace(/:\d+/,""),wind:Math.round(l)+" mph "+T(m),humidity:Math.round(100*p)+"%"}})},T=function(e){switch(Math.round(e/22.5)%16){case 0:return"N";case 1:return"NNE";case 2:return"NE";case 3:return"ENE";case 4:return"E";case 5:return"ESE";case 6:return"SE";case 7:return"SSE";case 8:return"S";case 9:return"SSW";case 10:return"SW";case 11:return"WSW";case 12:return"W";case 13:return"WNW";case 14:return"NW";case 15:return"NNW";default:return}},j=function(e){return[{id:"",data:e.map(function(e){return{x:new Date(1e3*e.time).toLocaleTimeString().replace(/:\d+/,""),y:Math.round(e.temperature)}})}]},L=function(e){var t=e.latitude,a=e.longitude;return function(){var e=Object(u.a)(s.a.mark(function e(n){var r,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="http://weekly-weather.herokuapp.com/api/v1/weather/".concat(t,"/").concat(a),e.next=4,v(r);case 4:c=e.sent,n(b(k(c))),n(N("")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n(N(e.t0.message));case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()},C=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).handleChange=function(t){e.setState({query:t.target.value})},e.handleSubmit=function(){var t=Object(u.a)(s.a.mark(function t(a){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),n=e.state.query,e.props.forwardGeocode(n),e.setState({query:""});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.state={query:""},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit,className:"Search"},r.a.createElement("input",{value:this.state.query,onChange:this.handleChange,placeholder:"search cities",className:"Search--input"}))}}]),t}(n.Component),W=Object(f.b)(null,function(e){return{forwardGeocode:function(t){return e((a=t,function(){var e=Object(u.a)(s.a.mark(function e(t){var n,r,c,i,o,u,l,m,p;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(O(!0)),e.prev=1,n=a.replace(/\s/g,"+").replace(/,/g,"%2C"),r="http://weekly-weather.herokuapp.com/api/v1/forwardgeocode/".concat(n),e.next=6,v(r);case 6:c=e.sent,i=c[0].geometry,o=i.lat,u=i.lng,l=c[0].components,m=l.city,p=l.state_code,t(w("".concat(m,", ").concat(p))),t(y({latitude:o,longitude:u})),t(L({latitude:o,longitude:u})),t(N("")),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),t(N(e.t0.message));case 18:t(O(!1));case 19:case"end":return e.stop()}},e,null,[[1,15]])}));return function(t){return e.apply(this,arguments)}}()));var a}}})(C),D=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).handleClick=function(){e.setState({isExpanded:!e.state.isExpanded})},e.state={isExpanded:!1},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.isExpanded,t=this.props,a=t.min,n=t.max,c=t.day,i=t.summary,o=t.icon,s=t.precipType,u=t.precipProbability,l=t.low,m=t.high,p=t.sunrise,d=t.sunset,h=t.wind,f=t.humidity,g={width:100*(m-l)/(n-a)+"%",marginLeft:100*(l-a)/(n-a)+"%"};return r.a.createElement("div",{className:"ForecastBar"},r.a.createElement("div",{className:"ForecastBar--bar-container"},r.a.createElement("span",{className:o+" small-icon"}),r.a.createElement("span",{className:"day"},c),r.a.createElement("span",{className:"bar-container"},r.a.createElement("span",{className:"bar",style:g},r.a.createElement("span",{className:"low"},l,"\xb0"),r.a.createElement("span",{className:"high"},m,"\xb0"))),r.a.createElement("button",{className:"ForecastBar--button",onClick:this.handleClick},e?"--":"+")),e&&r.a.createElement("article",{className:"article article--expanded"},r.a.createElement("header",{className:"article--header"},r.a.createElement("h2",{className:"h2"},r.a.createElement("div",{className:o}),i),r.a.createElement("span",null,"Chance of ",s,": ",u)),r.a.createElement("div",{className:"article--div"},r.a.createElement("p",{className:"p"},"Low: ",l,"\xb0"),r.a.createElement("p",{className:"p"},"Sunrise: ",p),r.a.createElement("p",{className:"p"},"Wind: ",h),r.a.createElement("p",{className:"p"},"High: ",m,"\xb0"),r.a.createElement("p",{className:"p"},"Sunset: ",d),r.a.createElement("p",{className:"p"},"Humidity: ",f))))}}]),t}(n.Component),M=a(148),R=function(e){var t=e.data,a=e.low,n=e.high,c=Math.min(0,a),i=n+20;return r.a.createElement("div",{className:"Graph"},r.a.createElement("h3",{className:"h3"},"24 Hour Forecast"),r.a.createElement(M.ResponsiveLine,{data:t,margin:{top:16,right:24,bottom:64,left:48},xScale:{type:"point"},yScale:{type:"linear",stacked:!0,min:c,max:i},curve:"monotoneX",axisTop:null,axisRight:null,axisBottom:{orient:"bottom",tickSize:5,tickPadding:5,tickRotation:-60,legendOffset:36,legendPosition:"middle",tickValues:0},axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"Fahrenheit",legendOffset:-32,legendPosition:"middle"},enableGridX:!1,colors:["#4285f4"],dotSize:10,dotColor:"inherit:darker(0.3)",dotBorderWidth:2,dotBorderColor:"#ffffff",enableDotLabel:!0,dotLabel:"y",dotLabelYOffset:-12,animate:!0,motionStiffness:90,motionDamping:15,isInteractive:!1}))},G=function(e){var t=e.city,a=e.weather,n=a.today,c=a.week,i=a.minTemp,o=a.maxTemp,s=a.graphData,u=n.temperature,l=n.feelsLike,m=n.summary,p=n.icon,d=n.precipType,h=n.precipProbability,f=n.low,g=n.high,E=n.sunrise,v=n.sunset,y=n.wind,w=n.humidity;return r.a.createElement("main",{className:"WeatherContainer"},r.a.createElement("article",{className:"article"},r.a.createElement("header",{className:"article--header"},r.a.createElement("h2",{className:"h2"},r.a.createElement("div",{className:p}),u,"\xb0 and ",m," in ",t),r.a.createElement("span",{className:"header--span--feels"},"Feels like: ",l,"\xb0"),r.a.createElement("span",{className:"header--span--precip"},"Chance of ",d,": ",h)),r.a.createElement("div",{className:"article--div"},r.a.createElement("p",{className:"p"},"Low: ",f,"\xb0"),r.a.createElement("p",{className:"p"},"Sunrise: ",E),r.a.createElement("p",{className:"p"},"Wind: ",y),r.a.createElement("p",{className:"p"},"High: ",g,"\xb0"),r.a.createElement("p",{className:"p"},"Sunset: ",v),r.a.createElement("p",{className:"p"},"Humidity: ",w))),r.a.createElement(R,{data:s,low:f,high:g}),r.a.createElement("section",{className:"section"},c.map(function(e,t){return r.a.createElement(D,Object.assign({key:t,min:i,max:o},e))})))},P=function(e){var t=e.latitude,a=e.longitude;return function(){var e=Object(u.a)(s.a.mark(function e(n){var r,c,i,o,u;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="http://weekly-weather.herokuapp.com/api/v1/reversegeocode/".concat(t,"/").concat(a),e.next=4,v(r);case 4:c=e.sent,i=c[0].components,o=i.city,u=i.state_code,n(w("".concat(o,", ").concat(u))),n(N("")),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),n(N(e.t0.message));case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}()},_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).getGeolocation=function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(){var e=Object(u.a)(s.a.mark(function e(t){var n,r,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.coords;case 2:n=e.sent,r=n.latitude,c=n.longitude,a.props.getWeatherByGeolocation({latitude:r,longitude:c});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),function(){return a.props.getUserIP()}):a.props.getUserIP()},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getGeolocation()}},{key:"render",value:function(){var e=this.props,t=e.userLocation,a=e.weather,n=e.location,c=e.error,i=e.isLoading,o=t.city,s=o.replace(/\s/g,""),u=!n.pathname.includes(s)&&o;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App--header"},r.a.createElement("h1",{className:"h1"},"Weekly Weather")),r.a.createElement(W,null),!i&&r.a.createElement("div",null,u&&r.a.createElement(g.a,{to:s}),a.today&&!c&&r.a.createElement(G,{city:o,weather:a}),c&&r.a.createElement("h2",{className:"h2--error"},"No results found")),i&&r.a.createElement("h2",{className:"h2--loading"},"Loading..."))}}]),t}(n.Component),I=Object(E.a)(Object(f.b)(function(e){return{userLocation:e.location,weather:e.weather,error:e.error,isLoading:e.isLoading}},function(e){return{getUserIP:function(){return e(function(){var e=Object(u.a)(s.a.mark(function e(t){var a,n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(O(!0)),e.prev=1,e.next=5,v("http://ip-api.com/json");case 5:a=e.sent,n=a.lat,r=a.lon,t(y({latitude:n,longitude:r})),t(P({latitude:n,longitude:r})),t(L({latitude:n,longitude:r})),t(N("")),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),t(N(e.t0.message));case 17:t(O(!1));case 18:case"end":return e.stop()}},e,null,[[1,14]])}));return function(t){return e.apply(this,arguments)}}())},getWeatherByGeolocation:function(t){var a=t.latitude,n=t.longitude;return e(function(e){var t=e.latitude,a=e.longitude;return function(e){e(O(!0));try{e(y({latitude:t,longitude:a})),e(P({latitude:t,longitude:a})),e(L({latitude:t,longitude:a})),e(N(""))}catch(n){e(N(n.message))}e(O(!1))}}({latitude:a,longitude:n}))}}})(_)),B=a(322),A=a(20),H=a(151),F=a(152),q={latitude:null,longitude:null,city:""},U=Object(A.combineReducers)({location:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COORDINATES":var a=t.latitude,n=t.longitude;return Object(S.a)({},e,{latitude:a,longitude:n});case"SET_CITY":var r=t.city;return Object(S.a)({},e,{city:r});default:return e}},weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WEATHER":return t.weather;default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ERROR":return t.message;default:return e}},isLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_LOADING":return t.isLoading;default:return e}}}),z=Object(H.composeWithDevTools)(Object(A.applyMiddleware)(F.a)),Y=Object(A.createStore)(U,z),J=r.a.createElement(f.a,{store:Y},r.a.createElement(B.a,null,r.a.createElement(I,null)));i.a.render(J,document.getElementById("root"))}},[[154,1,2]]]);
//# sourceMappingURL=main.35817a3e.chunk.js.map