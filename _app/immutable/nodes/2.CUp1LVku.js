import{g as _t,E as $e,h as G,s as Te,a as ht,H as mt,r as Ke,b as Ae,c as ue,k as gt,A as ie,B as Xe,C as Ne,n as bt,D as yt,F as pt,p as H,q as p,e as T,t as A,$ as ye,u as E,f as xe,G as xt}from"../chunks/disclose-version.CHAgwDXk.js";import{c as et,j as wt,o as Ct,k as It,r as tt,l as nt,p as kt,T as Tt,q as At,h as Fe,e as fe,G as Et,s as we,U as jt,V as St,W as Ht,i as Nt,S as Mt,a as Rt,X as Ot,Y as Dt,K as lt,f as O,O as B,w as he,A as Le,x as me,I as K,Z as U,z as Xt}from"../chunks/runtime.nDrN1sMM.js";import{d as ze,e as se,s as de,a as Lt}from"../chunks/render.C4by02Ks.js";import{p as ve,i as F}from"../chunks/if.C8FhnIt-.js";function Ye(t){return pe(t,new Map)}function pe(t,e,n,l){if(typeof t=="object"&&t!==null){const v=e.get(t);if(v!==void 0)return v;if(et(t)){const s=[];e.set(t,s);for(let h=0;h<t.length;h+=1)s.push(pe(t[h],e));return s}if(wt(t)===Ct){const s={};e.set(t,s);for(var u in t)s[u]=pe(t[u],e);return s}if(t instanceof Date)return structuredClone(t);if(typeof t.toJSON=="function")return pe(t.toJSON(),e)}if(t instanceof EventTarget)return t;try{return structuredClone(t)}catch{return t}}let Ee=null;function Q(t,e){return e}function zt(t,e,n,l){for(var u=[],v=e.length,s=0;s<v;s++)jt(e[s].e,u,!0);var h=v>0&&u.length===0&&n!==null;if(h){var x=n.parentNode;bt(x),x.append(n),l.clear(),W(t,e[0].prev,e[v-1].next)}St(u,()=>{for(var m=0;m<v;m++){var y=e[m];h||(l.delete(y.k),W(t,y.prev,y.next)),Ht(y.e,!h)}})}function $(t,e,n,l,u,v=null){var s=t,h={flags:e,items:new Map,first:null},x=(e&$e)!==0;if(x){var m=t;s=G?Te(m.firstChild):m.appendChild(_t())}G&&ht();var y=null;It(()=>{var o=n(),c=et(o)?o:o==null?[]:Array.from(o),r=c.length,d=h.flags;d&Ne&&!Nt(c)&&!(Mt in c)&&!(Rt in c)&&(d^=Ne,d&pt&&!(d&ie)&&(d^=ie));let a=!1;if(G){var i=s.data===mt;i!==(r===0)&&(s=Ke(),Te(s),Ae(!1),a=!0)}if(G){for(var f=null,_,b=0;b<r;b++){if(ue.nodeType===8&&ue.data===gt){s=ue,a=!0,Ae(!1);break}var w=c[b],V=l(w,b);_=at(ue,h,f,null,w,V,b,u,d),h.items.set(V,_),f=_}r>0&&Te(Ke())}G||Yt(c,h,s,u,d,l),v!==null&&(r===0?y?tt(y):y=nt(()=>v(s)):y!==null&&kt(y,()=>{y=null})),a&&Ae(!0)}),G&&(s=ue)}function Yt(t,e,n,l,u,v){var J,L,be,Pe;var s=(u&yt)!==0,h=(u&(ie|Xe))!==0,x=t.length,m=e.items,y=e.first,o=y,c=new Set,r=null,d=new Set,a=[],i=[],f,_,b,w;if(s)for(w=0;w<x;w+=1)f=t[w],_=v(f,w),b=m.get(_),b!==void 0&&((J=b.a)==null||J.measure(),d.add(b));for(w=0;w<x;w+=1){if(f=t[w],_=v(f,w),b=m.get(_),b===void 0){var V=o?o.e.nodes.start:n;r=at(V,e,r,r===null?e.first:r.next,f,_,w,l,u),m.set(_,r),a=[],i=[],o=r.next;continue}if(h&&Pt(b,f,w,u),b.e.f&Tt&&(tt(b.e),s&&((L=b.a)==null||L.unfix(),d.delete(b))),b!==o){if(c.has(b)){if(a.length<i.length){var j=i[0],k;r=j.prev;var X=a[0],P=a[a.length-1];for(k=0;k<a.length;k+=1)Ge(a[k],j,n);for(k=0;k<i.length;k+=1)c.delete(i[k]);W(e,X.prev,P.next),W(e,r,X),W(e,P,j),o=j,r=P,w-=1,a=[],i=[]}else c.delete(b),Ge(b,o,n),W(e,b.prev,b.next),W(e,b,r===null?e.first:r.next),W(e,r,b),r=b;continue}for(a=[],i=[];o!==null&&o.k!==_;)c.add(o),i.push(o),o=o.next;if(o===null)continue;b=o}a.push(b),r=b,o=b.next}const N=Array.from(c);for(;o!==null;)N.push(o),o=o.next;var R=N.length;if(R>0){var Z=u&$e&&x===0?n:null;if(s){for(w=0;w<R;w+=1)(be=N[w].a)==null||be.measure();for(w=0;w<R;w+=1)(Pe=N[w].a)==null||Pe.fix()}zt(e,N,Z,m)}s&&At(()=>{var Be;for(b of d)(Be=b.a)==null||Be.apply()}),Fe.first=e.first&&e.first.e,Fe.last=r&&r.e}function Pt(t,e,n,l){l&ie&&fe(t.v,e),l&Xe?fe(t.i,n):t.i=n}function at(t,e,n,l,u,v,s,h,x){var m=Ee;try{var y=(x&ie)!==0,o=(x&Ne)===0,c=y?o?Et(u):we(u):u,r=x&Xe?we(s):s,d={i:r,v:c,k:v,a:null,e:null,prev:n,next:l};return Ee=d,d.e=nt(()=>h(t,c,r),G),d.e.prev=n&&n.e,d.e.next=l&&l.e,n===null?e.first=d:(n.next=d,n.e.next=d.e),l!==null&&(l.prev=d,l.e.prev=d.e),d}finally{Ee=m}}function Ge(t,e,n){for(var l=t.next?t.next.e.nodes.start:n,u=e?e.e.nodes.start:n,v=t.e.nodes.start;v!==l;){var s=v.nextSibling;u.before(v),v=s}}function W(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}let Ve=!1;function ot(){Ve||(Ve=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const n of t.target.elements)(e=n.__on_r)==null||e.call(n)})},{capture:!0}))}function ne(t){if(G){var e=!1,n=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var l=t.value;Me(t,"value",null),t.value=l}if(t.hasAttribute("checked")){var u=t.checked;Me(t,"checked",null),t.checked=u}}};t.__on_r=n,Ot(n),ot()}}function Me(t,e,n){n=n==null?null:n+"";var l=t.__attributes??(t.__attributes={});G&&(l[e]=t.getAttribute(e),e==="src"||e==="href"||e==="srcset")||l[e]!==(l[e]=n)&&(e==="loading"&&(t[Dt]=n),n===null?t.removeAttribute(e):t.setAttribute(e,n))}function M(t,e,n,l){const u=t.style,v=u.getPropertyValue(e);n==null?v!==""&&u.removeProperty(e):v!==n&&u.setProperty(e,n,"")}function rt(t,e,n,l=n){t.addEventListener(e,n);const u=t.__on_r;u?t.__on_r=()=>{u(),l()}:t.__on_r=l,ot()}function Ce(t,e,n){rt(t,"input",()=>{n(Je(t)?Ue(t.value):t.value)}),lt(()=>{var l=e();if(G&&t.defaultValue!==t.value){n(t.value);return}Je(t)&&l===Ue(t.value)||t.type==="date"&&!l&&!t.value||(t.value=l??"")})}function qe(t,e,n){rt(t,"change",()=>{var l=t.checked;n(l)}),e()==null&&n(!1),lt(()=>{var l=e();t.checked=!!l})}function Je(t){var e=t.type;return e==="number"||e==="range"}function Ue(t){return t===""?null:+t}const Bt=!0,En=Object.freeze(Object.defineProperty({__proto__:null,prerender:Bt},Symbol.toStringTag,{value:"Module"}));function Kt(t,e,n,l){const u=Math.abs(t-n),v=Math.abs(e-l);return u===0&&v===1?l>e?"right":"left":u===1&&v===0?n>t?"below":"above":"not adjacent"}function ut(){const t="0123456789abcdef";let e="#";for(let n=0;n<6;n++){const l=Math.floor(Math.random()*t.length);e+=t[l]}return e}function st(t,e){return t.map(n=>n.map(l=>l[e]))}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++){if(t[n].length!==e[n].length)return!1;for(let l=0;l<t[n].length;l++)if(t[n][l]!==e[n][l])return!1}return!0}const Gt=t=>t.flat().map(e=>ct(e)).join(""),vt=t=>parseInt(t,16),ct=t=>t.toString(16),We=t=>ge(vt(t)),ge=t=>String.fromCharCode(97+t),Re=t=>t.charCodeAt(0)-97,Vt=t=>ct(Re(t)),ee=(t,e)=>g.value[t][e].colorIndex!==0,je=()=>I.value.length>2;function Ie(t,e,n){const l=[[]];let u=0;if(t<=50&&t>0&&e<=50&&e>0)for(let v=0;v<e;v++){l[v]=[];for(let s=0;s<t;s++)if(n){const h=vt(n[u]);if(I.value.length-1<h)for(let x=I.value.length-1;x<h;x++)I.value.push(ut());l[v][s]={colorIndex:n[u]!==void 0?h:0,Xed:!1},u++}else l[v][s]={colorIndex:0,Xed:!1}}return l}function Ze(){for(let t=0;t<g.numRows;t++)for(let e=0;e<g.numColumns;e++)g.value[t][e].colorIndex>I.value.length-1&&(g.value[t][e].colorIndex=0)}function it(t){const e=[[]];for(let n=0;n<g.numRows;n++){e[n]=[{count:0,color:""}];for(let l=0;l<g.numColumns;l++)if(ee(n,l)){const u=l===0?null:t[n][l-1].colorIndex,v=t[n][l].colorIndex;u!==v?e[n].push({count:1,color:ge(v)}):e[n][e[n].length-1].count++}e[n].length>1&&e[n][0].count===0&&e[n].shift()}return e}function ft(t){const e=[[]];for(let n=0;n<g.numColumns;n++){e[n]=[{count:0,color:""}];for(let l=0;l<g.numRows;l++)if(ee(l,n)){const u=l===0?null:t[l-1][n].colorIndex,v=t[l][n].colorIndex;u!==v?e[n].push({count:1,color:ge(v)}):e[n][e[n].length-1].count++}e[n].length>1&&e[n][0].count===0&&e[n].shift()}return e}const Qe=t=>JSON.parse(JSON.stringify(t));function S(t){const e=typeof t=="object";let n=we(ve(e?Qe(t):t));return{get value(){return O(n)},set value(u){fe(n,ve(u))},reset:()=>fe(n,ve(e?Qe(t):t))}}function qt(){const t=S(dt),e=B(()=>t.value.length),n=B(()=>t.value[0].length);return{get value(){return t.value},set value(l){t.value=l},reset:t.reset,get numRows(){return O(e)},get numColumns(){return O(n)}}}const ce=S("#476fb8"),I=S(["#f8fafc","#020617"]),le=S(1),z=S(5),Y=S(5),dt=Ie(z.value,Y.value),g=qt(),te=S([dt]),q=S(0),ae=S(!1),oe=S(!1),D=S(!1),C=S({row:-1,column:-1}),Se=S(""),He=S(0);S("");const ke=S(!0),re=S(!1),_e=S(!0),Oe=S([[]]),De=S([[]]);var Jt=A('<label class="svelte-1co30ep"> </label>'),Ut=A('<button class="svelte-1co30ep"><!></button>'),Wt=A('<div class="middle svelte-1co30ep"></div>'),Zt=A('<input type="color" class="svelte-1co30ep">'),Qt=A('<button class="svelte-1co30ep">-</button>'),$t=A('<button class="svelte-1co30ep">+</button>'),en=A("<!> <!>",1),tn=A('<input type="checkbox" class="svelte-1co30ep">'),nn=A('<input type="checkbox" class="svelte-1co30ep">'),ln=A('<header class="svelte-1co30ep"><div class="svelte-1co30ep"><div class="left svelte-1co30ep"><button id="undo" class="svelte-1co30ep">Undo</button> <span class="svelte-1co30ep">Ctrl + z</span></div> <div class="left svelte-1co30ep"><button id="undo" class="svelte-1co30ep">Redo</button> <span class="svelte-1co30ep">Ctrl + y</span></div></div> <!> <div class="svelte-1co30ep"><div class="svelte-1co30ep"><input type="color" class="svelte-1co30ep"> <!></div> <!> <!> <!></div></header>');function an(t,e){he(e,!0);function n(){g.value=Ye(te.value[q.value]),Ze()}function l(){q.value!==0&&(q.value--,n())}function u(){q.value!==te.value.length-1&&(q.value++,n())}function v(j){j.ctrlKey&&j.key==="z"?l():j.ctrlKey&&j.key==="y"&&u()}function s(){_e.value=!1}function h(){_e.reset()}Le(()=>{document.body.style.backgroundColor=ce.value,document.body.style.color=I.value[0]});var x=ln();se("keydown",ye,v,!1);var m=H(x),y=H(m),o=H(y);o.__click=l,p(p(o,!0)),E(y);var c=p(p(y,!0)),r=H(c);r.__click=u,p(p(r,!0)),E(c),E(m);var d=p(p(m,!0));F(d,je,j=>{var k=Wt();$(k,73,()=>I.value,Q,(X,P,N)=>{var R=Ut();R.__click=()=>{le.value=N};var Z=H(R);F(Z,()=>re.value,J=>{var L=Jt(),be=H(L);K(()=>de(be,ge(N))),E(L),K(()=>Me(L,"for",I.value[N])),T(J,L)}),E(R),K(()=>{M(R,"background-color",I.value[N]),M(R,"color",N===0?I.value[1]:I.value[0])}),T(X,R)}),E(k),T(j,k)});var a=p(p(d,!0)),i=H(a);M(i,"width","40rem"),M(i,"display","flex"),M(i,"flex-wrap","wrap"),M(i,"justify-content","right");var f=H(i);ne(f),f.__click=s,f.__change=h;var _=p(p(f,!0));$(_,65,()=>I.value,Q,(j,k,X)=>{var P=Zt();ne(P),P.__click=s,P.__change=h,Ce(P,()=>I.value[X],N=>I.value[X]=N),T(j,P)}),E(i);var b=p(p(i,!0));F(b,()=>!D.value,j=>{var k=en(),X=xe(k);F(X,je,N=>{var R=Qt(),Z=B(()=>()=>{I.value.pop(),le.value=1,Ze()});R.__click=function(...J){var L;return(L=O(Z))==null?void 0:L.apply(this,J)},T(N,R)});var P=p(p(X,!0));F(P,()=>I.value.length<16,N=>{var R=$t(),Z=B(()=>()=>{I.value.push(ut())});R.__click=function(...J){var L;return(L=O(Z))==null?void 0:L.apply(this,J)},T(N,R)}),T(j,k)});var w=p(p(b,!0));F(w,je,j=>{var k=tn();ne(k),qe(k,()=>re.value,X=>re.value=X),T(j,k)});var V=p(p(w,!0));F(V,()=>g.numRows>5||g.numColumns>5,j=>{var k=nn();ne(k),qe(k,()=>ke.value,X=>ke.value=X),T(j,k)}),E(a),E(x),Ce(f,()=>ce.value,j=>ce.value=j),T(t,x),me()}ze(["click","change"]);var on=A('<button class="svelte-o41zl3"> </button>');function rn(t,e){he(e,!0);const n=(o,c)=>g.value[o][c].Xed,l=(o,c)=>g.value[o][c].colorIndex===le.value;function u(o,c,r){g.value[o][c].colorIndex=r}function v(o,c){g.value[o][c].colorIndex=0}function s(o,c){g.value[o][c].Xed=!g.value[o][c].Xed}function h(o){D.value?o.button===0&&!n(e.i,e.j)?l(e.i,e.j)?u(e.i,e.j,0):u(e.i,e.j,le.value):o.button===2&&!ee(e.i,e.j)&&s(e.i,e.j):o.button===0&&!l(e.i,e.j)?u(e.i,e.j,le.value):v(e.i,e.j),_e.value=!1,C.value={row:e.i,column:e.j},He.reset()}function x(){if(!(!ae.value&&!oe.value||ae.value&&oe.value||C.value.row===-1))if(He.value++,He.value===1&&(Se.value=Kt(C.value.row,C.value.column,e.i,e.j)),D.value)if(Se.value==="above"||Se.value==="below"){const o=Math.min(C.value.row,e.i),c=Math.max(C.value.row,e.i);for(let r=o;r<c+1;r++)ae.value&&!n(r,C.value.column)?u(r,C.value.column,g.value[C.value.row][C.value.column].colorIndex):oe.value&&!ee(r,C.value.column)&&(g.value[r][C.value.column].Xed=g.value[C.value.row][C.value.column].Xed)}else{const o=Math.min(C.value.column,e.j),c=Math.max(C.value.column,e.j);for(let r=o;r<c+1;r++)ae.value&&!n(C.value.row,r)?u(C.value.row,r,g.value[C.value.row][C.value.column].colorIndex):oe.value&&!ee(C.value.row,r)&&(g.value[C.value.row][r].Xed=g.value[C.value.row][C.value.column].Xed)}else ee(C.value.row,C.value.column)?u(e.i,e.j,le.value):v(e.i,e.j)}var m=on();m.__mousedown=h,K(()=>M(m,"color",ee(e.i,e.j)?I.value[0]:I.value[1]));var y=H(m);K(()=>de(y,n(e.i,e.j)?"X":re.value?ge(g.value[e.i][e.j].colorIndex):"")),E(m),K(()=>M(m,"background-color",I.value[g.value[e.i][e.j].colorIndex])),se("mouseenter",m,x,!1),T(t,m),me()}ze(["mousedown"]);var un=A("<div> </div>"),sn=A('<th class="svelte-m9mt2b"></th>'),vn=A('<thead><tr><th class="svelte-m9mt2b"></th><!></tr></thead>'),cn=A("<div> </div>"),fn=A('<td class="svelte-m9mt2b"></td>'),dn=A('<td class="svelte-m9mt2b"><!></td>'),_n=A("<tr><!><!></tr>"),hn=A('<table class="svelte-m9mt2b"><!><tbody></tbody></table>');function mn(t,e){he(e,!0),Le(()=>{D.value||(Oe.value=it(g.value),De.value=ft(g.value))});var n=hn(),l=H(n);F(l,()=>D.value,v=>{var s=vn(),h=H(s),x=H(h),m=p(x);$(m,65,()=>({length:g.numColumns}),Q,(y,o,c)=>{var r=sn();$(r,73,()=>De.value[c],Q,(d,a,i)=>{var f=un();K(()=>M(f,"color",I.value[Re(U(a).color)]));var _=H(f);E(f),K(()=>de(_,re.value?U(a).count+U(a).color:U(a).count)),T(d,f)}),E(r),T(y,r)}),E(h),E(s),T(v,s)});var u=p(l);$(u,73,()=>({length:g.numRows}),Q,(v,s,h)=>{var x=_n(),m=H(x);F(m,()=>D.value,o=>{var c=fn();M(c,"display","flex"),M(c,"align-items","center"),M(c,"justify-content","right"),M(c,"height","var(--tile-width)"),$(c,73,()=>Oe.value[h],Q,(r,d,a)=>{var i=cn();M(i,"padding","2px"),K(()=>M(i,"color",I.value[Re(U(d).color)]));var f=H(i);E(i),K(()=>de(f,re.value?U(d).count+U(d).color:U(d).count)),T(r,i)}),E(c),T(o,c)});var y=p(m);$(y,65,()=>({length:g.numColumns}),Q,(o,c,r)=>{var d=dn(),a=H(d);rn(a,{i:h,j:r}),E(d),K(()=>{M(d,"border-top",h%5===0&&h!==0&&ke.value?`solid 2px ${I.value[1]}`:"0"),M(d,"border-left",r%5===0&&r!==0&&ke.value?`solid 2px ${I.value[1]}`:"0")}),T(o,d)}),E(x),T(v,x)}),E(u),E(n),T(t,n),me()}var gn=A('<main class="svelte-122lnz"><!></main>');function bn(t){var e=gn(),n=H(e);mn(n,{$$legacy:!0}),E(e),T(t,e)}var yn=A('<input autocomplete="off" class="svelte-1in9ujw"> <input autocomplete="off" class="svelte-1in9ujw"> <button>Start Game</button>',1),pn=A('<span class="svelte-1in9ujw"> </span> <button>New Editor</button>',1),xn=A('<footer class="svelte-1in9ujw"><!></footer>');function wn(t,e){he(e,!0);const n=m=>Number(String(m).replace(/[^0-9]/g,""));let l=we(ve([[]]));const u=B(()=>st(g.value,"colorIndex")),v=B(()=>Ft(O(l),O(u)));function s(m,y){g.value=Ie(m,y),te.reset(),te.value[0]=Ye(g.value),q.reset()}var h=xn(),x=H(h);F(x,()=>!D.value,m=>{var y=yn(),o=xe(y);ne(o);var c=B(()=>()=>{z.value=n(z.value),s(z.value,Y.value)});o.__input=function(...f){var _;return(_=O(c))==null?void 0:_.apply(this,f)};var r=p(p(o,!0));ne(r);var d=B(()=>()=>{Y.value=n(Y.value),s(z.value,Y.value)});r.__input=function(...f){var _;return(_=O(d))==null?void 0:_.apply(this,f)};var a=p(p(r,!0)),i=B(()=>()=>{D.value=!0,fe(l,ve(O(u))),s(z.value,Y.value)});a.__click=function(...f){var _;return(_=O(i))==null?void 0:_.apply(this,f)},Ce(o,()=>z.value,f=>z.value=f),Ce(r,()=>Y.value,f=>Y.value=f),T(m,y)},m=>{var y=pn(),o=xe(y),c=H(o);E(o);var r=p(p(o,!0)),d=B(()=>()=>{D.reset(),s(z.value,Y.value)});r.__click=function(...a){var i;return(i=O(d))==null?void 0:i.apply(this,a)},K(()=>de(c,O(v)?"You win":"Keep trying")),T(m,y)}),E(h),T(t,h),me()}ze(["input","click"]);var Cn=A("<!> <!> <!>",1);function jn(t,e){he(e,!0);function n(a){a.button===0?ae.value=!0:a.button===2&&(oe.value=!0)}function l(a){a.button===0?ae.reset():a.button===2&&oe.reset(),C.value.row!==-1&&(q.value!==te.value.length-1&&te.value.splice(q.value+1),q.value++,te.value.push(Ye(g.value))),C.reset(),_e.reset()}const u=a=>a.split("-");function v(a){const i=a.match(/\d+\w/g);let f="";for(let _=0;_<i.length;_++){const b=Number(i[_].slice(0,-1)),w=i[_][i[_].length-1];for(let V=0;V<b;V++)f+=Vt(w)}return f}let s="",h=!0;Xt(()=>{if(window.location.hash&&h){const a=u(window.location.hash.slice(1));D.value=!!Number(a[0]),z.value=Number(a[1]),Y.value=Number(a[2]),ce.value="#"+a[3];const i=D.value?a.slice(4,-2):a.slice(4,-1);for(let _=0;_<i.length;_++)I.value[_]="#"+i[_];const f=D.value?a.length-2:a.length-1;D.value&&(s=a[a.length-1],g.value=Ie(z.value,Y.value,v(s)),Oe.value=it(g.value),De.value=ft(g.value)),g.value=Ie(z.value,Y.value,v(a[f]))}h=!1});function x(a){let i="",f=1;for(let _=1;_<a.length;_++)a[_-1]===a[_]?f++:(i+=f+We(a[_-1]),f=1);return i+=f+We(a[a.length-1]),i}const m=B(()=>{const a=[Number(D.value),z.value,Y.value,ce.value.slice(1)];for(let f=0;f<I.value.length;f++)a.push(I.value[f].slice(1));const i=x(Gt(st(g.value,"colorIndex")));return a.push(i),D.value?a.push(s):s=i,a.join("-")});Le(()=>{_e.value&&(window.location.hash=O(m))});var y=Cn();se("mousedown",ye,n,!1),se("mouseup",ye,l,!1),se("contextmenu",ye,function(...a){var i;return(i=O(o))==null?void 0:i.apply(this,a)},!1),Lt(a=>{xt.title="Shareogram"});var o=B(()=>a=>a.preventDefault()),c=xe(y);an(c,{});var r=p(p(c,!0));bn(r);var d=p(p(r,!0));wn(d,{}),T(t,y),me()}export{jn as component,En as universal};
