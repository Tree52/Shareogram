import{a as l,t as d}from"../chunks/disclose-version.qG5ofjPX.js";import{D as a,F as m,G as v,g as $,s as h,I as x,j as _,J as j,K as w,L as c,M as b,N as D}from"../chunks/runtime.Bvg2cBRz.js";import{s as p}from"../chunks/render.fzw0RiVP.js";import{i as E}from"../chunks/lifecycle.7t52ZXyt.js";import{s as F}from"../chunks/entry.QW2xnBOD.js";function G(s,r,t){if(s==null)return r(void 0),a;const e=s.subscribe(r,t);return e.unsubscribe?()=>e.unsubscribe():e}function I(s,r,t){const e=t[r]??(t[r]={store:null,source:v(void 0),unsubscribe:a});if(e.store!==s)if(e.unsubscribe(),e.store=s??null,s==null)e.source.v=void 0,e.unsubscribe=a;else{var n=!0;e.unsubscribe=G(s,u=>{n?e.source.v=u:h(e.source,u)}),n=!1}return $(e.source)}function J(){const s={};return m(()=>{for(var r in s)s[r].unsubscribe()}),s}const K=()=>{const s=F;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},L={subscribe(s){return K().page.subscribe(s)}};var M=d("<h1> </h1> <p> </p>",1);function A(s,r){x(r,!1);const t=J(),e=()=>I(L,"$page",t);E();var n=M(),u=_(n),f=c(u);b(u);var i=D(u,2),g=c(i);b(i),j(()=>{var o;p(f,e().status),p(g,(o=e().error)==null?void 0:o.message)}),l(s,n),w()}export{A as component};