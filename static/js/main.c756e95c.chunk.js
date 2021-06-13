(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{71:function(e,t,n){},75:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(10),s=n.n(r),i=(n(71),n(13)),o=(n(75),n(18)),l=n(122),j=n(115),d=n(116),u=n(117),b=n(57),p=n.n(b),h=n(118),O=n(30),x=n(112),g=n(15),m=Object(x.a)((function(e){return{root:{flexGrow:1},button:{marginRight:"10px"},menuButton:{marginRight:e.spacing(2)},title:Object(O.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(O.a)({border:"1px solid white",position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(g.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(g.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"500px"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(O.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),f="LOADER_FALSE",v="LOADER_TRUE",y="ALL_GAMES",w="SIGN_IN",k="CURRENT_GAME",S=n(25),C=n(2);var N=function(){localStorage.getItem("signIn");var e=m(),t=Object(i.b)(),n=Object(i.c)((function(e){return e.signIn})),a=Object(c.useState)(!1),r=Object(o.a)(a,2),s=r[0],b=r[1];return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{className:e.root,children:Object(C.jsx)(l.a,{position:"static",children:Object(C.jsxs)(j.a,{children:[Object(C.jsx)(d.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",children:Object(C.jsx)(p.a,{})}),Object(C.jsx)(u.a,{className:e.title,variant:"h6",noWrap:!0,children:Object(C.jsx)(S.b,{style:{color:"white"},to:"/",children:"Video-Games"})}),Object(C.jsx)(h.a,{className:e.button,onClick:function(){b(!s),t({type:w,payload:s})},variant:"contained",color:n?"secondary":"primary",children:n?"\u0412\u044b\u0439\u0442\u0438":"\u0412\u043e\u0439\u0442\u0438"})]})})})})},I=n(121),E=n(21),A=n.n(E),R=n(33),G=function(e){return{type:y,payload:e}},_=function(e){return{type:k,payload:e}},L=(n(84),function(e){var t,n=e.info;Object(i.c)((function(e){return e}));return Object(C.jsxs)("figure",{className:"image-block",children:[Object(C.jsx)("h1",{style:{position:"relative"},children:n.name}),Object(C.jsx)("img",{src:n.background_image,alt:""}),Object(C.jsxs)("figcaption",{children:[Object(C.jsx)("div",{className:"rating-game",children:n.rating}),Object(C.jsx)("div",{style:{display:"flex",justifyContent:"center",width:"300px",alignItems:"center"},children:Object(C.jsxs)("h2",{style:{marginTop:"50px"},children:[n.slug,Object(C.jsxs)("p",{children:["-",null===n||void 0===n||null===(t=n.genres)||void 0===t?void 0:t.map((function(e,t){return Object(C.jsxs)("span",{children:[e.name,"- "]},t)}))]})]})}),Object(C.jsx)("p",{children:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."}),Object(C.jsx)(S.b,{to:"/".concat(n.id),children:Object(C.jsx)("button",{children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435..."})})]})]})}),F=function(e){var t,n,c,a=e.setPage,r=Object(i.c)((function(e){return e.games.allgames}));return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:null===r||void 0===r||null===(t=r.results)||void 0===t?void 0:t.map((function(e,t){return Object(C.jsx)("span",{style:{margin:"0 15px",cursor:"pointer"},onClick:function(){return a(t+1)},children:t+1},t)}))}),Object(C.jsx)("div",{style:{position:"relative",display:"flex",flexWrap:"wrap",margin:"0 auto",justifyContent:"center"},children:(null===r||void 0===r||null===(n=r.results)||void 0===n?void 0:n.length)?null===r||void 0===r||null===(c=r.results)||void 0===c?void 0:c.map((function(e){return Object(C.jsx)(L,{info:e},e.id)})):""})]})},M=(n(85),n(6)),B=function(){Object(M.g)().currentGam;var e,t,n=Object(i.c)((function(e){return e.games.currentgame}));console.log(n);var a=Object(c.useState)(!1),r=Object(o.a)(a,2);r[0],r[1];return console.log(n,"currentGame"),Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{className:"container-game",children:[Object(C.jsx)("img",{src:n.background_image,className:"imgg",alt:""}),Object(C.jsx)("div",{className:"content-game",children:Object(C.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(C.jsxs)("div",{style:{margin:"0 25px"},children:[Object(C.jsxs)("h1",{children:[n.name," ",Object(C.jsx)("span",{children:Object(C.jsx)("img",{width:"26px",src:"https://e7.pngegg.com/pngimages/641/241/png-clipart-gold-sticker-star-star-angle-triangle.png",alt:""})})]}),Object(C.jsxs)("p",{children:["\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b:",null===(e=n.platforms)||void 0===e?void 0:e.map((function(e){return Object(C.jsxs)("span",{children:[" /",e.platform.name]})}))]}),Object(C.jsxs)("p",{children:["\u0414\u0430\u0442\u0430 \u0440\u0435\u043b\u0438\u0437\u0430: ",n.released]}),Object(C.jsxs)("p",{children:["\u0416\u0430\u043d\u0440: ",null===(t=n.genres)||void 0===t?void 0:t.map((function(e){return Object(C.jsxs)("span",{children:[" /",e.name]})}))]}),Object(C.jsxs)("p",{children:["\u0421\u0430\u0439\u0442: ",Object(C.jsx)("a",{href:n.website,children:n.website})]}),Object(C.jsx)("p",{}),Object(C.jsx)("p",{}),Object(C.jsx)("p",{}),Object(C.jsxs)("p",{children:["\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 :",n.description_raw]})]}),Object(C.jsx)("div",{})]})})]})})},P=n(120),q=n(119),D=n(90),J=Object(x.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[3],padding:e.spacing(2,4,3),height:"500px",width:"800px"}}})),T=function(e){var t=e.handleClose,n=e.open,c=e.trailer,a=J();return console.log(c),Object(C.jsx)("div",{children:Object(C.jsx)(P.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:a.modal,open:n,onClose:t,closeAfterTransition:!0,BackdropComponent:q.a,BackdropProps:{timeout:500},children:Object(C.jsx)(D.a,{in:n,children:Object(C.jsx)("iframe",{src:c.data.max,style:{margin:" 0 0 20px -32px"},width:"900",height:"500"})})})})},W=(n(86),function(){var e,t,n,r,s=Object(M.g)().id,i=Object(c.useState)({}),l=Object(o.a)(i,2),j=l[0],d=l[1],u=Object(c.useState)({}),b=Object(o.a)(u,2),p=b[0],h=b[1];Object(c.useEffect)((function(){Object(R.a)(A.a.mark((function e(){var t,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.rawg.io/api/games/".concat(s,"?key=e930d30eb04b4962b85aa272f2925b23"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log("GAAAMMEEEE",n),d(n);case 8:case"end":return e.stop()}}),e)})))()}),[]),Object(c.useEffect)((function(){Object(R.a)(A.a.mark((function e(){var t,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.rawg.io/api/games/".concat(s,"/movies?key=e930d30eb04b4962b85aa272f2925b23"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log("trailer",n),h(n);case 8:case"end":return e.stop()}}),e)})))()}),[j]);var O=a.a.useState(!1),x=Object(o.a)(O,2),g=x[0],m=x[1],f=function(){m(!0)},v=function(){m(!1)};return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{className:"container-game",children:[Object(C.jsx)("img",{src:j.background_image,className:"imgg",alt:""}),Object(C.jsx)("div",{className:"content-game",children:Object(C.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(C.jsxs)("div",{style:{margin:"0 25px"},children:[Object(C.jsxs)("h1",{children:[j.name," ",Object(C.jsx)("span",{children:Object(C.jsx)("img",{width:"26px",src:"https://e7.pngegg.com/pngimages/641/241/png-clipart-gold-sticker-star-star-angle-triangle.png",alt:""})})]}),Object(C.jsxs)("p",{children:["\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b:",null===(e=j.platforms)||void 0===e?void 0:e.map((function(e){return Object(C.jsxs)("span",{children:[" /",e.platform.name]})}))]}),Object(C.jsxs)("p",{children:["\u0414\u0430\u0442\u0430 \u0440\u0435\u043b\u0438\u0437\u0430: ",j.released]}),Object(C.jsxs)("p",{children:["\u0416\u0430\u043d\u0440: ",null===(t=j.genres)||void 0===t?void 0:t.map((function(e){return Object(C.jsxs)("span",{children:[" /",e.name]})}))]}),Object(C.jsxs)("p",{children:["\u0421\u0430\u0439\u0442: ",Object(C.jsx)("a",{href:j.website,children:j.website})]}),Object(C.jsx)("p",{}),Object(C.jsx)("p",{}),Object(C.jsx)("p",{}),Object(C.jsxs)("p",{children:["\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 :",j.description_raw]}),(null===(n=p.results)||void 0===n?void 0:n.length)?null===(r=p.results)||void 0===r?void 0:r.map((function(e){return Object(C.jsxs)(C.Fragment,{children:[" ",Object(C.jsx)("button",{type:"button",onClick:f,children:"trailer"}),"  ",Object(C.jsx)(T,{trailer:e,open:g,handleClose:v})," "]})})):""]}),Object(C.jsx)("div",{})]})})]})})}),U=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1];Object(i.c)((function(e){return e}));console.log(n.replace(" ","-"));var r=Object(c.useState)(!0),s=Object(o.a)(r,2),l=s[0],j=s[1],d=Object(c.useState)(1),u=Object(o.a)(d,2),b=u[0],p=u[1],h=Object(i.b)(),O=m(),x=Object(M.f)(),g=function(e){var t;e.preventDefault(),console.log(123),""!==n&&(h((t=n.replace(" ","-"),function(){var e=Object(R.a)(A.a.mark((function e(n,c){var a,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,fetch("https://api.rawg.io/api/games/".concat(t,"?key=e930d30eb04b4962b85aa272f2925b23"));case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,n(_(r));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())),x.push("/search/".concat(n)),a(""))};Object(c.useEffect)((function(){var e;j(!0),h((e=b,function(){var t=Object(R.a)(A.a.mark((function t(n,c){var a,r;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.rawg.io/api/games?key=e930d30eb04b4962b85aa272f2925b23&page=".concat(e));case 2:return a=t.sent,t.next=5,a.json();case 5:r=t.sent,n(G(r));case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())),j(!1)}),[b]);return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{}),Object(C.jsxs)("div",{style:{maxWidth:"1500px",margin:"0 auto"},children:[Object(C.jsxs)("form",{style:{margin:"20px 0",display:"flex",justifyContent:"center"},onSubmit:g,children:[Object(C.jsx)("div",{className:O.search,children:Object(C.jsx)(I.a,{value:n,onChange:function(e){a(e.target.value)},placeholder:"Search\u2026",classes:{root:O.inputRoot,input:O.inputInput},inputProps:{"aria-label":"search"}})}),Object(C.jsx)("button",{onClick:g,children:"OK"})]}),Object(C.jsx)("hr",{}),l?Object(C.jsxs)("div",{className:"loading",children:[Object(C.jsx)("p",{children:"l"}),Object(C.jsx)("p",{children:"o"}),Object(C.jsx)("p",{children:"a"}),Object(C.jsx)("p",{children:"d"}),Object(C.jsx)("p",{children:"i"}),Object(C.jsx)("p",{children:"n"}),Object(C.jsx)("p",{children:"g"})]}):"",Object(C.jsxs)(M.c,{children:[Object(C.jsx)(M.a,{exact:!0,path:"/",children:Object(C.jsx)(F,{setPage:p})}),Object(C.jsx)(M.a,{exact:!0,path:"/search/:currentGam",children:Object(C.jsx)(B,{})}),Object(C.jsx)(M.a,{exact:!0,path:"/:id",children:Object(C.jsx)(W,{})})]})]})]})};var V=function(){var e=Object(i.c)((function(e){return e.signIn}));return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)(N,{}),e?Object(C.jsx)(U,{}):"\u043f\u0448\u0435\u043b \u0432\u043e\u043d"]})},K=n(38),z=n(58),H=n(22),Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(H.a)(Object(H.a)({},e),{},{allgames:t.payload});case k:return Object(H.a)(Object(H.a)({},e),{},{currentgame:t.payload});default:return e}},X=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(H.a)(Object(H.a)({},e),{},{loader:!0});case f:return Object(H.a)(Object(H.a)({},e),{},{loader:!1});default:return e}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return t.payload;default:return e}},Z=Object(K.b)({loader:X,games:Q,signIn:Y}),$=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")):null,ee=function(){return $||{games:{allgames:[],currentgame:{}},signIn:!1,loader:!1}},te=Object(K.c)(Z,ee(),Object(K.a)(z.a));te.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(te.getState()))})),s.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(S.a,{children:Object(C.jsx)(i.a,{store:te,children:Object(C.jsx)(V,{})})})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.c756e95c.chunk.js.map