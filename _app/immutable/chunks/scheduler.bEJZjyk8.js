function g(){}const A=t=>t;function x(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function F(){return Object.create(null)}function j(t){t.forEach(w)}function E(t){return typeof t=="function"}function P(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function S(t){return Object.keys(t).length===0}function v(t,...n){if(t==null){for(const o of n)o(void 0);return g}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function U(t,n,e){t.$$.on_destroy.push(v(n,e))}function B(t,n,e,o){if(t){const r=y(t,n,e,o);return t[0](r)}}function y(t,n,e,o){return t[1]&&o?x(e.ctx.slice(),t[1](o(n))):e.ctx}function C(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],f=Math.max(n.dirty.length,r.length);for(let u=0;u<f;u+=1)l[u]=n.dirty[u]|r[u];return l}return n.dirty|r}return n.dirty}function D(t,n,e,o,r,l){if(r){const f=y(n,e,o,l);t.p(f,r)}}function G(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function H(t){return t&&E(t.destroy)?t.destroy:g}let i;function d(t){i=t}function m(){if(!i)throw new Error("Function called outside component initialization");return i}function I(t){m().$$.on_mount.push(t)}function J(t){m().$$.after_update.push(t)}const a=[],b=[];let s=[];const _=[],k=Promise.resolve();let p=!1;function O(){p||(p=!0,k.then(z))}function K(){return O(),k}function q(t){s.push(t)}function L(t){_.push(t)}const h=new Set;let c=0;function z(){if(c!==0)return;const t=i;do{try{for(;c<a.length;){const n=a[c];c++,d(n),M(n.$$)}}catch(n){throw a.length=0,c=0,n}for(d(null),a.length=0,c=0;b.length;)b.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];h.has(e)||(h.add(e),e())}s.length=0}while(a.length);for(;_.length;)_.pop()();p=!1,h.clear(),d(t)}function M(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(q)}}function N(t){const n=[],e=[];s.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),s=n}export{L as A,q as a,C as b,B as c,U as d,H as e,J as f,G as g,b as h,F as i,z as j,E as k,S as l,N as m,g as n,I as o,i as p,d as q,j as r,P as s,K as t,D as u,w as v,a as w,O as x,x as y,A as z};
