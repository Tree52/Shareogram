import{a as E,t as S}from"../chunks/disclose-version.CDbhbxgN.js";import{A as Xt,z as vt,o as Bt,R as Yt,b as Ut,as as At,h as j,G as je,D as Wt,a9 as Mt,H as Kt,F as xt,I as et,c as Re,at as qe,B as Rt,a as Ht,C as Jt,_ as We,x as Ke,au as ht,av as wt,aw as mt,ax as Vt,a8 as Zt,ay as Qt,d as jt,T as er,a5 as tr,Z as Dt,az as rr,m as or,q as ct,aA as nr,a2 as sr,ab as Lt,u as Ot,aB as ar,aC as lr,aD as ir,E as vr,aE as cr,aF as ur,aG as dr,n as He,aH as fr,X as kt,Y as yt,aI as _r,ac as Je,i as hr,k as Y,j as p,aq as re,P as K,p as U,e as W,g as M,s as H,r as N,K as De,f as Ve,aJ as fe,t as V,aK as mr,aL as pr}from"../chunks/runtime.Co6oywfN.js";import{a as gr,b as br,l as Ze,d as se,e as oe,s as ut,c as xr}from"../chunks/render.BvEaRdMn.js";import{a as wr,p as be,i as Z}from"../chunks/if.BtiKHYwi.js";import{i as ae}from"../chunks/legacy.BBsCaWKx.js";function Qe(e,t=!1){return Be(e,new Map)}function Be(e,t,r,o){if(typeof e=="object"&&e!==null){const i=t.get(e);if(i!==void 0)return i;if(e instanceof Map)return new Map(e);if(e instanceof Set)return new Set(e);if(Xt(e)){const s=[];t.set(e,s);for(let a=0;a<e.length;a+=1)s.push(Be(e[a],t));return s}if(vt(e)===Bt){const s={};t.set(e,s);for(var n in e)s[n]=Be(e[n],t);return s}if(e instanceof Date)return structuredClone(e);if(typeof e.toJSON=="function")return Be(e.toJSON(),t)}if(e instanceof EventTarget)return e;try{return structuredClone(e)}catch{return e}}function xe(e,t){return t}function kr(e,t,r,o){for(var n=[],i=t.length,s=0;s<i;s++)Vt(t[s].e,n,!0);var a=i>0&&n.length===0&&r!==null;if(a){var v=r.parentNode;Zt(v),v.append(r),o.clear(),pe(e,t[0].prev,t[i-1].next)}Qt(n,()=>{for(var l=0;l<i;l++){var c=t[l];a||(o.delete(c.k),pe(e,c.prev,c.next)),jt(c.e,!a)}})}function we(e,t,r,o,n,i=null){var s=e,a={flags:t,items:new Map,first:null},v=(t&At)!==0;if(v){var l=e;s=j?je(er(l)):l.appendChild(Yt())}j&&Wt();var c=null,d=!1;Ut(()=>{var u=r(),f=Xt(u)?u:u==null?[]:Mt(u),h=f.length;if(d&&h===0)return;d=h===0;let y=!1;if(j){var _=s.data===Kt;_!==(h===0)&&(s=xt(),je(s),et(!1),y=!0)}if(j){for(var $=null,w,C=0;C<h;C++){if(Re.nodeType===8&&Re.data===tr){s=Re,y=!0,et(!1);break}var m=f[C],g=o(m,C);w=zt(Re,a,$,null,m,g,C,n,t),a.items.set(g,w),$=w}h>0&&je(xt())}if(!j){var x=Dt;yr(f,a,s,n,t,(x.f&qe)!==0,o)}i!==null&&(h===0?c?Rt(c):c=Ht(()=>i(s)):c!==null&&Jt(c,()=>{c=null})),y&&et(!0),r()}),j&&(s=Re)}function yr(e,t,r,o,n,i,s){var J,q,A,G;var a=(n&rr)!==0,v=(n&(ht|mt))!==0,l=e.length,c=t.items,d=t.first,u=d,f,h=null,y,_=[],$=[],w,C,m,g;if(a)for(g=0;g<l;g+=1)w=e[g],C=s(w,g),m=c.get(C),m!==void 0&&((J=m.a)==null||J.measure(),(y??(y=new Set)).add(m));for(g=0;g<l;g+=1){if(w=e[g],C=s(w,g),m=c.get(C),m===void 0){var x=u?u.e.nodes_start:r;h=zt(x,t,h,h===null?t.first:h.next,w,C,g,o,n),c.set(C,h),_=[],$=[],u=h.next;continue}if(v&&$r(m,w,g,n),m.e.f&qe&&(Rt(m.e),a&&((q=m.a)==null||q.unfix(),(y??(y=new Set)).delete(m))),m!==u){if(f!==void 0&&f.has(m)){if(_.length<$.length){var I=$[0],b;h=I.prev;var O=_[0],z=_[_.length-1];for(b=0;b<_.length;b+=1)$t(_[b],I,r);for(b=0;b<$.length;b+=1)f.delete($[b]);pe(t,O.prev,z.next),pe(t,h,O),pe(t,z,I),u=I,h=z,g-=1,_=[],$=[]}else f.delete(m),$t(m,u,r),pe(t,m.prev,m.next),pe(t,m,h===null?t.first:h.next),pe(t,h,m),h=m;continue}for(_=[],$=[];u!==null&&u.k!==C;)(i||!(u.e.f&qe))&&(f??(f=new Set)).add(u),$.push(u),u=u.next;if(u===null)continue;m=u}_.push(m),h=m,u=m.next}if(u!==null||f!==void 0){for(var D=f===void 0?[]:Mt(f);u!==null;)(i||!(u.e.f&qe))&&D.push(u),u=u.next;var X=D.length;if(X>0){var Q=n&At&&l===0?r:null;if(a){for(g=0;g<X;g+=1)(A=D[g].a)==null||A.measure();for(g=0;g<X;g+=1)(G=D[g].a)==null||G.fix()}kr(t,D,Q,c)}}a&&We(()=>{var ee;if(y!==void 0)for(m of y)(ee=m.a)==null||ee.apply()}),Ke.first=t.first&&t.first.e,Ke.last=h&&h.e}function $r(e,t,r,o){o&ht&&wt(e.v,t),o&mt?wt(e.i,r):e.i=r}function zt(e,t,r,o,n,i,s,a,v){var l=(v&ht)!==0,c=(v&nr)===0,d=l?c?or(n):ct(n):n,u=v&mt?ct(s):s,f={i:u,v:d,k:i,a:null,e:null,prev:r,next:o};try{return f.e=Ht(()=>a(e,d,u),j),f.e.prev=r&&r.e,f.e.next=o&&o.e,r===null?t.first=f:(r.next=f,r.e.next=f.e),o!==null&&(o.prev=f,o.e.prev=f.e),f}finally{}}function $t(e,t,r){for(var o=e.next?e.next.e.nodes_start:r,n=t?t.e.nodes_start:r,i=e.e.nodes_start;i!==o;){var s=sr(i);n.before(i),i=s}}function pe(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function Ir(e,t,r){Lt(()=>{var o=Ot(()=>t(e,r==null?void 0:r())||{});if(o!=null&&o.destroy)return()=>o.destroy()})}function ne(e){if(j){var t=!1,r=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var o=e.value;Le(e,"value",null),e.value=o}if(e.hasAttribute("checked")){var n=e.checked;Le(e,"checked",null),e.checked=n}}};e.__on_r=r,ir(r),gr()}}function Le(e,t,r,o){var n=e.__attributes??(e.__attributes={});j&&(n[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||n[t]!==(n[t]=r)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[ar]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Cr(e).includes(t)?e[t]=r:e.setAttribute(t,r))}var It=new Map;function Cr(e){var t=It.get(e.nodeName);if(t)return t;It.set(e.nodeName,t=[]);for(var r,o=vt(e),n=Element.prototype;n!==o;){r=lr(o);for(var i in r)r[i].set&&t.push(i);o=vt(o)}return t}function T(e,t,r,o){var n=e.__styles??(e.__styles={});n[t]!==r&&(n[t]=r,r==null?e.style.removeProperty(t):e.style.setProperty(t,r,""))}const Tr=()=>performance.now(),ke={tick:e=>requestAnimationFrame(e),now:()=>Tr(),tasks:new Set};function Gt(e){ke.tasks.forEach(t=>{t.c(e)||(ke.tasks.delete(t),t.f())}),ke.tasks.size!==0&&ke.tick(Gt)}function Er(e){let t;return ke.tasks.size===0&&ke.tick(Gt),{promise:new Promise(r=>{ke.tasks.add(t={c:e,f:r})}),abort(){ke.tasks.delete(t)}}}function Ge(e,t){e.dispatchEvent(new CustomEvent(t))}function Sr(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function Ct(e){const t={},r=e.split(";");for(const o of r){const[n,i]=o.split(":");if(!n||i===void 0)break;const s=Sr(n.trim());t[s]=i.trim()}return t}const Nr=e=>e;function Xr(e,t,r,o){var n=(e&fr)!==0,i="both",s,a=t.inert,v,l;function c(){var y=Dt,_=Ke;kt(null),yt(null);try{return s??(s=r()(t,(o==null?void 0:o())??{},{direction:i}))}finally{kt(y),yt(_)}}var d={is_global:n,in(){t.inert=a,Ge(t,"introstart"),v=dt(t,c(),l,1,()=>{Ge(t,"introend"),v==null||v.abort(),v=s=void 0})},out(y){t.inert=!0,Ge(t,"outrostart"),l=dt(t,c(),v,0,()=>{Ge(t,"outroend"),y==null||y()})},stop:()=>{v==null||v.abort(),l==null||l.abort()}},u=Ke;if((u.transitions??(u.transitions=[])).push(d),br){var f=n;if(!f){for(var h=u.parent;h&&h.f&vr;)for(;(h=h.parent)&&!(h.f&cr););f=!h||(h.f&ur)!==0}f&&Lt(()=>{Ot(()=>d.in())})}}function dt(e,t,r,o,n){var i=o===1;if(dr(t)){var s,a=!1;return We(()=>{if(!a){var _=t({direction:i?"in":"out"});s=dt(e,_,r,o,n)}}),{abort:()=>{a=!0,s==null||s.abort()},deactivate:()=>s.deactivate(),reset:()=>s.reset(),t:()=>s.t()}}if(r==null||r.deactivate(),!(t!=null&&t.duration))return n(),{abort:He,deactivate:He,reset:He,t:()=>o};const{delay:v=0,css:l,tick:c,easing:d=Nr}=t;var u=[];if(i&&r===void 0&&(c&&c(0,1),l)){var f=Ct(l(0,1));u.push(f,f)}var h=()=>1-o,y=e.animate(u,{duration:v});return y.onfinish=()=>{var _=(r==null?void 0:r.t())??1-o;r==null||r.abort();var $=o-_,w=t.duration*Math.abs($),C=[];if(w>0){if(l)for(var m=Math.ceil(w/16.666666666666668),g=0;g<=m;g+=1){var x=_+$*d(g/m),I=l(x,1-x);C.push(Ct(I))}h=()=>{var b=y.currentTime;return _+$*d(b/w)},c&&Er(()=>{if(y.playState!=="running")return!1;var b=h();return c(b,1-b),!0})}y=e.animate(C,{duration:w,fill:"forwards"}),y.onfinish=()=>{h=()=>o,c==null||c(o,1-o),n()}},{abort:()=>{y&&(y.cancel(),y.effect=null,y.onfinish=He)},deactivate:()=>{n=He},reset:()=>{o===0&&(c==null||c(1,0))},t:()=>h()}}function Me(e,t,r=t){var o=_r();Ze(e,"input",()=>{var n=Et(e)?St(e.value):e.value;r(n),o&&n!==(n=t())&&(e.value=n??"")}),Je(()=>{var n=t();if(j&&e.defaultValue!==e.value){r(e.value);return}Et(e)&&n===St(e.value)||e.type==="date"&&!n&&!e.value||n!==e.value&&(e.value=n??"")})}const tt=new Set;function rt(e,t,r,o,n=o){var i=r.getAttribute("type")==="checkbox",s=e;let a=!1;if(t!==null)for(var v of t)s=s[v]??(s[v]=[]);s.push(r),Ze(r,"change",()=>{var l=r.__value;i&&(l=Tt(s,l,r.checked)),n(l)},()=>n(i?[]:null)),Je(()=>{var l=o();if(j&&r.defaultChecked!==r.checked){a=!0;return}i?(l=l||[],r.checked=l.includes(r.__value)):r.checked=wr(r.__value,l)}),hr(()=>{var l=s.indexOf(r);l!==-1&&s.splice(l,1)}),tt.has(s)||(tt.add(s),We(()=>{s.sort((l,c)=>l.compareDocumentPosition(c)===4?-1:1),tt.delete(s)})),We(()=>{if(a){var l;if(i)l=Tt(s,l,r.checked);else{var c=s.find(d=>d.checked);l=c==null?void 0:c.__value}n(l)}})}function Ar(e,t,r=t){Ze(e,"change",()=>{var o=e.checked;r(o)}),t()==null&&r(!1),Je(()=>{var o=t();e.checked=!!o})}function Tt(e,t,r){for(var o=new Set,n=0;n<e.length;n+=1)e[n].checked&&o.add(e[n].__value);return r||o.delete(t),Array.from(o)}function Et(e){var t=e.type;return t==="number"||t==="range"}function St(e){return e===""?null:+e}function Mr(e,t,r=t){Ze(e,"change",()=>{r(e.files)}),Je(()=>{e.files=t()})}function B(e){var t=ct(0);return function(){return arguments.length===1?(Y(t,p(t)+1),arguments[0]):(p(t),e())}}const Rr=!0,Po=Object.freeze(Object.defineProperty({__proto__:null,prerender:Rr},Symbol.toStringTag,{value:"Module"})),te=e=>e.colorIndex!==0,pt=()=>{const e=[[]];for(let t=0;t<$e.v;(t+=1)-1){e[t]=[];for(let r=0;r<ye.v;(r+=1)-1)e[t][r]={colorIndex:0,Xed:!1}}return e},Pt=()=>{for(let e=0;e<k.numRows;(e+=1)-1)for(let t=0;t<k.numColumns;(t+=1)-1)k.v[e][t].colorIndex>R.v.length-1&&(k.v[e][t].colorIndex=0)},gt=()=>{de.v!==Ie.v.length-1&&Ie.v.splice(de.v+1),de.v+=1,Ie.v.push(Qe(k.v))},Ye=()=>{ye.v<1||$e.v<1||(k.v=pt(),Ie.reset(),Ie.v[0]=Qe(k.v),de.reset(),ge.v=!1)},ft=e=>{let t=0;for(let r=0;r<e.length;(r+=1)-1)t*=26,t+=e.charCodeAt(r)-97+1;return t-1},_t=e=>{const t=parseInt(e.replace("#",""),16);return[t>>16&255,t>>8&255,t&255]},Ue=(e,t)=>Math.floor(Math.random()*(t-e+1)+e),Pe=e=>{let t="";for(;e>=0;)t=String.fromCharCode(e%26+97)+t,e=Math.floor(e/26)-1;return t},F=e=>{let t=re(be(e));return{set v(o){Y(t,be(o))},get v(){return p(t)},reset:()=>Y(t,be(e))}},Ft=()=>{const e=F(qt),t=K(()=>e.v.length),r=K(()=>e.v[0].length),o=K(()=>e.v.map(a=>a.map(v=>v.colorIndex))),n=K(()=>{const a=[[]],v=e.v.length,l=e.v[0].length;for(let c=0;c<v;(c+=1)-1){a[c]=[{color:"",count:0}];for(let d=0;d<l;(d+=1)-1)if(te(e.v[c][d])){const u=d===0?null:e.v[c][d-1].colorIndex,f=e.v[c][d].colorIndex;u!==f?a[c].push({color:Pe(f),count:1}):a[c][a[c].length-1].count+=1}a[c].length>1&&a[c][0].count===0&&a[c].shift()}return a}),i=K(()=>{const a=[[]];for(let v=0;v<p(r);(v+=1)-1){a[v]=[{color:"",count:0}];for(let l=0;l<p(t);(l+=1)-1)if(te(e.v[l][v])){const c=l===0?null:e.v[l-1][v].colorIndex,d=e.v[l][v].colorIndex;c!==d?a[v].push({color:Pe(d),count:1}):a[v][a[v].length-1].count+=1}a[v].length>1&&a[v][0].count===0&&a[v].shift()}return a}),s=K(()=>{let a="",v=1;for(let c=0;c<p(t);(c+=1)-1)for(let d=0;d<p(r);(d+=1)-1)if(!(c===0&&d===0)){const u=d===0?e.v[c-1][p(r)-1]:e.v[c][d-1];u.colorIndex===e.v[c][d].colorIndex&&u.Xed===e.v[c][d].Xed?v+=1:(a+=v+(u.Xed?"X":Pe(u.colorIndex)),v=1)}const l=e.v[p(t)-1][p(r)-1];return a+=v+(l.Xed?"X":Pe(l.colorIndex)),a});return{get colorIndices(){return p(o)},get columnHints(){return p(i)},get numColumns(){return p(r)},get rowHints(){return p(n)},set v(a){e.v=a},get encoded(){return p(s)},get numRows(){return p(t)},get v(){return e.v},reset:e.reset}},Xe=F("#476fb8"),R=F(["#f8fafc","#020617"]),Ce=F(1),ye=F(5),$e=F(5),qt=pt(),k=Ft(),Te=Ft(),Ie=F([qt]),de=F(0),P=F(!1),L=F({colorIndex:-1,column:-1,Xed:!1,row:-1}),ue=F(1),Oe=F(!1),me=F(50),Ae=F(!1),bt=F(!1),ge=F(!1),Ne=F(!0);var Ee=B(()=>$e),Se=B(()=>ye),ot=B(()=>P),Hr=S("<button>New Editor</button>"),Dr=S('<div class="svelte-16du0in"><input type="text" class="svelte-16du0in"> <input type="text" class="svelte-16du0in"></div>'),Lr=S('<div class="svelte-16du0in"><!></div>');function Or(e,t){U(t,!1);const r=i=>Math.max(0,Number(String(i).replace(/[^0-9]/g,"")));ae();var o=Lr(),n=M(o);Z(n,()=>ot().v,i=>{var s=Hr();s.__click=()=>{ot(ot().v=!1),Ye()},E(i,s)},i=>{var s=Dr(),a=M(s);ne(a),a.__input=()=>{Se(Se().v=r(Se().v)),Ye()};var v=H(a,2);ne(v),v.__input=()=>{Ee(Ee().v=r(Ee().v)),Ye()},N(s),Me(a,()=>Se().v,l=>Se(Se().v=l)),Me(v,()=>Ee().v,l=>Ee(Ee().v=l)),E(i,s)}),N(o),E(e,o),W()}se(["click","input"]);const zr=(e,t)=>{t(k.colorIndices,R.v,r=>{const o=document.createElement("a");o.download="shareogram.png",o.href=r,o.click()})};var Gr=S("<button>Export as PNG</button>");function Pr(e,t){U(t,!1);const r=(n,i,s)=>{const a=n[0].length,v=n.length,l=document.createElement("canvas");l.width=a,l.height=v;const c=l.getContext("2d");if(c){const d=c.createImageData(a,v);for(let f=0;f<v;(f+=1)-1)for(let h=0;h<a;(h+=1)-1){const y=i[n[f][h]],_=_t(y);if(_){const[$,w,C]=_,m=(f*a+h)*4;d.data[m]=$,d.data[m+1]=w,d.data[m+2]=C,d.data[m+3]=255}}c.putImageData(d,0,0);const u=l.toDataURL("image/png");s(u)}};ae();var o=Gr();o.__click=[zr,r],E(e,o),W()}se(["click"]);var Fr=S('<input type="range" max="442" min="10">'),qr=S('<input accept="image/png" id="file-upload" type="file" class="svelte-nlo4k4"> <!>',1);function Br(e,t){U(t,!0);let r=re(10),o=re(void 0);const n=(d,u,f)=>{const[h,y,_]=d,[$,w,C]=u;return Math.sqrt((h-$)**2+(y-w)**2+(_-C)**2)<=f},i=(d,u,f)=>"#"+[d,u,f].map(h=>Math.round(h).toString(16).padStart(2,"0")).join(""),s=(d,u,f)=>{const h=_t(d);for(let y=0;y<u.length;(y+=1)-1){const _=_t(u[y]);if(n(h,_,f))return y}return u.push(d),u.length-1},a=(d,u,f)=>{const h=new FileReader;h.onload=y=>{var $;const _=new Image;_.onload=()=>{const w=document.createElement("canvas"),C=w.getContext("2d");if(C){w.width=_.width,w.height=_.height,C.drawImage(_,0,0);const m=C.getImageData(0,0,_.width,_.height).data,g=[],x=[];for(let I=0;I<_.height;(I+=1)-1){const b=[];for(let O=0;O<_.width;(O+=1)-1){const z=(I*_.width+O)*4,D=m[z],X=m[z+1],Q=m[z+2],J=i(D,X,Q),q=s(J,g,u);b.push(q)}x.push(b)}f(x,g)}},_.src=($=y.target)==null?void 0:$.result},h.readAsDataURL(d)};De(()=>{p(o)&&a(p(o)[0],p(r),(d,u)=>{ye.v=d[0].length,$e.v=d.length,R.v=u,Ce.v=0,k.v=pt();for(let f=0;f<k.numRows;(f+=1)-1)for(let h=0;h<k.numColumns;(h+=1)-1)k.v[f][h].colorIndex=d[f][h];gt()})});var v=qr(),l=Ve(v),c=H(l,2);Z(c,()=>p(o),d=>{var u=Fr();ne(u),Me(u,()=>p(r),f=>Y(r,f)),E(d,u)}),Mr(l,()=>p(o),d=>Y(o,d)),E(e,v),W()}var _e=B(()=>Oe),nt=B(()=>Ce),st=B(()=>Xe),he=B(()=>R),Yr=S('<button class="svelte-1ubn0yt">-</button>'),Ur=S('<!> <button class="svelte-1ubn0yt">+</button>',1),Wr=S('<input type="color" class="svelte-1ubn0yt">'),Kr=S('<div class="svelte-1ubn0yt"><div class="svelte-1ubn0yt"><!></div> <div class="svelte-1ubn0yt"><input type="color" class="svelte-1ubn0yt"> <!></div></div>');function Jr(e,t){U(t,!1);const r=()=>{const c="0123456789abcdef";let d="#";for(let u=0;u<6;(u+=1)-1){const f=Math.floor(Math.random()*c.length);d+=c[f]}return d},o=()=>he().v.length>2;ae();var n=Kr(),i=M(n),s=M(i);Z(s,()=>!P.v,c=>{var d=Ur(),u=Ve(d);Z(u,o,h=>{var y=Yr();y.__click=()=>{he().v.pop(),nt().v>he().v.length-1&&nt(nt().v-=1),Pt()},E(h,y)});var f=H(u,2);f.__click=()=>{he().v.push(r())},E(c,d)}),N(i);var a=H(i,2),v=M(a);ne(v),v.__change=()=>{_e(_e().v=!0)},v.__click=()=>{_e(_e().v=!1)};var l=H(v,2);we(l,1,()=>he().v,xe,(c,d,u)=>{var f=Wr();ne(f),f.__change=()=>{_e(_e().v=!0)},f.__click=()=>{_e(_e().v=!1)},Me(f,()=>he().v[u],h=>he(he().v[u]=h)),E(c,f)}),N(a),N(n),Me(v,()=>st().v,c=>st(st().v=c)),E(e,n),W()}se(["click","change"]);var at=B(()=>Ne),Vr=S('<div class="svelte-1xxyg97"><label class="switch"><input type="checkbox" class="svelte-1xxyg97"></label></div>');function Zr(e,t){U(t,!1),ae();var r=Vr(),o=M(r),n=M(o);ne(n),N(o),N(r),Ar(n,()=>at().v,i=>at(at().v=i)),E(e,r),W()}var le=B(()=>ue),Qr=S('<input name="border" type="radio" class="svelte-qc9c1k">'),jr=S('<div class="svelte-qc9c1k"><input name="border" type="radio" class="svelte-qc9c1k"> <input name="border" type="radio" class="svelte-qc9c1k"> <!></div>');function eo(e,t){U(t,!1);const r=[];ae();var o=jr(),n=M(o);ne(n),n.value=(n.__value=0)==null?"":0;var i=H(n,2);ne(i),i.value=(i.__value=1)==null?"":1;var s=H(i,2);Z(s,()=>ye.v>5||$e.v>5,a=>{var v=Qr();ne(v),v.value=(v.__value=2)==null?"":2,rt(r,[],v,()=>le().v,l=>le(le().v=l)),E(a,v)}),N(o),rt(r,[],n,()=>le().v,a=>le(le().v=a)),rt(r,[],i,()=>le().v,a=>le(le().v=a)),E(e,o),W()}var to=S("<button>Reveal Tile</button>");function ro(e,t){U(t,!0);const r=K(()=>{const a=[];let v=!0;const l=k.numRows,c=k.numColumns;for(let d=0;d<l;(d+=1)-1)for(let u=0;u<c;(u+=1)-1)Te.v[d][u].colorIndex!==k.v[d][u].colorIndex&&(a.push({column:u,row:d}),v=!1);return{isDifferent:a,allSame:v}}),o=K(()=>p(r).isDifferent),n=K(()=>p(r).allSame);De(()=>{Ae.v=p(n)});const i=()=>{if(!Ae.v){const a=Ue(0,p(o).length-1),v=p(o)[a].row,l=p(o)[a].column;k.v[v][l]={colorIndex:Te.v[v][l].colorIndex,Xed:!1},gt()}};var s=to();s.__click=i,E(e,s),W()}se(["click"]);var ie=B(()=>me),oo=S('<input type="range" class="svelte-1wz0dqh">');function no(e,t){U(t,!1);const r=100,o=10,n=s=>{s.preventDefault(),s.deltaY<0&&ie().v<r?ie(ie().v+=5):s.deltaY>0&&ie().v>o&&ie(ie().v-=5)};ae();var i=oo();oe("wheel",fe,n,void 0,!1),ne(i),Le(i,"max",r),Le(i,"min",o),Me(i,()=>ie().v,s=>ie(ie().v=s)),E(e,i),W()}var Fe=B(()=>bt),so=S("<!> <!>",1),ao=S('<div class="svelte-xm1pu0"><!> <!> <!> <!> <!> <!> <!></div>');function lo(e,t){U(t,!1);const r=d=>{d.key==="o"&&Fe(Fe().v=!Fe().v)};ae();var o=ao();oe("keydown",fe,r);var n=M(o);Z(n,()=>!P.v,d=>{var u=so(),f=Ve(u);Br(f,{});var h=H(f,2);Pr(h,{}),E(d,u)});var i=H(n,2);Or(i,{});var s=H(i,2);Jr(s,{});var a=H(s,2);eo(a,{});var v=H(a,2);Zr(v,{});var l=H(v,2);no(l,{});var c=H(l,2);Z(c,()=>P.v,d=>{ro(d,{})}),N(o),V(()=>T(o,"right",Fe().v?"0":"-200px")),E(e,o),W()}const io=e=>e;function vo(e,{delay:t=0,duration:r=400,easing:o=io}={}){const n=+getComputedStyle(e).opacity;return{delay:t,duration:r,easing:o,css:i=>`opacity: ${i*n}`}}var co=S("<div> </div>"),uo=S('<th class="svelte-16s63u3"></th>'),fo=S('<thead><tr><th class="svelte-16s63u3"></th><!></tr></thead>'),_o=S("<div> </div>"),ho=S("<td></td>"),mo=S("<span>X</span>"),po=S("<td><!></td>"),go=S("<tr><!><!></tr>"),bo=S('<table class="svelte-16s63u3"><!><tbody></tbody></table>');function xo(e,t){U(t,!0);let r=re(!1),o=re(!1),n=re(""),i=re(0);const s=(x,I,b,O)=>{const z=Math.abs(x-b),D=Math.abs(I-O);return z===0&&D===1?O>I?"right":"left":z===1&&D===0?b>x?"below":"above":"not adjacent"},a=x=>x.Xed,v=x=>x.colorIndex===Ce.v,l=(x,I)=>{x.colorIndex=I},c=x=>{x.colorIndex=0},d=x=>{x.Xed=!x.Xed},u=(x,I,b)=>{L.v={colorIndex:k.v[I][b].colorIndex,Xed:k.v[I][b].Xed,column:b,row:I},Oe.v=!1,Y(i,0),P.v?x.button===0?ge.v&&!te(k.v[I][b])?d(k.v[I][b]):!ge.v&&!a(k.v[I][b])&&(v(k.v[I][b])?c(k.v[I][b]):l(k.v[I][b],Ce.v)):x.button===2&&(te(k.v[I][b])?c(k.v[I][b]):d(k.v[I][b])):x.button===0?l(k.v[I][b],Ce.v):x.button===2&&c(k.v[I][b])},f=x=>{x.button===0?Y(r,!0):x.button===2&&Y(o,!0)},h=x=>{x.button===0?Y(r,!1):x.button===2&&Y(o,!1),Oe.v=!0},y=(x,I)=>{if(!p(r)&&!p(o)||p(r)&&p(o)||L.v.row===-1)return;mr(i),p(i)===1&&Y(n,be(s(L.v.row,L.v.column,x,I)));const b=k.v[L.v.row][L.v.column];if(P.v)if(p(n)==="above"||p(n)==="below"){const O=Math.min(L.v.row,x),z=Math.max(L.v.row,x);for(let D=O;D<z+1;(D+=1)-1){const X=k.v[D][L.v.column];p(r)?ge.v&&!te(X)?X.Xed=b.Xed:!ge.v&&!a(X)&&l(X,b.colorIndex):L.v.Xed&&!te(X)?X.Xed=!1:L.v.colorIndex===0&&!te(X)?X.Xed=!0:L.v.colorIndex!==0&&!a(X)&&c(X)}}else{const O=Math.min(L.v.column,I),z=Math.max(L.v.column,I);for(let D=O;D<z+1;(D+=1)-1){const X=k.v[L.v.row][D];p(r)?ge.v&&!te(X)?X.Xed=b.Xed:!ge.v&&!a(X)&&l(X,b.colorIndex):L.v.Xed&&!te(X)?X.Xed=!1:L.v.colorIndex===0&&!te(X)?X.Xed=!0:L.v.colorIndex!==0&&!a(X)&&c(X)}}else p(r)?l(k.v[x][I],Ce.v):c(k.v[x][I])};let _=re(!1),$=re(be(ue.v)),w=re(be(Ne.v));De(()=>{Ae.v&&!p(_)?(Y(_,!0),Y($,be(ue.v)),Y(w,be(Ne.v)),ue.v=0,Ne.v=!1):!Ae.v&&p(_)&&(Y(_,!1),ue.v=p($),Ne.v=p(w))});var C=bo();oe("mousedown",fe,f),oe("mouseup",fe,h);var m=M(C);Z(m,()=>P.v,x=>{var I=fo(),b=M(I),O=H(M(b));we(O,17,()=>({length:k.numColumns}),xe,(z,D,X)=>{var Q=uo();we(Q,21,()=>Te.columnHints[X],xe,(J,q)=>{var A=co();const G=K(()=>R.v[ft(p(q).color)]);V(()=>T(A,"color",p(G)));var ee=M(A,!0);N(A),V(()=>{T(A,"font-size",me.v/1.5+"px"),ut(ee,p(q).count)}),E(J,A)}),N(Q),E(z,Q)}),N(b),N(I),E(x,I)});var g=H(m);we(g,21,()=>({length:k.numRows}),xe,(x,I,b)=>{var O=go(),z=M(O);Z(z,()=>P.v,Q=>{var J=ho();T(J,"justify-content","right"),T(J,"display","flex"),we(J,21,()=>Te.rowHints[b],xe,(q,A)=>{var G=_o();const ee=K(()=>R.v[ft(p(A).color)]);V(()=>T(G,"color",p(ee))),T(G,"justify-content","center"),T(G,"align-items","center"),T(G,"display","flex");var ze=M(G,!0);N(G),V(()=>{T(G,"font-size",me.v/1.5+"px"),T(G,"min-width",me.v+"px"),T(G,"height",me.v+"px"),ut(ze,p(A).count)}),E(q,G)}),N(J),E(Q,J)});var D=H(z);we(D,17,()=>({length:k.numColumns}),xe,(Q,J,q)=>{var A=po();A.__mousedown=ee=>{u(ee,b,q)},T(A,"transition","background-color .5s, border-radius .5s"),T(A,"text-align","center");var G=M(A);Z(G,()=>a(k.v[b][q])&&!Ae.v,ee=>{var ze=mo();Xr(3,ze,()=>vo,()=>({duration:300})),E(ee,ze)}),N(A),V(()=>{T(A,"border-left",ue.v===0?"0":`solid ${q%5===0&&q!==0&&ue.v===2?`4px ${R.v[1]}`:`2px ${Xe.v}`}`),T(A,"border-top",ue.v===0?"0":`solid ${b%5===0&&b!==0&&ue.v===2?`4px ${R.v[1]}`:`2px ${Xe.v}`}`),T(A,"border-radius",Ne.v===!0?"20%":"0"),T(A,"background-color",R.v[k.v[b][q].colorIndex]),T(A,"font-size",me.v/1.5+"px"),T(A,"min-width",me.v+"px"),T(A,"height",me.v+"px"),T(A,"color",R.v[1])}),oe("mouseenter",A,()=>{y(b,q)}),E(Q,A)}),N(O),E(x,O)}),N(g),N(C),E(e,C),W()}se(["mousedown"]);var wo=S('<div class="svelte-r2sle7"><button class="svelte-r2sle7">Undo</button> <button class="svelte-r2sle7">Redo</button></div>');function ko(e,t){U(t,!0);const r=()=>{L.v.row!==-1&&gt(),L.reset()},o=c=>{c.key==="z"?i():c.key==="y"&&s()},n=()=>{k.v=Qe(Ie.v[de.v]),Pt()},i=()=>{de.v!==0&&(de.v-=1,n())},s=()=>{de.v!==Ie.v.length-1&&(de.v+=1,n())};var a=wo();oe("keydown",fe,o),oe("mouseup",fe,r);var v=M(a);v.__click=i;var l=H(v,2);l.__click=s,N(a),E(e,a),W()}se(["click"]);var ve=B(()=>Ce),ce=B(()=>ge),yo=S('<button class="svelte-7gpg2x"></button>'),$o=S('<button class="svelte-7gpg2x">X</button>'),Io=S('<div class="svelte-7gpg2x"><!> <!></div>');function Co(e,t){U(t,!1);const r=s=>{/[1-9]/.test(s.key)&&Number(s.key)<=R.v.length?(ce(ce().v=!1),ve(ve().v=Number(s.key)-1)):s.key==="x"&&P.v&&(ce(ce().v=!0),ve(ve().v=-1))};ae();var o=Io();oe("keydown",fe,r);var n=M(o);we(n,1,()=>R.v,xe,(s,a,v)=>{var l=yo();l.__click=()=>{ve(ve().v=v),ce(ce().v=!1)},l.textContent=v+1,V(()=>{T(l,"border",`solid 2px ${v===ve().v?v===0?R.v[1]:R.v[0]:R.v[v]}`),T(l,"--max-h",(R.v.length>4?"2":"6")+"rem"),T(l,"color",v===0?R.v[1]:R.v[0]),T(l,"background-color",R.v[v])}),E(s,l)});var i=H(n,2);Z(i,()=>P.v,s=>{var a=$o();a.__click=()=>{ce(ce().v=!0),ve(ve().v=-1)},V(()=>{T(a,"border",`solid 2px ${ce().v?R.v[1]:"ButtonFace"}`),T(a,"--max-h",(R.v.length>4?"2":"6")+"rem")}),E(s,a)}),N(o),E(e,o),W()}se(["click"]);var lt=B(()=>bt),To=S('<footer class="svelte-6v3vqk"><div><button>Options</button> <div><!> <!></div></div></footer>');function Eo(e,t){U(t,!1),ae();var r=To(),o=M(r);T(o,"border-top-right-radius","8px"),T(o,"border-top-left-radius","8px"),T(o,"overflow","hidden"),T(o,"display","flex");var n=M(o);n.__click=()=>{lt(lt().v=!lt().v)};var i=H(n,2),s=M(i);Co(s,{});var a=H(s,2);ko(a,{}),N(i),N(o),N(r),E(e,r),W()}se(["click"]);var Nt=B(()=>Te),it=B(()=>P),So=S("<span> </span>"),No=S('<button class="svelte-93z3ep">Start Game</button>'),Xo=S('<header class="svelte-93z3ep"><!></header>');function Ao(e,t){U(t,!1),ae();var r=Xo(),o=M(r);Z(o,()=>it().v,n=>{var i=So();T(i,"padding-top","10px");var s=M(i,!0);N(i),V(()=>ut(s,Ae.v?"You win!":"Keep trying")),E(n,i)},n=>{var i=No();i.__click=()=>{it(it().v=!0),Nt(Nt().v=k.v),Ye()},E(n,i)}),N(r),E(e,r),W()}se(["click"]);const Mo=e=>{let t=!1,r,o,n,i;const s=l=>{l.button===1&&(l.preventDefault(),t=!0,r=l.pageX-e.offsetLeft,o=l.pageY-e.offsetTop,n=e.scrollLeft,i=e.scrollTop,e.style.cursor="grabbing",document.addEventListener("mousemove",a),document.addEventListener("mouseup",v))},a=l=>{if(!t)return;l.preventDefault();const c=l.pageX-e.offsetLeft,d=l.pageY-e.offsetTop,u=(c-r)*2,f=(d-o)*2;e.scrollLeft=n-u,e.scrollTop=i-f},v=()=>{t=!1,e.style.cursor="",document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",v)};return e.addEventListener("mousedown",s),{destroy:()=>{e.removeEventListener("mousedown",s),e.style.cursor=""}}};var Ro=S('<li class="svelte-1kx7u33"></li>'),Ho=S('<div class="github svelte-1kx7u33"><a href="https://github.com/Tree52/Shareogram" aria-label="Link to GitHub repository" class="svelte-1kx7u33"><svg height="96" width="98" xmlns="http://www.w3.org/2000/svg" class="svelte-1kx7u33"><path clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill-rule="evenodd" class="svelte-1kx7u33"></path></svg></a></div> <ul class="background svelte-1kx7u33"></ul> <!>  <main class="svelte-1kx7u33"><!></main> <!> <!>',1);function Fo(e,t){U(t,!0);const r=_=>{const $=_.match(/(\d+|[a-zX]+)/g),w=[],C=[];if($)for(let m=0;m<$.length;(m+=1)-1){const g=$[m];isNaN(Number(g))?C.push(g):w.push(Number(g))}if(w.length!==C.length)throw new Error("Error: different number of counts and letters.");return{letters:C,numbers:w}},o=_=>{const $=r(_),w=[];let C=0,m=0;for(let g=0;g<$e.v;(g+=1)-1)w[g]=[];for(let g=0;g<$.numbers.length;(g+=1)-1)for(let x=0;x<$.numbers[g];(x+=1)-1)$.letters[g]==="X"?w[C][(m+=1)-1]={colorIndex:0,Xed:!0}:w[C][(m+=1)-1]={colorIndex:ft($.letters[g]),Xed:!1},m>ye.v-1&&(C+=1,m=0);return w},n=()=>{if(window.location.hash){try{const _=window.location.hash.slice(1).split("-");P.v=!!Number(_[0]),ye.v=Number(_[1]),$e.v=Number(_[2]),Xe.v="#"+_[3];const $=P.v?_.slice(4,-2):_.slice(4,-1);for(let w=0;w<$.length;(w+=1)-1)R.v[w]="#"+$[w];k.v=o(_[P.v?_.length-2:_.length-1]),Ie.v[0]=Qe(k.v),P.v&&(Te.v=o(_[_.length-1]))}catch{alert("Couldn't load the code from the URL. Make sure you copied the link correctly.")}Oe.v=!0}};De(()=>{if(Oe.v){const _=[Number(P.v),ye.v,$e.v,Xe.v.slice(1)];for(let $=0;$<R.v.length;($+=1)-1)_.push(R.v[$].slice(1));_.push(k.encoded),P.v&&_.push(Te.encoded),window.location.hash=_.join("-")}}),De(()=>{document.body.style.color=R.v[0]});var i=Ho();xr(_=>{pr.title="Shareogram"}),oe("contextmenu",fe,_=>_.preventDefault()),oe("load",fe,n);var s=Ve(i),a=M(s),v=M(a),l=M(v);N(v),N(a),N(s);var c=H(s,2);we(c,20,()=>({length:35}),xe,(_,$)=>{var w=Ro();const C=K(()=>Ue(0,60)+"s");V(()=>T(w,"animation-delay",p(C)));const m=K(()=>Ue(5,200)+"px");V(()=>T(w,"width",p(m)));const g=K(()=>Ue(0,100)+"%");V(()=>T(w,"left",p(g))),E(_,w)}),N(c);var d=H(c,2);Ao(d,{});var u=H(d,2);u.__click=()=>{bt.v=!1};var f=M(u);xo(f,{}),N(u),Ir(u,_=>Mo(_));var h=H(u,2);Eo(h,{});var y=H(h,2);lo(y,{}),V(()=>{Le(l,"fill",R.v[0]),T(c,"background-color",Xe.v)}),E(e,i),W()}se(["click"]);export{Fo as component,Po as universal};
