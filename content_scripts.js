!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=56)}([function(t,n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof window&&window)||Function("return this")()},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(3),o=e(7),i=e(15);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(3),o=e(21),i=e(6),u=e(17),c=Object.defineProperty;n.f=r?c:function(t,n,e){if(i(t),n=u(n,!0),i(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(0),o=e(24),i=e(2),u=e(25),c=e(29),f=e(50),a=o("wks"),l=r.Symbol,s=f?l:l&&l.withoutSetter||u;t.exports=function(t){return i(a,t)||(c&&i(l,t)?a[t]=l[t]:a[t]=s("Symbol."+t)),a[t]}},function(t,n,e){var r=e(40),o=e(10);t.exports=function(t){return r(o(t))}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(0),o=e(5);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},,,function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(4);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports={}},function(t,n,e){var r=e(0),o=e(20).f,i=e(5),u=e(31),c=e(11),f=e(44),a=e(49);t.exports=function(t,n){var e,l,s,p,v,g=t.target,d=t.global,h=t.stat;if(e=d?r:h?r[g]||c(g,{}):(r[g]||{}).prototype)for(l in n){if(p=n[l],s=t.noTargetGet?(v=o(e,l))&&v.value:e[l],!a(d?l:g+(h?".":"#")+l,t.forced)&&void 0!==s){if(typeof p==typeof s)continue;f(p,s)}(t.sham||s&&s.sham)&&i(p,"sham",!0),u(e,l,p,t)}}},function(t,n,e){var r=e(3),o=e(39),i=e(15),u=e(9),c=e(17),f=e(2),a=e(21),l=Object.getOwnPropertyDescriptor;n.f=r?l:function(t,n){if(t=u(t),n=c(n,!0),a)try{return l(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){var r=e(3),o=e(1),i=e(30);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(23),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(0),o=e(11),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(43),o=e(23);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(46),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(12),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r=e(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(0),o=e(4),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,e){var r=e(0),o=e(5),i=e(2),u=e(11),c=e(22),f=e(41),a=f.get,l=f.enforce,s=String(String).split("String");(t.exports=function(t,n,e,c){var f=!!c&&!!c.unsafe,a=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),l(e).source=s.join("string"==typeof n?n:"")),t!==r?(f?!p&&t[n]&&(a=!0):delete t[n],a?t[n]=e:o(t,n,e)):a?t[n]=e:u(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||c(this)}))},function(t,n,e){var r=e(24),o=e(25),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,e){var r=e(2),o=e(9),i=e(34).indexOf,u=e(18);t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)!r(u,e)&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(9),o=e(27),i=e(35),u=function(t){return function(n,e,u){var c,f=r(n),a=o(f.length),l=i(u,a);if(t&&e!=e){for(;a>l;)if((c=f[l++])!=c)return!0}else for(;a>l;l++)if((t||l in f)&&f[l]===e)return t||l||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,e){var r=e(12),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n,e){"use strict";var r,o,i=e(69),u=e(70),c=RegExp.prototype.exec,f=String.prototype.replace,a=c,l=(r=/a/,o=/b*/g,c.call(r,"a"),c.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),s=u.UNSUPPORTED_Y||u.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(l||p||s)&&(a=function(t){var n,e,r,o,u=this,a=s&&u.sticky,v=i.call(u),g=u.source,d=0,h=t;return a&&(-1===(v=v.replace("y","")).indexOf("g")&&(v+="g"),h=String(t).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==t[u.lastIndex-1])&&(g="(?: "+g+")",h=" "+h,d++),e=new RegExp("^(?:"+g+")",v)),p&&(e=new RegExp("^"+g+"$(?!\\s)",v)),l&&(n=u.lastIndex),r=c.call(a?e:u,h),a?r?(r.input=r.input.slice(d),r[0]=r[0].slice(d),r.index=u.lastIndex,u.lastIndex+=r[0].length):u.lastIndex=0:l&&r&&(u.lastIndex=u.global?r.index+r[0].length:n),p&&r&&r.length>1&&f.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=a},,,function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(1),o=e(16),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r,o,i,u=e(42),c=e(0),f=e(4),a=e(5),l=e(2),s=e(32),p=e(18),v=c.WeakMap;if(u){var g=new v,d=g.get,h=g.has,x=g.set;r=function(t,n){return x.call(g,t,n),n},o=function(t){return d.call(g,t)||{}},i=function(t){return h.call(g,t)}}else{var y=s("state");p[y]=!0,r=function(t,n){return a(t,y,n),n},o=function(t){return l(t,y)?t[y]:{}},i=function(t){return l(t,y)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(0),o=e(22),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n){t.exports=!1},function(t,n,e){var r=e(2),o=e(45),i=e(20),u=e(7);t.exports=function(t,n){for(var e=o(n),c=u.f,f=i.f,a=0;a<e.length;a++){var l=e[a];r(t,l)||c(t,l,f(n,l))}}},function(t,n,e){var r=e(26),o=e(47),i=e(48),u=e(6);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(u(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(33),o=e(28).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(1),o=/#|\.prototype\./,i=function(t,n){var e=c[u(t)];return e==a||e!=f&&("function"==typeof n?r(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(29);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){var r=e(3),o=e(1),i=e(2),u=Object.defineProperty,c={},f=function(t){throw t};t.exports=function(t,n){if(i(c,t))return c[t];n||(n={});var e=[][t],a=!!i(n,"ACCESSORS")&&n.ACCESSORS,l=i(n,0)?n[0]:f,s=i(n,1)?n[1]:void 0;return c[t]=!!e&&!o((function(){if(a&&!r)return!0;var t={length:-1};a?u(t,1,{enumerable:!0,get:f}):t[1]=1,e.call(t,l,s)}))}},,,,function(t,n,e){var r=e(4),o=e(16),i=e(8)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n,e){"use strict";e.r(n);e(57),e(63),e(66);chrome.runtime.onMessage.addListener((function(t,n,e){console.log(window.pageYOffset),e({offset:window.pageYOffset})}));var r=window.location.href.split("?");if(1!=r.length){var o=r[r.length-1];if(console.log(o),o.includes("Sig_h")){console.log("find!!");var i=o.split("=");console.log(i[1]),window.scrollTo(0,i[1])}else console.log("not find!")}else console.log("lack!")},function(t,n,e){"use strict";var r=e(19),o=e(34).includes,i=e(58);r({target:"Array",proto:!0,forced:!e(51)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},function(t,n,e){var r=e(8),o=e(59),i=e(7),u=r("unscopables"),c=Array.prototype;null==c[u]&&i.f(c,u,{configurable:!0,value:o(null)}),t.exports=function(t){c[u][t]=!0}},function(t,n,e){var r,o=e(6),i=e(60),u=e(28),c=e(18),f=e(62),a=e(30),l=e(32),s=l("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"<\/script>"},g=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;g=r?function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n}(r):((n=a("iframe")).style.display="none",f.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var e=u.length;e--;)delete g.prototype[u[e]];return g()};c[s]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(p.prototype=o(t),e=new p,p.prototype=null,e[s]=t):e=g(),void 0===n?e:i(e,n)}},function(t,n,e){var r=e(3),o=e(7),i=e(6),u=e(61);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=u(n),c=r.length,f=0;c>f;)o.f(t,e=r[f++],n[e]);return t}},function(t,n,e){var r=e(33),o=e(28);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(26);t.exports=r("document","documentElement")},function(t,n,e){"use strict";var r=e(19),o=e(64),i=e(10);r({target:"String",proto:!0,forced:!e(65)("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(55);t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},function(t,n,e){var r=e(8)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,"/./"[t](n)}catch(t){}}return!1}},function(t,n,e){"use strict";var r=e(67),o=e(55),i=e(6),u=e(10),c=e(71),f=e(73),a=e(27),l=e(75),s=e(36),p=e(1),v=[].push,g=Math.min,d=!p((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,n,e){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var r=String(u(this)),i=void 0===e?4294967295:e>>>0;if(0===i)return[];if(void 0===t)return[r];if(!o(t))return n.call(r,t,i);for(var c,f,a,l=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,d=new RegExp(t.source,p+"g");(c=s.call(d,r))&&!((f=d.lastIndex)>g&&(l.push(r.slice(g,c.index)),c.length>1&&c.index<r.length&&v.apply(l,c.slice(1)),a=c[0].length,g=f,l.length>=i));)d.lastIndex===c.index&&d.lastIndex++;return g===r.length?!a&&d.test("")||l.push(""):l.push(r.slice(g)),l.length>i?l.slice(0,i):l}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,e){var o=u(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,e):r.call(String(o),n,e)},function(t,o){var u=e(r,t,this,o,r!==n);if(u.done)return u.value;var s=i(t),p=String(this),v=c(s,RegExp),h=s.unicode,x=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(d?"y":"g"),y=new v(d?s:"^(?:"+s.source+")",x),b=void 0===o?4294967295:o>>>0;if(0===b)return[];if(0===p.length)return null===l(y,p)?[p]:[];for(var m=0,S=0,O=[];S<p.length;){y.lastIndex=d?S:0;var E,w=l(y,d?p:p.slice(S));if(null===w||(E=g(a(y.lastIndex+(d?0:S)),p.length))===m)S=f(p,S,h);else{if(O.push(p.slice(m,S)),O.length===b)return O;for(var j=1;j<=w.length-1;j++)if(O.push(w[j]),O.length===b)return O;S=m=E}}return O.push(p.slice(m)),O}]}),!d)},function(t,n,e){"use strict";e(68);var r=e(31),o=e(1),i=e(8),u=e(36),c=e(5),f=i("species"),a=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l="$0"==="a".replace(/./,"$0"),s=i("replace"),p=!!/./[s]&&""===/./[s]("a","$0"),v=!o((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,n,e,s){var g=i(t),d=!o((function(){var n={};return n[g]=function(){return 7},7!=""[t](n)})),h=d&&!o((function(){var n=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[f]=function(){return e},e.flags="",e[g]=/./[g]),e.exec=function(){return n=!0,null},e[g](""),!n}));if(!d||!h||"replace"===t&&(!a||!l||p)||"split"===t&&!v){var x=/./[g],y=e(g,""[t],(function(t,n,e,r,o){return n.exec===u?d&&!o?{done:!0,value:x.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),b=y[0],m=y[1];r(String.prototype,t,b),r(RegExp.prototype,g,2==n?function(t,n){return m.call(t,this,n)}:function(t){return m.call(t,this)})}s&&c(RegExp.prototype[g],"sham",!0)}},function(t,n,e){"use strict";var r=e(19),o=e(36);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,n,e){"use strict";var r=e(6);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,e){"use strict";var r=e(1);function o(t,n){return RegExp(t,n)}n.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),n.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,n,e){var r=e(6),o=e(72),i=e(8)("species");t.exports=function(t,n){var e,u=r(t).constructor;return void 0===u||null==(e=r(u)[i])?n:o(e)}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){"use strict";var r=e(74).charAt;t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},function(t,n,e){var r=e(12),o=e(10),i=function(t){return function(n,e){var i,u,c=String(o(n)),f=r(e),a=c.length;return f<0||f>=a?t?"":void 0:(i=c.charCodeAt(f))<55296||i>56319||f+1===a||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):u-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,e){var r=e(16),o=e(36);t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var i=e.call(t,n);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}}]);