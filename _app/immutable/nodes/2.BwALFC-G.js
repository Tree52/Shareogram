import{k as pt,E as ct,h as U,s as Ee,a as bt,H as xt,r as Ke,d as Ne,e as _e,A as Ge,B as ze,C as $t,q as wt,n as yt,D as kt,g as A,i as m,b as w,t as y,j as E,f as ge,$ as ue,F as It}from"../chunks/disclose-version.C6sGzUTY.js";import{k as it,n as Ct,o as Tt,p as Et,q as vt,t as ut,v as Nt,R as At,C as Me,m as Qe,s as me,y as Xt,a as we,T as St,U as Ht,V as Rt,W as Mt,X as Dt,J as Be,x as Ot,g as X,N as F,z as L,B as G,A as V,b as ye,u as Pt}from"../chunks/runtime.DMfmyfyl.js";import{d as Z,s as xe,e as ie,a as Lt}from"../chunks/render.BofUWoOv.js";import{g as Ze,a as Gt,p as Ae,i as Y}from"../chunks/if.BfWOsGFd.js";import{i as j}from"../chunks/lifecycle.CdGeAdyv.js";import{r as D}from"../chunks/misc.DQj3XkrK.js";function pe(e,r=!1){return $e(e,new Map)}function $e(e,r,t,o){if(typeof e=="object"&&e!==null){const s=r.get(e);if(s!==void 0)return s;if(it(e)){const a=[];r.set(e,a);for(let l=0;l<e.length;l+=1)a.push($e(e[l],r));return a}if(Ct(e)===Tt){const a={};r.set(e,a);for(var n in e)a[n]=$e(e[n],r);return a}if(e instanceof Date)return structuredClone(e);if(typeof e.toJSON=="function")return $e(e.toJSON(),r)}if(e instanceof EventTarget)return e;try{return structuredClone(e)}catch{return e}}let Xe=null;function ae(e,r){return r}function zt(e,r,t,o){for(var n=[],s=r.length,a=0;a<s;a++)St(r[a].e,n,!0);var l=s>0&&n.length===0&&t!==null;if(l){var i=t.parentNode;wt(i),i.append(t),o.clear(),te(e,r[0].prev,r[s-1].next)}Ht(n,()=>{for(var c=0;c<s;c++){var v=r[c];l||(o.delete(v.k),te(e,v.prev,v.next)),Rt(v.e,!l)}})}function le(e,r,t,o,n,s=null){var a=e,l={flags:r,items:new Map,first:null},i=(r&ct)!==0;if(i){var c=e;a=U?Ee(c.firstChild):c.appendChild(pt())}U&&bt();var v=null;Et(()=>{var f=t(),u=it(f)?f:f==null?[]:Array.from(f),p=u.length;let x=!1;if(U){var I=a.data===xt;I!==(p===0)&&(a=Ke(),Ee(a),Ne(!1),x=!0)}if(U){for(var d=null,g,_=0;_<p;_++){if(_e.nodeType===8&&_e.data===yt){a=_e,x=!0,Ne(!1);break}var b=u[_],$=o(b,_);g=ft(_e,l,d,null,b,$,_,n,r),l.items.set($,g),d=g}p>0&&Ee(Ke())}U||Bt(u,l,a,n,r,o),s!==null&&(p===0?v?vt(v):v=ut(()=>s(a)):v!==null&&Nt(v,()=>{v=null})),x&&Ne(!0)}),U&&(a=_e)}function Bt(e,r,t,o,n,s){var be,Fe,Ye,qe;var a=(n&kt)!==0,l=(n&(Ge|ze))!==0,i=e.length,c=r.items,v=r.first,f=v,u=new Set,p=null,x=new Set,I=[],d=[],g,_,b,$;if(a)for($=0;$<i;$+=1)g=e[$],_=s(g,$),b=c.get(_),b!==void 0&&((be=b.a)==null||be.measure(),x.add(b));for($=0;$<i;$+=1){if(g=e[$],_=s(g,$),b=c.get(_),b===void 0){var P=f?f.e.nodes.start:t;p=ft(P,r,p,p===null?r.first:p.next,g,_,$,o,n),c.set(_,p),I=[],d=[],f=p.next;continue}if(l&&Ut(b,g,$,n),b.e.f&At&&(vt(b.e),a&&((Fe=b.a)==null||Fe.unfix(),x.delete(b))),b!==f){if(u.has(b)){if(I.length<d.length){var k=d[0],H;p=k.prev;var O=I[0],N=I[I.length-1];for(H=0;H<I.length;H+=1)je(I[H],k,t);for(H=0;H<d.length;H+=1)u.delete(d[H]);te(r,O.prev,N.next),te(r,p,O),te(r,N,k),f=k,p=N,$-=1,I=[],d=[]}else u.delete(b),je(b,f,t),te(r,b.prev,b.next),te(r,b,p===null?r.first:p.next),te(r,p,b),p=b;continue}for(I=[],d=[];f!==null&&f.k!==_;)u.add(f),d.push(f),f=f.next;if(f===null)continue;b=f}I.push(b),p=b,f=b.next}const B=Array.from(u);for(;f!==null;)B.push(f),f=f.next;var R=B.length;if(R>0){var q=n&ct&&i===0?t:null;if(a){for($=0;$<R;$+=1)(Ye=B[$].a)==null||Ye.measure();for($=0;$<R;$+=1)(qe=B[$].a)==null||qe.fix()}zt(r,B,q,c)}a&&Me(()=>{var Je;for(b of x)(Je=b.a)==null||Je.apply()}),Qe.first=r.first&&r.first.e,Qe.last=p&&p.e}function Ut(e,r,t,o){o&Ge&&me(e.v,r),o&ze?me(e.i,t):e.i=t}function ft(e,r,t,o,n,s,a,l,i){var c=Xe;try{var v=(i&Ge)!==0,f=(i&$t)===0,u=v?f?Xt(n):we(n):n,p=i&ze?we(a):a,x={i:p,v:u,k:s,a:null,e:null,prev:t,next:o};return Xe=x,x.e=ut(()=>l(e,u,p),U),x.e.prev=t&&t.e,x.e.next=o&&o.e,t===null?r.first=x:(t.next=x,t.e.next=x.e),o!==null&&(o.prev=x,o.e.prev=x.e),x}finally{Xe=c}}function je(e,r,t){for(var o=e.next?e.next.e.nodes.start:t,n=r?r.e.nodes.start:t,s=e.e.nodes.start;s!==o;){var a=s.nextSibling;n.before(s),s=a}}function te(e,r,t){r===null?e.first=t:(r.next=t,r.e.next=t&&t.e),t!==null&&(t.prev=r,t.e.prev=r&&r.e)}let et=!1;function dt(){et||(et=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var r;if(!e.defaultPrevented)for(const t of e.target.elements)(r=t.__on_r)==null||r.call(t)})},{capture:!0}))}function K(e){if(U){var r=!1,t=()=>{if(!r){if(r=!0,e.hasAttribute("value")){var o=e.value;ke(e,"value",null),e.value=o}if(e.hasAttribute("checked")){var n=e.checked;ke(e,"checked",null),e.checked=n}}};e.__on_r=t,Dt(t),dt()}}function ke(e,r,t,o){t=t==null?null:t+"";var n=e.__attributes??(e.__attributes={});U&&(n[r]=e.getAttribute(r),r==="src"||r==="href"||r==="srcset")||n[r]!==(n[r]=t)&&(r==="loading"&&(e[Mt]=t),t===null?e.removeAttribute(r):e.setAttribute(r,t))}function C(e,r,t,o,n){var s=e.__attributes??(e.__attributes={}),a=e.style,l="style-"+r;s[l]===t&&!n||(s[l]=t,t==null?a.removeProperty(r):a.setProperty(r,t,""))}function Ue(e,r,t,o=t){e.addEventListener(r,t);const n=e.__on_r;n?e.__on_r=()=>{n(),o()}:e.__on_r=o,dt()}function de(e,r,t){Ue(e,"input",()=>{t(rt(e)?nt(e.value):e.value)}),Be(()=>{var o=r();if(U&&e.defaultValue!==e.value){t(e.value);return}rt(e)&&o===nt(e.value)||e.type==="date"&&!o&&!e.value||(e.value=o??"")})}const Se=new Set;function He(e,r,t,o,n){var s=t.getAttribute("type")==="checkbox",a=e;let l=!1;if(r!==null)for(var i of r)a=a[i]??(a[i]=[]);a.push(t),Ue(t,"change",()=>{var c=t.__value;s&&(c=tt(a,c,t.checked)),n(c)},()=>n(s?[]:null)),Be(()=>{var c=o();if(U&&t.defaultChecked!==t.checked){l=!0;return}s?(c=c||[],t.checked=Ze(c).includes(Ze(t.__value))):t.checked=Gt(t.__value,c)}),Ot(()=>{var c=a.indexOf(t);c!==-1&&a.splice(c,1)}),Se.has(a)||(Se.add(a),Me(()=>{a.sort((c,v)=>c.compareDocumentPosition(v)===4?-1:1),Se.delete(a)})),Me(()=>{if(l){var c;if(s)c=tt(a,c,t.checked);else{var v=a.find(f=>f.checked);c=v==null?void 0:v.__value}n(c)}})}function tt(e,r,t){for(var o=new Set,n=0;n<e.length;n+=1)e[n].checked&&o.add(e[n].__value);return t||o.delete(r),Array.from(o)}function rt(e){var r=e.type;return r==="number"||r==="range"}function nt(e){return e===""?null:+e}function Vt(e,r,t){Ue(e,"change",()=>{t(e.files)}),Be(()=>{e.files=r()})}const Wt=!0,un=Object.freeze(Object.defineProperty({__proto__:null,prerender:Wt},Symbol.toStringTag,{value:"Module"}));function Ft(e,r,t,o){const n=Math.abs(e-t),s=Math.abs(r-o);return n===0&&s===1?o>r?"right":"left":n===1&&s===0?t>e?"below":"above":"not adjacent"}function Yt(){const e="0123456789abcdef";let r="#";for(let t=0;t<6;t++){const o=Math.floor(Math.random()*e.length);r+=e[o]}return r}function qt(e,r){return e.map(t=>t.map(o=>o[r]))}function Ie(e){let r="";for(;e>=0;)r=String.fromCharCode(e%26+97)+r,e=Math.floor(e/26)-1;return r}function De(e){let r=0;for(let t=0;t<e.length;t++)r*=26,r+=e.charCodeAt(t)-97+1;return r-1}function Jt(e){const r=e.match(/(\d+|[a-zX]+)/g),t=[],o=[];if(r)for(let n=0;n<r.length;n++){const s=r[n];isNaN(Number(s))?o.push(s):t.push(Number(s))}if(t.length!==o.length)throw new Error("Error: different number of counts and letters.");return{numbers:t,letters:o}}function Kt(e,r){return Math.floor(Math.random()*(r-e+1)+e)}function ot(e){return/^#?([a-fA-F0-9]{6})$/.test(e)}function Oe(e){const r=parseInt(e.replace("#",""),16);return[r>>16&255,r>>8&255,r&255]}function Qt(e,r,t){const o=e[0].length,n=e.length,s=document.createElement("canvas");s.width=o,s.height=n;const a=s.getContext("2d");if(a){const l=a.createImageData(o,n);for(let c=0;c<n;c++)for(let v=0;v<o;v++){const f=r[e[c][v]],u=Oe(f);if(u){const[p,x,I]=u,d=(c*o+v)*4;l.data[d]=p,l.data[d+1]=x,l.data[d+2]=I,l.data[d+3]=255}}a.putImageData(l,0,0);const i=s.toDataURL("image/png");t(i)}}function Zt(e,r,t){const o=new FileReader;o.onload=n=>{var a;const s=new Image;s.onload=()=>{const l=document.createElement("canvas"),i=l.getContext("2d");if(i){l.width=s.width,l.height=s.height,i.drawImage(s,0,0);const c=i.getImageData(0,0,s.width,s.height).data,v=[],f=[];for(let u=0;u<s.height;u++){const p=[];for(let x=0;x<s.width;x++){const I=(u*s.width+x)*4,d=c[I],g=c[I+1],_=c[I+2],b=er(d,g,_),$=tr(b,v,r);p.push($)}f.push(p)}t(f,v)}},s.src=(a=n.target)==null?void 0:a.result},o.readAsDataURL(e)}function jt(e,r,t){const[o,n,s]=e,[a,l,i]=r;return Math.sqrt((o-a)**2+(n-l)**2+(s-i)**2)<=t}function er(e,r,t){return"#"+[e,r,t].map(o=>Math.round(o).toString(16).padStart(2,"0")).join("")}function tr(e,r,t){const o=Oe(e);for(let n=0;n<r.length;n++){const s=Oe(r[n]);if(jt(o,s,t))return n}return r.push(e),r.length-1}const z=e=>e.colorIndex!==0,rr=()=>T.v.length>2;function Ve(){const e=[[]];for(let r=0;r<se.v;(r+=1)-1){e[r]=[];for(let t=0;t<oe.v;(t+=1)-1)e[r][t]={colorIndex:0,Xed:!1}}return e}function _t(){for(let e=0;e<h.numRows;(e+=1)-1)for(let r=0;r<h.numColumns;(r+=1)-1)h.v[e][r].colorIndex>T.v.length-1&&(h.v[e][r].colorIndex=0)}function nr(e){const r=[[]],t=e.length,o=e[0].length;for(let n=0;n<t;(n+=1)-1){r[n]=[{count:0,color:""}];for(let s=0;s<o;(s+=1)-1)if(z(e[n][s])){const a=s===0?null:e[n][s-1].colorIndex,l=e[n][s].colorIndex;a!==l?r[n].push({count:1,color:Ie(l)}):r[n][r[n].length-1].count+=1}r[n].length>1&&r[n][0].count===0&&r[n].shift()}return r}function or(e){const r=[[]],t=e.length,o=e[0].length;for(let n=0;n<o;(n+=1)-1){r[n]=[{count:0,color:""}];for(let s=0;s<t;(s+=1)-1)if(z(e[s][n])){const a=s===0?null:e[s-1][n].colorIndex,l=e[s][n].colorIndex;a!==l?r[n].push({count:1,color:Ie(l)}):r[n][r[n].length-1].count+=1}r[n].length>1&&r[n][0].count===0&&r[n].shift()}return r}function sr(e){let r="";const t=e.length,o=e[0].length;let n=1;for(let a=0;a<t;(a+=1)-1)for(let l=0;l<o;(l+=1)-1)if(!(a===0&&l===0)){const i=l===0?e[a-1][o-1]:e[a][l-1];i.colorIndex===e[a][l].colorIndex&&i.Xed===e[a][l].Xed?n+=1:(r+=n+(i.Xed?"X":Ie(i.colorIndex)),n=1)}const s=e[t-1][o-1];return r+=n+(s.Xed?"X":Ie(s.colorIndex)),r}function st(e){const r=Jt(e),t=[];let o=0,n=0;for(let s=0;s<se.v;(s+=1)-1)t[s]=[];for(let s=0;s<r.numbers.length;(s+=1)-1)for(let a=0;a<r.numbers[s];(a+=1)-1)r.letters[s]==="X"?t[o][(n+=1)-1]={colorIndex:0,Xed:!0}:t[o][(n+=1)-1]={colorIndex:De(r.letters[s]),Xed:!1},n>oe.v-1&&(o+=1,n=0);return t}function ht(){J.v!==Q.v.length-1&&Q.v.splice(J.v+1),J.v+=1,Q.v.push(pe(h.v))}function Ce(){oe.v<1||se.v<1||(h.v=Ve(),Q.reset(),Q.v[0]=pe(h.v),J.reset(),ne.reset())}function at(e){const r=/(\d+[a-z]+)/g,t=e.match(r);if(!t||t.join("")!==e)return!1;for(let o=0;o<t.length;(o+=1)-1){const n=t[o];if(parseInt(n.slice(0,-1))<1)return!1}return!0}function ar(e){if(e[0]!=="0"&&e[0]!=="1")return!1;const r=!!Number(e[0]),t=Number(e[1]),o=Number(e[2]);if(t<1||o<1||!ot(e[3]))return!1;const n=r?e.slice(4,-2):e.slice(4,-1);for(let s=0;s<n.length;(s+=1)-1)if(!ot(n[s]))return!1;return!(!at(e[r?e.length-2:e.length-1])||r&&!at(e[e.length-1]))}const lt=e=>JSON.parse(JSON.stringify(e));function S(e){const r=typeof e=="object";let t=we(Ae(r?lt(e):e));return{get v(){return X(t)},set v(n){me(t,Ae(n))},reset:()=>me(t,Ae(r?lt(e):e))}}function mt(){const e=S(gt),r=F(()=>e.v.length),t=F(()=>e.v[0].length),o=F(()=>qt(e.v,"colorIndex")),n=F(()=>sr(e.v)),s=F(()=>nr(e.v)),a=F(()=>or(e.v));return{get v(){return e.v},set v(l){e.v=l},reset:e.reset,get numRows(){return X(r)},get numColumns(){return X(t)},get colorIndices(){return X(o)},get encoded(){return X(n)},get rowHints(){return X(s)},get columnHints(){return X(a)}}}const fe=S("#476fb8"),T=S(["#f8fafc","#020617"]),ce=S(1),oe=S(5),se=S(5),gt=Ve(),h=mt(),ve=mt(),Q=S([gt]),J=S(0),re=S(!1),W=S(!1),M=S(!1),Pe=S({colorIndex:-1,Xed:!1,row:-1,column:-1}),lr=S(""),cr=S(0),he=S(1),Te=S(!0),ee=S(50),Le=S(!1),We=S(!1),ne=S(!1),Re=S(10);var ir=y("<div> </div>"),vr=y('<th class="svelte-1rie86b"></th>'),ur=y('<thead><tr><th class="svelte-1rie86b"></th><!></tr></thead>'),fr=y("<div> </div>"),dr=y("<td></td>"),_r=y("<td> </td>"),hr=y("<tr><!><!></tr>"),mr=y('<table class="svelte-1rie86b"><!><tbody></tbody></table>');function gr(e,r){L(r,!1);var t=D(()=>Pe),o=D(()=>lr),n=D(()=>cr),s=D(()=>Te);const a=d=>d.Xed,l=d=>d.colorIndex===ce.v;function i(d,g){d.colorIndex=g}function c(d){d.colorIndex=0}function v(d){d.Xed=!d.Xed}function f(d,g,_){t(t().v={colorIndex:h.v[g][_].colorIndex,Xed:h.v[g][_].Xed,row:g,column:_}),s(s().v=!1),n().reset(),M.v?d.button===0&&ne.v&&!z(h.v[g][_])?v(h.v[g][_]):d.button===0&&!ne.v&&!a(h.v[g][_])?l(h.v[g][_])?i(h.v[g][_],0):i(h.v[g][_],ce.v):d.button===2&&!z(h.v[g][_])?v(h.v[g][_]):d.button===2&&z(h.v[g][_])&&c(h.v[g][_]):d.button===0&&!l(h.v[g][_])?i(h.v[g][_],ce.v):d.button===2&&c(h.v[g][_])}function u(d,g){if(!re.v&&!W.v||re.v&&W.v||t().v.row===-1)return;n(n().v+=1),n().v===1&&o(o().v=Ft(t().v.row,t().v.column,d,g));const _=h.v[t().v.row][t().v.column];if(M.v)if(o().v==="above"||o().v==="below"){const b=Math.min(t().v.row,d),$=Math.max(t().v.row,d);for(let P=b;P<$+1;(P+=1)-1){const k=h.v[P][t().v.column];re.v&&ne.v&&!z(k)?k.Xed=_.Xed:re.v&&!ne.v&&!a(k)?i(k,_.colorIndex):W.v&&t().v.Xed&&!z(k)?k.Xed=!1:W.v&&t().v.colorIndex===0&&!z(k)?k.Xed=!0:W.v&&t().v.colorIndex!==0&&!a(k)&&c(k)}}else{const b=Math.min(t().v.column,g),$=Math.max(t().v.column,g);for(let P=b;P<$+1;(P+=1)-1){const k=h.v[t().v.row][P];re.v&&ne.v&&!z(k)?k.Xed=_.Xed:re.v&&!ne.v&&!a(k)?i(k,_.colorIndex):W.v&&t().v.Xed&&!z(k)?k.Xed=!1:W.v&&t().v.colorIndex===0&&!z(k)?k.Xed=!0:W.v&&t().v.colorIndex!==0&&!a(k)&&c(k)}}else z(_)?i(h.v[d][g],ce.v):c(h.v[d][g])}j();var p=mr(),x=A(p);Y(x,()=>M.v,d=>{var g=ur(),_=A(g),b=A(_),$=m(b);le($,1,()=>({length:h.numColumns}),ae,(P,k,H)=>{var O=vr();le(O,5,()=>ve.columnHints[H],ae,(N,B,R)=>{var q=ir();V(()=>C(q,"color",T.v[De(X(B).color)]));var be=A(q);E(q),V(()=>{C(q,"font-size",ee.v/1.5+"px"),xe(be,X(B).count)}),w(N,q)}),E(O),w(P,O)}),E(_),E(g),w(d,g)});var I=m(x);le(I,5,()=>({length:h.numRows}),ae,(d,g,_)=>{var b=hr(),$=A(b);Y($,()=>M.v,k=>{var H=dr();C(H,"display","flex"),C(H,"justify-content","right"),le(H,5,()=>ve.rowHints[_],ae,(O,N,B)=>{var R=fr();C(R,"display","flex"),C(R,"justify-content","center"),C(R,"align-items","center"),V(()=>C(R,"color",T.v[De(X(N).color)]));var q=A(R);E(R),V(()=>{C(R,"min-width",ee.v+"px"),C(R,"height",ee.v+"px"),C(R,"font-size",ee.v/1.5+"px"),xe(q,X(N).count)}),w(O,R)}),E(H),w(k,H)});var P=m($);le(P,1,()=>({length:h.numColumns}),ae,(k,H,O)=>{var N=_r();N.__mousedown=R=>{f(R,_,O)},C(N,"text-align","center"),C(N,"transition","background-color .5s");var B=A(N);V(()=>xe(B,a(h.v[_][O])?"X":"")),E(N),V(()=>{C(N,"background-color",T.v[h.v[_][O].colorIndex]),C(N,"color",T.v[1]),C(N,"min-width",ee.v+"px"),C(N,"height",ee.v+"px"),C(N,"font-size",ee.v/1.5+"px"),C(N,"border-top",he.v===0?"0":_%5===0&&_!==0&&he.v===2?`solid 4px ${T.v[1]}`:`solid 2px ${fe.v}`),C(N,"border-left",he.v===0?"0":O%5===0&&O!==0&&he.v===2?`solid 4px ${T.v[1]}`:`solid 2px ${fe.v}`)}),ie("mouseenter",N,()=>{u(_,O)}),w(k,N)}),E(b),w(d,b)}),E(I),E(p),w(e,p),G()}Z(["mousedown"]);var pr=y('<button class="svelte-8air6e">-</button>'),br=y('<!> <button class="svelte-8air6e">+</button>',1),xr=y('<input type="color" class="svelte-8air6e">'),$r=y('<div class="svelte-8air6e"><div class="svelte-8air6e"><!></div> <div class="svelte-8air6e"><input type="color" class="svelte-8air6e"> <!></div></div>');function wr(e,r){L(r,!1);var t=D(()=>T),o=D(()=>ce),n=D(()=>Te),s=D(()=>fe);j();var a=$r(),l=A(a),i=A(l);Y(i,()=>!M.v,u=>{var p=br(),x=ge(p);Y(x,rr,d=>{var g=pr();g.__click=()=>{t().v.pop(),o().v>t().v.length-1&&o(o().v-=1),_t()},w(d,g)});var I=m(m(x,!0));I.__click=()=>{t().v.push(Yt())},w(u,p)}),E(l);var c=m(m(l,!0)),v=A(c);K(v),v.__click=()=>{n(n().v=!1)},v.__change=()=>{n().reset()};var f=m(m(v,!0));le(f,1,()=>t().v,ae,(u,p,x)=>{var I=xr();K(I),I.__click=()=>{n(n().v=!1)},I.__change=()=>{n().reset()},de(I,()=>t().v[x],d=>t(t().v[x]=d)),w(u,I)}),E(c),E(a),de(v,()=>s().v,u=>s(s().v=u)),w(e,a),G()}Z(["click","change"]);var yr=y('<input type="radio" name="border" class="svelte-anhrtm">'),kr=y('<div class="svelte-anhrtm"><input type="radio" name="border" class="svelte-anhrtm"> <input type="radio" name="border" class="svelte-anhrtm"> <!></div>');function Ir(e,r){L(r,!1);const t=[];var o=D(()=>he);j();var n=kr(),s=A(n);K(s),s.value=(s.__value=0)==null?"":0;var a=m(m(s,!0));K(a),a.value=(a.__value=1)==null?"":1;var l=m(m(a,!0));Y(l,()=>oe.v>5||se.v>5,i=>{var c=yr();K(c),c.value=(c.__value=2)==null?"":2,He(t,[],c,()=>o().v,v=>o(o().v=v)),w(i,c)}),E(n),He(t,[],s,()=>o().v,i=>o(o().v=i)),He(t,[],a,()=>o().v,i=>o(o().v=i)),w(e,n),G()}var Cr=y('<input type="range" class="svelte-169wscz">');function Tr(e,r){L(r,!1);var t=D(()=>ee);const o=100,n=10;function s(l){l.preventDefault(),l.deltaY<0&&t().v<o?t(t().v+=5):l.deltaY>0&&t().v>n&&t(t().v-=5)}j();var a=Cr();ie("wheel",ue,s,void 0,!1),K(a),ke(a,"min",n),ke(a,"max",o),de(a,()=>t().v,l=>t(t().v=l)),w(e,a),G()}var Er=()=>{M.reset(),Ce()},Nr=y("<button>New Editor</button>"),Ar=y('<div class="svelte-jomuew"><input type="text" class="svelte-jomuew"> <input type="text" class="svelte-jomuew"></div>'),Xr=y('<div class="svelte-jomuew"><!></div>');function Sr(e,r){L(r,!1);var t=D(()=>oe),o=D(()=>se);const n=l=>Math.max(0,Number(String(l).replace(/[^0-9]/g,"")));j();var s=Xr(),a=A(s);Y(a,()=>M.v,l=>{var i=Nr();i.__click=[Er],w(l,i)},l=>{var i=Ar(),c=A(i);K(c),c.__input=()=>{t(t().v=n(t().v)),Ce()};var v=m(m(c,!0));K(v),v.__input=()=>{o(o().v=n(o().v)),Ce()},E(i),de(c,()=>t().v,f=>t(t().v=f)),de(v,()=>o().v,f=>o(o().v=f)),w(l,i)}),E(s),w(e,s),G()}Z(["click","input"]);var Hr=y('<input type="range" min="10" max="442">'),Rr=y('<label for="file-upload" class="svelte-pfkfxg">Upload PNG</label> <input type="file" id="file-upload" accept="image/png" class="svelte-pfkfxg"> <!>',1);function Mr(e,r){L(r,!0);let t=we(void 0);ye(()=>{X(t)&&Zt(X(t)[0],Re.v,(l,i)=>{oe.v=l[0].length,se.v=l.length,h.v=Ve(),Q.v[0]=pe(h.v);for(let c=0;c<h.numRows;(c+=1)-1)for(let v=0;v<h.numColumns;(v+=1)-1)h.v[c][v].colorIndex=l[c][v];T.v=i,ce.v=0})});var o=Rr(),n=ge(o),s=m(m(n,!0)),a=m(m(s,!0));Y(a,()=>X(t),l=>{var i=Hr();K(i),de(i,()=>Re.v,c=>Re.v=c),w(l,i)}),Vt(s,()=>X(t),l=>me(t,l)),w(e,o),G()}function Dr(){Qt(h.colorIndices,T.v,e=>{const r=document.createElement("a");r.download="shareogram.png",r.href=e,r.click()})}var Or=y("<button>Export as PNG</button>");function Pr(e,r){L(r,!1),j();var t=Or();t.__click=[Dr],w(e,t),G()}Z(["click"]);var Lr=y("<!> <!>",1),Gr=()=>{We.reset()},zr=y('<div class="svelte-r4iltx"><!> <!> <!> <!> <!> <button>Close Options</button></div>');function Br(e,r){L(r,!1),j();var t=zr(),o=A(t);Y(o,()=>!M.v,c=>{var v=Lr(),f=ge(v);Mr(f,{$$legacy:!0});var u=m(m(f,!0));Pr(u,{$$legacy:!0}),w(c,v)});var n=m(m(o,!0));Sr(n,{$$legacy:!0});var s=m(m(n,!0));wr(s,{$$legacy:!0});var a=m(m(s,!0));Ir(a,{$$legacy:!0});var l=m(m(a,!0));Tr(l,{$$legacy:!0});var i=m(m(l,!0));i.__click=[Gr],E(t),V(()=>C(t,"display",We.v?"flex":"none")),w(e,t),G()}Z(["click"]);var Ur=y('<div class="svelte-1pkn4rs"><button class="svelte-1pkn4rs">Undo</button> <button class="svelte-1pkn4rs">Redo</button></div>');function Vr(e,r){L(r,!0);function t(c){c.key==="z"?n():c.key==="y"&&s()}function o(){h.v=pe(Q.v[J.v]),_t()}function n(){J.v!==0&&(J.v-=1,o())}function s(){J.v!==Q.v.length-1&&(J.v+=1,o())}var a=Ur();ie("keydown",ue,t);var l=A(a);l.__click=n;var i=m(m(l,!0));i.__click=s,E(a),w(e,a),G()}Z(["click"]);var Wr=y('<button class="svelte-108n948"> </button>'),Fr=y('<button class="svelte-108n948">X</button>'),Yr=y('<div class="svelte-108n948"><!> <!></div>');function qr(e,r){L(r,!1);var t=D(()=>ce),o=D(()=>ne);function n(i){/^[1-9]$/.test(i.key)&&Number(i.key)<=T.v.length?(o().reset(),t(t().v=Number(i.key)-1)):i.key==="x"&&M.v&&(o(o().v=!0),t(t().v=-1))}j();var s=Yr();ie("keydown",ue,n);var a=A(s);le(a,1,()=>T.v,ae,(i,c,v)=>{var f=Wr();f.__click=()=>{t(t().v=v),o().reset()};var u=A(f);u.nodeValue=v+1,E(f),V(()=>{C(f,"background-color",T.v[v]),C(f,"color",v===0?T.v[1]:T.v[0]),C(f,"border",v===t().v?v===0?`solid 2px ${T.v[1]}`:`solid 2px ${T.v[0]}`:`solid 2px ${T.v[v]}`),C(f,"--max-h",T.v.length>4?"2rem":"6rem")}),w(i,f)});var l=m(m(a,!0));Y(l,()=>M.v,i=>{var c=Fr();c.__click=()=>{o(o().v=!0),t(t().v=-1)},V(()=>{C(c,"border",o().v?`solid 2px ${T.v[1]}`:"solid 2px ButtonFace"),C(c,"--max-h",T.v.length>4?"2rem":"6rem")}),w(i,c)}),E(s),w(e,s),G()}Z(["click"]);var Jr=y('<footer class="svelte-80pkd2"><div><!> <!></div></footer>');function Kr(e){var r=Jr(),t=A(r),o=A(t);qr(o,{$$legacy:!0});var n=m(m(o,!0));Vr(n,{$$legacy:!0}),E(t),E(r),w(e,r)}var Qr=y("<button>Reveal Tile</button>");function Zr(e,r){L(r,!0);const t=F(()=>{const l=[];let i=!0;const c=h.numRows,v=h.numColumns;for(let f=0;f<c;(f+=1)-1)for(let u=0;u<v;(u+=1)-1)ve.v[f][u].colorIndex!==h.v[f][u].colorIndex&&(l.push({row:f,column:u}),i=!1);return{isDifferent:l,allSame:i}}),o=F(()=>X(t).isDifferent),n=F(()=>X(t).allSame);ye(()=>{Le.v=X(n)});function s(){if(!Le.v){const l=Kt(0,X(o).length-1),i=X(o)[l].row,c=X(o)[l].column;h.v[i][c]={colorIndex:ve.v[i][c].colorIndex,Xed:!1},ht()}}var a=Qr();a.__click=s,w(e,a),G()}Z(["click"]);var jr=y("<span> </span> <!>",1),en=y("<button>Start Game</button>"),tn=y('<header class="svelte-1cyup8g"><button>Options</button> <!></header>');function rn(e,r){L(r,!1);var t=D(()=>M),o=D(()=>We),n=D(()=>ve);j();var s=tn(),a=A(s);a.__click=()=>{o(o().v=!o().v)},C(a,"margin-right","4px");var l=m(m(a,!0));Y(l,()=>t().v,i=>{var c=jr(),v=ge(c),f=A(v);E(v);var u=m(m(v,!0));Zr(u,{$$legacy:!0}),V(()=>xe(f,Le.v?"You win!":"Keep trying")),w(i,c)},i=>{var c=en();c.__click=()=>{t(t().v=!0),n(n().v=h.v),Ce()},w(i,c)}),E(s),V(()=>C(s,"justify-content",t().v?"space-between":"center")),w(e,s),G()}Z(["click"]);var nn=y('<!> <main class="svelte-1ucsgwf"><!></main> <!> <!>',1);function fn(e,r){L(r,!0);function t(u){u.button===0?re.v=!0:u.button===2&&(W.v=!0)}function o(u){u.button===0?re.reset():u.button===2&&W.reset(),Pe.v.row!==-1&&ht(),Pe.reset(),Te.reset()}let n=!0;Pt(()=>{if(window.location.hash&&n){const u=window.location.hash.slice(1).split("-");if(ar(u)){M.v=!!Number(u[0]),oe.v=Number(u[1]),se.v=Number(u[2]),fe.v="#"+u[3];const p=M.v?u.slice(4,-2):u.slice(4,-1);for(let x=0;x<p.length;(x+=1)-1)T.v[x]="#"+p[x];h.v=st(u[M.v?u.length-2:u.length-1]),Q.v[0]=pe(h.v),M.v&&(ve.v=st(u[u.length-1]))}else alert("Couldn't load the code from the URL. Make sure you copied the link correctly.")}n=!1});const s=F(()=>{const u=[Number(M.v),oe.v,se.v,fe.v.slice(1)];for(let p=0;p<T.v.length;(p+=1)-1)u.push(T.v[p].slice(1));return u.push(h.encoded),M.v&&u.push(ve.encoded),u.join("-")});ye(()=>{Te.v&&(window.location.hash=X(s))}),ye(()=>{document.body.style.backgroundColor=fe.v,document.body.style.color=T.v[0]});var a=nn();Lt(u=>{It.title="Shareogram"}),ie("mousedown",ue,t),ie("mouseup",ue,o),ie("contextmenu",ue,u=>u.preventDefault());var l=ge(a);rn(l,{});var i=m(m(l,!0)),c=A(i);gr(c,{}),E(i);var v=m(m(i,!0));Kr(v);var f=m(m(v,!0));Br(f,{}),w(e,a),G()}export{fn as component,un as universal};
