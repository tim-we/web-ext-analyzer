/*! For license information please see viewer.bundle.js.LICENSE.txt */
(()=>{"use strict";var e={428:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,'/**\n * okaidia theme for JavaScript, CSS and HTML\n * Loosely based on Monokai textmate theme by http://www.monokai.nl/\n * @author ocodia\n */\ncode[class*="language-"],\npre[class*="language-"] {\n  color: #f8f8f2;\n  background: none;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.3);\n  font-family: Consolas, Monaco, \'Andale Mono\', \'Ubuntu Mono\', monospace;\n  font-size: 1em;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n}\n/* Code blocks */\npre[class*="language-"] {\n  padding: 1em;\n  margin: 0.5em 0;\n  overflow: auto;\n  border-radius: 0.3em;\n}\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n  background: #272822;\n}\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n  padding: 0.1em;\n  border-radius: 0.3em;\n  white-space: normal;\n}\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: #8292a2;\n}\n.token.punctuation {\n  color: #f8f8f2;\n}\n.token.namespace {\n  opacity: 0.7;\n}\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: #f92672;\n}\n.token.boolean,\n.token.number {\n  color: #ae81ff;\n}\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: #a6e22e;\n}\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n  color: #f8f8f2;\n}\n.token.atrule,\n.token.attr-value,\n.token.function,\n.token.class-name {\n  color: #e6db74;\n}\n.token.keyword {\n  color: #66d9ef;\n}\n.token.regex,\n.token.important {\n  color: #fd971f;\n}\n.token.important,\n.token.bold {\n  font-weight: bold;\n}\n.token.italic {\n  font-style: italic;\n}\n.token.entity {\n  cursor: help;\n}\n',""]);const i=r},462:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,"body {\n  font-family: sans-serif;\n  background: #2b2b2b;\n  color: white;\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n}\n#controls {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 0;\n  background-color: #5a5a5a;\n  padding: 0 5px;\n  display: none;\n}\n#file-content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  padding: 10px;\n}\n#file-content pre {\n  margin: 0;\n  -moz-tab-size: 4;\n  tab-size: 4;\n}\n",""]);const i=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(r[l]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},l=[],a=0;a<e.length;a++){var s=e[a],_=o.base?s[0]+o.base:s[0],u=i[_]||0,c="".concat(_," ").concat(u);i[_]=u+1;var p=t(c),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var d=r(f,o);o.byIndex=a,n.splice(a,0,{identifier:c,updater:d,references:1})}l.push(c)}return l}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var l=0;l<i.length;l++){var a=t(i[l]);n[a].references--}for(var s=o(e,r),_=0;_<i.length;_++){var u=t(i[_]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e,n,o,r,i,l,a,s={},_=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,c=Array.isArray;function p(e,n){for(var t in n)e[t]=n[t];return e}function f(e){var n=e.parentNode;n&&n.removeChild(e)}function d(e,t,r,i,l){var a={type:e,props:t,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==l?++o:l,__i:-1,__u:0};return null==l&&null!=n.vnode&&n.vnode(a),a}function h(e){return e.children}function v(e,n){this.props=e,this.context=n}function m(e,n){if(null==n)return e.__?m(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?m(e):null}function g(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return g(e)}}function y(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!b.__r++||i!==n.debounceRendering)&&((i=n.debounceRendering)||l)(b)}function b(){var e,t,o,i,l,s,_,u,c;for(r.sort(a);e=r.shift();)e.__d&&(t=r.length,i=void 0,s=(l=(o=e).__v).__e,u=[],c=[],(_=o.__P)&&((i=p({},l)).__v=l.__v+1,n.vnode&&n.vnode(i),P(_,i,l,o.__n,void 0!==_.ownerSVGElement,32&l.__u?[s]:null,u,null==s?m(l):s,!!(32&l.__u),c),i.__.__k[i.__i]=i,L(u,i,c),i.__e!=s&&g(i)),r.length>t&&r.sort(a));b.__r=0}function k(e,n,t,o,r,i,l,a,u,c,p){var f,d,h,v,m,g=o&&o.__k||_,y=n.length;for(t.__d=u,w(t,n,g),u=t.__d,f=0;f<y;f++)null!=(h=t.__k[f])&&"boolean"!=typeof h&&"function"!=typeof h&&(d=-1===h.__i?s:g[h.__i]||s,h.__i=f,P(e,h,d,r,i,l,a,u,c,p),v=h.__e,h.ref&&d.ref!=h.ref&&(d.ref&&N(d.ref,null,h),p.push(h.ref,h.__c||v,h)),null==m&&null!=v&&(m=v),65536&h.__u||d.__k===h.__k?u=E(h,u,e):"function"==typeof h.type&&void 0!==h.__d?u=h.__d:v&&(u=v.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=u,t.__e=m}function w(e,n,t){var o,r,i,l,a,s=n.length,_=t.length,u=_,p=0;for(e.__k=[],o=0;o<s;o++)null!=(r=e.__k[o]=null==(r=n[o])||"boolean"==typeof r||"function"==typeof r?null:"string"==typeof r||"number"==typeof r||"bigint"==typeof r||r.constructor==String?d(null,r,null,null,r):c(r)?d(h,{children:r},null,null,null):void 0===r.constructor&&r.__b>0?d(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)?(r.__=e,r.__b=e.__b+1,a=S(r,t,l=o+p,u),r.__i=a,i=null,-1!==a&&(u--,(i=t[a])&&(i.__u|=131072)),null==i||null===i.__v?(-1==a&&p--,"function"!=typeof r.type&&(r.__u|=65536)):a!==l&&(a===l+1?p++:a>l?u>s-l?p+=a-l:p--:p=a<l&&a==l-1?a-l:0,a!==o+p&&(r.__u|=65536))):(i=t[o])&&null==i.key&&i.__e&&(i.__e==e.__d&&(e.__d=m(i)),z(i,i,!1),t[o]=null,u--);if(u)for(o=0;o<_;o++)null!=(i=t[o])&&0==(131072&i.__u)&&(i.__e==e.__d&&(e.__d=m(i)),z(i,i))}function E(e,n,t){var o,r;if("function"==typeof e.type){for(o=e.__k,r=0;o&&r<o.length;r++)o[r]&&(o[r].__=e,n=E(o[r],n,t));return n}return e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e),n&&n.nextSibling}function S(e,n,t,o){var r=e.key,i=e.type,l=t-1,a=t+1,s=n[t];if(null===s||s&&r==s.key&&i===s.type)return t;if(o>(null!=s&&0==(131072&s.__u)?1:0))for(;l>=0||a<n.length;){if(l>=0){if((s=n[l])&&0==(131072&s.__u)&&r==s.key&&i===s.type)return l;l--}if(a<n.length){if((s=n[a])&&0==(131072&s.__u)&&r==s.key&&i===s.type)return a;a++}}return-1}function x(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||u.test(n)?t:t+"px"}function T(e,n,t,o,r){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(n in o)t&&n in t||x(e.style,n,"");if(t)for(n in t)o&&t[n]===o[n]||x(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/(PointerCapture)$|Capture$/,"$1")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?o?t.u=o.u:(t.u=Date.now(),e.addEventListener(n,i?M:C,i)):e.removeEventListener(n,i?M:C,i);else{if(r)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==n&&"height"!==n&&"href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&"rowSpan"!==n&&"colSpan"!==n&&"role"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,t))}}function C(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(n.event?n.event(e):e)}function M(e){return this.l[e.type+!0](n.event?n.event(e):e)}function P(e,t,o,r,i,l,a,s,_,u){var f,d,m,g,y,b,w,E,S,x,T,C,M,P,L,N=t.type;if(void 0!==t.constructor)return null;128&o.__u&&(_=!!(32&o.__u),l=[s=t.__e=o.__e]),(f=n.__b)&&f(t);e:if("function"==typeof N)try{if(E=t.props,S=(f=N.contextType)&&r[f.__c],x=f?S?S.props.value:f.__:r,o.__c?w=(d=t.__c=o.__c).__=d.__E:("prototype"in N&&N.prototype.render?t.__c=d=new N(E,x):(t.__c=d=new v(E,x),d.constructor=N,d.render=D),S&&S.sub(d),d.props=E,d.state||(d.state={}),d.context=x,d.__n=r,m=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=N.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=p({},d.__s)),p(d.__s,N.getDerivedStateFromProps(E,d.__s))),g=d.props,y=d.state,d.__v=t,m)null==N.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==N.getDerivedStateFromProps&&E!==g&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(E,x),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(E,d.__s,x)||t.__v===o.__v)){for(t.__v!==o.__v&&(d.props=E,d.state=d.__s,d.__d=!1),t.__e=o.__e,t.__k=o.__k,t.__k.forEach((function(e){e&&(e.__=t)})),T=0;T<d._sb.length;T++)d.__h.push(d._sb[T]);d._sb=[],d.__h.length&&a.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(E,d.__s,x),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(g,y,b)}))}if(d.context=x,d.props=E,d.__P=e,d.__e=!1,C=n.__r,M=0,"prototype"in N&&N.prototype.render){for(d.state=d.__s,d.__d=!1,C&&C(t),f=d.render(d.props,d.state,d.context),P=0;P<d._sb.length;P++)d.__h.push(d._sb[P]);d._sb=[]}else do{d.__d=!1,C&&C(t),f=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++M<25);d.state=d.__s,null!=d.getChildContext&&(r=p(p({},r),d.getChildContext())),m||null==d.getSnapshotBeforeUpdate||(b=d.getSnapshotBeforeUpdate(g,y)),k(e,c(L=null!=f&&f.type===h&&null==f.key?f.props.children:f)?L:[L],t,o,r,i,l,a,s,_,u),d.base=t.__e,t.__u&=-161,d.__h.length&&a.push(d),w&&(d.__E=d.__=null)}catch(e){t.__v=null,_||null!=l?(t.__e=s,t.__u|=_?160:32,l[l.indexOf(s)]=null):(t.__e=o.__e,t.__k=o.__k),n.__e(e,t,o)}else null==l&&t.__v===o.__v?(t.__k=o.__k,t.__e=o.__e):t.__e=A(o.__e,t,o,r,i,l,a,_,u);(f=n.diffed)&&f(t)}function L(e,t,o){t.__d=void 0;for(var r=0;r<o.length;r++)N(o[r],o[++r],o[++r]);n.__c&&n.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){n.__e(e,t.__v)}}))}function A(n,t,o,r,i,l,a,_,u){var p,d,h,v,g,y,b,w=o.props,E=t.props,S=t.type;if("svg"===S&&(i=!0),null!=l)for(p=0;p<l.length;p++)if((g=l[p])&&"setAttribute"in g==!!S&&(S?g.localName===S:3===g.nodeType)){n=g,l[p]=null;break}if(null==n){if(null===S)return document.createTextNode(E);n=i?document.createElementNS("http://www.w3.org/2000/svg",S):document.createElement(S,E.is&&E),l=null,_=!1}if(null===S)w===E||_&&n.data===E||(n.data=E);else{if(l=l&&e.call(n.childNodes),w=o.props||s,!_&&null!=l)for(w={},p=0;p<n.attributes.length;p++)w[(g=n.attributes[p]).name]=g.value;for(p in w)g=w[p],"children"==p||("dangerouslySetInnerHTML"==p?h=g:"key"===p||p in E||T(n,p,null,g,i));for(p in E)g=E[p],"children"==p?v=g:"dangerouslySetInnerHTML"==p?d=g:"value"==p?y=g:"checked"==p?b=g:"key"===p||_&&"function"!=typeof g||w[p]===g||T(n,p,g,w[p],i);if(d)_||h&&(d.__html===h.__html||d.__html===n.innerHTML)||(n.innerHTML=d.__html),t.__k=[];else if(h&&(n.innerHTML=""),k(n,c(v)?v:[v],t,o,r,i&&"foreignObject"!==S,l,a,l?l[0]:o.__k&&m(o,0),_,u),null!=l)for(p=l.length;p--;)null!=l[p]&&f(l[p]);_||(p="value",void 0!==y&&(y!==n[p]||"progress"===S&&!y||"option"===S&&y!==w[p])&&T(n,p,y,w[p],!1),p="checked",void 0!==b&&b!==n[p]&&T(n,p,b,w[p],!1))}return n}function N(e,t,o){try{"function"==typeof e?e(t):e.current=t}catch(e){n.__e(e,o)}}function z(e,t,o){var r,i;if(n.unmount&&n.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||N(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){n.__e(e,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&z(r[i],t,o||"function"!=typeof e.type);o||null==e.__e||f(e.__e),e.__=e.__e=e.__d=void 0}function D(e,n,t){return this.constructor(e,t)}function R(t,o,r){var i,l,a,_;n.__&&n.__(t,o),l=(i="function"==typeof r)?null:r&&r.__k||o.__k,a=[],_=[],P(o,t=(!i&&r||o).__k=function(n,t,o){var r,i,l,a={};for(l in t)"key"==l?r=t[l]:"ref"==l?i=t[l]:a[l]=t[l];if(arguments.length>2&&(a.children=arguments.length>3?e.call(arguments,2):o),"function"==typeof n&&null!=n.defaultProps)for(l in n.defaultProps)void 0===a[l]&&(a[l]=n.defaultProps[l]);return d(n,a,r,i,null)}(h,null,[t]),l||s,s,void 0!==o.ownerSVGElement,!i&&r?[r]:l?null:o.firstChild?e.call(o.childNodes):null,a,!i&&r?r:l?l.__e:o.firstChild,i,_),L(a,t,_)}e=_.slice,n={__e:function(e,n,t,o){for(var r,i,l;n=n.__;)if((r=n.__c)&&!r.__)try{if((i=r.constructor)&&null!=i.getDerivedStateFromError&&(r.setState(i.getDerivedStateFromError(e)),l=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(e,o||{}),l=r.__d),l)return r.__E=r}catch(n){e=n}throw e}},o=0,v.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=p({},this.state),"function"==typeof e&&(e=e(p({},t),this.props)),e&&p(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),y(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),y(this))},v.prototype.render=h,r=[],l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,a=function(e,n){return e.__v.__b-n.__v.__b},b.__r=0;var O=0;function U(e,t,o,r,i,l){var a,s,_={};for(s in t)"ref"==s?a=t[s]:_[s]=t[s];var u={type:e,props:_,key:o,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--O,__i:-1,__u:0,__source:i,__self:l};if("function"==typeof e&&(a=e.defaultProps))for(s in a)void 0===_[s]&&(_[s]=a[s]);return n.vnode&&n.vnode(u),u}Array.isArray;const j=Symbol("Comlink.proxy"),I=Symbol("Comlink.endpoint"),H=Symbol("Comlink.releaseProxy"),F=Symbol("Comlink.finalizer"),W=Symbol("Comlink.thrown"),Z=e=>"object"==typeof e&&null!==e||"function"==typeof e,$=new Map([["proxy",{canHandle:e=>Z(e)&&e[j],serialize(e){const{port1:n,port2:t}=new MessageChannel;return G(e,n),[t,[t]]},deserialize:e=>(e.start(),X(e,[],undefined))}],["throw",{canHandle:e=>Z(e)&&W in e,serialize({value:e}){let n;return n=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[n,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function G(e,n=globalThis,t=["*"]){n.addEventListener("message",(function o(r){if(!r||!r.data)return;if(!function(e,n){for(const t of e){if(n===t||"*"===t)return!0;if(t instanceof RegExp&&t.test(n))return!0}return!1}(t,r.origin))return void console.warn(`Invalid origin '${r.origin}' for comlink proxy`);const{id:i,type:l,path:a}=Object.assign({path:[]},r.data),s=(r.data.argumentList||[]).map(ne);let _;try{const n=a.slice(0,-1).reduce(((e,n)=>e[n]),e),t=a.reduce(((e,n)=>e[n]),e);switch(l){case"GET":_=t;break;case"SET":n[a.slice(-1)[0]]=ne(r.data.value),_=!0;break;case"APPLY":_=t.apply(n,s);break;case"CONSTRUCT":_=function(e){return Object.assign(e,{[j]:!0})}(new t(...s));break;case"ENDPOINT":{const{port1:n,port2:t}=new MessageChannel;G(e,t),_=function(e,n){return Q.set(e,n),e}(n,[n])}break;case"RELEASE":_=void 0;break;default:return}}catch(e){_={value:e,[W]:0}}Promise.resolve(_).catch((e=>({value:e,[W]:0}))).then((t=>{const[r,a]=ee(t);n.postMessage(Object.assign(Object.assign({},r),{id:i}),a),"RELEASE"===l&&(n.removeEventListener("message",o),B(n),F in e&&"function"==typeof e[F]&&e[F]())})).catch((e=>{const[t,o]=ee({value:new TypeError("Unserializable return value"),[W]:0});n.postMessage(Object.assign(Object.assign({},t),{id:i}),o)}))})),n.start&&n.start()}function B(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function J(e){if(e)throw new Error("Proxy has been released and is not useable")}function V(e){return te(e,{type:"RELEASE"}).then((()=>{B(e)}))}const Y=new WeakMap,q="FinalizationRegistry"in globalThis&&new FinalizationRegistry((e=>{const n=(Y.get(e)||0)-1;Y.set(e,n),0===n&&V(e)}));function X(e,n=[],t=function(){}){let o=!1;const r=new Proxy(t,{get(t,i){if(J(o),i===H)return()=>{!function(e){q&&q.unregister(e)}(r),V(e),o=!0};if("then"===i){if(0===n.length)return{then:()=>r};const t=te(e,{type:"GET",path:n.map((e=>e.toString()))}).then(ne);return t.then.bind(t)}return X(e,[...n,i])},set(t,r,i){J(o);const[l,a]=ee(i);return te(e,{type:"SET",path:[...n,r].map((e=>e.toString())),value:l},a).then(ne)},apply(t,r,i){J(o);const l=n[n.length-1];if(l===I)return te(e,{type:"ENDPOINT"}).then(ne);if("bind"===l)return X(e,n.slice(0,-1));const[a,s]=K(i);return te(e,{type:"APPLY",path:n.map((e=>e.toString())),argumentList:a},s).then(ne)},construct(t,r){J(o);const[i,l]=K(r);return te(e,{type:"CONSTRUCT",path:n.map((e=>e.toString())),argumentList:i},l).then(ne)}});return function(e,n){const t=(Y.get(n)||0)+1;Y.set(n,t),q&&q.register(e,n,e)}(r,e),r}function K(e){const n=e.map(ee);return[n.map((e=>e[0])),(t=n.map((e=>e[1])),Array.prototype.concat.apply([],t))];var t}const Q=new WeakMap;function ee(e){for(const[n,t]of $)if(t.canHandle(e)){const[o,r]=t.serialize(e);return[{type:"HANDLER",name:n,value:o},r]}return[{type:"RAW",value:e},Q.get(e)||[]]}function ne(e){switch(e.type){case"HANDLER":return $.get(e.name).deserialize(e.value);case"RAW":return e.value}}function te(e,n,t){return new Promise((o=>{const r=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function n(t){t.data&&t.data.id&&t.data.id===r&&(e.removeEventListener("message",n),o(t.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:r},n),t)}))}var oe=t(379),re=t.n(oe),ie=t(795),le=t.n(ie),ae=t(569),se=t.n(ae),_e=t(565),ue=t.n(_e),ce=t(216),pe=t.n(ce),fe=t(589),de=t.n(fe),he=t(428),ve={};ve.styleTagTransform=de(),ve.setAttributes=ue(),ve.insert=se().bind(null,"head"),ve.domAPI=le(),ve.insertStyleElement=pe(),re()(he.Z,ve),he.Z&&he.Z.locals&&he.Z.locals;var me=t(462),ge={};ge.styleTagTransform=de(),ge.setAttributes=ue(),ge.insert=se().bind(null,"head"),ge.domAPI=le(),ge.insertStyleElement=pe(),re()(me.Z,ge),me.Z&&me.Z.locals&&me.Z.locals;class ye extends v{render(){const e={__html:this.props.html},n=[];return this.props.language&&n.push("language-"+this.props.language),U(h,{children:[U("div",{id:"controls",children:U("button",{children:"beautify"})}),U("div",{id:"file-content",children:U("pre",{children:U("code",{class:n.join(" "),dangerouslySetInnerHTML:e})})})]})}}window.opener?G(new class{async show(e,n,t){document.title=e,R(U(ye,{html:n,language:t}),document.body)}ping(){return"pong"}},function(e,n=globalThis,t="*"){return{postMessage:(n,o)=>e.postMessage(n,t,o),addEventListener:n.addEventListener.bind(n),removeEventListener:n.removeEventListener.bind(n)}}(window.opener)):R(U("section",{id:"error",children:"Failed to connect with opener window."}),document.body)})()})();