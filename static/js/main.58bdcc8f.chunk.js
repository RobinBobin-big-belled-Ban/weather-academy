(this["webpackJsonpweather-academy"]=this["webpackJsonpweather-academy"]||[]).push([[0],{15:function(e,t,a){e.exports={slide:"styles_slide__f2F4j",slide__image:"styles_slide__image__378Rf",slide__date:"styles_slide__date__2zJmb",slide__temperature:"styles_slide__temperature__2EXMk"}},16:function(e,t,a){e.exports={container:"styles_container__1O7gE",container__date:"styles_container__date__2Zvfo",container__image:"styles_container__image__3kTOi",container__temperature:"styles_container__temperature__1X1g8"}},18:function(e,t,a){e.exports={header:"styles_header__3aske",header__text:"styles_header__text__3r6ig"}},20:function(e,t,a){e.exports={container:"styles_container__UfWpO",footer:"styles_footer__3Ike9",content:"styles_content__26K5d"}},21:function(e,t,a){e.exports={"empty-card":"styles_empty-card__3l_pq","empty-card__image":"styles_empty-card__image__GCqW4","empty-card__text":"styles_empty-card__text__1Qcid"}},25:function(e,t,a){e.exports={select:"styles_select__1HTbq",select__element:"styles_select__element__245dC"}},27:function(e,t,a){e.exports={"sl-container":"styles_sl-container__3AzZl","sl-container__slide":"styles_sl-container__slide__OseG_"}},28:function(e,t,a){e.exports={"spin-wrapper":"styles_spin-wrapper__ijLZB",spinner:"styles_spinner__3U4P_",spin:"styles_spin__2fObO"}},29:function(e,t,a){e.exports={container:"styles_container__2Bxm9",container__title:"styles_container__title__1Aw8V"}},30:function(e,t,a){e.exports={select:"styles_select__39xFu",select__element:"styles_select__element__2jcYA"}},40:function(e,t,a){e.exports={message:"styles_message__2Otic"}},41:function(e,t,a){e.exports={form:"styles_form__3pluX"}},43:function(e,t,a){e.exports={form:"styles_form__3R-D5"}},48:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(17),r=a.n(s),i=(a(48),a(20)),l=a.n(i),o=a(18),d=a.n(o),u=a(1),_=function(e){var t=e.text;return Object(u.jsx)("h1",{className:d.a.header__text,children:t})},j=["Weather","forecast"],m=function(){return Object(u.jsx)("header",{className:d.a.header,children:j.map((function(e,t){return Object(u.jsx)(_,{text:e},t)}))})},f=a(10),b=a(14),p=[{name:"\u0421\u0430\u043c\u0430\u0440\u0430",coordinates:{lat:53.195873,lon:50.100193}},{name:"\u0422\u043e\u043b\u044c\u044f\u0442\u0442\u0438",coordinates:{lat:53.507836,lon:49.420393}},{name:"\u0421\u0430\u0440\u0430\u0442\u043e\u0432",coordinates:{lat:51.533557,lon:46.034257}},{name:"\u041a\u0430\u0437\u0430\u043d\u044c",coordinates:{lat:55.796127,lon:49.106405}},{name:"\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440",coordinates:{lat:45.03547,lon:38.975313}}],O=a(25),h=a.n(O),x=function(e){var t=e.value,a=e.changeHandler;return Object(u.jsxs)("select",{className:h.a.select,value:t,onChange:function(e){var t=e.target.value,n=p.filter((function(e){return e.name===t})),c=Object(f.a)(n,1)[0];a(c)},children:[Object(u.jsx)("option",{hidden:!0,value:"",children:"Select city"}),p.map((function(e){var t=e.name,a=e.coordinates;return Object(u.jsx)("option",Object(b.a)(Object(b.a)({value:t},a),{},{className:h.a.select__element,children:t}),t)}))]})},y=a(82),g=a(78),v=a(80),w=a(76),N=a(77),F=(a(50),a(51),a(15)),S=a.n(F),M=a(81),R=a(19),q=function(e){var t=e.date,a=e.temperature,n=e.icon,c=Object(M.a)(new Date(Object(R.a)(t)),"dd MMMM yyyy"),s="https://openweathermap.org/img/wn/".concat(n,"@2x.png"),r=Object.values(a),i=r.reduce((function(e,t){return e+t}),0)/r.length;return Object(u.jsxs)("section",{className:S.a.slide,children:[Object(u.jsx)("span",{className:S.a.slide__date,children:c}),Object(u.jsx)("img",{src:s,alt:"forecast",className:S.a.slide__image}),Object(u.jsxs)("span",{className:S.a.slide__temperature,children:[i.toFixed(),"\xb0"]})]})},k=a(12),D=k.c,C=a(27),E=a.n(C),T=a(28),W=a.n(T),B=function(){return Object(u.jsx)("div",{className:W.a["spin-wrapper"],children:Object(u.jsx)("div",{className:W.a.spinner})})},H=a(21),P=a.n(H),A=a.p+"static/media/Academy-Weather-bg160.1a743710.svg",J=function(){return Object(u.jsxs)("div",{className:P.a["empty-card"],children:[Object(u.jsx)("img",{className:P.a["empty-card__image"],src:A,alt:"make a choice"}),Object(u.jsx)("span",{className:P.a["empty-card__text"],children:"Fill in all the fields and the weather will be displayed"})]})},U=a(40),V=a.n(U),X=function(){return Object(u.jsx)("div",{className:V.a.message,children:"OOOPS!!Something was going wrong..."})};v.a.use([w.a,N.a]);var Z=function(){var e=D((function(e){return e.sliderSlice})),t=e.daily,a=e.status;return"failed"===a?Object(u.jsx)(X,{}):"loading"===a?Object(u.jsx)(B,{}):t.length?Object(u.jsx)("div",{className:E.a["sl-container"],children:Object(u.jsx)(y.a,{spaceBetween:16,slidesPerView:"auto",navigation:!0,breakpoints:{819:{slidesPerView:3}},children:t.map((function(e){var t=e.dt,a=e.weather,n=e.temp;return Object(u.jsx)(g.a,{className:E.a["sl-container__slide"],children:Object(u.jsx)(q,{date:t,temperature:n,icon:a[0].icon})},t)}))})}):Object(u.jsx)(J,{})},z=a(29),G=a.n(z),I=function(e){var t=e.title,a=e.children;return Object(u.jsxs)("article",{className:G.a.container,children:[Object(u.jsx)("h2",{className:G.a.container__title,children:t}),a]})},L=a(41),K=a.n(L),Q=a(11),Y=a(42),$=a.n(Y).a.create({baseURL:"https://api.openweathermap.org/data/2.5/"});$.interceptors.request.use((function(e){return e.params={appid:"c48a2c5fe5245de7b391151f61632b6e",units:"metric",exclude:"hourly,minutely,alerts"},e}),(function(e){console.log(e)})),$.interceptors.response.use((function(e){return e.data}),(function(e){console.log(e)}));var ee=Object(Q.b)("slider/getSevenDaysForecast",(function(e,t){var a=t.dispatch,n=e.lat,c=e.lon;$.get("onecall?lat=".concat(n,"&lon=").concat(c)).then((function(e){a(ne(e)),a(ce())})).catch((function(){return a(se())}))})),te=Object(Q.c)({name:"slider",initialState:{daily:[],status:"idle"},reducers:{dailyForecast:function(e,t){e.daily=t.payload.daily},fullFilledRequest:function(e){e.status="idle"},rejectedRequest:function(e){e.status="failed"}},extraReducers:function(e){e.addCase(ee.pending,(function(e){e.status="loading"}))}}),ae=te.actions,ne=ae.dailyForecast,ce=ae.fullFilledRequest,se=ae.rejectedRequest,re=te.reducer,ie=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(),r=Object(f.a)(s,2),i=r[0],l=r[1],o=Object(k.b)();Object(n.useEffect)((function(){a&&i&&o(ee(i))}),[a]);return Object(u.jsxs)(I,{title:"7 Days Forecast",children:[Object(u.jsx)("form",{className:K.a.form,children:Object(u.jsx)(x,{value:a,changeHandler:function(e){var t=e.name,a=e.coordinates;c(t),l(a)}})}),Object(u.jsx)(Z,{})]})},le=a(43),oe=a.n(le),de=a(16),ue=a.n(de),_e=function(){var e=D((function(e){return e.pastTimeSlice})),t=e.currentForecast,a=e.status;if("failed"===a)return Object(u.jsx)(X,{});if("loading"===a)return Object(u.jsx)(B,{});if(!t)return Object(u.jsx)(J,{});var n=t.dt,c=t.temp,s=t.weather[0].icon,r=Object(M.a)(new Date(Object(R.a)(n)),"dd MMMM yyyy"),i="https://openweathermap.org/img/wn/".concat(s,"@2x.png");return Object(u.jsxs)("section",{className:ue.a.container,children:[Object(u.jsx)("span",{className:ue.a.container__date,children:r}),Object(u.jsx)("img",{src:i,alt:"forecast",className:ue.a.container__image}),Object(u.jsxs)("span",{className:ue.a.container__temperature,children:[c.toFixed(),"\xb0"]})]})},je=a(30),me=a.n(je),fe=a(79),be=a(83),pe=a(84),Oe=function(e){var t=e.value,a=e.changeDate,n=[0,1,2,3,4].map((function(e){var t=Object(fe.a)(Object(be.a)(new Date,e));return Object(pe.a)(t)}));return Object(u.jsxs)("select",{className:me.a.select,value:t,onChange:function(e){a(e.target.value)},children:[Object(u.jsx)("option",{hidden:!0,value:"",children:"Select date"}),n.map((function(e){return Object(u.jsx)("option",{value:e,className:me.a.select__element,children:Object(M.a)(Object(R.a)(e),"dd-MMMM-yyyy")},e)}))]})},he=Object(Q.b)("pastTime/getHistoryForecast",(function(e,t){var a=t.dispatch,n=e.date,c=e.lon,s=e.lat;$.get("onecall/timemachine?lat=".concat(s,"&lon=").concat(c,"&dt=").concat(n)).then((function(e){a(ve(e)),a(we())})).catch((function(){a(Ne())}))})),xe=Object(Q.c)({name:"pastTime",initialState:{currentForecast:null,status:"idle"},reducers:{historyForecast:function(e,t){var a=t.payload.hourly;e.currentForecast=a[12]},fullfilledRequest:function(e){e.status="idle"},rejectedRequest:function(e){e.status="failed"}},extraReducers:function(e){e.addCase(he.pending,(function(e){e.status="loading"}))}}),ye=xe.reducer,ge=xe.actions,ve=ge.historyForecast,we=ge.fullfilledRequest,Ne=ge.rejectedRequest,Fe=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(),r=Object(f.a)(s,2),i=r[0],l=r[1],o=Object(n.useState)(""),d=Object(f.a)(o,2),_=d[0],j=d[1],m=Object(k.b)();return Object(n.useEffect)((function(){if(a&&_&&i){var e=Object(b.a)(Object(b.a)({},i),{},{date:+_});m(he(e))}}),[a,_]),Object(u.jsxs)(I,{title:"Forecast for a Date in the Past",children:[Object(u.jsxs)("form",{className:oe.a.form,children:[Object(u.jsx)(x,{value:a,changeHandler:function(e){var t=e.name,a=e.coordinates;c(t),l(a)}}),Object(u.jsx)(Oe,{value:+_,changeDate:function(e){return j(e)}})]}),Object(u.jsx)(_e,{})]})},Se=function(){return Object(n.useEffect)((function(){}),[]),Object(u.jsxs)("div",{className:l.a.container,children:[Object(u.jsx)(m,{}),Object(u.jsxs)("main",{className:l.a.content,children:[Object(u.jsx)(ie,{}),Object(u.jsx)(Fe,{})]}),Object(u.jsx)("footer",{className:l.a.footer,children:"\u0441 \u043b\u044e\u0431\u043e\u0432\u044c\u044e \u043e\u0442 mercury development"})]})},Me=Object(Q.a)({reducer:{sliderSlice:re,pastTimeSlice:ye}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(k.a,{store:Me,children:Object(u.jsx)(Se,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[74,1,2]]]);
//# sourceMappingURL=main.58bdcc8f.chunk.js.map