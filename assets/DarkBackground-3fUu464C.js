import{q as Sn,R as $e,j as y,L as Ye,r as He,u as Pn,t as En,v as Cn}from"./index-2dEkG1oV.js";function me(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?me(Object(n),!0).forEach(function(a){S(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function St(t){"@babel/helpers - typeof";return St=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},St(t)}function Nn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function de(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function In(t,e,n){return e&&de(t.prototype,e),n&&de(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function S(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Zt(t,e){return _n(t)||jn(t,e)||Ue(t,e)||zn()}function lt(t){return Tn(t)||Mn(t)||Ue(t)||Ln()}function Tn(t){if(Array.isArray(t))return Dt(t)}function _n(t){if(Array.isArray(t))return t}function Mn(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function jn(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function Ue(t,e){if(t){if(typeof t=="string")return Dt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dt(t,e)}}function Dt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Ln(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ve=function(){},te={},We={},Ve=null,Xe={mark:ve,measure:ve};try{typeof window<"u"&&(te=window),typeof document<"u"&&(We=document),typeof MutationObserver<"u"&&(Ve=MutationObserver),typeof performance<"u"&&(Xe=performance)}catch{}var Rn=te.navigator||{},be=Rn.userAgent,pe=be===void 0?"":be,$=te,h=We,ge=Ve,dt=Xe;$.document;var z=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",Ge=~pe.indexOf("MSIE")||~pe.indexOf("Trident/"),vt,bt,pt,gt,ht,M="___FONT_AWESOME___",$t=16,Be="fa",qe="svg-inline--fa",G="data-fa-i2svg",Yt="data-fa-pseudo-element",Fn="data-fa-pseudo-element-pending",ee="data-prefix",ne="data-icon",he="fontawesome-i2svg",Dn="async",$n=["HTML","HEAD","STYLE","SCRIPT"],Ke=function(){try{return!0}catch{return!1}}(),g="classic",k="sharp",ae=[g,k];function ct(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[g]}})}var rt=ct((vt={},S(vt,g,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),S(vt,k,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),vt)),it=ct((bt={},S(bt,g,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),S(bt,k,{solid:"fass",regular:"fasr"}),bt)),ot=ct((pt={},S(pt,g,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),S(pt,k,{fass:"fa-solid",fasr:"fa-regular"}),pt)),Yn=ct((gt={},S(gt,g,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),S(gt,k,{"fa-solid":"fass","fa-regular":"fasr"}),gt)),Hn=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,Qe="fa-layers-text",Un=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Wn=ct((ht={},S(ht,g,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),S(ht,k,{900:"fass",400:"fasr"}),ht)),Je=[1,2,3,4,5,6,7,8,9,10],Vn=Je.concat([11,12,13,14,15,16,17,18,19,20]),Xn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],V={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},st=new Set;Object.keys(it[g]).map(st.add.bind(st));Object.keys(it[k]).map(st.add.bind(st));var Gn=[].concat(ae,lt(st),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",V.GROUP,V.SWAP_OPACITY,V.PRIMARY,V.SECONDARY]).concat(Je.map(function(t){return"".concat(t,"x")})).concat(Vn.map(function(t){return"w-".concat(t)})),nt=$.FontAwesomeConfig||{};function Bn(t){var e=h.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function qn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(h&&typeof h.querySelector=="function"){var Kn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Kn.forEach(function(t){var e=Zt(t,2),n=e[0],a=e[1],r=qn(Bn(n));r!=null&&(nt[a]=r)})}var Ze={styleDefault:"solid",familyDefault:"classic",cssPrefix:Be,replacementClass:qe,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};nt.familyPrefix&&(nt.cssPrefix=nt.familyPrefix);var Z=u(u({},Ze),nt);Z.autoReplaceSvg||(Z.observeMutations=!1);var d={};Object.keys(Ze).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(n){Z[t]=n,at.forEach(function(a){return a(d)})},get:function(){return Z[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(e){Z.cssPrefix=e,at.forEach(function(n){return n(d)})},get:function(){return Z.cssPrefix}});$.FontAwesomeConfig=d;var at=[];function Qn(t){return at.push(t),function(){at.splice(at.indexOf(t),1)}}var F=$t,_={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Jn(t){if(!(!t||!z)){var e=h.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=h.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return h.head.insertBefore(e,a),t}}var Zn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ft(){for(var t=12,e="";t-- >0;)e+=Zn[Math.random()*62|0];return e}function tt(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function re(t){return t.classList?tt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function tn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ta(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(tn(t[n]),'" ')},"").trim()}function Nt(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ie(t){return t.size!==_.size||t.x!==_.x||t.y!==_.y||t.rotate!==_.rotate||t.flipX||t.flipY}function ea(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:l}}function na(t){var e=t.transform,n=t.width,a=n===void 0?$t:n,r=t.height,i=r===void 0?$t:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&Ge?f+="translate(".concat(e.x/F-a/2,"em, ").concat(e.y/F-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(e.x/F,"em), calc(-50% + ").concat(e.y/F,"em)) "):f+="translate(".concat(e.x/F,"em, ").concat(e.y/F,"em) "),f+="scale(".concat(e.size/F*(e.flipX?-1:1),", ").concat(e.size/F*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var aa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function en(){var t=Be,e=qe,n=d.cssPrefix,a=d.replacementClass,r=aa;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var ye=!1;function jt(){d.autoAddCss&&!ye&&(Jn(en()),ye=!0)}var ra={mixout:function(){return{dom:{css:en,insertCss:jt}}},hooks:function(){return{beforeDOMElementCreation:function(){jt()},beforeI2svg:function(){jt()}}}},j=$||{};j[M]||(j[M]={});j[M].styles||(j[M].styles={});j[M].hooks||(j[M].hooks={});j[M].shims||(j[M].shims=[]);var T=j[M],nn=[],ia=function t(){h.removeEventListener("DOMContentLoaded",t),Pt=1,nn.map(function(e){return e()})},Pt=!1;z&&(Pt=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),Pt||h.addEventListener("DOMContentLoaded",ia));function oa(t){z&&(Pt?setTimeout(t,0):nn.push(t))}function ut(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?tn(t):"<".concat(e," ").concat(ta(a),">").concat(i.map(ut).join(""),"</").concat(e,">")}function ke(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var sa=function(e,n){return function(a,r,i,o){return e.call(n,a,r,i,o)}},Lt=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=r!==void 0?sa(n,r):n,f,l,c;for(a===void 0?(f=1,c=e[i[0]]):(f=0,c=a);f<o;f++)l=i[f],c=s(c,e[l],l,e);return c};function fa(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Ht(t){var e=fa(t);return e.length===1?e[0].toString(16):null}function la(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function xe(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function Ut(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=xe(e);typeof T.hooks.addPack=="function"&&!r?T.hooks.addPack(t,xe(e)):T.styles[t]=u(u({},T.styles[t]||{}),i),t==="fas"&&Ut("fa",e)}var yt,kt,xt,q=T.styles,ca=T.shims,ua=(yt={},S(yt,g,Object.values(ot[g])),S(yt,k,Object.values(ot[k])),yt),oe=null,an={},rn={},on={},sn={},fn={},ma=(kt={},S(kt,g,Object.keys(rt[g])),S(kt,k,Object.keys(rt[k])),kt);function da(t){return~Gn.indexOf(t)}function va(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!da(r)?r:null}var ln=function(){var e=function(i){return Lt(q,function(o,s,f){return o[f]=Lt(s,i,{}),o},{})};an=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),rn=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),fn=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var n="far"in q||d.autoFetchSvg,a=Lt(ca,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});on=a.names,sn=a.unicodes,oe=It(d.styleDefault,{family:d.familyDefault})};Qn(function(t){oe=It(t.styleDefault,{family:d.familyDefault})});ln();function se(t,e){return(an[t]||{})[e]}function ba(t,e){return(rn[t]||{})[e]}function X(t,e){return(fn[t]||{})[e]}function cn(t){return on[t]||{prefix:null,iconName:null}}function pa(t){var e=sn[t],n=se("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Y(){return oe}var fe=function(){return{prefix:null,iconName:null,rest:[]}};function It(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?g:n,r=rt[a][t],i=it[a][t]||it[a][r],o=t in T.styles?t:null;return i||o||null}var we=(xt={},S(xt,g,Object.keys(ot[g])),S(xt,k,Object.keys(ot[k])),xt);function Tt(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},S(e,g,"".concat(d.cssPrefix,"-").concat(g)),S(e,k,"".concat(d.cssPrefix,"-").concat(k)),e),o=null,s=g;(t.includes(i[g])||t.some(function(l){return we[g].includes(l)}))&&(s=g),(t.includes(i[k])||t.some(function(l){return we[k].includes(l)}))&&(s=k);var f=t.reduce(function(l,c){var m=va(d.cssPrefix,c);if(q[c]?(c=ua[s].includes(c)?Yn[s][c]:c,o=c,l.prefix=c):ma[s].indexOf(c)>-1?(o=c,l.prefix=It(c,{family:s})):m?l.iconName=m:c!==d.replacementClass&&c!==i[g]&&c!==i[k]&&l.rest.push(c),!r&&l.prefix&&l.iconName){var v=o==="fa"?cn(l.iconName):{},p=X(l.prefix,l.iconName);v.prefix&&(o=null),l.iconName=v.iconName||p||l.iconName,l.prefix=v.prefix||l.prefix,l.prefix==="far"&&!q.far&&q.fas&&!d.autoFetchSvg&&(l.prefix="fas")}return l},fe());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===k&&(q.fass||d.autoFetchSvg)&&(f.prefix="fass",f.iconName=X(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=Y()||"fas"),f}var ga=function(){function t(){Nn(this,t),this.definitions={}}return In(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=u(u({},n.definitions[s]||{}),o[s]),Ut(s,o[s]);var f=ot[g][s];f&&Ut(f,o[s]),ln()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,l=o.icon,c=l[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(n[s][m]=l)}),n[s][f]=l}),n}}]),t}(),Ae=[],K={},J={},ha=Object.keys(J);function ya(t,e){var n=e.mixoutsTo;return Ae=t,K={},Object.keys(J).forEach(function(a){ha.indexOf(a)===-1&&delete J[a]}),Ae.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),St(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){K[o]||(K[o]=[]),K[o].push(i[o])})}a.provides&&a.provides(J)}),n}function Wt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=K[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function B(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=K[t]||[];r.forEach(function(i){i.apply(null,n)})}function L(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return J[t]?J[t].apply(null,e):void 0}function Vt(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Y();if(e)return e=X(n,e)||e,ke(un.definitions,n,e)||ke(T.styles,n,e)}var un=new ga,ka=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,B("noAuto")},xa={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return z?(B("beforeI2svg",e),L("pseudoElements2svg",e),L("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,oa(function(){Aa({autoReplaceSvgRoot:n}),B("watch",e)})}},wa={icon:function(e){if(e===null)return null;if(St(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:X(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=It(e[0]);return{prefix:a,iconName:X(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(d.cssPrefix,"-"))>-1||e.match(Hn))){var r=Tt(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Y(),iconName:X(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=Y();return{prefix:i,iconName:X(i,e)||e}}}},I={noAuto:ka,config:d,dom:xa,parse:wa,library:un,findIconDefinition:Vt,toHtml:ut},Aa=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?h:n;(Object.keys(T.styles).length>0||d.autoFetchSvg)&&z&&d.autoReplaceSvg&&I.dom.i2svg({node:a})};function _t(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return ut(a)})}}),Object.defineProperty(t,"node",{get:function(){if(z){var a=h.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Oa(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(ie(o)&&n.found&&!a.found){var s=n.width,f=n.height,l={x:s/f/2,y:.5};r.style=Nt(u(u({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Sa(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:a}]}]}function le(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,l=t.maskId,c=t.titleId,m=t.extra,v=t.watchable,p=v===void 0?!1:v,A=a.found?a:n,E=A.width,x=A.height,C=r==="fak",w=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(R){return m.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(m.classes).join(" "),O={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(x)})},N=C&&!~m.classes.indexOf("fa-fw")?{width:"".concat(E/x*16*.0625,"em")}:{};p&&(O.attributes[G]=""),f&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(c||ft())},children:[f]}),delete O.attributes.title);var P=u(u({},O),{},{prefix:r,iconName:i,main:n,mask:a,maskId:l,transform:o,symbol:s,styles:u(u({},N),m.styles)}),U=a.found&&n.found?L("generateAbstractMask",P)||{children:[],attributes:{}}:L("generateAbstractIcon",P)||{children:[],attributes:{}},W=U.children,Mt=U.attributes;return P.children=W,P.attributes=Mt,s?Sa(P):Oa(P)}function Oe(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,l=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(l[G]="");var c=u({},o.styles);ie(r)&&(c.transform=na({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);var m=Nt(c);m.length>0&&(l.style=m);var v=[];return v.push({tag:"span",attributes:l,children:[e]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Pa(t){var e=t.content,n=t.title,a=t.extra,r=u(u(u({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Nt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var zt=T.styles;function Xt(t){var e=t[0],n=t[1],a=t.slice(4),r=Zt(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(V.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(V.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(V.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Ea={found:!1,width:512,height:512};function Ca(t,e){!Ke&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Gt(t,e){var n=e;return e==="fa"&&d.styleDefault!==null&&(e=Y()),new Promise(function(a,r){if(L("missingIconAbstract"),n==="fa"){var i=cn(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&zt[e]&&zt[e][t]){var o=zt[e][t];return a(Xt(o))}Ca(t,e),a(u(u({},Ea),{},{icon:d.showMissingIcons&&t?L("missingIconAbstract")||{}:{}}))})}var Se=function(){},Bt=d.measurePerformance&&dt&&dt.mark&&dt.measure?dt:{mark:Se,measure:Se},et='FA "6.3.0"',Na=function(e){return Bt.mark("".concat(et," ").concat(e," begins")),function(){return mn(e)}},mn=function(e){Bt.mark("".concat(et," ").concat(e," ends")),Bt.measure("".concat(et," ").concat(e),"".concat(et," ").concat(e," begins"),"".concat(et," ").concat(e," ends"))},ce={begin:Na,end:mn},At=function(){};function Pe(t){var e=t.getAttribute?t.getAttribute(G):null;return typeof e=="string"}function Ia(t){var e=t.getAttribute?t.getAttribute(ee):null,n=t.getAttribute?t.getAttribute(ne):null;return e&&n}function Ta(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function _a(){if(d.autoReplaceSvg===!0)return Ot.replace;var t=Ot[d.autoReplaceSvg];return t||Ot.replace}function Ma(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function ja(t){return h.createElement(t)}function dn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?Ma:ja:n;if(typeof t=="string")return h.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(dn(o,{ceFn:a}))}),r}function La(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Ot={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(dn(r),n)}),n.getAttribute(G)===null&&d.keepOriginalSource){var a=h.createComment(La(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~re(n).indexOf(d.replacementClass))return Ot.replace(e);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return ut(s)}).join(`
`);n.setAttribute(G,""),n.innerHTML=o}};function Ee(t){t()}function vn(t,e){var n=typeof e=="function"?e:At;if(t.length===0)n();else{var a=Ee;d.mutateApproach===Dn&&(a=$.requestAnimationFrame||Ee),a(function(){var r=_a(),i=ce.begin("mutate");t.map(r),i(),n()})}}var ue=!1;function bn(){ue=!0}function qt(){ue=!1}var Et=null;function Ce(t){if(ge&&d.observeMutations){var e=t.treeCallback,n=e===void 0?At:e,a=t.nodeCallback,r=a===void 0?At:a,i=t.pseudoElementsCallback,o=i===void 0?At:i,s=t.observeMutationsRoot,f=s===void 0?h:s;Et=new ge(function(l){if(!ue){var c=Y();tt(l).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Pe(m.addedNodes[0])&&(d.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Pe(m.target)&&~Xn.indexOf(m.attributeName))if(m.attributeName==="class"&&Ia(m.target)){var v=Tt(re(m.target)),p=v.prefix,A=v.iconName;m.target.setAttribute(ee,p||c),A&&m.target.setAttribute(ne,A)}else Ta(m.target)&&r(m.target)})}}),z&&Et.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function za(){Et&&Et.disconnect()}function Ra(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Fa(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Tt(re(t));return r.prefix||(r.prefix=Y()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ba(r.prefix,t.innerText)||se(r.prefix,Ht(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Da(t){var e=tt(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(n?e["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||ft()):(e["aria-hidden"]="true",e.focusable="false")),e}function $a(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ne(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Fa(t),a=n.iconName,r=n.prefix,i=n.rest,o=Da(t),s=Wt("parseNodeAttributes",{},t),f=e.styleParser?Ra(t):[];return u({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:_,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Ya=T.styles;function pn(t){var e=d.autoReplaceSvg==="nest"?Ne(t,{styleParser:!1}):Ne(t);return~e.extra.classes.indexOf(Qe)?L("generateLayersText",t,e):L("generateSvgReplacementMutation",t,e)}var H=new Set;ae.map(function(t){H.add("fa-".concat(t))});Object.keys(rt[g]).map(H.add.bind(H));Object.keys(rt[k]).map(H.add.bind(H));H=lt(H);function Ie(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!z)return Promise.resolve();var n=h.documentElement.classList,a=function(m){return n.add("".concat(he,"-").concat(m))},r=function(m){return n.remove("".concat(he,"-").concat(m))},i=d.autoFetchSvg?H:ae.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Ya));i.includes("fa")||i.push("fa");var o=[".".concat(Qe,":not([").concat(G,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(G,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=tt(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=ce.begin("onTree"),l=s.reduce(function(c,m){try{var v=pn(m);v&&c.push(v)}catch(p){Ke||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,m){Promise.all(l).then(function(v){vn(v,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),c()})}).catch(function(v){f(),m(v)})})}function Ha(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;pn(t).then(function(n){n&&vn([n],e)})}function Ua(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Vt(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Vt(r||{})),t(a,u(u({},n),{},{mask:r}))}}var Wa=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?_:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,f=s===void 0?null:s,l=n.maskId,c=l===void 0?null:l,m=n.title,v=m===void 0?null:m,p=n.titleId,A=p===void 0?null:p,E=n.classes,x=E===void 0?[]:E,C=n.attributes,w=C===void 0?{}:C,O=n.styles,N=O===void 0?{}:O;if(e){var P=e.prefix,U=e.iconName,W=e.icon;return _t(u({type:"icon"},e),function(){return B("beforeDOMElementCreation",{iconDefinition:e,params:n}),d.autoA11y&&(v?w["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(A||ft()):(w["aria-hidden"]="true",w.focusable="false")),le({icons:{main:Xt(W),mask:f?Xt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:U,transform:u(u({},_),r),symbol:o,title:v,maskId:c,titleId:A,extra:{attributes:w,styles:N,classes:x}})})}},Va={mixout:function(){return{icon:Ua(Wa)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ie,n.nodeCallback=Ha,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?h:a,i=n.callback,o=i===void 0?function(){}:i;return Ie(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,l=a.symbol,c=a.mask,m=a.maskId,v=a.extra;return new Promise(function(p,A){Promise.all([Gt(r,s),c.iconName?Gt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var x=Zt(E,2),C=x[0],w=x[1];p([n,le({icons:{main:C,mask:w},prefix:s,iconName:r,transform:f,symbol:l,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(A)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,f=Nt(s);f.length>0&&(r.style=f);var l;return ie(o)&&(l=L("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(l||i.icon),{children:a,attributes:r}}}},Xa={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return _t({type:"layer"},function(){B("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(lt(i)).join(" ")},children:o}]})}}}},Ga={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,l=f===void 0?{}:f,c=a.styles,m=c===void 0?{}:c;return _t({type:"counter",content:n},function(){return B("beforeDOMElementCreation",{content:n,params:a}),Pa({content:n.toString(),title:i,extra:{attributes:l,styles:m,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(lt(s))}})})}}}},Ba={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?_:r,o=a.title,s=o===void 0?null:o,f=a.classes,l=f===void 0?[]:f,c=a.attributes,m=c===void 0?{}:c,v=a.styles,p=v===void 0?{}:v;return _t({type:"text",content:n},function(){return B("beforeDOMElementCreation",{content:n,params:a}),Oe({content:n,transform:u(u({},_),i),title:s,extra:{attributes:m,styles:p,classes:["".concat(d.cssPrefix,"-layers-text")].concat(lt(l))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(Ge){var l=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/l,f=c.height/l}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Oe({content:n.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},qa=new RegExp('"',"ug"),Te=[1105920,1112319];function Ka(t){var e=t.replace(qa,""),n=la(e,0),a=n>=Te[0]&&n<=Te[1],r=e.length===2?e[0]===e[1]:!1;return{value:Ht(r?e[0]:e),isSecondary:a||r}}function _e(t,e){var n="".concat(Fn).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=tt(t.children),o=i.filter(function(W){return W.getAttribute(Yt)===e})[0],s=$.getComputedStyle(t,e),f=s.getPropertyValue("font-family").match(Un),l=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(f[2])?k:g,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?it[v][f[2].toLowerCase()]:Wn[v][l],A=Ka(m),E=A.value,x=A.isSecondary,C=f[0].startsWith("FontAwesome"),w=se(p,E),O=w;if(C){var N=pa(E);N.iconName&&N.prefix&&(w=N.iconName,p=N.prefix)}if(w&&!x&&(!o||o.getAttribute(ee)!==p||o.getAttribute(ne)!==O)){t.setAttribute(n,O),o&&t.removeChild(o);var P=$a(),U=P.extra;U.attributes[Yt]=e,Gt(w,p).then(function(W){var Mt=le(u(u({},P),{},{icons:{main:W,mask:fe()},prefix:p,iconName:O,extra:U,watchable:!0})),R=h.createElement("svg");e==="::before"?t.insertBefore(R,t.firstChild):t.appendChild(R),R.outerHTML=Mt.map(function(On){return ut(On)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Qa(t){return Promise.all([_e(t,"::before"),_e(t,"::after")])}function Ja(t){return t.parentNode!==document.head&&!~$n.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Yt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Me(t){if(z)return new Promise(function(e,n){var a=tt(t.querySelectorAll("*")).filter(Ja).map(Qa),r=ce.begin("searchPseudoElements");bn(),Promise.all(a).then(function(){r(),qt(),e()}).catch(function(){r(),qt(),n()})})}var Za={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Me,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?h:a;d.searchPseudoElements&&Me(r)}}},je=!1,tr={mixout:function(){return{dom:{unwatch:function(){bn(),je=!0}}}},hooks:function(){return{bootstrap:function(){Ce(Wt("mutationObserverCallbacks",{}))},noAuto:function(){za()},watch:function(n){var a=n.observeMutationsRoot;je?qt():Ce(Wt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Le=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},er={mixout:function(){return{parse:{transform:function(n){return Le(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Le(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(l," ").concat(c)},v={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:m,path:v};return{tag:"g",attributes:u({},p.outer),children:[{tag:"g",attributes:u({},p.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),p.path)}]}]}}}},Rt={x:0,y:0,width:"100%",height:"100%"};function ze(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function nr(t){return t.tag==="g"?t.children:[t]}var ar={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?Tt(r.split(" ").map(function(o){return o.trim()})):fe();return i.prefix||(i.prefix=Y()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,f=n.transform,l=i.width,c=i.icon,m=o.width,v=o.icon,p=ea({transform:f,containerWidth:m,iconWidth:l}),A={tag:"rect",attributes:u(u({},Rt),{},{fill:"white"})},E=c.children?{children:c.children.map(ze)}:{},x={tag:"g",attributes:u({},p.inner),children:[ze(u({tag:c.tag,attributes:u(u({},c.attributes),p.path)},E))]},C={tag:"g",attributes:u({},p.outer),children:[x]},w="mask-".concat(s||ft()),O="clip-".concat(s||ft()),N={tag:"mask",attributes:u(u({},Rt),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,C]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:nr(v)},N]};return a.push(P,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(w,")")},Rt)}),{children:a,attributes:r}}}},rr={provides:function(e){var n=!1;$.matchMedia&&(n=$.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},ir={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},or=[ra,Va,Xa,Ga,Ba,Za,tr,er,ar,rr,ir];ya(or,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;var Kt=I.parse;I.findIconDefinition;I.toHtml;var sr=I.icon;I.layer;I.text;I.counter;var gn={exports:{}},fr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",lr=fr,cr=lr;function hn(){}function yn(){}yn.resetWarningCache=hn;var ur=function(){function t(a,r,i,o,s,f){if(f!==cr){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:yn,resetWarningCache:hn};return n.PropTypes=n,n};gn.exports=ur();var mr=gn.exports;const b=Sn(mr);function Re(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Re(Object(n),!0).forEach(function(a){Q(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Re(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Ct(t){"@babel/helpers - typeof";return Ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ct(t)}function Q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function dr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function vr(t,e){if(t==null)return{};var n=dr(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Qt(t){return br(t)||pr(t)||gr(t)||hr()}function br(t){if(Array.isArray(t))return Jt(t)}function pr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function gr(t,e){if(t){if(typeof t=="string")return Jt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Jt(t,e)}}function Jt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function hr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yr(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,f=t.spin,l=t.spinPulse,c=t.spinReverse,m=t.pulse,v=t.fixedWidth,p=t.inverse,A=t.border,E=t.listItem,x=t.flip,C=t.size,w=t.rotation,O=t.pull,N=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":c,"fa-spin-pulse":l,"fa-pulse":m,"fa-fw":v,"fa-inverse":p,"fa-border":A,"fa-li":E,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},Q(e,"fa-".concat(C),typeof C<"u"&&C!==null),Q(e,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),Q(e,"fa-pull-".concat(O),typeof O<"u"&&O!==null),Q(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(N).map(function(P){return N[P]?P:null}).filter(function(P){return P})}function kr(t){return t=t-0,t===t}function kn(t){return kr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var xr=["style"];function wr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Ar(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=kn(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[wr(r)]=i:e[r]=i,e},{})}function xn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(f){return xn(t,f)}),r=Object.keys(e.attributes||{}).reduce(function(f,l){var c=e.attributes[l];switch(l){case"class":f.attrs.className=c,delete e.attributes.class;break;case"style":f.attrs.style=Ar(c);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?f.attrs[l.toLowerCase()]=c:f.attrs[kn(l)]=c}return f},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=vr(n,xr);return r.attrs.style=D(D({},r.attrs.style),o),t.apply(void 0,[e.tag,D(D({},r.attrs),s)].concat(Qt(a)))}var wn=!1;try{wn=!0}catch{}function Or(){if(!wn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Fe(t){if(t&&Ct(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Kt.icon)return Kt.icon(t);if(t===null)return null;if(t&&Ct(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Ft(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Q({},t,e):{}}var mt=$e.forwardRef(function(t,e){var n=t.icon,a=t.mask,r=t.symbol,i=t.className,o=t.title,s=t.titleId,f=t.maskId,l=Fe(n),c=Ft("classes",[].concat(Qt(yr(t)),Qt(i.split(" ")))),m=Ft("transform",typeof t.transform=="string"?Kt.transform(t.transform):t.transform),v=Ft("mask",Fe(a)),p=sr(l,D(D(D(D({},c),m),v),{},{symbol:r,title:o,titleId:s,maskId:f}));if(!p)return Or("Could not find icon",l),null;var A=p.abstract,E={ref:e};return Object.keys(t).forEach(function(x){mt.defaultProps.hasOwnProperty(x)||(E[x]=t[x])}),Sr(A[0],E)});mt.displayName="FontAwesomeIcon";mt.propTypes={beat:b.bool,border:b.bool,beatFade:b.bool,bounce:b.bool,className:b.string,fade:b.bool,flash:b.bool,mask:b.oneOfType([b.object,b.array,b.string]),maskId:b.string,fixedWidth:b.bool,inverse:b.bool,flip:b.oneOf([!0,!1,"horizontal","vertical","both"]),icon:b.oneOfType([b.object,b.array,b.string]),listItem:b.bool,pull:b.oneOf(["right","left"]),pulse:b.bool,rotation:b.oneOf([0,90,180,270]),shake:b.bool,size:b.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:b.bool,spinPulse:b.bool,spinReverse:b.bool,symbol:b.oneOfType([b.bool,b.string]),title:b.string,titleId:b.string,transform:b.oneOfType([b.string,b.object]),swapOpacity:b.bool};mt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Sr=xn.bind(null,$e.createElement),Pr={prefix:"fas",iconName:"film",icon:[512,512,[127902],"f008","M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z"]},Er={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"]},Cr={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},Nr={prefix:"fas",iconName:"camera",icon:[512,512,[62258,"camera-alt"],"f030","M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]};const wt=({iconName:t,link:e,sectionName:n})=>{const a={film:Pr,camera:Nr,users:Er,user:Cr};return y.jsx("li",{children:y.jsxs(Ye,{to:`/Film-Library/${e}`,className:"flex flex-col font-noto dark:text-white gap-y-1",children:[y.jsx(mt,{icon:a[t]}),n]})})},Ir=t=>{const e=new Image;if(e.src=t,e.complete)return t;e.onload=()=>t,e.onerror=()=>{}},De={moviesSeries:['after:content-["Series"]','after:content-["Movies"]'],"":""},Mr=({setType:t})=>{const[e,n]=He.useState(!1);return y.jsxs("label",{className:"min-w-24 relative inline-block h-8 rounded-2xl border-black dark:border-white border-2",children:[y.jsx("input",{className:"opacity-0 w-0 h-0",type:"checkbox",onChange:a=>{t(a.target.checked?"series":"movie"),n(a.target.checked)}}),y.jsx(An,{checked:e,content:"moviesSeries"})]})},An=t=>{const{checked:e,content:n}=t;return y.jsx("span",{className:`
        w-full
        h-full
        absolute
        before:duration-300
        after:duration-300
        before:h-5/6
        after:h-5/6
        before:aspect-square
        before:absolute
        after:absolute
        before:rounded-xl
        before:top-[2px]
        after:top-[2px]
        before:bg-black
        dark:before:bg-white
        ${e?De[n||""][0]:De[n||""][1]}
        ${e?"before:right-[4px]":"before:left-[4px]"}
        ${e?"after:left-[6px]":"after:right-[6px]"}
      `})},Tr=({setDarkTheme:t,darkTheme:e})=>{const[n,a]=He.useState(!1),r=i=>{t(!!i.target.checked),a(i.target.checked),localStorage.setItem("theme",i.target.checked.toString())};return y.jsxs("label",{className:"relative inline-block h-8 border-2 border-black min-w-14 rounded-2xl dark:border-white",children:[y.jsx("input",{className:"w-0 h-0 opacity-0",checked:e,type:"checkbox",onChange:i=>{r(i)}}),y.jsx(An,{checked:n})]})},jr=()=>{const{userInfo:t,setDarkTheme:e,darkTheme:n}=Pn();return y.jsxs("header",{className:"relative z-50 flex flex-row flex-wrap items-center justify-around w-full max-w-4xl p-2 mx-auto bg-white dark:bg-black rounded-b-md gap-y-1",children:[y.jsx(Ye,{to:"/Film-Library",children:y.jsx("h2",{className:"text-3xl font-bold font-noto dark:text-white",children:"Discoverisms"})}),y.jsxs("ul",{className:"flex-row items-center gap-x-4",children:[y.jsx(wt,{iconName:"film",link:"explore",sectionName:"Explore"}),y.jsx(wt,{iconName:"camera",link:"people",sectionName:"People"}),y.jsx(wt,{iconName:"users",link:"friends",sectionName:"Friends"}),y.jsx(wt,{iconName:"user",link:"user_profile",sectionName:"Profile"})]}),y.jsxs("div",{className:"flex-row items-center gap-x-4",children:[y.jsx(Tr,{setDarkTheme:e,darkTheme:n}),t&&Ir("https://website/images/img.png")&&y.jsx("img",{alt:"userImage",className:"userImage",src:t.profileURL}),y.jsx("button",{className:"px-2 border border-black rounded-full dark:border-white dark:bg-black dark:text-white h-7",onClick:t?En:Cn,children:t?"Sign Out":"Sign In"})]})]})},Lr=()=>y.jsx("div",{className:"bg-black dark:absolute dark:top-0 dark:bottom-0 dark:left-0 dark:right-0 opacity-35"});export{Lr as D,jr as H,Mr as S,Ir as c};
