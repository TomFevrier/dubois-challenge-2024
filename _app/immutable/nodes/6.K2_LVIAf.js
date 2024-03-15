import{s as ar,a as Fr,r as or,e as Hr,o as Br,n as ir}from"../chunks/scheduler.bEJZjyk8.js";import{S as sr,i as ur,e as te,q as I,j as X,s as ne,c as re,a as E,r as C,d as _,k as Z,l as ae,b as y,f as O,m as T,g as kr,t as D,B as Qe,h as U,y as Ve,o as $t,G as Fe,E as xe,u as ye,w as $e,x as we,z as be,n as ve,v as qr,A as zr}from"../chunks/index.4VFj14VL.js";import{c as on,t as Ur,k as Kr,i as Wr,m as Ue,n as Yr,w as Xr,d as Ke,e as Se,b as Zr,o as Jr,C as Qr,a as Vr,L as xr,N as ea}from"../chunks/Tooltip.svelte_svelte_type_style_lang.6tg1vEcr.js";import"../chunks/paths.slx1a0B9.js";import{T as lr}from"../chunks/Tooltip.FxKoUnLJ.js";import{x as qt,v as Pt,y as Et,d as zt,k as sn,g as fr,q as me,A as Xe,o as ta,i as J,s as Q,j as cr,r as z,m as na,c as et}from"../chunks/utils.YkUfOGZi.js";import{a as ra,p as aa,m as oa,g as ia,j as sa}from"../chunks/index.-OuHBq3v.js";import{s as un}from"../chunks/sum.o3Vi7g46.js";import{I as ua,m as ln}from"../chunks/max.uL6_f42n.js";import{c as la,a as fa}from"../chunks/dsv.fs0VKOqp.js";function ca(e){return e}function ha(e,...t){return ga(e,ca,pa,t)}function pa(e){if(e.length!==1)throw new Error("duplicate key");return e[0]}function ga(e,t,n,r){return function a(o,s){if(s>=r.length)return n(o);const c=new ua,u=r[s++];let l=-1;for(const i of o){const f=u(i,++l,o),h=c.get(f);h?h.push(i):c.set(f,[i])}for(const[i,f]of c)c.set(i,a(f,s));return t(c)}(e,0)}function da(e,t){return Array.from(t,n=>e[n])}function _a(e,...t){if(typeof e[Symbol.iterator]!="function")throw new TypeError("values is not iterable");e=Array.from(e);let[n]=t;if(n&&n.length!==2||t.length>1){const r=Uint32Array.from(e,(a,o)=>o);return t.length>1?(t=t.map(a=>e.map(a)),r.sort((a,o)=>{for(const s of t){const c=At(s[a],s[o]);if(c)return c}})):(n=e.map(n),r.sort((a,o)=>At(n[a],n[o]))),da(e,r)}return e.sort(ma(n))}function ma(e=on){if(e===on)return At;if(typeof e!="function")throw new TypeError("compare is not a function");return(t,n)=>{const r=e(t,n);return r||r===0?r:(e(n,n)===0)-(e(t,t)===0)}}function At(e,t){return(e==null||!(e>=e))-(t==null||!(t>=t))||(e<t?-1:e>t?1:0)}function fn(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function va(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function ya(e){return e<0?-e*e:e*e}function $a(e){var t=e(Ue,Ue),n=1;function r(){return n===1?e(Ue,Ue):n===.5?e(va,ya):e(fn(n),fn(1/n))}return t.exponent=function(a){return arguments.length?(n=+a,r()):n},Yr(t)}function hr(){var e=$a(Ur());return e.copy=function(){return Kr(e,hr()).exponent(e.exponent())},Wr.apply(e,arguments),e}function cn(){return hr.apply(null,arguments).exponent(.5)}const pr=Math.cos,tt=Math.sin,gr=Math.sqrt,nt=Math.PI,ht=2*nt,wa={draw(e,t){const n=gr(t/nt);e.moveTo(n,0),e.arc(0,0,n,0,ht)}},ba=.8908130915292852,dr=tt(nt/10)/tt(7*nt/10),Ta=tt(ht/10)*dr,Pa=-pr(ht/10)*dr,hn={draw(e,t){const n=gr(t*ba),r=Ta*n,a=Pa*n;e.moveTo(0,-n),e.lineTo(r,a);for(let o=1;o<5;++o){const s=ht*o/5,c=pr(s),u=tt(s);e.lineTo(u*n,-c*n),e.lineTo(c*r-u*a,u*r+c*a)}e.closePath()}};function pn(e,t){let n=null,r=Xr(a);e=typeof e=="function"?e:Ke(e||wa),t=typeof t=="function"?t:Ke(t===void 0?64:+t);function a(){let o;if(n||(n=o=r()),e.apply(this,arguments).draw(n,+t.apply(this,arguments)),o)return n=null,o+""||null}return a.type=function(o){return arguments.length?(e=typeof o=="function"?o:Ke(o),a):e},a.size=function(o){return arguments.length?(t=typeof o=="function"?o:Ke(+o),a):t},a.context=function(o){return arguments.length?(n=o??null,a):n},a}var Ne,rt,at,ot,it,st,ut,lt,St,Ot,It,_r,mr,K,W,Y,x={sphere:me,point:Ut,lineStart:gn,lineEnd:dn,polygonStart:function(){x.lineStart=Sa,x.lineEnd=Oa},polygonEnd:function(){x.lineStart=gn,x.lineEnd=dn}};function Ut(e,t){e*=z,t*=z;var n=J(t);qe(n*J(e),n*Q(e),Q(t))}function qe(e,t,n){++Ne,at+=(e-at)/Ne,ot+=(t-ot)/Ne,it+=(n-it)/Ne}function gn(){x.point=Ea}function Ea(e,t){e*=z,t*=z;var n=J(t);K=n*J(e),W=n*Q(e),Y=Q(t),x.point=Aa,qe(K,W,Y)}function Aa(e,t){e*=z,t*=z;var n=J(t),r=n*J(e),a=n*Q(e),o=Q(t),s=zt(cr((s=W*o-Y*a)*s+(s=Y*r-K*o)*s+(s=K*a-W*r)*s),K*r+W*a+Y*o);rt+=s,st+=s*(K+(K=r)),ut+=s*(W+(W=a)),lt+=s*(Y+(Y=o)),qe(K,W,Y)}function dn(){x.point=Ut}function Sa(){x.point=Ia}function Oa(){vr(_r,mr),x.point=Ut}function Ia(e,t){_r=e,mr=t,e*=z,t*=z,x.point=vr;var n=J(t);K=n*J(e),W=n*Q(e),Y=Q(t),qe(K,W,Y)}function vr(e,t){e*=z,t*=z;var n=J(t),r=n*J(e),a=n*Q(e),o=Q(t),s=W*o-Y*a,c=Y*r-K*o,u=K*a-W*r,l=Et(s,c,u),i=fr(l),f=l&&-i/l;St.add(f*s),Ot.add(f*c),It.add(f*u),rt+=i,st+=i*(K+(K=r)),ut+=i*(W+(W=a)),lt+=i*(Y+(Y=o)),qe(K,W,Y)}function We(e){Ne=rt=at=ot=it=st=ut=lt=0,St=new Xe,Ot=new Xe,It=new Xe,qt(e,x);var t=+St,n=+Ot,r=+It,a=Et(t,n,r);return a<Pt&&(t=st,n=ut,r=lt,rt<ta&&(t=at,n=ot,r=it),a=Et(t,n,r),a<Pt)?[NaN,NaN]:[zt(n,t)*sn,fr(r/a)*sn]}var Ct,Mt,Ze,Je,Me={sphere:me,point:me,lineStart:Ca,lineEnd:me,polygonStart:me,polygonEnd:me};function Ca(){Me.point=ja,Me.lineEnd=Ma}function Ma(){Me.point=Me.lineEnd=me}function ja(e,t){e*=z,t*=z,Mt=e,Ze=Q(t),Je=J(t),Me.point=La}function La(e,t){e*=z,t*=z;var n=Q(t),r=J(t),a=na(e-Mt),o=J(a),s=Q(a),c=r*s,u=Je*n-Ze*r*o,l=Ze*n+Je*r*o;Ct.add(zt(cr(c*c+u*u),l)),Mt=e,Ze=n,Je=r}function Ra(e){return Ct=new Xe,qt(e,Me),+Ct}var jt=[null,null],Da={type:"LineString",coordinates:jt};function Lt(e,t){return jt[0]=e,jt[1]=t,Ra(Da)}var _n={Feature:function(e,t){return ft(e.geometry,t)},FeatureCollection:function(e,t){for(var n=e.features,r=-1,a=n.length;++r<a;)if(ft(n[r].geometry,t))return!0;return!1}},mn={Sphere:function(){return!0},Point:function(e,t){return vn(e.coordinates,t)},MultiPoint:function(e,t){for(var n=e.coordinates,r=-1,a=n.length;++r<a;)if(vn(n[r],t))return!0;return!1},LineString:function(e,t){return yn(e.coordinates,t)},MultiLineString:function(e,t){for(var n=e.coordinates,r=-1,a=n.length;++r<a;)if(yn(n[r],t))return!0;return!1},Polygon:function(e,t){return $n(e.coordinates,t)},MultiPolygon:function(e,t){for(var n=e.coordinates,r=-1,a=n.length;++r<a;)if($n(n[r],t))return!0;return!1},GeometryCollection:function(e,t){for(var n=e.geometries,r=-1,a=n.length;++r<a;)if(ft(n[r],t))return!0;return!1}};function ft(e,t){return e&&mn.hasOwnProperty(e.type)?mn[e.type](e,t):!1}function vn(e,t){return Lt(e,t)===0}function yn(e,t){for(var n,r,a,o=0,s=e.length;o<s;o++){if(r=Lt(e[o],t),r===0||o>0&&(a=Lt(e[o],e[o-1]),a>0&&n<=a&&r<=a&&(n+r-a)*(1-Math.pow((n-r)/a,2))<Pt*a))return!0;n=r}return!1}function $n(e,t){return!!ra(e.map(Na),yr(t))}function Na(e){return e=e.map(yr),e.pop(),e}function yr(e){return[e[0]*z,e[1]*z]}function Ga(e,t){return(e&&_n.hasOwnProperty(e.type)?_n[e.type]:ft)(e,t)}var Rt=Math.abs,Dt=Math.cos,ct=Math.sin,R=1e-6,pt=Math.PI,Nt=pt/2,wn=Fa(2),Oe=180/pt,Ie=pt/180;function bn(e){return e>1?Nt:e<-1?-Nt:Math.asin(e)}function Fa(e){return e>0?Math.sqrt(e):0}function Ha(e,t){var n=e*ct(t),r=30,a;do t-=a=(t+ct(t)-n)/(1+Dt(t));while(Rt(a)>R&&--r>0);return t/2}function Ba(e,t,n){function r(a,o){return[e*a*Dt(o=Ha(n,o)),t*ct(o)]}return r.invert=function(a,o){return o=bn(o/t),[a/(e*Dt(o)),bn((2*o+ct(2*o))/n)]},r}var ka=Ba(wn/Nt,wn,pt);function qa(e,t){return Rt(e[0]-t[0])<R&&Rt(e[1]-t[1])<R}function Tn(e,t){for(var n=-1,r=e.length,a=e[0],o,s,c,u=[];++n<r;){o=e[n],s=(o[0]-a[0])/t,c=(o[1]-a[1])/t;for(var l=0;l<t;++l)u.push([a[0]+l*s,a[1]+l*c]);a=o}return u.push(o),u}function za(e){var t=[],n,r,a,o,s,c,u,l=e[0].length;for(u=0;u<l;++u)n=e[0][u],r=n[0][0],a=n[0][1],o=n[1][1],s=n[2][0],c=n[2][1],t.push(Tn([[r+R,a+R],[r+R,o-R],[s-R,o-R],[s-R,c+R]],30));for(u=e[1].length-1;u>=0;--u)n=e[1][u],r=n[0][0],a=n[0][1],o=n[1][1],s=n[2][0],c=n[2][1],t.push(Tn([[s-R,c-R],[s-R,o+R],[r+R,o+R],[r+R,a-R]],30));return{type:"Polygon",coordinates:[oa(t)]}}function Ua(e,t,n){var r,a;function o(u,l){for(var i=l<0?-1:1,f=t[+(l<0)],h=0,d=f.length-1;h<d&&u>f[h][2][0];++h);var p=e(u-f[h][1][0],l);return p[0]+=e(f[h][1][0],i*l>i*f[h][0][1]?f[h][0][1]:l)[0],p}n?o.invert=n(o):e.invert&&(o.invert=function(u,l){for(var i=a[+(l<0)],f=t[+(l<0)],h=0,d=i.length;h<d;++h){var p=i[h];if(p[0][0]<=u&&u<p[1][0]&&p[0][1]<=l&&l<p[1][1]){var w=e.invert(u-e(f[h][1][0],0)[0],l);return w[0]+=f[h][1][0],qa(o(w[0],w[1]),[u,l])?w:null}}});var s=aa(o),c=s.stream;return s.stream=function(u){var l=s.rotate(),i=c(u),f=(s.rotate([0,0]),c(u));return s.rotate(l),i.sphere=function(){qt(r,f)},i},s.lobes=function(u){return arguments.length?(r=za(u),t=u.map(function(l){return l.map(function(i){return[[i[0][0]*Ie,i[0][1]*Ie],[i[1][0]*Ie,i[1][1]*Ie],[i[2][0]*Ie,i[2][1]*Ie]]})}),a=t.map(function(l){return l.map(function(i){var f=e(i[0][0],i[0][1])[0],h=e(i[2][0],i[2][1])[0],d=e(i[1][0],i[0][1])[1],p=e(i[1][0],i[1][1])[1],w;return d>p&&(w=d,d=p,p=w),[[f,d],[h,p]]})}),s):t.map(function(l){return l.map(function(i){return[[i[0][0]*Oe,i[0][1]*Oe],[i[1][0]*Oe,i[1][1]*Oe],[i[2][0]*Oe,i[2][1]*Oe]]})})},t!=null&&s.lobes(t),s}var Ka=[[[[-180,0],[-90,90],[0,0]],[[0,0],[90,90],[180,0]]],[[[-180,0],[-90,-90],[0,0]],[[0,0],[90,-90],[180,0]]]];function Wa(){return Ua(ka,Ka).scale(169.529).rotate([20,0])}function Ya(e){return e}function Xa(e){if(e==null)return Ya;var t,n,r=e.scale[0],a=e.scale[1],o=e.translate[0],s=e.translate[1];return function(c,u){u||(t=n=0);var l=2,i=c.length,f=new Array(i);for(f[0]=(t+=c[0])*r+o,f[1]=(n+=c[1])*a+s;l<i;)f[l]=c[l],++l;return f}}function Za(e,t){for(var n,r=e.length,a=r-t;a<--r;)n=e[a],e[a++]=e[r],e[r]=n}function Ja(e,t){return typeof t=="string"&&(t=e.objects[t]),t.type==="GeometryCollection"?{type:"FeatureCollection",features:t.geometries.map(function(n){return Pn(e,n)})}:Pn(e,t)}function Pn(e,t){var n=t.id,r=t.bbox,a=t.properties==null?{}:t.properties,o=Qa(e,t);return n==null&&r==null?{type:"Feature",properties:a,geometry:o}:r==null?{type:"Feature",id:n,properties:a,geometry:o}:{type:"Feature",id:n,bbox:r,properties:a,geometry:o}}function Qa(e,t){var n=Xa(e.transform),r=e.arcs;function a(i,f){f.length&&f.pop();for(var h=r[i<0?~i:i],d=0,p=h.length;d<p;++d)f.push(n(h[d],d));i<0&&Za(f,p)}function o(i){return n(i)}function s(i){for(var f=[],h=0,d=i.length;h<d;++h)a(i[h],f);return f.length<2&&f.push(f[0]),f}function c(i){for(var f=s(i);f.length<4;)f.push(f[0]);return f}function u(i){return i.map(c)}function l(i){var f=i.type,h;switch(f){case"GeometryCollection":return{type:f,geometries:i.geometries.map(l)};case"Point":h=o(i.coordinates);break;case"MultiPoint":h=i.coordinates.map(o);break;case"LineString":h=s(i.arcs);break;case"MultiLineString":h=i.arcs.map(s);break;case"Polygon":h=u(i.arcs);break;case"MultiPolygon":h=i.arcs.map(u);break;default:return null}return{type:f,coordinates:h}}return l(t)}var $r=typeof global=="object"&&global&&global.Object===Object&&global,Va=typeof self=="object"&&self&&self.Object===Object&&self,ue=$r||Va||Function("return this")(),de=ue.Symbol,wr=Object.prototype,xa=wr.hasOwnProperty,eo=wr.toString,De=de?de.toStringTag:void 0;function to(e){var t=xa.call(e,De),n=e[De];try{e[De]=void 0;var r=!0}catch{}var a=eo.call(e);return r&&(t?e[De]=n:delete e[De]),a}var no=Object.prototype,ro=no.toString;function ao(e){return ro.call(e)}var oo="[object Null]",io="[object Undefined]",En=de?de.toStringTag:void 0;function Le(e){return e==null?e===void 0?io:oo:En&&En in Object(e)?to(e):ao(e)}function je(e){return e!=null&&typeof e=="object"}var so="[object Symbol]";function Kt(e){return typeof e=="symbol"||je(e)&&Le(e)==so}function uo(e,t){for(var n=-1,r=e==null?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a}var se=Array.isArray,lo=1/0,An=de?de.prototype:void 0,Sn=An?An.toString:void 0;function br(e){if(typeof e=="string")return e;if(se(e))return uo(e,br)+"";if(Kt(e))return Sn?Sn.call(e):"";var t=e+"";return t=="0"&&1/e==-lo?"-0":t}function Wt(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function fo(e){return e}var co="[object AsyncFunction]",ho="[object Function]",po="[object GeneratorFunction]",go="[object Proxy]";function Tr(e){if(!Wt(e))return!1;var t=Le(e);return t==ho||t==po||t==co||t==go}var wt=ue["__core-js_shared__"],On=function(){var e=/[^.]+$/.exec(wt&&wt.keys&&wt.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function _o(e){return!!On&&On in e}var mo=Function.prototype,vo=mo.toString;function Pe(e){if(e!=null){try{return vo.call(e)}catch{}try{return e+""}catch{}}return""}var yo=/[\\^$.*+?()[\]{}|]/g,$o=/^\[object .+?Constructor\]$/,wo=Function.prototype,bo=Object.prototype,To=wo.toString,Po=bo.hasOwnProperty,Eo=RegExp("^"+To.call(Po).replace(yo,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ao(e){if(!Wt(e)||_o(e))return!1;var t=Tr(e)?Eo:$o;return t.test(Pe(e))}function So(e,t){return e==null?void 0:e[t]}function Re(e,t){var n=So(e,t);return Ao(n)?n:void 0}var Gt=Re(ue,"WeakMap");function Oo(){}function Io(e,t,n,r){for(var a=e.length,o=n+(r?1:-1);r?o--:++o<a;)if(t(e[o],o,e))return o;return-1}function Co(e){return e!==e}function Mo(e,t,n){for(var r=n-1,a=e.length;++r<a;)if(e[r]===t)return r;return-1}function jo(e,t,n){return t===t?Mo(e,t,n):Io(e,Co,n)}function Lo(e,t){var n=e==null?0:e.length;return!!n&&jo(e,t,0)>-1}var Ro=9007199254740991,Do=/^(?:0|[1-9]\d*)$/;function Pr(e,t){var n=typeof e;return t=t??Ro,!!t&&(n=="number"||n!="symbol"&&Do.test(e))&&e>-1&&e%1==0&&e<t}function Er(e,t){return e===t||e!==e&&t!==t}var No=9007199254740991;function Yt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=No}function Go(e){return e!=null&&Yt(e.length)&&!Tr(e)}var Fo=Object.prototype;function Ho(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||Fo;return e===n}function Bo(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var ko="[object Arguments]";function In(e){return je(e)&&Le(e)==ko}var Ar=Object.prototype,qo=Ar.hasOwnProperty,zo=Ar.propertyIsEnumerable,Sr=In(function(){return arguments}())?In:function(e){return je(e)&&qo.call(e,"callee")&&!zo.call(e,"callee")};function Uo(){return!1}var Or=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Cn=Or&&typeof module=="object"&&module&&!module.nodeType&&module,Ko=Cn&&Cn.exports===Or,Mn=Ko?ue.Buffer:void 0,Wo=Mn?Mn.isBuffer:void 0,Ft=Wo||Uo,Yo="[object Arguments]",Xo="[object Array]",Zo="[object Boolean]",Jo="[object Date]",Qo="[object Error]",Vo="[object Function]",xo="[object Map]",ei="[object Number]",ti="[object Object]",ni="[object RegExp]",ri="[object Set]",ai="[object String]",oi="[object WeakMap]",ii="[object ArrayBuffer]",si="[object DataView]",ui="[object Float32Array]",li="[object Float64Array]",fi="[object Int8Array]",ci="[object Int16Array]",hi="[object Int32Array]",pi="[object Uint8Array]",gi="[object Uint8ClampedArray]",di="[object Uint16Array]",_i="[object Uint32Array]",A={};A[ui]=A[li]=A[fi]=A[ci]=A[hi]=A[pi]=A[gi]=A[di]=A[_i]=!0;A[Yo]=A[Xo]=A[ii]=A[Zo]=A[si]=A[Jo]=A[Qo]=A[Vo]=A[xo]=A[ei]=A[ti]=A[ni]=A[ri]=A[ai]=A[oi]=!1;function mi(e){return je(e)&&Yt(e.length)&&!!A[Le(e)]}function vi(e){return function(t){return e(t)}}var Ir=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ge=Ir&&typeof module=="object"&&module&&!module.nodeType&&module,yi=Ge&&Ge.exports===Ir,bt=yi&&$r.process,jn=function(){try{var e=Ge&&Ge.require&&Ge.require("util").types;return e||bt&&bt.binding&&bt.binding("util")}catch{}}(),Ln=jn&&jn.isTypedArray,Cr=Ln?vi(Ln):mi,$i=Object.prototype,wi=$i.hasOwnProperty;function bi(e,t){var n=se(e),r=!n&&Sr(e),a=!n&&!r&&Ft(e),o=!n&&!r&&!a&&Cr(e),s=n||r||a||o,c=s?Bo(e.length,String):[],u=c.length;for(var l in e)(t||wi.call(e,l))&&!(s&&(l=="length"||a&&(l=="offset"||l=="parent")||o&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||Pr(l,u)))&&c.push(l);return c}function Ti(e,t){return function(n){return e(t(n))}}var Pi=Ti(Object.keys,Object),Ei=Object.prototype,Ai=Ei.hasOwnProperty;function Si(e){if(!Ho(e))return Pi(e);var t=[];for(var n in Object(e))Ai.call(e,n)&&n!="constructor"&&t.push(n);return t}function Mr(e){return Go(e)?bi(e):Si(e)}var Oi=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ii=/^\w*$/;function Xt(e,t){if(se(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||Kt(e)?!0:Ii.test(e)||!Oi.test(e)||t!=null&&e in Object(t)}var He=Re(Object,"create");function Ci(){this.__data__=He?He(null):{},this.size=0}function Mi(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var ji="__lodash_hash_undefined__",Li=Object.prototype,Ri=Li.hasOwnProperty;function Di(e){var t=this.__data__;if(He){var n=t[e];return n===ji?void 0:n}return Ri.call(t,e)?t[e]:void 0}var Ni=Object.prototype,Gi=Ni.hasOwnProperty;function Fi(e){var t=this.__data__;return He?t[e]!==void 0:Gi.call(t,e)}var Hi="__lodash_hash_undefined__";function Bi(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=He&&t===void 0?Hi:t,this}function Te(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Te.prototype.clear=Ci;Te.prototype.delete=Mi;Te.prototype.get=Di;Te.prototype.has=Fi;Te.prototype.set=Bi;function ki(){this.__data__=[],this.size=0}function gt(e,t){for(var n=e.length;n--;)if(Er(e[n][0],t))return n;return-1}var qi=Array.prototype,zi=qi.splice;function Ui(e){var t=this.__data__,n=gt(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():zi.call(t,n,1),--this.size,!0}function Ki(e){var t=this.__data__,n=gt(t,e);return n<0?void 0:t[n][1]}function Wi(e){return gt(this.__data__,e)>-1}function Yi(e,t){var n=this.__data__,r=gt(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function le(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}le.prototype.clear=ki;le.prototype.delete=Ui;le.prototype.get=Ki;le.prototype.has=Wi;le.prototype.set=Yi;var Be=Re(ue,"Map");function Xi(){this.size=0,this.__data__={hash:new Te,map:new(Be||le),string:new Te}}function Zi(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function dt(e,t){var n=e.__data__;return Zi(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Ji(e){var t=dt(this,e).delete(e);return this.size-=t?1:0,t}function Qi(e){return dt(this,e).get(e)}function Vi(e){return dt(this,e).has(e)}function xi(e,t){var n=dt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function fe(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}fe.prototype.clear=Xi;fe.prototype.delete=Ji;fe.prototype.get=Qi;fe.prototype.has=Vi;fe.prototype.set=xi;var es="Expected a function";function Zt(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(es);var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],o=n.cache;if(o.has(a))return o.get(a);var s=e.apply(this,r);return n.cache=o.set(a,s)||o,s};return n.cache=new(Zt.Cache||fe),n}Zt.Cache=fe;var ts=500;function ns(e){var t=Zt(e,function(r){return n.size===ts&&n.clear(),r}),n=t.cache;return t}var rs=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,as=/\\(\\)?/g,os=ns(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(rs,function(n,r,a,o){t.push(a?o.replace(as,"$1"):r||n)}),t});function is(e){return e==null?"":br(e)}function jr(e,t){return se(e)?e:Xt(e,t)?[e]:os(is(e))}var ss=1/0;function _t(e){if(typeof e=="string"||Kt(e))return e;var t=e+"";return t=="0"&&1/e==-ss?"-0":t}function Lr(e,t){t=jr(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[_t(t[n++])];return n&&n==r?e:void 0}function us(e,t,n){var r=e==null?void 0:Lr(e,t);return r===void 0?n:r}function ls(e,t){for(var n=-1,r=t.length,a=e.length;++n<r;)e[a+n]=t[n];return e}function fs(){this.__data__=new le,this.size=0}function cs(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function hs(e){return this.__data__.get(e)}function ps(e){return this.__data__.has(e)}var gs=200;function ds(e,t){var n=this.__data__;if(n instanceof le){var r=n.__data__;if(!Be||r.length<gs-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new fe(r)}return n.set(e,t),this.size=n.size,this}function ie(e){var t=this.__data__=new le(e);this.size=t.size}ie.prototype.clear=fs;ie.prototype.delete=cs;ie.prototype.get=hs;ie.prototype.has=ps;ie.prototype.set=ds;function _s(e,t){for(var n=-1,r=e==null?0:e.length,a=0,o=[];++n<r;){var s=e[n];t(s,n,e)&&(o[a++]=s)}return o}function ms(){return[]}var vs=Object.prototype,ys=vs.propertyIsEnumerable,Rn=Object.getOwnPropertySymbols,$s=Rn?function(e){return e==null?[]:(e=Object(e),_s(Rn(e),function(t){return ys.call(e,t)}))}:ms;const ws=$s;function bs(e,t,n){var r=t(e);return se(e)?r:ls(r,n(e))}function Dn(e){return bs(e,Mr,ws)}var Ht=Re(ue,"DataView"),Bt=Re(ue,"Promise"),Ce=Re(ue,"Set"),Nn="[object Map]",Ts="[object Object]",Gn="[object Promise]",Fn="[object Set]",Hn="[object WeakMap]",Bn="[object DataView]",Ps=Pe(Ht),Es=Pe(Be),As=Pe(Bt),Ss=Pe(Ce),Os=Pe(Gt),_e=Le;(Ht&&_e(new Ht(new ArrayBuffer(1)))!=Bn||Be&&_e(new Be)!=Nn||Bt&&_e(Bt.resolve())!=Gn||Ce&&_e(new Ce)!=Fn||Gt&&_e(new Gt)!=Hn)&&(_e=function(e){var t=Le(e),n=t==Ts?e.constructor:void 0,r=n?Pe(n):"";if(r)switch(r){case Ps:return Bn;case Es:return Nn;case As:return Gn;case Ss:return Fn;case Os:return Hn}return t});const kn=_e;var Is=ue.Uint8Array;const qn=Is;var Cs="__lodash_hash_undefined__";function Ms(e){return this.__data__.set(e,Cs),this}function js(e){return this.__data__.has(e)}function ke(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new fe;++t<n;)this.add(e[t])}ke.prototype.add=ke.prototype.push=Ms;ke.prototype.has=js;function Ls(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function Rr(e,t){return e.has(t)}var Rs=1,Ds=2;function Dr(e,t,n,r,a,o){var s=n&Rs,c=e.length,u=t.length;if(c!=u&&!(s&&u>c))return!1;var l=o.get(e),i=o.get(t);if(l&&i)return l==t&&i==e;var f=-1,h=!0,d=n&Ds?new ke:void 0;for(o.set(e,t),o.set(t,e);++f<c;){var p=e[f],w=t[f];if(r)var b=s?r(w,p,f,t,e,o):r(p,w,f,e,t,o);if(b!==void 0){if(b)continue;h=!1;break}if(d){if(!Ls(t,function($,P){if(!Rr(d,P)&&(p===$||a(p,$,n,r,o)))return d.push(P)})){h=!1;break}}else if(!(p===w||a(p,w,n,r,o))){h=!1;break}}return o.delete(e),o.delete(t),h}function Ns(e){var t=-1,n=Array(e.size);return e.forEach(function(r,a){n[++t]=[a,r]}),n}function Jt(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var Gs=1,Fs=2,Hs="[object Boolean]",Bs="[object Date]",ks="[object Error]",qs="[object Map]",zs="[object Number]",Us="[object RegExp]",Ks="[object Set]",Ws="[object String]",Ys="[object Symbol]",Xs="[object ArrayBuffer]",Zs="[object DataView]",zn=de?de.prototype:void 0,Tt=zn?zn.valueOf:void 0;function Js(e,t,n,r,a,o,s){switch(n){case Zs:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Xs:return!(e.byteLength!=t.byteLength||!o(new qn(e),new qn(t)));case Hs:case Bs:case zs:return Er(+e,+t);case ks:return e.name==t.name&&e.message==t.message;case Us:case Ws:return e==t+"";case qs:var c=Ns;case Ks:var u=r&Gs;if(c||(c=Jt),e.size!=t.size&&!u)return!1;var l=s.get(e);if(l)return l==t;r|=Fs,s.set(e,t);var i=Dr(c(e),c(t),r,a,o,s);return s.delete(e),i;case Ys:if(Tt)return Tt.call(e)==Tt.call(t)}return!1}var Qs=1,Vs=Object.prototype,xs=Vs.hasOwnProperty;function eu(e,t,n,r,a,o){var s=n&Qs,c=Dn(e),u=c.length,l=Dn(t),i=l.length;if(u!=i&&!s)return!1;for(var f=u;f--;){var h=c[f];if(!(s?h in t:xs.call(t,h)))return!1}var d=o.get(e),p=o.get(t);if(d&&p)return d==t&&p==e;var w=!0;o.set(e,t),o.set(t,e);for(var b=s;++f<u;){h=c[f];var $=e[h],P=t[h];if(r)var q=s?r(P,$,h,t,e,o):r($,P,h,e,t,o);if(!(q===void 0?$===P||a($,P,n,r,o):q)){w=!1;break}b||(b=h=="constructor")}if(w&&!b){var N=e.constructor,G=t.constructor;N!=G&&"constructor"in e&&"constructor"in t&&!(typeof N=="function"&&N instanceof N&&typeof G=="function"&&G instanceof G)&&(w=!1)}return o.delete(e),o.delete(t),w}var tu=1,Un="[object Arguments]",Kn="[object Array]",Ye="[object Object]",nu=Object.prototype,Wn=nu.hasOwnProperty;function ru(e,t,n,r,a,o){var s=se(e),c=se(t),u=s?Kn:kn(e),l=c?Kn:kn(t);u=u==Un?Ye:u,l=l==Un?Ye:l;var i=u==Ye,f=l==Ye,h=u==l;if(h&&Ft(e)){if(!Ft(t))return!1;s=!0,i=!1}if(h&&!i)return o||(o=new ie),s||Cr(e)?Dr(e,t,n,r,a,o):Js(e,t,u,n,r,a,o);if(!(n&tu)){var d=i&&Wn.call(e,"__wrapped__"),p=f&&Wn.call(t,"__wrapped__");if(d||p){var w=d?e.value():e,b=p?t.value():t;return o||(o=new ie),a(w,b,n,r,o)}}return h?(o||(o=new ie),eu(e,t,n,r,a,o)):!1}function Qt(e,t,n,r,a){return e===t?!0:e==null||t==null||!je(e)&&!je(t)?e!==e&&t!==t:ru(e,t,n,r,Qt,a)}var au=1,ou=2;function iu(e,t,n,r){var a=n.length,o=a,s=!r;if(e==null)return!o;for(e=Object(e);a--;){var c=n[a];if(s&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++a<o;){c=n[a];var u=c[0],l=e[u],i=c[1];if(s&&c[2]){if(l===void 0&&!(u in e))return!1}else{var f=new ie;if(r)var h=r(l,i,u,e,t,f);if(!(h===void 0?Qt(i,l,au|ou,r,f):h))return!1}}return!0}function Nr(e){return e===e&&!Wt(e)}function su(e){for(var t=Mr(e),n=t.length;n--;){var r=t[n],a=e[r];t[n]=[r,a,Nr(a)]}return t}function Gr(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function uu(e){var t=su(e);return t.length==1&&t[0][2]?Gr(t[0][0],t[0][1]):function(n){return n===e||iu(n,e,t)}}function lu(e,t){return e!=null&&t in Object(e)}function fu(e,t,n){t=jr(t,e);for(var r=-1,a=t.length,o=!1;++r<a;){var s=_t(t[r]);if(!(o=e!=null&&n(e,s)))break;e=e[s]}return o||++r!=a?o:(a=e==null?0:e.length,!!a&&Yt(a)&&Pr(s,a)&&(se(e)||Sr(e)))}function cu(e,t){return e!=null&&fu(e,t,lu)}var hu=1,pu=2;function gu(e,t){return Xt(e)&&Nr(t)?Gr(_t(e),t):function(n){var r=us(n,e);return r===void 0&&r===t?cu(n,e):Qt(t,r,hu|pu)}}function du(e){return function(t){return t==null?void 0:t[e]}}function _u(e){return function(t){return Lr(t,e)}}function mu(e){return Xt(e)?du(_t(e)):_u(e)}function vu(e){return typeof e=="function"?e:e==null?fo:typeof e=="object"?se(e)?gu(e[0],e[1]):uu(e):mu(e)}function yu(e,t,n){for(var r=-1,a=e==null?0:e.length;++r<a;)if(n(t,e[r]))return!0;return!1}var $u=1/0,wu=Ce&&1/Jt(new Ce([,-0]))[1]==$u?function(e){return new Ce(e)}:Oo,bu=200;function Tu(e,t,n){var r=-1,a=Lo,o=e.length,s=!0,c=[],u=c;if(n)s=!1,a=yu;else if(o>=bu){var l=t?null:wu(e);if(l)return Jt(l);s=!1,a=Rr,u=new ke}else u=t?[]:c;e:for(;++r<o;){var i=e[r],f=t?t(i):i;if(i=n||i!==0?i:0,s&&f===f){for(var h=u.length;h--;)if(u[h]===f)continue e;t&&u.push(f),c.push(i)}else a(u,f,n)||(u!==c&&u.push(f),c.push(i))}return c}function Yn(e,t){return e&&e.length?Tu(e,vu(t)):[]}function Xn(e,t,n){const r=e.slice();return r[21]=t[n],r}function Zn(e,t,n){const r=e.slice();return r[24]=t[n],r}function Jn(e,t,n){const r=e.slice();return r[27]=t[n],r}function Qn(e){let t;function n(...r){return e[13](e[27],...r)}return{c(){t=I("path"),this.h()},l(r){t=C(r,"path",{class:!0,d:!0}),E(t).forEach(_),this.h()},h(){y(t,"class","country svelte-1711t27"),y(t,"d",e[5](e[27])),Fe(t,"colored",e[6].some(n))},m(r,a){O(r,t,a)},p(r,a){e=r},d(r){r&&_(t)}}}function Vn(e){let t,n,r;function a(){return e[14](e[24])}return{c(){t=I("path"),this.h()},l(o){t=C(o,"path",{role:!0,class:!0,d:!0,"stroke-width":!0}),E(t).forEach(_),this.h()},h(){y(t,"role","img"),y(t,"class","link svelte-1711t27"),y(t,"d",e[5](e[24].feature)),y(t,"stroke-width",e[8](e[24].count)),Fe(t,"faded",e[2]&&(e[2].source.name!==e[24].source.name||e[2].target.name!==e[24].target.name)||e[1]&&![e[24].source.name,e[24].target.name].includes(e[1].name))},m(o,s){O(o,t,s),n||(r=[xe(t,"mouseenter",a),xe(t,"mouseleave",e[15])],n=!0)},p(o,s){e=o,s&134&&Fe(t,"faded",e[2]&&(e[2].source.name!==e[24].source.name||e[2].target.name!==e[24].target.name)||e[1]&&![e[24].source.name,e[24].target.name].includes(e[1].name))},d(o){o&&_(t),n=!1,or(r)}}}function xn(e){let t,n,r;function a(){return e[16](e[21])}function o(...s){return e[18](e[21],...s)}return{c(){t=I("circle"),this.h()},l(s){t=C(s,"circle",{role:!0,class:!0,cx:!0,cy:!0,r:!0}),E(t).forEach(_),this.h()},h(){y(t,"role","img"),y(t,"class","node svelte-1711t27"),y(t,"cx",e[4](e[21].coords)[0]),y(t,"cy",e[4](e[21].coords)[1]),y(t,"r",e[9](e[21].incoming||e[21].outgoing)),Fe(t,"faded",e[2]&&![e[2].source.name,e[2].target.name].includes(e[21].name)||e[1]&&!e[1].links.some(o))},m(s,c){O(s,t,c),n||(r=[xe(t,"mouseenter",a),xe(t,"mouseleave",e[17])],n=!0)},p(s,c){e=s,c&70&&Fe(t,"faded",e[2]&&![e[2].source.name,e[2].target.name].includes(e[21].name)||e[1]&&!e[1].links.some(o))},d(s){s&&_(t),n=!1,or(r)}}}function er(e){let t,n;return t=new lr({props:{x:e[4](e[1].coords)[0]*(e[0]/ee),y:e[4](e[1].coords)[1]*(e[0]/ee),width:e[0],offset:.5,$$slots:{default:[Au]},$$scope:{ctx:e}}}),{c(){ye(t.$$.fragment)},l(r){$e(t.$$.fragment,r)},m(r,a){we(t,r,a),n=!0},p(r,a){const o={};a&3&&(o.x=r[4](r[1].coords)[0]*(r[0]/ee)),a&3&&(o.y=r[4](r[1].coords)[1]*(r[0]/ee)),a&1&&(o.width=r[0]),a&1073741826&&(o.$$scope={dirty:a,ctx:r}),t.$set(o)},i(r){n||(D(t.$$.fragment,r),n=!0)},o(r){U(t.$$.fragment,r),n=!1},d(r){be(t,r)}}}function Pu(e){let t,n=e[10](e[1].links,"target")+"",r;return{c(){t=X("vers "),r=X(n)},l(a){t=Z(a,"vers "),r=Z(a,n)},m(a,o){O(a,t,o),O(a,r,o)},p(a,o){o&2&&n!==(n=a[10](a[1].links,"target")+"")&&ve(r,n)},d(a){a&&(_(t),_(r))}}}function Eu(e){let t,n=e[10](e[1].links,"source")+"",r;return{c(){t=X("depuis "),r=X(n)},l(a){t=Z(a,"depuis "),r=Z(a,n)},m(a,o){O(a,t,o),O(a,r,o)},p(a,o){o&2&&n!==(n=a[10](a[1].links,"source")+"")&&ve(r,n)},d(a){a&&(_(t),_(r))}}}function Au(e){let t,n=e[1].name+"",r,a,o,s,c=et(",d")(e[1].incoming||e[1].outgoing)+"",u,l,i,f,h,d;function p($,P){if($[1].incoming>0)return Eu;if($[1].outgoing>0)return Pu}let w=p(e),b=w&&w(e);return{c(){t=te("h3"),r=X(n),a=ne(),o=te("h4"),s=te("b"),u=X(c),l=X(" trajets"),i=ne(),f=te("p"),b&&b.c(),this.h()},l($){t=re($,"H3",{});var P=E(t);r=Z(P,n),P.forEach(_),a=ae($),o=re($,"H4",{class:!0});var q=E(o);s=re(q,"B",{});var N=E(s);u=Z(N,c),l=Z(N," trajets"),N.forEach(_),q.forEach(_),i=ae($),f=re($,"P",{class:!0});var G=E(f);b&&b.l(G),G.forEach(_),this.h()},h(){y(o,"class","svelte-1711t27"),y(f,"class","svelte-1711t27")},m($,P){O($,t,P),T(t,r),O($,a,P),O($,o,P),T(o,s),T(s,u),T(s,l),O($,i,P),O($,f,P),b&&b.m(f,null),h||(d=Hr(Zr.call(null,f)),h=!0)},p($,P){P&2&&n!==(n=$[1].name+"")&&ve(r,n),P&2&&c!==(c=et(",d")($[1].incoming||$[1].outgoing)+"")&&ve(u,c),w===(w=p($))&&b?b.p($,P):(b&&b.d(1),b=w&&w($),b&&(b.c(),b.m(f,null)))},d($){$&&(_(t),_(a),_(o),_(i),_(f)),b&&b.d(),h=!1,d()}}}function tr(e){let t,n;return t=new lr({props:{x:e[4](We(e[2].feature))[0]*(e[0]/ee),y:e[4](We(e[2].feature))[1]*(e[0]/ee),width:e[0],offset:.5,$$slots:{default:[Su]},$$scope:{ctx:e}}}),{c(){ye(t.$$.fragment)},l(r){$e(t.$$.fragment,r)},m(r,a){we(t,r,a),n=!0},p(r,a){const o={};a&5&&(o.x=r[4](We(r[2].feature))[0]*(r[0]/ee)),a&5&&(o.y=r[4](We(r[2].feature))[1]*(r[0]/ee)),a&1&&(o.width=r[0]),a&1073741828&&(o.$$scope={dirty:a,ctx:r}),t.$set(o)},i(r){n||(D(t.$$.fragment,r),n=!0)},o(r){U(t.$$.fragment,r),n=!1},d(r){be(t,r)}}}function Su(e){let t,n=e[2].source.name+"",r,a,o=e[2].target.name+"",s,c,u,l,i=et(",d")(e[2].count)+"",f,h;return{c(){t=te("h3"),r=X(n),a=X(" - "),s=X(o),c=ne(),u=te("h4"),l=te("b"),f=X(i),h=X(" trajets"),this.h()},l(d){t=re(d,"H3",{});var p=E(t);r=Z(p,n),a=Z(p," - "),s=Z(p,o),p.forEach(_),c=ae(d),u=re(d,"H4",{class:!0});var w=E(u);l=re(w,"B",{});var b=E(l);f=Z(b,i),h=Z(b," trajets"),b.forEach(_),w.forEach(_),this.h()},h(){y(u,"class","svelte-1711t27")},m(d,p){O(d,t,p),T(t,r),T(t,a),T(t,s),O(d,c,p),O(d,u,p),T(u,l),T(l,f),T(l,h)},p(d,p){p&4&&n!==(n=d[2].source.name+"")&&ve(r,n),p&4&&o!==(o=d[2].target.name+"")&&ve(s,o),p&4&&i!==(i=et(",d")(d[2].count)+"")&&ve(f,i)},d(d){d&&(_(t),_(c),_(u))}}}function Ou(e){let t,n,r,a,o,s,c,u,l,i,f,h,d,p,w,b,$,P,q,N,G,ce,he,m,S,oe,pe,ge=Se(e[3].features),F=[];for(let v=0;v<ge.length;v+=1)F[v]=Qn(Jn(e,ge,v));let Ee=Se(e[7]),H=[];for(let v=0;v<Ee.length;v+=1)H[v]=Vn(Zn(e,Ee,v));let Ae=Se(e[6]),B=[];for(let v=0;v<Ae.length;v+=1)B[v]=xn(Xn(e,Ae,v));let M=e[1]&&er(e),j=e[2]&&tr(e);return{c(){t=te("div"),n=te("div"),r=I("svg"),a=I("defs"),o=I("mask"),s=I("path"),c=I("g"),u=I("g"),l=I("circle"),i=I("path"),f=I("text"),h=I("tspan"),d=X("État de"),p=I("tspan"),w=X("Géorgie"),b=ne(),$=I("g");for(let v=0;v<F.length;v+=1)F[v].c();P=I("path"),q=I("g");for(let v=0;v<H.length;v+=1)H[v].c();N=I("g");for(let v=0;v<B.length;v+=1)B[v].c();G=I("g"),ce=I("circle"),he=I("path"),m=ne(),M&&M.c(),S=ne(),j&&j.c(),this.h()},l(v){t=re(v,"DIV",{class:!0});var L=E(t);n=re(L,"DIV",{class:!0});var g=E(n);r=C(g,"svg",{width:!0,viewBox:!0});var k=E(r);a=C(k,"defs",{});var Vt=E(a);o=C(Vt,"mask",{id:!0});var xt=E(o);s=C(xt,"path",{d:!0,fill:!0,class:!0}),E(s).forEach(_),xt.forEach(_),Vt.forEach(_),c=C(k,"g",{class:!0,transform:!0});var mt=E(c);u=C(mt,"g",{class:!0});var vt=E(u);l=C(vt,"circle",{r:!0,class:!0}),E(l).forEach(_),i=C(vt,"path",{d:!0,class:!0}),E(i).forEach(_),vt.forEach(_),f=C(mt,"text",{y:!0});var ze=E(f);h=C(ze,"tspan",{x:!0});var en=E(h);d=Z(en,"État de"),en.forEach(_),p=C(ze,"tspan",{x:!0,dy:!0});var tn=E(p);w=Z(tn,"Géorgie"),tn.forEach(_),b=ae(ze),ze.forEach(_),mt.forEach(_),$=C(k,"g",{class:!0,mask:!0});var nn=E($);for(let V=0;V<F.length;V+=1)F[V].l(nn);nn.forEach(_),P=C(k,"path",{class:!0,d:!0}),E(P).forEach(_),q=C(k,"g",{class:!0,mask:!0});var rn=E(q);for(let V=0;V<H.length;V+=1)H[V].l(rn);rn.forEach(_),N=C(k,"g",{class:!0});var an=E(N);for(let V=0;V<B.length;V+=1)B[V].l(an);an.forEach(_),G=C(k,"g",{class:!0,transform:!0});var yt=E(G);ce=C(yt,"circle",{r:!0,class:!0}),E(ce).forEach(_),he=C(yt,"path",{d:!0,class:!0}),E(he).forEach(_),yt.forEach(_),k.forEach(_),g.forEach(_),m=ae(L),M&&M.l(L),S=ae(L),j&&j.l(L),L.forEach(_),this.h()},h(){y(s,"d",e[5]({type:"Sphere"})),y(s,"fill","white"),y(s,"class","svelte-1711t27"),y(o,"id","mask"),y(l,"r",16),y(l,"class","svelte-1711t27"),y(i,"d",pn(hn,128)()),y(i,"class","svelte-1711t27"),y(u,"class","star"),y(h,"x",0),y(p,"x",0),y(p,"dy",36),y(f,"y",56),y(c,"class","legend svelte-1711t27"),y(c,"transform","translate("+ee*.5+","+kt*.05+")"),y($,"class","countries"),y($,"mask","url(#mask)"),y(P,"class","outline svelte-1711t27"),y(P,"d",e[5]({type:"Sphere"})),y(q,"class","links"),y(q,"mask","url(#mask)"),y(N,"class","nodes"),y(ce,"r",16),y(ce,"class","svelte-1711t27"),y(he,"d",pn(hn,128)()),y(he,"class","svelte-1711t27"),y(G,"class","star"),y(G,"transform","translate("+e[4]([-84.39,33.75]).join(", ")+")"),y(r,"width","100%"),y(r,"viewBox","0 0 "+ee+" "+kt),y(n,"class","wrapper"),y(t,"class","map svelte-1711t27"),Fr(()=>e[19].call(t))},m(v,L){O(v,t,L),T(t,n),T(n,r),T(r,a),T(a,o),T(o,s),T(r,c),T(c,u),T(u,l),T(u,i),T(c,f),T(f,h),T(h,d),T(f,p),T(p,w),T(f,b),T(r,$);for(let g=0;g<F.length;g+=1)F[g]&&F[g].m($,null);T(r,P),T(r,q);for(let g=0;g<H.length;g+=1)H[g]&&H[g].m(q,null);T(r,N);for(let g=0;g<B.length;g+=1)B[g]&&B[g].m(N,null);T(r,G),T(G,ce),T(G,he),T(t,m),M&&M.m(t,null),T(t,S),j&&j.m(t,null),oe=kr(t,e[19].bind(t)),pe=!0},p(v,[L]){if(L&104){ge=Se(v[3].features);let g;for(g=0;g<ge.length;g+=1){const k=Jn(v,ge,g);F[g]?F[g].p(k,L):(F[g]=Qn(k),F[g].c(),F[g].m($,null))}for(;g<F.length;g+=1)F[g].d(1);F.length=ge.length}if(L&422){Ee=Se(v[7]);let g;for(g=0;g<Ee.length;g+=1){const k=Zn(v,Ee,g);H[g]?H[g].p(k,L):(H[g]=Vn(k),H[g].c(),H[g].m(q,null))}for(;g<H.length;g+=1)H[g].d(1);H.length=Ee.length}if(L&726){Ae=Se(v[6]);let g;for(g=0;g<Ae.length;g+=1){const k=Xn(v,Ae,g);B[g]?B[g].p(k,L):(B[g]=xn(k),B[g].c(),B[g].m(N,null))}for(;g<B.length;g+=1)B[g].d(1);B.length=Ae.length}v[1]?M?(M.p(v,L),L&2&&D(M,1)):(M=er(v),M.c(),D(M,1),M.m(t,S)):M&&(Qe(),U(M,1,1,()=>{M=null}),Ve()),v[2]?j?(j.p(v,L),L&4&&D(j,1)):(j=tr(v),j.c(),D(j,1),j.m(t,null)):j&&(Qe(),U(j,1,1,()=>{j=null}),Ve())},i(v){pe||(D(M),D(j),pe=!0)},o(v){U(M),U(j),pe=!1},d(v){v&&_(t),$t(F,v),$t(H,v),$t(B,v),M&&M.d(),j&&j.d(),oe()}}}const ee=2e3,kt=1080;function Iu(e,t,n){let{world:r}=t,{data:a}=t;const o=Ja(r,r.objects.world),s=Wa().fitExtent([[10,10],[ee-10,kt-10]],o),c=ia().projection(s),u=[...Yn(a,m=>m.src).map(m=>({name:m.src,coords:[m.src_lon,m.src_lat]})),...Yn(a,m=>m.dst).map(m=>({name:m.dst,coords:[m.dst_lon,m.dst_lat]}))].map(m=>({...m,outgoing:un(a.filter(S=>S.src===m.name),S=>S.count),incoming:un(a.filter(S=>S.dst===m.name),S=>S.count)})),l=ha(u,m=>m.name),i=a.map(m=>({source:l.get(m.src),target:l.get(m.dst),count:m.count})).map(m=>({...m,feature:{type:"LineString",coordinates:[m.source.coords,m.target.coords]}})),f=cn().domain([0,ln(i,m=>m.count)]).range([0,16]),h=cn().domain([0,ln(u,m=>m.incoming||m.outgoing)]).range([0,28]);let d,p=null,w=null;const b=(m,S)=>{const oe=_a(m,(pe,ge)=>Jr(pe.count,ge.count)).map(pe=>pe[S].name);return oe.length===1?oe[0]:oe.length<=3?[oe.slice(0,-1).join(", "),"&",oe.at(-1)].join(" "):oe.slice(0,3).join(", ")+"..."},$=(m,S)=>Ga(m,S.coords),P=m=>n(2,w=m),q=()=>n(2,w=null),N=m=>{n(1,p={...m,links:i.filter(S=>[S.source.name,S.target.name].includes(m.name))})},G=()=>n(1,p=null),ce=(m,S)=>[S.source.name,S.target.name].includes(m.name);function he(){d=this.clientWidth,n(0,d)}return e.$$set=m=>{"world"in m&&n(11,r=m.world),"data"in m&&n(12,a=m.data)},[d,p,w,o,s,c,u,i,f,h,b,r,a,$,P,q,N,G,ce,he]}class Cu extends sr{constructor(t){super(),ur(this,t,Iu,Ou,ar,{world:11,data:12})}}function nr(e){let t,n;return t=new xr({}),{c(){ye(t.$$.fragment)},l(r){$e(t.$$.fragment,r)},m(r,a){we(t,r,a),n=!0},i(r){n||(D(t.$$.fragment,r),n=!0)},o(r){U(t.$$.fragment,r),n=!1},d(r){be(t,r)}}}function Mu(e){let t;return{c(){t=X("Routes de la traite des esclaves africains")},l(n){t=Z(n,"Routes de la traite des esclaves africains")},m(n,r){O(n,t,r)},d(n){n&&_(t)}}}function rr(e){let t,n;return t=new Cu({props:{world:e[1],data:e[2]}}),{c(){ye(t.$$.fragment)},l(r){$e(t.$$.fragment,r)},m(r,a){we(t,r,a),n=!0},p(r,a){const o={};a&2&&(o.world=r[1]),a&4&&(o.data=r[2]),t.$set(o)},i(r){n||(D(t.$$.fragment,r),n=!0)},o(r){U(t.$$.fragment,r),n=!1},d(r){be(t,r)}}}function ju(e){let t,n;return t=new ea({props:{prev:"/challenge03",next:"/challenge05"}}),{c(){ye(t.$$.fragment)},l(r){$e(t.$$.fragment,r)},m(r,a){we(t,r,a),n=!0},p:ir,i(r){n||(D(t.$$.fragment,r),n=!0)},o(r){U(t.$$.fragment,r),n=!1},d(r){be(t,r)}}}function Lu(e){let t,n="Semaine 4";return{c(){t=te("a"),t.textContent=n,this.h()},l(r){t=re(r,"A",{href:!0,target:!0,slot:!0,"data-svelte-h":!0}),zr(t)!=="svelte-s57vjs"&&(t.textContent=n),this.h()},h(){y(t,"href","https://raw.githubusercontent.com/ajstarks/dubois-data-portraits/master/challenge/2024/challenge04/original-plate-01.jpg"),y(t,"target","_blank"),y(t,"slot","week")},m(r,a){O(r,t,a)},p:ir,d(r){r&&_(t)}}}function Ru(e){let t,n,r,a,o,s,c,u=!e[0]&&nr();r=new Qr({props:{$$slots:{default:[Mu]},$$scope:{ctx:e}}});let l=e[1]&&e[2]&&rr(e);return s=new Vr({props:{$$slots:{week:[Lu],default:[ju]},$$scope:{ctx:e}}}),{c(){t=ne(),u&&u.c(),n=ne(),ye(r.$$.fragment),a=ne(),l&&l.c(),o=ne(),ye(s.$$.fragment),this.h()},l(i){qr("svelte-g4s6k5",document.head).forEach(_),t=ae(i),u&&u.l(i),n=ae(i),$e(r.$$.fragment,i),a=ae(i),l&&l.l(i),o=ae(i),$e(s.$$.fragment,i),this.h()},h(){document.title="Du Bois Challenge 2024 | Semaine 4"},m(i,f){O(i,t,f),u&&u.m(i,f),O(i,n,f),we(r,i,f),O(i,a,f),l&&l.m(i,f),O(i,o,f),we(s,i,f),c=!0},p(i,[f]){i[0]?u&&(Qe(),U(u,1,1,()=>{u=null}),Ve()):u?f&1&&D(u,1):(u=nr(),u.c(),D(u,1),u.m(n.parentNode,n));const h={};f&8&&(h.$$scope={dirty:f,ctx:i}),r.$set(h),i[1]&&i[2]?l?(l.p(i,f),f&6&&D(l,1)):(l=rr(i),l.c(),D(l,1),l.m(o.parentNode,o)):l&&(Qe(),U(l,1,1,()=>{l=null}),Ve());const d={};f&8&&(d.$$scope={dirty:f,ctx:i}),s.$set(d)},i(i){c||(D(u),D(r.$$.fragment,i),D(l),D(s.$$.fragment,i),c=!0)},o(i){U(u),U(r.$$.fragment,i),U(l),U(s.$$.fragment,i),c=!1},d(i){i&&(_(t),_(n),_(a),_(o)),u&&u.d(i),be(r,i),l&&l.d(i),be(s,i)}}}function Du(e,t,n){let r=!1,a,o;return Br(async()=>{n(1,a=await sa("data/challenge04/world.json")),n(2,o=await la("data/challenge04/data.csv",fa)),setTimeout(()=>n(0,r=!0),500)}),[r,a,o]}class Wu extends sr{constructor(t){super(),ur(this,t,Du,Ru,ar,{})}}export{Wu as component};
