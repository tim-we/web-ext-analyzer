(()=>{"use strict";var e={428:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,'/**\n * okaidia theme for JavaScript, CSS and HTML\n * Loosely based on Monokai textmate theme by http://www.monokai.nl/\n * @author ocodia\n */\ncode[class*="language-"],\npre[class*="language-"] {\n  color: #f8f8f2;\n  background: none;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.3);\n  font-family: Consolas, Monaco, \'Andale Mono\', \'Ubuntu Mono\', monospace;\n  font-size: 1em;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n}\n/* Code blocks */\npre[class*="language-"] {\n  padding: 1em;\n  margin: 0.5em 0;\n  overflow: auto;\n  border-radius: 0.3em;\n}\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n  background: #272822;\n}\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n  padding: 0.1em;\n  border-radius: 0.3em;\n  white-space: normal;\n}\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: #8292a2;\n}\n.token.punctuation {\n  color: #f8f8f2;\n}\n.token.namespace {\n  opacity: 0.7;\n}\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: #f92672;\n}\n.token.boolean,\n.token.number {\n  color: #ae81ff;\n}\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: #a6e22e;\n}\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n  color: #f8f8f2;\n}\n.token.atrule,\n.token.attr-value,\n.token.function,\n.token.class-name {\n  color: #e6db74;\n}\n.token.keyword {\n  color: #66d9ef;\n}\n.token.regex,\n.token.important {\n  color: #fd971f;\n}\n.token.important,\n.token.bold {\n  font-weight: bold;\n}\n.token.italic {\n  font-style: italic;\n}\n.token.entity {\n  cursor: help;\n}\n',""]);const l=r},462:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,"body {\n  font-family: sans-serif;\n  background: #2b2b2b;\n  color: white;\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n}\n#controls {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 0;\n  background-color: #5a5a5a;\n  padding: 0 5px;\n  display: none;\n}\n#file-content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  padding: 10px;\n}\n#file-content pre {\n  margin: 0;\n  -moz-tab-size: 4;\n  tab-size: 4;\n}\n",""]);const l=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var l=0;l<this.length;l++){var a=this[l][0];null!=a&&(r[a]=!0)}for(var i=0;i<e.length;i++){var s=[].concat(e[i]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var l={},a=[],i=0;i<e.length;i++){var s=e[i],u=o.base?s[0]+o.base:s[0],c=l[u]||0,_="".concat(u," ").concat(c);l[u]=c+1;var p=t(_),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(d);else{var f=r(d,o);o.byIndex=i,n.splice(i,0,{identifier:_,updater:f,references:1})}a.push(_)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var l=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<l.length;a++){var i=t(l[a]);n[i].references--}for(var s=o(e,r),u=0;u<l.length;u++){var c=t(l[u]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}l=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var l=t.sourceMap;l&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var l=n[o]={id:o,exports:{}};return e[o](l,l.exports,t),l.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e,n,o,r,l,a={},i=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function u(e,n){for(var t in n)e[t]=n[t];return e}function c(e){var n=e.parentNode;n&&n.removeChild(e)}function _(e,t,r,l,a){var i={type:e,props:t,key:r,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==a?++o:a};return null==a&&null!=n.vnode&&n.vnode(i),i}function p(e){return e.children}function d(e,n){this.props=e,this.context=n}function f(e,n){if(null==n)return e.__?f(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?f(e):null}function h(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return h(e)}}function v(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!m.__r++||l!==n.debounceRendering)&&((l=n.debounceRendering)||setTimeout)(m)}function m(){for(var e;m.__r=r.length;)e=r.sort((function(e,n){return e.__v.__b-n.__v.__b})),r=[],e.some((function(e){var n,t,o,r,l,a;e.__d&&(l=(r=(n=e).__v).__e,(a=n.__P)&&(t=[],(o=u({},r)).__v=r.__v+1,x(a,r,o,n.__n,void 0!==a.ownerSVGElement,null!=r.__h?[l]:null,t,null==l?f(r):l,r.__h),C(t,r),r.__e!=l&&h(r)))}))}function y(e,n,t,o,r,l,s,u,c,d){var h,v,m,y,k,w,E,S=o&&o.__k||i,C=S.length;for(t.__k=[],h=0;h<n.length;h++)if(null!=(y=t.__k[h]=null==(y=n[h])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?_(null,y,null,null,y):Array.isArray(y)?_(p,{children:y},null,null,null):y.__b>0?_(y.type,y.props,y.key,null,y.__v):y)){if(y.__=t,y.__b=t.__b+1,null===(m=S[h])||m&&y.key==m.key&&y.type===m.type)S[h]=void 0;else for(v=0;v<C;v++){if((m=S[v])&&y.key==m.key&&y.type===m.type){S[v]=void 0;break}m=null}x(e,y,m=m||a,r,l,s,u,c,d),k=y.__e,(v=y.ref)&&m.ref!=v&&(E||(E=[]),m.ref&&E.push(m.ref,null,y),E.push(v,y.__c||k,y)),null!=k?(null==w&&(w=k),"function"==typeof y.type&&y.__k===m.__k?y.__d=c=g(y,c,e):c=b(e,y,m,S,k,c),"function"==typeof t.type&&(t.__d=c)):c&&m.__e==c&&c.parentNode!=e&&(c=f(m))}for(t.__e=w,h=C;h--;)null!=S[h]&&("function"==typeof t.type&&null!=S[h].__e&&S[h].__e==t.__d&&(t.__d=f(o,h+1)),L(S[h],S[h]));if(E)for(h=0;h<E.length;h++)T(E[h],E[++h],E[++h])}function g(e,n,t){for(var o,r=e.__k,l=0;r&&l<r.length;l++)(o=r[l])&&(o.__=e,n="function"==typeof o.type?g(o,n,t):b(t,o,o,r,o.__e,n));return n}function b(e,n,t,o,r,l){var a,i,s;if(void 0!==n.__d)a=n.__d,n.__d=void 0;else if(null==t||r!=l||null==r.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(r),a=null;else{for(i=l,s=0;(i=i.nextSibling)&&s<o.length;s+=2)if(i==r)break e;e.insertBefore(r,l),a=l}return void 0!==a?a:r.nextSibling}function k(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||s.test(n)?t:t+"px"}function w(e,n,t,o,r){var l;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(n in o)t&&n in t||k(e.style,n,"");if(t)for(n in t)o&&t[n]===o[n]||k(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])l=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+l]=t,t?o||e.addEventListener(n,l?S:E,l):e.removeEventListener(n,l?S:E,l);else if("dangerouslySetInnerHTML"!==n){if(r)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null!=t&&(!1!==t||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,t):e.removeAttribute(n))}}function E(e){this.l[e.type+!1](n.event?n.event(e):e)}function S(e){this.l[e.type+!0](n.event?n.event(e):e)}function x(e,t,o,r,l,a,i,s,c){var _,f,h,v,m,g,b,k,w,E,S,x,C,T=t.type;if(void 0!==t.constructor)return null;null!=o.__h&&(c=o.__h,s=t.__e=o.__e,t.__h=null,a=[s]),(_=n.__b)&&_(t);try{e:if("function"==typeof T){if(k=t.props,w=(_=T.contextType)&&r[_.__c],E=_?w?w.props.value:_.__:r,o.__c?b=(f=t.__c=o.__c).__=f.__E:("prototype"in T&&T.prototype.render?t.__c=f=new T(k,E):(t.__c=f=new d(k,E),f.constructor=T,f.render=P),w&&w.sub(f),f.props=k,f.state||(f.state={}),f.context=E,f.__n=r,h=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=T.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=u({},f.__s)),u(f.__s,T.getDerivedStateFromProps(k,f.__s))),v=f.props,m=f.state,h)null==T.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==T.getDerivedStateFromProps&&k!==v&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(k,E),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(k,f.__s,E)||t.__v===o.__v){f.props=k,f.state=f.__s,t.__v!==o.__v&&(f.__d=!1),f.__v=t,t.__e=o.__e,t.__k=o.__k,t.__k.forEach((function(e){e&&(e.__=t)})),f.__h.length&&i.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(k,f.__s,E),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(v,m,g)}))}if(f.context=E,f.props=k,f.__v=t,f.__P=e,S=n.__r,x=0,"prototype"in T&&T.prototype.render)f.state=f.__s,f.__d=!1,S&&S(t),_=f.render(f.props,f.state,f.context);else do{f.__d=!1,S&&S(t),_=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++x<25);f.state=f.__s,null!=f.getChildContext&&(r=u(u({},r),f.getChildContext())),h||null==f.getSnapshotBeforeUpdate||(g=f.getSnapshotBeforeUpdate(v,m)),C=null!=_&&_.type===p&&null==_.key?_.props.children:_,y(e,Array.isArray(C)?C:[C],t,o,r,l,a,i,s,c),f.base=t.__e,t.__h=null,f.__h.length&&i.push(f),b&&(f.__E=f.__=null),f.__e=!1}else null==a&&t.__v===o.__v?(t.__k=o.__k,t.__e=o.__e):t.__e=M(o.__e,t,o,r,l,a,i,c);(_=n.diffed)&&_(t)}catch(e){t.__v=null,(c||null!=a)&&(t.__e=s,t.__h=!!c,a[a.indexOf(s)]=null),n.__e(e,t,o)}}function C(e,t){n.__c&&n.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){n.__e(e,t.__v)}}))}function M(n,t,o,r,l,i,s,u){var _,p,d,h=o.props,v=t.props,m=t.type,g=0;if("svg"===m&&(l=!0),null!=i)for(;g<i.length;g++)if((_=i[g])&&"setAttribute"in _==!!m&&(m?_.localName===m:3===_.nodeType)){n=_,i[g]=null;break}if(null==n){if(null===m)return document.createTextNode(v);n=l?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,v.is&&v),i=null,u=!1}if(null===m)h===v||u&&n.data===v||(n.data=v);else{if(i=i&&e.call(n.childNodes),p=(h=o.props||a).dangerouslySetInnerHTML,d=v.dangerouslySetInnerHTML,!u){if(null!=i)for(h={},g=0;g<n.attributes.length;g++)h[n.attributes[g].name]=n.attributes[g].value;(d||p)&&(d&&(p&&d.__html==p.__html||d.__html===n.innerHTML)||(n.innerHTML=d&&d.__html||""))}if(function(e,n,t,o,r){var l;for(l in t)"children"===l||"key"===l||l in n||w(e,l,null,t[l],o);for(l in n)r&&"function"!=typeof n[l]||"children"===l||"key"===l||"value"===l||"checked"===l||t[l]===n[l]||w(e,l,n[l],t[l],o)}(n,v,h,l,u),d)t.__k=[];else if(g=t.props.children,y(n,Array.isArray(g)?g:[g],t,o,r,l&&"foreignObject"!==m,i,s,i?i[0]:o.__k&&f(o,0),u),null!=i)for(g=i.length;g--;)null!=i[g]&&c(i[g]);u||("value"in v&&void 0!==(g=v.value)&&(g!==n.value||"progress"===m&&!g||"option"===m&&g!==h.value)&&w(n,"value",g,h.value,!1),"checked"in v&&void 0!==(g=v.checked)&&g!==n.checked&&w(n,"checked",g,h.checked,!1))}return n}function T(e,t,o){try{"function"==typeof e?e(t):e.current=t}catch(e){n.__e(e,o)}}function L(e,t,o){var r,l;if(n.unmount&&n.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||T(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){n.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&L(r[l],t,"function"!=typeof e.type);o||null==e.__e||c(e.__e),e.__e=e.__d=void 0}function P(e,n,t){return this.constructor(e,t)}function A(t,o,r){var l,i,s;n.__&&n.__(t,o),i=(l="function"==typeof r)?null:r&&r.__k||o.__k,s=[],x(o,t=(!l&&r||o).__k=function(n,t,o){var r,l,a,i={};for(a in t)"key"==a?r=t[a]:"ref"==a?l=t[a]:i[a]=t[a];if(arguments.length>2&&(i.children=arguments.length>3?e.call(arguments,2):o),"function"==typeof n&&null!=n.defaultProps)for(a in n.defaultProps)void 0===i[a]&&(i[a]=n.defaultProps[a]);return _(n,i,r,l,null)}(p,null,[t]),i||a,a,void 0!==o.ownerSVGElement,!l&&r?[r]:i?null:o.firstChild?e.call(o.childNodes):null,s,!l&&r?r:i?i.__e:o.firstChild,l),C(s,t)}e=i.slice,n={__e:function(e,n,t,o){for(var r,l,a;n=n.__;)if((r=n.__c)&&!r.__)try{if((l=r.constructor)&&null!=l.getDerivedStateFromError&&(r.setState(l.getDerivedStateFromError(e)),a=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(e,o||{}),a=r.__d),a)return r.__E=r}catch(n){e=n}throw e}},o=0,d.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=u({},this.state),"function"==typeof e&&(e=e(u({},t),this.props)),e&&u(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),v(this))},d.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),v(this))},d.prototype.render=p,r=[],m.__r=0;var N=0;function D(e,t,o,r,l){var a,i,s={};for(i in t)"ref"==i?a=t[i]:s[i]=t[i];var u={type:e,props:s,key:o,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--N,__source:l,__self:r};if("function"==typeof e&&(a=e.defaultProps))for(i in a)void 0===s[i]&&(s[i]=a[i]);return n.vnode&&n.vnode(u),u}const O=Symbol("Comlink.proxy"),z=Symbol("Comlink.endpoint"),I=Symbol("Comlink.releaseProxy"),R=Symbol("Comlink.thrown"),U=e=>"object"==typeof e&&null!==e||"function"==typeof e,H=new Map([["proxy",{canHandle:e=>U(e)&&e[O],serialize(e){const{port1:n,port2:t}=new MessageChannel;return j(e,n),[t,[t]]},deserialize:e=>(e.start(),Z(e,[],undefined))}],["throw",{canHandle:e=>U(e)&&R in e,serialize({value:e}){let n;return n=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[n,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function j(e,n=self){n.addEventListener("message",(function t(o){if(!o||!o.data)return;const{id:r,type:l,path:a}=Object.assign({path:[]},o.data),i=(o.data.argumentList||[]).map(J);let s;try{const n=a.slice(0,-1).reduce(((e,n)=>e[n]),e),t=a.reduce(((e,n)=>e[n]),e);switch(l){case"GET":s=t;break;case"SET":n[a.slice(-1)[0]]=J(o.data.value),s=!0;break;case"APPLY":s=t.apply(n,i);break;case"CONSTRUCT":s=function(e){return Object.assign(e,{[O]:!0})}(new t(...i));break;case"ENDPOINT":{const{port1:n,port2:t}=new MessageChannel;j(e,t),s=function(e,n){return B.set(e,n),e}(n,[n])}break;case"RELEASE":s=void 0;break;default:return}}catch(e){s={value:e,[R]:0}}Promise.resolve(s).catch((e=>({value:e,[R]:0}))).then((e=>{const[o,a]=$(e);n.postMessage(Object.assign(Object.assign({},o),{id:r}),a),"RELEASE"===l&&(n.removeEventListener("message",t),W(n))}))})),n.start&&n.start()}function W(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function F(e){if(e)throw new Error("Proxy has been released and is not useable")}function Z(e,n=[],t=function(){}){let o=!1;const r=new Proxy(t,{get(t,l){if(F(o),l===I)return()=>V(e,{type:"RELEASE",path:n.map((e=>e.toString()))}).then((()=>{W(e),o=!0}));if("then"===l){if(0===n.length)return{then:()=>r};const t=V(e,{type:"GET",path:n.map((e=>e.toString()))}).then(J);return t.then.bind(t)}return Z(e,[...n,l])},set(t,r,l){F(o);const[a,i]=$(l);return V(e,{type:"SET",path:[...n,r].map((e=>e.toString())),value:a},i).then(J)},apply(t,r,l){F(o);const a=n[n.length-1];if(a===z)return V(e,{type:"ENDPOINT"}).then(J);if("bind"===a)return Z(e,n.slice(0,-1));const[i,s]=G(l);return V(e,{type:"APPLY",path:n.map((e=>e.toString())),argumentList:i},s).then(J)},construct(t,r){F(o);const[l,a]=G(r);return V(e,{type:"CONSTRUCT",path:n.map((e=>e.toString())),argumentList:l},a).then(J)}});return r}function G(e){const n=e.map($);return[n.map((e=>e[0])),(t=n.map((e=>e[1])),Array.prototype.concat.apply([],t))];var t}const B=new WeakMap;function $(e){for(const[n,t]of H)if(t.canHandle(e)){const[o,r]=t.serialize(e);return[{type:"HANDLER",name:n,value:o},r]}return[{type:"RAW",value:e},B.get(e)||[]]}function J(e){switch(e.type){case"HANDLER":return H.get(e.name).deserialize(e.value);case"RAW":return e.value}}function V(e,n,t){return new Promise((o=>{const r=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function n(t){t.data&&t.data.id&&t.data.id===r&&(e.removeEventListener("message",n),o(t.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:r},n),t)}))}var Y=t(379),q=t.n(Y),X=t(795),K=t.n(X),Q=t(569),ee=t.n(Q),ne=t(565),te=t.n(ne),oe=t(216),re=t.n(oe),le=t(589),ae=t.n(le),ie=t(428),se={};se.styleTagTransform=ae(),se.setAttributes=te(),se.insert=ee().bind(null,"head"),se.domAPI=K(),se.insertStyleElement=re(),q()(ie.Z,se),ie.Z&&ie.Z.locals&&ie.Z.locals;var ue=t(462),ce={};ce.styleTagTransform=ae(),ce.setAttributes=te(),ce.insert=ee().bind(null,"head"),ce.domAPI=K(),ce.insertStyleElement=re(),q()(ue.Z,ce),ue.Z&&ue.Z.locals&&ue.Z.locals;class _e extends d{render(){const e={__html:this.props.html},n=[];return this.props.language&&n.push("language-"+this.props.language),D(p,{children:[D("div",{id:"controls",children:D("button",{children:"beautify"})}),D("div",{id:"file-content",children:D("pre",{children:D("code",{class:n.join(" "),dangerouslySetInnerHTML:e})})})]})}}window.opener?j(new class{async show(e,n,t){document.title=e,A(D(_e,{html:n,language:t}),document.body)}ping(){return"pong"}},function(e,n=self,t="*"){return{postMessage:(n,o)=>e.postMessage(n,t,o),addEventListener:n.addEventListener.bind(n),removeEventListener:n.removeEventListener.bind(n)}}(window.opener)):A(D("section",{id:"error",children:"Failed to connect with opener window."}),document.body)})()})();