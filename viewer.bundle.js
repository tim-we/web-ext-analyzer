(()=>{"use strict";var e={428:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(3645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,'/**\n * okaidia theme for JavaScript, CSS and HTML\n * Loosely based on Monokai textmate theme by http://www.monokai.nl/\n * @author ocodia\n */\ncode[class*="language-"],\npre[class*="language-"] {\n  color: #f8f8f2;\n  background: none;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.3);\n  font-family: Consolas, Monaco, \'Andale Mono\', \'Ubuntu Mono\', monospace;\n  font-size: 1em;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n}\n/* Code blocks */\npre[class*="language-"] {\n  padding: 1em;\n  margin: 0.5em 0;\n  overflow: auto;\n  border-radius: 0.3em;\n}\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n  background: #272822;\n}\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n  padding: 0.1em;\n  border-radius: 0.3em;\n  white-space: normal;\n}\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: #8292a2;\n}\n.token.punctuation {\n  color: #f8f8f2;\n}\n.token.namespace {\n  opacity: 0.7;\n}\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: #f92672;\n}\n.token.boolean,\n.token.number {\n  color: #ae81ff;\n}\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: #a6e22e;\n}\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n  color: #f8f8f2;\n}\n.token.atrule,\n.token.attr-value,\n.token.function,\n.token.class-name {\n  color: #e6db74;\n}\n.token.keyword {\n  color: #66d9ef;\n}\n.token.regex,\n.token.important {\n  color: #fd971f;\n}\n.token.important,\n.token.bold {\n  font-weight: bold;\n}\n.token.italic {\n  font-style: italic;\n}\n.token.entity {\n  cursor: help;\n}\n',""]);const i=r},462:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(3645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,"body {\n  font-family: sans-serif;\n  background: #2b2b2b;\n  color: white;\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n}\n#controls {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 0;\n  background-color: #5a5a5a;\n  padding: 0 5px;\n  display: none;\n}\n#file-content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  padding: 10px;\n}\n#file-content pre {\n  margin: 0;\n  -moz-tab-size: 4;\n  tab-size: 4;\n}\n",""]);const i=r},3645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(r[l]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},3379:(e,n,t)=>{var o,r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function l(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function a(e,n){for(var t={},o=[],r=0;r<e.length;r++){var a=e[r],s=n.base?a[0]+n.base:a[0],u=t[s]||0,c="".concat(s," ").concat(u);t[s]=u+1;var _=l(c),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==_?(i[_].references++,i[_].updater(d)):i.push({identifier:c,updater:h(d,n),references:1}),o.push(c)}return o}function s(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var l=r(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(n)}return n}var u,c=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function _(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=c(n,r);else{var i=document.createTextNode(r),l=e.childNodes;l[n]&&e.removeChild(l[n]),l.length?e.insertBefore(i,l[n]):e.appendChild(i)}}function d(e,n,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,f=0;function h(e,n){var t,o,r;if(n.singleton){var i=f++;t=p||(p=s(n)),o=_.bind(null,t,i,!1),r=_.bind(null,t,i,!0)}else t=s(n),o=d.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=a(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=l(t[o]);i[r].references--}for(var s=a(e,n),u=0;u<t.length;u++){var c=l(t[u]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}t=s}}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e,n,o,r,i,l,a={},s=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(e,n){for(var t in n)e[t]=n[t];return e}function _(e){var n=e.parentNode;n&&n.removeChild(e)}function d(e,t,r,i,l){var a={type:e,props:t,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==l?++o:l};return null==l&&null!=n.vnode&&n.vnode(a),a}function p(e){return e.children}function f(e,n){this.props=e,this.context=n}function h(e,n){if(null==n)return e.__?h(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?h(e):null}function v(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return v(e)}}function m(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!y.__r++||l!==n.debounceRendering)&&((l=n.debounceRendering)||i)(y)}function y(){for(var e;y.__r=r.length;)e=r.sort((function(e,n){return e.__v.__b-n.__v.__b})),r=[],e.some((function(e){var n,t,o,r,i,l;e.__d&&(i=(r=(n=e).__v).__e,(l=n.__P)&&(t=[],(o=c({},r)).__v=r.__v+1,C(l,r,o,n.__n,void 0!==l.ownerSVGElement,null!=r.__h?[i]:null,t,null==i?h(r):i,r.__h),M(t,r),r.__e!=i&&v(r)))}))}function g(e,n,t,o,r,i,l,u,c,_){var f,v,m,y,g,w,E,S=o&&o.__k||s,x=S.length;for(t.__k=[],f=0;f<n.length;f++)if(null!=(y=t.__k[f]=null==(y=n[f])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?d(null,y,null,null,y):Array.isArray(y)?d(p,{children:y},null,null,null):y.__b>0?d(y.type,y.props,y.key,null,y.__v):y)){if(y.__=t,y.__b=t.__b+1,null===(m=S[f])||m&&y.key==m.key&&y.type===m.type)S[f]=void 0;else for(v=0;v<x;v++){if((m=S[v])&&y.key==m.key&&y.type===m.type){S[v]=void 0;break}m=null}C(e,y,m=m||a,r,i,l,u,c,_),g=y.__e,(v=y.ref)&&m.ref!=v&&(E||(E=[]),m.ref&&E.push(m.ref,null,y),E.push(v,y.__c||g,y)),null!=g?(null==w&&(w=g),"function"==typeof y.type&&y.__k===m.__k?y.__d=c=b(y,c,e):c=k(e,y,m,S,g,c),"function"==typeof t.type&&(t.__d=c)):c&&m.__e==c&&c.parentNode!=e&&(c=h(m))}for(t.__e=w,f=x;f--;)null!=S[f]&&("function"==typeof t.type&&null!=S[f].__e&&S[f].__e==t.__d&&(t.__d=h(o,f+1)),T(S[f],S[f]));if(E)for(f=0;f<E.length;f++)P(E[f],E[++f],E[++f])}function b(e,n,t){for(var o,r=e.__k,i=0;r&&i<r.length;i++)(o=r[i])&&(o.__=e,n="function"==typeof o.type?b(o,n,t):k(t,o,o,r,o.__e,n));return n}function k(e,n,t,o,r,i){var l,a,s;if(void 0!==n.__d)l=n.__d,n.__d=void 0;else if(null==t||r!=i||null==r.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(r),l=null;else{for(a=i,s=0;(a=a.nextSibling)&&s<o.length;s+=2)if(a==r)break e;e.insertBefore(r,i),l=i}return void 0!==l?l:r.nextSibling}function w(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||u.test(n)?t:t+"px"}function E(e,n,t,o,r){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(n in o)t&&n in t||w(e.style,n,"");if(t)for(n in t)o&&t[n]===o[n]||w(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?o||e.addEventListener(n,i?x:S,i):e.removeEventListener(n,i?x:S,i);else if("dangerouslySetInnerHTML"!==n){if(r)n=n.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null!=t&&(!1!==t||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,t):e.removeAttribute(n))}}function S(e){this.l[e.type+!1](n.event?n.event(e):e)}function x(e){this.l[e.type+!0](n.event?n.event(e):e)}function C(e,t,o,r,i,l,a,s,u){var _,d,h,v,m,y,b,k,w,E,S,x=t.type;if(void 0!==t.constructor)return null;null!=o.__h&&(u=o.__h,s=t.__e=o.__e,t.__h=null,l=[s]),(_=n.__b)&&_(t);try{e:if("function"==typeof x){if(k=t.props,w=(_=x.contextType)&&r[_.__c],E=_?w?w.props.value:_.__:r,o.__c?b=(d=t.__c=o.__c).__=d.__E:("prototype"in x&&x.prototype.render?t.__c=d=new x(k,E):(t.__c=d=new f(k,E),d.constructor=x,d.render=A),w&&w.sub(d),d.props=k,d.state||(d.state={}),d.context=E,d.__n=r,h=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=x.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=c({},d.__s)),c(d.__s,x.getDerivedStateFromProps(k,d.__s))),v=d.props,m=d.state,h)null==x.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==x.getDerivedStateFromProps&&k!==v&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(k,E),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(k,d.__s,E)||t.__v===o.__v){d.props=k,d.state=d.__s,t.__v!==o.__v&&(d.__d=!1),d.__v=t,t.__e=o.__e,t.__k=o.__k,t.__k.forEach((function(e){e&&(e.__=t)})),d.__h.length&&a.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(k,d.__s,E),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(v,m,y)}))}d.context=E,d.props=k,d.state=d.__s,(_=n.__r)&&_(t),d.__d=!1,d.__v=t,d.__P=e,_=d.render(d.props,d.state,d.context),d.state=d.__s,null!=d.getChildContext&&(r=c(c({},r),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(y=d.getSnapshotBeforeUpdate(v,m)),S=null!=_&&_.type===p&&null==_.key?_.props.children:_,g(e,Array.isArray(S)?S:[S],t,o,r,i,l,a,s,u),d.base=t.__e,t.__h=null,d.__h.length&&a.push(d),b&&(d.__E=d.__=null),d.__e=!1}else null==l&&t.__v===o.__v?(t.__k=o.__k,t.__e=o.__e):t.__e=L(o.__e,t,o,r,i,l,a,u);(_=n.diffed)&&_(t)}catch(e){t.__v=null,(u||null!=l)&&(t.__e=s,t.__h=!!u,l[l.indexOf(s)]=null),n.__e(e,t,o)}}function M(e,t){n.__c&&n.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){n.__e(e,t.__v)}}))}function L(n,t,o,r,i,l,s,u){var c,d,p,f=o.props,v=t.props,m=t.type,y=0;if("svg"===m&&(i=!0),null!=l)for(;y<l.length;y++)if((c=l[y])&&"setAttribute"in c==!!m&&(m?c.localName===m:3===c.nodeType)){n=c,l[y]=null;break}if(null==n){if(null===m)return document.createTextNode(v);n=i?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,v.is&&v),l=null,u=!1}if(null===m)f===v||u&&n.data===v||(n.data=v);else{if(l=l&&e.call(n.childNodes),d=(f=o.props||a).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!u){if(null!=l)for(f={},y=0;y<n.attributes.length;y++)f[n.attributes[y].name]=n.attributes[y].value;(p||d)&&(p&&(d&&p.__html==d.__html||p.__html===n.innerHTML)||(n.innerHTML=p&&p.__html||""))}if(function(e,n,t,o,r){var i;for(i in t)"children"===i||"key"===i||i in n||E(e,i,null,t[i],o);for(i in n)r&&"function"!=typeof n[i]||"children"===i||"key"===i||"value"===i||"checked"===i||t[i]===n[i]||E(e,i,n[i],t[i],o)}(n,v,f,i,u),p)t.__k=[];else if(y=t.props.children,g(n,Array.isArray(y)?y:[y],t,o,r,i&&"foreignObject"!==m,l,s,l?l[0]:o.__k&&h(o,0),u),null!=l)for(y=l.length;y--;)null!=l[y]&&_(l[y]);u||("value"in v&&void 0!==(y=v.value)&&(y!==n.value||"progress"===m&&!y||"option"===m&&y!==f.value)&&E(n,"value",y,f.value,!1),"checked"in v&&void 0!==(y=v.checked)&&y!==n.checked&&E(n,"checked",y,f.checked,!1))}return n}function P(e,t,o){try{"function"==typeof e?e(t):e.current=t}catch(e){n.__e(e,o)}}function T(e,t,o){var r,i;if(n.unmount&&n.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||P(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){n.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&T(r[i],t,"function"!=typeof e.type);o||null==e.__e||_(e.__e),e.__e=e.__d=void 0}function A(e,n,t){return this.constructor(e,t)}function N(t,o,r){var i,l,s;n.__&&n.__(t,o),l=(i="function"==typeof r)?null:r&&r.__k||o.__k,s=[],C(o,t=(!i&&r||o).__k=function(n,t,o){var r,i,l,a={};for(l in t)"key"==l?r=t[l]:"ref"==l?i=t[l]:a[l]=t[l];if(arguments.length>2&&(a.children=arguments.length>3?e.call(arguments,2):o),"function"==typeof n&&null!=n.defaultProps)for(l in n.defaultProps)void 0===a[l]&&(a[l]=n.defaultProps[l]);return d(n,a,r,i,null)}(p,null,[t]),l||a,a,void 0!==o.ownerSVGElement,!i&&r?[r]:l?null:o.firstChild?e.call(o.childNodes):null,s,!i&&r?r:l?l.__e:o.firstChild,i),M(s,t)}e=s.slice,n={__e:function(e,n){for(var t,o,r;n=n.__;)if((t=n.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(e)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(e),r=t.__d),r)return t.__E=t}catch(n){e=n}throw e}},o=0,f.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof e&&(e=e(c({},t),this.props)),e&&c(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),m(this))},f.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),m(this))},f.prototype.render=p,r=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,y.__r=0;var O=0;function j(e,t,o,r,i){var l,a,s={};for(a in t)"ref"==a?l=t[a]:s[a]=t[a];var u={type:e,props:s,key:o,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--O,__source:r,__self:i};if("function"==typeof e&&(l=e.defaultProps))for(a in l)void 0===s[a]&&(s[a]=l[a]);return n.vnode&&n.vnode(u),u}const D=Symbol("Comlink.proxy"),z=Symbol("Comlink.endpoint"),R=Symbol("Comlink.releaseProxy"),U=Symbol("Comlink.thrown"),H=e=>"object"==typeof e&&null!==e||"function"==typeof e,I=new Map([["proxy",{canHandle:e=>H(e)&&e[D],serialize(e){const{port1:n,port2:t}=new MessageChannel;return W(e,n),[t,[t]]},deserialize:e=>(e.start(),Z(e,[],undefined))}],["throw",{canHandle:e=>H(e)&&U in e,serialize({value:e}){let n;return n=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[n,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function W(e,n=self){n.addEventListener("message",(function t(o){if(!o||!o.data)return;const{id:r,type:i,path:l}=Object.assign({path:[]},o.data),a=(o.data.argumentList||[]).map(V);let s;try{const n=l.slice(0,-1).reduce(((e,n)=>e[n]),e),t=l.reduce(((e,n)=>e[n]),e);switch(i){case"GET":s=t;break;case"SET":n[l.slice(-1)[0]]=V(o.data.value),s=!0;break;case"APPLY":s=t.apply(n,a);break;case"CONSTRUCT":s=function(e){return Object.assign(e,{[D]:!0})}(new t(...a));break;case"ENDPOINT":{const{port1:n,port2:t}=new MessageChannel;W(e,t),s=function(e,n){return $.set(e,n),e}(n,[n])}break;case"RELEASE":s=void 0;break;default:return}}catch(e){s={value:e,[U]:0}}Promise.resolve(s).catch((e=>({value:e,[U]:0}))).then((e=>{const[o,l]=J(e);n.postMessage(Object.assign(Object.assign({},o),{id:r}),l),"RELEASE"===i&&(n.removeEventListener("message",t),F(n))}))})),n.start&&n.start()}function F(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function B(e){if(e)throw new Error("Proxy has been released and is not useable")}function Z(e,n=[],t=function(){}){let o=!1;const r=new Proxy(t,{get(t,i){if(B(o),i===R)return()=>Y(e,{type:"RELEASE",path:n.map((e=>e.toString()))}).then((()=>{F(e),o=!0}));if("then"===i){if(0===n.length)return{then:()=>r};const t=Y(e,{type:"GET",path:n.map((e=>e.toString()))}).then(V);return t.then.bind(t)}return Z(e,[...n,i])},set(t,r,i){B(o);const[l,a]=J(i);return Y(e,{type:"SET",path:[...n,r].map((e=>e.toString())),value:l},a).then(V)},apply(t,r,i){B(o);const l=n[n.length-1];if(l===z)return Y(e,{type:"ENDPOINT"}).then(V);if("bind"===l)return Z(e,n.slice(0,-1));const[a,s]=G(i);return Y(e,{type:"APPLY",path:n.map((e=>e.toString())),argumentList:a},s).then(V)},construct(t,r){B(o);const[i,l]=G(r);return Y(e,{type:"CONSTRUCT",path:n.map((e=>e.toString())),argumentList:i},l).then(V)}});return r}function G(e){const n=e.map(J);return[n.map((e=>e[0])),(t=n.map((e=>e[1])),Array.prototype.concat.apply([],t))];var t}const $=new WeakMap;function J(e){for(const[n,t]of I)if(t.canHandle(e)){const[o,r]=t.serialize(e);return[{type:"HANDLER",name:n,value:o},r]}return[{type:"RAW",value:e},$.get(e)||[]]}function V(e){switch(e.type){case"HANDLER":return I.get(e.name).deserialize(e.value);case"RAW":return e.value}}function Y(e,n,t){return new Promise((o=>{const r=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function n(t){t.data&&t.data.id&&t.data.id===r&&(e.removeEventListener("message",n),o(t.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:r},n),t)}))}var q=t(3379),X=t.n(q),K=t(428);X()(K.Z,{insert:"head",singleton:!1}),K.Z.locals;var Q=t(462);X()(Q.Z,{insert:"head",singleton:!1}),Q.Z.locals;class ee extends f{render(){const e={__html:this.props.html},n=[];return this.props.language&&n.push("language-"+this.props.language),j(p,{children:[j("div",{id:"controls",children:j("button",{children:"beautify"},void 0)},void 0),j("div",{id:"file-content",children:j("pre",{children:j("code",{class:n.join(" "),dangerouslySetInnerHTML:e},void 0)},void 0)},void 0)]},void 0)}}window.opener?W(new class{async show(e,n,t){document.title=e,N(j(ee,{html:n,language:t},void 0),document.body)}ping(){return"pong"}},function(e,n=self,t="*"){return{postMessage:(n,o)=>e.postMessage(n,t,o),addEventListener:n.addEventListener.bind(n),removeEventListener:n.removeEventListener.bind(n)}}(window.opener)):N(j("section",{id:"error",children:"Failed to connect with opener window."},void 0),document.body)})()})();