import{a as d,t as m,e as o,g as c,f as v,i as b}from"../chunks/disclose-version.DskMrnCl.js";import{A as a,B as h,d as $,g as x,U as f,s as l,n as I,C as y,D as A,F as D}from"../chunks/runtime.B-voh4SI.js";import{i as E}from"../chunks/lifecycle.e8NTOEYm.js";import{s as N}from"../chunks/entry.12wXCwZz.js";function U(s,t,n){if(s==null)return t(void 0),a;const e=s.subscribe(t,n);return e.unsubscribe?()=>e.unsubscribe():e}function k(s,t,n){let e=n[t];const r=e===void 0;r&&(e={store:null,last_value:null,value:I(f),unsubscribe:a},n[t]=e),(r||e.store!==s)&&(e.unsubscribe(),e.store=s??null,e.unsubscribe=w(s,e.value));const u=x(e.value);return u===f?e.last_value:u}function w(s,t){return s==null?(l(t,void 0),a):U(s,n=>l(t,n))}function B(s){C(()=>{let t;for(t in s)s[t].unsubscribe()})}function C(s){h(()=>()=>$(s))}const F=()=>{const s=N;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},L={subscribe(s){return F().page.subscribe(s)}};var S=m("<h1> </h1> <p> </p>",1);function z(s,t){y(t,!1);const n={};B(n);const e=()=>k(L,"$page",n);E();var r=S(),u=v(r),p=c(u),g=b(b(u,!0)),_=c(g);A(()=>{var i;o(p,e().status),o(_,(i=e().error)==null?void 0:i.message)}),d(s,r),D()}export{z as component};