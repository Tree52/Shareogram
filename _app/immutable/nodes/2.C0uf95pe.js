import{l as at,h as Z,n as He,o as Ne,b as pe,p as lt,d as rt,q as me,r as ie,a as w,t as y,$ as be,g as j,i as h,e as fe,f as ge,v as nt,w as ot}from"../chunks/disclose-version.DskMrnCl.js";import{v as ut,a6 as qe,l as Ge,H as vt,w as st,G as it,x as Ue,y as Ve,z as ct,a7 as ft,M as dt,a8 as de,s as V,a9 as Ae,aa as Te,n as _t,a as ee,ab as mt,ac as ht,ad as bt,ae as gt,i as xt,h as wt,af as yt,ag as pt,ah as It,X as Je,g as X,a2 as xe,C as te,b as Qe,F as ae,ai as k,D as z}from"../chunks/runtime.B-voh4SI.js";import{p as Y,i as P,s as we}from"../chunks/if.CD2rI8m4.js";import{i as Ct}from"../chunks/lifecycle.e8NTOEYm.js";import{r as Xe}from"../chunks/misc.BYov-51Q.js";let Ie=null;function J(e,t){return t}function kt(e,t,a){for(var r=[],o=e.length,s=0;s<o;s++)mt(e[s].e,r,!0);var f=o>0&&r.length===0&&t!==null;if(f){var x=t.parentNode;lt(x),x.append(t),a.clear(),U(e[0].prev,e[o-1].next)}ht(r,()=>{for(var m=0;m<o;m++){var v=e[m];f||(a.delete(v.k),U(v.prev,v.next)),bt(v.e,!f)}})}function Q(e,t,a,r,o,s=null){var f={flags:t,items:new Map,next:null},x=(t&qe)!==0;if(x){var m=e;e=Z?He(m.firstChild):m.appendChild(at())}var v=null;ut(()=>{var i=a(),l=Ge(i)?i:i==null?[]:Array.from(i),n=l.length,u=f.flags;u&Te&&!xt(l)&&!(wt in l)&&(u^=Te,u&yt&&!(u&de)&&(u^=de));let S=!1;if(Z){var C=e.data===vt;(C!==(n===0)||Ne===void 0)&&(st(rt),pe(!1),S=!0)}if(Z){for(var b=Ne,T=f,p,d=0;d<n;d++){if(b.nodeType!==8||b.data!==it){S=!0,pe(!1);break}b=He(b);var c=l[d],I=r(c,d);p=We(b,T,null,c,I,d,o,u),f.items.set(I,p),b=b.nextSibling,T=p}if(n>0)for(;b!==e;){var A=b.nextSibling;b.remove(),b=A}}Z||Et(l,f,e,o,u,r),s!==null&&(n===0?v?Ue(v):v=Ve(()=>s(e)):v!==null&&ct(v,()=>{v=null})),S&&pe(!0)})}function Et(e,t,a,r,o,s){var he,Se,Re,Me;var f=(o&gt)!==0,x=(o&(de|Ae))!==0,m=e.length,v=t.items,i=t.next,l=i,n=new Set,u=t,S=new Set,C=[],b=[],T,p,d,c;if(f)for(c=0;c<m;c+=1)T=e[c],p=s(T,c),d=v.get(p),d!==void 0&&((he=d.a)==null||he.measure(),S.add(d));for(c=0;c<m;c+=1){if(T=e[c],p=s(T,c),d=v.get(p),d===void 0){var I=l?ce(l.e):a;u=We(I,u,u.next,T,p,c,r,o),v.set(p,u),C=[],b=[],l=u.next;continue}if(x&&Tt(d,T,c,o),d.e.f&ft&&(Ue(d.e),f&&((Se=d.a)==null||Se.unfix(),S.delete(d))),d!==l){if(n.has(d)){if(C.length<b.length){var A=b[0],M;u=A.prev;var D=C[0],H=C[C.length-1];for(M=0;M<C.length;M+=1)ze(C[M],A,a);for(M=0;M<b.length;M+=1)n.delete(b[M]);U(D.prev,H.next),U(u,D),U(H,A),l=A,u=H,c-=1,C=[],b=[]}else n.delete(d),ze(d,l,a),U(d.prev,d.next),U(d,u.next),U(u,d),u=d;continue}for(C=[],b=[];l!==null&&l.k!==p;)n.add(l),b.push(l),l=l.next;if(l===null)continue;d=l}C.push(d),u=d,l=d.next}const N=Array.from(n);for(;l!==null;)N.push(l),l=l.next;var L=N.length;if(L>0){var se=o&qe&&m===0?a:null;if(f){for(c=0;c<L;c+=1)(Re=N[c].a)==null||Re.measure();for(c=0;c<L;c+=1)(Me=N[c].a)==null||Me.fix()}kt(N,se,v)}f&&dt(()=>{var De;for(d of S)(De=d.a)==null||De.apply()})}function Tt(e,t,a,r){r&de&&V(e.v,t),r&Ae?V(e.i,a):e.i=a}function We(e,t,a,r,o,s,f,x){var m=Ie;try{var v=(x&de)!==0,i=(x&Te)===0,l=v?i?_t(r):ee(r):r,n=x&Ae?ee(s):s,u={i:n,v:l,k:o,a:null,e:null,prev:t,next:a};return t.next=u,a!==null&&(a.prev=u),Ie=u,u.e=Ve(()=>f(e,l,n)),u}finally{Ie=m}}function Oe(e,t){if(e.nodeType===3&&e.data===""||e.nodeType===8){for(var a=t.first,r;a!==null&&(r=a.first,a.dom===null);){if(r===null)return e.previousSibling;a=r}return ce(a)}return e}function ce(e){var t=e.dom;return Ge(t)?Oe(t[0],e):Oe(t,e)}function ze(e,t,a){for(var r=e.next?ce(e.next.e):a,o=t?ce(t.e):a,s=ce(e.e);s!==r;){var f=s.nextSibling;o.before(s),s=f}}function U(e,t){e.next=t,t!==null&&(t.prev=e)}let Le=!1;function Ze(){Le||(Le=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const a of e.target.elements)(t=a.__on_r)==null||t.call(a)})},{capture:!0}))}function $(e){if(Z){var t=!1,a=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var r=e.value;q(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var o=e.checked;q(e,"checked",null),e.checked=o}}};e.__on_r=a,pt(a),Ze()}}function q(e,t,a){a=a==null?null:a+"";var r=e.__attributes??(e.__attributes={});Z&&(r[t]=e.getAttribute(t),t==="src"||t==="href"||t==="srcset")||r[t]!==(r[t]=a)&&(t==="loading"&&(e[It]=a),a===null?e.removeAttribute(t):e.setAttribute(t,a))}function $e(e,t,a,r=a){e.addEventListener(t,a);const o=e.__on_r;o?e.__on_r=()=>{o(),r()}:e.__on_r=r,Ze()}function _e(e,t,a){$e(e,"input",()=>{a(Be(e)?Pe(e.value):e.value)}),Je(()=>{var r=t();if(Z&&e.defaultValue!==e.value){a(e.value);return}Be(e)&&r===Pe(e.value)||e.type==="date"&&!r&&!e.value||(e.value=r??"")})}function Fe(e,t,a){$e(e,"change",()=>{var r=e.checked;a(r)}),t()==null&&a(!1),Je(()=>{var r=t();e.checked=!!r})}function Be(e){var t=e.type;return t==="number"||t==="range"}function Pe(e){return e===""?null:+e}const At=!0,pa=Object.freeze(Object.defineProperty({__proto__:null,prerender:At},Symbol.toStringTag,{value:"Module"})),jt=(e,t,a,r)=>{const o=Math.abs(e-a),s=Math.abs(t-r);return o===1&&s===0?a>e?"below":"above":o===0&&s===1?r>t?"right":"left":"not adjacent"};function et(e=6){const t="0123456789ABCDEF";let a="#";for(let r=0;r<e;r++){const o=Math.floor(Math.random()*t.length);a+=t[o]}return a}function re(e){return e===0?"":String.fromCharCode(96+e)}function Ye(e){return e===""?0:e.charCodeAt(0)-96}function St(e){return parseInt(e,16)}function Rt(e,t){return e.map(a=>a.map(r=>r[t]))}function Mt(e,t){if(e.length!==t.length)return!1;for(let a=0;a<e.length;a++){if(e[a].length!==t[a].length)return!1;for(let r=0;r<e[a].length;r++)if(e[a][r]!==t[a][r])return!1}return!0}function Dt(e){if(e<0||e>15)throw new Error("Number out of range (0-15)");return e.toString(16).toUpperCase()}function Ht(e){return e.flat().map(Dt).join("")}const W=(e,t)=>_.value[e][t].colorIndex!==0,Ce=()=>E.value.length>2;function je(e,t,a){const r=[[]];let o=0;if(e<=50&&e>0&&t<=50&&t>0)for(let s=0;s<t;s++){r[s]=[];for(let f=0;f<e;f++)if(a){const x=St(a[o]);if(E.value.length-1<x)for(let m=E.value.length-1;m<x;m++)E.value.push(et());r[s][f]={colorIndex:a[o]!==void 0?x:0,Xed:!1},o++}else r[s][f]={colorIndex:0,Xed:!1}}return r}const Ke=e=>JSON.parse(JSON.stringify(e));function R(e){const t=typeof e=="object";let a=ee(Y(t?Ke(e):e));return{get value(){return X(a)},set value(o){V(a,Y(o))},reset:()=>V(a,Y(t?Ke(e):e))}}function Nt(e){const t=R(tt),a=xe(()=>t.value.length),r=xe(()=>t.value[0].length);return{get value(){return t.value},set value(o){t.value=o},reset:t.reset,get numRows(){return X(a)},get numColumns(){return X(r)}}}const E=R(["#f8fafc","#020617"]),ne=R(1),F=R(5),B=R(5),tt=je(F.value,B.value),_=Nt(),K=R([tt]),O=R(0),oe=R(!1),ue=R(!1),G=R(!1),g=R({row:-1,column:-1}),le=R({row:-1,column:-1}),ke=R(""),Ee=R(0),Xt=R(""),ye=R(!0),ve=R(!1);var Ot=y('<label class="svelte-1co30ep"> </label>'),zt=y('<button class="svelte-1co30ep"><!></button>'),Lt=y('<div class="middle svelte-1co30ep"></div>'),Ft=y('<input type="color" class="svelte-1co30ep">'),Bt=y('<button class="svelte-1co30ep">-</button>'),Pt=y('<button class="svelte-1co30ep">+</button>'),Yt=y("<!> <!>",1),Kt=y('<input type="checkbox" class="svelte-1co30ep">'),qt=y('<input type="checkbox" class="svelte-1co30ep">'),Gt=y('<header class="svelte-1co30ep"><div class="svelte-1co30ep"><div class="left svelte-1co30ep"><button id="undo" class="svelte-1co30ep">Undo</button> <span class="svelte-1co30ep">Ctrl + z</span></div> <div class="left svelte-1co30ep"><button id="undo" class="svelte-1co30ep">Redo</button> <span class="svelte-1co30ep">Ctrl + y</span></div></div> <!> <div class="svelte-1co30ep"><div style="width: 40rem; display: flex; flex-wrap: wrap; justify-content: right" class="svelte-1co30ep"><input type="color" class="svelte-1co30ep"> <!></div> <!> <!> <!></div></header>');function Ut(e,t){te(t,!0);function a(){O.value!==0&&(O.value--,_.value=we(K.value[O.value]))}function r(){O.value!==K.value.length-1&&(O.value++,_.value=we(K.value[O.value]))}function o(c){c.ctrlKey&&c.key==="z"?a():c.ctrlKey&&c.key==="y"&&r()}let s=ee("#476FB8");Qe(()=>{document.body.style.backgroundColor=X(s),document.body.style.color=E.value[0]});var f=Gt();ie("keydown",be,o,!1);var x=j(f),m=j(x),v=j(m);v.__click=a;var i=h(h(m,!0)),l=j(i);l.__click=r;var n=h(h(x,!0));P(n,Ce,c=>{var I=Lt();Q(I,73,()=>E.value,J,(A,M,D)=>{var H=zt();H.__click=()=>{ne.value=k(D)};var N=j(H);P(N,()=>k(D)!==0&&ve.value,L=>{var se=Ot(),he=j(se);z(()=>fe(he,re(k(D)))),z(()=>q(se,"for",E.value[k(D)])),w(L,se)}),z(()=>q(H,"style",`background-color: ${E.value[k(D)]??""}; color: ${E.value[0]??""};`)),w(A,H)}),w(c,I)});var u=h(h(n,!0)),S=j(u),C=j(S);$(C);var b=h(h(C,!0));Q(b,65,()=>E.value,J,(c,I,A)=>{var M=Ft();$(M),_e(M,()=>E.value[k(A)],D=>E.value[k(A)]=D),w(c,M)});var T=h(h(S,!0));P(T,()=>!G.value,c=>{var I=Yt(),A=ge(I);P(A,Ce,D=>{var H=Bt();H.__click=()=>{E.value.pop(),ne.value=1;for(let N=0;N<_.numRows;N++)for(let L=0;L<_.numRows;L++)_.value[N][L].colorIndex>E.value.length-1&&(_.value[N][L].colorIndex=0)},w(D,H)});var M=h(h(A,!0));P(M,()=>E.value.length<16,D=>{var H=Pt();H.__click=()=>{E.value.push(et())},w(D,H)}),w(c,I)});var p=h(h(T,!0));P(p,Ce,c=>{var I=Kt();$(I),Fe(I,()=>ve.value,A=>ve.value=A),w(c,I)});var d=h(h(p,!0));P(d,()=>_.numRows>5||_.numColumns>5,c=>{var I=qt();$(I),Fe(I,()=>ye.value,A=>ye.value=A),w(c,I)}),_e(C,()=>X(s),c=>V(s,c)),w(e,f),ae()}me(["click"]);var Vt=y('<button class="svelte-o41zl3"> </button>');function Jt(e,t){te(t,!0);const a=(l,n)=>_.value[l][n].Xed,r=(l,n)=>_.value[l][n].colorIndex===ne.value;function o(l,n,u){_.value[l][n].colorIndex=u}function s(l,n){_.value[l][n].colorIndex=0}function f(l,n){_.value[l][n].Xed=!_.value[l][n].Xed}function x(l){G.value?l.button===0&&!a(t.i,t.j)?r(t.i,t.j)?o(t.i,t.j,0):o(t.i,t.j,ne.value):l.button===2&&!W(t.i,t.j)&&f(t.i,t.j):l.button===0&&!r(t.i,t.j)?o(t.i,t.j,ne.value):s(t.i,t.j),g.value={row:t.i,column:t.j},Ee.reset()}function m(){if(!(!oe.value&&!ue.value||oe.value&&ue.value||g.value.row===-1))if(Ee.value++,le.value={row:t.i,column:t.j},Ee.value===1&&(ke.value=jt(g.value.row,g.value.column,t.i,t.j)),G.value)if(ke.value==="above"||ke.value==="below"){const l=Math.min(g.value.row,le.value.row),n=Math.max(g.value.row,le.value.row);for(let u=l;u<n+1;u++)oe.value&&!a(u,g.value.column)?o(u,g.value.column,_.value[g.value.row][g.value.column].colorIndex):ue.value&&!W(u,g.value.column)&&(_.value[u][g.value.column].Xed=_.value[g.value.row][g.value.column].Xed)}else{const l=Math.min(g.value.column,le.value.column),n=Math.max(g.value.column,le.value.column);for(let u=l;u<n+1;u++)oe.value&&!a(g.value.row,u)?o(g.value.row,u,_.value[g.value.row][g.value.column].colorIndex):ue.value&&!W(g.value.row,u)&&(_.value[g.value.row][u].Xed=_.value[g.value.row][g.value.column].Xed)}else W(g.value.row,g.value.column)?o(t.i,t.j,ne.value):s(t.i,t.j)}var v=Vt();v.__mousedown=x,z(()=>q(v,"style",`
		background-color: ${E.value[_.value[t.i][t.j].colorIndex]??""};
		color: ${(W(t.i,t.j)?E.value[0]:E.value[1])??""};
	`));var i=j(v);z(()=>fe(i,a(t.i,t.j)?"X":ve.value?re(_.value[t.i][t.j].colorIndex):"")),ie("mouseenter",v,m,!1),w(e,v),ae()}me(["mousedown"]);var Qt=y("<div> </div>"),Wt=y('<th class="svelte-m9mt2b"></th>'),Zt=y('<thead><tr><th class="svelte-m9mt2b"></th><!></tr></thead>'),$t=y("<div> </div>"),ea=y('<td style="display: flex; align-items: center; justify-content: right; height: var(--tile-width)" class="svelte-m9mt2b"></td>'),ta=y('<td class="svelte-m9mt2b"><!></td>'),aa=y("<tr><!><!></tr>"),la=y('<table class="svelte-m9mt2b"><!><tbody></tbody></table>');function ra(e,t){te(t,!0);function a(v){const i=[[]];for(let l=0;l<_.numRows;l++){i[l]=[{count:0,color:""}];for(let n=0;n<_.numColumns;n++)W(l,n)&&(n!==0&&v[l][n].colorIndex!==v[l][n-1].colorIndex?i[l].push({count:1,color:re(v[l][n].colorIndex)}):(i[l][i[l].length-1].count++,i[l][i[l].length-1].color=re(v[l][n].colorIndex)));i[l].length>1&&i[l][0].count===0&&i[l].shift()}return i}function r(v){const i=[[]];for(let l=0;l<_.numColumns;l++){i[l]=[{count:0,color:""}];for(let n=0;n<_.numRows;n++)W(n,l)&&(n!==0&&v[n][l].colorIndex!==v[n-1][l].colorIndex?i[l].push({count:1,color:re(v[n][l].colorIndex)}):(i[l][i[l].length-1].count++,i[l][i[l].length-1].color=re(v[n][l].colorIndex)));i[l].length>1&&i[l][0].count===0&&i[l].shift()}return i}let o=ee(Y([[]])),s=ee(Y([[]]));Qe(()=>{G.value||(V(o,Y(a(_.value))),V(s,Y(r(_.value))))});var f=la(),x=j(f);P(x,()=>G.value,v=>{var i=Zt(),l=j(i),n=j(l),u=h(n);Q(u,65,()=>({length:_.numColumns}),J,(S,C,b)=>{var T=Wt();Q(T,73,()=>X(s)[k(b)],J,(p,d,c)=>{var I=Qt();z(()=>q(I,"style",`color: ${E.value[Ye(k(d).color)]??""};`));var A=j(I);z(()=>fe(A,ve.value?k(d).count+k(d).color:k(d).count)),w(p,I)}),w(S,T)}),w(v,i)});var m=h(x);Q(m,73,()=>({length:_.numRows}),J,(v,i,l)=>{var n=aa(),u=j(n);P(u,()=>G.value,C=>{var b=ea();Q(b,73,()=>X(o)[k(l)],J,(T,p,d)=>{var c=$t();z(()=>q(c,"style",`padding: 2px; color: ${E.value[Ye(k(p).color)]??""};`));var I=j(c);z(()=>fe(I,ve.value?k(p).count+k(p).color:k(p).count)),w(T,c)}),w(C,b)});var S=h(u);Q(S,65,()=>({length:_.numColumns}),J,(C,b,T)=>{var p=ta(),d=j(p);Jt(d,{i:k(l),j:k(T)}),z(()=>q(p,"style",`
						border-top: ${(k(l)%5===0&&k(l)!==0&&ye.value?`solid 2px ${E.value[1]}`:"0")??""};
						border-left: ${(k(T)%5===0&&k(T)!==0&&ye.value?`solid 2px ${E.value[1]}`:"0")??""};`)),w(C,p)}),w(v,n)}),w(e,f),ae()}var na=y('<main class="svelte-122lnz"><!></main>');function oa(e){var t=na(),a=j(t);ra(a,{$$legacy:!0}),w(e,t)}var ua=y('<input class="svelte-1qwz963">');function va(e,t){te(t,!1);var a=Xe(()=>_),r=Xe(()=>Xt);const o=f=>f.replace(/[^0-9A-F]/g,"");Ct();var s=ua();$(s),s.__input=()=>{r(r().value=o(r().value)),a(a().value=je(F.value,B.value,r().value))},q(s,"placeholder","0123456789ABCDEF"),_e(s,()=>r().value,f=>r(r().value=f)),w(e,s),ae()}me(["input"]);var sa=(e,t,a)=>{navigator.clipboard.writeText(t(a.tileColorIndices)),alert("Copied to clipboard")},ia=y("<button>Export</button>");function ca(e,t){te(t,!0);var a=ia();a.__click=[sa,Ht,t],w(e,a),ae()}me(["click"]);var fa=y('<input autocomplete="off" class="svelte-1in9ujw"> <input autocomplete="off" class="svelte-1in9ujw"> <button style="margin-right: 1rem;">Start Game</button> <!> <!>',1),da=y('<span class="svelte-1in9ujw"> </span> <button>New Editor</button>',1),_a=y('<footer class="svelte-1in9ujw"><!></footer>');function ma(e,t){te(t,!0);const a=v=>Number(String(v).replace(/[^0-9]/g,""));let r=ee(Y([[]])),o=xe(()=>Rt(_.value,"colorIndex")),s=xe(()=>Mt(X(r),X(o)));function f(v,i){_.value=je(v,i),K.reset(),K.value[0]=we(_.value),O.reset()}var x=_a(),m=j(x);P(m,()=>!G.value,v=>{var i=fa(),l=ge(i);$(l),l.__input=()=>{F.value=a(F.value),f(F.value,B.value)};var n=h(h(l,!0));$(n),n.__input=()=>{B.value=a(B.value),f(F.value,B.value)};var u=h(h(n,!0));u.__click=()=>{G.value=!0,V(r,Y(X(o))),f(F.value,B.value)};var S=h(h(u,!0));va(S,{});var C=h(h(S,!0));ca(C,{get tileColorIndices(){return X(o)}}),_e(l,()=>F.value,b=>F.value=b),_e(n,()=>B.value,b=>B.value=b),w(v,i)},v=>{var i=da(),l=ge(i),n=j(l),u=h(h(l,!0));u.__click=()=>{G.reset(),f(F.value,B.value)},z(()=>fe(n,X(s)?"You win":"Keep trying")),w(v,i)}),w(e,x),ae()}me(["input","click"]);var ha=y("<!> <!> <!>",1);function Ia(e,t){te(t,!0);function a(m){m.button===0?oe.value=!0:m.button===2&&(ue.value=!0)}function r(m){m.button===0?oe.reset():m.button===2&&ue.reset(),g.value.row!==-1&&(O.value++,O.value!==K.value.length-1&&(K.value.splice(O.value),O.value=K.value.length),K.value.push(we(_.value))),g.reset(),le.reset()}var o=ha();ie("mousedown",be,a,!1),ie("mouseup",be,r,!1),ie("contextmenu",be,m=>m.preventDefault(),!1),nt(m=>{ot.title="Pixel Pictures"});var s=ge(o);Ut(s,{});var f=h(h(s,!0));oa(f);var x=h(h(f,!0));ma(x,{}),w(e,o),ae()}export{Ia as component,pa as universal};
