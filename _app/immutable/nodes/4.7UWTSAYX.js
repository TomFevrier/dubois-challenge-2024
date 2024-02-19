import{n as ne,s as ge,x as ze,y as Je,f as Ke,a as Qe,z as xe,d as et,o as tt,t as nt}from"../chunks/scheduler.CEIrVncP.js";import{S as de,i as _e,e as ee,j as O,s as V,c as te,a as k,k as Z,d as _,l as G,b as h,f as C,m as v,C as rt,n as pe,F as lt,v as W,w as J,x as K,g as at,t as P,h as M,y as Q,z as $,A as b,B as ce,G as Se,o as Ye,E as st,p as Ce,D as it,r as Ne}from"../chunks/index.sbiNFhB7.js";import{w as ot,n as Y,o as ft,x as ut,y as ct,q as Xe,s as ht,j as Le,c as U,k as De,L as gt,C as dt,d as _t,N as pt,g as mt}from"../chunks/utils.k10X1Xwd.js";import{w as vt}from"../chunks/index.vxW_BQIW.js";import"../chunks/paths.4JLrevaf.js";import{c as kt,a as $t}from"../chunks/dsv.fs0VKOqp.js";const He=typeof window<"u";let bt=He?()=>window.performance.now():()=>Date.now(),Ue=He?t=>requestAnimationFrame(t):ne;const x=new Set;function We(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&Ue(We)}function wt(t){let e;return x.size===0&&Ue(We),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}function yt(t,e){let n,r;if(e===void 0)for(const f of t)f!=null&&(n===void 0?f>=f&&(n=r=f):(n>f&&(n=f),r<f&&(r=f)));else{let f=-1;for(let a of t)(a=e(a,++f,t))!=null&&(n===void 0?a>=a&&(n=r=a):(n>a&&(n=a),r<a&&(r=a)))}return[n,r]}function Et(t,e,n){var r=null,f=Y(!0),a=null,s=ft,l=null,u=ot(i);t=typeof t=="function"?t:t===void 0?ut:Y(+t),e=typeof e=="function"?e:e===void 0?Y(0):Y(+e),n=typeof n=="function"?n:n===void 0?ct:Y(+n);function i(o){var p,N,y,E=(o=Xe(o)).length,A,m=!1,L,q=new Array(E),F=new Array(E);for(a==null&&(l=s(L=u())),p=0;p<=E;++p){if(!(p<E&&f(A=o[p],p,o))===m)if(m=!m)N=p,l.areaStart(),l.lineStart();else{for(l.lineEnd(),l.lineStart(),y=p-1;y>=N;--y)l.point(q[y],F[y]);l.lineEnd(),l.areaEnd()}m&&(q[p]=+t(A,p,o),F[p]=+e(A,p,o),l.point(r?+r(A,p,o):q[p],n?+n(A,p,o):F[p]))}if(L)return l=null,L+""||null}function c(){return ht().defined(f).curve(s).context(a)}return i.x=function(o){return arguments.length?(t=typeof o=="function"?o:Y(+o),r=null,i):t},i.x0=function(o){return arguments.length?(t=typeof o=="function"?o:Y(+o),i):t},i.x1=function(o){return arguments.length?(r=o==null?null:typeof o=="function"?o:Y(+o),i):r},i.y=function(o){return arguments.length?(e=typeof o=="function"?o:Y(+o),n=null,i):e},i.y0=function(o){return arguments.length?(e=typeof o=="function"?o:Y(+o),i):e},i.y1=function(o){return arguments.length?(n=o==null?null:typeof o=="function"?o:Y(+o),i):n},i.lineX0=i.lineY0=function(){return c().x(t).y(e)},i.lineY1=function(){return c().x(t).y(n)},i.lineX1=function(){return c().x(r).y(e)},i.defined=function(o){return arguments.length?(f=typeof o=="function"?o:Y(!!o),i):f},i.curve=function(o){return arguments.length?(s=o,a!=null&&(l=s(a)),i):s},i.context=function(o){return arguments.length?(o==null?a=l=null:l=s(a=o),i):a},i}function Pe(t,e){if((s=t.length)>1)for(var n=1,r,f,a=t[e[0]],s,l=a.length;n<s;++n)for(f=a,a=t[e[n]],r=0;r<l;++r)a[r][1]+=a[r][0]=isNaN(f[r][1])?f[r][0]:f[r][1]}function Te(t){for(var e=t.length,n=new Array(e);--e>=0;)n[e]=e;return n}function At(t,e){return t[e]}function zt(t){const e=[];return e.key=t,e}function St(){var t=Y([]),e=Te,n=Pe,r=At;function f(a){var s=Array.from(t.apply(this,arguments),zt),l,u=s.length,i=-1,c;for(const o of a)for(l=0,++i;l<u;++l)(s[l][i]=[0,+r(o,s[l].key,i,a)]).data=o;for(l=0,c=Xe(e(s));l<u;++l)s[c[l]].index=l;return n(s,c),s}return f.keys=function(a){return arguments.length?(t=typeof a=="function"?a:Y(Array.from(a)),f):t},f.value=function(a){return arguments.length?(r=typeof a=="function"?a:Y(+a),f):r},f.order=function(a){return arguments.length?(e=a==null?Te:typeof a=="function"?a:Y(Array.from(a)),f):e},f.offset=function(a){return arguments.length?(n=a??Pe,f):n},f}function Yt(t){let e,n,r,f,a,s,l;return{c(){e=ee("div"),n=ee("span"),r=O(t[1]),f=V(),a=ee("button"),this.h()},l(u){e=te(u,"DIV",{class:!0});var i=k(e);n=te(i,"SPAN",{class:!0});var c=k(n);r=Z(c,t[1]),c.forEach(_),f=G(i),a=te(i,"BUTTON",{role:!0,"aria-checked":!0,class:!0});var o=k(a);o.forEach(_),i.forEach(_),this.h()},h(){h(n,"class","label svelte-1kndpsz"),h(a,"role","switch"),h(a,"aria-checked",t[0]),h(a,"class","svelte-1kndpsz"),h(e,"class","switch svelte-1kndpsz")},m(u,i){C(u,e,i),v(e,n),v(n,r),v(e,f),v(e,a),s||(l=rt(a,"click",t[2]),s=!0)},p(u,[i]){i&2&&pe(r,u[1]),i&1&&h(a,"aria-checked",u[0])},i:ne,o:ne,d(u){u&&_(e),s=!1,l()}}}function Ct(t,e,n){let{checked:r=!1}=e,{label:f}=e;const a=()=>n(0,r=!r);return t.$$set=s=>{"checked"in s&&n(0,r=s.checked),"label"in s&&n(1,f=s.label)},[r,f,a]}class Nt extends de{constructor(e){super(),_e(this,e,Ct,Yt,ge,{checked:0,label:1})}}function je(t){return Object.prototype.toString.call(t)==="[object Date]"}function Lt(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function he(t,e){if(t===e||t!==t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const r=e.map((f,a)=>he(t[a],f));return f=>r.map(a=>a(f))}if(n==="object"){if(!t||!e)throw new Error("Object cannot be null");if(je(t)&&je(e)){t=t.getTime(),e=e.getTime();const a=e-t;return s=>new Date(t+s*a)}const r=Object.keys(e),f={};return r.forEach(a=>{f[a]=he(t[a],e[a])}),a=>{const s={};return r.forEach(l=>{s[l]=f[l](a)}),s}}if(n==="number"){const r=e-t;return f=>t+f*r}throw new Error(`Cannot interpolate ${n} values`)}function Dt(t,e={}){const n=vt(t);let r,f=t;function a(s,l){if(t==null)return n.set(t=s),Promise.resolve();f=s;let u=r,i=!1,{delay:c=0,duration:o=400,easing:p=Je,interpolate:N=he}=ze(ze({},e),l);if(o===0)return u&&(u.abort(),u=null),n.set(t=f),Promise.resolve();const y=bt()+c;let E;return r=wt(A=>{if(A<y)return!0;i||(E=N(t,s),typeof o=="function"&&(o=o(t,s)),i=!0),u&&(u.abort(),u=null);const m=A-y;return m>o?(n.set(t=s),!1):(n.set(t=E(p(m/o))),!0)}),r.promise}return{set:a,update:(s,l)=>a(s(f,t),l),subscribe:n.subscribe}}function Fe(t,e,n){const r=t.slice();return r[14]=e[n],r[16]=n,r}function Me(t,e,n){const r=t.slice();return r[14]=e[n],r}function Oe(t,e,n){const r=t.slice();return r[19]=e[n],r}function Ze(t){let e,n,r,f,a,s,l,u,i,c,o,p,N,y,E,A,m,L,q,F,ae,B,se,re,ie,I,oe,le,fe=U([1,2,3,100]),D=[];for(let g=0;g<4;g+=1)D[g]=qe(Oe(t,fe,g));let R=U(t[0]),z=[];for(let g=0;g<R.length;g+=1)z[g]=Be(Me(t,R,g));let X=U(t[0]),S=[];for(let g=0;g<X.length;g+=1)S[g]=Ve(Fe(t,X,g));return{c(){e=$("svg"),n=$("defs"),r=$("mask"),f=$("path"),s=$("g"),l=$("path"),i=$("path"),o=$("g"),p=$("g");for(let g=0;g<4;g+=1)D[g].c();N=$("g"),y=$("g");for(let g=0;g<z.length;g+=1)z[g].c();E=$("g");for(let g=0;g<S.length;g+=1)S[g].c();A=$("g"),m=$("text"),L=$("tspan"),q=O("Pourcentage"),ae=V(),B=$("tspan"),se=O("de"),ie=V(),I=$("tspan"),oe=O("Noirs libres"),this.h()},l(g){e=b(g,"svg",{width:!0,height:!0});var w=k(e);n=b(w,"defs",{});var d=k(n);r=b(d,"mask",{id:!0});var T=k(r);f=b(T,"path",{fill:!0,d:!0}),k(f).forEach(_),T.forEach(_),d.forEach(_),s=b(w,"g",{class:!0,mask:!0});var ue=k(s);l=b(ue,"path",{class:!0,d:!0}),k(l).forEach(_),i=b(ue,"path",{class:!0,d:!0}),k(i).forEach(_),ue.forEach(_),o=b(w,"g",{class:!0});var me=k(o);p=b(me,"g",{class:!0});var ve=k(p);for(let j=0;j<4;j+=1)D[j].l(ve);ve.forEach(_),me.forEach(_),N=b(w,"g",{class:!0});var ke=k(N);y=b(ke,"g",{class:!0});var $e=k(y);for(let j=0;j<z.length;j+=1)z[j].l($e);$e.forEach(_),ke.forEach(_),E=b(w,"g",{class:!0});var be=k(E);for(let j=0;j<S.length;j+=1)S[j].l(be);be.forEach(_),A=b(w,"g",{class:!0});var we=k(A);m=b(we,"text",{y:!0,class:!0});var H=k(m);L=b(H,"tspan",{x:!0});var ye=k(L);q=Z(ye,"Pourcentage"),ye.forEach(_),ae=G(H),B=b(H,"tspan",{x:!0,dy:!0});var Ee=k(B);se=Z(Ee,"de"),Ee.forEach(_),ie=G(H),I=b(H,"tspan",{x:!0,dy:!0});var Ae=k(I);oe=Z(Ae,"Noirs libres"),Ae.forEach(_),H.forEach(_),we.forEach(_),w.forEach(_),this.h()},h(){h(f,"fill","white"),h(f,"d",a=[`M${t[7].left},${t[5]-t[7].bottom}`,`L${t[1]-t[7].right},${t[5]-t[7].bottom}`,`L${t[1]-t[7].right},${t[7].top}`,`L${t[7].left},${t[7].top}`,...Array.from({length:128},t[12]),"Z"].join(" ")),h(r,"id","graph"),h(l,"class","area slave svelte-f9e888"),h(l,"d",u=t[6](t[9][1])),h(i,"class","area free svelte-f9e888"),h(i,"d",c=t[6](t[9][0])),h(s,"class","areas"),h(s,"mask","url(#graph)"),h(p,"class","ticks"),h(o,"class","axis x-axis"),h(y,"class","ticks"),h(N,"class","axis y-axis"),h(E,"class","values"),h(L,"x",F=t[1]-t[7].right*.5),h(B,"x",re=t[1]-t[7].right*.5),h(B,"dy","1.1em"),h(I,"x",le=t[1]-t[7].right*.5),h(I,"dy","1.1em"),h(m,"y",15),h(m,"class","svelte-f9e888"),h(A,"class","legend"),h(e,"width",t[1]),h(e,"height",t[5])},m(g,w){C(g,e,w),v(e,n),v(n,r),v(r,f),v(e,s),v(s,l),v(s,i),v(e,o),v(o,p);for(let d=0;d<4;d+=1)D[d]&&D[d].m(p,null);v(e,N),v(N,y);for(let d=0;d<z.length;d+=1)z[d]&&z[d].m(y,null);v(e,E);for(let d=0;d<S.length;d+=1)S[d]&&S[d].m(E,null);v(e,A),v(A,m),v(m,L),v(L,q),v(m,ae),v(m,B),v(B,se),v(m,ie),v(m,I),v(I,oe)},p(g,w){if(w&34&&a!==(a=[`M${g[7].left},${g[5]-g[7].bottom}`,`L${g[1]-g[7].right},${g[5]-g[7].bottom}`,`L${g[1]-g[7].right},${g[7].top}`,`L${g[7].left},${g[7].top}`,...Array.from({length:128},g[12]),"Z"].join(" "))&&h(f,"d",a),w&64&&u!==(u=g[6](g[9][1]))&&h(l,"d",u),w&64&&c!==(c=g[6](g[9][0]))&&h(i,"d",c),w&138){fe=U([1,2,3,100]);let d;for(d=0;d<4;d+=1){const T=Oe(g,fe,d);D[d]?D[d].p(T,w):(D[d]=qe(T),D[d].c(),D[d].m(p,null))}for(;d<4;d+=1)D[d].d(1)}if(w&147){R=U(g[0]);let d;for(d=0;d<R.length;d+=1){const T=Me(g,R,d);z[d]?z[d].p(T,w):(z[d]=Be(T),z[d].c(),z[d].m(y,null))}for(;d<z.length;d+=1)z[d].d(1);z.length=R.length}if(w&147){X=U(g[0]);let d;for(d=0;d<X.length;d+=1){const T=Fe(g,X,d);S[d]?S[d].p(T,w):(S[d]=Ve(T),S[d].c(),S[d].m(E,null))}for(;d<S.length;d+=1)S[d].d(1);S.length=X.length}w&2&&F!==(F=g[1]-g[7].right*.5)&&h(L,"x",F),w&2&&re!==(re=g[1]-g[7].right*.5)&&h(B,"x",re),w&2&&le!==(le=g[1]-g[7].right*.5)&&h(I,"x",le),w&2&&h(e,"width",g[1]),w&32&&h(e,"height",g[5])},d(g){g&&_(e),ce(D,g),ce(z,g),ce(S,g)}}}function qe(t){let e,n,r,f,a,s,l,u;return{c(){e=$("g"),n=$("text"),r=O(t[19]),f=O(`%
							`),s=$("line"),this.h()},l(i){e=b(i,"g",{class:!0});var c=k(e);n=b(c,"text",{x:!0,y:!0,class:!0});var o=k(n);r=Z(o,t[19]),f=Z(o,`%
							`),o.forEach(_),s=b(c,"line",{class:!0,x1:!0,y1:!0,x2:!0,y2:!0}),k(s).forEach(_),c.forEach(_),this.h()},h(){h(n,"x",a=t[3](t[19])),h(n,"y",t[7].top-10),h(n,"class","svelte-f9e888"),h(s,"class","tick-line svelte-f9e888"),h(s,"x1",l=t[3](t[19])),h(s,"y1",t[7].top-6),h(s,"x2",u=t[3](t[19])),h(s,"y2",t[7].top),h(e,"class","tick svelte-f9e888"),Se(e,"hidden",t[1]-t[7].right-t[3](t[19])<32||t[3](t[19])<t[7].left)},m(i,c){C(i,e,c),v(e,n),v(n,r),v(n,f),v(e,s)},p(i,c){c&8&&a!==(a=i[3](i[19]))&&h(n,"x",a),c&8&&l!==(l=i[3](i[19]))&&h(s,"x1",l),c&8&&u!==(u=i[3](i[19]))&&h(s,"x2",u),c&138&&Se(e,"hidden",i[1]-i[7].right-i[3](i[19])<32||i[3](i[19])<i[7].left)},d(i){i&&_(e)}}}function Be(t){let e,n,r=t[14].Year+"",f,a,s,l,u,i;return{c(){e=$("g"),n=$("text"),f=O(r),s=$("line"),this.h()},l(c){e=b(c,"g",{class:!0});var o=k(e);n=b(o,"text",{x:!0,y:!0,class:!0});var p=k(n);f=Z(p,r),p.forEach(_),s=b(o,"line",{class:!0,x1:!0,x2:!0,y1:!0,y2:!0}),k(s).forEach(_),o.forEach(_),this.h()},h(){h(n,"x",20),h(n,"y",a=t[4](t[14].Year)),h(n,"class","svelte-f9e888"),h(s,"class","grid-line svelte-f9e888"),h(s,"x1",t[7].left),h(s,"x2",l=t[1]-t[7].right),h(s,"y1",u=t[4](t[14].Year)),h(s,"y2",i=t[4](t[14].Year)),h(e,"class","tick svelte-f9e888")},m(c,o){C(c,e,o),v(e,n),v(n,f),v(e,s)},p(c,o){o&1&&r!==(r=c[14].Year+"")&&pe(f,r),o&17&&a!==(a=c[4](c[14].Year))&&h(n,"y",a),o&2&&l!==(l=c[1]-c[7].right)&&h(s,"x2",l),o&17&&u!==(u=c[4](c[14].Year))&&h(s,"y1",u),o&17&&i!==(i=c[4](c[14].Year))&&h(s,"y2",i)},d(c){c&&_(e)}}}function Ie(t){let e;return{c(){e=O(" %")},l(n){e=Z(n," %")},m(n,r){C(n,e,r)},d(n){n&&_(e)}}}function Ve(t){let e,n,r=De(".1~f")(t[14].Free)+"",f,a,s,l=(t[16]===0||t[16]===t[0].length-1)&&Ie();return{c(){e=$("g"),n=$("text"),f=O(r),l&&l.c(),this.h()},l(u){e=b(u,"g",{class:!0});var i=k(e);n=b(i,"text",{x:!0,y:!0,class:!0});var c=k(n);f=Z(c,r),l&&l.l(c),c.forEach(_),i.forEach(_),this.h()},h(){h(n,"x",a=t[1]-t[7].right*.5),h(n,"y",s=t[4](t[14].Year)),h(n,"class","svelte-f9e888"),h(e,"class","value svelte-f9e888")},m(u,i){C(u,e,i),v(e,n),v(n,f),l&&l.m(n,null)},p(u,i){i&1&&r!==(r=De(".1~f")(u[14].Free)+"")&&pe(f,r),u[16]===0||u[16]===u[0].length-1?l||(l=Ie(),l.c(),l.m(n,null)):l&&(l.d(1),l=null),i&2&&a!==(a=u[1]-u[7].right*.5)&&h(n,"x",a),i&17&&s!==(s=u[4](u[14].Year))&&h(n,"y",s)},d(u){u&&_(e),l&&l.d()}}}function Pt(t){let e,n,r,f,a,s;function l(c){t[11](c)}let u={label:"Zoomer"};t[2]!==void 0&&(u.checked=t[2]),n=new Nt({props:u}),Ke.push(()=>lt(n,"checked",l));let i=t[1]&&Ze(t);return{c(){e=ee("div"),W(n.$$.fragment),f=V(),i&&i.c(),this.h()},l(c){e=te(c,"DIV",{class:!0});var o=k(e);J(n.$$.fragment,o),f=G(o),i&&i.l(o),o.forEach(_),this.h()},h(){h(e,"class","chart svelte-f9e888"),Qe(()=>t[13].call(e))},m(c,o){C(c,e,o),K(n,e,null),v(e,f),i&&i.m(e,null),a=at(e,t[13].bind(e)),s=!0},p(c,[o]){const p={};!r&&o&4&&(r=!0,p.checked=c[2],xe(()=>r=!1)),n.$set(p),c[1]?i?i.p(c,o):(i=Ze(c),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},i(c){s||(P(n.$$.fragment,c),s=!0)},o(c){M(n.$$.fragment,c),s=!1},d(c){c&&_(e),Q(n),i&&i.d(),a()}}}function Tt(t,e,n){let r,f,a,s,l,{data:u}=e,i,c=!1;const o={top:60,right:70,bottom:20,left:60},p=Dt([100,0],{duration:1200,easing:Lt});et(t,p,m=>n(10,l=m));const N=St().keys(["Free","Slave"])(u);function y(m){c=m,n(2,c)}const E=(m,L)=>{const q=o.left-10+Math.random()*10,F=o.top+L*(r-o.top-o.bottom)/128;return`L${q},${F}`};function A(){i=this.clientWidth,n(1,i)}return t.$$set=m=>{"data"in m&&n(0,u=m.data)},t.$$.update=()=>{t.$$.dirty&2&&n(5,r=i*1.8),t.$$.dirty&1026&&n(3,f=Le().domain(l).range([o.left,i-o.right])),t.$$.dirty&33&&n(4,a=Le().domain(yt(u,m=>m.Year)).range([o.top,r-o.bottom])),t.$$.dirty&24&&n(6,s=Et().y(m=>a(m.data.Year)).x0(m=>f(m[0])).x1(m=>f(m[1]))),t.$$.dirty&4&&p.set(c?[3,0]:[100,0])},[u,i,c,f,a,r,s,o,p,N,l,y,E,A]}class jt extends de{constructor(e){super(),_e(this,e,Tt,Pt,ge,{data:0})}}function Ge(t){let e,n;return e=new gt({}),{c(){W(e.$$.fragment)},l(r){J(e.$$.fragment,r)},m(r,f){K(e,r,f),n=!0},i(r){n||(P(e.$$.fragment,r),n=!0)},o(r){M(e.$$.fragment,r),n=!1},d(r){Q(e,r)}}}function Re(t){let e,n,r,f,a,s;return e=new dt({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),r=new jt({props:{data:t[1]}}),a=new _t({props:{$$slots:{week:[Ot],default:[Mt]},$$scope:{ctx:t}}}),{c(){W(e.$$.fragment),n=V(),W(r.$$.fragment),f=V(),W(a.$$.fragment)},l(l){J(e.$$.fragment,l),n=G(l),J(r.$$.fragment,l),f=G(l),J(a.$$.fragment,l)},m(l,u){K(e,l,u),C(l,n,u),K(r,l,u),C(l,f,u),K(a,l,u),s=!0},p(l,u){const i={};u&4&&(i.$$scope={dirty:u,ctx:l}),e.$set(i);const c={};u&2&&(c.data=l[1]),r.$set(c);const o={};u&4&&(o.$$scope={dirty:u,ctx:l}),a.$set(o)},i(l){s||(P(e.$$.fragment,l),P(r.$$.fragment,l),P(a.$$.fragment,l),s=!0)},o(l){M(e.$$.fragment,l),M(r.$$.fragment,l),M(a.$$.fragment,l),s=!1},d(l){l&&(_(n),_(f)),Q(e,l),Q(r,l),Q(a,l)}}}function Ft(t){let e;return{c(){e=O("Esclaves et Noirs libres")},l(n){e=Z(n,"Esclaves et Noirs libres")},m(n,r){C(n,e,r)},d(n){n&&_(e)}}}function Mt(t){let e,n;return e=new pt({props:{prev:"/challenge01",next:"/challenge03"}}),{c(){W(e.$$.fragment)},l(r){J(e.$$.fragment,r)},m(r,f){K(e,r,f),n=!0},p:ne,i(r){n||(P(e.$$.fragment,r),n=!0)},o(r){M(e.$$.fragment,r),n=!1},d(r){Q(e,r)}}}function Ot(t){let e,n="Semaine 2";return{c(){e=ee("a"),e.textContent=n,this.h()},l(r){e=te(r,"A",{href:!0,target:!0,slot:!0,"data-svelte-h":!0}),it(e)!=="svelte-2cpfzs"&&(e.textContent=n),this.h()},h(){h(e,"href","https://raw.githubusercontent.com/ajstarks/dubois-data-portraits/master/challenge/2024/challenge02/original-plate-12.jpg"),h(e,"target","_blank"),h(e,"slot","week")},m(r,f){C(r,e,f)},p:ne,d(r){r&&_(e)}}}function Zt(t){let e,n,r,f,a=!t[0]&&Ge(),s=t[1]&&Re(t);return{c(){e=V(),a&&a.c(),n=V(),s&&s.c(),r=Ye(),this.h()},l(l){st("svelte-574e5b",document.head).forEach(_),e=G(l),a&&a.l(l),n=G(l),s&&s.l(l),r=Ye(),this.h()},h(){document.title="Du Bois Challenge 2024 | Semaine 2"},m(l,u){C(l,e,u),a&&a.m(l,u),C(l,n,u),s&&s.m(l,u),C(l,r,u),f=!0},p(l,[u]){l[0]?a&&(Ne(),M(a,1,1,()=>{a=null}),Ce()):a?u&1&&P(a,1):(a=Ge(),a.c(),P(a,1),a.m(n.parentNode,n)),l[1]?s?(s.p(l,u),u&2&&P(s,1)):(s=Re(l),s.c(),P(s,1),s.m(r.parentNode,r)):s&&(Ne(),M(s,1,1,()=>{s=null}),Ce())},i(l){f||(P(a),P(s),f=!0)},o(l){M(a),M(s),f=!1},d(l){l&&(_(e),_(n),_(r)),a&&a.d(l),s&&s.d(l)}}}function qt(t,e,n){let r=!1,f;return tt(async()=>{n(1,f=await kt("data/challenge02/data.csv",$t)),await nt(),mt(),setTimeout(()=>n(0,r=!0),500)}),[r,f]}class Ht extends de{constructor(e){super(),_e(this,e,qt,Zt,ge,{})}}export{Ht as component};
