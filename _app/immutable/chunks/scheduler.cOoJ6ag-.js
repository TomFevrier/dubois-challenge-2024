function k(){}const M=t=>t;function x(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function F(){return Object.create(null)}function j(t){t.forEach(w)}function P(t){return typeof t=="function"}function S(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function U(t){return Object.keys(t).length===0}function E(t,...n){if(t==null){for(const o of n)o(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function A(t,n,e){t.$$.on_destroy.push(E(n,e))}function B(t,n,e,o){if(t){const c=g(t,n,e,o);return t[0](c)}}function g(t,n,e,o){return t[1]&&o?x(e.ctx.slice(),t[1](o(n))):e.ctx}function C(t,n,e,o){if(t[2]&&o){const c=t[2](o(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const l=[],f=Math.max(n.dirty.length,c.length);for(let u=0;u<f;u+=1)l[u]=n.dirty[u]|c[u];return l}return n.dirty|c}return n.dirty}function D(t,n,e,o,c,l){if(c){const f=g(n,e,o,l);t.p(f,c)}}function G(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}let i;function d(t){i=t}function y(){if(!i)throw new Error("Function called outside component initialization");return i}function H(t){y().$$.on_mount.push(t)}function I(t){y().$$.after_update.push(t)}const a=[],b=[];let s=[];const h=[],m=Promise.resolve();let p=!1;function v(){p||(p=!0,m.then(q))}function J(){return v(),m}function O(t){s.push(t)}function K(t){h.push(t)}const _=new Set;let r=0;function q(){if(r!==0)return;const t=i;do{try{for(;r<a.length;){const n=a[r];r++,d(n),z(n.$$)}}catch(n){throw a.length=0,r=0,n}for(d(null),a.length=0,r=0;b.length;)b.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];_.has(e)||(_.add(e),e())}s.length=0}while(a.length);for(;h.length;)h.pop()();p=!1,_.clear(),d(t)}function z(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function L(t){const n=[],e=[];s.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),s=n}export{B as a,C as b,A as c,I as d,b as e,F as f,G as g,q as h,P as i,U as j,O as k,L as l,i as m,k as n,H as o,d as p,w as q,j as r,S as s,J as t,D as u,a as v,v as w,x,M as y,K as z};