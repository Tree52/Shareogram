import{c as lr,a as C,t as T}from"../chunks/disclose-version.BFyFZ1Tk.js";import{v as Ut,q as kt,o as cr,R as vr,w as fr,at as Wt,A as oe,D as ct,B as ur,a9 as Vt,H as dr,C as Nt,F as vt,G as Ge,au as je,x as Jt,y as Kt,z as hr,_ as ot,k as st,av as Et,aw as Dt,ax as Mt,ay as _r,a8 as pr,az as mr,Q as gr,T as wr,a5 as br,Z as Zt,aA as xr,m as yr,h as $t,aB as kr,a2 as $r,ab as Qt,u as jt,aC as Ir,aD as Cr,aE as Tr,E as Ar,aF as Sr,aG as Xr,aH as Er,n as Fe,aI as Mr,X as Ot,Y as qt,aJ as Hr,ac as at,b as Rr,d as Y,g,ar as ee,O as Z,p as J,f as Pe,a as K,c as L,s as X,r as E,J as De,aK as It,aL as le,t as V,aM as Lr}from"../chunks/runtime.kwFfegih.js";import{a as Nr,b as Dr,l as it,d as ce,e as Q,s as Ct,c as Or}from"../chunks/render.DZPyI7WY.js";import{a as qr,p as he,i as te}from"../chunks/if.QfZRQiwm.js";import{i as ve}from"../chunks/legacy.BZr0P_gC.js";const Pr=[];function lt(e,t=!1){return et(e,new Map,"",Pr)}function et(e,t,r,n,o=null){if(typeof e=="object"&&e!==null){const a=t.get(e);if(a!==void 0)return a;if(e instanceof Map)return new Map(e);if(e instanceof Set)return new Set(e);if(Ut(e)){const i=[];t.set(e,i),o!==null&&t.set(o,i);for(let l=0;l<e.length;l+=1)i.push(et(e[l],t,r,n));return i}if(kt(e)===cr){const i={};t.set(e,i),o!==null&&t.set(o,i);for(var f in e)i[f]=et(e[f],t,r,n);return i}if(e instanceof Date)return structuredClone(e);if(typeof e.toJSON=="function")return et(e.toJSON(),t,r,n,e)}if(e instanceof EventTarget)return e;try{return structuredClone(e)}catch{return e}}function xe(e,t){return t}function Yr(e,t,r,n){for(var o=[],f=t.length,a=0;a<f;a++)_r(t[a].e,o,!0);var i=f>0&&o.length===0&&r!==null;if(i){var l=r.parentNode;pr(l),l.append(r),n.clear(),we(e,t[0].prev,t[f-1].next)}mr(o,()=>{for(var c=0;c<f;c++){var s=t[c];i||(n.delete(s.k),we(e,s.prev,s.next)),gr(s.e,!i)}})}function ye(e,t,r,n,o,f=null){var a=e,i={flags:t,items:new Map,first:null},l=(t&Wt)!==0;if(l){var c=e;a=oe?ct(wr(c)):c.appendChild(vr())}oe&&ur();var s=null,d=!1;fr(()=>{var v=r(),h=Ut(v)?v:v==null?[]:Vt(v),u=h.length;if(d&&u===0)return;d=u===0;let p=!1;if(oe){var m=a.data===dr;m!==(u===0)&&(a=Nt(),ct(a),vt(!1),p=!0)}if(oe){for(var w=null,I,k=0;k<u;k++){if(Ge.nodeType===8&&Ge.data===br){a=Ge,p=!0,vt(!1);break}var b=h[k],A=n(b,k);I=er(Ge,i,w,null,b,A,k,o,t),i.items.set(A,I),w=I}u>0&&ct(Nt())}if(!oe){var ne=Zt;zr(h,i,a,o,t,(ne.f&je)!==0,n)}f!==null&&(u===0?s?Jt(s):s=Kt(()=>f(a)):s!==null&&hr(s,()=>{s=null})),p&&vt(!0),r()}),oe&&(a=Ge)}function zr(e,t,r,n,o,f,a){var O,G,F,M;var i=(o&xr)!==0,l=(o&(Et|Mt))!==0,c=e.length,s=t.items,d=t.first,v=d,h,u=null,p,m=[],w=[],I,k,b,A;if(i)for(A=0;A<c;A+=1)I=e[A],k=a(I,A),b=s.get(k),b!==void 0&&((O=b.a)==null||O.measure(),(p??(p=new Set)).add(b));for(A=0;A<c;A+=1){if(I=e[A],k=a(I,A),b=s.get(k),b===void 0){var ne=v?v.e.nodes_start:r;u=er(ne,t,u,u===null?t.first:u.next,I,k,A,n,o),s.set(k,u),m=[],w=[],v=u.next;continue}if(l&&Br(b,I,A,o),b.e.f&je&&(Jt(b.e),i&&((G=b.a)==null||G.unfix(),(p??(p=new Set)).delete(b))),b!==v){if(h!==void 0&&h.has(b)){if(m.length<w.length){var j=w[0],D;u=j.prev;var fe=m[0],se=m[m.length-1];for(D=0;D<m.length;D+=1)Pt(m[D],j,r);for(D=0;D<w.length;D+=1)h.delete(w[D]);we(t,fe.prev,se.next),we(t,u,fe),we(t,se,j),v=j,u=se,A-=1,m=[],w=[]}else h.delete(b),Pt(b,v,r),we(t,b.prev,b.next),we(t,b,u===null?t.first:u.next),we(t,u,b),u=b;continue}for(m=[],w=[];v!==null&&v.k!==k;)(f||!(v.e.f&je))&&(h??(h=new Set)).add(v),w.push(v),v=v.next;if(v===null)continue;b=v}m.push(b),u=b,v=b.next}if(v!==null||h!==void 0){for(var _=h===void 0?[]:Vt(h);v!==null;)(f||!(v.e.f&je))&&_.push(v),v=v.next;var x=_.length;if(x>0){var S=o&Wt&&c===0?r:null;if(i){for(A=0;A<x;A+=1)(F=_[A].a)==null||F.measure();for(A=0;A<x;A+=1)(M=_[A].a)==null||M.fix()}Yr(t,_,S,s)}}i&&ot(()=>{var ae;if(p!==void 0)for(b of p)(ae=b.a)==null||ae.apply()}),st.first=t.first&&t.first.e,st.last=u&&u.e}function Br(e,t,r,n){n&Et&&Dt(e.v,t),n&Mt?Dt(e.i,r):e.i=r}function er(e,t,r,n,o,f,a,i,l){var c=(l&Et)!==0,s=(l&kr)===0,d=c?s?yr(o):$t(o):o,v=l&Mt?$t(a):a,h={i:v,v:d,k:f,a:null,e:null,prev:r,next:n};try{return h.e=Kt(()=>i(e,d,v),oe),h.e.prev=r&&r.e,h.e.next=n&&n.e,r===null?t.first=h:(r.next=h,r.e.next=h.e),n!==null&&(n.prev=h,n.e.prev=h.e),h}finally{}}function Pt(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,o=t?t.e.nodes_start:r,f=e.e.nodes_start;f!==n;){var a=$r(f);o.before(f),f=a}}function we(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function tr(e,t,r){Qt(()=>{var n=jt(()=>t(e,r==null?void 0:r())||{});if(n!=null&&n.destroy)return()=>n.destroy()})}function re(e){if(oe){var t=!1,r=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var n=e.value;Ye(e,"value",null),e.value=n}if(e.hasAttribute("checked")){var o=e.checked;Ye(e,"checked",null),e.checked=o}}};e.__on_r=r,Tr(r),Nr()}}function Ye(e,t,r,n){var o=e.__attributes??(e.__attributes={});oe&&(o[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||o[t]!==(o[t]=r)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[Ir]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Gr(e).includes(t)?e[t]=r:e.setAttribute(t,r))}var Yt=new Map;function Gr(e){var t=Yt.get(e.nodeName);if(t)return t;Yt.set(e.nodeName,t=[]);for(var r,n=kt(e),o=Element.prototype;o!==n;){r=Cr(n);for(var f in r)r[f].set&&t.push(f);n=kt(n)}return t}function $(e,t,r,n){var o=e.__styles??(e.__styles={});o[t]!==r&&(o[t]=r,r==null?e.style.removeProperty(t):e.style.setProperty(t,r,""))}const Fr=()=>performance.now(),ke={tick:e=>requestAnimationFrame(e),now:()=>Fr(),tasks:new Set};function rr(e){ke.tasks.forEach(t=>{t.c(e)||(ke.tasks.delete(t),t.f())}),ke.tasks.size!==0&&ke.tick(rr)}function Ur(e){let t;return ke.tasks.size===0&&ke.tick(rr),{promise:new Promise(r=>{ke.tasks.add(t={c:e,f:r})}),abort(){ke.tasks.delete(t)}}}function Je(e,t){e.dispatchEvent(new CustomEvent(t))}function Wr(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function zt(e){const t={},r=e.split(";");for(const n of r){const[o,f]=n.split(":");if(!o||f===void 0)break;const a=Wr(o.trim());t[a]=f.trim()}return t}const Vr=e=>e;function Jr(e,t,r,n){var o=(e&Mr)!==0,f="both",a,i=t.inert,l,c;function s(){var p=Zt,m=st;Ot(null),qt(null);try{return a??(a=r()(t,(n==null?void 0:n())??{},{direction:f}))}finally{Ot(p),qt(m)}}var d={is_global:o,in(){t.inert=i,Je(t,"introstart"),l=Tt(t,s(),c,1,()=>{Je(t,"introend"),l==null||l.abort(),l=a=void 0})},out(p){t.inert=!0,Je(t,"outrostart"),c=Tt(t,s(),l,0,()=>{Je(t,"outroend"),p==null||p()})},stop:()=>{l==null||l.abort(),c==null||c.abort()}},v=st;if((v.transitions??(v.transitions=[])).push(d),Dr){var h=o;if(!h){for(var u=v.parent;u&&u.f&Ar;)for(;(u=u.parent)&&!(u.f&Sr););h=!u||(u.f&Xr)!==0}h&&Qt(()=>{jt(()=>d.in())})}}function Tt(e,t,r,n,o){var f=n===1;if(Er(t)){var a,i=!1;return ot(()=>{if(!i){var m=t({direction:f?"in":"out"});a=Tt(e,m,r,n,o)}}),{abort:()=>{i=!0,a==null||a.abort()},deactivate:()=>a.deactivate(),reset:()=>a.reset(),t:()=>a.t()}}if(r==null||r.deactivate(),!(t!=null&&t.duration))return o(),{abort:Fe,deactivate:Fe,reset:Fe,t:()=>n};const{delay:l=0,css:c,tick:s,easing:d=Vr}=t;var v=[];if(f&&r===void 0&&(s&&s(0,1),c)){var h=zt(c(0,1));v.push(h,h)}var u=()=>1-n,p=e.animate(v,{duration:l});return p.onfinish=()=>{var m=(r==null?void 0:r.t())??1-n;r==null||r.abort();var w=n-m,I=t.duration*Math.abs(w),k=[];if(I>0){if(c)for(var b=Math.ceil(I/16.666666666666668),A=0;A<=b;A+=1){var ne=m+w*d(A/b),j=c(ne,1-ne);k.push(zt(j))}u=()=>{var D=p.currentTime;return m+w*d(D/I)},s&&Ur(()=>{if(p.playState!=="running")return!1;var D=u();return s(D,1-D),!0})}p=e.animate(k,{duration:I,fill:"forwards"}),p.onfinish=()=>{u=()=>n,s==null||s(n,1-n),o()}},{abort:()=>{p&&(p.cancel(),p.effect=null,p.onfinish=Fe)},deactivate:()=>{o=Fe},reset:()=>{n===0&&(s==null||s(1,0))},t:()=>u()}}function ze(e,t,r=t){var n=Hr();it(e,"input",()=>{var o=dt(e)?ht(e.value):e.value;r(o),n&&o!==(o=t())&&(e.value=o??"")}),at(()=>{var o=t();if(oe&&e.defaultValue!==e.value){r(dt(e)?ht(e.value):e.value);return}dt(e)&&o===ht(e.value)||e.type==="date"&&!o&&!e.value||o!==e.value&&(e.value=o??"")})}const ft=new Set;function ut(e,t,r,n,o=n){var f=r.getAttribute("type")==="checkbox",a=e;let i=!1;if(t!==null)for(var l of t)a=a[l]??(a[l]=[]);a.push(r),it(r,"change",()=>{var c=r.__value;f&&(c=Bt(a,c,r.checked)),o(c)},()=>o(f?[]:null)),at(()=>{var c=n();if(oe&&r.defaultChecked!==r.checked){i=!0;return}f?(c=c||[],r.checked=c.includes(r.__value)):r.checked=qr(r.__value,c)}),Rr(()=>{var c=a.indexOf(r);c!==-1&&a.splice(c,1)}),ft.has(a)||(ft.add(a),ot(()=>{a.sort((c,s)=>c.compareDocumentPosition(s)===4?-1:1),ft.delete(a)})),ot(()=>{if(i){var c;if(f)c=Bt(a,c,r.checked);else{var s=a.find(d=>d.checked);c=s==null?void 0:s.__value}o(c)}})}function At(e,t,r=t){it(e,"change",()=>{var n=e.checked;r(n)}),t()==null&&r(!1),at(()=>{var n=t();e.checked=!!n})}function Bt(e,t,r){for(var n=new Set,o=0;o<e.length;o+=1)e[o].checked&&n.add(e[o].__value);return r||n.delete(t),Array.from(n)}function dt(e){var t=e.type;return t==="number"||t==="range"}function ht(e){return e===""?null:+e}function Kr(e,t,r=t){it(e,"change",()=>{r(e.files)}),at(()=>{e.files=t()})}function z(e){var t=$t(0);return function(){return arguments.length===1?(Y(t,g(t)+1),arguments[0]):(g(t),e())}}const Zr=!0,ho=Object.freeze(Object.defineProperty({__proto__:null,prerender:Zr},Symbol.toStringTag,{value:"Module"})),ie=e=>e.colorIndex!==0,Ht=()=>{const e=[[]];for(let t=0;t<Ie.v;(t+=1)-1){e[t]=[];for(let r=0;r<$e.v;(r+=1)-1)e[t][r]={colorIndex:0,Xed:!1}}return e},nr=()=>{for(let e=0;e<y.numRows;(e+=1)-1)for(let t=0;t<y.numColumns;(t+=1)-1)y.v[e][t].colorIndex>R.v.length-1&&(y.v[e][t].colorIndex=0)},Rt=()=>{_e.v!==Ce.v.length-1&&Ce.v.splice(_e.v+1),_e.v+=1,Ce.v.push(lt(y.v))},tt=()=>{$e.v<1||Ie.v<1||(y.v=Ht(),Ce.reset(),Ce.v[0]=lt(y.v),_e.reset(),be.v=!1)},St=e=>{let t=0;for(let r=0;r<e.length;(r+=1)-1)t*=26,t+=e.charCodeAt(r)-97+1;return t-1},Xt=e=>{const t=parseInt(e.replace("#",""),16);return[t>>16&255,t>>8&255,t&255]},rt=(e,t)=>Math.floor(Math.random()*(t-e+1)+e),Ke=e=>{let t="";for(;e>=0;)t=String.fromCharCode(e%26+97)+t,e=Math.floor(e/26)-1;return t},P=e=>{let t=ee(he(e));return{set v(n){Y(t,he(n))},get v(){return g(t)},reset:()=>Y(t,he(e))}},or=()=>{const e=P(sr),t=Z(()=>e.v.length),r=Z(()=>e.v[0].length),n=Z(()=>e.v.map(i=>i.map(l=>l.colorIndex))),o=Z(()=>{const i=[[]],l=e.v.length,c=e.v[0].length;for(let s=0;s<l;(s+=1)-1){i[s]=[{color:"",count:0}];for(let d=0;d<c;(d+=1)-1)if(ie(e.v[s][d])){const v=d===0?null:e.v[s][d-1].colorIndex,h=e.v[s][d].colorIndex;v!==h?i[s].push({color:Ke(h),count:1}):i[s][i[s].length-1].count+=1}i[s].length>1&&i[s][0].count===0&&i[s].shift()}return i}),f=Z(()=>{const i=[[]];for(let l=0;l<g(r);(l+=1)-1){i[l]=[{color:"",count:0}];for(let c=0;c<g(t);(c+=1)-1)if(ie(e.v[c][l])){const s=c===0?null:e.v[c-1][l].colorIndex,d=e.v[c][l].colorIndex;s!==d?i[l].push({color:Ke(d),count:1}):i[l][i[l].length-1].count+=1}i[l].length>1&&i[l][0].count===0&&i[l].shift()}return i}),a=Z(()=>{let i="",l=1;for(let s=0;s<g(t);(s+=1)-1)for(let d=0;d<g(r);(d+=1)-1)if(!(s===0&&d===0)){const v=d===0?e.v[s-1][g(r)-1]:e.v[s][d-1];v.colorIndex===e.v[s][d].colorIndex&&v.Xed===e.v[s][d].Xed?l+=1:(i+=l+(v.Xed?"X":Ke(v.colorIndex)),l=1)}const c=e.v[g(t)-1][g(r)-1];return i+=l+(c.Xed?"X":Ke(c.colorIndex)),i});return{get colorIndices(){return g(n)},get columnHints(){return g(f)},get numColumns(){return g(r)},get rowHints(){return g(o)},set v(i){e.v=i},get encoded(){return g(a)},get numRows(){return g(t)},get v(){return e.v},reset:e.reset}},Oe=P("#476fb8"),R=P(["#f8fafc","#020617"]),Xe=P(1),$e=P(5),Ie=P(5),sr=Ht(),y=or(),Ee=or(),Ce=P([sr]),_e=P(0),B=P(!1),q=P({colorIndex:-1,column:-1,Xed:!1,row:-1}),de=P(1),We=P(!1),N=P(50),qe=P(!1),Lt=P(!1),be=P(!1),Le=P(!0),Be=P(!1),Ne=P(!1),nt=P(!1);var He=z(()=>Ie),Re=z(()=>$e),_t=z(()=>B),Qr=T("<button>New Editor</button>"),jr=T('<div class="flex"><input class="min-w-0 text-center" type="text"> <input class="min-w-0 text-center" type="text"></div>');function en(e,t){J(t,!1);const r=f=>Math.max(0,Number(String(f).replace(/[^0-9]/g,"")));ve();var n=lr(),o=Pe(n);te(o,()=>_t().v,f=>{var a=Qr();a.__click=()=>{_t(_t().v=!1),tt()},C(f,a)},f=>{var a=jr(),i=L(a);re(i),i.__input=()=>{Re(Re().v=r(Re().v)),tt()};var l=X(i,2);re(l),l.__input=()=>{He(He().v=r(He().v)),tt()},E(a),ze(i,()=>Re().v,c=>Re(Re().v=c)),ze(l,()=>He().v,c=>He(He().v=c)),C(f,a)}),C(e,n),K()}ce(["click","input"]);const tn=(e,t)=>{t(y.colorIndices,R.v,r=>{const n=document.createElement("a");n.download="shareogram.png",n.href=r,n.click()})};var rn=T("<button>Export as PNG</button>");function nn(e,t){J(t,!1);const r=(o,f,a)=>{const i=o[0].length,l=o.length,c=document.createElement("canvas");c.width=i,c.height=l;const s=c.getContext("2d");if(s){const d=s.createImageData(i,l);for(let h=0;h<l;(h+=1)-1)for(let u=0;u<i;(u+=1)-1){const p=f[o[h][u]],m=Xt(p);if(m){const[w,I,k]=m,b=(h*i+u)*4;d.data[b]=w,d.data[b+1]=I,d.data[b+2]=k,d.data[b+3]=255}}s.putImageData(d,0,0);const v=c.toDataURL("image/png");a(v)}};ve();var n=rn();n.__click=[tn,r],C(e,n),K()}ce(["click"]);var on=T('<input class="mx-2" type="range" max="442" min="10">'),sn=T('<input accept="image/png" id="file-upload" type="file" class="svelte-1mz0xx0"> <!>',1);function an(e,t){J(t,!0);let r=ee(10),n=ee(void 0);const o=(d,v,h)=>{const[u,p,m]=d,[w,I,k]=v;return Math.sqrt((u-w)**2+(p-I)**2+(m-k)**2)<=h},f=(d,v,h)=>"#"+[d,v,h].map(u=>Math.round(u).toString(16).padStart(2,"0")).join(""),a=(d,v,h)=>{const u=Xt(d);for(let p=0;p<v.length;(p+=1)-1){const m=Xt(v[p]);if(o(u,m,h))return p}return v.push(d),v.length-1},i=(d,v,h)=>{const u=new FileReader;u.onload=p=>{var w;const m=new Image;m.onload=()=>{const I=document.createElement("canvas"),k=I.getContext("2d");if(k){I.width=m.width,I.height=m.height,k.drawImage(m,0,0);const b=k.getImageData(0,0,m.width,m.height).data,A=[],ne=[];for(let j=0;j<m.height;(j+=1)-1){const D=[];for(let fe=0;fe<m.width;(fe+=1)-1){const se=(j*m.width+fe)*4,_=b[se],x=b[se+1],S=b[se+2],O=f(_,x,S),G=a(O,A,v);D.push(G)}ne.push(D)}h(ne,A)}},m.src=(w=p.target)==null?void 0:w.result},u.readAsDataURL(d)};De(()=>{g(n)&&i(g(n)[0],g(r),(d,v)=>{$e.v=d[0].length,Ie.v=d.length,R.v=v,Xe.v=0,y.v=Ht();for(let h=0;h<y.numRows;(h+=1)-1)for(let u=0;u<y.numColumns;(u+=1)-1)y.v[h][u].colorIndex=d[h][u];Rt()})});var l=sn(),c=Pe(l),s=X(c,2);te(s,()=>g(n),d=>{var v=on();re(v),ze(v,()=>g(r),h=>Y(r,h)),C(d,v)}),Kr(c,()=>g(n),d=>Y(n,d)),C(e,l),K()}var me=z(()=>We),pt=z(()=>Xe),mt=z(()=>Oe),ge=z(()=>R),ln=T('<button class="flex-1">-</button>'),cn=T('<!> <button class="flex-1">+</button>',1),vn=T('<input type="color" class="h-8 min-w-12 flex-1 border-0">'),fn=T('<div><div class="flex flex-wrap"><!></div> <div class="flex flex-wrap"><input type="color" class="h-8 min-w-12 flex-1 border-0"> <!></div></div>');function un(e,t){J(t,!1);const r=()=>{const s="0123456789abcdef";let d="#";for(let v=0;v<6;(v+=1)-1){const h=Math.floor(Math.random()*s.length);d+=s[h]}return d},n=()=>ge().v.length>2;ve();var o=fn(),f=L(o),a=L(f);te(a,()=>!B.v,s=>{var d=cn(),v=Pe(d);te(v,n,u=>{var p=ln();p.__click=()=>{ge().v.pop(),pt().v>ge().v.length-1&&pt(pt().v-=1),nr()},C(u,p)});var h=X(v,2);h.__click=()=>{ge().v.push(r())},C(s,d)}),E(f);var i=X(f,2),l=L(i);re(l),l.__change=()=>{me(me().v=!0)},l.__click=()=>{me(me().v=!1)};var c=X(l,2);ye(c,1,()=>ge().v,xe,(s,d,v)=>{var h=vn();re(h),h.__change=()=>{me(me().v=!0)},h.__click=()=>{me(me().v=!1)},ze(h,()=>ge().v[v],u=>ge(ge().v[v]=u)),C(s,h)}),E(i),E(o),ze(l,()=>mt().v,s=>mt(mt().v=s)),C(e,o),K()}ce(["click","change"]);var gt=z(()=>Le),dn=T('<div class="flex justify-center border-b-2 border-b-black pb-5"><input type="checkbox" class="svelte-1puqql9"></div>');function hn(e,t){J(t,!1),ve();var r=dn(),n=L(r);re(n),E(r),At(n,()=>gt().v,o=>gt(gt().v=o)),C(e,r),K()}var ue=z(()=>de),_n=T('<input name="border" type="radio" class="svelte-14k2w4w">'),pn=T('<div class="flex justify-between p-5 accent-black svelte-14k2w4w"><input name="border" type="radio" class="svelte-14k2w4w"> <input name="border" type="radio" class="svelte-14k2w4w"> <!></div>');function mn(e,t){J(t,!1);const r=[];ve();var n=pn(),o=L(n);re(o),o.value=(o.__value=0)==null?"":0;var f=X(o,2);re(f),f.value=(f.__value=1)==null?"":1;var a=X(f,2);te(a,()=>$e.v>5||Ie.v>5,i=>{var l=_n();re(l),l.value=(l.__value=2)==null?"":2,ut(r,[],l,()=>ue().v,c=>ue(ue().v=c)),C(i,l)}),E(n),ut(r,[],o,()=>ue().v,i=>ue(ue().v=i)),ut(r,[],f,()=>ue().v,i=>ue(ue().v=i)),C(e,n),K()}var gn=T("<button>Reveal Tile</button>");function wn(e,t){J(t,!0);const r=Z(()=>{const i=[];let l=!0;const c=y.numRows,s=y.numColumns;for(let d=0;d<c;(d+=1)-1)for(let v=0;v<s;(v+=1)-1)Ee.v[d][v].colorIndex!==y.v[d][v].colorIndex&&(i.push({column:v,row:d}),l=!1);return{isDifferent:i,allSame:l}}),n=Z(()=>g(r).isDifferent),o=Z(()=>g(r).allSame);De(()=>{qe.v=g(o)});const f=()=>{if(!qe.v){const i=rt(0,g(n).length-1),l=g(n)[i].row,c=g(n)[i].column;y.v[l][c]={colorIndex:Ee.v[l][c].colorIndex,Xed:!1},Rt()}};var a=gn();a.__click=f,C(e,a),K()}ce(["click"]);var wt=z(()=>nt),bt=z(()=>Ne),bn=T('<div class="flex justify-between border-t-2 border-t-black p-5"><input type="checkbox" class="svelte-1puqql9"> <input type="checkbox" class="svelte-1puqql9"></div>');function xn(e,t){J(t,!1),ve();var r=bn(),n=L(r);re(n);var o=X(n,2);re(o),E(r),At(n,()=>bt().v,f=>bt(bt().v=f)),At(o,()=>wt().v,f=>wt(wt().v=f)),C(e,r),K()}const ar="none";function yn(e){return Array.isArray(e)?e:[e]}function Ue(e,t,r){return e.addEventListener(t,r),()=>e.removeEventListener(t,r)}function kn(e,t){const r=e.getBoundingClientRect(),n=Math.abs(t[0].clientX-t[1].clientX),o=Math.abs(t[0].clientY-t[1].clientY),f=Math.min(t[0].clientX,t[1].clientX),a=Math.min(t[0].clientY,t[1].clientY),i=f+n/2,l=a+o/2,c=Math.round(i-r.left),s=Math.round(l-r.top);return{x:c,y:s}}function $n(e,t){return t.filter(r=>e.pointerId!==r.pointerId)}function Ze(e,t,r,n,o){const f=e.getBoundingClientRect(),a=Math.round(r.clientX-f.left),i=Math.round(r.clientY-f.top);e.dispatchEvent(new CustomEvent(`${t}${o}`,{detail:{event:r,pointersCount:n.length,target:r.target,x:a,y:i}}))}function In(e,t,r,n,o,f=ar){t.style.touchAction=yn(f).join(" ");let a=[];function i(c){a.push(c),Ze(t,e,c,a,"down"),n==null||n(a,c);const s=c.pointerId;function d(w){s===w.pointerId&&(a=$n(w,a),a.length||v(),Ze(t,e,w,a,"up"),o==null||o(a,w))}function v(){h(),u(),p(),m()}const h=Ue(t,"pointermove",w=>{a=a.map(I=>w.pointerId===I.pointerId?w:I),Ze(t,e,w,a,"move"),r==null||r(a,w)}),u=Ue(t,"lostpointercapture",w=>{d(w)}),p=Ue(t,"pointerup",w=>{d(w)}),m=Ue(t,"pointerleave",w=>{a=[],v(),Ze(t,e,w,a,"up"),o==null||o(a,w)})}const l=Ue(t,"pointerdown",i);return{destroy:()=>{l()}}}function Gt(e){return Math.hypot(e[0].clientX-e[1].clientX,e[0].clientY-e[1].clientY)}function Cn(e,t){const r={touchAction:ar,composed:!1,...t},n="pinch";let o,f=0,a;function i(s,d){s.length===1&&(o=void 0)}function l(s,d){s.length===2&&(f=Gt(s),a=kn(e,s))}function c(s,d){if(s.length===2){const v=Gt(s);if(o!==void 0&&v!==o){const h=v/f;e.dispatchEvent(new CustomEvent(n,{detail:{scale:h,center:a,pointerType:d.pointerType}}))}o=v}return!1}return r.composed?{onMove:c,onDown:l,onUp:null}:In(n,e,c,l,i,r.touchAction)}var Tn=T('<input type="range" class="svelte-artubv">');function An(e,t){J(t,!0);const r=100,n=10;let o=ee(1);const f=l=>{l.preventDefault(),l.deltaY<0&&N.v<r?N.v+=5:l.deltaY>0&&N.v>n&&(N.v-=5)},a=l=>{if(!Be.v)return;const c=g(o);Y(o,he(l.detail.scale));const s=g(o)<c;s&&N.v>n?N.v-=1:!s&&N.v<r&&(N.v+=1)};var i=Tn();Q("wheel",le,f,void 0,!1),tr(It.body,l=>Cn(l)),Q("pinch",It.body,a),re(i),Ye(i,"max",r),Ye(i,"min",n),ze(i,()=>N.v,l=>N.v=l),C(e,i),K()}var Qe=z(()=>Lt),Sn=T("<!> <!>",1),Xn=T("<!> <!>",1),En=T('<div class="fixed bottom-0 top-0 z-50 flex w-40 max-w-[75%] flex-col overflow-hidden rounded-l-3xl bg-white svelte-187qfh2"><!> <!> <!> <!> <!> <!> <!></div>');function Mn(e,t){J(t,!1);const r=d=>{d.key==="o"&&Qe(Qe().v=!Qe().v)};ve();var n=En();Q("keydown",le,r);var o=L(n);te(o,()=>!B.v,d=>{var v=Sn(),h=Pe(v);an(h,{});var u=X(h,2);nn(u,{}),C(d,v)});var f=X(o,2);en(f,{});var a=X(f,2);un(a,{});var i=X(a,2);mn(i,{});var l=X(i,2);hn(l,{});var c=X(l,2);An(c,{});var s=X(c,2);te(s,()=>B.v,d=>{var v=Xn(),h=Pe(v);xn(h,{});var u=X(h,2);wn(u,{}),C(d,v)}),E(n),V(()=>$(n,"right",Qe().v?"0":"-300px")),C(e,n),K()}const Hn=e=>e;function Rn(e,{delay:t=0,duration:r=400,easing:n=Hn}={}){const o=+getComputedStyle(e).opacity;return{delay:t,duration:r,easing:n,css:f=>`opacity: ${f*o}`}}var Ln=T('<div class="font-normal"> </div>'),Nn=T("<th></th>"),Dn=T('<thead class="top-0 z-20 align-bottom"><tr><th class="invisible"></th><!></tr></thead>'),On=T("<div> </div>"),qn=T('<td class="left-0 z-10"><div></div></td>'),Pn=T("<span>X</span>"),Yn=T('<td class="box-content" tabindex="0"><!></td>'),zn=T("<tr><!><!></tr>"),Bn=T('<table class="m-32 border-collapse"><!><tbody></tbody></table>');function Gn(e,t){J(t,!0);let r=ee(!1),n=ee(!1),o=ee(""),f=ee(0);const a=(_,x,S,O)=>{const G=Math.abs(_-S),F=Math.abs(x-O);return G===0&&F===1?O>x?"right":"left":G===1&&F===0?S>_?"below":"above":"not adjacent"},i=_=>_.Xed,l=_=>_.colorIndex===Xe.v,c=(_,x)=>{_.colorIndex=x},s=_=>{_.colorIndex=0},d=_=>{_.Xed=!_.Xed},v=(_,x,S)=>{Be.v||(_.target instanceof HTMLElement&&_.target.releasePointerCapture(_.pointerId),_.button===0?Y(r,!0):_.button===2&&Y(n,!0),h(x,S))},h=(_,x)=>{q.v={colorIndex:y.v[_][x].colorIndex,Xed:y.v[_][x].Xed,column:x,row:_},We.v=!1,Y(f,0),B.v?g(r)?be.v&&!ie(y.v[_][x])?d(y.v[_][x]):!be.v&&!i(y.v[_][x])&&(l(y.v[_][x])?s(y.v[_][x]):c(y.v[_][x],Xe.v)):g(n)&&(ie(y.v[_][x])?s(y.v[_][x]):d(y.v[_][x])):g(r)?c(y.v[_][x],Xe.v):g(n)&&s(y.v[_][x])},u=_=>{_.button===0?Y(r,!1):_.button===2&&Y(n,!1),We.v=!0},p=(_,x)=>{if(!g(r)&&!g(n)||g(r)&&g(n)||q.v.row===-1||Be.v)return;Lr(f),g(f)===1&&Y(o,he(a(q.v.row,q.v.column,_,x)));const S=y.v[q.v.row][q.v.column];if(B.v)if(g(o)==="above"||g(o)==="below"){const O=Math.min(q.v.row,_),G=Math.max(q.v.row,_);for(let F=O;F<G+1;(F+=1)-1){const M=y.v[F][q.v.column];g(r)?be.v&&!ie(M)?M.Xed=S.Xed:!be.v&&!i(M)&&c(M,S.colorIndex):q.v.Xed&&!ie(M)?M.Xed=!1:q.v.colorIndex===0&&!ie(M)?M.Xed=!0:q.v.colorIndex!==0&&!i(M)&&s(M)}}else{const O=Math.min(q.v.column,x),G=Math.max(q.v.column,x);for(let F=O;F<G+1;(F+=1)-1){const M=y.v[q.v.row][F];g(r)?be.v&&!ie(M)?M.Xed=S.Xed:!be.v&&!i(M)&&c(M,S.colorIndex):q.v.Xed&&!ie(M)?M.Xed=!1:q.v.colorIndex===0&&!ie(M)?M.Xed=!0:q.v.colorIndex!==0&&!i(M)&&s(M)}}else g(r)?c(y.v[_][x],Xe.v):s(y.v[_][x])};let m=ee(!1),w=ee(he(de.v)),I=ee(he(Le.v));De(()=>{qe.v&&!g(m)?(Y(m,!0),Y(w,he(de.v)),Y(I,he(Le.v)),de.v=0,Le.v=!1):!qe.v&&g(m)&&(Y(m,!1),de.v=g(w),Le.v=g(I))});let k=0,b=0;const A=(_,x)=>{k=_,b=x},ne=_=>{var O;if(_.key!=="ArrowUp"&&_.key!=="ArrowDown"&&_.key!=="ArrowLeft"&&_.key!=="ArrowRight"&&_.key!==" ")return;_.preventDefault();let x=k,S=b;_.key==="ArrowUp"&&k>0?x-=1:_.key==="ArrowDown"&&k<y.numRows-1?x+=1:_.key==="ArrowLeft"&&b>0?S-=1:_.key==="ArrowRight"&&b<y.numColumns-1?S+=1:_.key===" "&&Y(r,!0),(O=document.querySelector(`[data-row="${x}"][data-col="${S}"]`))==null||O.focus(),g(r)&&h(x,S)},j=_=>{_.key===" "&&Y(r,!1)};var D=Bn();Q("pointerup",le,u),Q("keyup",le,j);var fe=L(D);te(fe,()=>B.v,_=>{var x=Dn(),S=L(x),O=X(L(S));ye(O,17,()=>({length:y.numColumns}),xe,(G,F,M)=>{var ae=Nn();ye(ae,21,()=>Ee.columnHints[M],xe,(pe,U)=>{var H=Ln();const Me=Z(()=>R.v[St(g(U).color)]);V(()=>$(H,"color",g(Me)));var W=L(H,!0);E(H),V(()=>{$(H,"font-size",nt.v?N.v/3+"px":N.v/1.5+"px"),Ct(W,g(U).count)}),C(pe,H)}),E(ae),C(G,ae)}),E(S),E(x),V(()=>{$(x,"position",nt.v?"sticky":""),$(x,"background-color",nt.v?R.v[0]:"")}),C(_,x)});var se=X(fe);ye(se,21,()=>({length:y.numRows}),xe,(_,x,S)=>{var O=zn(),G=L(O);te(G,()=>B.v,ae=>{var pe=qn(),U=L(pe);$(U,"justify-content","right"),$(U,"display","flex"),ye(U,21,()=>Ee.rowHints[S],xe,(H,Me)=>{var W=On();const Ve=Z(()=>R.v[St(g(Me).color)]);V(()=>$(W,"color",g(Ve))),$(W,"justify-content","center"),$(W,"align-items","center"),$(W,"display","flex");var ir=L(W,!0);E(W),V(()=>{$(W,"font-size",Ne.v?N.v/3+"px":N.v/1.5+"px"),$(W,"min-width",Ne.v?N.v/3+"px":N.v+"px"),$(W,"height",Ne.v?N.v/3+"px":N.v+"px"),Ct(ir,g(Me).count)}),C(H,W)}),E(U),E(pe),V(()=>{$(pe,"position",Ne.v?"sticky":""),$(pe,"background-color",Ne.v?R.v[0]:"")}),C(ae,pe)});var F=X(G);ye(F,17,()=>({length:y.numColumns}),xe,(ae,pe,U)=>{var H=Yn();H.__pointerdown=W=>{v(W,S,U)},Ye(H,"data-row",S),Ye(H,"data-col",U),H.__keydown=ne,$(H,"transition","background-color .5s, border-radius .5s"),$(H,"text-align","center");var Me=L(H);te(Me,()=>i(y.v[S][U])&&!qe.v,W=>{var Ve=Pn();Jr(3,Ve,()=>Rn,()=>({duration:300})),C(W,Ve)}),E(H),V(()=>{$(H,"border-left",de.v===0?"0":`solid ${U%5===0&&U!==0&&de.v===2?`4px ${R.v[1]}`:`2px ${Oe.v}`}`),$(H,"border-top",de.v===0?"0":`solid ${S%5===0&&S!==0&&de.v===2?`4px ${R.v[1]}`:`2px ${Oe.v}`}`),$(H,"border-radius",Le.v===!0?"20%":"0"),$(H,"background-color",R.v[y.v[S][U].colorIndex]),$(H,"font-size",N.v/1.5+"px"),$(H,"min-width",N.v+"px"),$(H,"height",N.v+"px"),$(H,"color",R.v[1])}),Q("pointerenter",H,()=>{p(S,U)}),Q("focus",H,()=>{A(S,U)}),C(ae,H)}),E(O),C(_,O)}),E(se),E(D),C(e,D),K()}ce(["pointerdown","keydown"]);var Fn=T('<div class="flex"><button class="flex-1">Undo</button> <button class="flex-1">Redo</button></div>');function Un(e,t){J(t,!0);const r=()=>{q.v.row!==-1&&Rt(),q.reset()},n=s=>{s.key==="z"?f():s.key==="y"&&a()},o=()=>{y.v=lt(Ce.v[_e.v]),nr()},f=()=>{_e.v!==0&&(_e.v-=1,o())},a=()=>{_e.v!==Ce.v.length-1&&(_e.v+=1,o())};var i=Fn();Q("keydown",le,n),Q("pointerup",le,r);var l=L(i);l.__click=f;var c=X(l,2);c.__click=a,E(i),C(e,i),K()}ce(["click"]);var Te=z(()=>Be),Ae=z(()=>Xe),Se=z(()=>be),Wn=T('<button class="flex aspect-square h-8 flex-1 items-center justify-center p-0"></button>'),Vn=T('<button class="flex aspect-square h-8 flex-1 items-center justify-center p-0">X</button>'),Jn=T('<div class="flex flex-wrap"><!> <!> <button class="flex aspect-square h-8 flex-1 items-center justify-center p-0" aria-label="Move"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21v-9m0 9l3-3m-3 3l-3-3m3-6V3m0 9H3m9 0h9m-9-9L9 6m3-3l3 3M3 12l3 3m-3-3l3-3m15 3l-3-3m3 3l-3 3"></path></svg></button></div>');function Kn(e,t){J(t,!1);const r=s=>{/[1-9]/.test(s.key)&&Number(s.key)<=R.v.length?n(Number(s.key)-1):s.key==="m"?f():s.key==="x"&&B.v&&o()},n=s=>{Se(Se().v=!1),Te(Te().v=!1),Ae(Ae().v=s)},o=()=>{Se(Se().v=!0),Te(Te().v=!1),Ae(Ae().v=-1)},f=()=>{Se(Se().v=!1),Te(Te().v=!0),Ae(Ae().v=-1)};ve();var a=Jn();Q("keydown",le,r);var i=L(a);ye(i,1,()=>R.v,xe,(s,d,v)=>{var h=Wn();h.__click=()=>{n(v)},h.textContent=v+1,V(()=>{$(h,"border",`solid 2px ${v===Ae().v?v===0?R.v[1]:R.v[0]:R.v[v]}`),$(h,"color",v===0?R.v[1]:R.v[0]),$(h,"background-color",R.v[v])}),C(s,h)});var l=X(i,2);te(l,()=>B.v,s=>{var d=Vn();d.__click=o,V(()=>$(d,"border",`solid 2px ${Se().v?R.v[1]:"ButtonFace"}`)),C(s,d)});var c=X(l,2);c.__click=f,E(a),V(()=>$(c,"border",`solid 2px ${Te().v?R.v[1]:"ButtonFace"}`)),C(e,a),K()}ce(["click"]);var xt=z(()=>Lt),Zn=T('<footer class="flex justify-center"><div><button>Options</button> <div><!> <!></div></div></footer>');function Qn(e,t){J(t,!1),ve();var r=Zn(),n=L(r);$(n,"border-top-right-radius","8px"),$(n,"border-top-left-radius","8px"),$(n,"overflow","hidden"),$(n,"display","flex");var o=L(n);o.__click=()=>{xt(xt().v=!xt().v)};var f=X(o,2),a=L(f);Kn(a,{});var i=X(a,2);Un(i,{}),E(f),E(n),E(r),C(e,r),K()}ce(["click"]);var jn=T('<div class="absolute -left-4 -top-4 scale-[40%]" id="dynamic-svg"><a href="https://github.com/Tree52/Shareogram" aria-label="Link to GitHub repository"><svg height="96" width="98" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff" fill-rule="evenodd"></path></svg></a></div>');function eo(e){var t=jn();C(e,t)}var Ft=z(()=>Ee),yt=z(()=>B),to=T("<span> </span>"),ro=T('<button class="rounded-b-lg">Start Game</button>'),no=T('<header class="flex items-center justify-center"><!> <!></header>');function oo(e,t){J(t,!1),ve();var r=no(),n=L(r);eo(n);var o=X(n,2);te(o,()=>yt().v,f=>{var a=to();$(a,"padding-top","10px");var i=L(a,!0);E(a),V(()=>Ct(i,qe.v?"You win!":"Keep trying")),C(f,a)},f=>{var a=ro();a.__click=()=>{yt(yt().v=!0),Ft(Ft().v=y.v),tt()},C(f,a)}),E(r),C(e,r),K()}ce(["click"]);const so=e=>{let t=!1,r,n,o,f;const a=c=>{(c.button===1||c.button===0&&Be.v)&&(c.preventDefault(),t=!0,r=c.pageX-e.offsetLeft,n=c.pageY-e.offsetTop,o=e.scrollLeft,f=e.scrollTop,e.style.cursor="grabbing",document.addEventListener("mousemove",i),document.addEventListener("mouseup",l))},i=c=>{if(!t)return;c.preventDefault();const s=c.pageX-e.offsetLeft,d=c.pageY-e.offsetTop,v=(s-r)*2,h=(d-n)*2;e.scrollLeft=o-v,e.scrollTop=f-h},l=()=>{t=!1,e.style.cursor="",document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",l)};return e.addEventListener("mousedown",a),{destroy:()=>{e.removeEventListener("mousedown",a),e.style.cursor=""}}};var ao=T('<li class="absolute -bottom-[200px] block aspect-square rounded-[10%] bg-white/20 svelte-qqc5lb"></li>'),io=T('<ul class="absolute inset-0 -z-10 m-0 overflow-hidden p-0 svelte-qqc5lb"></ul> <!>  <main class="m-3 flex flex-1 overflow-auto svelte-qqc5lb"><!></main> <!> <!>',1);function _o(e,t){J(t,!0);let r=ee(!1);const n=u=>{const p=u.match(/(\d+|[a-zX]+)/g),m=[],w=[];if(p)for(let I=0;I<p.length;(I+=1)-1){const k=p[I];isNaN(Number(k))?w.push(k):m.push(Number(k))}if(m.length!==w.length)throw new Error("Error: different number of counts and letters.");return{letters:w,numbers:m}},o=u=>{const p=n(u),m=[];let w=0,I=0;for(let k=0;k<Ie.v;(k+=1)-1)m[k]=[];for(let k=0;k<p.numbers.length;(k+=1)-1)for(let b=0;b<p.numbers[k];(b+=1)-1)p.letters[k]==="X"?m[w][(I+=1)-1]={colorIndex:0,Xed:!0}:m[w][(I+=1)-1]={colorIndex:St(p.letters[k]),Xed:!1},I>$e.v-1&&(w+=1,I=0);return m},f=u=>(u.preventDefault(),u.returnValue="",""),a=()=>{const u=window.location.hash;if(u){try{const p=u.slice(1).split("-");B.v=!!Number(p[0]),$e.v=Number(p[1]),Ie.v=Number(p[2]),Oe.v="#"+p[3];const m=B.v?p.slice(4,-2):p.slice(4,-1);for(let w=0;w<m.length;(w+=1)-1)R.v[w]="#"+m[w];y.v=o(p[B.v?p.length-2:p.length-1]),Ce.v[0]=lt(y.v),B.v&&(Ee.v=o(p[p.length-1]))}catch{alert("Couldn't load the code from the URL. Make sure you copied the link correctly.")}We.v=!0}Y(r,!0)};De(()=>{for(;!g(r);)a()}),De(()=>{if(We.v){const u=[Number(B.v),$e.v,Ie.v,Oe.v.slice(1)];for(let p=0;p<R.v.length;(p+=1)-1)u.push(R.v[p].slice(1));u.push(y.encoded),B.v&&u.push(Ee.encoded),window.location.hash=u.join("-")}}),De(()=>{document.body.style.color=R.v[0];const u=document.querySelector("#dynamic-svg path");u==null||u.setAttribute("fill",R.v[0])});var i=io();Or(u=>{It.title="Shareogram"}),Q("contextmenu",le,u=>u.preventDefault()),Q("load",le,a),Q("beforeunload",le,u=>{f(u)});var l=Pe(i);ye(l,20,()=>({length:35}),xe,(u,p)=>{var m=ao();const w=Z(()=>rt(0,60)+"s");V(()=>$(m,"animation-delay",g(w)));const I=Z(()=>rt(5,200)+"px");V(()=>$(m,"width",g(I)));const k=Z(()=>rt(0,100)+"%");V(()=>$(m,"left",g(k))),C(u,m)}),E(l);var c=X(l,2);oo(c,{});var s=X(c,2);s.__click=()=>{Lt.v=!1};var d=L(s);Gn(d,{}),E(s),tr(s,u=>so(u));var v=X(s,2);Qn(v,{});var h=X(v,2);Mn(h,{}),V(()=>{$(l,"background-color",Oe.v),$(s,"touch-action",Be.v?"auto":"none")}),C(e,i),K()}ce(["click"]);export{_o as component,ho as universal};
