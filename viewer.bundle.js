/*! For license information please see viewer.bundle.js.LICENSE.txt */
(()=>{"use strict";var e={428:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,'/**\n * okaidia theme for JavaScript, CSS and HTML\n * Loosely based on Monokai textmate theme by http://www.monokai.nl/\n * @author ocodia\n */\ncode[class*="language-"],\npre[class*="language-"] {\n  color: #f8f8f2;\n  background: none;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.3);\n  font-family: Consolas, Monaco, \'Andale Mono\', \'Ubuntu Mono\', monospace;\n  font-size: 1em;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n}\n/* Code blocks */\npre[class*="language-"] {\n  padding: 1em;\n  margin: 0.5em 0;\n  overflow: auto;\n  border-radius: 0.3em;\n}\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n  background: #272822;\n}\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n  padding: 0.1em;\n  border-radius: 0.3em;\n  white-space: normal;\n}\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: #8292a2;\n}\n.token.punctuation {\n  color: #f8f8f2;\n}\n.token.namespace {\n  opacity: 0.7;\n}\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: #f92672;\n}\n.token.boolean,\n.token.number {\n  color: #ae81ff;\n}\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: #a6e22e;\n}\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n  color: #f8f8f2;\n}\n.token.atrule,\n.token.attr-value,\n.token.function,\n.token.class-name {\n  color: #e6db74;\n}\n.token.keyword {\n  color: #66d9ef;\n}\n.token.regex,\n.token.important {\n  color: #fd971f;\n}\n.token.important,\n.token.bold {\n  font-weight: bold;\n}\n.token.italic {\n  font-style: italic;\n}\n.token.entity {\n  cursor: help;\n}\n',""]);const i=r},462:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,"body {\n  font-family: sans-serif;\n  background: #2b2b2b;\n  color: white;\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n}\n#controls {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 0;\n  background-color: #5a5a5a;\n  padding: 0 5px;\n  display: none;\n}\n#file-content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  padding: 10px;\n}\n#file-content pre {\n  margin: 0;\n  -moz-tab-size: 4;\n  tab-size: 4;\n}\n",""]);const i=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(r[l]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},l=[],a=0;a<e.length;a++){var s=e[a],u=o.base?s[0]+o.base:s[0],c=i[u]||0,_="".concat(u," ").concat(c);i[u]=c+1;var p=t(_),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var d=r(f,o);o.byIndex=a,n.splice(a,0,{identifier:_,updater:d,references:1})}l.push(_)}return l}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var l=0;l<i.length;l++){var a=t(i[l]);n[a].references--}for(var s=o(e,r),u=0;u<i.length;u++){var c=t(i[u]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e,n,o,r,i,l,a,s={},u=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,_=Array.isArray;function p(e,n){for(var t in n)e[t]=n[t];return e}function f(e){var n=e.parentNode;n&&n.removeChild(e)}function d(e,t,r,i,l){var a={type:e,props:t,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==l?++o:l};return null==l&&null!=n.vnode&&n.vnode(a),a}function h(e){return e.children}function v(e,n){this.props=e,this.context=n}function m(e,n){if(null==n)return e.__?m(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?m(e):null}function g(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return g(e)}}function y(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!b.__r++||i!==n.debounceRendering)&&((i=n.debounceRendering)||l)(b)}function b(){var e,n,t,o,i,l,s,u;for(r.sort(a);e=r.shift();)e.__d&&(n=r.length,o=void 0,i=void 0,s=(l=(t=e).__v).__e,(u=t.__P)&&(o=[],(i=p({},l)).__v=l.__v+1,P(u,l,i,t.__n,void 0!==u.ownerSVGElement,null!=l.__h?[s]:null,o,null==s?m(l):s,l.__h),L(o,l),l.__e!=s&&g(l)),r.length>n&&r.sort(a));b.__r=0}function k(e,n,t,o,r,i,l,a,c,p){var f,v,g,y,b,k,x,T=o&&o.__k||u,C=T.length;for(t.__k=[],f=0;f<n.length;f++)if(null!=(y=t.__k[f]=null==(y=n[f])||"boolean"==typeof y||"function"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?d(null,y,null,null,y):_(y)?d(h,{children:y},null,null,null):y.__b>0?d(y.type,y.props,y.key,y.ref?y.ref:null,y.__v):y)){if(y.__=t,y.__b=t.__b+1,null===(g=T[f])||g&&y.key==g.key&&y.type===g.type)T[f]=void 0;else for(v=0;v<C;v++){if((g=T[v])&&y.key==g.key&&y.type===g.type){T[v]=void 0;break}g=null}P(e,y,g=g||s,r,i,l,a,c,p),b=y.__e,(v=y.ref)&&g.ref!=v&&(x||(x=[]),g.ref&&x.push(g.ref,null,y),x.push(v,y.__c||b,y)),null!=b?(null==k&&(k=b),"function"==typeof y.type&&y.__k===g.__k?y.__d=c=w(y,c,e):c=E(e,y,g,T,b,c),"function"==typeof t.type&&(t.__d=c)):c&&g.__e==c&&c.parentNode!=e&&(c=m(g))}for(t.__e=k,f=C;f--;)null!=T[f]&&("function"==typeof t.type&&null!=T[f].__e&&T[f].__e==t.__d&&(t.__d=S(o).nextSibling),z(T[f],T[f]));if(x)for(f=0;f<x.length;f++)N(x[f],x[++f],x[++f])}function w(e,n,t){for(var o,r=e.__k,i=0;r&&i<r.length;i++)(o=r[i])&&(o.__=e,n="function"==typeof o.type?w(o,n,t):E(t,o,o,r,o.__e,n));return n}function E(e,n,t,o,r,i){var l,a,s;if(void 0!==n.__d)l=n.__d,n.__d=void 0;else if(null==t||r!=i||null==r.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(r),l=null;else{for(a=i,s=0;(a=a.nextSibling)&&s<o.length;s+=1)if(a==r)break e;e.insertBefore(r,i),l=i}return void 0!==l?l:r.nextSibling}function S(e){var n,t,o;if(null==e.type||"string"==typeof e.type)return e.__e;if(e.__k)for(n=e.__k.length-1;n>=0;n--)if((t=e.__k[n])&&(o=S(t)))return o;return null}function x(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||c.test(n)?t:t+"px"}function T(e,n,t,o,r){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(n in o)t&&n in t||x(e.style,n,"");if(t)for(n in t)o&&t[n]===o[n]||x(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?o||e.addEventListener(n,i?M:C,i):e.removeEventListener(n,i?M:C,i);else if("dangerouslySetInnerHTML"!==n){if(r)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==n&&"height"!==n&&"href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&"rowSpan"!==n&&"colSpan"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,t))}}function C(e){return this.l[e.type+!1](n.event?n.event(e):e)}function M(e){return this.l[e.type+!0](n.event?n.event(e):e)}function P(e,t,o,r,i,l,a,s,u){var c,f,d,m,g,y,b,w,E,S,x,T,C,M,P,L=t.type;if(void 0!==t.constructor)return null;null!=o.__h&&(u=o.__h,s=t.__e=o.__e,t.__h=null,l=[s]),(c=n.__b)&&c(t);try{e:if("function"==typeof L){if(w=t.props,E=(c=L.contextType)&&r[c.__c],S=c?E?E.props.value:c.__:r,o.__c?b=(f=t.__c=o.__c).__=f.__E:("prototype"in L&&L.prototype.render?t.__c=f=new L(w,S):(t.__c=f=new v(w,S),f.constructor=L,f.render=O),E&&E.sub(f),f.props=w,f.state||(f.state={}),f.context=S,f.__n=r,d=f.__d=!0,f.__h=[],f._sb=[]),null==f.__s&&(f.__s=f.state),null!=L.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=p({},f.__s)),p(f.__s,L.getDerivedStateFromProps(w,f.__s))),m=f.props,g=f.state,f.__v=t,d)null==L.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==L.getDerivedStateFromProps&&w!==m&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(w,S),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(w,f.__s,S)||t.__v===o.__v){for(t.__v!==o.__v&&(f.props=w,f.state=f.__s,f.__d=!1),f.__e=!1,t.__e=o.__e,t.__k=o.__k,t.__k.forEach((function(e){e&&(e.__=t)})),x=0;x<f._sb.length;x++)f.__h.push(f._sb[x]);f._sb=[],f.__h.length&&a.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(w,f.__s,S),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(m,g,y)}))}if(f.context=S,f.props=w,f.__P=e,T=n.__r,C=0,"prototype"in L&&L.prototype.render){for(f.state=f.__s,f.__d=!1,T&&T(t),c=f.render(f.props,f.state,f.context),M=0;M<f._sb.length;M++)f.__h.push(f._sb[M]);f._sb=[]}else do{f.__d=!1,T&&T(t),c=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++C<25);f.state=f.__s,null!=f.getChildContext&&(r=p(p({},r),f.getChildContext())),d||null==f.getSnapshotBeforeUpdate||(y=f.getSnapshotBeforeUpdate(m,g)),k(e,_(P=null!=c&&c.type===h&&null==c.key?c.props.children:c)?P:[P],t,o,r,i,l,a,s,u),f.base=t.__e,t.__h=null,f.__h.length&&a.push(f),b&&(f.__E=f.__=null),f.__e=!1}else null==l&&t.__v===o.__v?(t.__k=o.__k,t.__e=o.__e):t.__e=A(o.__e,t,o,r,i,l,a,u);(c=n.diffed)&&c(t)}catch(e){t.__v=null,(u||null!=l)&&(t.__e=s,t.__h=!!u,l[l.indexOf(s)]=null),n.__e(e,t,o)}}function L(e,t){n.__c&&n.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){n.__e(e,t.__v)}}))}function A(n,t,o,r,i,l,a,u){var c,p,d,h=o.props,v=t.props,g=t.type,y=0;if("svg"===g&&(i=!0),null!=l)for(;y<l.length;y++)if((c=l[y])&&"setAttribute"in c==!!g&&(g?c.localName===g:3===c.nodeType)){n=c,l[y]=null;break}if(null==n){if(null===g)return document.createTextNode(v);n=i?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,v.is&&v),l=null,u=!1}if(null===g)h===v||u&&n.data===v||(n.data=v);else{if(l=l&&e.call(n.childNodes),p=(h=o.props||s).dangerouslySetInnerHTML,d=v.dangerouslySetInnerHTML,!u){if(null!=l)for(h={},y=0;y<n.attributes.length;y++)h[n.attributes[y].name]=n.attributes[y].value;(d||p)&&(d&&(p&&d.__html==p.__html||d.__html===n.innerHTML)||(n.innerHTML=d&&d.__html||""))}if(function(e,n,t,o,r){var i;for(i in t)"children"===i||"key"===i||i in n||T(e,i,null,t[i],o);for(i in n)r&&"function"!=typeof n[i]||"children"===i||"key"===i||"value"===i||"checked"===i||t[i]===n[i]||T(e,i,n[i],t[i],o)}(n,v,h,i,u),d)t.__k=[];else if(k(n,_(y=t.props.children)?y:[y],t,o,r,i&&"foreignObject"!==g,l,a,l?l[0]:o.__k&&m(o,0),u),null!=l)for(y=l.length;y--;)null!=l[y]&&f(l[y]);u||("value"in v&&void 0!==(y=v.value)&&(y!==n.value||"progress"===g&&!y||"option"===g&&y!==h.value)&&T(n,"value",y,h.value,!1),"checked"in v&&void 0!==(y=v.checked)&&y!==n.checked&&T(n,"checked",y,h.checked,!1))}return n}function N(e,t,o){try{"function"==typeof e?e(t):e.current=t}catch(e){n.__e(e,o)}}function z(e,t,o){var r,i;if(n.unmount&&n.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||N(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){n.__e(e,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&z(r[i],t,o||"function"!=typeof e.type);o||null==e.__e||f(e.__e),e.__=e.__e=e.__d=void 0}function O(e,n,t){return this.constructor(e,t)}function R(t,o,r){var i,l,a;n.__&&n.__(t,o),l=(i="function"==typeof r)?null:r&&r.__k||o.__k,a=[],P(o,t=(!i&&r||o).__k=function(n,t,o){var r,i,l,a={};for(l in t)"key"==l?r=t[l]:"ref"==l?i=t[l]:a[l]=t[l];if(arguments.length>2&&(a.children=arguments.length>3?e.call(arguments,2):o),"function"==typeof n&&null!=n.defaultProps)for(l in n.defaultProps)void 0===a[l]&&(a[l]=n.defaultProps[l]);return d(n,a,r,i,null)}(h,null,[t]),l||s,s,void 0!==o.ownerSVGElement,!i&&r?[r]:l?null:o.firstChild?e.call(o.childNodes):null,a,!i&&r?r:l?l.__e:o.firstChild,i),L(a,t)}e=u.slice,n={__e:function(e,n,t,o){for(var r,i,l;n=n.__;)if((r=n.__c)&&!r.__)try{if((i=r.constructor)&&null!=i.getDerivedStateFromError&&(r.setState(i.getDerivedStateFromError(e)),l=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(e,o||{}),l=r.__d),l)return r.__E=r}catch(n){e=n}throw e}},o=0,v.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=p({},this.state),"function"==typeof e&&(e=e(p({},t),this.props)),e&&p(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),y(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),y(this))},v.prototype.render=h,r=[],l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,a=function(e,n){return e.__v.__b-n.__v.__b},b.__r=0;var D=0;function I(e,t,o,r,i,l){var a,s,u={};for(s in t)"ref"==s?a=t[s]:u[s]=t[s];var c={type:e,props:u,key:o,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--D,__source:i,__self:l};if("function"==typeof e&&(a=e.defaultProps))for(s in a)void 0===u[s]&&(u[s]=a[s]);return n.vnode&&n.vnode(c),c}const U=Symbol("Comlink.proxy"),j=Symbol("Comlink.endpoint"),H=Symbol("Comlink.releaseProxy"),F=Symbol("Comlink.finalizer"),W=Symbol("Comlink.thrown"),Z=e=>"object"==typeof e&&null!==e||"function"==typeof e,G=new Map([["proxy",{canHandle:e=>Z(e)&&e[U],serialize(e){const{port1:n,port2:t}=new MessageChannel;return $(e,n),[t,[t]]},deserialize:e=>(e.start(),X(e,[],undefined))}],["throw",{canHandle:e=>Z(e)&&W in e,serialize({value:e}){let n;return n=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[n,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function $(e,n=globalThis,t=["*"]){n.addEventListener("message",(function o(r){if(!r||!r.data)return;if(!function(e,n){for(const t of e){if(n===t||"*"===t)return!0;if(t instanceof RegExp&&t.test(n))return!0}return!1}(t,r.origin))return void console.warn(`Invalid origin '${r.origin}' for comlink proxy`);const{id:i,type:l,path:a}=Object.assign({path:[]},r.data),s=(r.data.argumentList||[]).map(ne);let u;try{const n=a.slice(0,-1).reduce(((e,n)=>e[n]),e),t=a.reduce(((e,n)=>e[n]),e);switch(l){case"GET":u=t;break;case"SET":n[a.slice(-1)[0]]=ne(r.data.value),u=!0;break;case"APPLY":u=t.apply(n,s);break;case"CONSTRUCT":u=function(e){return Object.assign(e,{[U]:!0})}(new t(...s));break;case"ENDPOINT":{const{port1:n,port2:t}=new MessageChannel;$(e,t),u=function(e,n){return Q.set(e,n),e}(n,[n])}break;case"RELEASE":u=void 0;break;default:return}}catch(e){u={value:e,[W]:0}}Promise.resolve(u).catch((e=>({value:e,[W]:0}))).then((t=>{const[r,a]=ee(t);n.postMessage(Object.assign(Object.assign({},r),{id:i}),a),"RELEASE"===l&&(n.removeEventListener("message",o),B(n),F in e&&"function"==typeof e[F]&&e[F]())})).catch((e=>{const[t,o]=ee({value:new TypeError("Unserializable return value"),[W]:0});n.postMessage(Object.assign(Object.assign({},t),{id:i}),o)}))})),n.start&&n.start()}function B(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function J(e){if(e)throw new Error("Proxy has been released and is not useable")}function V(e){return te(e,{type:"RELEASE"}).then((()=>{B(e)}))}const Y=new WeakMap,q="FinalizationRegistry"in globalThis&&new FinalizationRegistry((e=>{const n=(Y.get(e)||0)-1;Y.set(e,n),0===n&&V(e)}));function X(e,n=[],t=function(){}){let o=!1;const r=new Proxy(t,{get(t,i){if(J(o),i===H)return()=>{!function(e){q&&q.unregister(e)}(r),V(e),o=!0};if("then"===i){if(0===n.length)return{then:()=>r};const t=te(e,{type:"GET",path:n.map((e=>e.toString()))}).then(ne);return t.then.bind(t)}return X(e,[...n,i])},set(t,r,i){J(o);const[l,a]=ee(i);return te(e,{type:"SET",path:[...n,r].map((e=>e.toString())),value:l},a).then(ne)},apply(t,r,i){J(o);const l=n[n.length-1];if(l===j)return te(e,{type:"ENDPOINT"}).then(ne);if("bind"===l)return X(e,n.slice(0,-1));const[a,s]=K(i);return te(e,{type:"APPLY",path:n.map((e=>e.toString())),argumentList:a},s).then(ne)},construct(t,r){J(o);const[i,l]=K(r);return te(e,{type:"CONSTRUCT",path:n.map((e=>e.toString())),argumentList:i},l).then(ne)}});return function(e,n){const t=(Y.get(n)||0)+1;Y.set(n,t),q&&q.register(e,n,e)}(r,e),r}function K(e){const n=e.map(ee);return[n.map((e=>e[0])),(t=n.map((e=>e[1])),Array.prototype.concat.apply([],t))];var t}const Q=new WeakMap;function ee(e){for(const[n,t]of G)if(t.canHandle(e)){const[o,r]=t.serialize(e);return[{type:"HANDLER",name:n,value:o},r]}return[{type:"RAW",value:e},Q.get(e)||[]]}function ne(e){switch(e.type){case"HANDLER":return G.get(e.name).deserialize(e.value);case"RAW":return e.value}}function te(e,n,t){return new Promise((o=>{const r=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function n(t){t.data&&t.data.id&&t.data.id===r&&(e.removeEventListener("message",n),o(t.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:r},n),t)}))}var oe=t(379),re=t.n(oe),ie=t(795),le=t.n(ie),ae=t(569),se=t.n(ae),ue=t(565),ce=t.n(ue),_e=t(216),pe=t.n(_e),fe=t(589),de=t.n(fe),he=t(428),ve={};ve.styleTagTransform=de(),ve.setAttributes=ce(),ve.insert=se().bind(null,"head"),ve.domAPI=le(),ve.insertStyleElement=pe(),re()(he.Z,ve),he.Z&&he.Z.locals&&he.Z.locals;var me=t(462),ge={};ge.styleTagTransform=de(),ge.setAttributes=ce(),ge.insert=se().bind(null,"head"),ge.domAPI=le(),ge.insertStyleElement=pe(),re()(me.Z,ge),me.Z&&me.Z.locals&&me.Z.locals;class ye extends v{render(){const e={__html:this.props.html},n=[];return this.props.language&&n.push("language-"+this.props.language),I(h,{children:[I("div",{id:"controls",children:I("button",{children:"beautify"})}),I("div",{id:"file-content",children:I("pre",{children:I("code",{class:n.join(" "),dangerouslySetInnerHTML:e})})})]})}}window.opener?$(new class{async show(e,n,t){document.title=e,R(I(ye,{html:n,language:t}),document.body)}ping(){return"pong"}},function(e,n=globalThis,t="*"){return{postMessage:(n,o)=>e.postMessage(n,t,o),addEventListener:n.addEventListener.bind(n),removeEventListener:n.removeEventListener.bind(n)}}(window.opener)):R(I("section",{id:"error",children:"Failed to connect with opener window."}),document.body)})()})();