import{i as x,S as A,h as r,o as O,j,k as P,a as m,l as S,s as d,m as g,n as b,g as y,U as l,p as D,d as I,q as L,t as M,v as F,H as K,w as Y,x as E,y as R,z as w,E as q}from"./runtime.B-voh4SI.js";import{h as z,b as T,d as B}from"./disclose-version.DskMrnCl.js";function _(e,t=!0,i=null,s){if(typeof e=="object"&&e!=null&&!x(e)&&!(A in e)){if(r in e){const f=e[r];if(f.t===e||f.p===e)return f.p}const n=L(e);if(n===O||n===j){const f=new Proxy(e,H);return P(e,r,{value:{s:new Map,v:m(0),a:S(e),i:t,p:f,t:e},writable:!0,enumerable:!1}),f}}return e}function h(e,t){if(typeof e=="object"&&e!=null&&r in e){const i=t.get(e);if(i!==void 0)return i;if(S(e)){const s=[];t.set(e,s);for(const n of e)s.push(h(n,t));return s}else{const s={},n=Reflect.ownKeys(e),f=M(e);t.set(e,s);for(const o of n)if(o!==r)if(f[o].get)P(s,o,f[o]);else{const c=e[o];s[o]=h(c,t)}return s}}return e}function C(e){return h(e,new Map)}function N(e,t=1){d(e,e.v+t)}const H={defineProperty(e,t,i){if(i.value){const s=e[r],n=s.s.get(t);n!==void 0&&d(n,_(i.value,s.i,s))}return Reflect.defineProperty(e,t,i)},deleteProperty(e,t){const i=e[r],s=i.s.get(t),n=i.a,f=delete e[t];if(n&&f){const o=i.s.get("length"),c=e.length-1;o!==void 0&&o.v!==c&&d(o,c)}return s!==void 0&&d(s,l),f&&N(i.v),f},get(e,t,i){var f;if(t===r)return Reflect.get(e,r);const s=e[r];let n=s.s.get(t);if(n===void 0&&(!(t in e)||(f=g(e,t))!=null&&f.writable)&&(n=(s.i?m:b)(_(e[t],s.i,s)),s.s.set(t,n)),n!==void 0){const o=y(n);return o===l?void 0:o}return Reflect.get(e,t,i)},getOwnPropertyDescriptor(e,t){const i=Reflect.getOwnPropertyDescriptor(e,t);if(i&&"value"in i){const n=e[r].s.get(t);n&&(i.value=y(n))}return i},has(e,t){var f;if(t===r)return!0;const i=e[r],s=Reflect.has(e,t);let n=i.s.get(t);return(n!==void 0||D!==null&&(!s||(f=g(e,t))!=null&&f.writable))&&(n===void 0&&(n=(i.i?m:b)(s?_(e[t],i.i,i):l),i.s.set(t,n)),y(n)===l)?!1:s},set(e,t,i,s){const n=e[r];let f=n.s.get(t);f===void 0&&(I(()=>s[t]),f=n.s.get(t)),f!==void 0&&d(f,_(i,n.i,n));const o=n.a,c=!(t in e);if(o&&t==="length")for(let a=i;a<e.length;a+=1){const u=n.s.get(a+"");u!==void 0&&d(u,l)}if(e[t]=i,c){if(o){const a=n.s.get("length"),u=e.length;a!==void 0&&a.v!==u&&d(a,u)}N(n.v)}return!0},ownKeys(e){const t=e[r];return y(t.v),Reflect.ownKeys(e)}};function G(e,t,i,s=null,n=!1){var f=null,o=null,c=null,a=n?q:0;F(()=>{if(c===(c=!!t()))return;let u=!1;if(z){const k=e.data===K;c===k&&(Y(B),T(!1),u=!0)}c?(f?E(f):f=R(()=>i(e)),o&&w(o,()=>{o=null})):(o?E(o):s&&(o=R(()=>s(e))),f&&w(f,()=>{f=null})),u&&T(!0)},a)}export{G as i,_ as p,C as s};
