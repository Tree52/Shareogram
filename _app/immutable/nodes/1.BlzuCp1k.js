import{f as d,p as c,q as b,e as m,t as v,u as p}from"../chunks/disclose-version._E8aqDwe.js";import{F as i,x as $,G as h,g as x,l as _,C as q,I as w,D as C}from"../chunks/runtime.BsWpyk4E.js";import{s as f}from"../chunks/render.U3wQXdjA.js";import{i as D}from"../chunks/lifecycle.CFHKcVqW.js";import{s as E}from"../chunks/entry.geXVMDkT.js";function F(s,r,t){if(s==null)return r(void 0),i;const e=s.subscribe(r,t);return e.unsubscribe?()=>e.unsubscribe():e}function G(s,r,t){const e=t[r]??(t[r]={store:null,source:h(void 0),unsubscribe:i});if(e.store!==s)if(e.unsubscribe(),e.store=s??null,s==null)e.source.v=void 0,e.unsubscribe=i;else{var n=!0;e.unsubscribe=F(s,u=>{n?e.source.v=u:_(e.source,u)}),n=!1}return x(e.source)}function I(){const s={};return $(()=>{for(var r in s)s[r].unsubscribe()}),s}const S=()=>{const s=E;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},j={subscribe(s){return S().page.subscribe(s)}};var y=v("<h1> </h1> <p> </p>",1);function K(s,r){q(r,!1);const t=I(),e=()=>G(j,"$page",t);D();var n=y(),u=d(n),g=c(u);p(u);var a=b(b(u,!0)),l=c(a);p(a),w(()=>{var o;f(g,e().status),f(l,(o=e().error)==null?void 0:o.message)}),m(s,n),C()}export{K as component};
