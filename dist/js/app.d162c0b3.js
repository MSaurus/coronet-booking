(function(e){function t(t){for(var n,o,d=t[0],l=t[1],i=t[2],u=0,f=[];u<d.length;u++)o=d[u],s[o]&&f.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(f.length)f.shift()();return r.push.apply(r,i||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,d=1;d<a.length;d++){var l=a[d];0!==s[l]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},s={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var i=0;i<d.length;i++)t(d[i]);var c=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"05f2":function(e,t,a){"use strict";var n=a("da3a"),s=a.n(n);s.a},"24d9":function(e,t,a){},"277f":function(e,t,a){},"325f":function(e,t,a){"use strict";var n=a("d03f"),s=a.n(n);s.a},"41d3":function(e,t,a){"use strict";var n=a("bb26"),s=a.n(n);s.a},"44d2":function(e,t,a){"use strict";var n=a("d925"),s=a.n(n);s.a},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id="4678"},"5a51":function(e,t,a){"use strict";var n=a("24d9"),s=a.n(n);s.a},"679c":function(e,t,a){},"742a":function(e,t,a){"use strict";var n=a("277f"),s=a.n(n);s.a},b21d:function(e,t,a){"use strict";var n=a("d3f7"),s=a.n(n);s.a},b820:function(e,t,a){"use strict";var n=a("f5ee"),s=a.n(n);s.a},bb26:function(e,t,a){},c4e7:function(e,t,a){"use strict";var n=a("679c"),s=a.n(n);s.a},cd49:function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Nav"),a("router-view")],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"nav"}},[a("Tabs")],1)},d=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("md-tabs",{attrs:{"md-sync-route":""}},[a("md-tab",{attrs:{id:"tab-stora","md-label":"Stora Konferens",to:"/stora"}}),a("md-tab",{attrs:{id:"tab-lilla","md-label":"Lilla Konferens",to:"/lilla"}}),a("md-tab",{attrs:{id:"tab-boka","md-label":"Boka",to:"/boka"}})],1)],1)},i=[],c=n["default"].extend({name:"Tabs"}),u=c,f=(a("325f"),a("2877")),m=Object(f["a"])(u,l,i,!1,null,"0671c55b",null);m.options.__file="Tabs.vue";var b=m.exports,p=n["default"].extend({name:"Nav",components:{Tabs:b}}),j=p,v=(a("41d3"),Object(f["a"])(j,o,d,!1,null,"65ae63fe",null));v.options.__file="Nav.vue";var h=v.exports,k=n["default"].extend({components:{Nav:h}}),_=k,y=(a("742a"),Object(f["a"])(_,s,r,!1,null,"369724ba",null));y.options.__file="App.vue";var g=y.exports,x=a("8c4f"),z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},w=[],C=n["default"].extend({components:{}}),O=C,E=(a("5a51"),Object(f["a"])(O,z,w,!1,null,"b4b29e44",null));E.options.__file="Home.vue";var D=E.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("calendar",{attrs:{url:"https://coronet-booking.herokuapp.com/api/calendars/stora"}})},S=[],T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"md-layout md-alignment-top-center"},[a("div",{staticClass:"md-layout-item md-size-85",attrs:{id:"spinner","md-align":"center"}},[a("div",{attrs:{id:"spinner-container"}},[a("h1",[e._v("Loading calendar..")]),a("md-progress-spinner",{staticClass:"spinner",attrs:{"md-diameter":100,"md-stroke":10,"md-mode":"indeterminate"}})],1)]),a("div",{staticClass:"md-layout-item md-size-85",attrs:{id:"full-calendar"}},[a("full-calendar",{attrs:{events:this.events,config:e.config}})],1)])},$=[],B=a("25cc"),F=a("bc3a"),L=a.n(F),P=n["default"].extend({name:"Calendar",components:{FullCalendar:B["a"]},props:["url"],data(){return{events:[],config:{header:{left:"prev,next today",center:"title",right:"month,agendaWeek,agendaDay"},height:"parent",allDaySlot:!1,slotEventOverlap:!1,timeFormat:"H:mm",slotLabelFormat:"H:mm",editable:!1,droppable:!1,minTime:"00:00:00",maxTime:"24:00:00",buttonText:{today:"Today",month:"Month",week:"Week",day:"Day",list:"List"},eventColor:"#ffffff",eventBorderColor:"#000000",eventTextColor:"#000000",businessHours:{dow:[1,2,3,4,5],start:"07:00",end:"21:00"},nowIndicator:!1,selectable:!1}}},mounted(){setTimeout(()=>{L.a.get(this.url).then(e=>{return e["data"]}).then(e=>{let t=e.response.items;t.forEach(e=>{this.events.push({title:e.summary,start:e.start.date_time,end:e.end.date_time})}),document.getElementById("spinner").style.display="none",document.getElementById("full-calendar").style.filter="none"})},1e3)}}),N=P,H=(a("b820"),Object(f["a"])(N,T,$,!1,null,"2c5f93f0",null));H.options.__file="Calendar.vue";var K=H.exports,A=n["default"].extend({components:{Calendar:K}}),I=A,J=(a("44d2"),Object(f["a"])(I,M,S,!1,null,"103ad2f7",null));J.options.__file="StoraCalendar.vue";var W=J.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("calendar",{attrs:{url:"https://coronet-booking.herokuapp.com/api/calendars/lilla"}})},U=[],G=n["default"].extend({components:{Calendar:K}}),Q=G,R=(a("05f2"),Object(f["a"])(Q,q,U,!1,null,"45df2ad2",null));R.options.__file="LillaCalendar.vue";var V=R.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("book-form")},Y=[],Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"md-layout md-alignment-top-center"},[a("div",{staticClass:"md-layout-item md-size-70",attrs:{"md-align":"center"}},[e._m(0),a("md-field",[a("label",[e._v("Meeting title:")]),a("md-input",{model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),a("md-field",[a("label",[e._v("Meeting description:")]),a("md-textarea",{model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1),a("table",[a("tr",[a("td",[a("p",{staticClass:"field-title"},[e._v("Start date and time:")]),a("md-field",[a("datetime",{staticStyle:{width:"100%"},attrs:{type:"datetime",auto:"","value-zone":"Europe/Stockholm",zone:"Europe/Stockholm"},model:{value:e.startDate,callback:function(t){e.startDate=t},expression:"startDate"}})],1)],1),e._m(1),a("td",[a("p",{staticClass:"field-title"},[e._v("End date and time:")]),a("md-field",[a("datetime",{staticStyle:{width:"100%"},attrs:{type:"datetime",auto:"","value-zone":"Europe/Stockholm",zone:"Europe/Stockholm"},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1)],1)])]),a("md-field",[a("label",{attrs:{for:"room"}},[e._v("Which konference room?")]),a("md-select",{attrs:{name:"room",id:"room"},model:{value:e.room,callback:function(t){e.room=t},expression:"room"}},[a("md-option",{attrs:{value:"stora"}},[e._v("Stora Konferense")]),a("md-option",{attrs:{value:"lilla"}},[e._v("Lilla Konferense")])],1)],1),a("md-chips",{attrs:{"md-placeholder":"Add Attendees.."},model:{value:e.attendees,callback:function(t){e.attendees=t},expression:"attendees"}},[a("div",{staticClass:"md-helper-text"},[e._v("Press enter to add attendee.")])]),a("div",{staticClass:"center"},[a("md-button",{staticClass:"md-dense md-raised md-primary",attrs:{con:""},on:{click:e.submit}},[e._v("Book")])],1)],1)])},ee=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"center"},[a("h1",[e._v("Book a meeting:")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("td",[a("div",{staticClass:"middle-dash"},[a("h2",[e._v("-")])])])}],te=a("859b"),ae=a.n(te),ne=n["default"].extend({name:"BookForm",components:{datetime:te["Datetime"]},data:function(){return{title:"",description:"",startDate:"",endDate:"",room:"",attendees:[]}},methods:{submit:function(){var e=this;setTimeout(function(){var t={title:e.title,attendees:JSON.stringify(e.attendees),description:e.description,"start-datetime":e.startDate,"end-datetime":e.endDate,room:e.room};L.a.post("https://coronet-booking.herokuapp.com/api/calendars/events/new",t).then(function(e){return e["data"]}).then(function(t){!0===t.status&&e.$router.push({name:"stora"})})},1e3)}}}),se=ne,re=(a("c4e7"),Object(f["a"])(se,Z,ee,!1,null,null,null));re.options.__file="Form.vue";var oe=re.exports,de=n["default"].extend({name:"Book",components:{BookForm:oe}}),le=de,ie=(a("b21d"),Object(f["a"])(le,X,Y,!1,null,"1b5a851e",null));ie.options.__file="Book.vue";var ce=ie.exports;n["default"].use(x["a"]);var ue=new x["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:D},{path:"/stora",name:"stora",component:W},{path:"/lilla",name:"lila",component:V},{path:"/boka",name:"boka",component:ce}]}),fe=a("9c30");a("51de"),a("e094"),a("fa91"),a("d355");n["default"].config.productionTip=!1,n["default"].use(fe["MdButton"]),n["default"].use(fe["MdTabs"]),n["default"].use(fe["MdProgress"]),n["default"].use(fe["MdField"]),n["default"].use(fe["MdMenu"]),n["default"].use(fe["MdList"]),n["default"].use(fe["MdDatepicker"]),n["default"].use(ae.a),n["default"].use(fe["MdChips"]),new n["default"]({router:ue,render:function(e){return e(g)}}).$mount("#app")},d03f:function(e,t,a){},d3f7:function(e,t,a){},d925:function(e,t,a){},da3a:function(e,t,a){},f5ee:function(e,t,a){}});
//# sourceMappingURL=app.d162c0b3.js.map