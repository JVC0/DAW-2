parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"VAdo":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,o(n.key),n)}}function r(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(e){var r=n(e,"string");return"symbol"==t(r)?r:r+""}function n(e,r){if("object"!=t(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,r||"default");if("object"!=t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var u=exports.default=r(function t(e){i(this,t),this.name=e.name,this.title=e.title,this.blurb=e.blurb,this.id=e.id});
},{}],"QvaY":[function(require,module,exports) {
"use strict";var t=e(require("./champions"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(){n=function(){return e};var t,e={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),c=new F(n||[]);return a(i,"_invoke",{value:O(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var d="suspendedStart",v="suspendedYield",y="executing",m="completed",g={};function w(){}function b(){}function x(){}var L={};f(L,u,function(){return this});var E=Object.getPrototypeOf,k=E&&E(E(G([])));k&&k!==o&&i.call(k,u)&&(L=k);var _=x.prototype=w.prototype=Object.create(L);function S(t){["next","throw","return"].forEach(function(e){f(t,e,function(t){return this._invoke(e,t)})})}function j(t,e){function n(o,a,c,u){var s=p(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==r(f)&&i.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,c,u)},function(t){n("throw",t,c,u)}):e.resolve(f).then(function(t){l.value=t,c(l)},function(t){return n("throw",t,c,u)})}u(s.arg)}var o;a(this,"_invoke",{value:function(t,r){function i(){return new e(function(e,o){n(t,r,e,o)})}return o=o?o.then(i,i):i()}})}function O(e,r,n){var o=d;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?m:v,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function q(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(q,this),this.reset(!0)}function G(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(i.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(r(e)+" is not iterable")}return b.prototype=x,a(_,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},S(j.prototype),f(j.prototype,s,function(){return this}),e.AsyncIterator=j,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new j(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},S(_),f(_,l,"Generator"),f(_,u,function(){return this}),f(_,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:G(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function o(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise(function(n,i){var a=t.apply(e,r);function c(t){o(a,n,i,c,u,"next",t)}function u(t){o(a,n,i,c,u,"throw",t)}c(void 0)})}}var a=[],c=document.querySelector("button");function u(t){document.querySelectorAll(".card-inner");var e=t.target.closest(".card-inner");e&&e.classList.toggle("is-flipped")}function s(){return l.apply(this,arguments)}function l(){return(l=i(n().mark(function e(){var r,o;return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ddragon.leagueoflegends.com/cdn/14.20.1/data/es_ES/champion.json").then(function(){var t=i(n().mark(function t(e){return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.json();case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}());case 2:for(o in r=e.sent)a.push(new t.default(r[o]));return e.next=6,p();case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}c.addEventListener("click",function(){document.querySelector("#button").style.visibility="hidden",document.querySelector("#championss").style.visibility="visible",s()}),document.addEventListener("DOMContentLoaded",function(){document.getElementById("championss").addEventListener("click",function(t){u(t)})});var f=function(){var t=i(n().mark(function t(e){var r,o,i,a;return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=[],o=0,i=!0;case 3:if(!i){t.next=17;break}return t.prev=4,t.next=7,h("https://ddragon.leagueoflegends.com/cdn/img/champion/loading/".concat(e.id,"_").concat(o,".jpg"));case 7:a=t.sent,r.push(a),o++,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(4),i=!1;case 15:t.next=3;break;case 17:return t.abrupt("return",r);case 18:case"end":return t.stop()}},t,null,[[4,12]])}));return function(e){return t.apply(this,arguments)}}(),h=function(t){return new Promise(function(e,r){var n=new Image;n.src=t,n.onload=function(){return e(n)},n.onerror=function(){return r(new Error("Image not found"))}})},p=function(){var t=i(n().mark(function t(){var e,r,o,c;return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=document.getElementById("championss"),r=n().mark(function t(){var r,a,u,s,l,h;return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=c[o],(a=document.createElement("div")).className="champion_name",a.innerHTML='<div class="name"><h2>'.concat(r.name,'</h2></div>\n                                    <div class="card">\n                                      <div class="card-inner">\n                                        <div class="card-front">\n                                          <div class="loader"></div>\n                                          <img class="Front_img" src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/').concat(r.id,'_0.jpg">\n                                        </div>\n                                        <div class="card-back">\n                                          <p class="blurb">').concat(r.blurb,"</p>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  "),e.appendChild(a),u=a.querySelector("h2"),s=a.querySelector(".Front_img"),l=0,h=[],u.addEventListener("click",i(n().mark(function t(){var e,o;return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==h.length){t.next=12;break}return e=a.querySelector(".loader"),(o=a.querySelector(".Front_img")).style.filter="blur(5px)",e.style.visibility="visible",o.classList.add("fade-out"),t.next=8,f(r);case 8:h=t.sent,e.style.visibility="hidden",o.style.filter="none",setTimeout(function(){o.classList.remove("fade-out"),o.classList.add("fade-in")},100);case 12:l=(l+1)%h.length,s.src=h[l].src;case 14:case"end":return t.stop()}},t)})));case 10:case"end":return t.stop()}},t)}),o=0,c=a;case 3:if(!(o<c.length)){t.next=8;break}return t.delegateYield(r(),"t0",5);case 5:o++,t.next=3;break;case 8:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();
},{"./champions":"VAdo"}]},{},["QvaY"], null)
//# sourceMappingURL=/DAW-2/js.fdc3ea59.js.map