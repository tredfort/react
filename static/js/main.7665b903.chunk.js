(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[1],{138:function(e,t,n){e.exports=n(227)},139:function(e,t,n){},222:function(e,t,n){},227:function(e,t,n){"use strict";n.r(t);n(139),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(18),r={friends:[{id:1,photo:"https://kbimages1-a.akamaihd.net/7cf95f7f-c08c-494b-a68f-c6023e2b3a1e/1200/1200/False/il-vocazzo-1.jpg",name:"Dima"},{id:2,photo:"https://kbimages1-a.akamaihd.net/7cf95f7f-c08c-494b-a68f-c6023e2b3a1e/1200/1200/False/il-vocazzo-1.jpg",name:"Valera"},{id:3,photo:"https://kbimages1-a.akamaihd.net/7cf95f7f-c08c-494b-a68f-c6023e2b3a1e/1200/1200/False/il-vocazzo-1.jpg",name:"Sveta"}]},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;return e},i=n(58),o=n(73),s=n(81),u=n(25),l=n(83),f=n(80),d=n(2),p={initialized:!1},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{initialized:!0});default:return e}},b=Object(a.c)({profilePage:i.b,messagesPage:o.a,sideBar:c,usersPage:s.a,auth:u.a,app:m,form:f.a}),g=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,h=Object(a.e)(b,g(Object(a.a)(l.a)));window.__store__=h;var v=h,E=n(0),O=n.n(E),w=n(44),_=n.n(w),j=n(32),S=n(33),y=n(35),N=n(34),k=(n(222),n(7)),T=n.n(k),C=n(14),I=function(){return O.a.createElement("nav",{className:T.a.nav},O.a.createElement("div",{className:T.a.item},O.a.createElement(C.b,{to:"/profile",activeClassName:T.a.active},"Profile")),O.a.createElement("div",{className:T.a.item},O.a.createElement(C.b,{to:"/dialogs",activeClassName:T.a.active},"Messages")),O.a.createElement("div",{className:T.a.item},O.a.createElement(C.b,{to:"/news",activeClassName:T.a.active},"News")),O.a.createElement("div",{className:T.a.item},O.a.createElement(C.b,{to:"/music",activeClassName:T.a.active},"Music")),O.a.createElement("div",{className:T.a.item},O.a.createElement("div",{className:T.a.sideBar},O.a.createElement(C.b,{to:"/settings",activeClassName:T.a.active},"Settings"))),O.a.createElement("div",{className:T.a.item},O.a.createElement("div",{className:T.a.item},O.a.createElement(C.b,{to:"/users",activeClassName:T.a.active},"Users"))))},P=n(6),x=n(86),L=n.n(x),U=function(){return O.a.createElement("div",{className:L.a.music},"Music")},z=n(87),F=n.n(z),A=function(){return O.a.createElement("div",{className:F.a.news},"News")},R=n(88),G=n.n(R),D=function(){return O.a.createElement("div",{className:G.a.settings},"Settings")},M=n(55),B=n.n(M),W=function(e){return O.a.createElement("header",{className:B.a.header},O.a.createElement("img",{src:"https://mediamc.com.au/wp-content/uploads/2018/09/kisspng-social-media-marketing-youth-social-media-5ac29e4bc9dcf5.9923161815227039478268-1024x732-1.png"}),O.a.createElement("div",{className:B.a.loginBlock},e.isAuth?O.a.createElement("div",null,e.login," - ",O.a.createElement("button",{onClick:e.logout},"Log out")):O.a.createElement(C.b,{to:"/login"},"Login")))},H=n(22),X=function(e){Object(y.a)(n,e);var t=Object(N.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(S.a)(n,[{key:"render",value:function(){return O.a.createElement(W,this.props)}}]),n}(O.a.Component),V=Object(H.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:u.d})(X),Y=n(43),J=function(e){return function(t){return O.a.createElement(O.a.Suspense,{fallback:O.a.createElement(Y.a,null)},O.a.createElement(e,t))}},Z=O.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,301))})),K=O.a.lazy((function(){return n.e(5).then(n.bind(null,303))})),Q=O.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,304))})),$=O.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,302))})),q=function(e){Object(y.a)(n,e);var t=Object(N.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(S.a)(n,[{key:"componentDidMount",value:function(){this.props.initialize()}},{key:"render",value:function(){return this.props.initialized?O.a.createElement("div",{className:"app-wrapper"},O.a.createElement(V,null),O.a.createElement(I,null),O.a.createElement("div",{className:"app-wrapper-content"},O.a.createElement(P.b,{path:"/login",render:J(Z)}),O.a.createElement(P.b,{path:"/dialogs",render:J(Q)}),O.a.createElement(P.b,{path:"/profile/:userId?",render:J($)}),O.a.createElement(P.b,{path:"/users",render:J(K)}),O.a.createElement(P.b,{path:"/news",component:A}),O.a.createElement(P.b,{path:"/music",component:U}),O.a.createElement(P.b,{path:"/settings",component:D}))):O.a.createElement(Y.a,null)}}]),n}(O.a.Component),ee=Object(a.d)(P.f,Object(H.b)((function(e){return{initialized:e.app.initialized}}),{initialize:function(){return function(e){var t=e(Object(u.b)());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(q);_.a.render(O.a.createElement(C.a,null,O.a.createElement(H.a,{store:v},O.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return m}));var a=n(5),r=n.n(a),c=n(11),i=n(2),o=n(9),s=n(45),u="samurai-network/auth/SET_USER_DATA",l={email:null,login:null,password:null,rememberMe:!1,userId:null,isAuth:!1},f=function(e,t,n,a){return{type:u,payload:{userId:e,email:t,login:n,isAuth:a}}},d=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c,i,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,c=a.id,i=a.email,s=a.login,t(f(c,i,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e,t,n){return function(){var a=Object(c.a)(r.a.mark((function a(c){var i,u;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.login(e,t,n);case 2:0===(i=a.sent).data.resultCode?c(d()):(u=i.data.messages.length>0?i.data.messages[0]:"Some error",c(Object(s.a)("login",{_error:u})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},m=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.logout();case 2:0===e.sent.data.resultCode&&t(f(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),t.payload);default:return e}}},43:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(89),i=n.n(c);t.a=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:i.a}))}},55:function(e,t,n){e.exports={header:"Header_header__1olRi",loginBlock:"Header_loginBlock__1QLbO"}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return m}));var a=n(5),r=n.n(a),c=n(11),i=n(26),o=n(2),s=n(9),u={profile:null,posts:[{id:1,post:"Hi, how are you?",likeCounter:15},{id:2,post:"My first post",likeCounter:20},{id:3,post:"Hello World",likeCounter:10},{id:4,post:"Yo yo yo yo yo",likeCounter:50}],status:""},l=function(e){return{type:"ADD-POST",newPostText:e}},f=function(e){return{type:"SET_STATUS",status:e}},d=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getProfile(e);case 2:a=t.sent,n({type:"SET_USERS_PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getStatus(e);case 2:a=t.sent,n(f(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,post:t.newPostText,likeCounter:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[n])});case"SET_USERS_PROFILE":return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case"DELETE_POST":return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}},7:function(e,t,n){e.exports={nav:"Navbar_nav__1sUMS",item:"Navbar_item__3oXul",active:"Navbar_active__3XwNX",sideBar:"Navbar_sideBar__UGr34"}},73:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a=n(26),r=n(2),c={dialogs:[{id:1,photo:"https://kbimages1-a.akamaihd.net/7cf95f7f-c08c-494b-a68f-c6023e2b3a1e/1200/1200/False/il-vocazzo-1.jpg",name:"Dima"},{id:2,photo:"https://kbimages1-a.akamaihd.net/7cf95f7f-c08c-494b-a68f-c6023e2b3a1e/1200/1200/False/il-vocazzo-1.jpg",name:"Valera"},{id:3,photo:"https://kbimages1-a.akamaihd.net/7cf95f7f-c08c-494b-a68f-c6023e2b3a1e/1200/1200/False/il-vocazzo-1.jpg",name:"Sveta"}],messages:[{id:1,message:"Hi!"},{id:2,message:"How are you?"},{id:3,message:"Yo:)"}]},i=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:4,message:t.newMessageBody}])});default:return e}}},81:function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return b})),n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return v})),n.d(t,"f",(function(){return E}));var a=n(5),r=n.n(a),c=n(11),i=n(26),o=n(2),s=n(9),u=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(o.a)(Object(o.a)({},e),a):e}))},l={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},f=function(e){return{type:"FOLLOW",userId:e}},d=function(e){return{type:"UNFOLLOW",userId:e}},p=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},m=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},b=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},g=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(m(!0)),a(p(e)),n.next=4,s.c.getUsers(e,t);case 4:c=n.sent,a(m(!1)),a({type:"SET_USERS",users:c.items}),a({type:"SET_TOTAL_USERS_COUNT",totalCount:c.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},h=function(){var e=Object(c.a)(r.a.mark((function e(t,n,a,c){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(b(!0,t)),e.next=3,a(t);case 3:0===e.sent.data.resultCode&&n(c(t)),n(b(!1,t));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:h(e,n,s.c.follow.bind(s.c),f);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:h(e,n,s.c.unFollow.bind(s.c),d);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(o.a)(Object(o.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(o.a)(Object(o.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(o.a)(Object(o.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.totalCount});case"TOGGLE_IS_FETCHING":return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(o.a)(Object(o.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(i.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}}},86:function(e,t,n){e.exports={music:"Music_music__2C7i5"}},87:function(e,t,n){e.exports={news:"News_news__E2URz"}},88:function(e,t,n){e.exports={settings:"Settings_settings__3BPyW"}},89:function(e,t,n){e.exports=n.p+"static/media/preloader.e340c8b8.svg"},9:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(82),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"60753ccc-207d-4dc7-9b94-23490ca68361"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unFollow:function(e){return r.delete("follow/".concat(e))},follow:function(e){return r.post("follow/".concat(e),{})},setProfile:function(e){return console.warn("Obsolete method.Please profileAPI object."),i.getProfile(e)}},i={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})}},o={me:function(){return r.get("auth/me")},login:function(e,t,n){return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}}},[[138,2,3]]]);
//# sourceMappingURL=main.7665b903.chunk.js.map