import{i as A,S as r,o as O,h as S,j,a as g,k as D,s as u,l as b,g as y,m as I,d as N,n as k,p as L,q as R,t as w,v as T,E as q}from"./runtime.DMfmyfyl.js";import{U as _,h as m,a as F,H,r as K,s as M,d as E,e as U}from"./disclose-version.C6sGzUTY.js";function h(e,t=null,s){if(typeof e=="object"&&e!=null&&!A(e)){if(r in e){const n=e[r];if(n.t===e||n.p===e)return n.p}const f=k(e);if(f===O||f===S){const n=new Proxy(e,Y);return j(e,r,{value:{s:new Map,v:g(0),a:D(e),p:n,t:e},writable:!0,enumerable:!1}),n}}return e}function P(e,t=1){u(e,e.v+t)}const Y={defineProperty(e,t,s){if(s.value){const f=e[r],n=f.s.get(t);n!==void 0&&u(n,h(s.value,f))}return Reflect.defineProperty(e,t,s)},deleteProperty(e,t){const s=e[r],f=s.s.get(t),n=s.a,i=delete e[t];if(n&&i){const a=s.s.get("length"),o=e.length-1;a!==void 0&&a.v!==o&&u(a,o)}return f!==void 0&&u(f,_),i&&P(s.v),i},get(e,t,s){var i;if(t===r)return Reflect.get(e,r);const f=e[r];let n=f.s.get(t);if(n===void 0&&(!(t in e)||(i=b(e,t))!=null&&i.writable)&&(n=g(h(e[t],f)),f.s.set(t,n)),n!==void 0){const a=y(n);return a===_?void 0:a}return Reflect.get(e,t,s)},getOwnPropertyDescriptor(e,t){const s=Reflect.getOwnPropertyDescriptor(e,t);if(s&&"value"in s){const n=e[r].s.get(t);n&&(s.value=y(n))}return s},has(e,t){var i;if(t===r)return!0;const s=e[r],f=Reflect.has(e,t);let n=s.s.get(t);return(n!==void 0||I!==null&&(!f||(i=b(e,t))!=null&&i.writable))&&(n===void 0&&(n=g(f?h(e[t],s):_),s.s.set(t,n)),y(n)===_)?!1:f},set(e,t,s,f){const n=e[r];let i=n.s.get(t);i===void 0&&(N(()=>f[t]),i=n.s.get(t)),i!==void 0&&u(i,h(s,n));const a=n.a,o=!(t in e);if(a&&t==="length")for(let l=s;l<e.length;l+=1){const d=n.s.get(l+"");d!==void 0&&u(d,_)}var c=Reflect.getOwnPropertyDescriptor(e,t);if(c!=null&&c.set?c.set.call(f,s):e[t]=s,o){if(a){const l=n.s.get("length"),d=e.length;l!==void 0&&l.v!==d&&u(l,d)}P(n.v)}return!0},ownKeys(e){const t=e[r];return y(t.v),Reflect.ownKeys(e)}};function v(e){if(e!==null&&typeof e=="object"&&r in e){var t=e[r];if(t)return t.p}return e}function C(e,t){return Object.is(v(e),v(t))}function Z(e,t,s,f=null,n=!1){m&&F();var i=e,a=null,o=null,c=null,l=n?q:0;L(()=>{if(c===(c=!!t()))return;let d=!1;if(m){const x=i.data===H;c===x&&(i=K(),M(i),E(!1),d=!0)}c?(a?R(a):a=w(()=>s(i)),o&&T(o,()=>{o=null})):(o?R(o):f&&(o=w(()=>f(i))),a&&T(a,()=>{a=null})),d&&E(!0)},l),m&&(i=U)}export{C as a,v as g,Z as i,h as p};
