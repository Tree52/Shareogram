import{a as k,t as T}from"../chunks/disclose-version.uvWTDvGa.js";import{A as Lt,z as ut,o as Jt,R as Zt,b as Qt,at as Rt,h as ee,G as tt,D as jt,a9 as Dt,H as er,F as It,I as rt,c as Le,au as Fe,B as Ot,a as Pt,C as tr,_ as Ue,x as Ve,av as gt,aw as $t,ax as bt,ay as rr,a8 as nr,az as or,d as sr,T as ar,a5 as ir,Z as Yt,aA as lr,m as cr,q as dt,aB as vr,a2 as ur,ab as zt,u as Bt,aC as dr,aD as fr,aE as hr,E as _r,aF as pr,aG as mr,aH as gr,n as Re,aI as br,X as kt,Y as Tt,aJ as xr,ac as Ze,i as wr,k as F,j as b,ar as j,P as U,p as W,e as K,s as H,g as L,r as A,K as Oe,f as Qe,aK as ft,aL as we,t as V,aM as yr}from"../chunks/runtime.Cz-43d5b.js";import{a as Ir,b as $r,l as je,d as se,e as oe,s as ht,c as kr}from"../chunks/render.QyVpa1l0.js";import{a as Tr,p as le,i as Q}from"../chunks/if.CKtdBkYG.js";import{i as ve}from"../chunks/legacy.DWZHf11y.js";function et(e,t=!1){return qe(e,new Map)}function qe(e,t,r,n){if(typeof e=="object"&&e!==null){const u=t.get(e);if(u!==void 0)return u;if(e instanceof Map)return new Map(e);if(e instanceof Set)return new Set(e);if(Lt(e)){const a=[];t.set(e,a);for(let l=0;l<e.length;l+=1)a.push(qe(e[l],t));return a}if(ut(e)===Jt){const a={};t.set(e,a);for(var o in e)a[o]=qe(e[o],t);return a}if(e instanceof Date)return structuredClone(e);if(typeof e.toJSON=="function")return qe(e.toJSON(),t)}if(e instanceof EventTarget)return e;try{return structuredClone(e)}catch{return e}}function _e(e,t){return t}function Cr(e,t,r,n){for(var o=[],u=t.length,a=0;a<u;a++)rr(t[a].e,o,!0);var l=u>0&&o.length===0&&r!==null;if(l){var c=r.parentNode;nr(c),c.append(r),n.clear(),fe(e,t[0].prev,t[u-1].next)}or(o,()=>{for(var v=0;v<u;v++){var i=t[v];l||(n.delete(i.k),fe(e,i.prev,i.next)),sr(i.e,!l)}})}function pe(e,t,r,n,o,u=null){var a=e,l={flags:t,items:new Map,first:null},c=(t&Rt)!==0;if(c){var v=e;a=ee?tt(ar(v)):v.appendChild(Zt())}ee&&jt();var i=null,f=!1;Qt(()=>{var s=r(),d=Lt(s)?s:s==null?[]:Dt(s),h=d.length;if(f&&h===0)return;f=h===0;let m=!1;if(ee){var g=a.data===er;g!==(h===0)&&(a=It(),tt(a),rt(!1),m=!0)}if(ee){for(var p=null,C,S=0;S<h;S++){if(Le.nodeType===8&&Le.data===ir){a=Le,m=!0,rt(!1);break}var x=d[S],_=n(x,S);C=Gt(Le,l,p,null,x,_,S,o,t),l.items.set(_,C),p=C}h>0&&tt(It())}if(!ee){var I=Yt;Xr(d,l,a,o,t,(I.f&Fe)!==0,n)}u!==null&&(h===0?i?Ot(i):i=Pt(()=>u(a)):i!==null&&tr(i,()=>{i=null})),m&&rt(!0),r()}),ee&&(a=Le)}function Xr(e,t,r,n,o,u,a){var G,M,Y,te;var l=(o&lr)!==0,c=(o&(gt|bt))!==0,v=e.length,i=t.items,f=t.first,s=f,d,h=null,m,g=[],p=[],C,S,x,_;if(l)for(_=0;_<v;_+=1)C=e[_],S=a(C,_),x=i.get(S),x!==void 0&&((G=x.a)==null||G.measure(),(m??(m=new Set)).add(x));for(_=0;_<v;_+=1){if(C=e[_],S=a(C,_),x=i.get(S),x===void 0){var I=s?s.e.nodes_start:r;h=Gt(I,t,h,h===null?t.first:h.next,C,S,_,n,o),i.set(S,h),g=[],p=[],s=h.next;continue}if(c&&Er(x,C,_,o),x.e.f&Fe&&(Ot(x.e),l&&((M=x.a)==null||M.unfix(),(m??(m=new Set)).delete(x))),x!==s){if(d!==void 0&&d.has(x)){if(g.length<p.length){var w=p[0],E;h=w.prev;var O=g[0],R=g[g.length-1];for(E=0;E<g.length;E+=1)Ct(g[E],w,r);for(E=0;E<p.length;E+=1)d.delete(p[E]);fe(t,O.prev,R.next),fe(t,h,O),fe(t,R,w),s=w,h=R,_-=1,g=[],p=[]}else d.delete(x),Ct(x,s,r),fe(t,x.prev,x.next),fe(t,x,h===null?t.first:h.next),fe(t,h,x),h=x;continue}for(g=[],p=[];s!==null&&s.k!==S;)(u||!(s.e.f&Fe))&&(d??(d=new Set)).add(s),p.push(s),s=s.next;if(s===null)continue;x=s}g.push(x),h=x,s=x.next}if(s!==null||d!==void 0){for(var X=d===void 0?[]:Dt(d);s!==null;)(u||!(s.e.f&Fe))&&X.push(s),s=s.next;var J=X.length;if(J>0){var Z=o&Rt&&v===0?r:null;if(l){for(_=0;_<J;_+=1)(Y=X[_].a)==null||Y.measure();for(_=0;_<J;_+=1)(te=X[_].a)==null||te.fix()}Cr(t,X,Z,i)}}l&&Ue(()=>{var ye;if(m!==void 0)for(x of m)(ye=x.a)==null||ye.apply()}),Ve.first=t.first&&t.first.e,Ve.last=h&&h.e}function Er(e,t,r,n){n&gt&&$t(e.v,t),n&bt?$t(e.i,r):e.i=r}function Gt(e,t,r,n,o,u,a,l,c){var v=(c&gt)!==0,i=(c&vr)===0,f=v?i?cr(o):dt(o):o,s=c&bt?dt(a):a,d={i:s,v:f,k:u,a:null,e:null,prev:r,next:n};try{return d.e=Pt(()=>l(e,f,s),ee),d.e.prev=r&&r.e,d.e.next=n&&n.e,r===null?t.first=d:(r.next=d,r.e.next=d.e),n!==null&&(n.prev=d,n.e.prev=d.e),d}finally{}}function Ct(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,o=t?t.e.nodes_start:r,u=e.e.nodes_start;u!==n;){var a=ur(u);o.before(u),u=a}}function fe(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function Ft(e,t,r){zt(()=>{var n=Bt(()=>t(e,r==null?void 0:r())||{});if(n!=null&&n.destroy)return()=>n.destroy()})}function ne(e){if(ee){var t=!1,r=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var n=e.value;Je(e,"value",null),e.value=n}if(e.hasAttribute("checked")){var o=e.checked;Je(e,"checked",null),e.checked=o}}};e.__on_r=r,hr(r),Ir()}}function Je(e,t,r,n){var o=e.__attributes??(e.__attributes={});ee&&(o[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||o[t]!==(o[t]=r)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[dr]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Mr(e).includes(t)?e[t]=r:e.setAttribute(t,r))}var Xt=new Map;function Mr(e){var t=Xt.get(e.nodeName);if(t)return t;Xt.set(e.nodeName,t=[]);for(var r,n=ut(e),o=Element.prototype;o!==n;){r=fr(n);for(var u in r)r[u].set&&t.push(u);n=ut(n)}return t}function $(e,t,r,n){var o=e.__styles??(e.__styles={});o[t]!==r&&(o[t]=r,r==null?e.style.removeProperty(t):e.style.setProperty(t,r,""))}const Ar=()=>performance.now(),me={tick:e=>requestAnimationFrame(e),now:()=>Ar(),tasks:new Set};function qt(e){me.tasks.forEach(t=>{t.c(e)||(me.tasks.delete(t),t.f())}),me.tasks.size!==0&&me.tick(qt)}function Sr(e){let t;return me.tasks.size===0&&me.tick(qt),{promise:new Promise(r=>{me.tasks.add(t={c:e,f:r})}),abort(){me.tasks.delete(t)}}}function Ye(e,t){e.dispatchEvent(new CustomEvent(t))}function Hr(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function Et(e){const t={},r=e.split(";");for(const n of r){const[o,u]=n.split(":");if(!o||u===void 0)break;const a=Hr(o.trim());t[a]=u.trim()}return t}const Nr=e=>e;function Lr(e,t,r,n){var o=(e&br)!==0,u="both",a,l=t.inert,c,v;function i(){var m=Yt,g=Ve;kt(null),Tt(null);try{return a??(a=r()(t,(n==null?void 0:n())??{},{direction:u}))}finally{kt(m),Tt(g)}}var f={is_global:o,in(){t.inert=l,Ye(t,"introstart"),c=_t(t,i(),v,1,()=>{Ye(t,"introend"),c==null||c.abort(),c=a=void 0})},out(m){t.inert=!0,Ye(t,"outrostart"),v=_t(t,i(),c,0,()=>{Ye(t,"outroend"),m==null||m()})},stop:()=>{c==null||c.abort(),v==null||v.abort()}},s=Ve;if((s.transitions??(s.transitions=[])).push(f),$r){var d=o;if(!d){for(var h=s.parent;h&&h.f&_r;)for(;(h=h.parent)&&!(h.f&pr););d=!h||(h.f&mr)!==0}d&&zt(()=>{Bt(()=>f.in())})}}function _t(e,t,r,n,o){var u=n===1;if(gr(t)){var a,l=!1;return Ue(()=>{if(!l){var g=t({direction:u?"in":"out"});a=_t(e,g,r,n,o)}}),{abort:()=>{l=!0,a==null||a.abort()},deactivate:()=>a.deactivate(),reset:()=>a.reset(),t:()=>a.t()}}if(r==null||r.deactivate(),!(t!=null&&t.duration))return o(),{abort:Re,deactivate:Re,reset:Re,t:()=>n};const{delay:c=0,css:v,tick:i,easing:f=Nr}=t;var s=[];if(u&&r===void 0&&(i&&i(0,1),v)){var d=Et(v(0,1));s.push(d,d)}var h=()=>1-n,m=e.animate(s,{duration:c});return m.onfinish=()=>{var g=(r==null?void 0:r.t())??1-n;r==null||r.abort();var p=n-g,C=t.duration*Math.abs(p),S=[];if(C>0){if(v)for(var x=Math.ceil(C/16.666666666666668),_=0;_<=x;_+=1){var I=g+p*f(_/x),w=v(I,1-I);S.push(Et(w))}h=()=>{var E=m.currentTime;return g+p*f(E/C)},i&&Sr(()=>{if(m.playState!=="running")return!1;var E=h();return i(E,1-E),!0})}m=e.animate(S,{duration:C,fill:"forwards"}),m.onfinish=()=>{h=()=>n,i==null||i(n,1-n),o()}},{abort:()=>{m&&(m.cancel(),m.effect=null,m.onfinish=Re)},deactivate:()=>{o=Re},reset:()=>{n===0&&(i==null||i(1,0))},t:()=>h()}}function He(e,t,r=t){var n=xr();je(e,"input",()=>{var o=At(e)?St(e.value):e.value;r(o),n&&o!==(o=t())&&(e.value=o??"")}),Ze(()=>{var o=t();if(ee&&e.defaultValue!==e.value){r(e.value);return}At(e)&&o===St(e.value)||e.type==="date"&&!o&&!e.value||o!==e.value&&(e.value=o??"")})}const nt=new Set;function ot(e,t,r,n,o=n){var u=r.getAttribute("type")==="checkbox",a=e;let l=!1;if(t!==null)for(var c of t)a=a[c]??(a[c]=[]);a.push(r),je(r,"change",()=>{var v=r.__value;u&&(v=Mt(a,v,r.checked)),o(v)},()=>o(u?[]:null)),Ze(()=>{var v=n();if(ee&&r.defaultChecked!==r.checked){l=!0;return}u?(v=v||[],r.checked=v.includes(r.__value)):r.checked=Tr(r.__value,v)}),wr(()=>{var v=a.indexOf(r);v!==-1&&a.splice(v,1)}),nt.has(a)||(nt.add(a),Ue(()=>{a.sort((v,i)=>v.compareDocumentPosition(i)===4?-1:1),nt.delete(a)})),Ue(()=>{if(l){var v;if(u)v=Mt(a,v,r.checked);else{var i=a.find(f=>f.checked);v=i==null?void 0:i.__value}o(v)}})}function Rr(e,t,r=t){je(e,"change",()=>{var n=e.checked;r(n)}),t()==null&&r(!1),Ze(()=>{var n=t();e.checked=!!n})}function Mt(e,t,r){for(var n=new Set,o=0;o<e.length;o+=1)e[o].checked&&n.add(e[o].__value);return r||n.delete(t),Array.from(n)}function At(e){var t=e.type;return t==="number"||t==="range"}function St(e){return e===""?null:+e}function Dr(e,t,r=t){je(e,"change",()=>{r(e.files)}),Ze(()=>{e.files=t()})}function q(e){var t=dt(0);return function(){return arguments.length===1?(F(t,b(t)+1),arguments[0]):(b(t),e())}}const Or=!0,Jn=Object.freeze(Object.defineProperty({__proto__:null,prerender:Or},Symbol.toStringTag,{value:"Module"})),re=e=>e.colorIndex!==0,xt=()=>{const e=[[]];for(let t=0;t<be.v;(t+=1)-1){e[t]=[];for(let r=0;r<ge.v;(r+=1)-1)e[t][r]={colorIndex:0,Xed:!1}}return e},Wt=()=>{for(let e=0;e<y.numRows;(e+=1)-1)for(let t=0;t<y.numColumns;(t+=1)-1)y.v[e][t].colorIndex>N.v.length-1&&(y.v[e][t].colorIndex=0)},wt=()=>{ce.v!==xe.v.length-1&&xe.v.splice(ce.v+1),ce.v+=1,xe.v.push(et(y.v))},We=()=>{ge.v<1||be.v<1||(y.v=xt(),xe.reset(),xe.v[0]=et(y.v),ce.reset(),he.v=!1)},pt=e=>{let t=0;for(let r=0;r<e.length;(r+=1)-1)t*=26,t+=e.charCodeAt(r)-97+1;return t-1},mt=e=>{const t=parseInt(e.replace("#",""),16);return[t>>16&255,t>>8&255,t&255]},Ke=(e,t)=>Math.floor(Math.random()*(t-e+1)+e),ze=e=>{let t="";for(;e>=0;)t=String.fromCharCode(e%26+97)+t,e=Math.floor(e/26)-1;return t},P=e=>{let t=j(le(e));return{set v(n){F(t,le(n))},get v(){return b(t)},reset:()=>F(t,le(e))}},Kt=()=>{const e=P(Ut),t=U(()=>e.v.length),r=U(()=>e.v[0].length),n=U(()=>e.v.map(l=>l.map(c=>c.colorIndex))),o=U(()=>{const l=[[]],c=e.v.length,v=e.v[0].length;for(let i=0;i<c;(i+=1)-1){l[i]=[{color:"",count:0}];for(let f=0;f<v;(f+=1)-1)if(re(e.v[i][f])){const s=f===0?null:e.v[i][f-1].colorIndex,d=e.v[i][f].colorIndex;s!==d?l[i].push({color:ze(d),count:1}):l[i][l[i].length-1].count+=1}l[i].length>1&&l[i][0].count===0&&l[i].shift()}return l}),u=U(()=>{const l=[[]];for(let c=0;c<b(r);(c+=1)-1){l[c]=[{color:"",count:0}];for(let v=0;v<b(t);(v+=1)-1)if(re(e.v[v][c])){const i=v===0?null:e.v[v-1][c].colorIndex,f=e.v[v][c].colorIndex;i!==f?l[c].push({color:ze(f),count:1}):l[c][l[c].length-1].count+=1}l[c].length>1&&l[c][0].count===0&&l[c].shift()}return l}),a=U(()=>{let l="",c=1;for(let i=0;i<b(t);(i+=1)-1)for(let f=0;f<b(r);(f+=1)-1)if(!(i===0&&f===0)){const s=f===0?e.v[i-1][b(r)-1]:e.v[i][f-1];s.colorIndex===e.v[i][f].colorIndex&&s.Xed===e.v[i][f].Xed?c+=1:(l+=c+(s.Xed?"X":ze(s.colorIndex)),c=1)}const v=e.v[b(t)-1][b(r)-1];return l+=c+(v.Xed?"X":ze(v.colorIndex)),l});return{get colorIndices(){return b(n)},get columnHints(){return b(u)},get numColumns(){return b(r)},get rowHints(){return b(o)},set v(l){e.v=l},get encoded(){return b(a)},get numRows(){return b(t)},get v(){return e.v},reset:e.reset}},Ae=P("#476fb8"),N=P(["#f8fafc","#020617"]),Te=P(1),ge=P(5),be=P(5),Ut=xt(),y=Kt(),Ce=Kt(),xe=P([Ut]),ce=P(0),B=P(!1),D=P({colorIndex:-1,column:-1,Xed:!1,row:-1}),ie=P(1),Pe=P(!1),z=P(50),Se=P(!1),yt=P(!1),he=P(!1),Me=P(!0),Ne=P(!1);var Xe=q(()=>be),Ee=q(()=>ge),st=q(()=>B),Pr=T("<button>New Editor</button>"),Yr=T('<div class="svelte-16du0in"><input type="text" class="svelte-16du0in"> <input type="text" class="svelte-16du0in"></div>'),zr=T('<div class="svelte-16du0in"><!></div>');function Br(e,t){W(t,!1);const r=u=>Math.max(0,Number(String(u).replace(/[^0-9]/g,"")));ve();var n=zr(),o=L(n);Q(o,()=>st().v,u=>{var a=Pr();a.__click=()=>{st(st().v=!1),We()},k(u,a)},u=>{var a=Yr(),l=L(a);ne(l),l.__input=()=>{Ee(Ee().v=r(Ee().v)),We()};var c=H(l,2);ne(c),c.__input=()=>{Xe(Xe().v=r(Xe().v)),We()},A(a),He(l,()=>Ee().v,v=>Ee(Ee().v=v)),He(c,()=>Xe().v,v=>Xe(Xe().v=v)),k(u,a)}),A(n),k(e,n),K()}se(["click","input"]);const Gr=(e,t)=>{t(y.colorIndices,N.v,r=>{const n=document.createElement("a");n.download="shareogram.png",n.href=r,n.click()})};var Fr=T("<button>Export as PNG</button>");function qr(e,t){W(t,!1);const r=(o,u,a)=>{const l=o[0].length,c=o.length,v=document.createElement("canvas");v.width=l,v.height=c;const i=v.getContext("2d");if(i){const f=i.createImageData(l,c);for(let d=0;d<c;(d+=1)-1)for(let h=0;h<l;(h+=1)-1){const m=u[o[d][h]],g=mt(m);if(g){const[p,C,S]=g,x=(d*l+h)*4;f.data[x]=p,f.data[x+1]=C,f.data[x+2]=S,f.data[x+3]=255}}i.putImageData(f,0,0);const s=v.toDataURL("image/png");a(s)}};ve();var n=Fr();n.__click=[Gr,r],k(e,n),K()}se(["click"]);var Wr=T('<input type="range" max="442" min="10">'),Kr=T('<input accept="image/png" id="file-upload" type="file" class="svelte-nlo4k4"> <!>',1);function Ur(e,t){W(t,!0);let r=j(10),n=j(void 0);const o=(f,s,d)=>{const[h,m,g]=f,[p,C,S]=s;return Math.sqrt((h-p)**2+(m-C)**2+(g-S)**2)<=d},u=(f,s,d)=>"#"+[f,s,d].map(h=>Math.round(h).toString(16).padStart(2,"0")).join(""),a=(f,s,d)=>{const h=mt(f);for(let m=0;m<s.length;(m+=1)-1){const g=mt(s[m]);if(o(h,g,d))return m}return s.push(f),s.length-1},l=(f,s,d)=>{const h=new FileReader;h.onload=m=>{var p;const g=new Image;g.onload=()=>{const C=document.createElement("canvas"),S=C.getContext("2d");if(S){C.width=g.width,C.height=g.height,S.drawImage(g,0,0);const x=S.getImageData(0,0,g.width,g.height).data,_=[],I=[];for(let w=0;w<g.height;(w+=1)-1){const E=[];for(let O=0;O<g.width;(O+=1)-1){const R=(w*g.width+O)*4,X=x[R],J=x[R+1],Z=x[R+2],G=u(X,J,Z),M=a(G,_,s);E.push(M)}I.push(E)}d(I,_)}},g.src=(p=m.target)==null?void 0:p.result},h.readAsDataURL(f)};Oe(()=>{b(n)&&l(b(n)[0],b(r),(f,s)=>{ge.v=f[0].length,be.v=f.length,N.v=s,Te.v=0,y.v=xt();for(let d=0;d<y.numRows;(d+=1)-1)for(let h=0;h<y.numColumns;(h+=1)-1)y.v[d][h].colorIndex=f[d][h];wt()})});var c=Kr(),v=Qe(c),i=H(v,2);Q(i,()=>b(n),f=>{var s=Wr();ne(s),He(s,()=>b(r),d=>F(r,d)),k(f,s)}),Dr(v,()=>b(n),f=>F(n,f)),k(e,c),K()}var ue=q(()=>Pe),at=q(()=>Te),it=q(()=>Ae),de=q(()=>N),Vr=T('<button class="svelte-1ubn0yt">-</button>'),Jr=T('<!> <button class="svelte-1ubn0yt">+</button>',1),Zr=T('<input type="color" class="svelte-1ubn0yt">'),Qr=T('<div class="svelte-1ubn0yt"><div class="svelte-1ubn0yt"><!></div> <div class="svelte-1ubn0yt"><input type="color" class="svelte-1ubn0yt"> <!></div></div>');function jr(e,t){W(t,!1);const r=()=>{const i="0123456789abcdef";let f="#";for(let s=0;s<6;(s+=1)-1){const d=Math.floor(Math.random()*i.length);f+=i[d]}return f},n=()=>de().v.length>2;ve();var o=Qr(),u=L(o),a=L(u);Q(a,()=>!B.v,i=>{var f=Jr(),s=Qe(f);Q(s,n,h=>{var m=Vr();m.__click=()=>{de().v.pop(),at().v>de().v.length-1&&at(at().v-=1),Wt()},k(h,m)});var d=H(s,2);d.__click=()=>{de().v.push(r())},k(i,f)}),A(u);var l=H(u,2),c=L(l);ne(c),c.__change=()=>{ue(ue().v=!0)},c.__click=()=>{ue(ue().v=!1)};var v=H(c,2);pe(v,1,()=>de().v,_e,(i,f,s)=>{var d=Zr();ne(d),d.__change=()=>{ue(ue().v=!0)},d.__click=()=>{ue(ue().v=!1)},He(d,()=>de().v[s],h=>de(de().v[s]=h)),k(i,d)}),A(l),A(o),He(c,()=>it().v,i=>it(it().v=i)),k(e,o),K()}se(["click","change"]);var lt=q(()=>Me),en=T('<div class="svelte-1xxyg97"><label class="switch"><input type="checkbox" class="svelte-1xxyg97"></label></div>');function tn(e,t){W(t,!1),ve();var r=en(),n=L(r),o=L(n);ne(o),A(n),A(r),Rr(o,()=>lt().v,u=>lt(lt().v=u)),k(e,r),K()}var ae=q(()=>ie),rn=T('<input name="border" type="radio" class="svelte-qc9c1k">'),nn=T('<div class="svelte-qc9c1k"><input name="border" type="radio" class="svelte-qc9c1k"> <input name="border" type="radio" class="svelte-qc9c1k"> <!></div>');function on(e,t){W(t,!1);const r=[];ve();var n=nn(),o=L(n);ne(o),o.value=(o.__value=0)==null?"":0;var u=H(o,2);ne(u),u.value=(u.__value=1)==null?"":1;var a=H(u,2);Q(a,()=>ge.v>5||be.v>5,l=>{var c=rn();ne(c),c.value=(c.__value=2)==null?"":2,ot(r,[],c,()=>ae().v,v=>ae(ae().v=v)),k(l,c)}),A(n),ot(r,[],o,()=>ae().v,l=>ae(ae().v=l)),ot(r,[],u,()=>ae().v,l=>ae(ae().v=l)),k(e,n),K()}var sn=T("<button>Reveal Tile</button>");function an(e,t){W(t,!0);const r=U(()=>{const l=[];let c=!0;const v=y.numRows,i=y.numColumns;for(let f=0;f<v;(f+=1)-1)for(let s=0;s<i;(s+=1)-1)Ce.v[f][s].colorIndex!==y.v[f][s].colorIndex&&(l.push({column:s,row:f}),c=!1);return{isDifferent:l,allSame:c}}),n=U(()=>b(r).isDifferent),o=U(()=>b(r).allSame);Oe(()=>{Se.v=b(o)});const u=()=>{if(!Se.v){const l=Ke(0,b(n).length-1),c=b(n)[l].row,v=b(n)[l].column;y.v[c][v]={colorIndex:Ce.v[c][v].colorIndex,Xed:!1},wt()}};var a=sn();a.__click=u,k(e,a),K()}se(["click"]);const Vt="none";function ln(e){return Array.isArray(e)?e:[e]}function De(e,t,r){return e.addEventListener(t,r),()=>e.removeEventListener(t,r)}function cn(e,t){const r=e.getBoundingClientRect(),n=Math.abs(t[0].clientX-t[1].clientX),o=Math.abs(t[0].clientY-t[1].clientY),u=Math.min(t[0].clientX,t[1].clientX),a=Math.min(t[0].clientY,t[1].clientY),l=u+n/2,c=a+o/2,v=Math.round(l-r.left),i=Math.round(c-r.top);return{x:v,y:i}}function vn(e,t){return t.filter(r=>e.pointerId!==r.pointerId)}function Be(e,t,r,n,o){const u=e.getBoundingClientRect(),a=Math.round(r.clientX-u.left),l=Math.round(r.clientY-u.top);e.dispatchEvent(new CustomEvent(`${t}${o}`,{detail:{event:r,pointersCount:n.length,target:r.target,x:a,y:l}}))}function un(e,t,r,n,o,u=Vt){t.style.touchAction=ln(u).join(" ");let a=[];function l(v){a.push(v),Be(t,e,v,a,"down"),n==null||n(a,v);const i=v.pointerId;function f(p){i===p.pointerId&&(a=vn(p,a),a.length||s(),Be(t,e,p,a,"up"),o==null||o(a,p))}function s(){d(),h(),m(),g()}const d=De(t,"pointermove",p=>{a=a.map(C=>p.pointerId===C.pointerId?p:C),Be(t,e,p,a,"move"),r==null||r(a,p)}),h=De(t,"lostpointercapture",p=>{f(p)}),m=De(t,"pointerup",p=>{f(p)}),g=De(t,"pointerleave",p=>{a=[],s(),Be(t,e,p,a,"up"),o==null||o(a,p)})}const c=De(t,"pointerdown",l);return{destroy:()=>{c()}}}function Ht(e){return Math.hypot(e[0].clientX-e[1].clientX,e[0].clientY-e[1].clientY)}function dn(e,t){const r={touchAction:Vt,composed:!1,...t},n="pinch";let o,u=0,a;function l(i,f){i.length===1&&(o=void 0)}function c(i,f){i.length===2&&(u=Ht(i),a=cn(e,i))}function v(i,f){if(i.length===2){const s=Ht(i);if(o!==void 0&&s!==o){const d=s/u;e.dispatchEvent(new CustomEvent(n,{detail:{scale:d,center:a,pointerType:f.pointerType}}))}o=s}return!1}return r.composed?{onMove:v,onDown:c,onUp:null}:un(n,e,v,c,l,r.touchAction)}var fn=T('<input type="range" class="svelte-1wz0dqh">');function hn(e,t){W(t,!0);const r=100,n=10;let o=j(1);const u=c=>{c.preventDefault(),c.deltaY<0&&z.v<r?z.v+=5:c.deltaY>0&&z.v>n&&(z.v-=5)},a=c=>{if(!Ne.v)return;const v=b(o);F(o,le(c.detail.scale));const i=b(o)<v;i&&z.v>n?z.v-=1:!i&&z.v<r&&(z.v+=1)};var l=fn();oe("wheel",we,u,void 0,!1),Ft(ft.body,c=>dn(c)),oe("pinch",ft.body,a),ne(l),Je(l,"max",r),Je(l,"min",n),He(l,()=>z.v,c=>z.v=c),k(e,l),K()}var Ge=q(()=>yt),_n=T("<!> <!>",1),pn=T('<div class="svelte-xm1pu0"><!> <!> <!> <!> <!> <!> <!></div>');function mn(e,t){W(t,!1);const r=f=>{f.key==="o"&&Ge(Ge().v=!Ge().v)};ve();var n=pn();oe("keydown",we,r);var o=L(n);Q(o,()=>!B.v,f=>{var s=_n(),d=Qe(s);Ur(d,{});var h=H(d,2);qr(h,{}),k(f,s)});var u=H(o,2);Br(u,{});var a=H(u,2);jr(a,{});var l=H(a,2);on(l,{});var c=H(l,2);tn(c,{});var v=H(c,2);hn(v,{});var i=H(v,2);Q(i,()=>B.v,f=>{an(f,{})}),A(n),V(()=>$(n,"right",Ge().v?"0":"-200px")),k(e,n),K()}const gn=e=>e;function bn(e,{delay:t=0,duration:r=400,easing:n=gn}={}){const o=+getComputedStyle(e).opacity;return{delay:t,duration:r,easing:n,css:u=>`opacity: ${u*o}`}}var xn=T("<div> </div>"),wn=T('<th class="svelte-16s63u3"></th>'),yn=T('<thead><tr><th class="svelte-16s63u3"></th><!></tr></thead>'),In=T("<div> </div>"),$n=T("<td></td>"),kn=T("<span>X</span>"),Tn=T("<td><!></td>"),Cn=T("<tr><!><!></tr>"),Xn=T('<table class="svelte-16s63u3"><!><tbody></tbody></table>');function En(e,t){W(t,!0);let r=j(!1),n=j(!1),o=j(""),u=j(0);const a=(_,I,w,E)=>{const O=Math.abs(_-w),R=Math.abs(I-E);return O===0&&R===1?E>I?"right":"left":O===1&&R===0?w>_?"below":"above":"not adjacent"},l=_=>_.Xed,c=_=>_.colorIndex===Te.v,v=(_,I)=>{_.colorIndex=I},i=_=>{_.colorIndex=0},f=_=>{_.Xed=!_.Xed},s=(_,I,w)=>{Ne.v||(_.target instanceof HTMLElement&&_.target.releasePointerCapture(_.pointerId),_.button===0?F(r,!0):_.button===2&&F(n,!0),D.v={colorIndex:y.v[I][w].colorIndex,Xed:y.v[I][w].Xed,column:w,row:I},Pe.v=!1,F(u,0),B.v?_.button===0?he.v&&!re(y.v[I][w])?f(y.v[I][w]):!he.v&&!l(y.v[I][w])&&(c(y.v[I][w])?i(y.v[I][w]):v(y.v[I][w],Te.v)):_.button===2&&(re(y.v[I][w])?i(y.v[I][w]):f(y.v[I][w])):_.button===0?v(y.v[I][w],Te.v):_.button===2&&i(y.v[I][w]))},d=_=>{_.button===0?F(r,!1):_.button===2&&F(n,!1),Pe.v=!0},h=(_,I)=>{if(!b(r)&&!b(n)||b(r)&&b(n)||D.v.row===-1||Ne.v)return;yr(u),b(u)===1&&F(o,le(a(D.v.row,D.v.column,_,I)));const w=y.v[D.v.row][D.v.column];if(B.v)if(b(o)==="above"||b(o)==="below"){const E=Math.min(D.v.row,_),O=Math.max(D.v.row,_);for(let R=E;R<O+1;(R+=1)-1){const X=y.v[R][D.v.column];b(r)?he.v&&!re(X)?X.Xed=w.Xed:!he.v&&!l(X)&&v(X,w.colorIndex):D.v.Xed&&!re(X)?X.Xed=!1:D.v.colorIndex===0&&!re(X)?X.Xed=!0:D.v.colorIndex!==0&&!l(X)&&i(X)}}else{const E=Math.min(D.v.column,I),O=Math.max(D.v.column,I);for(let R=E;R<O+1;(R+=1)-1){const X=y.v[D.v.row][R];b(r)?he.v&&!re(X)?X.Xed=w.Xed:!he.v&&!l(X)&&v(X,w.colorIndex):D.v.Xed&&!re(X)?X.Xed=!1:D.v.colorIndex===0&&!re(X)?X.Xed=!0:D.v.colorIndex!==0&&!l(X)&&i(X)}}else b(r)?v(y.v[_][I],Te.v):i(y.v[_][I])};let m=j(!1),g=j(le(ie.v)),p=j(le(Me.v));Oe(()=>{Se.v&&!b(m)?(F(m,!0),F(g,le(ie.v)),F(p,le(Me.v)),ie.v=0,Me.v=!1):!Se.v&&b(m)&&(F(m,!1),ie.v=b(g),Me.v=b(p))});var C=Xn();oe("pointerup",we,d);var S=L(C);Q(S,()=>B.v,_=>{var I=yn(),w=L(I),E=H(L(w));pe(E,17,()=>({length:y.numColumns}),_e,(O,R,X)=>{var J=wn();pe(J,21,()=>Ce.columnHints[X],_e,(Z,G)=>{var M=xn();const Y=U(()=>N.v[pt(b(G).color)]);V(()=>$(M,"color",b(Y)));var te=L(M,!0);A(M),V(()=>{$(M,"font-size",z.v/1.5+"px"),ht(te,b(G).count)}),k(Z,M)}),A(J),k(O,J)}),A(w),A(I),k(_,I)});var x=H(S);pe(x,21,()=>({length:y.numRows}),_e,(_,I,w)=>{var E=Cn(),O=L(E);Q(O,()=>B.v,J=>{var Z=$n();$(Z,"justify-content","right"),$(Z,"display","flex"),pe(Z,21,()=>Ce.rowHints[w],_e,(G,M)=>{var Y=In();const te=U(()=>N.v[pt(b(M).color)]);V(()=>$(Y,"color",b(te))),$(Y,"justify-content","center"),$(Y,"align-items","center"),$(Y,"display","flex");var ye=L(Y,!0);A(Y),V(()=>{$(Y,"font-size",z.v/1.5+"px"),$(Y,"min-width",z.v+"px"),$(Y,"height",z.v+"px"),ht(ye,b(M).count)}),k(G,Y)}),A(Z),k(J,Z)});var R=H(O);pe(R,17,()=>({length:y.numColumns}),_e,(J,Z,G)=>{var M=Tn();M.__pointerdown=te=>{s(te,w,G)},$(M,"transition","background-color .5s, border-radius .5s"),$(M,"text-align","center");var Y=L(M);Q(Y,()=>l(y.v[w][G])&&!Se.v,te=>{var ye=kn();Lr(3,ye,()=>bn,()=>({duration:300})),k(te,ye)}),A(M),V(()=>{$(M,"border-left",ie.v===0?"0":`solid ${G%5===0&&G!==0&&ie.v===2?`4px ${N.v[1]}`:`2px ${Ae.v}`}`),$(M,"border-top",ie.v===0?"0":`solid ${w%5===0&&w!==0&&ie.v===2?`4px ${N.v[1]}`:`2px ${Ae.v}`}`),$(M,"border-radius",Me.v===!0?"20%":"0"),$(M,"background-color",N.v[y.v[w][G].colorIndex]),$(M,"font-size",z.v/1.5+"px"),$(M,"min-width",z.v+"px"),$(M,"height",z.v+"px"),$(M,"color",N.v[1])}),oe("pointerenter",M,()=>{h(w,G)}),k(J,M)}),A(E),k(_,E)}),A(x),A(C),k(e,C),K()}se(["pointerdown"]);var Mn=T('<div class="svelte-r2sle7"><button class="svelte-r2sle7">Undo</button> <button class="svelte-r2sle7">Redo</button></div>');function An(e,t){W(t,!0);const r=()=>{D.v.row!==-1&&wt(),D.reset()},n=i=>{i.key==="z"?u():i.key==="y"&&a()},o=()=>{y.v=et(xe.v[ce.v]),Wt()},u=()=>{ce.v!==0&&(ce.v-=1,o())},a=()=>{ce.v!==xe.v.length-1&&(ce.v+=1,o())};var l=Mn();oe("keydown",we,n),oe("pointerup",we,r);var c=L(l);c.__click=u;var v=H(c,2);v.__click=a,A(l),k(e,l),K()}se(["click"]);var Ie=q(()=>Ne),$e=q(()=>Te),ke=q(()=>he),Sn=T('<button class="svelte-1sjs956"></button>'),Hn=T('<button class="svelte-1sjs956">X</button>'),Nn=T('<div class="svelte-1sjs956"><!> <!> <button aria-label="Move" class="svelte-1sjs956"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21v-9m0 9l3-3m-3 3l-3-3m3-6V3m0 9H3m9 0h9m-9-9L9 6m3-3l3 3M3 12l3 3m-3-3l3-3m15 3l-3-3m3 3l-3 3"></path></svg></button></div>');function Ln(e,t){W(t,!1);const r=i=>{/[1-9]/.test(i.key)&&Number(i.key)<=N.v.length?n(Number(i.key)-1):i.key==="m"?u():i.key==="x"&&B.v&&o()},n=i=>{ke(ke().v=!1),Ie(Ie().v=!1),$e($e().v=i)},o=()=>{ke(ke().v=!0),Ie(Ie().v=!1),$e($e().v=-1)},u=()=>{ke(ke().v=!1),Ie(Ie().v=!0),$e($e().v=-1)};ve();var a=Nn();oe("keydown",we,r);var l=L(a);pe(l,1,()=>N.v,_e,(i,f,s)=>{var d=Sn();d.__click=()=>{n(s)},d.textContent=s+1,V(()=>{$(d,"border",`solid 2px ${s===$e().v?s===0?N.v[1]:N.v[0]:N.v[s]}`),$(d,"color",s===0?N.v[1]:N.v[0]),$(d,"background-color",N.v[s])}),k(i,d)});var c=H(l,2);Q(c,()=>B.v,i=>{var f=Hn();f.__click=o,V(()=>$(f,"border",`solid 2px ${ke().v?N.v[1]:"ButtonFace"}`)),k(i,f)});var v=H(c,2);v.__click=u,A(a),V(()=>$(v,"border",`solid 2px ${Ie().v?N.v[1]:"ButtonFace"}`)),k(e,a),K()}se(["click"]);var ct=q(()=>yt),Rn=T('<footer class="svelte-6v3vqk"><div><button>Options</button> <div><!> <!></div></div></footer>');function Dn(e,t){W(t,!1),ve();var r=Rn(),n=L(r);$(n,"border-top-right-radius","8px"),$(n,"border-top-left-radius","8px"),$(n,"overflow","hidden"),$(n,"display","flex");var o=L(n);o.__click=()=>{ct(ct().v=!ct().v)};var u=H(o,2),a=L(u);Ln(a,{});var l=H(a,2);An(l,{}),A(u),A(n),A(r),k(e,r),K()}se(["click"]);var Nt=q(()=>Ce),vt=q(()=>B),On=T("<span> </span>"),Pn=T('<button class="svelte-93z3ep">Start Game</button>'),Yn=T('<header class="svelte-93z3ep"><!></header>');function zn(e,t){W(t,!1),ve();var r=Yn(),n=L(r);Q(n,()=>vt().v,o=>{var u=On();$(u,"padding-top","10px");var a=L(u,!0);A(u),V(()=>ht(a,Se.v?"You win!":"Keep trying")),k(o,u)},o=>{var u=Pn();u.__click=()=>{vt(vt().v=!0),Nt(Nt().v=y.v),We()},k(o,u)}),A(r),k(e,r),K()}se(["click"]);const Bn=e=>{let t=!1,r,n,o,u;const a=v=>{(v.button===1||v.button===0&&Ne.v)&&(v.preventDefault(),t=!0,r=v.pageX-e.offsetLeft,n=v.pageY-e.offsetTop,o=e.scrollLeft,u=e.scrollTop,e.style.cursor="grabbing",document.addEventListener("mousemove",l),document.addEventListener("mouseup",c))},l=v=>{if(!t)return;v.preventDefault();const i=v.pageX-e.offsetLeft,f=v.pageY-e.offsetTop,s=(i-r)*2,d=(f-n)*2;e.scrollLeft=o-s,e.scrollTop=u-d},c=()=>{t=!1,e.style.cursor="",document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",c)};return e.addEventListener("mousedown",a),{destroy:()=>{e.removeEventListener("mousedown",a),e.style.cursor=""}}};var Gn=T('<li class="svelte-1ggrsig"></li>'),Fn=T('<div class="github svelte-1ggrsig"><a href="https://github.com/Tree52/Shareogram" aria-label="Link to GitHub repository" class="svelte-1ggrsig"><svg height="96" width="98" xmlns="http://www.w3.org/2000/svg" class="svelte-1ggrsig"><path clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill-rule="evenodd" class="svelte-1ggrsig"></path></svg></a></div> <ul class="background svelte-1ggrsig"></ul> <!>  <main class="svelte-1ggrsig"><!></main> <!> <!>',1);function Zn(e,t){W(t,!0);const r=s=>{const d=s.match(/(\d+|[a-zX]+)/g),h=[],m=[];if(d)for(let g=0;g<d.length;(g+=1)-1){const p=d[g];isNaN(Number(p))?m.push(p):h.push(Number(p))}if(h.length!==m.length)throw new Error("Error: different number of counts and letters.");return{letters:m,numbers:h}},n=s=>{const d=r(s),h=[];let m=0,g=0;for(let p=0;p<be.v;(p+=1)-1)h[p]=[];for(let p=0;p<d.numbers.length;(p+=1)-1)for(let C=0;C<d.numbers[p];(C+=1)-1)d.letters[p]==="X"?h[m][(g+=1)-1]={colorIndex:0,Xed:!0}:h[m][(g+=1)-1]={colorIndex:pt(d.letters[p]),Xed:!1},g>ge.v-1&&(m+=1,g=0);return h},o=()=>{if(window.location.hash){try{const s=window.location.hash.slice(1).split("-");B.v=!!Number(s[0]),ge.v=Number(s[1]),be.v=Number(s[2]),Ae.v="#"+s[3];const d=B.v?s.slice(4,-2):s.slice(4,-1);for(let h=0;h<d.length;(h+=1)-1)N.v[h]="#"+d[h];y.v=n(s[B.v?s.length-2:s.length-1]),xe.v[0]=et(y.v),B.v&&(Ce.v=n(s[s.length-1]))}catch{alert("Couldn't load the code from the URL. Make sure you copied the link correctly.")}Pe.v=!0}};Oe(()=>{if(Pe.v){const s=[Number(B.v),ge.v,be.v,Ae.v.slice(1)];for(let d=0;d<N.v.length;(d+=1)-1)s.push(N.v[d].slice(1));s.push(y.encoded),B.v&&s.push(Ce.encoded),window.location.hash=s.join("-")}}),Oe(()=>{document.body.style.color=N.v[0]});var u=Fn();kr(s=>{ft.title="Shareogram"}),oe("contextmenu",we,s=>s.preventDefault()),oe("load",we,o);var a=H(Qe(u),2);pe(a,20,()=>({length:35}),_e,(s,d)=>{var h=Gn();const m=U(()=>Ke(0,60)+"s");V(()=>$(h,"animation-delay",b(m)));const g=U(()=>Ke(5,200)+"px");V(()=>$(h,"width",b(g)));const p=U(()=>Ke(0,100)+"%");V(()=>$(h,"left",b(p))),k(s,h)}),A(a);var l=H(a,2);zn(l,{});var c=H(l,2);c.__click=()=>{yt.v=!1};var v=L(c);En(v,{}),A(c),Ft(c,s=>Bn(s));var i=H(c,2);Dn(i,{});var f=H(i,2);mn(f,{}),V(()=>{$(a,"background-color",Ae.v),$(c,"touch-action",Ne.v?"auto":"none")}),k(e,u),K()}se(["click"]);export{Zn as component,Jn as universal};
