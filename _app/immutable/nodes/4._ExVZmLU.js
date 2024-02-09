import{n as ae,s as ve,x as De,y as et,e as tt,k as nt,z as rt,c as at,o as lt,t as st}from"../chunks/scheduler.cOoJ6ag-.js";import{S as ke,i as $e,e as se,t as M,s as G,c as oe,a as b,b as I,d as m,f as W,k as h,g as R,h as v,y as ot,j as be,z as it,u as x,v as ee,w as te,A as ft,l as H,m as q,x as ne,B as w,C as E,D as de,E as Ye,n as je,F as ut,o as ct,q as ht,G as dt}from"../chunks/index.Ml7HnLXC.js";import{w as gt,c as D,a as _t,x as pt,y as mt,b as Xe,l as vt,d as Le,e as K,f as Re,C as kt,g as $t,L as bt,N as wt}from"../chunks/utils.W_IG6_IL.js";import{w as Et}from"../chunks/index.8mHuCI_n.js";import"../chunks/paths.x9qPMtvM.js";const Je=typeof window<"u";let yt=Je?()=>window.performance.now():()=>Date.now(),Qe=Je?e=>requestAnimationFrame(e):ae;const re=new Set;function Ke(e){re.forEach(t=>{t.c(e)||(re.delete(t),t.f())}),re.size!==0&&Qe(Ke)}function Ct(e){let t;return re.size===0&&Qe(Ke),{promise:new Promise(n=>{re.add(t={c:e,f:n})}),abort(){re.delete(t)}}}var Fe={},ge={},_e=34,le=10,pe=13;function xe(e){return new Function("d","return {"+e.map(function(t,n){return JSON.stringify(t)+": d["+n+'] || ""'}).join(",")+"}")}function At(e,t){var n=xe(e);return function(r,s){return t(n(r),s,e)}}function Oe(e){var t=Object.create(null),n=[];return e.forEach(function(r){for(var s in r)s in t||n.push(t[s]=s)}),n}function Y(e,t){var n=e+"",r=n.length;return r<t?new Array(t-r+1).join(0)+n:n}function Tt(e){return e<0?"-"+Y(-e,6):e>9999?"+"+Y(e,6):Y(e,4)}function Nt(e){var t=e.getUTCHours(),n=e.getUTCMinutes(),r=e.getUTCSeconds(),s=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":Tt(e.getUTCFullYear())+"-"+Y(e.getUTCMonth()+1,2)+"-"+Y(e.getUTCDate(),2)+(s?"T"+Y(t,2)+":"+Y(n,2)+":"+Y(r,2)+"."+Y(s,3)+"Z":r?"T"+Y(t,2)+":"+Y(n,2)+":"+Y(r,2)+"Z":n||t?"T"+Y(t,2)+":"+Y(n,2)+"Z":"")}function St(e){var t=new RegExp('["'+e+`
\r]`),n=e.charCodeAt(0);function r(a,_){var A,k,$=s(a,function(y,p){if(A)return A(y,p-1);k=y,A=_?At(y,_):xe(y)});return $.columns=k||[],$}function s(a,_){var A=[],k=a.length,$=0,y=0,p,T=k<=0,z=!1;a.charCodeAt(k-1)===le&&--k,a.charCodeAt(k-1)===pe&&--k;function j(){if(T)return ge;if(z)return z=!1,Fe;var L,B=$,U;if(a.charCodeAt(B)===_e){for(;$++<k&&a.charCodeAt($)!==_e||a.charCodeAt(++$)===_e;);return(L=$)>=k?T=!0:(U=a.charCodeAt($++))===le?z=!0:U===pe&&(z=!0,a.charCodeAt($)===le&&++$),a.slice(B+1,L-1).replace(/""/g,'"')}for(;$<k;){if((U=a.charCodeAt(L=$++))===le)z=!0;else if(U===pe)z=!0,a.charCodeAt($)===le&&++$;else if(U!==n)continue;return a.slice(B,L)}return T=!0,a.slice(B,k)}for(;(p=j())!==ge;){for(var Z=[];p!==Fe&&p!==ge;)Z.push(p),p=j();_&&(Z=_(Z,y++))==null||A.push(Z)}return A}function i(a,_){return a.map(function(A){return _.map(function(k){return u(A[k])}).join(e)})}function f(a,_){return _==null&&(_=Oe(a)),[_.map(u).join(e)].concat(i(a,_)).join(`
`)}function o(a,_){return _==null&&(_=Oe(a)),i(a,_).join(`
`)}function c(a){return a.map(l).join(`
`)}function l(a){return a.map(u).join(e)}function u(a){return a==null?"":a instanceof Date?Nt(a):t.test(a+="")?'"'+a.replace(/"/g,'""')+'"':a}return{parse:r,parseRows:s,format:f,formatBody:o,formatRows:c,formatRow:l,formatValue:u}}var zt=St(","),Dt=zt.parse;function Yt(e){for(var t in e){var n=e[t].trim(),r,s;if(!n)n=null;else if(n==="true")n=!0;else if(n==="false")n=!1;else if(n==="NaN")n=NaN;else if(!isNaN(r=+n))n=r;else if(s=n.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/))jt&&s[4]&&!s[7]&&(n=n.replace(/-/g,"/").replace(/T/," ")),n=new Date(n);else continue;e[t]=n}return e}const jt=new Date("2019-01-01T00:00").getHours()||new Date("2019-07-01T00:00").getHours();function Lt(e){if(!e.ok)throw new Error(e.status+" "+e.statusText);return e.text()}function Rt(e,t){return fetch(e,t).then(Lt)}function Ft(e){return function(t,n,r){return arguments.length===2&&typeof n=="function"&&(r=n,n=void 0),Rt(t,n).then(function(s){return e(s,r)})}}var Ot=Ft(Dt);function Pt(e,t){let n,r;if(t===void 0)for(const s of e)s!=null&&(n===void 0?s>=s&&(n=r=s):(n>s&&(n=s),r<s&&(r=s)));else{let s=-1;for(let i of e)(i=t(i,++s,e))!=null&&(n===void 0?i>=i&&(n=r=i):(n>i&&(n=i),r<i&&(r=i)))}return[n,r]}function Ut(e,t,n){var r=null,s=D(!0),i=null,f=_t,o=null,c=gt(l);e=typeof e=="function"?e:e===void 0?pt:D(+e),t=typeof t=="function"?t:t===void 0?D(0):D(+t),n=typeof n=="function"?n:n===void 0?mt:D(+n);function l(a){var _,A,k,$=(a=Xe(a)).length,y,p=!1,T,z=new Array($),j=new Array($);for(i==null&&(o=f(T=c())),_=0;_<=$;++_){if(!(_<$&&s(y=a[_],_,a))===p)if(p=!p)A=_,o.areaStart(),o.lineStart();else{for(o.lineEnd(),o.lineStart(),k=_-1;k>=A;--k)o.point(z[k],j[k]);o.lineEnd(),o.areaEnd()}p&&(z[_]=+e(y,_,a),j[_]=+t(y,_,a),o.point(r?+r(y,_,a):z[_],n?+n(y,_,a):j[_]))}if(T)return o=null,T+""||null}function u(){return vt().defined(s).curve(f).context(i)}return l.x=function(a){return arguments.length?(e=typeof a=="function"?a:D(+a),r=null,l):e},l.x0=function(a){return arguments.length?(e=typeof a=="function"?a:D(+a),l):e},l.x1=function(a){return arguments.length?(r=a==null?null:typeof a=="function"?a:D(+a),l):r},l.y=function(a){return arguments.length?(t=typeof a=="function"?a:D(+a),n=null,l):t},l.y0=function(a){return arguments.length?(t=typeof a=="function"?a:D(+a),l):t},l.y1=function(a){return arguments.length?(n=a==null?null:typeof a=="function"?a:D(+a),l):n},l.lineX0=l.lineY0=function(){return u().x(e).y(t)},l.lineY1=function(){return u().x(e).y(n)},l.lineX1=function(){return u().x(r).y(t)},l.defined=function(a){return arguments.length?(s=typeof a=="function"?a:D(!!a),l):s},l.curve=function(a){return arguments.length?(f=a,i!=null&&(o=f(i)),l):f},l.context=function(a){return arguments.length?(a==null?i=o=null:o=f(i=a),l):i},l}function Pe(e,t){if((f=e.length)>1)for(var n=1,r,s,i=e[t[0]],f,o=i.length;n<f;++n)for(s=i,i=e[t[n]],r=0;r<o;++r)i[r][1]+=i[r][0]=isNaN(s[r][1])?s[r][0]:s[r][1]}function Ue(e){for(var t=e.length,n=new Array(t);--t>=0;)n[t]=t;return n}function Mt(e,t){return e[t]}function It(e){const t=[];return t.key=e,t}function Zt(){var e=D([]),t=Ue,n=Pe,r=Mt;function s(i){var f=Array.from(e.apply(this,arguments),It),o,c=f.length,l=-1,u;for(const a of i)for(o=0,++l;o<c;++o)(f[o][l]=[0,+r(a,f[o].key,l,i)]).data=a;for(o=0,u=Xe(t(f));o<c;++o)f[u[o]].index=o;return n(f,u),f}return s.keys=function(i){return arguments.length?(e=typeof i=="function"?i:D(Array.from(i)),s):e},s.value=function(i){return arguments.length?(r=typeof i=="function"?i:D(+i),s):r},s.order=function(i){return arguments.length?(t=i==null?Ue:typeof i=="function"?i:D(Array.from(i)),s):t},s.offset=function(i){return arguments.length?(n=i??Pe,s):n},s}function Bt(e){let t,n,r,s,i,f,o;return{c(){t=se("div"),n=se("span"),r=M(e[1]),s=G(),i=se("button"),this.h()},l(c){t=oe(c,"DIV",{class:!0});var l=b(t);n=oe(l,"SPAN",{class:!0});var u=b(n);r=I(u,e[1]),u.forEach(m),s=W(l),i=oe(l,"BUTTON",{role:!0,"aria-checked":!0,class:!0});var a=b(i);a.forEach(m),l.forEach(m),this.h()},h(){h(n,"class","label svelte-1kndpsz"),h(i,"role","switch"),h(i,"aria-checked",e[0]),h(i,"class","svelte-1kndpsz"),h(t,"class","switch svelte-1kndpsz")},m(c,l){R(c,t,l),v(t,n),v(n,r),v(t,s),v(t,i),f||(o=ot(i,"click",e[2]),f=!0)},p(c,[l]){l&2&&be(r,c[1]),l&1&&h(i,"aria-checked",c[0])},i:ae,o:ae,d(c){c&&m(t),f=!1,o()}}}function Vt(e,t,n){let{checked:r=!1}=t,{label:s}=t;const i=()=>n(0,r=!r);return e.$$set=f=>{"checked"in f&&n(0,r=f.checked),"label"in f&&n(1,s=f.label)},[r,s,i]}class Ht extends ke{constructor(t){super(),$e(this,t,Vt,Bt,ve,{checked:0,label:1})}}function Me(e){return Object.prototype.toString.call(e)==="[object Date]"}function qt(e){return e<.5?4*e*e*e:.5*Math.pow(2*e-2,3)+1}function me(e,t){if(e===t||e!==e)return()=>e;const n=typeof e;if(n!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const r=t.map((s,i)=>me(e[i],s));return s=>r.map(i=>i(s))}if(n==="object"){if(!e||!t)throw new Error("Object cannot be null");if(Me(e)&&Me(t)){e=e.getTime(),t=t.getTime();const i=t-e;return f=>new Date(e+f*i)}const r=Object.keys(t),s={};return r.forEach(i=>{s[i]=me(e[i],t[i])}),i=>{const f={};return r.forEach(o=>{f[o]=s[o](i)}),f}}if(n==="number"){const r=t-e;return s=>e+s*r}throw new Error(`Cannot interpolate ${n} values`)}function Gt(e,t={}){const n=Et(e);let r,s=e;function i(f,o){if(e==null)return n.set(e=f),Promise.resolve();s=f;let c=r,l=!1,{delay:u=0,duration:a=400,easing:_=et,interpolate:A=me}=De(De({},t),o);if(a===0)return c&&(c.abort(),c=null),n.set(e=s),Promise.resolve();const k=yt()+u;let $;return r=Ct(y=>{if(y<k)return!0;l||($=A(e,f),typeof a=="function"&&(a=a(e,f)),l=!0),c&&(c.abort(),c=null);const p=y-k;return p>a?(n.set(e=f),!1):(n.set(e=$(_(p/a))),!0)}),r.promise}return{set:i,update:(f,o)=>i(f(s,e),o),subscribe:n.subscribe}}function Ie(e,t,n){const r=e.slice();return r[14]=t[n],r[16]=n,r}function Ze(e,t,n){const r=e.slice();return r[14]=t[n],r}function Be(e,t,n){const r=e.slice();return r[19]=t[n],r}function Ve(e){let t,n,r,s,i,f,o,c,l,u,a,_,A,k,$,y,p,T,z,j,Z,L,B,U,fe,V,ue,ie,ce=K([1,2,3,100]),F=[];for(let d=0;d<4;d+=1)F[d]=He(Be(e,ce,d));let X=K(e[0]),N=[];for(let d=0;d<X.length;d+=1)N[d]=qe(Ze(e,X,d));let J=K(e[0]),S=[];for(let d=0;d<J.length;d+=1)S[d]=We(Ie(e,J,d));return{c(){t=w("svg"),n=w("defs"),r=w("mask"),s=w("path"),f=w("g"),o=w("path"),l=w("path"),a=w("g"),_=w("g");for(let d=0;d<4;d+=1)F[d].c();A=w("g"),k=w("g");for(let d=0;d<N.length;d+=1)N[d].c();$=w("g");for(let d=0;d<S.length;d+=1)S[d].c();y=w("g"),p=w("text"),T=w("tspan"),z=M("Pourcentage"),Z=G(),L=w("tspan"),B=M("de"),fe=G(),V=w("tspan"),ue=M("Noirs libres"),this.h()},l(d){t=E(d,"svg",{width:!0,height:!0});var C=b(t);n=E(C,"defs",{});var g=b(n);r=E(g,"mask",{id:!0});var O=b(r);s=E(O,"path",{fill:!0,d:!0}),b(s).forEach(m),O.forEach(m),g.forEach(m),f=E(C,"g",{class:!0,mask:!0});var he=b(f);o=E(he,"path",{class:!0,d:!0}),b(o).forEach(m),l=E(he,"path",{class:!0,d:!0}),b(l).forEach(m),he.forEach(m),a=E(C,"g",{class:!0});var we=b(a);_=E(we,"g",{class:!0});var Ee=b(_);for(let P=0;P<4;P+=1)F[P].l(Ee);Ee.forEach(m),we.forEach(m),A=E(C,"g",{class:!0});var ye=b(A);k=E(ye,"g",{class:!0});var Ce=b(k);for(let P=0;P<N.length;P+=1)N[P].l(Ce);Ce.forEach(m),ye.forEach(m),$=E(C,"g",{class:!0});var Ae=b($);for(let P=0;P<S.length;P+=1)S[P].l(Ae);Ae.forEach(m),y=E(C,"g",{class:!0});var Te=b(y);p=E(Te,"text",{y:!0,class:!0});var Q=b(p);T=E(Q,"tspan",{x:!0});var Ne=b(T);z=I(Ne,"Pourcentage"),Ne.forEach(m),Z=W(Q),L=E(Q,"tspan",{x:!0,dy:!0});var Se=b(L);B=I(Se,"de"),Se.forEach(m),fe=W(Q),V=E(Q,"tspan",{x:!0,dy:!0});var ze=b(V);ue=I(ze,"Noirs libres"),ze.forEach(m),Q.forEach(m),Te.forEach(m),C.forEach(m),this.h()},h(){h(s,"fill","white"),h(s,"d",i=[`M${e[7].left},${e[5]-e[7].bottom}`,`L${e[1]-e[7].right},${e[5]-e[7].bottom}`,`L${e[1]-e[7].right},${e[7].top}`,`L${e[7].left},${e[7].top}`,...Array.from({length:128},e[12]),"Z"].join(" ")),h(r,"id","graph"),h(o,"class","area slave svelte-f9e888"),h(o,"d",c=e[6](e[9][1])),h(l,"class","area free svelte-f9e888"),h(l,"d",u=e[6](e[9][0])),h(f,"class","areas"),h(f,"mask","url(#graph)"),h(_,"class","ticks"),h(a,"class","axis x-axis"),h(k,"class","ticks"),h(A,"class","axis y-axis"),h($,"class","values"),h(T,"x",j=e[1]-e[7].right*.5),h(L,"x",U=e[1]-e[7].right*.5),h(L,"dy","1.1em"),h(V,"x",ie=e[1]-e[7].right*.5),h(V,"dy","1.1em"),h(p,"y",15),h(p,"class","svelte-f9e888"),h(y,"class","legend"),h(t,"width",e[1]),h(t,"height",e[5])},m(d,C){R(d,t,C),v(t,n),v(n,r),v(r,s),v(t,f),v(f,o),v(f,l),v(t,a),v(a,_);for(let g=0;g<4;g+=1)F[g]&&F[g].m(_,null);v(t,A),v(A,k);for(let g=0;g<N.length;g+=1)N[g]&&N[g].m(k,null);v(t,$);for(let g=0;g<S.length;g+=1)S[g]&&S[g].m($,null);v(t,y),v(y,p),v(p,T),v(T,z),v(p,Z),v(p,L),v(L,B),v(p,fe),v(p,V),v(V,ue)},p(d,C){if(C&34&&i!==(i=[`M${d[7].left},${d[5]-d[7].bottom}`,`L${d[1]-d[7].right},${d[5]-d[7].bottom}`,`L${d[1]-d[7].right},${d[7].top}`,`L${d[7].left},${d[7].top}`,...Array.from({length:128},d[12]),"Z"].join(" "))&&h(s,"d",i),C&64&&c!==(c=d[6](d[9][1]))&&h(o,"d",c),C&64&&u!==(u=d[6](d[9][0]))&&h(l,"d",u),C&138){ce=K([1,2,3,100]);let g;for(g=0;g<4;g+=1){const O=Be(d,ce,g);F[g]?F[g].p(O,C):(F[g]=He(O),F[g].c(),F[g].m(_,null))}for(;g<4;g+=1)F[g].d(1)}if(C&147){X=K(d[0]);let g;for(g=0;g<X.length;g+=1){const O=Ze(d,X,g);N[g]?N[g].p(O,C):(N[g]=qe(O),N[g].c(),N[g].m(k,null))}for(;g<N.length;g+=1)N[g].d(1);N.length=X.length}if(C&147){J=K(d[0]);let g;for(g=0;g<J.length;g+=1){const O=Ie(d,J,g);S[g]?S[g].p(O,C):(S[g]=We(O),S[g].c(),S[g].m($,null))}for(;g<S.length;g+=1)S[g].d(1);S.length=J.length}C&2&&j!==(j=d[1]-d[7].right*.5)&&h(T,"x",j),C&2&&U!==(U=d[1]-d[7].right*.5)&&h(L,"x",U),C&2&&ie!==(ie=d[1]-d[7].right*.5)&&h(V,"x",ie),C&2&&h(t,"width",d[1]),C&32&&h(t,"height",d[5])},d(d){d&&m(t),de(F,d),de(N,d),de(S,d)}}}function He(e){let t,n,r,s,i,f,o,c;return{c(){t=w("g"),n=w("text"),r=M(e[19]),s=M(`%
							`),f=w("line"),this.h()},l(l){t=E(l,"g",{class:!0});var u=b(t);n=E(u,"text",{x:!0,y:!0,class:!0});var a=b(n);r=I(a,e[19]),s=I(a,`%
							`),a.forEach(m),f=E(u,"line",{class:!0,x1:!0,y1:!0,x2:!0,y2:!0}),b(f).forEach(m),u.forEach(m),this.h()},h(){h(n,"x",i=e[3](e[19])),h(n,"y",e[7].top-10),h(n,"class","svelte-f9e888"),h(f,"class","tick-line svelte-f9e888"),h(f,"x1",o=e[3](e[19])),h(f,"y1",e[7].top-6),h(f,"x2",c=e[3](e[19])),h(f,"y2",e[7].top),h(t,"class","tick svelte-f9e888"),Ye(t,"hidden",e[1]-e[7].right-e[3](e[19])<32||e[3](e[19])<e[7].left)},m(l,u){R(l,t,u),v(t,n),v(n,r),v(n,s),v(t,f)},p(l,u){u&8&&i!==(i=l[3](l[19]))&&h(n,"x",i),u&8&&o!==(o=l[3](l[19]))&&h(f,"x1",o),u&8&&c!==(c=l[3](l[19]))&&h(f,"x2",c),u&138&&Ye(t,"hidden",l[1]-l[7].right-l[3](l[19])<32||l[3](l[19])<l[7].left)},d(l){l&&m(t)}}}function qe(e){let t,n,r=e[14].Year+"",s,i,f,o,c,l;return{c(){t=w("g"),n=w("text"),s=M(r),f=w("line"),this.h()},l(u){t=E(u,"g",{class:!0});var a=b(t);n=E(a,"text",{x:!0,y:!0,class:!0});var _=b(n);s=I(_,r),_.forEach(m),f=E(a,"line",{class:!0,x1:!0,x2:!0,y1:!0,y2:!0}),b(f).forEach(m),a.forEach(m),this.h()},h(){h(n,"x",20),h(n,"y",i=e[4](e[14].Year)),h(n,"class","svelte-f9e888"),h(f,"class","grid-line svelte-f9e888"),h(f,"x1",e[7].left),h(f,"x2",o=e[1]-e[7].right),h(f,"y1",c=e[4](e[14].Year)),h(f,"y2",l=e[4](e[14].Year)),h(t,"class","tick svelte-f9e888")},m(u,a){R(u,t,a),v(t,n),v(n,s),v(t,f)},p(u,a){a&1&&r!==(r=u[14].Year+"")&&be(s,r),a&17&&i!==(i=u[4](u[14].Year))&&h(n,"y",i),a&2&&o!==(o=u[1]-u[7].right)&&h(f,"x2",o),a&17&&c!==(c=u[4](u[14].Year))&&h(f,"y1",c),a&17&&l!==(l=u[4](u[14].Year))&&h(f,"y2",l)},d(u){u&&m(t)}}}function Ge(e){let t;return{c(){t=M(" %")},l(n){t=I(n," %")},m(n,r){R(n,t,r)},d(n){n&&m(t)}}}function We(e){let t,n,r=Re(".1~f")(e[14].Free)+"",s,i,f,o=(e[16]===0||e[16]===e[0].length-1)&&Ge();return{c(){t=w("g"),n=w("text"),s=M(r),o&&o.c(),this.h()},l(c){t=E(c,"g",{class:!0});var l=b(t);n=E(l,"text",{x:!0,y:!0,class:!0});var u=b(n);s=I(u,r),o&&o.l(u),u.forEach(m),l.forEach(m),this.h()},h(){h(n,"x",i=e[1]-e[7].right*.5),h(n,"y",f=e[4](e[14].Year)),h(n,"class","svelte-f9e888"),h(t,"class","value svelte-f9e888")},m(c,l){R(c,t,l),v(t,n),v(n,s),o&&o.m(n,null)},p(c,l){l&1&&r!==(r=Re(".1~f")(c[14].Free)+"")&&be(s,r),c[16]===0||c[16]===c[0].length-1?o||(o=Ge(),o.c(),o.m(n,null)):o&&(o.d(1),o=null),l&2&&i!==(i=c[1]-c[7].right*.5)&&h(n,"x",i),l&17&&f!==(f=c[4](c[14].Year))&&h(n,"y",f)},d(c){c&&m(t),o&&o.d()}}}function Wt(e){let t,n,r,s,i,f;function o(u){e[11](u)}let c={label:"Zoomer"};e[2]!==void 0&&(c.checked=e[2]),n=new Ht({props:c}),tt.push(()=>it(n,"checked",o));let l=e[1]&&Ve(e);return{c(){t=se("div"),x(n.$$.fragment),s=G(),l&&l.c(),this.h()},l(u){t=oe(u,"DIV",{class:!0});var a=b(t);ee(n.$$.fragment,a),s=W(a),l&&l.l(a),a.forEach(m),this.h()},h(){h(t,"class","chart svelte-f9e888"),nt(()=>e[13].call(t))},m(u,a){R(u,t,a),te(n,t,null),v(t,s),l&&l.m(t,null),i=ft(t,e[13].bind(t)),f=!0},p(u,[a]){const _={};!r&&a&4&&(r=!0,_.checked=u[2],rt(()=>r=!1)),n.$set(_),u[1]?l?l.p(u,a):(l=Ve(u),l.c(),l.m(t,null)):l&&(l.d(1),l=null)},i(u){f||(H(n.$$.fragment,u),f=!0)},o(u){q(n.$$.fragment,u),f=!1},d(u){u&&m(t),ne(n),l&&l.d(),i()}}}function Xt(e,t,n){let r,s,i,f,o,{data:c}=t,l,u=!1;const a={top:60,right:70,bottom:20,left:60},_=Gt([100,0],{duration:1200,easing:qt});at(e,_,p=>n(10,o=p));const A=Zt().keys(["Free","Slave"])(c);function k(p){u=p,n(2,u)}const $=(p,T)=>{const z=a.left-10+Math.random()*10,j=a.top+T*(r-a.top-a.bottom)/128;return`L${z},${j}`};function y(){l=this.clientWidth,n(1,l)}return e.$$set=p=>{"data"in p&&n(0,c=p.data)},e.$$.update=()=>{e.$$.dirty&2&&n(5,r=l*1.8),e.$$.dirty&1026&&n(3,s=Le().domain(o).range([a.left,l-a.right])),e.$$.dirty&33&&n(4,i=Le().domain(Pt(c,p=>p.Year)).range([a.top,r-a.bottom])),e.$$.dirty&24&&n(6,f=Ut().y(p=>i(p.data.Year)).x0(p=>s(p[0])).x1(p=>s(p[1]))),e.$$.dirty&4&&_.set(u?[3,0]:[100,0])},[c,l,u,s,i,r,f,a,_,A,o,k,$,y]}class Jt extends ke{constructor(t){super(),$e(this,t,Xt,Wt,ve,{data:0})}}function Qt(e){let t,n,r,s,i,f;return t=new kt({props:{$$slots:{default:[xt]},$$scope:{ctx:e}}}),r=new Jt({props:{data:e[1]}}),i=new $t({props:{$$slots:{week:[tn],default:[en]},$$scope:{ctx:e}}}),{c(){x(t.$$.fragment),n=G(),x(r.$$.fragment),s=G(),x(i.$$.fragment)},l(o){ee(t.$$.fragment,o),n=W(o),ee(r.$$.fragment,o),s=W(o),ee(i.$$.fragment,o)},m(o,c){te(t,o,c),R(o,n,c),te(r,o,c),R(o,s,c),te(i,o,c),f=!0},p(o,c){const l={};c&4&&(l.$$scope={dirty:c,ctx:o}),t.$set(l);const u={};c&2&&(u.data=o[1]),r.$set(u);const a={};c&4&&(a.$$scope={dirty:c,ctx:o}),i.$set(a)},i(o){f||(H(t.$$.fragment,o),H(r.$$.fragment,o),H(i.$$.fragment,o),f=!0)},o(o){q(t.$$.fragment,o),q(r.$$.fragment,o),q(i.$$.fragment,o),f=!1},d(o){o&&(m(n),m(s)),ne(t,o),ne(r,o),ne(i,o)}}}function Kt(e){let t,n;return t=new bt({}),{c(){x(t.$$.fragment)},l(r){ee(t.$$.fragment,r)},m(r,s){te(t,r,s),n=!0},p:ae,i(r){n||(H(t.$$.fragment,r),n=!0)},o(r){q(t.$$.fragment,r),n=!1},d(r){ne(t,r)}}}function xt(e){let t;return{c(){t=M("Esclaves et Noirs libres")},l(n){t=I(n,"Esclaves et Noirs libres")},m(n,r){R(n,t,r)},d(n){n&&m(t)}}}function en(e){let t,n;return t=new wt({props:{prev:"/challenge01"}}),{c(){x(t.$$.fragment)},l(r){ee(t.$$.fragment,r)},m(r,s){te(t,r,s),n=!0},p:ae,i(r){n||(H(t.$$.fragment,r),n=!0)},o(r){q(t.$$.fragment,r),n=!1},d(r){ne(t,r)}}}function tn(e){let t,n="Semaine 2";return{c(){t=se("a"),t.textContent=n,this.h()},l(r){t=oe(r,"A",{href:!0,target:!0,slot:!0,"data-svelte-h":!0}),dt(t)!=="svelte-2cpfzs"&&(t.textContent=n),this.h()},h(){h(t,"href","https://raw.githubusercontent.com/ajstarks/dubois-data-portraits/master/challenge/2024/challenge02/original-plate-12.jpg"),h(t,"target","_blank"),h(t,"slot","week")},m(r,s){R(r,t,s)},p:ae,d(r){r&&m(t)}}}function nn(e){let t,n,r,s,i;const f=[Kt,Qt],o=[];function c(l,u){return l[0]?1:0}return n=c(e),r=o[n]=f[n](e),{c(){t=G(),r.c(),s=je(),this.h()},l(l){ut("svelte-574e5b",document.head).forEach(m),t=W(l),r.l(l),s=je(),this.h()},h(){document.title="Du Bois Challenge 2024 | Semaine 2"},m(l,u){R(l,t,u),o[n].m(l,u),R(l,s,u),i=!0},p(l,[u]){let a=n;n=c(l),n===a?o[n].p(l,u):(ht(),q(o[a],1,1,()=>{o[a]=null}),ct(),r=o[n],r?r.p(l,u):(r=o[n]=f[n](l),r.c()),H(r,1),r.m(s.parentNode,s))},i(l){i||(H(r),i=!0)},o(l){q(r),i=!1},d(l){l&&(m(t),m(s)),o[n].d(l)}}}function rn(e,t,n){let r=!1,s;return lt(async()=>{n(1,s=await Ot("data/challenge02/data.csv",Yt)),await st(),balanceText(),setTimeout(()=>n(0,r=!0),500)}),[r,s]}class un extends ke{constructor(t){super(),$e(this,t,rn,nn,ve,{})}}export{un as component};