(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[7],{171:function(e,t,n){},18:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return r}));var a="https://movie0706.cybersoft.edu.vn/api/",c="accessToken",i="GP02",r="USER_LOGIN"},192:function(e,t,n){"use strict";n.r(t),n.d(t,"thongTinPhim",(function(){return c})),n.d(t,"Seat",(function(){return i})),n.d(t,"ThongTinLichChieu",(function(){return r}));var a=n(49),c=function e(){Object(a.a)(this,e),this.maLichChieu="",this.tenCumRap="",this.tenRap="",this.diaChi="",this.tenPhim="",this.hinhAnh="",this.ngayChieu="",this.gioChieu=""},i=function e(){Object(a.a)(this,e),this.maGhe="",this.tenGhe="",this.maRap="",this.loaiGhe="",this.stt="",this.giaVe="",this.daDat="",this.taiKhoanNguoiDat=""},r=function e(){Object(a.a)(this,e),this.thongTinPhim=new c,this.seatList=[]}},194:function(e,t,n){"use strict";n.r(t);n(0);var a=n(12),c=n.n(a),i=(n(171),n(256)),r=n(254),o=n(42),s=n(67),l=n(59),j=n(147),u=n(148),b=n(110),d=n(6),h=n(76),m={chiTietPhongVe:new(0,n(192).ThongTinLichChieu),bookingList:[],danhSachGheKhachDat:[{maGhe:49001},{maGhe:49002}]},x=n(54),O={cinemaList:[],infoCinemaList:[],theaterList:[]},p=function(e,t){return Object(d.a)(Object(d.a)({},e),{},{cinemaList:t})},f=function(e,t){return Object(d.a)(Object(d.a)({},e),{},{infoCinemaList:t})},g=function(e,t){return Object(d.a)(Object(d.a)({},e),{},{theaterList:t})},v=n(93),y={movieList:[],movieDetail:{},movieUpdate:{}},w=function(e,t){return Object(d.a)(Object(d.a)({},e),{},{movieList:t})},k=function(e,t){return Object(d.a)(Object(d.a)({},e),{},{movieDetail:t})},T=function(e,t){return Object(d.a)(Object(d.a)({},e),{},{movieUpdate:t})},N=n(53),L=n(18),C={};localStorage.getItem(L.d)&&(C=JSON.parse(localStorage.getItem(L.d)));var A={userLogin:C,isAuthenticated:!1,userList:[],userPagination:{},thongTinTimKiem:{},thongTinTaiKhoan:{}},S=function(e,t){return localStorage.setItem(L.d,JSON.stringify(t)),localStorage.setItem(L.c,t.accessToken),"QuanTri"===t.maLoaiNguoiDung&&(e.isAuthenticated=!0),Object(d.a)(Object(d.a)({},e),{},{userLogin:t})},P=function(e,t){return Object(d.a)(Object(d.a)({},e),{},{thongTinTimKiem:t})},z=function(e,t){return Object(d.a)(Object(d.a)({},e),{},{userList:t})},I=function(e,t){return Object(d.a)({},e)},B=function(e,t){return Object(d.a)(Object(d.a)({},e),{},{thongTinTaiKhoan:t})},E=n(89),G={isLoading:!1},Z=Object(l.combineReducers)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case v.a:return w(e,a);case x.c:return k(e,a);case v.b:return T(e,a);default:return e}},cinemas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case x.b:return p(e,a);case x.a:return f(e,a);case x.d:return g(e,a);default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case N.b:return S(e,a);case N.d:return P(e,a);case N.a:return I(e);case N.c:return z(e,a);case N.e:return B(e,a);default:return Object(d.a)({},e)}},booking:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case h.c:return Object(d.a)(Object(d.a)({},e),{},{chiTietPhongVe:a});case h.a:var c=[],i=e.bookingList.find((function(e){return e.maGhe===a.maGhe}));return c=i?e.bookingList.filter((function(e){return e.maGhe!==a.maGhe})):[].concat(Object(b.a)(e.bookingList),[a]),Object(d.a)(Object(d.a)({},e),{},{bookingList:c});case h.b:return Object(d.a)(Object(d.a)({},e),{},{bookingList:[]});default:return Object(d.a)({},e)}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case E.b:return e.isLoading=!0,Object(d.a)({},e);case E.a:return e.isLoading=!1,Object(d.a)({},e);default:return Object(d.a)({},e)}}}),D=[u.a],R=Object(l.createStore)(Z,Object(j.composeWithDevTools)(l.applyMiddleware.apply(void 0,D))),K=n(116),H=n(43),Y="#FFF",Q="#000",X="#001232",F=Object(H.a)({type:"light",common:{black:Q,white:Y,contrastText:Y},primary:{contrastText:Y,main:X},secondary:{main:"#0a1e5e",contrastText:Y},text:{primary:Y,secondary:Q,link:Y},background:{default:X,paper:Y},divider:"#DFE3E8"},"text",{primary:Y,secondary:Q}),V={useNextVariants:!0,fontSize:14,fontFamily:["Roboto","Noto","sans-serif","Helvetica Neue","Arial"].join(",")},M=Object(K.b)({palette:F,typography:V,mixins:{toolbar:{minHeight:"80px"}},breakpoints:{values:{xs:0,sm:414,md:768,lg:992,xl:1200}}}),U=(n(193),n(1));var q=function(){return Object(U.jsx)(o.a,{store:R,children:Object(U.jsxs)(i.a,{theme:M,children:[Object(U.jsx)(r.a,{}),Object(U.jsx)(s.a,{})]})})};c.a.render(Object(U.jsx)(q,{}),document.getElementById("root"))},44:function(e,t,n){"use strict";var a=n(6),c=n(0),i=n(199),r=n(158),o=n(1),s=Object(r.a)((function(e){return{root:{background:function(e){return e.leftColor?"linear-gradient(to left, #5560ff 17%, #aa52a1 63%, #ff4343 100%)":"linear-gradient(to right, #5560ff 17%, #aa52a1 63%, #ff4343 100%)"},borderRadius:30,border:0,color:"white",height:function(e){return e.heightButton?e.heightButton:"48px"},padding:function(e){return e.smallButton?"0 15px":"0 50px"},boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",marginLeft:function(e){return e.ml?e.ml:0},"&:hover":{boxShadow:"0px 10px 15px 0px rgb(59 55 188 / 50%)"}},label:{textTransform:"capitalize",fontSize:"14px"}}})),l=function(e){var t=s(e),n=e.nameButton;e.smallButton,e.heightButton,e.leftColor;return Object(o.jsx)(i.a,Object(a.a)(Object(a.a)({classes:{root:t.root,label:t.label}},e),{},{children:n}))};t.a=Object(c.memo)(l)},53:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"e",(function(){return o}));var a="DANG_NHAP",c="SET_THONG_TIN_NGUOI_DUNG",i="DANG_KY",r="GET_USER_LIST",o="THONG_TIN_TAI_KHOAN"},54:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return r}));var a="GET_LIST_CINEMA",c="GET_MOVIE_SHOWTIMES",i="GET_INFO_CINEMA_LIST",r="GET_THEATER_LIST"},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return x}));n(0);var a=n(236),c=n(237),i=n(158),r=n(1),o=Object(i.a)((function(e){return{backdrop:{color:"#fff",zIndex:1302}}})),s=function(e){var t=o();return Object(r.jsx)("div",{children:Object(r.jsx)(a.a,{className:t.backdrop,open:!0,children:Object(r.jsx)(c.a,{color:"inherit"})})})},l=n(238),j=n(258),u=n(239),b=n(66),d=n.p+"static/media/404.bb9c17a0.png",h=n(44),m=n(67);var x=function(){return Object(r.jsx)(l.a,{align:"center",children:Object(r.jsx)(j.a,{mt:5,children:Object(r.jsxs)(u.a,{container:!0,spacing:2,children:[Object(r.jsx)(u.a,{item:!0,xs:12,children:Object(r.jsx)("img",{src:d,alt:"page not found",style:{width:"55vw"}})}),Object(r.jsx)(u.a,{item:!0,xs:12,children:Object(r.jsx)(b.a,{variant:"h5",color:"initial",children:"Error 404 Page Not Found!!!!!"})}),Object(r.jsx)(u.a,{item:!0,xs:12,children:Object(r.jsx)(h.a,{nameButton:"Tr\u1edf L\u1ea1i Trang Ch\u1ee7",onClick:function(){m.b.push("/")}})})]})})})}},67:function(e,t,n){"use strict";n.d(t,"b",(function(){return Tt}));var a=n(0),c=n.n(a),i=n(62),r=n(13),o=n(6),s=n(69),l=n(1),j=function(e){var t=e.layout,n=e.component,a=e.layoutProps,c=Object(s.a)(e,["layout","component","layoutProps"]);return Object(l.jsx)(r.b,Object(o.a)(Object(o.a)({},c),{},{render:function(e){return Object(l.jsx)(t,Object(o.a)(Object(o.a)({},a),{},{children:Object(l.jsx)(n,Object(o.a)({},e))}))}}))},u=n(42),b=n(107),d=n.n(b),h=function(e){var t=e.layout,n=e.component,a=Object(s.a)(e,["layout","component"]),c=!1;"QuanTri"===Object(u.c)((function(e){return e.users})).userLogin.maLoaiNguoiDung&&(c=!0);return Object(l.jsx)(r.b,Object(o.a)(Object(o.a)({},a),{},{children:function(){return!0===c?Object(l.jsx)(t,{children:Object(l.jsx)(n,Object(o.a)({},e))}):(d.a.fire({icon:"error",title:"Oops...",text:"B\u1ea1n Kh\xf4ng c\xf3 quy\u1ec1n truy c\u1eadp"}),Object(l.jsx)(r.a,{to:{pathname:"/",state:{from:e.location}}}))}}))},m=n(22),x=n(262),O=n(158),p=n(40),f="data:image/png;base64,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",g=n(19),v=n(245),y=n(243),w=n(246),k=n(247),T=n(202),N=n(248),L=n(249),C=n(250),A=n(251),S=n(238),P=n(252),z=n(128),I=n.n(z),B=n(44),E=n(84),G=n.n(E),Z=n(201),D=n(240),R=n(209),K=n(204),H=n(242),Y=n(18),Q=n(72),X=n.n(Q),F=n(58),V=Object(O.a)((function(e){return{drawer:{backgroundColor:e.palette.secondary.main},drawerItemText:Object(o.a)(Object(o.a)({},e.typography.subtitle1),{},{color:e.palette.primary.contrastText}),list:{width:250},fullList:{width:"auto"},toolbarMargin:Object(o.a)({},e.mixins.toolbar),menuButton:{color:e.palette.common.white}}})),M=function(e){var t=V(),n=e.routesTab,c=e.userLogin,i=Object(a.useState)(!1),r=Object(p.a)(i,2),o=r[0],s=r[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(R.a,{open:o,onClose:function(){return s(!1)},anchor:"right",classes:{paper:t.drawer},children:[Object(l.jsx)("div",{className:t.toolbarMargin}),Object(l.jsx)("div",{className:t.list,onClick:function(){return s(!1)},onKeyDown:function(){return s(!1)},children:Object(l.jsxs)(K.a,{disablePadding:!0,children:[n.map((function(e,n){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Z.a,{button:!0,onClick:function(){return s(!1)},component:F.a,to:e.link,smooth:!0,children:Object(l.jsx)(D.a,{className:t.drawerItemText,children:e.name})},n),Object(l.jsx)(H.a,{})]})})),X.a.isEmpty(c)?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Z.a,{button:!0,onClick:function(){s(!1),Tt.push("/login")},children:Object(l.jsx)(D.a,{className:t.drawerItemText,children:Object(l.jsx)(B.a,{nameButton:"\u0110\u0103ng Nh\u1eadp",fullWidth:!0})})}),Object(l.jsx)(Z.a,{button:!0,onClick:function(){s(!1),Tt.push("/register")},children:Object(l.jsx)(D.a,{className:t.drawerItemText,children:Object(l.jsx)(B.a,{nameButton:"\u0110\u0103ng K\xfd",fullWidth:!0})})})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Z.a,{button:!0,onClick:function(){s(!1),Tt.push("/profile")},children:Object(l.jsx)(D.a,{className:t.drawerItemText,children:c.taiKhoan})}),"QuanTri"===c.maLoaiNguoiDung?Object(l.jsx)(Z.a,{button:!0,onClick:function(){s(!1),Tt.push("/admin")},children:Object(l.jsx)(D.a,{className:t.drawerItemText,children:"Qu\u1ea3n L\xfd"})}):void 0,Object(l.jsx)(Z.a,{button:!0,onClick:function(){s(!1),localStorage.removeItem(Y.d),localStorage.removeItem(Y.c),Tt.push("/"),window.location.reload()},children:Object(l.jsx)(D.a,{className:t.drawerItemText,children:"\u0110\u0103ng Xu\u1ea5t"})})]})]})})]}),Object(l.jsx)(y.a,{"aria-label":"primary",onClick:function(){return s(!o)},className:t.menuButton,children:Object(l.jsx)(G.a,{})})]})},U=Object(a.memo)(M),q=n(43),J=n(259),W=n(244),_=Object(O.a)((function(e){return{tab:Object(q.a)({minWidth:"80px",color:e.palette.white},e.breakpoints.up("lg"),{padding:"6px"}),indicator:{background:"linear-gradient(to right, #5560ff 17%, #aa52a1 63%, #ff4343 100%)",width:"5px"}}})),$=function(e){var t=_(),n=Object(a.useState)(0),c=Object(p.a)(n,2),i=c[0],r=c[1],s=e.routesTab;return Object(l.jsx)(J.a,Object(o.a)(Object(o.a)({value:i,onChange:function(e,t){r(t)},indicatorColor:"secondary"},e),{},{classes:{indicator:t.indicator},children:s.map((function(e,n){return Object(l.jsx)(W.a,{classes:{root:t.tab},component:F.a,smooth:!0,to:e.link,label:e.name},"_".concat(n))}))}))},ee=n(28),te=Object(O.a)((function(e){return{toolbarMargin:Object(o.a)({},e.mixins.toolbar),toolbar:{padding:"0",justifyContent:"space-between",minHeight:e.mixins.toolbar.minHeight},appbar:{zIndex:e.zIndex.modal+1,backgroundColor:"#0a1e5e"},paperRoot:{backgroundColor:"#0e2a85"},loginButton:{display:"flex"}}})),ne=function(){var e=te(),t=Object(u.c)((function(e){return e.users})).userLogin,n=Object(g.a)(),c=Object(a.useState)(!1),i=Object(p.a)(c,2),r=i[0],s=i[1],j=Object(a.useRef)(null),b=function(){s((function(e){return!e}))},d=function(e){j.current&&j.current.contains(e.target)||s(!1)},h=[{name:"T\xecm Ki\u1ebfm",link:"/#search"},{name:"Phim",link:"/#movies"},{name:"C\u1ee5m R\u1ea1p",link:"/#cinemas"},{name:"Tin T\u1ee9c",link:"/#news"},{name:"App",link:"/#app"},{name:"Li\xean H\u1ec7",link:"/#contact"}],m=Object(a.useMemo)((function(){return h}),[]),x=Object(a.useRef)(r);Object(a.useEffect)((function(){!0===x.current&&!1===r&&j.current.focus(),x.current=r}),[r]);var O=Object(v.a)(n.breakpoints.down("md"));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(A.a,{position:"fixed",className:e.appbar,id:"appbar",children:Object(l.jsx)(S.a,{maxWidth:"lg",children:Object(l.jsxs)(P.a,{classes:{root:e.toolbar},children:[Object(l.jsx)(F.a,{smooth:!0,to:"/#",exact:!0,children:Object(l.jsx)("img",{src:f,alt:"logo"})}),O?Object(l.jsx)(U,{routesTab:m,userLogin:t}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)($,{routesTab:m}),X.a.isEmpty(t)?Object(l.jsxs)("div",{className:e.loginButton,children:[Object(l.jsx)(B.a,{nameButton:"\u0110\u0103ng Nh\u1eadp",smallButton:!0,heightButton:"40px",component:ee.a,to:"/login"}),Object(l.jsx)(B.a,{nameButton:"\u0110\u0103ng K\xfd",smallButton:!0,heightButton:"40px",ml:"5px",component:ee.a,to:"/register"})]}):Object(l.jsxs)("div",{children:[Object(l.jsx)(y.a,{ref:j,"aria-controls":r?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:b,style:{color:"#fff"},children:Object(l.jsx)(I.a,{})}),Object(l.jsx)(w.a,{open:r,anchorEl:j.current,role:void 0,transition:!0,disablePortal:!0,children:function(n){var a=n.TransitionProps,c=n.placement;return Object(l.jsx)(k.a,Object(o.a)(Object(o.a)({},a),{},{style:{transformOrigin:"bottom"===c?"center top":"center bottom"},children:Object(l.jsx)(T.a,{classes:{root:e.paperRoot},children:Object(l.jsx)(N.a,{onClickAway:d,children:Object(l.jsxs)(L.a,{autoFocusItem:r,id:"menu-list-grow",children:[Object(l.jsx)(C.a,{onClick:function(e){j.current&&j.current.contains(e.target)||(s(!1),Tt.push("/profile"))},children:t.taiKhoan}),"QuanTri"===t.maLoaiNguoiDung?Object(l.jsx)(C.a,{onClick:function(e){j.current&&j.current.contains(e.target)||(s(!1),Tt.push("/admin"))},children:"Qu\u1ea3n L\xfd"}):"",Object(l.jsx)(C.a,{onClick:function(e){j.current&&j.current.contains(e.target)||(s(!1),localStorage.removeItem(Y.d),localStorage.removeItem(Y.c),Tt.push("/"),window.location.reload())},children:"\u0110\u0103ng Xu\u1ea5t"})]})})})}))}})]})]})]})})}),Object(l.jsx)("div",{className:e.toolbarMargin})]})},ae=n(49),ce=n(108),ie=n(105),re=n(106),oe=n(239),se=n(66),le=n(258),je=n(253),ue=n(260),be=n(198),de=n(139),he=n.n(de),me=n(140),xe=n.n(me),Oe=n(141),pe=n.n(Oe),fe=n(142),ge=n.n(fe),ve=function(e){Object(ie.a)(n,e);var t=Object(re.a)(n);function n(){return Object(ae.a)(this,n),t.apply(this,arguments)}return Object(ce.a)(n,[{key:"render",value:function(){var e=this.props.classes;return Object(l.jsx)("footer",{className:e.root,id:"contact",children:Object(l.jsxs)(S.a,{maxWidth:"lg",children:[Object(l.jsxs)(oe.a,{container:!0,spacing:2,className:e.footer__top,children:[Object(l.jsxs)(oe.a,{item:!0,xs:12,md:4,container:!0,spacing:1,children:[Object(l.jsx)(oe.a,{item:!0,xs:12,children:Object(l.jsx)(se.a,{variant:"body1",gutterBottom:!0,children:"Boleto"})}),Object(l.jsx)(oe.a,{item:!0,xs:6,children:Object(l.jsxs)(se.a,{variant:"body2",children:[Object(l.jsx)(le.a,{mb:1,component:je.a,href:"#",underline:"none",className:e.link,children:"FAQ"}),Object(l.jsx)(le.a,{mb:1,component:je.a,href:"#",underline:"none",className:e.link,children:"Brand Guidelines"})]})}),Object(l.jsx)(oe.a,{item:!0,xs:6,children:Object(l.jsxs)(se.a,{variant:"body2",children:[Object(l.jsx)(le.a,{mb:1,component:je.a,href:"#",underline:"none",className:e.link,children:"Th\u1ecfa thu\u1eadn s\u1eed d\u1ee5ng"}),Object(l.jsx)(le.a,{mb:1,component:je.a,href:"#",underline:"none",className:e.link,children:"Ch\xednh s\xe1ch b\u1ea3o m\u1eadt"})]})})]}),Object(l.jsxs)(oe.a,{item:!0,xs:12,md:4,container:!0,children:[Object(l.jsx)(oe.a,{item:!0,xs:12,children:Object(l.jsx)(se.a,{variant:"body1",gutterBottom:!0,children:"\u0110\u1ed1i t\xe1c"})}),Object(l.jsxs)(oe.a,{item:!0,xs:12,container:!0,children:[Object(l.jsx)(oe.a,{item:!0,xs:!0,children:"1"}),Object(l.jsx)(oe.a,{item:!0,xs:!0,children:"2"}),Object(l.jsx)(oe.a,{item:!0,xs:!0,children:"3"}),Object(l.jsx)(oe.a,{item:!0,xs:!0,children:"4"}),Object(l.jsx)(oe.a,{item:!0,xs:!0,children:"5"})]}),Object(l.jsxs)(oe.a,{item:!0,xs:12,container:!0,children:[Object(l.jsx)(oe.a,{item:!0,xs:!0,children:"6"}),Object(l.jsx)(oe.a,{item:!0,xs:!0,children:"7"}),Object(l.jsx)(oe.a,{item:!0,xs:!0,children:"8"}),Object(l.jsx)(oe.a,{item:!0,xs:!0,children:"9"}),Object(l.jsx)(oe.a,{item:!0,xs:!0,children:"10"})]}),Object(l.jsxs)(oe.a,{item:!0,xs:12,container:!0,children:[Object(l.jsx)(oe.a,{item:!0,xs:!0,children:"11"}),Object(l.jsx)(oe.a,{item:!0,xs:!0,children:"12"}),Object(l.jsx)(oe.a,{item:!0,xs:!0,children:"13"}),Object(l.jsx)(oe.a,{item:!0,xs:!0,children:"14"}),Object(l.jsx)(oe.a,{item:!0,xs:!0,children:"15"})]}),Object(l.jsxs)(oe.a,{item:!0,xs:12,container:!0,children:[Object(l.jsx)(oe.a,{item:!0,xs:!0,children:"16"}),Object(l.jsx)(oe.a,{item:!0,xs:!0,children:"17"}),Object(l.jsx)(oe.a,{item:!0,xs:!0,children:"18"}),Object(l.jsx)(oe.a,{item:!0,xs:!0,children:"19"}),Object(l.jsx)(oe.a,{item:!0,xs:!0,children:"20"})]}),Object(l.jsxs)(oe.a,{item:!0,xs:12,container:!0,children:[Object(l.jsx)(oe.a,{item:!0,xs:!0,children:"21"}),Object(l.jsx)(oe.a,{item:!0,xs:!0,children:"22"}),Object(l.jsx)(oe.a,{item:!0,xs:!0,children:"23"}),Object(l.jsx)(oe.a,{item:!0,xs:!0,children:"24"}),Object(l.jsx)(oe.a,{item:!0,xs:!0,children:"25"})]})]}),Object(l.jsxs)(oe.a,{item:!0,xs:12,md:4,container:!0,children:[Object(l.jsxs)(oe.a,{item:!0,xs:6,children:[Object(l.jsx)(se.a,{variant:"body1",gutterBottom:!0,children:"MOBILE APP"}),Object(l.jsxs)(le.a,{children:[Object(l.jsx)(he.a,{}),Object(l.jsx)(xe.a,{})]})]}),Object(l.jsxs)(oe.a,{item:!0,xs:6,children:[Object(l.jsx)(se.a,{variant:"body1",gutterBottom:!0,children:"SOCIAL"}),Object(l.jsxs)(le.a,{children:[Object(l.jsx)(pe.a,{}),Object(l.jsx)(ge.a,{})]})]})]})]}),Object(l.jsxs)(ue.a,{xsDown:!0,children:[Object(l.jsx)(H.a,{}),Object(l.jsxs)(oe.a,{container:!0,spacing:1,className:e.footer__bottom,children:[Object(l.jsx)(oe.a,{item:!0,xs:1,children:"Logo"}),Object(l.jsx)(oe.a,{item:!0,xs:9,children:Object(l.jsxs)(se.a,{variant:"body2",children:[Object(l.jsx)(le.a,{mb:"3px",fontWeight:600,fontSize:"body1.fontSize",letterSpacing:"1px",children:"TIX \u2013 S\u1ea2N PH\u1ea8M C\u1ee6A C\xd4NG TY C\u1ed4 PH\u1ea6N ZION"}),Object(l.jsx)(le.a,{mb:"3px",children:"\u0110\u1ecba ch\u1ec9: Z06 \u0110\u01b0\u1eddng s\u1ed1 13, Ph\u01b0\u1eddng T\xe2n Thu\u1eadn \u0110\xf4ng, Qu\u1eadn 7, Tp. H\u1ed3 Ch\xed Minh, Vi\u1ec7t Nam."}),Object(l.jsx)(le.a,{mb:"2px",lineHeight:"23px",children:"Gi\u1ea5y ch\u1ee9ng nh\u1eadn \u0111\u0103ng k\xfd kinh doanh s\u1ed1: 0101659783, \u0111\u0103ng k\xfd thay \u0111\u1ed5i l\u1ea7n th\u1ee9 30, ng\xe0y 22 th\xe1ng 01 n\u0103m 2020 do S\u1edf k\u1ebf ho\u1ea1ch v\xe0 \u0111\u1ea7u t\u01b0 Th\xe0nh ph\u1ed1 H\u1ed3 Ch\xed Minh c\u1ea5p."}),Object(l.jsx)(le.a,{mb:"3px",children:"S\u1ed1 \u0110i\u1ec7n Tho\u1ea1i (Hotline): 1900 545 436"}),Object(l.jsx)(le.a,{mb:"3px",children:"Email: support@tix.vn"})]})}),Object(l.jsx)(oe.a,{item:!0,xs:2,children:"Logo 2"})]})]})]})})}}]),n}(a.Component),ye=Object(be.a)((function(e){return{root:{padding:"30px 0"},link:{display:"block",color:e.palette.common.white,opacity:.5,"&:hover":{opacity:1}},footer__top:{paddingBottom:"20px"},footer__bottom:{paddingTop:"15px"}}}))(ve),we=Object(O.a)((function(e){return{root:{}}})),ke=function(e){var t=we(e),n=Object(r.h)().pathname;Object(a.useEffect)((function(){window.scrollTo(0,0)}),[n]);var c=e.children;return Object(l.jsxs)("div",{className:t.root,children:[Object(l.jsx)(ne,{}),c,Object(l.jsx)(ye,{})]})},Te=Object(a.memo)(ke),Ne=Object(O.a)((function(e){return{root:{}}})),Le=function(e){var t=Ne(e);if(!localStorage.getItem(Y.d))return Object(l.jsx)(r.a,{to:"/login"});var n=e.children;return Object(l.jsx)("div",{className:t.root,children:n})},Ce=Object(a.memo)(Le),Ae=n(254),Se=n(75),Pe=n.n(Se),ze=n(86),Ie=Object(O.a)((function(e){return{location:{position:"absolute",left:"10px",top:"0"}}})),Be=function(e){var t=Ie();return Object(l.jsx)(le.a,{className:t.location,component:ee.a,to:"/",exact:!0,children:Object(l.jsx)(y.a,{"aria-label":"home",children:Object(l.jsx)(Pe.a,{style:{color:ze.a[500]},fontSize:"large"})})})},Ee=Object(O.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},content:{position:"relative"}}}));function Ge(e){var t=Ee(),n=Object(u.c)((function(e){return e.loading})).isLoading;Object(a.useEffect)((function(){window.scrollTo(0,0)}));var c=e.children;return n?Object(l.jsx)(i.a,{}):Object(l.jsxs)(oe.a,{container:!0,component:"main",className:t.root,children:[Object(l.jsx)(Ae.a,{}),Object(l.jsx)(oe.a,{item:!0,xs:!1,sm:4,md:6,className:t.image}),Object(l.jsxs)(oe.a,{item:!0,xs:12,sm:8,md:6,component:T.a,elevation:6,square:!0,className:t.content,children:[c,Object(l.jsx)(Be,{})]})]})}var Ze=Object(a.memo)(Ge),De=n(5),Re=n(257),Ke=n(132),He=n.n(Ke),Ye=n(255),Qe=n(143),Xe=n.n(Qe),Fe=n(130),Ve=n.n(Fe),Me=n(131),Ue=n.n(Me),qe=n(122),Je=n.n(qe),We=n(144),_e=n.n(We),$e=Object(l.jsxs)("div",{children:[Object(l.jsxs)(Z.a,{button:!0,onClick:function(){Tt.push("/admin/dashboard")},children:[Object(l.jsx)(Ye.a,{children:Object(l.jsx)(Xe.a,{})}),Object(l.jsx)(D.a,{primary:"Dashboard"})]}),Object(l.jsxs)(Z.a,{button:!0,onClick:function(){Tt.push("/admin/user")},children:[Object(l.jsx)(Ye.a,{children:Object(l.jsx)(Ve.a,{})}),Object(l.jsx)(D.a,{primary:"QL Ng\u01b0\u1eddi D\xf9ng"})]}),Object(l.jsxs)(Z.a,{button:!0,onClick:function(){Tt.push("/admin/film")},children:[Object(l.jsx)(Ye.a,{children:Object(l.jsx)(Ue.a,{})}),Object(l.jsx)(D.a,{primary:"Qu\u1ea3n L\xfd Phim"})]}),Object(l.jsxs)(Z.a,{button:!0,onClick:function(){Tt.push("/admin/cinema")},children:[Object(l.jsx)(Ye.a,{children:Object(l.jsx)(Je.a,{})}),Object(l.jsx)(D.a,{primary:"Qu\u1ea3n L\xfd R\u1ea1p"})]}),Object(l.jsxs)(Z.a,{button:!0,onClick:function(){Tt.push("/admin/ticket")},children:[Object(l.jsx)(Ye.a,{children:Object(l.jsx)(_e.a,{})}),Object(l.jsx)(D.a,{primary:"Qu\u1ea3n L\xfd V\xe9"})]})]}),et=n(146),tt=n.n(et),nt=n(116),at=n(256),ct=n(145),it=n.n(ct),rt=Object(nt.b)({palette:{primary:{main:"#3f51b5"},secondary:{main:"#f50057"}},mixins:{toolbar:{minHeight:"80px"}}}),ot=Object(O.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(o.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:250,width:"calc(100% - ".concat(250,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},logo:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:250,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(q.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}})),st=function(e){var t=ot(),n=e.children,a=c.a.useState(!0),i=Object(p.a)(a,2),r=i[0],o=i[1];return Object(l.jsx)(at.a,{theme:rt,children:Object(l.jsxs)("div",{className:t.root,children:[Object(l.jsx)(Ae.a,{}),Object(l.jsx)(A.a,{position:"absolute",className:Object(De.a)(t.appBar,r&&t.appBarShift),children:Object(l.jsxs)(P.a,{className:t.toolbar,children:[Object(l.jsx)(y.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){o(!0)},className:Object(De.a)(t.menuButton,r&&t.menuButtonHidden),children:Object(l.jsx)(G.a,{})}),Object(l.jsx)("div",{className:t.logo,children:Object(l.jsx)("img",{src:f,alt:"logo",style:{cursor:"pointer"},onClick:function(){Tt.push("/admin")}})}),Object(l.jsxs)("div",{children:[Object(l.jsx)(y.a,{color:"inherit",onClick:function(){Tt.goBack()},children:Object(l.jsx)(Re.a,{color:"secondary",children:Object(l.jsx)(it.a,{})})}),Object(l.jsx)(y.a,{color:"inherit",onClick:function(){Tt.push("/")},children:Object(l.jsx)(Re.a,{color:"secondary",children:Object(l.jsx)(Pe.a,{})})}),Object(l.jsx)(y.a,{color:"inherit",onClick:function(){localStorage.removeItem(Y.d),localStorage.removeItem(Y.c),Tt.push("/"),window.location.reload()},children:Object(l.jsx)(Re.a,{color:"secondary",children:Object(l.jsx)(tt.a,{})})})]})]})}),Object(l.jsxs)(R.a,{variant:"permanent",classes:{paper:Object(De.a)(t.drawerPaper,!r&&t.drawerPaperClose)},open:r,children:[Object(l.jsx)("div",{className:t.toolbarIcon,children:Object(l.jsx)(y.a,{onClick:function(){o(!1)},children:Object(l.jsx)(He.a,{})})}),Object(l.jsx)(H.a,{}),Object(l.jsx)(K.a,{children:$e}),Object(l.jsx)(H.a,{})]}),Object(l.jsxs)("main",{className:t.content,children:[Object(l.jsx)("div",{className:t.appBarSpacer}),Object(l.jsx)(S.a,{maxWidth:"lg",className:t.container,children:Object(l.jsx)(oe.a,{container:!0,spacing:3,children:n})})]})]})})},lt=Object(a.memo)(st),jt=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(5),n.e(6),n.e(11)]).then(n.bind(null,614))})),ut=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(6),n.e(20),n.e(23)]).then(n.bind(null,618))})),bt=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(10)]).then(n.bind(null,616))})),dt=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(18)]).then(n.bind(null,607))})),ht=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(19)]).then(n.bind(null,619))})),mt=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(12),n.e(15)]).then(n.bind(null,620))})),xt=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(27),n.e(22)]).then(n.bind(null,615))})),Ot=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(13)]).then(n.bind(null,628))})),pt=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(17)]).then(n.bind(null,630))})),ft=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(24)]).then(n.bind(null,631))})),gt=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(16)]).then(n.bind(null,632))})),vt=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(14)]).then(n.bind(null,633))})),yt=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(26)]).then(n.bind(null,634))})),wt=[{path:"/",exact:!0,layout:Te,component:jt},{path:"/detail/:id",exact:!0,layout:Te,component:ut},{path:"/profile",exact:!0,layout:Te,component:bt},{path:"/checkout/:id",exact:!0,layout:Ce,component:mt},{path:"/register",exact:!0,layout:Ze,component:ht},{path:"/login",exact:!0,layout:Ze,component:dt}],kt=[{path:"/admin",exact:!0,layout:lt,component:xt},{path:"/admin/film",exact:!0,layout:lt,component:Ot},{path:"/admin/film/addnew",exact:!0,layout:lt,component:gt},{path:"/admin/film/edit/:id",exact:!0,layout:lt,component:pt},{path:"/admin/film/addShowTimes/:id",exact:!0,layout:lt,component:ft},{path:"/admin/user",exact:!0,layout:lt,component:vt},{path:"/admin/user/add-newUser",exact:!0,layout:lt,component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(25)]).then(n.bind(null,635))}))},{path:"/admin/user/edit/:id",exact:!0,layout:lt,component:yt},{path:"/admin/cinema",exact:!0,layout:lt,component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(21)]).then(n.bind(null,636))}))},{path:"/admin/cinema/theater/:id",exact:!0,layout:lt,component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(28)]).then(n.bind(null,613))}))}],Tt=Object(m.a)();t.a=function(e){return Object(l.jsx)(a.Suspense,{fallback:Object(l.jsx)(i.a,{}),children:Object(l.jsx)(r.c,{history:Tt,children:Object(l.jsx)(x.a,{children:Object(l.jsxs)(r.d,{children:[wt.map((function(e,t){var n=e.path,a=e.exact,c=e.layout,i=e.component;return Object(l.jsx)(j,{exact:a,path:n,layout:c,component:i},"".concat(Date.now(),"_").concat(t))})),kt.map((function(e,t){var n=e.path,a=e.exact,c=e.layout,i=e.component;return Object(l.jsx)(h,{exact:a,path:n,layout:c,component:i},"".concat(Date.now(),"_").concat(t))})),Object(l.jsx)(r.b,{path:"",component:i.b})]})})})})}},76:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));var a="GET_BOOKING_LIST",c="BOOKING_LIST",i="DAT_VE_HOAN_TAT"},89:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var a="OPEN_LOADING",c="CLOSE_LOADING"},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var a="GET_MOVIES",c="SET_MOVIE_DETAIL"}},[[194,8,9]]]);
//# sourceMappingURL=main.e9f6795b.chunk.js.map