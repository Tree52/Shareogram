import{f as h,p as i,q as f,e as $,t as x,u as b}from"../chunks/disclose-version.CHAgwDXk.js";import{z as w,A as p,y,B as l,u as k,C as q,f as m,D as z,F as a,t as A,G as B,e as C,w as D,I as E,x as F}from"../chunks/runtime.nDrN1sMM.js";import{s as g}from"../chunks/render.C4by02Ks.js";import{s as G}from"../chunks/entry.CG3KMUka.js";function I(){const s=y,e=s.l.u;e&&(e.b.length&&w(()=>{d(s),l(e.b)}),p(()=>{const r=k(()=>e.m.map(q));return()=>{for(const t of r)typeof t=="function"&&t()}}),e.a.length&&p(()=>{d(s),l(e.a)}))}function d(s){if(s.l.s)for(const e of s.l.s)m(e);z(s.s)}function S(s,e,r){if(s==null)return e(void 0),a;const t=s.subscribe(e,r);return t.unsubscribe?()=>t.unsubscribe():t}function j(s,e,r){const t=r[e]??(r[e]={store:null,source:B(void 0),unsubscribe:a});if(t.store!==s)if(t.unsubscribe(),t.store=s??null,s==null)t.source.v=void 0,t.unsubscribe=a;else{var u=!0;t.unsubscribe=S(s,n=>{u?t.source.v=n:C(t.source,n)}),u=!1}return m(t.source)}function H(){const s={};return A(()=>{for(var e in s)s[e].unsubscribe()}),s}const J=()=>{const s=G;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},K={subscribe(s){return J().page.subscribe(s)}};var L=x("<h1> </h1> <p> </p>",1);function Q(s,e){D(e,!1);const r=H(),t=()=>j(K,"$page",r);I();var u=L(),n=h(u),v=i(n);b(n);var o=f(f(n,!0)),_=i(o);b(o),E(()=>{var c;g(v,t().status),g(_,(c=t().error)==null?void 0:c.message)}),$(s,u),F()}export{Q as component};
