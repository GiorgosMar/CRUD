(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,a){e.exports=a(178)},169:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),o=a(24),u=a.n(o),i=a(35),s=a(8),m=a(275),f=a(63),p=a(15),d=(a(169),a(122)),b=a(277),E=a(31),h=a(278),g=a(283),v=a(260),O=a(287),j=a(285),x=a(286),k=a(267),y=a(280),w=a(288),C=a(276),S=function(){var e=Object(p.g)(),t=Object(n.useState)({fName:null,lName:null,dateOfBirth:null,afm:null}),a=Object(s.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!1),m=Object(s.a)(o,2),f=m[0],d=m[1],b=function(){var t=Object(i.a)(u.a.mark(function t(a){var n,r,l;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,fetch("/employee?afm=".concat(c.afm));case 4:return n=t.sent,t.next=7,n.json();case 7:if(r=t.sent,null!==c.afm){t.next=12;break}d("To \u03c0\u03b5\u03b4\u03af\u03bf \u0391\u03a6\u039c \u03b4\u03b5\u03bd \u03bc\u03c0\u03bf\u03c1\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03b9\u03bd\u03b1\u03b9 \u03ba\u03b5\u03bd\u03cc!"),t.next=24;break;case 12:if(!(c.afm.length<9||c.afm.length>9)){t.next=16;break}d("To \u03c0\u03b5\u03b4\u03af\u03bf \u0391\u03a6\u039c \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03c0\u03b5\u03c1\u03b9\u03ad\u03c7\u03b5\u03b9 9 \u03c8\u03b7\u03c6\u03af\u03b1!"),t.next=24;break;case 16:if(r.afm==c.afm){t.next=23;break}return l=c,t.next=20,fetch("/employee",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});case 20:e("/"),t.next=24;break;case 23:d("\u03a4\u03bf \u0391.\u03a6.\u039c. \u03c5\u03c0\u03ac\u03c1\u03c7\u03b5\u03b9 \u03ae\u03b4\u03b7!");case 24:t.next=29;break;case 26:t.prev=26,t.t0=t.catch(1),d("\u039a\u03ac\u03c4\u03b9 \u03c0\u03ae\u03b3\u03b5 \u03c3\u03c4\u03c1\u03b1\u03b2\u03ac!");case 29:case"end":return t.stop()}},t,null,[[1,26]])}));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement(v.a,{open:!0},r.a.createElement(k.a,null,"\u0395\u0393\u0393\u03a1\u0391\u03a6\u0397"),r.a.createElement(j.a,null,r.a.createElement(x.a,null,"\u0395\u0399\u03a3\u0391\u0393\u0395\u03a4\u0395 \u03a4\u0391 \u03a3\u03a4\u039f\u0399\u03a7\u0395\u0399\u0391."),r.a.createElement(h.a,{autoFocus:!0,margin:"dense",id:"fName",label:"ONOMA",type:"text",fullWidth:!0,variant:"standard",value:c.fName,InputLabelProps:{shrink:!0},onChange:function(e){return l(Object(E.a)({},c,{fName:e.target.value}))}}),r.a.createElement(h.a,{margin:"dense",id:"lName",label:"\u0395\u03a0\u03a9\u039d\u03a5\u039c\u039f",type:"text",fullWidth:!0,variant:"standard",value:c.lName,InputLabelProps:{shrink:!0},onChange:function(e){return l(Object(E.a)({},c,{lName:e.target.value}))}}),r.a.createElement(C.a,{inputFormat:"dd/MM/yyyy",label:"\u0397\u039c\u0395\u03a1\u039f\u039c\u0397\u039d\u0399\u0391 \u0393\u0395\u039d\u039d\u0397\u03a3\u0397\u03a3",value:new Date(c.dateOfBirth),onChange:function(e){var t;l(Object(E.a)({},c,{dateOfBirth:(t=e,new Date(t).toLocaleDateString("en-CA"))}))},renderInput:function(e){return r.a.createElement(h.a,e)}}),r.a.createElement(h.a,{margin:"dense",id:"afm",label:"\u0391.\u03a6.\u039c.",type:"text",fullWidth:!0,variant:"standard",value:c.afm,InputLabelProps:{shrink:!0},onChange:function(e){return l(Object(E.a)({},c,{afm:e.target.value}))}})),r.a.createElement(w.a,null,f&&r.a.createElement(y.a,{severity:"error"},f)),r.a.createElement(O.a,null,r.a.createElement(g.a,{color:"error",onClick:function(){return e("/")}},"\u03a0\u0399\u03a3\u03a9"),r.a.createElement(g.a,{color:"success",onClick:b},"\u0395\u0393\u0393\u03a1\u0391\u03a6\u0397"))))},N=a(290),I=a(294),D=a(293),T=a(289),P=a(291),A=a(292),F=a(137),W=a(273),L=a(124),B=a.n(L),M=a(125),J=a.n(M),q=a(126),z=a.n(q),G=a(127),U=a.n(G),R=a(123),V=(a(176),a(129)),_=a.n(V),H=a(128),K=a.n(H),Q=a(272);var X=function(e){var t=e.setAuth,a=Object(p.g)(),c=Object(n.useState)([]),l=Object(s.a)(c,2),o=l[0],m=l[1],f=Object(n.useState)(1),d=Object(s.a)(f,2),b=d[0],E=d[1],h=Object(n.useState)(),v=Object(s.a)(h,2),O=v[0],j=v[1],x=Object(n.useState)(!1),k=Object(s.a)(x,2),y=k[0],w=k[1],C=Object(n.useState)(!1),S=Object(s.a)(C,2),L=S[0],M=S[1],q=function(){w(b>=O)},G=function(){var e=Object(i.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/employee/".concat(t),{method:"DELETE"});case 3:e.sent,V(),a("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(i.a)(u.a.mark(function e(){var t,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/employee?page=".concat(b));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,m(a.employees),j(a.countPages),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0.message);case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){V(),q()},[b]),Object(n.useEffect)(function(){q(),M(1==b)},[o]);var H=function(){var e=Object(i.a)(u.a.mark(function e(a){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault();try{localStorage.removeItem("token"),t(!1)}catch(n){console.error(n.message)}case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("p",{align:"left"},"https://github.com/GiorgosMar/CRUD"),r.a.createElement("h1",{align:"center"},"\u039b\u0399\u03a3\u03a4\u0391"),r.a.createElement(Q.a,{spacing:2,direction:"column"},r.a.createElement(Q.a,{spacing:113,display:"flex",direction:"row"},r.a.createElement(g.a,{variant:"outlined",color:"success",size:"large",onClick:function(){return a("/insert")},startIcon:r.a.createElement(B.a,null),endIcon:r.a.createElement(J.a,null)},"\u03a0\u03a1\u039f\u03a3\u0398\u0397\u039a\u0397"),r.a.createElement(g.a,{onClick:function(e){return H(e)},variant:"outlined",color:"error",size:"large"},"\u0391\u03c0\u03bf\u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7")),r.a.createElement(T.a,{component:F.a},r.a.createElement(N.a,{sx:{minWidth:650},"aria-label":"simple table"},r.a.createElement(P.a,null,r.a.createElement(A.a,null,r.a.createElement(D.a,null,"\u039f\u039d\u039f\u039c\u0391"),r.a.createElement(D.a,{align:"center"},"\u0395\u03a0\u03a9\u039d\u03a5\u039c\u039f"),r.a.createElement(D.a,{align:"center"},"\u0397\u039c\u0395\u03a1\u039f\u039c\u0397\u039d\u0399\u0391 \u0393\u0395\u039d\u039d\u0397\u03a3\u0397\u03a3"),r.a.createElement(D.a,{align:"center"},"\u0391.\u03a6.\u039c."),r.a.createElement(D.a,{align:"center"},"\u0395\u039d\u0397\u039c\u0395\u03a1\u03a9\u03a3\u0397"),r.a.createElement(D.a,{align:"center"},"\u0394\u0399\u0391\u0393\u03a1\u0391\u03a6\u0397"))),r.a.createElement(I.a,null,o.map(function(e){return r.a.createElement(A.a,{key:e.id,sx:{"&:last-child td, &:last-child th":{border:0}}},r.a.createElement(D.a,{component:"th",scope:"row"},e.firstname),r.a.createElement(D.a,{align:"center"},e.lastname),r.a.createElement(D.a,{align:"center"},(t=e.dateofbirth,new Date(t).toLocaleDateString("en-GB"))),r.a.createElement(D.a,{align:"center"},e.afm),r.a.createElement(D.a,{align:"center"},r.a.createElement(g.a,{variant:"outlined",color:"warning",onClick:function(){return a("/".concat(e.id,"/update"))},endIcon:r.a.createElement(z.a,null)},"\u0395\u03bd\u03b7\u03bc\u03ad\u03c1\u03c9\u03c3\u03b7")),r.a.createElement(D.a,{align:"center"},r.a.createElement(g.a,{variant:"outlined",color:"error",onClick:function(){return t=e.id,void Object(R.confirmAlert)({title:"\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae \u03c7\u03c1\u03ae\u03c3\u03c4\u03b7",message:"\u0395\u03af\u03c3\u03c4\u03b5 \u03c3\u03af\u03b3\u03bf\u03c5\u03c1\u03bf\u03c2/\u03b7 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b4\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae;",buttons:[{label:"\u0391\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7",onClick:a("/")},{label:"\u039d\u03b1\u03b9",onClick:function(){return G(t)}}]});var t},endIcon:r.a.createElement(U.a,null)},"\u0394\u0399\u0391\u0393\u03a1\u0391\u03a6\u0397")));var t}))),r.a.createElement(W.a,{align:"right"},r.a.createElement("span",null,"\u03a3\u03b5\u03bb\u03af\u03b4\u03b1 ",b,"\u03b7"),r.a.createElement(g.a,{disabled:L,variant:"raised",style:{backgroundColor:"transparent"},onClick:function(){b>1&&E(function(e){return e-1})}},r.a.createElement(K.a,null)),r.a.createElement(g.a,{disabled:y,variant:"raised",style:{backgroundColor:"transparent"},onClick:function(){b<O&&E(function(e){return e+1})}},r.a.createElement(_.a,null))))))},Y=function(){var e=Object(p.g)(),t=Object(p.h)(),a=Object(n.useState)({fName:null,lName:null,dateOfBirth:null,afm:null}),c=Object(s.a)(a,2),l=c[0],o=c[1],m=Object(n.useState)(!1),f=Object(s.a)(m,2),d=f[0],b=f[1],S=function(){var a=Object(i.a)(u.a.mark(function a(n){var r,c;return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,a.next=4,fetch("/employee/?afm=".concat(l.afm));case 4:return r=a.sent,a.next=7,r.json();case 7:if(c=a.sent,0!==l.afm.length){a.next=12;break}b("To \u03c0\u03b5\u03b4\u03af\u03bf \u0391\u03a6\u039c \u03b4\u03b5\u03bd \u03bc\u03c0\u03bf\u03c1\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03b9\u03bd\u03b1\u03b9 \u03ba\u03b5\u03bd\u03cc!"),a.next=23;break;case 12:if(!(l.afm.length<9||l.afm.length>9)){a.next=16;break}b("To \u03c0\u03b5\u03b4\u03af\u03bf \u0391\u03a6\u039c \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03c0\u03b5\u03c1\u03b9\u03ad\u03c7\u03b5\u03b9 9 \u03c8\u03b7\u03c6\u03af\u03b1!"),a.next=23;break;case 16:if(c.afm===l.afm&&c.id!=t.id){a.next=22;break}return a.next=19,fetch("/employee/".concat(t.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});case 19:e("/"),a.next=23;break;case 22:b("\u03a4\u03bf \u0391.\u03a6.\u039c. \u03c5\u03c0\u03ac\u03c1\u03c7\u03b5\u03b9 \u03ae\u03b4\u03b7!");case 23:a.next=28;break;case 25:a.prev=25,a.t0=a.catch(1),b("\u039a\u03ac\u03c4\u03b9 \u03c0\u03ae\u03b3\u03b5 \u03c3\u03c4\u03c1\u03b1\u03b2\u03ac");case 28:case"end":return a.stop()}},a,null,[[1,25]])}));return function(e){return a.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(u.a.mark(function e(a){var n,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/employee/".concat(t.id));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,o({fName:r.firstname,lName:r.lastname,dateOfBirth:I(r.dateofbirth),afm:r.afm});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){t.id&&N(t.id)},[t.id]);var I=function(e){return new Date(e).toLocaleDateString("en-CA")};return r.a.createElement(n.Fragment,null,r.a.createElement(v.a,{open:!0},r.a.createElement(k.a,null,"\u0395\u039d\u0397\u039c\u0395\u03a1\u03a9\u03a3\u0397"),r.a.createElement(j.a,null,r.a.createElement(x.a,null,"\u0395\u0399\u03a3\u0391\u0393\u0395\u03a4\u0395 \u03a4\u0391  \u03a3\u03a4\u039f\u0399\u03a7\u0395\u0399\u0391."),r.a.createElement(h.a,{autoFocus:!0,margin:"dense",id:"fName",label:"ONOMA",type:"text",fullWidth:!0,variant:"standard",InputLabelProps:{shrink:!0},value:l.fName,onChange:function(e){return o(Object(E.a)({},l,{fName:e.target.value}))}}),r.a.createElement(h.a,{margin:"dense",id:"lName",label:"\u0395\u03a0\u03a9\u039d\u03a5\u039c\u039f",type:"text",fullWidth:!0,variant:"standard",InputLabelProps:{shrink:!0},value:l.lName,onChange:function(e){return o(Object(E.a)({},l,{lName:e.target.value}))}}),r.a.createElement(C.a,{inputFormat:"dd/MM/yyyy",label:"\u0397\u039c\u0395\u03a1\u039f\u039c\u0397\u039d\u0399\u0391 \u0393\u0395\u039d\u039d\u0397\u03a3\u0397\u03a3",value:new Date(l.dateOfBirth),onChange:function(e){o(Object(E.a)({},l,{dateOfBirth:I(e)}))},renderInput:function(e){return r.a.createElement(h.a,e)}}),r.a.createElement(h.a,{margin:"dense",id:"afm",label:"\u0391.\u03a6.\u039c.",type:"text",fullWidth:!0,variant:"standard",InputLabelProps:{shrink:!0},value:l.afm,onChange:function(e){return o(Object(E.a)({},l,{afm:e.target.value}))}})),r.a.createElement(w.a,null,d&&r.a.createElement(y.a,{severity:"error"},d)),r.a.createElement(O.a,null,r.a.createElement(g.a,{color:"error",onClick:function(){return e("/")}},"\u03a0\u0399\u03a3\u03a9"),r.a.createElement(g.a,{color:"success",onClick:S},"\u0395\u03bd\u03b7\u03bc\u03ad\u03c1\u03c9\u03c3\u03b7"))))},Z=a(284),$=a(274),ee=a(279),te=a(282),ae=a(295),ne=a(130),re=a.n(ne),ce=a(190),le=function(e){var t=e.setAuth,a=Object(n.useState)({email:"",password:""}),c=Object(s.a)(a,2),l=c[0],o=c[1],m=Object(n.useState)(!1),f=Object(s.a)(m,2),p=f[0],d=f[1],b=l.email,h=l.password,v=function(){var e=Object(i.a)(u.a.mark(function e(a){var n,r,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,n={email:b,password:h},e.next=5,fetch("/authentication/login",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)});case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,console.log(c),"\u039b\u03ac\u03b8\u03bf\u03c2 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03b1!"===c?d("\u039b\u03ac\u03b8\u03bf\u03c2 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03b1!"):"\u03a3\u03c5\u03bc\u03c0\u03bb\u03b7\u03c1\u03ce\u03c3\u03c4\u03b5 \u03c4\u03b1 \u03c0\u03b5\u03b4\u03af\u03b1"===c?d("\u03a3\u03c5\u03bc\u03c0\u03bb\u03b7\u03c1\u03ce\u03c3\u03c4\u03b5 \u03c4\u03b1 \u03c0\u03b5\u03b4\u03af\u03b1!"):"\u039b\u03ac\u03b8\u03bf\u03c2 Email"===c?d("\u039b\u03ac\u03b8\u03bf\u03c2 Email!"):c.jwtToken?(localStorage.setItem("Token",c.jwtToken),t(!0)):t(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.error(e.t0.message);case 16:case"end":return e.stop()}},e,null,[[1,13]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement(n.Fragment,null,r.a.createElement(w.a,{component:"main",maxWidth:"xs"},r.a.createElement($.a,null),r.a.createElement(ae.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement(Z.a,{sx:{m:1,bgcolor:"secondary.main"}},r.a.createElement(re.a,null)),r.a.createElement(ce.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement(ae.a,{component:"form",onSubmit:v,noValidate:!0,sx:{mt:1}},r.a.createElement(ee.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:l.email,onChange:function(e){return o(Object(E.a)({},l,{email:e.target.value}))},autoFocus:!0}),r.a.createElement(ee.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:l.password,onChange:function(e){return o(Object(E.a)({},l,{password:e.target.value}))},autoComplete:"current-password"}),r.a.createElement(g.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2}},"\u03a3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7"),r.a.createElement(te.a,null,p&&r.a.createElement(y.a,{severity:"error"},p)))))))};var oe=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],l=function(){var e=Object(i.a)(u.a.mark(function e(){var t,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/authentication/verify",{method:"POST",headers:{jwt_token:localStorage.token}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,c(!0===a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){l()},[]);var o=function(e){c(e)};return r.a.createElement(d.a,{dateAdapter:b.a},r.a.createElement(f.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(m.a,{fixed:!0},r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/login",element:a?r.a.createElement(p.a,{to:"/"}):r.a.createElement(le,{setAuth:o})}),r.a.createElement(p.b,{path:"/",element:a?r.a.createElement(X,{setAuth:o}):r.a.createElement(p.a,{to:"/login"})}),r.a.createElement(p.b,{path:"/insert",element:a?r.a.createElement(S,null):r.a.createElement(p.a,{to:"/login"})}),r.a.createElement(p.b,{path:"/:id/update",element:a?r.a.createElement(Y,null):r.a.createElement(p.a,{to:"/login"})}))))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root"))}},[[162,1,2]]]);
//# sourceMappingURL=main.b892430f.chunk.js.map