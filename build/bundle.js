var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let u,i;function a(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function l(t){let n;return a(t,(t=>n=t))(),n}function f(t,n,e){t.$$.on_destroy.push(a(n,e))}function p(t,n,e,o){if(t){const r=$(t,n,e,o);return t[0](r)}}function $(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function d(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function m(t,n,e,o,r,s){if(r){const c=$(n,e,o,s);t.p(c,r)}}function h(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function g(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function y(t,n){const e={};n=new Set(n);for(const o in t)n.has(o)||"$"===o[0]||(e[o]=t[o]);return e}function v(t,n){t.appendChild(n)}function b(t,n,e){t.insertBefore(n,e||null)}function x(t){t.parentNode.removeChild(t)}function w(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function _(){return E(" ")}function R(){return E("")}function P(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function k(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function C(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in n)null==n[o]?t.removeAttribute(o):"style"===o?t.style.cssText=n[o]:"__value"===o?t.value=t[o]=n[o]:e[o]&&e[o].set?t[o]=n[o]:k(t,o,n[o])}function A(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function S(t){i=t}function O(){if(!i)throw new Error("Function called outside component initialization");return i}function I(){const t=O();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}function N(t,n){O().$$.context.set(t,n)}function T(t){return O().$$.context.get(t)}const L=[],j=[],U=[],M=[],F=Promise.resolve();let B=!1;function H(){B||(B=!0,F.then(Y))}function K(t){U.push(t)}const q=new Set;let z=0;function Y(){const t=i;do{for(;z<L.length;){const t=L[z];z++,S(t),D(t.$$)}for(S(null),L.length=0,z=0;j.length;)j.pop()();for(let t=0;t<U.length;t+=1){const n=U[t];q.has(n)||(q.add(n),n())}U.length=0}while(L.length);for(;M.length;)M.pop()();B=!1,q.clear(),S(t)}function D(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(K)}}const G=new Set;let J;function Q(){J={r:0,c:[],p:J}}function V(){J.r||r(J.c),J=J.p}function W(t,n){t&&t.i&&(G.delete(t),t.i(n))}function X(t,n,e,o){if(t&&t.o){if(G.has(t))return;G.add(t),J.c.push((()=>{G.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function Z(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],u=n[s];if(u){for(const t in c)t in u||(o[t]=1);for(const t in u)r[t]||(e[t]=u[t],r[t]=1);t[s]=u}else for(const t in c)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function tt(t){return"object"==typeof t&&null!==t?t:{}}function nt(t){t&&t.c()}function et(t,n,o,c){const{fragment:u,on_mount:i,on_destroy:a,after_update:l}=t.$$;u&&u.m(n,o),c||K((()=>{const n=i.map(e).filter(s);a?a.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(K)}function ot(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(n,e,s,c,u,a,l,f=[-1]){const p=i;S(n);const $=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(p?p.$$.context:[])),callbacks:o(),dirty:f,skip_bound:!1,root:e.target||p.$$.root};l&&l($.root);let d=!1;if($.ctx=s?s(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return $.ctx&&u($.ctx[t],$.ctx[t]=r)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](r),d&&function(t,n){-1===t.$$.dirty[0]&&(L.push(t),H(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],$.update(),d=!0,r($.before_update),$.fragment=!!c&&c($.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);$.fragment&&$.fragment.l(t),t.forEach(x)}else $.fragment&&$.fragment.c();e.intro&&W(n.$$.fragment),et(n,e.target,e.anchor,e.customElement),Y()}S(p)}class st{$destroy(){ot(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ct=t=>void 0===t,ut=t=>"function"==typeof t,it=t=>"number"==typeof t;function at(){let t=0;return()=>t++}const lt="undefined"==typeof window;function ft(t,n,e){return t.addEventListener(n,e),()=>t.removeEventListener(n,e)}const pt=[];function $t(n,e=t){let o;const r=new Set;function s(t){if(c(n,t)&&(n=t,o)){const t=!pt.length;for(const t of r)t[1](),pt.push(t,n);if(t){for(let t=0;t<pt.length;t+=2)pt[t][0](pt[t+1]);pt.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(c,u=t){const i=[c,u];return r.add(i),1===r.size&&(o=e(s)||t),c(n),()=>{r.delete(i),0===r.size&&(o(),o=null)}}}}function dt(n,e,o){const c=!Array.isArray(n),u=c?[n]:n,i=e.length<2;return l=n=>{let o=!1;const l=[];let f=0,p=t;const $=()=>{if(f)return;p();const o=e(c?l[0]:l,n);i?n(o):p=s(o)?o:t},d=u.map(((t,n)=>a(t,(t=>{l[n]=t,f&=~(1<<n),o&&$()}),(()=>{f|=1<<n}))));return o=!0,$(),function(){r(d),p()}},{subscribe:$t(o,l).subscribe};var l}const mt=t=>`@@svnav-ctx__${t}`,ht=mt("LOCATION"),gt=mt("ROUTER"),yt=mt("ROUTE"),vt=mt("ROUTE_PARAMS"),bt=mt("FOCUS_ELEM"),xt=/^:(.+)/,wt=(t,n)=>t.substr(0,n.length)===n,Et=t=>"*"===t[0],_t=t=>t.replace(/(^\/+|\/+$)/g,"");function Rt(t,n=!1){const e=_t(t).split("/");return n?e.filter(Boolean):e}const Pt=(t,n)=>t+(n?`?${n}`:""),kt=t=>`/${_t(t)}`;function Ct(...t){const n=t.map((t=>Rt(t,!0).join("/"))).join("/");return kt(n)}const At={1:"Link",2:"Route",3:"Router",4:"useFocus",5:"useLocation",6:"useMatch",7:"useNavigate",8:"useParams",9:"useResolvable",10:"useResolve",11:"navigate"},St=t=>At[t];function Ot(t,n,e,o){const r=e&&function(t,n){let e;return 2===t?e=n.path?`path="${n.path}"`:"default":1===t?e=`to="${n.to}"`:3===t&&(e=`basepath="${n.basepath||""}"`),`<${St(t)} ${e||""} />`}(o||t,e),s=r?`\n\nOccurred in: ${r}`:"",c=St(t);return`<${c}> ${ut(n)?n(c):n}${s}`}const It=t=>(...n)=>t(Ot(...n)),Nt=It((t=>{throw new Error(t)})),Tt=It(console.warn);function Lt(t,n){return{route:t,score:t.default?0:Rt(t.fullPath).reduce(((t,n)=>{let e=t;return e+=4,(t=>""===t)(n)?e+=1:(t=>xt.test(t))(n)?e+=2:Et(n)?e-=5:e+=3,e}),0),index:n}}function jt(t,n){let e,o;const[r]=n.split("?"),s=Rt(r),c=""===s[0],u=function(t){return t.map(Lt).sort(((t,n)=>t.score<n.score?1:t.score>n.score?-1:t.index-n.index))}(t);for(let t=0,r=u.length;t<r;t++){const{route:r}=u[t];let i=!1;const a={},l=t=>({...r,params:a,uri:t});if(r.default){o=l(n);continue}const f=Rt(r.fullPath),p=Math.max(s.length,f.length);let $=0;for(;$<p;$++){const t=f[$],n=s[$];if(!ct(t)&&Et(t)){const n="*"===t?"*":t.slice(1);a[n]=s.slice($).map(decodeURIComponent).join("/");break}if(ct(n)){i=!0;break}const e=xt.exec(t);if(e&&!c){const t=decodeURIComponent(n);a[e[1]]=t}else if(t!==n){i=!0;break}}if(!i){e=l(Ct(...s.slice(0,$)));break}}return e||o||null}function Ut(t,n){return jt([t],n)}function Mt(t,n){const{pathname:e,hash:o="",search:r="",state:s}=t,c=Rt(n,!0),u=Rt(e,!0);for(;c.length;)c[0]!==u[0]&&Nt(3,`Invalid state: All locations must begin with the basepath "${n}", found "${e}"`),c.shift(),u.shift();return{pathname:Ct(...u),hash:o,search:r,state:s}}const Ft=t=>1===t.length?"":t;function Bt(t){const n=t.indexOf("?"),e=t.indexOf("#"),o=-1!==n,r=-1!==e,s=r?Ft(t.substr(e)):"",c=r?t.substr(0,e):t,u=o?Ft(c.substr(n)):"";return{pathname:o?c.substr(0,n):c,search:u,hash:s}}function Ht(t,n,e){return Ct(e,function(t,n){if(wt(t,"/"))return t;const[e,o]=t.split("?"),[r]=n.split("?"),s=Rt(e),c=Rt(r);if(""===s[0])return Pt(r,o);if(!wt(s[0],".")){const t=c.concat(s).join("/");return Pt(("/"===r?"":"/")+t,o)}const u=c.concat(s),i=[];return u.forEach((t=>{".."===t?i.pop():"."!==t&&i.push(t)})),Pt(`/${i.join("/")}`,o)}(t,n))}function Kt(t,n){const e=kt(t.replace(/\*.*$/,""));const o=Rt(e,!0),r=Ut({fullPath:e},Ct(...Rt(n,!0).slice(0,o.length)));return r&&r.uri}const qt="POP";function zt(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function Yt(t,n){return{...Bt(n),state:t}}const Dt=!(lt||!window.document||!window.document.createElement),Gt=!lt&&"null"===window.location.origin,Jt=function(t){let n=[],e=zt(t),o=qt;const r=(t=n)=>t.forEach((t=>t({location:e,action:o})));return{get location(){return e},listen(s){n.push(s);r([s]);const c=ft(t,"popstate",(()=>{e=zt(t),o=qt,r([s])}));return()=>{c(),n=n.filter((t=>t!==s))}},navigate(n,s){const{state:c={},replace:u=!1}=s||{};if(o=u?"REPLACE":"PUSH",it(n))s&&Tt(11,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),o=qt,t.history.go(n);else{const e={...c,_key:Math.random().toString(36).substring(2)};try{t.history[u?"replaceState":"pushState"](e,"",n)}catch(e){t.location[u?"replace":"assign"](n)}}e=zt(t),r()}}}(Dt&&!Gt?window:function(t="/"){let n=0,e=[Yt(null,t)];return{get entries(){return e},get location(){return e[n]},addEventListener(){},removeEventListener(){},history:{get state(){return e[n].state},pushState(t,o,r){n++,e=e.slice(0,n),e.push(Yt(t,r))},replaceState(t,o,r){e[n]=Yt(t,r)},go(t){const o=n+t;o<0||o>e.length-1||(n=o)}}}}());let Qt=null,Vt=!0;function Wt(t){(!Qt||t.level>Qt.level||t.level===Qt.level&&function(t,n){const e=document.querySelectorAll("[data-svnav-router]");for(let o=0;o<e.length;o++){const r=e[o],s=Number(r.dataset.svnavRouter);if(s===t)return!0;if(s===n)return!1}return!1}(t.routerId,Qt.routerId))&&(Qt=t)}function Xt(t){if(!t)return!1;const n="tabindex";try{if(!t.hasAttribute(n)){let e;t.setAttribute(n,"-1");const o=()=>{t.removeAttribute(n),e()};e=ft(t,"blur",o)}return t.focus(),document.activeElement===t}catch(t){return!1}}function Zt(t,n){return Number(t.dataset.svnavRouteEnd)===n}function tn(t,n=document){return n.querySelector(t)}function nn(t){Promise.resolve(l(t.focusElement)).then((n=>{const e=n||function(t){let n=tn(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!Zt(n,t);){if(/^H[1-6]$/i.test(n.tagName))return n;const t=tn("h1,h2,h3,h4,h5,h6",n);if(t)return t;n=n.nextElementSibling}return null}(t.id);e||Tt(3,'Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don\'t want this Route or Router to manage focus, pass "primary={false}" to it.',t,2);Xt(e)||Xt(document.documentElement)}))}const en=(t,n,e)=>(o,r)=>(H(),F).then((()=>{if(Qt&&!Vt){if(o&&nn(Qt.route),t.announcements&&r){const{path:o,fullPath:r,meta:s,params:c,uri:u}=Qt.route,i=t.createAnnouncement({path:o,fullPath:r,meta:s,params:c,uri:u},l(e));Promise.resolve(i).then((t=>{n.set(t)}))}Qt=null}else Vt=!1}));function on(t){let n,e,o,r,s;const c=t[20].default,u=p(c,t,t[19],null);let i=t[2]&&t[4]&&t[1].announcements&&function(t){let n,e;return{c(){n=w("div"),e=E(t[0]),k(n,"role","status"),k(n,"aria-atomic","true"),k(n,"aria-live","polite"),k(n,"style","position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;")},m(t,o){b(t,n,o),v(n,e)},p(t,n){1&n[0]&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(e,t[0])},d(t){t&&x(n)}}}(t);return{c(){n=w("div"),e=_(),u&&u.c(),o=_(),i&&i.c(),r=R(),A(n,"display","none"),k(n,"aria-hidden","true"),k(n,"data-svnav-router",t[3])},m(t,c){b(t,n,c),b(t,e,c),u&&u.m(t,c),b(t,o,c),i&&i.m(t,c),b(t,r,c),s=!0},p(t,n){u&&u.p&&(!s||524288&n[0])&&m(u,c,t,t[19],s?d(c,t[19],n,null):h(t[19]),null),t[2]&&t[4]&&t[1].announcements&&i.p(t,n)},i(t){s||(W(u,t),s=!0)},o(t){X(u,t),s=!1},d(t){t&&x(n),t&&x(e),u&&u.d(t),t&&x(o),i&&i.d(t),t&&x(r)}}}const rn=at(),sn="/";function cn(t,n,e){let o,r,s,c,u,{$$slots:i={},$$scope:a}=n,{basepath:l=sn}=n,{url:p=null}=n,{history:$=Jt}=n,{primary:d=!0}=n,{a11y:m={}}=n;const h={createAnnouncement:t=>`Navigated to ${t.uri}`,announcements:!0,...m},g=l,y=kt(l),v=T(ht),b=T(gt),x=!v,w=rn(),E=d&&!(b&&!b.manageFocus),_=$t("");f(t,_,(t=>e(0,u=t)));const R=$t([]);f(t,R,(t=>e(18,c=t)));const P=$t(null);f(t,P,(t=>e(16,r=t)));let k=!1;const C=x?0:b.level+1,A=x?$t(Mt(lt?Bt(p):$.location,y)):v;f(t,A,(t=>e(15,o=t)));const S=$t(o);f(t,S,(t=>e(17,s=t)));const I=en(h,_,A),L=t=>n=>n.filter((n=>n.id!==t));var j;return x||l===sn||Tt(3,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:l}),x&&(j=()=>$.listen((t=>{const n=Mt(t.location,y);S.set(o),A.set(n)})),O().$$.on_mount.push(j),N(ht,A)),N(gt,{activeRoute:P,registerRoute:function(t){if(lt){if(k)return;const n=Ut(t,o.pathname);if(n)return k=!0,n}else R.update((n=>{const e=L(t.id)(n);return e.push(t),e}))},unregisterRoute:function(t){R.update(L(t))},manageFocus:E,level:C,id:w,history:x?$:b.history,basepath:x?y:b.basepath}),t.$$set=t=>{"basepath"in t&&e(10,l=t.basepath),"url"in t&&e(11,p=t.url),"history"in t&&e(12,$=t.history),"primary"in t&&e(13,d=t.primary),"a11y"in t&&e(14,m=t.a11y),"$$scope"in t&&e(19,a=t.$$scope)},t.$$.update=()=>{if(1024&t.$$.dirty[0]&&l!==g&&Tt(3,'You cannot change the "basepath" prop. It is ignored.'),294912&t.$$.dirty[0]){const t=jt(c,o.pathname);P.set(t)}if(163840&t.$$.dirty[0]&&x){const t=!!o.hash,n=!t&&E,e=!t||o.pathname!==s.pathname;I(n,e)}65536&t.$$.dirty[0]&&E&&r&&r.primary&&Wt({level:C,routerId:w,route:r})},[u,h,x,w,E,_,R,P,A,S,l,p,$,d,m,o,r,s,c,a,i]}var un=class extends st{constructor(t){super(),rt(this,t,cn,on,c,{basepath:10,url:11,history:12,primary:13,a11y:14},null,[-1,-1])}};function an(t,n,e=gt,o=3){T(e)||Nt(t,(t=>`You cannot use ${t} outside of a ${St(o)}.`),n)}function ln(){return an(5),(t=>{const{subscribe:n}=T(t);return{subscribe:n}})(ht)}function fn(){const{history:t}=T(gt);return t}function pn(){const t=T(yt);return t?dt(t,(t=>t.base)):$t("/")}function $n(){an(10);const t=pn(),{basepath:n}=T(gt);return e=>Ht(e,l(t),n)}const dn=t=>({params:16&t,location:8&t}),mn=t=>({params:lt?l(t[9]):t[4],location:t[3],navigate:t[10]});function hn(t){let n,e;return n=new un({props:{primary:t[1],$$slots:{default:[vn]},$$scope:{ctx:t}}}),{c(){nt(n.$$.fragment)},m(t,o){et(n,t,o),e=!0},p(t,e){const o={};2&e&&(o.primary=t[1]),264217&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(W(n.$$.fragment,t),e=!0)},o(t){X(n.$$.fragment,t),e=!1},d(t){ot(n,t)}}}function gn(t){let n;const e=t[17].default,o=p(e,t,t[18],mn);return{c(){o&&o.c()},m(t,e){o&&o.m(t,e),n=!0},p(t,r){o&&o.p&&(!n||262168&r)&&m(o,e,t,t[18],n?d(e,t[18],r,dn):h(t[18]),mn)},i(t){n||(W(o,t),n=!0)},o(t){X(o,t),n=!1},d(t){o&&o.d(t)}}}function yn(t){let e,o,r;const s=[{location:t[3]},{navigate:t[10]},lt?l(t[9]):t[4],t[11]];var c=t[0];function u(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return c&&(e=new c(u())),{c(){e&&nt(e.$$.fragment),o=R()},m(t,n){e&&et(e,t,n),b(t,o,n),r=!0},p(t,n){const r=3608&n?Z(s,[8&n&&{location:t[3]},1024&n&&{navigate:t[10]},528&n&&tt(lt?l(t[9]):t[4]),2048&n&&tt(t[11])]):{};if(c!==(c=t[0])){if(e){Q();const t=e;X(t.$$.fragment,1,0,(()=>{ot(t,1)})),V()}c?(e=new c(u()),nt(e.$$.fragment),W(e.$$.fragment,1),et(e,o.parentNode,o)):e=null}else c&&e.$set(r)},i(t){r||(e&&W(e.$$.fragment,t),r=!0)},o(t){e&&X(e.$$.fragment,t),r=!1},d(t){t&&x(o),e&&ot(e,t)}}}function vn(t){let n,e,o,r;const s=[yn,gn],c=[];function u(t,n){return null!==t[0]?0:1}return n=u(t),e=c[n]=s[n](t),{c(){e.c(),o=R()},m(t,e){c[n].m(t,e),b(t,o,e),r=!0},p(t,r){let i=n;n=u(t),n===i?c[n].p(t,r):(Q(),X(c[i],1,1,(()=>{c[i]=null})),V(),e=c[n],e?e.p(t,r):(e=c[n]=s[n](t),e.c()),W(e,1),e.m(o.parentNode,o))},i(t){r||(W(e),r=!0)},o(t){X(e),r=!1},d(t){c[n].d(t),t&&x(o)}}}function bn(t){let n,e,o,r,s,c=t[2]&&hn(t);return{c(){n=w("div"),e=_(),c&&c.c(),o=_(),r=w("div"),A(n,"display","none"),k(n,"aria-hidden","true"),k(n,"data-svnav-route-start",t[5]),A(r,"display","none"),k(r,"aria-hidden","true"),k(r,"data-svnav-route-end",t[5])},m(t,u){b(t,n,u),b(t,e,u),c&&c.m(t,u),b(t,o,u),b(t,r,u),s=!0},p(t,[n]){t[2]?c?(c.p(t,n),4&n&&W(c,1)):(c=hn(t),c.c(),W(c,1),c.m(o.parentNode,o)):c&&(Q(),X(c,1,1,(()=>{c=null})),V())},i(t){s||(W(c),s=!0)},o(t){X(c),s=!1},d(t){t&&x(n),t&&x(e),c&&c.d(t),t&&x(o),t&&x(r)}}}const xn=at();function wn(t,e,o){let r;const s=["path","component","meta","primary"];let c,u,i,a,l=y(e,s),{$$slots:p={},$$scope:$}=e,{path:d=""}=e,{component:m=null}=e,{meta:h={}}=e,{primary:v=!0}=e;an(2,e);const b=xn(),{registerRoute:x,unregisterRoute:w,activeRoute:E}=T(gt);f(t,E,(t=>o(15,c=t)));const _=pn();f(t,_,(t=>o(16,i=t)));const R=ln();f(t,R,(t=>o(3,u=t)));const P=$t(null);let k;const C=$t(),A=$t({});f(t,A,(t=>o(4,a=t))),N(yt,C),N(vt,A),N(bt,P);const S=function(){an(7);const t=$n(),{navigate:n}=fn();return(e,o)=>{const r=it(e)?e:t(e);return n(r,o)}}();var I;return lt||(I=()=>w(b),O().$$.on_destroy.push(I)),t.$$set=t=>{o(23,e=n(n({},e),g(t))),o(11,l=y(e,s)),"path"in t&&o(12,d=t.path),"component"in t&&o(0,m=t.component),"meta"in t&&o(13,h=t.meta),"primary"in t&&o(1,v=t.primary),"$$scope"in t&&o(18,$=t.$$scope)},t.$$.update=()=>{if(77834&t.$$.dirty){const t=""===d,n=Ct(i,d),e={id:b,path:d,meta:h,default:t,fullPath:t?"":n,base:t?i:Kt(n,u.pathname),primary:v,focusElement:P};C.set(e),o(14,k=x(e))}if(49152&t.$$.dirty&&o(2,r=!!(k||c&&c.id===b)),49156&t.$$.dirty&&r){const{params:t}=k||c;A.set(t)}},e=g(e),[m,v,r,u,a,b,E,_,R,A,S,l,d,h,k,c,i,p,$]}var En=class extends st{constructor(t){super(),rt(this,t,wn,bn,c,{path:12,component:0,meta:13,primary:1})}};function _n(t){let e,o,r,s;const c=t[13].default,u=p(c,t,t[12],null);let i=[{href:t[0]},t[2],t[1]],a={};for(let t=0;t<i.length;t+=1)a=n(a,i[t]);return{c(){e=w("a"),u&&u.c(),C(e,a)},m(n,c){b(n,e,c),u&&u.m(e,null),o=!0,r||(s=P(e,"click",t[4]),r=!0)},p(t,[n]){u&&u.p&&(!o||4096&n)&&m(u,c,t,t[12],o?d(c,t[12],n,null):h(t[12]),null),C(e,a=Z(i,[(!o||1&n)&&{href:t[0]},4&n&&t[2],2&n&&t[1]]))},i(t){o||(W(u,t),o=!0)},o(t){X(u,t),o=!1},d(t){t&&x(e),u&&u.d(t),r=!1,s()}}}function Rn(t,e,o){let r,s,c,u,i;const a=["to","replace","state","getProps"];let l,p=y(e,a),{$$slots:$={},$$scope:d}=e,{to:m}=e,{replace:h=!1}=e,{state:v={}}=e,{getProps:b=null}=e;an(1,e);const x=ln();f(t,x,(t=>o(11,l=t)));const w=I(),E=$n(),{navigate:_}=fn();return t.$$set=t=>{o(18,e=n(n({},e),g(t))),o(17,p=y(e,a)),"to"in t&&o(5,m=t.to),"replace"in t&&o(6,h=t.replace),"state"in t&&o(7,v=t.state),"getProps"in t&&o(8,b=t.getProps),"$$scope"in t&&o(12,d=t.$$scope)},t.$$.update=()=>{2080&t.$$.dirty&&o(0,r=E(m,l)),2049&t.$$.dirty&&o(10,s=wt(l.pathname,r)),2049&t.$$.dirty&&o(9,c=r===l.pathname),512&t.$$.dirty&&o(2,u=c?{"aria-current":"page"}:{}),o(1,i=(()=>{if(ut(b)){const t=b({location:l,href:r,isPartiallyCurrent:s,isCurrent:c});return{...p,...t}}return p})())},e=g(e),[r,i,u,x,function(t){if(w("click",t),function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)){t.preventDefault();_(r,{state:v,replace:c||h})}},m,h,v,b,c,s,l,d,$]}var Pn=class extends st{constructor(t){super(),rt(this,t,Rn,_n,c,{to:5,replace:6,state:7,getProps:8})}};function kn(n){let e;return{c(){e=w("p"),e.textContent="home"},m(t,n){b(t,e,n)},p:t,i:t,o:t,d(t){t&&x(e)}}}class Cn extends st{constructor(t){super(),rt(this,t,null,kn,c,{})}}function An(n){let e;return{c(){e=w("p"),e.textContent="about"},m(t,n){b(t,e,n)},p:t,i:t,o:t,d(t){t&&x(e)}}}class Sn extends st{constructor(t){super(),rt(this,t,null,An,c,{})}}function On(n){let e;return{c(){e=w("p"),e.textContent="members"},m(t,n){b(t,e,n)},p:t,i:t,o:t,d(t){t&&x(e)}}}class In extends st{constructor(t){super(),rt(this,t,null,On,c,{})}}function Nn(t){let n;return{c(){n=w("ul"),n.textContent="Base"},m(t,e){b(t,n,e)},d(t){t&&x(n)}}}function Tn(t){let n;return{c(){n=w("ul"),n.textContent="Home"},m(t,e){b(t,n,e)},d(t){t&&x(n)}}}function Ln(t){let n;return{c(){n=w("ul"),n.textContent="About"},m(t,e){b(t,n,e)},d(t){t&&x(n)}}}function jn(t){let n;return{c(){n=w("ul"),n.textContent="members"},m(t,e){b(t,n,e)},d(t){t&&x(n)}}}function Un(t){let n,e,o,r,s,c,i,a,l,f,p,$,d,m,h,g,y,E,R,C,A,S,O,I,N,T,L,j,U;return f=new Pn({props:{to:"/",$$slots:{default:[Nn]},$$scope:{ctx:t}}}),$=new Pn({props:{to:"home",$$slots:{default:[Tn]},$$scope:{ctx:t}}}),m=new Pn({props:{to:"about",$$slots:{default:[Ln]},$$scope:{ctx:t}}}),g=new Pn({props:{to:"members",$$slots:{default:[jn]},$$scope:{ctx:t}}}),C=new En({props:{path:"home",component:Cn}}),S=new En({props:{path:"about",component:Sn}}),I=new En({props:{path:"members",component:In}}),{c(){var v,b;n=w("div"),e=w("div"),o=w("h1"),o.textContent="ST4RT",r=_(),s=w("div"),c=w("img"),a=_(),l=w("li"),nt(f.$$.fragment),p=_(),nt($.$$.fragment),d=_(),nt(m.$$.fragment),h=_(),nt(g.$$.fragment),E=_(),R=w("div"),nt(C.$$.fragment),A=_(),nt(S.$$.fragment),O=_(),nt(I.$$.fragment),N=_(),T=w("div"),T.innerHTML="<p>ST4RT, since 2020.04 Copyright snwo; team leader, troublemaker;</p>",v=c.src,b=i=Fn,u||(u=document.createElement("a")),u.href=b,v!==u.href&&k(c,"src",i),k(c,"alt","Image Error"),k(l,"class",y=t[0]?"active":""),k(s,"class","BoxContainer"),k(e,"class","header"),k(R,"class","contents"),k(T,"class","footer"),k(n,"class","container")},m(u,i){b(u,n,i),v(n,e),v(e,o),v(e,r),v(e,s),v(s,c),v(s,a),v(s,l),et(f,l,null),v(l,p),et($,l,null),v(l,d),et(m,l,null),v(l,h),et(g,l,null),v(n,E),v(n,R),et(C,R,null),v(R,A),et(S,R,null),v(R,O),et(I,R,null),v(n,N),v(n,T),L=!0,j||(U=P(c,"click",t[1]),j=!0)},p(t,n){const e={};4&n&&(e.$$scope={dirty:n,ctx:t}),f.$set(e);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),m.$set(r);const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),g.$set(s),(!L||1&n&&y!==(y=t[0]?"active":""))&&k(l,"class",y)},i(t){L||(W(f.$$.fragment,t),W($.$$.fragment,t),W(m.$$.fragment,t),W(g.$$.fragment,t),W(C.$$.fragment,t),W(S.$$.fragment,t),W(I.$$.fragment,t),L=!0)},o(t){X(f.$$.fragment,t),X($.$$.fragment,t),X(m.$$.fragment,t),X(g.$$.fragment,t),X(C.$$.fragment,t),X(S.$$.fragment,t),X(I.$$.fragment,t),L=!1},d(t){t&&x(n),ot(f),ot($),ot(m),ot(g),ot(C),ot(S),ot(I),j=!1,U()}}}function Mn(t){let n,e;return n=new un({props:{$$slots:{default:[Un]},$$scope:{ctx:t}}}),{c(){nt(n.$$.fragment)},m(t,o){et(n,t,o),e=!0},p(t,[e]){const o={};5&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(W(n.$$.fragment,t),e=!0)},o(t){X(n.$$.fragment,t),e=!1},d(t){ot(n,t)}}}let Fn="images/st4rt.png";function Bn(t,n,e){let o;return e(0,o=!0),[o,()=>e(0,o=!o)]}return new class extends st{constructor(t){super(),rt(this,t,Bn,Mn,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map