(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Jjks:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var i=e("TYT/"),o=e("utYi"),c=e("rta0"),r=e("lAl6"),u=e("Valr"),d=e("DUip");function s(n,t){1&n&&(i.Xb(0,"div",10),i.Xb(1,"h5",11),i.Cc(2,"Students"),i.Wb(),i.Wb())}function a(n,t){1&n&&(i.Xb(0,"div",10),i.Xb(1,"h5",11),i.Cc(2,"Add Questions"),i.Wb(),i.Wb())}var f=function(n){return{"width.em":n}},l=function(){function n(){this.sidenavWidth=4}return n.prototype.ngOnInit=function(){},n.prototype.increase=function(){this.sidenavWidth=15,console.log("increase sidenav width")},n.prototype.decrease=function(){this.sidenavWidth=4,console.log("decrease sidenav width")},n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=i.Lb({type:n,selectors:[["app-sidenav"]],decls:18,vars:5,consts:[[1,"example-sidenav-content"],[1,"sidenav-menu",3,"click"],["mode","side","opened","true",1,"example-sidenav",3,"ngStyle","mouseenter","mouseleave"],["sidenav",""],[1,"logomain"],["routerLink","/admin/students","routerLinkActive","active"],["mat-list-icon",""],["fxFlex","10"],["class","sidenav-item",4,"ngIf"],["routerLink","/admin/add-question","routerLinkActive","active"],[1,"sidenav-item"],[1,"lead"]],template:function(n,t){if(1&n){var e=i.Yb();i.Xb(0,"div",0),i.Xb(1,"mat-icon",1),i.fc("click",(function(){return i.wc(e),i.tc(4).toggle()})),i.Cc(2,"menu"),i.Wb(),i.Wb(),i.Xb(3,"mat-sidenav",2,3),i.fc("mouseenter",(function(){return t.increase()}))("mouseleave",(function(){return t.decrease()})),i.Xb(5,"div",4),i.Cc(6,"Admin"),i.Wb(),i.Xb(7,"mat-nav-list"),i.Xb(8,"mat-list-item",5),i.Xb(9,"mat-icon",6),i.Cc(10,"person"),i.Wb(),i.Sb(11,"div",7),i.Bc(12,s,3,0,"div",8),i.Wb(),i.Xb(13,"mat-list-item",9),i.Xb(14,"mat-icon",6),i.Cc(15,"settings"),i.Wb(),i.Sb(16,"div",7),i.Bc(17,a,3,0,"div",8),i.Wb(),i.Wb(),i.Wb()}2&n&&(i.Eb(3),i.oc("ngStyle",i.qc(3,f,t.sidenavWidth)),i.Eb(9),i.oc("ngIf",t.sidenavWidth>6),i.Eb(5),i.oc("ngIf",t.sidenavWidth>6))},directives:[o.a,c.a,u.l,r.d,r.b,d.b,d.c,r.a,u.k],styles:[""]}),n}()},PCNd:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var i=e("DUip"),o=e("Valr"),c=e("vvyD"),r=e("TYT/"),u=function(){function n(){}return n.\u0275mod=r.Pb({type:n}),n.\u0275inj=r.Ob({factory:function(t){return new(t||n)},imports:[[o.c,i.d,c.a]]}),n}()},jkDv:function(n,t,e){"use strict";e.r(t),e.d(t,"AdminModule",(function(){return f}));var i=e("Valr"),o=e("DUip"),c=e("TYT/"),r=e("Jjks"),u=[{path:"",component:function(){function n(){}return n.prototype.ngOnInit=function(){console.log("hhhhh")},n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.Lb({type:n,selectors:[["app-admin"]],decls:1,vars:0,template:function(n,t){1&n&&c.Sb(0,"app-sidenav")},directives:[r.a],styles:[""]}),n}()},{path:"students",loadChildren:function(){return e.e(7).then(e.bind(null,"q7aF")).then((function(n){return n.StudentsModule}))}},{path:"add-question",loadChildren:function(){return e.e(6).then(e.bind(null,"3KXt")).then((function(n){return n.AddQuestionModule}))}}],d=function(){function n(){}return n.\u0275mod=c.Pb({type:n}),n.\u0275inj=c.Ob({factory:function(t){return new(t||n)},imports:[[o.d.forChild(u)],o.d]}),n}(),s=e("cUzu"),a=e("PCNd"),f=function(){function n(){}return n.\u0275mod=c.Pb({type:n}),n.\u0275inj=c.Ob({factory:function(t){return new(t||n)},imports:[[i.c,a.a,d,o.d,s.b]]}),n}()}}]);