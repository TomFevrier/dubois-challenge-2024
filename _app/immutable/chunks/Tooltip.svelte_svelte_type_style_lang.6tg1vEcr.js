import{s as ee,c as ge,u as me,g as xe,b as pe,e as Be,r as Ct,n as Q}from"./scheduler.bEJZjyk8.js";import{S as te,i as ne,e as N,s as T,c as E,a as M,A as Ae,l as I,d as y,b as x,f as F,m as v,t as j,h as O,q as U,r as X,p as oe,B as Pt,y as zt,o as jt,u as Ht,w as Lt,x as qt,z as Tt,j as Ve,k as Ge,G as fe}from"./index.4VFj14VL.js";import{b as le}from"./paths.slx1a0B9.js";function We(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}const It=e=>({}),Ze=e=>({});function Ft(e){let t,n,r,i="Tom Février",a,o,l="Du Bois Visualization Challenge 2024",f,s,c,u;const h=e[1].week,d=ge(h,e,e[0],Ze),b=e[1].default,m=ge(b,e,e[0],null);return{c(){t=N("footer"),n=N("div"),r=N("span"),r.textContent=i,a=T(),o=N("span"),o.textContent=l,f=T(),s=N("span"),d&&d.c(),c=T(),m&&m.c(),this.h()},l(g){t=E(g,"FOOTER",{class:!0});var _=M(t);n=E(_,"DIV",{class:!0});var k=M(n);r=E(k,"SPAN",{class:!0,"data-svelte-h":!0}),Ae(r)!=="svelte-1g7cnhz"&&(r.textContent=i),a=I(k),o=E(k,"SPAN",{class:!0,"data-svelte-h":!0}),Ae(o)!=="svelte-13pi7mf"&&(o.textContent=l),f=I(k),s=E(k,"SPAN",{class:!0});var $=M(s);d&&d.l($),$.forEach(y),k.forEach(y),c=I(_),m&&m.l(_),_.forEach(y),this.h()},h(){x(r,"class","svelte-pjt4k4"),x(o,"class","svelte-pjt4k4"),x(s,"class","svelte-pjt4k4"),x(n,"class","credits svelte-pjt4k4"),x(t,"class","svelte-pjt4k4")},m(g,_){F(g,t,_),v(t,n),v(n,r),v(n,a),v(n,o),v(n,f),v(n,s),d&&d.m(s,null),v(t,c),m&&m.m(t,null),u=!0},p(g,[_]){d&&d.p&&(!u||_&1)&&me(d,h,g,g[0],u?pe(h,g[0],_,It):xe(g[0]),Ze),m&&m.p&&(!u||_&1)&&me(m,b,g,g[0],u?pe(b,g[0],_,null):xe(g[0]),null)},i(g){u||(j(d,g),j(m,g),u=!0)},o(g){O(d,g),O(m,g),u=!1},d(g){g&&y(t),d&&d.d(g),m&&m.d(g)}}}function Dt(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=a=>{"$$scope"in a&&n(0,i=a.$$scope)},[i,r]}class pr extends te{constructor(t){super(),ne(this,t,Dt,Ft,ee,{})}}const ke=(e,t=1)=>{const n=e.parentElement;if(!n)return;const r=s=>e.style.maxWidth=s+"px";e.style.display="inline-block",e.style.verticalAlign="top",e.style.maxWidth="";const i=n.clientWidth,a=n.clientHeight;let o=i/2-.25,l=i+.5,f;if(i){for(r(o),o=Math.max(e.scrollWidth,o);o+1<l;)f=Math.round((o+l)/2),r(f),n.clientHeight===a?l=f:o=f;r(l*t+i*(1-t))}},Ue=e=>{if(!window.CSS.supports("text-wrap","balance")){const t=new ResizeObserver(n=>{n.forEach(r=>{ke(r.target)})});ke(e),t.observe(e),window.addEventListener("resize",()=>{ke(e)})}},Ot=e=>({}),Xe=e=>({});function Bt(e){let t,n,r,i,a,o,l;const f=e[1].default,s=ge(f,e,e[0],null),c=e[1].subtitle,u=ge(c,e,e[0],Xe);return{c(){t=N("header"),n=N("h1"),s&&s.c(),r=T(),i=N("h2"),u&&u.c(),this.h()},l(h){t=E(h,"HEADER",{class:!0});var d=M(t);n=E(d,"H1",{class:!0});var b=M(n);s&&s.l(b),b.forEach(y),r=I(d),i=E(d,"H2",{class:!0});var m=M(i);u&&u.l(m),m.forEach(y),d.forEach(y),this.h()},h(){x(n,"class","svelte-a8esob"),x(i,"class","svelte-a8esob"),x(t,"class","svelte-a8esob")},m(h,d){F(h,t,d),v(t,n),s&&s.m(n,null),v(t,r),v(t,i),u&&u.m(i,null),a=!0,o||(l=[Be(Ue.call(null,n)),Be(Ue.call(null,i))],o=!0)},p(h,[d]){s&&s.p&&(!a||d&1)&&me(s,f,h,h[0],a?pe(f,h[0],d,null):xe(h[0]),null),u&&u.p&&(!a||d&1)&&me(u,c,h,h[0],a?pe(c,h[0],d,Ot):xe(h[0]),Xe)},i(h){a||(j(s,h),j(u,h),a=!0)},o(h){O(s,h),O(u,h),a=!1},d(h){h&&y(t),s&&s.d(h),u&&u.d(h),o=!1,Ct(l)}}}function Vt(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=a=>{"$$scope"in a&&n(0,i=a.$$scope)},[i,r]}class _r extends te{constructor(t){super(),ne(this,t,Vt,Bt,ee,{})}}function de(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function Gt(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function gt(e){let t,n,r;e.length!==2?(t=de,n=(l,f)=>de(e(l),f),r=(l,f)=>e(l)-f):(t=e===de||e===Gt?e:Wt,n=e,r=e);function i(l,f,s=0,c=l.length){if(s<c){if(t(f,f)!==0)return c;do{const u=s+c>>>1;n(l[u],f)<0?s=u+1:c=u}while(s<c)}return s}function a(l,f,s=0,c=l.length){if(s<c){if(t(f,f)!==0)return c;do{const u=s+c>>>1;n(l[u],f)<=0?s=u+1:c=u}while(s<c)}return s}function o(l,f,s=0,c=l.length){const u=i(l,f,s,c-1);return u>s&&r(l[u-1],f)>-r(l[u],f)?u-1:u}return{left:i,center:o,right:a}}function Wt(){return 0}function Zt(e){return e===null?NaN:+e}const Ut=gt(de),Xt=Ut.right;gt(Zt).center;const Qt=Math.sqrt(50),Yt=Math.sqrt(10),Jt=Math.sqrt(2);function _e(e,t,n){const r=(t-e)/Math.max(0,n),i=Math.floor(Math.log10(r)),a=r/Math.pow(10,i),o=a>=Qt?10:a>=Yt?5:a>=Jt?2:1;let l,f,s;return i<0?(s=Math.pow(10,-i)/o,l=Math.round(e*s),f=Math.round(t*s),l/s<e&&++l,f/s>t&&--f,s=-s):(s=Math.pow(10,i)*o,l=Math.round(e/s),f=Math.round(t/s),l*s<e&&++l,f*s>t&&--f),f<l&&.5<=n&&n<2?_e(e,t,n*2):[l,f,s]}function Kt(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];const r=t<e,[i,a,o]=r?_e(t,e,n):_e(e,t,n);if(!(a>=i))return[];const l=a-i+1,f=new Array(l);if(r)if(o<0)for(let s=0;s<l;++s)f[s]=(a-s)/-o;else for(let s=0;s<l;++s)f[s]=(a-s)*o;else if(o<0)for(let s=0;s<l;++s)f[s]=(i+s)/-o;else for(let s=0;s<l;++s)f[s]=(i+s)*o;return f}function Se(e,t,n){return t=+t,e=+e,n=+n,_e(e,t,n)[2]}function en(e,t,n){t=+t,e=+e,n=+n;const r=t<e,i=r?Se(t,e,n):Se(e,t,n);return(r?-1:1)*(i<0?1/-i:i)}function tn(e,t,n){e=+e,t=+t,n=(i=arguments.length)<2?(t=e,e=0,1):i<3?1:+n;for(var r=-1,i=Math.max(0,Math.ceil((t-e)/n))|0,a=new Array(i);++r<i;)a[r]=e+r*n;return a}function nn(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function Le(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function mt(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function re(){}var Y=.7,be=1/Y,W="\\s*([+-]?\\d+)\\s*",J="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",C="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",rn=/^#([0-9a-f]{3,8})$/,an=new RegExp(`^rgb\\(${W},${W},${W}\\)$`),sn=new RegExp(`^rgb\\(${C},${C},${C}\\)$`),on=new RegExp(`^rgba\\(${W},${W},${W},${J}\\)$`),fn=new RegExp(`^rgba\\(${C},${C},${C},${J}\\)$`),ln=new RegExp(`^hsl\\(${J},${C},${C}\\)$`),un=new RegExp(`^hsla\\(${J},${C},${C},${J}\\)$`),Qe={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Le(re,K,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Ye,formatHex:Ye,formatHex8:cn,formatHsl:hn,formatRgb:Je,toString:Je});function Ye(){return this.rgb().formatHex()}function cn(){return this.rgb().formatHex8()}function hn(){return xt(this).formatHsl()}function Je(){return this.rgb().formatRgb()}function K(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=rn.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Ke(t):n===3?new R(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?ue(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?ue(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=an.exec(e))?new R(t[1],t[2],t[3],1):(t=sn.exec(e))?new R(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=on.exec(e))?ue(t[1],t[2],t[3],t[4]):(t=fn.exec(e))?ue(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=ln.exec(e))?nt(t[1],t[2]/100,t[3]/100,1):(t=un.exec(e))?nt(t[1],t[2]/100,t[3]/100,t[4]):Qe.hasOwnProperty(e)?Ke(Qe[e]):e==="transparent"?new R(NaN,NaN,NaN,0):null}function Ke(e){return new R(e>>16&255,e>>8&255,e&255,1)}function ue(e,t,n,r){return r<=0&&(e=t=n=NaN),new R(e,t,n,r)}function dn(e){return e instanceof re||(e=K(e)),e?(e=e.rgb(),new R(e.r,e.g,e.b,e.opacity)):new R}function Ce(e,t,n,r){return arguments.length===1?dn(e):new R(e,t,n,r??1)}function R(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}Le(R,Ce,mt(re,{brighter(e){return e=e==null?be:Math.pow(be,e),new R(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Y:Math.pow(Y,e),new R(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new R(D(this.r),D(this.g),D(this.b),ye(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:et,formatHex:et,formatHex8:gn,formatRgb:tt,toString:tt}));function et(){return`#${q(this.r)}${q(this.g)}${q(this.b)}`}function gn(){return`#${q(this.r)}${q(this.g)}${q(this.b)}${q((isNaN(this.opacity)?1:this.opacity)*255)}`}function tt(){const e=ye(this.opacity);return`${e===1?"rgb(":"rgba("}${D(this.r)}, ${D(this.g)}, ${D(this.b)}${e===1?")":`, ${e})`}`}function ye(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function D(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function q(e){return e=D(e),(e<16?"0":"")+e.toString(16)}function nt(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new S(e,t,n,r)}function xt(e){if(e instanceof S)return new S(e.h,e.s,e.l,e.opacity);if(e instanceof re||(e=K(e)),!e)return new S;if(e instanceof S)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),a=Math.max(t,n,r),o=NaN,l=a-i,f=(a+i)/2;return l?(t===a?o=(n-r)/l+(n<r)*6:n===a?o=(r-t)/l+2:o=(t-n)/l+4,l/=f<.5?a+i:2-a-i,o*=60):l=f>0&&f<1?0:o,new S(o,l,f,e.opacity)}function mn(e,t,n,r){return arguments.length===1?xt(e):new S(e,t,n,r??1)}function S(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}Le(S,mn,mt(re,{brighter(e){return e=e==null?be:Math.pow(be,e),new S(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Y:Math.pow(Y,e),new S(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new R($e(e>=240?e-240:e+120,i,r),$e(e,i,r),$e(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new S(rt(this.h),ce(this.s),ce(this.l),ye(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=ye(this.opacity);return`${e===1?"hsl(":"hsla("}${rt(this.h)}, ${ce(this.s)*100}%, ${ce(this.l)*100}%${e===1?")":`, ${e})`}`}}));function rt(e){return e=(e||0)%360,e<0?e+360:e}function ce(e){return Math.max(0,Math.min(1,e||0))}function $e(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const qe=e=>()=>e;function xn(e,t){return function(n){return e+n*t}}function pn(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function _n(e){return(e=+e)==1?pt:function(t,n){return n-t?pn(t,n,e):qe(isNaN(t)?n:t)}}function pt(e,t){var n=t-e;return n?xn(e,n):qe(isNaN(e)?t:e)}const it=function e(t){var n=_n(t);function r(i,a){var o=n((i=Ce(i)).r,(a=Ce(a)).r),l=n(i.g,a.g),f=n(i.b,a.b),s=pt(i.opacity,a.opacity);return function(c){return i.r=o(c),i.g=l(c),i.b=f(c),i.opacity=s(c),i+""}}return r.gamma=e,r}(1);function bn(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),i;return function(a){for(i=0;i<n;++i)r[i]=e[i]*(1-a)+t[i]*a;return r}}function yn(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function vn(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,i=new Array(r),a=new Array(n),o;for(o=0;o<r;++o)i[o]=Te(e[o],t[o]);for(;o<n;++o)a[o]=t[o];return function(l){for(o=0;o<r;++o)a[o]=i[o](l);return a}}function wn(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function ve(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function Mn(e,t){var n={},r={},i;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in e?n[i]=Te(e[i],t[i]):r[i]=t[i];return function(a){for(i in n)r[i]=n[i](a);return r}}var Pe=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Ne=new RegExp(Pe.source,"g");function kn(e){return function(){return e}}function $n(e){return function(t){return e(t)+""}}function Nn(e,t){var n=Pe.lastIndex=Ne.lastIndex=0,r,i,a,o=-1,l=[],f=[];for(e=e+"",t=t+"";(r=Pe.exec(e))&&(i=Ne.exec(t));)(a=i.index)>n&&(a=t.slice(n,a),l[o]?l[o]+=a:l[++o]=a),(r=r[0])===(i=i[0])?l[o]?l[o]+=i:l[++o]=i:(l[++o]=null,f.push({i:o,x:ve(r,i)})),n=Ne.lastIndex;return n<t.length&&(a=t.slice(n),l[o]?l[o]+=a:l[++o]=a),l.length<2?f[0]?$n(f[0].x):kn(t):(t=f.length,function(s){for(var c=0,u;c<t;++c)l[(u=f[c]).i]=u.x(s);return l.join("")})}function Te(e,t){var n=typeof t,r;return t==null||n==="boolean"?qe(t):(n==="number"?ve:n==="string"?(r=K(t))?(t=r,it):Nn:t instanceof K?it:t instanceof Date?wn:yn(t)?bn:Array.isArray(t)?vn:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?Mn:ve)(e,t)}function En(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}function Rn(e){return function(){return e}}function An(e){return+e}var at=[0,1];function G(e){return e}function ze(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:Rn(isNaN(t)?NaN:.5)}function Sn(e,t){var n;return e>t&&(n=e,e=t,t=n),function(r){return Math.max(e,Math.min(t,r))}}function Cn(e,t,n){var r=e[0],i=e[1],a=t[0],o=t[1];return i<r?(r=ze(i,r),a=n(o,a)):(r=ze(r,i),a=n(a,o)),function(l){return a(r(l))}}function Pn(e,t,n){var r=Math.min(e.length,t.length)-1,i=new Array(r),a=new Array(r),o=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++o<r;)i[o]=ze(e[o],e[o+1]),a[o]=n(t[o],t[o+1]);return function(l){var f=Xt(e,l,1,r)-1;return a[f](i[f](l))}}function zn(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function jn(){var e=at,t=at,n=Te,r,i,a,o=G,l,f,s;function c(){var h=Math.min(e.length,t.length);return o!==G&&(o=Sn(e[0],e[h-1])),l=h>2?Pn:Cn,f=s=null,u}function u(h){return h==null||isNaN(h=+h)?a:(f||(f=l(e.map(r),t,n)))(r(o(h)))}return u.invert=function(h){return o(i((s||(s=l(t,e.map(r),ve)))(h)))},u.domain=function(h){return arguments.length?(e=Array.from(h,An),c()):e.slice()},u.range=function(h){return arguments.length?(t=Array.from(h),c()):t.slice()},u.rangeRound=function(h){return t=Array.from(h),n=En,c()},u.clamp=function(h){return arguments.length?(o=h?!0:G,c()):o!==G},u.interpolate=function(h){return arguments.length?(n=h,c()):n},u.unknown=function(h){return arguments.length?(a=h,u):a},function(h,d){return r=h,i=d,c()}}function Hn(){return jn()(G,G)}function Ln(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function we(e,t){if((n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var n,r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function Z(e){return e=we(Math.abs(e)),e?e[1]:NaN}function qn(e,t){return function(n,r){for(var i=n.length,a=[],o=0,l=e[0],f=0;i>0&&l>0&&(f+l+1>r&&(l=Math.max(1,r-f)),a.push(n.substring(i-=l,i+l)),!((f+=l+1)>r));)l=e[o=(o+1)%e.length];return a.reverse().join(t)}}function Tn(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var In=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Me(e){if(!(t=In.exec(e)))throw new Error("invalid format: "+e);var t;return new Ie({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Me.prototype=Ie.prototype;function Ie(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}Ie.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Fn(e){e:for(var t=e.length,n=1,r=-1,i;n<t;++n)switch(e[n]){case".":r=i=n;break;case"0":r===0&&(r=n),i=n;break;default:if(!+e[n])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(i+1):e}var _t;function Dn(e,t){var n=we(e,t);if(!n)return e+"";var r=n[0],i=n[1],a=i-(_t=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,o=r.length;return a===o?r:a>o?r+new Array(a-o+1).join("0"):a>0?r.slice(0,a)+"."+r.slice(a):"0."+new Array(1-a).join("0")+we(e,Math.max(0,t+a-1))[0]}function st(e,t){var n=we(e,t);if(!n)return e+"";var r=n[0],i=n[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}const ot={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:Ln,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>st(e*100,t),r:st,s:Dn,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function ft(e){return e}var lt=Array.prototype.map,ut=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function On(e){var t=e.grouping===void 0||e.thousands===void 0?ft:qn(lt.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",i=e.decimal===void 0?".":e.decimal+"",a=e.numerals===void 0?ft:Tn(lt.call(e.numerals,String)),o=e.percent===void 0?"%":e.percent+"",l=e.minus===void 0?"−":e.minus+"",f=e.nan===void 0?"NaN":e.nan+"";function s(u){u=Me(u);var h=u.fill,d=u.align,b=u.sign,m=u.symbol,g=u.zero,_=u.width,k=u.comma,$=u.precision,P=u.trim,w=u.type;w==="n"?(k=!0,w="g"):ot[w]||($===void 0&&($=12),P=!0,w="g"),(g||h==="0"&&d==="=")&&(g=!0,h="0",d="=");var Rt=m==="$"?n:m==="#"&&/[boxX]/.test(w)?"0"+w.toLowerCase():"",At=m==="$"?r:/[%p]/.test(w)?o:"",Fe=ot[w],St=/[defgprs%]/.test(w);$=$===void 0?6:/[gprs]/.test(w)?Math.max(1,Math.min(21,$)):Math.max(0,Math.min(20,$));function De(p){var H=Rt,A=At,B,Oe,ie;if(w==="c")A=Fe(p)+A,p="";else{p=+p;var ae=p<0||1/p<0;if(p=isNaN(p)?f:Fe(Math.abs(p),$),P&&(p=Fn(p)),ae&&+p==0&&b!=="+"&&(ae=!1),H=(ae?b==="("?b:l:b==="-"||b==="("?"":b)+H,A=(w==="s"?ut[8+_t/3]:"")+A+(ae&&b==="("?")":""),St){for(B=-1,Oe=p.length;++B<Oe;)if(ie=p.charCodeAt(B),48>ie||ie>57){A=(ie===46?i+p.slice(B+1):p.slice(B))+A,p=p.slice(0,B);break}}}k&&!g&&(p=t(p,1/0));var se=H.length+p.length+A.length,z=se<_?new Array(_-se+1).join(h):"";switch(k&&g&&(p=t(z+p,z.length?_-A.length:1/0),z=""),d){case"<":p=H+p+A+z;break;case"=":p=H+z+p+A;break;case"^":p=z.slice(0,se=z.length>>1)+H+p+A+z.slice(se);break;default:p=z+H+p+A;break}return a(p)}return De.toString=function(){return u+""},De}function c(u,h){var d=s((u=Me(u),u.type="f",u)),b=Math.max(-8,Math.min(8,Math.floor(Z(h)/3)))*3,m=Math.pow(10,-b),g=ut[8+b/3];return function(_){return d(m*_)+g}}return{format:s,formatPrefix:c}}var he,bt,yt;Bn({thousands:",",grouping:[3],currency:["$",""]});function Bn(e){return he=On(e),bt=he.format,yt=he.formatPrefix,he}function Vn(e){return Math.max(0,-Z(Math.abs(e)))}function Gn(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Z(t)/3)))*3-Z(Math.abs(e)))}function Wn(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,Z(t)-Z(e))+1}function Zn(e,t,n,r){var i=en(e,t,n),a;switch(r=Me(r??",f"),r.type){case"s":{var o=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(a=Gn(i,o))&&(r.precision=a),yt(r,o)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(a=Wn(i,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=a-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(a=Vn(i))&&(r.precision=a-(r.type==="%")*2);break}}return bt(r)}function Un(e){var t=e.domain;return e.ticks=function(n){var r=t();return Kt(r[0],r[r.length-1],n??10)},e.tickFormat=function(n,r){var i=t();return Zn(i[0],i[i.length-1],n??10,r)},e.nice=function(n){n==null&&(n=10);var r=t(),i=0,a=r.length-1,o=r[i],l=r[a],f,s,c=10;for(l<o&&(s=o,o=l,l=s,s=i,i=a,a=s);c-- >0;){if(s=Se(o,l,n),s===f)return r[i]=o,r[a]=l,t(r);if(s>0)o=Math.floor(o/s)*s,l=Math.ceil(l/s)*s;else if(s<0)o=Math.ceil(o*s)/s,l=Math.floor(l*s)/s;else break;f=s}return e},e}function vt(){var e=Hn();return e.copy=function(){return zn(e,vt())},nn.apply(e,arguments),Un(e)}function V(e){return function(){return e}}const je=Math.PI,He=2*je,L=1e-6,Xn=He-L;function wt(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function Qn(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return wt;const n=10**t;return function(r){this._+=r[0];for(let i=1,a=r.length;i<a;++i)this._+=Math.round(arguments[i]*n)/n+r[i]}}class Yn{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?wt:Qn(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,r,i){this._append`Q${+t},${+n},${this._x1=+r},${this._y1=+i}`}bezierCurveTo(t,n,r,i,a,o){this._append`C${+t},${+n},${+r},${+i},${this._x1=+a},${this._y1=+o}`}arcTo(t,n,r,i,a){if(t=+t,n=+n,r=+r,i=+i,a=+a,a<0)throw new Error(`negative radius: ${a}`);let o=this._x1,l=this._y1,f=r-t,s=i-n,c=o-t,u=l-n,h=c*c+u*u;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(h>L)if(!(Math.abs(u*f-s*c)>L)||!a)this._append`L${this._x1=t},${this._y1=n}`;else{let d=r-o,b=i-l,m=f*f+s*s,g=d*d+b*b,_=Math.sqrt(m),k=Math.sqrt(h),$=a*Math.tan((je-Math.acos((m+h-g)/(2*_*k)))/2),P=$/k,w=$/_;Math.abs(P-1)>L&&this._append`L${t+P*c},${n+P*u}`,this._append`A${a},${a},0,0,${+(u*d>c*b)},${this._x1=t+w*f},${this._y1=n+w*s}`}}arc(t,n,r,i,a,o){if(t=+t,n=+n,r=+r,o=!!o,r<0)throw new Error(`negative radius: ${r}`);let l=r*Math.cos(i),f=r*Math.sin(i),s=t+l,c=n+f,u=1^o,h=o?i-a:a-i;this._x1===null?this._append`M${s},${c}`:(Math.abs(this._x1-s)>L||Math.abs(this._y1-c)>L)&&this._append`L${s},${c}`,r&&(h<0&&(h=h%He+He),h>Xn?this._append`A${r},${r},0,1,${u},${t-l},${n-f}A${r},${r},0,1,${u},${this._x1=s},${this._y1=c}`:h>L&&this._append`A${r},${r},0,${+(h>=je)},${u},${this._x1=t+r*Math.cos(a)},${this._y1=n+r*Math.sin(a)}`)}rect(t,n,r,i){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${r=+r}v${+i}h${-r}Z`}toString(){return this._}}function Jn(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const r=Math.floor(n);if(!(r>=0))throw new RangeError(`invalid digits: ${n}`);t=r}return e},()=>new Yn(t)}function Kn(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Mt(e){this._context=e}Mt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function kt(e){return new Mt(e)}function er(e){return e[0]}function tr(e){return e[1]}function nr(e,t){var n=V(!0),r=null,i=kt,a=null,o=Jn(l);e=typeof e=="function"?e:e===void 0?er:V(e),t=typeof t=="function"?t:t===void 0?tr:V(t);function l(f){var s,c=(f=Kn(f)).length,u,h=!1,d;for(r==null&&(a=i(d=o())),s=0;s<=c;++s)!(s<c&&n(u=f[s],s,f))===h&&((h=!h)?a.lineStart():a.lineEnd()),h&&a.point(+e(u,s,f),+t(u,s,f));if(d)return a=null,d+""||null}return l.x=function(f){return arguments.length?(e=typeof f=="function"?f:V(+f),l):e},l.y=function(f){return arguments.length?(t=typeof f=="function"?f:V(+f),l):t},l.defined=function(f){return arguments.length?(n=typeof f=="function"?f:V(!!f),l):n},l.curve=function(f){return arguments.length?(i=f,r!=null&&(a=i(r)),l):i},l.context=function(f){return arguments.length?(f==null?r=a=null:a=i(r=f),l):r},l}var rr=Nt(kt);function $t(e){this._curve=e}$t.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(e,t){this._curve.point(t*Math.sin(e),t*-Math.cos(e))}};function Nt(e){function t(n){return new $t(e(n))}return t._curve=e,t}function ir(e){var t=e.curve;return e.angle=e.x,delete e.x,e.radius=e.y,delete e.y,e.curve=function(n){return arguments.length?t(Nt(n)):t()._curve},e}function ar(){return ir(nr().curve(rr))}function ct(e,t,n){e._context.bezierCurveTo(e._x1+e._k*(e._x2-e._x0),e._y1+e._k*(e._y2-e._y0),e._x2+e._k*(e._x1-t),e._y2+e._k*(e._y1-n),e._x2,e._y2)}function Et(e,t){this._context=e,this._k=(1-t)/6}Et.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:ct(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2,this._x1=e,this._y1=t;break;case 2:this._point=3;default:ct(this,e,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const sr=function e(t){function n(r){return new Et(r,t)}return n.tension=function(r){return e(+r)},n}(0);function or(e){let t,n,r,i,a,o,l,f;return{c(){t=U("mask"),n=U("path"),i=T(),a=U("path"),this.h()},l(s){t=X(s,"mask",{id:!0,class:!0});var c=M(t);n=X(c,"path",{class:!0,d:!0,style:!0}),M(n).forEach(y),c.forEach(y),i=I(s),a=X(s,"path",{class:!0,d:!0,mask:!0,"stroke-dasharray":!0}),M(a).forEach(y),this.h()},h(){x(n,"class","spiral svelte-1lp3zvs"),x(n,"d",e[4](e[3])),oe(n,"--total-length",e[2][0]+e[2][1]+"px"),oe(n,"--delay",e[0]*100+"ms"),x(t,"id",r="mask-"+e[0]),x(t,"class","svelte-1lp3zvs"),x(a,"class",o="spiral "+e[1]+" svelte-1lp3zvs"),x(a,"d",e[4](e[3])),x(a,"mask",l="url(#mask-"+e[0]+")"),x(a,"stroke-dasharray",f=e[2].join(" "))},m(s,c){F(s,t,c),v(t,n),F(s,i,c),F(s,a,c)},p(s,[c]){c&4&&oe(n,"--total-length",s[2][0]+s[2][1]+"px"),c&1&&oe(n,"--delay",s[0]*100+"ms"),c&1&&r!==(r="mask-"+s[0])&&x(t,"id",r),c&2&&o!==(o="spiral "+s[1]+" svelte-1lp3zvs")&&x(a,"class",o),c&1&&l!==(l="url(#mask-"+s[0]+")")&&x(a,"mask",l),c&4&&f!==(f=s[2].join(" "))&&x(a,"stroke-dasharray",f)},i:Q,o:Q,d(s){s&&(y(t),y(i),y(a))}}}const Ee=0,Re=2.1;function fr(e,t,n){let{index:r}=t,{startRadius:i}=t,{endRadius:a}=t,{color:o}=t,{dasharray:l}=t;const f=tn(Ee,Re+1e-4,(Re-Ee)/1e3),s=vt().domain([Ee,Re]).range([i,a]),c=ar().curve(sr).angle(u=>2*Math.PI*u).radius(s);return e.$$set=u=>{"index"in u&&n(0,r=u.index),"startRadius"in u&&n(5,i=u.startRadius),"endRadius"in u&&n(6,a=u.endRadius),"color"in u&&n(1,o=u.color),"dasharray"in u&&n(2,l=u.dasharray)},[r,o,l,f,c,i,a]}class lr extends te{constructor(t){super(),ne(this,t,fr,or,ee,{index:0,startRadius:5,endRadius:6,color:1,dasharray:2})}}function ht(e,t,n){const r=e.slice();return r[1]=t[n],r[3]=n,r}function dt(e){let t,n;return t=new lr({props:{index:e[3],startRadius:45-e[3]*2,endRadius:15-e[3]*2,color:e[1].color,dasharray:e[1].dasharray}}),{c(){Ht(t.$$.fragment)},l(r){Lt(t.$$.fragment,r)},m(r,i){qt(t,r,i),n=!0},p:Q,i(r){n||(j(t.$$.fragment,r),n=!0)},o(r){O(t.$$.fragment,r),n=!1},d(r){Tt(t,r)}}}function ur(e){let t,n,r,i,a=We(e[0]),o=[];for(let f=0;f<a.length;f+=1)o[f]=dt(ht(e,a,f));const l=f=>O(o[f],1,1,()=>{o[f]=null});return{c(){t=N("div"),n=U("svg"),r=U("g");for(let f=0;f<o.length;f+=1)o[f].c();this.h()},l(f){t=E(f,"DIV",{class:!0});var s=M(t);n=X(s,"svg",{class:!0,viewBox:!0});var c=M(n);r=X(c,"g",{class:!0,transform:!0});var u=M(r);for(let h=0;h<o.length;h+=1)o[h].l(u);u.forEach(y),c.forEach(y),s.forEach(y),this.h()},h(){x(r,"class","spirals"),x(r,"transform","translate(50, 50)"),x(n,"class","loader svelte-ws99fp"),x(n,"viewBox","0 0 100 100"),x(t,"class","loader-bg svelte-ws99fp")},m(f,s){F(f,t,s),v(t,n),v(n,r);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(r,null);i=!0},p(f,[s]){if(s&1){a=We(f[0]);let c;for(c=0;c<a.length;c+=1){const u=ht(f,a,c);o[c]?(o[c].p(u,s),j(o[c],1)):(o[c]=dt(u),o[c].c(),j(o[c],1),o[c].m(r,null))}for(Pt(),c=a.length;c<o.length;c+=1)l(c);zt()}},i(f){if(!i){for(let s=0;s<a.length;s+=1)j(o[s]);i=!0}},o(f){o=o.filter(Boolean);for(let s=0;s<o.length;s+=1)O(o[s]);i=!1},d(f){f&&y(t),jt(o,f)}}}function cr(e){return[[{year:1875,value:21186,color:"pink",dasharray:[3.93,393.16]},{year:1880,value:498512,color:"blue",dasharray:[92.44,278.37]},{year:1885,value:736170,color:"tan",dasharray:[136.5,208.05]},{year:1890,value:1173624,color:"gold",dasharray:[217.62,100.71]},{year:1895,value:1322694,color:"grey",dasharray:[245.26,46.9]},{year:1899,value:1434975,color:"crimson",dasharray:[266.08,0]}]]}class br extends te{constructor(t){super(),ne(this,t,cr,ur,ee,{})}}function hr(e){let t,n,r,i,a,o,l,f,s="❋",c,u,h,d,b;return{c(){t=N("nav"),n=N("ul"),r=N("li"),i=N("a"),a=Ve("↫"),l=T(),f=N("li"),f.textContent=s,c=T(),u=N("li"),h=N("a"),d=Ve("↬"),this.h()},l(m){t=E(m,"NAV",{class:!0});var g=M(t);n=E(g,"UL",{class:!0});var _=M(n);r=E(_,"LI",{class:!0});var k=M(r);i=E(k,"A",{href:!0});var $=M(i);a=Ge($,"↫"),$.forEach(y),k.forEach(y),l=I(_),f=E(_,"LI",{class:!0,"data-svelte-h":!0}),Ae(f)!=="svelte-q0zbz9"&&(f.textContent=s),c=I(_),u=E(_,"LI",{class:!0});var P=M(u);h=E(P,"A",{href:!0});var w=M(h);d=Ge(w,"↬"),w.forEach(y),P.forEach(y),_.forEach(y),g.forEach(y),this.h()},h(){x(i,"href",o=""+(le+e[0])),x(r,"class","svelte-146rfp5"),fe(r,"hidden",!e[0]),x(f,"class","svelte-146rfp5"),x(h,"href",b=""+(le+e[1])),x(u,"class","svelte-146rfp5"),fe(u,"hidden",!e[1]),x(n,"class","svelte-146rfp5"),x(t,"class","svelte-146rfp5")},m(m,g){F(m,t,g),v(t,n),v(n,r),v(r,i),v(i,a),v(n,l),v(n,f),v(n,c),v(n,u),v(u,h),v(h,d)},p(m,[g]){g&1&&o!==(o=""+(le+m[0]))&&x(i,"href",o),g&1&&fe(r,"hidden",!m[0]),g&2&&b!==(b=""+(le+m[1]))&&x(h,"href",b),g&2&&fe(u,"hidden",!m[1])},i:Q,o:Q,d(m){m&&y(t)}}}function dr(e,t,n){let{prev:r=""}=t,{next:i=""}=t;return e.$$set=a=>{"prev"in a&&n(0,r=a.prev),"next"in a&&n(1,i=a.next)},[r,i]}class yr extends te{constructor(t){super(),ne(this,t,dr,hr,ee,{prev:0,next:1})}}export{_r as C,br as L,yr as N,pr as a,Ue as b,de as c,V as d,We as e,On as f,kt as g,Kn as h,nn as i,nr as j,zn as k,vt as l,G as m,Un as n,Gt as o,tn as r,jn as t,Jn as w,er as x,tr as y};
