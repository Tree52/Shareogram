import{h as f}from"./runtime.nDrN1sMM.js";function v(e){console.warn("hydration_mismatch")}const P=1,O=2,g=4,w=8,H=16,L=64,b=1,x=2,M=4,U=8,T=1,h=2,I="[",p="[!",A="]",S={},Y=Symbol(),B=["touchstart","touchmove","touchend"];let o=!1;function F(e){o=e}let r;function _(e){return r=e}function C(){if(r===null)throw v(),S;return r=r.nextSibling}function V(e){o&&(r=e)}function $(){for(var e=0,n=r;;){if(n.nodeType===8){var t=n.data;if(t===A){if(e===0)return n;e-=1}else(t===I||t===p)&&(e+=1)}var s=n.nextSibling;n.remove(),n=s}}var d,R;function k(){if(d===void 0){d=window,R=document;var e=Element.prototype;e.__click=void 0,e.__className="",e.__attributes=null,e.__e=void 0,Text.prototype.__t=void 0}}function u(){return document.createTextNode("")}function G(e){if(!o)return e.firstChild;var n=r.firstChild;return n===null&&(n=r.appendChild(u())),_(n),n}function Z(e,n){if(!o){var t=e.firstChild;return t instanceof Comment&&t.data===""?t.nextSibling:t}return r}function j(e,n=!1){if(!o)return e.nextSibling;var t=r.nextSibling,s=t.nodeType;if(n&&s!==3){var a=u();return t==null||t.before(a),_(a),a}return _(t),t}function q(e){e.textContent=""}function N(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function i(e,n){var t;(t=f).nodes??(t.nodes={start:e,end:n})}function z(e,n){var t=(n&T)!==0,s=(n&h)!==0,a,l=!e.startsWith("<!>");return()=>{if(o)return i(r,null),r;a||(a=N(l?e:"<!>"+e),t||(a=a.firstChild));var c=s?document.importNode(a,!0):a.cloneNode(!0);if(t){var m=c.firstChild,E=c.lastChild;i(m,E)}else i(c,c);return c}}function K(){if(!o){var e=u();return i(e,e),e}var n=r;return n.nodeType!==3&&(n.before(n=u()),_(n)),i(n,n),n}function Q(){if(o)return i(r,null),r;var e=document.createDocumentFragment(),n=document.createComment(""),t=u();return e.append(n,t),i(n,t),e}function W(e,n){if(o){f.nodes.end=r,C();return}e!==null&&e.before(n)}const y="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(y);export{d as $,P as A,O as B,L as C,H as D,w as E,g as F,R as G,p as H,B as P,Y as U,C as a,F as b,r as c,Q as d,W as e,Z as f,u as g,o as h,I as i,S as j,A as k,v as l,k as m,q as n,i as o,G as p,j as q,$ as r,_ as s,z as t,V as u,M as v,b as w,x,U as y,K as z};
