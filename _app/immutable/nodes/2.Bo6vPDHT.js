import{g as lt,E as We,h as P,s as Ie,a as at,H as vt,r as ze,d as ke,e as ue,k as ct,A as de,B as Ne,C as Ae,n as it,D as ut,F as ft,p as R,q as y,b as T,t as E,u as A,$ as le,f as _e,G as dt}from"../chunks/disclose-version.CSJjsmsW.js";import{l as qe,p as _t,o as ht,q as pt,t as Je,v as Ue,w as mt,T as gt,y as bt,n as Le,s as ye,G as yt,a as Se,U as xt,V as wt,W as It,i as kt,S as Ct,h as $t,X as Tt,Y as Et,K as At,g as S,O as H,C as ce,D as ie,I as V,Z as me,b as Ke,u as St}from"../chunks/runtime.DgM04zJ0.js";import{d as pe,s as ge,e as Q,a as Ht}from"../chunks/render.C9QniVHC.js";import{p as Ce,i as ae}from"../chunks/if.BM448LYJ.js";import{i as Ze}from"../chunks/lifecycle.B4mWCg_p.js";import{r as Qe}from"../chunks/misc.C5udYI-v.js";function xe(e,n=!1){return be(e,new Map)}function be(e,n,t,s){if(typeof e=="object"&&e!==null){const o=n.get(e);if(o!==void 0)return o;if(qe(e)){const v=[];n.set(e,v);for(let c=0;c<e.length;c+=1)v.push(be(e[c],n));return v}if(_t(e)===ht){const v={};n.set(e,v);for(var r in e)v[r]=be(e[r],n);return v}if(e instanceof Date)return structuredClone(e);if(typeof e.toJSON=="function")return be(e.toJSON(),n)}if(e instanceof EventTarget)return e;try{return structuredClone(e)}catch{return e}}let $e=null;function U(e,n){return n}function Nt(e,n,t,s){for(var r=[],o=n.length,v=0;v<o;v++)xt(n[v].e,r,!0);var c=o>0&&r.length===0&&t!==null;if(c){var d=t.parentNode;it(d),d.append(t),s.clear(),q(e,n[0].prev,n[o-1].next)}wt(r,()=>{for(var h=0;h<o;h++){var I=n[h];c||(s.delete(I.k),q(e,I.prev,I.next)),It(I.e,!c)}})}function K(e,n,t,s,r,o=null){var v=e,c={flags:n,items:new Map,first:null},d=(n&We)!==0;if(d){var h=e;v=P?Ie(h.firstChild):h.appendChild(lt())}P&&at();var I=null;pt(()=>{var _=t(),i=qe(_)?_:_==null?[]:Array.from(_),a=i.length,l=c.flags;l&Ae&&!kt(i)&&!(Ct in i)&&!($t in i)&&(l^=Ae,l&ft&&!(l&de)&&(l^=de));let u=!1;if(P){var g=v.data===vt;g!==(a===0)&&(v=ze(),Ie(v),ke(!1),u=!0)}if(P){for(var m=null,C,f=0;f<a;f++){if(ue.nodeType===8&&ue.data===ct){v=ue,u=!0,ke(!1);break}var p=i[f],$=s(p,f);C=je(ue,c,m,null,p,$,f,r,l),c.items.set($,C),m=C}a>0&&Ie(ze())}P||Mt(i,c,v,r,l,s),o!==null&&(a===0?I?Je(I):I=Ue(()=>o(v)):I!==null&&mt(I,()=>{I=null})),u&&ke(!0)}),P&&(v=ue)}function Mt(e,n,t,s,r,o){var Me,Re,De,Xe;var v=(r&ut)!==0,c=(r&(de|Ne))!==0,d=e.length,h=n.items,I=n.first,_=I,i=new Set,a=null,l=new Set,u=[],g=[],m,C,f,p;if(v)for(p=0;p<d;p+=1)m=e[p],C=o(m,p),f=h.get(C),f!==void 0&&((Me=f.a)==null||Me.measure(),l.add(f));for(p=0;p<d;p+=1){if(m=e[p],C=o(m,p),f=h.get(C),f===void 0){var $=_?_.e.nodes.start:t;a=je($,n,a,a===null?n.first:a.next,m,C,p,s,r),h.set(C,a),u=[],g=[],_=a.next;continue}if(c&&Rt(f,m,p,r),f.e.f&gt&&(Je(f.e),v&&((Re=f.a)==null||Re.unfix(),l.delete(f))),f!==_){if(i.has(f)){if(u.length<g.length){var b=g[0],D;a=b.prev;var M=u[0],z=u[u.length-1];for(D=0;D<u.length;D+=1)Ye(u[D],b,t);for(D=0;D<g.length;D+=1)i.delete(g[D]);q(n,M.prev,z.next),q(n,a,M),q(n,z,b),_=b,a=z,p-=1,u=[],g=[]}else i.delete(f),Ye(f,_,t),q(n,f.prev,f.next),q(n,f,a===null?n.first:a.next),q(n,a,f),a=f;continue}for(u=[],g=[];_!==null&&_.k!==C;)i.add(_),g.push(_),_=_.next;if(_===null)continue;f=_}u.push(f),a=f,_=f.next}const L=Array.from(i);for(;_!==null;)L.push(_),_=_.next;var G=L.length;if(G>0){var st=r&We&&d===0?t:null;if(v){for(p=0;p<G;p+=1)(De=L[p].a)==null||De.measure();for(p=0;p<G;p+=1)(Xe=L[p].a)==null||Xe.fix()}Nt(n,L,st,h)}v&&bt(()=>{var Oe;for(f of l)(Oe=f.a)==null||Oe.apply()}),Le.first=n.first&&n.first.e,Le.last=a&&a.e}function Rt(e,n,t,s){s&de&&ye(e.v,n),s&Ne?ye(e.i,t):e.i=t}function je(e,n,t,s,r,o,v,c,d){var h=$e;try{var I=(d&de)!==0,_=(d&Ae)===0,i=I?_?yt(r):Se(r):r,a=d&Ne?Se(v):v,l={i:a,v:i,k:o,a:null,e:null,prev:t,next:s};return $e=l,l.e=Ue(()=>c(e,i,a),P),l.e.prev=t&&t.e,l.e.next=s&&s.e,t===null?n.first=l:(t.next=l,t.e.next=l.e),s!==null&&(s.prev=l,s.e.prev=l.e),l}finally{$e=h}}function Ye(e,n,t){for(var s=e.next?e.next.e.nodes.start:t,r=n?n.e.nodes.start:t,o=e.e.nodes.start;o!==s;){var v=o.nextSibling;r.before(o),o=v}}function q(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}let Pe=!1;function et(){Pe||(Pe=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var n;if(!e.defaultPrevented)for(const t of e.target.elements)(n=t.__on_r)==null||n.call(t)})},{capture:!0}))}function ee(e){if(P){var n=!1,t=()=>{if(!n){if(n=!0,e.hasAttribute("value")){var s=e.value;fe(e,"value",null),e.value=s}if(e.hasAttribute("checked")){var r=e.checked;fe(e,"checked",null),e.checked=r}}};e.__on_r=t,Et(t),et()}}function fe(e,n,t,s){t=t==null?null:t+"";var r=e.__attributes??(e.__attributes={});P&&(r[n]=e.getAttribute(n),n==="src"||n==="href"||n==="srcset")||r[n]!==(r[n]=t)&&(n==="loading"&&(e[Tt]=t),t===null?e.removeAttribute(n):e.setAttribute(n,t))}function k(e,n,t,s,r){var o=e.__attributes??(e.__attributes={}),v=e.style,c="style-"+n;o[c]===t&&!r||(o[c]=t,t==null?v.removeProperty(n):v.setProperty(n,t,""))}function Dt(e,n,t,s=t){e.addEventListener(n,t);const r=e.__on_r;r?e.__on_r=()=>{r(),s()}:e.__on_r=s,et()}function te(e,n,t){Dt(e,"input",()=>{t(Be(e)?Fe(e.value):e.value)}),At(()=>{var s=n();if(P&&e.defaultValue!==e.value){t(e.value);return}Be(e)&&s===Fe(e.value)||e.type==="date"&&!s&&!e.value||(e.value=s??"")})}function Be(e){var n=e.type;return n==="number"||n==="range"}function Fe(e){return e===""?null:+e}const Xt=!0,$n=Object.freeze(Object.defineProperty({__proto__:null,prerender:Xt},Symbol.toStringTag,{value:"Module"}));function Ot(e,n,t,s){const r=Math.abs(e-t),o=Math.abs(n-s);return r===0&&o===1?s>n?"right":"left":r===1&&o===0?t>e?"below":"above":"not adjacent"}function zt(){const e="0123456789abcdef";let n="#";for(let t=0;t<6;t++){const s=Math.floor(Math.random()*e.length);n+=e[s]}return n}function Lt(e,n){return e.map(t=>t.map(s=>s[n]))}function Yt(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++){if(e[t].length!==n[t].length)return!1;for(let s=0;s<e[t].length;s++)if(e[t][s]!==n[t][s])return!1}return!0}const we=e=>String.fromCharCode(97+e),He=e=>e.charCodeAt(0)-97;function Pt(e){const n=e.match(/(\d+|[a-z])/g),t=[],s=[];if(n)for(let r=0;r<n.length;r++){const o=n[r];isNaN(Number(o))?s.push(o):t.push(Number(o))}if(t.length!==s.length)throw new Error("Error: different number of counts and letters.");return{numbers:t,letters:s}}const ne=e=>e.colorIndex!==0,Bt=()=>w.v.length>2;function tt(){const e=[[]];for(let n=0;n<F.v;n++){e[n]=[];for(let t=0;t<B.v;t++)e[n][t]={colorIndex:0,Xed:!1}}return e}function nt(){for(let e=0;e<O.numRows;e++)for(let n=0;n<O.numColumns;n++)O.v[e][n].colorIndex>w.v.length-1&&(O.v[e][n].colorIndex=0)}function Ft(e){const n=[[]],t=e.length,s=e[0].length;for(let r=0;r<t;r++){n[r]=[{count:0,color:""}];for(let o=0;o<s;o++)if(ne(e[r][o])){const v=o===0?null:e[r][o-1].colorIndex,c=e[r][o].colorIndex;v!==c?n[r].push({count:1,color:we(c)}):n[r][n[r].length-1].count++}n[r].length>1&&n[r][0].count===0&&n[r].shift()}return n}function Gt(e){const n=[[]],t=e.length,s=e[0].length;for(let r=0;r<s;r++){n[r]=[{count:0,color:""}];for(let o=0;o<t;o++)if(ne(e[o][r])){const v=o===0?null:e[o-1][r].colorIndex,c=e[o][r].colorIndex;v!==c?n[r].push({count:1,color:we(c)}):n[r][n[r].length-1].count++}n[r].length>1&&n[r][0].count===0&&n[r].shift()}return n}function Vt(e){let n="";const t=e.length,s=e[0].length;let r=1;for(let v=0;v<t;v++)for(let c=0;c<s;c++)if(!(v===0&&c===0)){const d=c===0?e[v-1][s-1]:e[v][c-1];d.colorIndex===e[v][c].colorIndex&&d.Xed===e[v][c].Xed?r++:(n+=r+(d.Xed?"x":we(d.colorIndex)),r=1)}const o=e[t-1][s-1];return n+=r+(o.Xed?"x":we(o.colorIndex)),n}function Ge(e){const n=Pt(e),t=[];let s=0,r=0;for(let o=0;o<F.v;o++)t[o]=[];for(let o=0;o<n.numbers.length;o++)for(let v=0;v<n.numbers[o];v++)n.letters[o]==="x"?t[s][r++]={colorIndex:0,Xed:!0}:t[s][r++]={colorIndex:He(n.letters[o]),Xed:!1},r>B.v-1&&(s++,r=0);return t}const Ve=e=>JSON.parse(JSON.stringify(e));function N(e){const n=typeof e=="object";let t=Se(Ce(n?Ve(e):e));return{get v(){return S(t)},set v(r){ye(t,Ce(r))},reset:()=>ye(t,Ce(n?Ve(e):e))}}function rt(){const e=N(ot),n=H(()=>e.v.length),t=H(()=>e.v[0].length),s=H(()=>Lt(e.v,"colorIndex")),r=H(()=>Vt(e.v)),o=H(()=>Ft(e.v)),v=H(()=>Gt(e.v));return{get v(){return e.v},set v(c){e.v=c},reset:e.reset,get numRows(){return S(n)},get numColumns(){return S(t)},get colorIndices(){return S(s)},get encoded(){return S(r)},get rowHints(){return S(o)},get columnHints(){return S(v)}}}const j=N("#476fb8"),w=N(["#f8fafc","#020617"]),Z=N(1),B=N(5),F=N(5),ot=tt(),O=rt(),ve=rt(),J=N([ot]),W=N(0),re=N(!1),oe=N(!1),X=N(!1),x=N({row:-1,column:-1}),Te=N(""),Ee=N(0),se=N(1),he=N(!0),Y=N(50);var Wt=E("<div> </div>"),qt=E('<th class="svelte-1rie86b"></th>'),Jt=E('<thead><tr><th class="svelte-1rie86b"></th><!></tr></thead>'),Ut=E("<div> </div>"),Kt=E("<td></td>"),Zt=E("<td> </td>"),Qt=E("<tr><!><!></tr>"),jt=E('<table class="svelte-1rie86b"><!><tbody></tbody></table>');function en(e,n){ce(n,!1);var t=Qe(()=>O);const s=a=>a.Xed,r=a=>a.colorIndex===Z.v;function o(a,l){a.colorIndex=l}function v(a){a.colorIndex=0}function c(a){a.Xed=!a.Xed}function d(a,l,u){X.v?a.button===0&&!s(t().v[l][u])?r(t().v[l][u])?o(t().v[l][u],0):o(t().v[l][u],Z.v):a.button===2&&!ne(t().v[l][u])&&c(t().v[l][u]):a.button===0&&!r(t().v[l][u])?o(t().v[l][u],Z.v):v(t().v[l][u]),he.v=!1,x.v={row:l,column:u},Ee.reset()}function h(a,l){if(!(!re.v&&!oe.v||re.v&&oe.v||x.v.row===-1))if(Ee.v++,Ee.v===1&&(Te.v=Ot(x.v.row,x.v.column,a,l)),X.v)if(Te.v==="above"||Te.v==="below"){const u=Math.min(x.v.row,a),g=Math.max(x.v.row,a);for(let m=u;m<g+1;m++)re.v&&!s(t().v[m][x.v.column])?o(t().v[m][x.v.column],t().v[x.v.row][x.v.column].colorIndex):oe.v&&!ne(t().v[m][x.v.column])&&t(t().v[m][x.v.column].Xed=t().v[x.v.row][x.v.column].Xed)}else{const u=Math.min(x.v.column,l),g=Math.max(x.v.column,l);for(let m=u;m<g+1;m++)re.v&&!s(t().v[x.v.row][m])?o(t().v[x.v.row][m],t().v[x.v.row][x.v.column].colorIndex):oe.v&&!ne(t().v[x.v.row][m])&&t(t().v[x.v.row][m].Xed=t().v[x.v.row][x.v.column].Xed)}else ne(t().v[x.v.row][x.v.column])?o(t().v[a][l],Z.v):v(t().v[a][l])}Ze();var I=jt(),_=R(I);ae(_,()=>X.v,a=>{var l=Jt(),u=R(l),g=R(u),m=y(g);K(m,1,()=>({length:t().numColumns}),U,(C,f,p)=>{var $=qt();K($,9,()=>ve.columnHints[p],U,(b,D,M)=>{var z=Wt();V(()=>k(z,"color",w.v[He(me(D).color)]));var L=R(z);A(z),V(()=>{k(z,"font-size",Y.v/1.5+"px"),ge(L,me(D).count)}),T(b,z)}),A($),T(C,$)}),A(u),A(l),T(a,l)});var i=y(_);K(i,9,()=>({length:t().numRows}),U,(a,l,u)=>{var g=Qt(),m=R(g);ae(m,()=>X.v,f=>{var p=Kt();k(p,"display","flex"),k(p,"justify-content","right"),K(p,9,()=>ve.rowHints[u],U,($,b,D)=>{var M=Ut();k(M,"display","flex"),k(M,"justify-content","center"),k(M,"align-items","center"),V(()=>k(M,"color",w.v[He(me(b).color)]));var z=R(M);A(M),V(()=>{k(M,"min-width",Y.v+"px"),k(M,"height",Y.v+"px"),k(M,"font-size",Y.v/1.5+"px"),ge(z,me(b).count)}),T($,M)}),A(p),T(f,p)});var C=y(m);K(C,1,()=>({length:t().numColumns}),U,(f,p,$)=>{var b=Zt(),D=H(()=>L=>{d(L,u,$)});b.__mousedown=function(...L){var G;return(G=S(D))==null?void 0:G.apply(this,L)};var M=H(()=>()=>{h(u,$)});k(b,"text-align","center");var z=R(b);V(()=>ge(z,s(t().v[u][$])?"X":"")),A(b),V(()=>{k(b,"background-color",w.v[t().v[u][$].colorIndex]),k(b,"color",w.v[1]),k(b,"min-width",Y.v+"px"),k(b,"height",Y.v+"px"),k(b,"font-size",Y.v/1.5+"px"),k(b,"border-top",se.v===0?"0":u%5===0&&u!==0&&se.v===2?`solid 4px ${w.v[1]}`:`solid 2px ${j.v}`),k(b,"border-left",se.v===0?"0":$%5===0&&$!==0&&se.v===2?`solid 4px ${w.v[1]}`:`solid 2px ${j.v}`)}),Q("mouseenter",b,function(...L){var G;return(G=S(M))==null?void 0:G.apply(this,L)},!1),T(f,b)}),A(g),T(a,g)}),A(i),A(I),T(e,I),ie()}pe(["mousedown"]);var tn=E('<div class="svelte-17032p4"><button class="svelte-17032p4">Undo (z)</button> <button class="svelte-17032p4">Redo (y)</button></div>');function nn(e,n){ce(n,!0);function t(h){h.key==="z"?r():h.key==="y"&&o()}function s(){O.v=xe(J.v[W.v]),nt()}function r(){W.v!==0&&(W.v--,s())}function o(){W.v!==J.v.length-1&&(W.v++,s())}var v=tn();Q("keydown",le,t,!1);var c=R(v);c.__click=r;var d=y(y(c,!0));d.__click=o,A(v),T(e,v),ie()}pe(["click"]);var rn=E('<input type="color">'),on=E("<button>-</button>"),sn=E("<button>+</button>"),ln=E("<!> <!>",1),an=E('<div class="svelte-1g2zxbw"><div class="svelte-1g2zxbw"><input type="color"> <!></div> <!> <input type="range" min="0" class="svelte-1g2zxbw"> <input type="range" class="svelte-1g2zxbw"></div>');function vn(e,n){ce(n,!0);const t=100,s=10;function r(){he.v=!1}function o(){he.reset()}function v(l){l.preventDefault(),l.deltaY<0&&Y.v<t?Y.v+=5:l.deltaY>0&&Y.v>s&&(Y.v-=5)}Ke(()=>{document.body.style.backgroundColor=j.v,document.body.style.color=w.v[0]});var c=an();Q("wheel",le,v,!1,!1);var d=R(c),h=R(d);ee(h),h.__click=r,h.__change=o;var I=y(y(h,!0));K(I,65,()=>w.v,U,(l,u,g)=>{var m=rn();ee(m),m.__click=r,m.__change=o,te(m,()=>w.v[g],C=>w.v[g]=C),T(l,m)}),A(d);var _=y(y(d,!0));ae(_,()=>!X.v,l=>{var u=ln(),g=_e(u);ae(g,Bt,C=>{var f=on(),p=H(()=>()=>{w.v.pop(),Z.v>w.v.length-1&&Z.v--,nt()});f.__click=function(...$){var b;return(b=S(p))==null?void 0:b.apply(this,$)},T(C,f)});var m=y(y(g,!0));ae(m,()=>w.v.length<16,C=>{var f=sn(),p=H(()=>()=>{w.v.push(zt())});f.__click=function(...$){var b;return(b=S(p))==null?void 0:b.apply(this,$)},T(C,f)}),T(l,u)});var i=y(y(_,!0));ee(i);var a=y(y(i,!0));ee(a),fe(a,"min",s),fe(a,"max",t),A(c),V(()=>{fe(i,"max",B.v>5||F.v>5?2:1),k(i,"accent-color",w.v[1]),k(a,"accent-color",w.v[1])}),te(h,()=>j.v,l=>j.v=l),te(i,()=>se.v,l=>se.v=l),te(a,()=>Y.v,l=>Y.v=l),T(e,c),ie()}pe(["click","change"]);var cn=E('<button class="svelte-1umumn8"> </button>'),un=E('<div class="svelte-1umumn8"></div>');function fn(e,n){ce(n,!1);var t=Qe(()=>Z);function s(o){/^[1-9]$/.test(o.key)&&t(t().v=Number(o.key)>w.v.length?t().v:Number(o.key)-1)}Ze();var r=un();Q("keydown",le,s,!1),K(r,9,()=>w.v,U,(o,v,c)=>{var d=cn();d.__click=()=>{t(t().v=c)};var h=R(d);h.nodeValue=c<9?c+1:"",A(d),V(()=>{k(d,"background-color",w.v[c]),k(d,"color",c===0?w.v[1]:w.v[0]),k(d,"border",c===t().v?c===0?`solid 2px ${w.v[1]}`:`solid 2px ${w.v[0]}`:"0")}),T(o,d)}),A(r),T(e,r),ie()}pe(["click"]);var dn=E('<footer class="svelte-u97x2c"><!> <!></footer> <!>',1);function _n(e){var n=dn(),t=_e(n),s=R(t);nn(s,{$$legacy:!0});var r=y(y(s,!0));vn(r,{$$legacy:!0}),A(t);var o=y(y(t,!0));fn(o,{$$legacy:!0}),T(e,n)}var hn=E('<input type="text" class="svelte-iydr7c"> <input type="text" class="svelte-iydr7c"> <button class="svelte-iydr7c">Start Game</button>',1),pn=E('<span class="svelte-iydr7c"> </span> <button class="svelte-iydr7c">New Editor</button>',1),mn=E('<header class="svelte-iydr7c"><!></header>');function gn(e,n){ce(n,!0);const t=c=>Math.max(0,Math.min(Number(String(c).replace(/[^0-9]/g,"")),50)),s=H(()=>Yt(ve.colorIndices,O.colorIndices));function r(){B.v<1||F.v<1||(O.v=tt(),J.reset(),J.v[0]=xe(O.v),W.reset())}var o=mn(),v=R(o);ae(v,()=>!X.v,c=>{var d=hn(),h=_e(d);ee(h);var I=H(()=>()=>{B.v=t(B.v),r()});h.__input=function(...u){var g;return(g=S(I))==null?void 0:g.apply(this,u)};var _=y(y(h,!0));ee(_);var i=H(()=>()=>{F.v=t(F.v),r()});_.__input=function(...u){var g;return(g=S(i))==null?void 0:g.apply(this,u)};var a=y(y(_,!0)),l=H(()=>()=>{X.v=!0,ve.v=O.v,r()});a.__click=function(...u){var g;return(g=S(l))==null?void 0:g.apply(this,u)},te(h,()=>B.v,u=>B.v=u),te(_,()=>F.v,u=>F.v=u),T(c,d)},c=>{var d=pn(),h=_e(d),I=R(h);A(h);var _=y(y(h,!0)),i=H(()=>()=>{X.reset(),r()});_.__click=function(...a){var l;return(l=S(i))==null?void 0:l.apply(this,a)},V(()=>ge(I,S(s)?"You win":"Keep trying")),T(c,d)}),A(o),T(e,o),ie()}pe(["input","click"]);var bn=E('<!> <main class="svelte-faurn1"><!></main> <!>',1);function Tn(e,n){ce(n,!0);function t(i){i.button===0?re.v=!0:i.button===2&&(oe.v=!0)}function s(i){i.button===0?re.reset():i.button===2&&oe.reset(),x.v.row!==-1&&(W.v!==J.v.length-1&&J.v.splice(W.v+1),W.v++,J.v.push(xe(O.v))),x.reset(),he.reset()}let r=!0;St(()=>{if(window.location.hash&&r){const i=window.location.hash.slice(1).split("-");X.v=!!Number(i[0]),B.v=Number(i[1]),F.v=Number(i[2]),j.v="#"+i[3];const a=X.v?i.slice(4,-2):i.slice(4,-1);for(let l=0;l<a.length;l++)w.v[l]="#"+a[l];O.v=Ge(i[X.v?i.length-2:i.length-1]),J.v[0]=xe(O.v),X.v&&(ve.v=Ge(i[i.length-1]))}r=!1});const o=H(()=>{const i=[Number(X.v),B.v,F.v,j.v.slice(1)];for(let a=0;a<w.v.length;a++)i.push(w.v[a].slice(1));return i.push(O.encoded),X.v&&i.push(ve.encoded),i.join("-")});Ke(()=>{he.v&&(window.location.hash=S(o))});var v=bn();Q("mousedown",le,t,!1),Q("mouseup",le,s,!1),Q("contextmenu",le,function(...i){var a;return(a=S(c))==null?void 0:a.apply(this,i)},!1),Ht(i=>{dt.title="Shareogram"});var c=H(()=>i=>i.preventDefault()),d=_e(v);gn(d,{});var h=y(y(d,!0)),I=R(h);en(I,{}),A(h);var _=y(y(h,!0));_n(_),T(e,v),ie()}export{Tn as component,$n as universal};
