import{g as S,h as v,i as A,d as p,s as T,e as h,j as D,a as N,k as q,l as B,m as C,n as I,o as M,P}from"./disclose-version.CSJjsmsW.js";import{x as Y,y as F,k as V,l as W,q as $,H as j,z,A as x,B as G,v as J,C as K,n as Q,D as U,c as X}from"./runtime.DgM04zJ0.js";const O=new Set,k=new Set;function Z(r,e,t,n){function i(a){if(n.capture||w.call(e,a),!a.cancelBubble)return t.call(this,a)}return r.startsWith("pointer")||r==="wheel"?F(()=>{e.addEventListener(r,i,n)}):e.addEventListener(r,i,n),i}function ne(r,e,t,n,i){var a={capture:n,passive:i},l=Z(r,e,t,a);(e===document.body||e===window||e===document)&&Y(()=>{e.removeEventListener(r,l,a)})}function ie(r){for(var e=0;e<r.length;e++)O.add(r[e]);for(var t of k)t(r)}function w(r){var R;var e=this,t=e.ownerDocument,n=r.type,i=((R=r.composedPath)==null?void 0:R.call(r))||[],a=i[0]||r.target,l=0,_=r.__root;if(_){var u=i.indexOf(_);if(u!==-1&&(e===document||e===window)){r.__root=e;return}var c=i.indexOf(e);if(c===-1)return;u<=c&&(l=u)}if(a=i[l]||r.target,a!==e){V(r,"currentTarget",{configurable:!0,get(){return a||t}});try{for(var y,s=[];a!==null;){var f=a.parentNode||a.host||null;try{var d=a["__"+n];if(d!==void 0&&!a.disabled)if(W(d)){var[b,...E]=d;b.apply(a,[r,...E])}else d.call(a,r)}catch(m){y?s.push(m):y=m}if(r.cancelBubble||f===e||f===null)break;a=f}if(y){for(let m of s)queueMicrotask(()=>{throw m});throw y}}finally{r.__root=e,a=e}}}let o;function ee(){o=void 0}function se(r){let e=null,t=v;var n;if(v){for(e=h,o===void 0&&(o=document.head.firstChild);o!==null&&(o.nodeType!==8||o.data!==A);)o=o.nextSibling;o===null?p(!1):o=T(o.nextSibling)}v||(n=document.head.appendChild(S()));try{$(()=>r(n),j)}finally{t&&(p(!0),o=h,T(e))}}function de(r,e){(r.__t??(r.__t=r.nodeValue))!==e&&(r.nodeValue=r.__t=e)}function re(r,e){const t=e.anchor??e.target.appendChild(S());return H(r,{...e,anchor:t})}function oe(r,e){e.intro=e.intro??!1;const t=e.target,n=v,i=h;try{for(var a=t.firstChild;a&&(a.nodeType!==8||a.data!==A);)a=a.nextSibling;if(!a)throw D;p(!0),T(a),N();const l=H(r,{...e,anchor:a});if(h===null||h.nodeType!==8||h.data!==q)throw B(),D;return p(!1),l}catch(l){if(l===D)return e.recover===!1&&z(),C(),I(t),p(!1),re(r,e);throw l}finally{p(n),T(i),ee()}}const g=new Map;function H(r,{target:e,anchor:t,props:n={},events:i,context:a,intro:l=!0}){C();var _=new Set,u=s=>{for(var f=0;f<s.length;f++){var d=s[f];if(!_.has(d)){_.add(d);var b=P.includes(d);e.addEventListener(d,w,{passive:b});var E=g.get(d);E===void 0?(document.addEventListener(d,w,{passive:b}),g.set(d,1)):g.set(d,E+1)}}};u(x(O)),k.add(u);var c=void 0,y=G(()=>(J(()=>{if(a){K({});var s=X;s.c=a}i&&(n.$$events=i),v&&M(t,null),c=r(t,n)||{},v&&(Q.nodes.end=h),a&&U()}),()=>{for(var s of _){e.removeEventListener(s,w);var f=g.get(s);--f===0?(document.removeEventListener(s,w),g.delete(s)):g.set(s,f)}k.delete(u),L.delete(c)}));return L.set(c,y),c}let L=new WeakMap;function le(r){const e=L.get(r);e==null||e()}export{se as a,ie as d,ne as e,oe as h,re as m,de as s,le as u};