import{R as f,r as h}from"./index-C-Mk1Gwc.js";var ce=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,a){return i[0]===n?(r=a,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,a=this.__entries__;i<a.length;i++){var s=a[i];n.call(r,s[1],s[0])}},t}()}(),ee=typeof window<"u"&&typeof document<"u"&&window.document===document,Z=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),xe=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Z):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),ke=2;function Ne(e,t){var n=!1,r=!1,i=0;function a(){n&&(n=!1,e()),r&&o()}function s(){xe(a)}function o(){var c=Date.now();if(n){if(c-i<ke)return;r=!0}else n=!0,r=!1,setTimeout(s,t);i=c}return o}var ze=20,Fe=["top","right","bottom","left","width","height","size","weight"],De=typeof MutationObserver<"u",je=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Ne(this.refresh.bind(this),ze)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!ee||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),De?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!ee||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=Fe.some(function(a){return!!~r.indexOf(a)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),fe=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},j=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||Z},le=J(0,0,0,0);function Y(e){return parseFloat(e)||0}function oe(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var a=e["border-"+i+"-width"];return r+Y(a)},0)}function Be(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var a=i[r],s=e["padding-"+a];n[a]=Y(s)}return n}function We(e){var t=e.getBBox();return J(0,0,t.width,t.height)}function Ue(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return le;var r=j(e).getComputedStyle(e),i=Be(r),a=i.left+i.right,s=i.top+i.bottom,o=Y(r.width),c=Y(r.height);if(r.boxSizing==="border-box"&&(Math.round(o+a)!==t&&(o-=oe(r,"left","right")+a),Math.round(c+s)!==n&&(c-=oe(r,"top","bottom")+s)),!He(e)){var p=Math.round(o+a)-t,_=Math.round(c+s)-n;Math.abs(p)!==1&&(o-=p),Math.abs(_)!==1&&(c-=_)}return J(i.left,i.top,o,c)}var Ge=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof j(e).SVGGraphicsElement}:function(e){return e instanceof j(e).SVGElement&&typeof e.getBBox=="function"}}();function He(e){return e===j(e).document.documentElement}function Le(e){return ee?Ge(e)?We(e):Ue(e):le}function qe(e){var t=e.x,n=e.y,r=e.width,i=e.height,a=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(a.prototype);return fe(s,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),s}function J(e,t,n,r){return{x:e,y:t,width:n,height:r}}var Qe=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=J(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=Le(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),$e=function(){function e(t,n){var r=qe(n);fe(this,{target:t,contentRect:r})}return e}(),Ke=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new ce,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof j(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new Qe(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof j(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new $e(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),he=typeof WeakMap<"u"?new WeakMap:new ce,de=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=je.getInstance(),r=new Ke(t,n,this);he.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){de.prototype[e]=function(){var t;return(t=he.get(this))[e].apply(t,arguments)}});var ve=function(){return typeof Z.ResizeObserver<"u"?Z.ResizeObserver:de}(),T={Linear:{None:function(e){return e}},Quadratic:{In:function(e){return e*e},Out:function(e){return e*(2-e)},InOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)}},Cubic:{In:function(e){return e*e*e},Out:function(e){return--e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}},Quartic:{In:function(e){return e*e*e*e},Out:function(e){return 1- --e*e*e*e},InOut:function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)}},Quintic:{In:function(e){return e*e*e*e*e},Out:function(e){return--e*e*e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}},Sinusoidal:{In:function(e){return 1-Math.cos(e*Math.PI/2)},Out:function(e){return Math.sin(e*Math.PI/2)},InOut:function(e){return .5*(1-Math.cos(Math.PI*e))}},Exponential:{In:function(e){return e===0?0:Math.pow(1024,e-1)},Out:function(e){return e===1?1:1-Math.pow(2,-10*e)},InOut:function(e){return e===0?0:e===1?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(-Math.pow(2,-10*(e-1))+2)}},Circular:{In:function(e){return 1-Math.sqrt(1-e*e)},Out:function(e){return Math.sqrt(1- --e*e)},InOut:function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}},Elastic:{In:function(e){return e===0?0:e===1?1:-Math.pow(2,10*(e-1))*Math.sin((e-1.1)*5*Math.PI)},Out:function(e){return e===0?0:e===1?1:Math.pow(2,-10*e)*Math.sin((e-.1)*5*Math.PI)+1},InOut:function(e){return e===0?0:e===1?1:(e*=2,e<1?-.5*Math.pow(2,10*(e-1))*Math.sin((e-1.1)*5*Math.PI):.5*Math.pow(2,-10*(e-1))*Math.sin((e-1.1)*5*Math.PI)+1)}},Back:{In:function(e){var t=1.70158;return e*e*((t+1)*e-t)},Out:function(e){var t=1.70158;return--e*e*((t+1)*e+t)+1},InOut:function(e){var t=2.5949095;return(e*=2)<1?.5*(e*e*((t+1)*e-t)):.5*((e-=2)*e*((t+1)*e+t)+2)}},Bounce:{In:function(e){return 1-T.Bounce.Out(1-e)},Out:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},InOut:function(e){return e<.5?T.Bounce.In(e*2)*.5:T.Bounce.Out(e*2-1)*.5+.5}}},G;typeof self>"u"&&typeof process<"u"&&process.hrtime?G=function(){var e=process.hrtime();return e[0]*1e3+e[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?G=self.performance.now.bind(self.performance):Date.now!==void 0?G=Date.now:G=function(){return new Date().getTime()};var D=G,te=function(){function e(){this._tweens={},this._tweensAddedDuringUpdate={}}return e.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(n){return t._tweens[n]})},e.prototype.removeAll=function(){this._tweens={}},e.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},e.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},e.prototype.update=function(t,n){t===void 0&&(t=D()),n===void 0&&(n=!1);var r=Object.keys(this._tweens);if(r.length===0)return!1;for(;r.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<r.length;i++){var a=this._tweens[r[i]],s=!n;a&&a.update(t,s)===!1&&!n&&delete this._tweens[r[i]]}r=Object.keys(this._tweensAddedDuringUpdate)}return!0},e}(),H={Linear:function(e,t){var n=e.length-1,r=n*t,i=Math.floor(r),a=H.Utils.Linear;return t<0?a(e[0],e[1],r):t>1?a(e[n],e[n-1],n-r):a(e[i],e[i+1>n?n:i+1],r-i)},Bezier:function(e,t){for(var n=0,r=e.length-1,i=Math.pow,a=H.Utils.Bernstein,s=0;s<=r;s++)n+=i(1-t,r-s)*i(t,s)*e[s]*a(r,s);return n},CatmullRom:function(e,t){var n=e.length-1,r=n*t,i=Math.floor(r),a=H.Utils.CatmullRom;return e[0]===e[n]?(t<0&&(i=Math.floor(r=n*(1+t))),a(e[(i-1+n)%n],e[i],e[(i+1)%n],e[(i+2)%n],r-i)):t<0?e[0]-(a(e[0],e[0],e[1],e[1],-r)-e[0]):t>1?e[n]-(a(e[n],e[n],e[n-1],e[n-1],r-n)-e[n]):a(e[i?i-1:0],e[i],e[n<i+1?n:i+1],e[n<i+2?n:i+2],r-i)},Utils:{Linear:function(e,t,n){return(t-e)*n+e},Bernstein:function(e,t){var n=H.Utils.Factorial;return n(e)/n(t)/n(e-t)},Factorial:function(){var e=[1];return function(t){var n=1;if(e[t])return e[t];for(var r=t;r>1;r--)n*=r;return e[t]=n,n}}(),CatmullRom:function(e,t,n,r,i){var a=(n-e)*.5,s=(r-t)*.5,o=i*i,c=i*o;return(2*t-2*n+a+s)*c+(-3*t+3*n-2*a-s)*o+a*i+t}}},Xe=function(){function e(){}return e.nextId=function(){return e._nextId++},e._nextId=0,e}(),_e=new te,pe=function(){function e(t,n){n===void 0&&(n=_e),this._object=t,this._group=n,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=T.Linear.None,this._interpolationFunction=H.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=Xe.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return e.prototype.getId=function(){return this._id},e.prototype.isPlaying=function(){return this._isPlaying},e.prototype.isPaused=function(){return this._isPaused},e.prototype.to=function(t,n){return this._valuesEnd=Object.create(t),n!==void 0&&(this._duration=n),this},e.prototype.duration=function(t){return this._duration=t,this},e.prototype.start=function(t){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t!==void 0?typeof t=="string"?D()+parseFloat(t):t:D(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},e.prototype._setupProperties=function(t,n,r,i){for(var a in r){var s=t[a],o=Array.isArray(s),c=o?"array":typeof s,p=!o&&Array.isArray(r[a]);if(!(c==="undefined"||c==="function")){if(p){var _=r[a];if(_.length===0)continue;_=_.map(this._handleRelativeValue.bind(this,s)),r[a]=[s].concat(_)}if((c==="object"||o)&&s&&!p){n[a]=o?[]:{};for(var w in s)n[a][w]=s[w];i[a]=o?[]:{},this._setupProperties(s,n[a],r[a],i[a])}else typeof n[a]>"u"&&(n[a]=s),o||(n[a]*=1),p?i[a]=r[a].slice().reverse():i[a]=n[a]||0}}},e.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},e.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},e.prototype.pause=function(t){return t===void 0&&(t=D()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this),this)},e.prototype.resume=function(t){return t===void 0&&(t=D()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},e.prototype.stopChainedTweens=function(){for(var t=0,n=this._chainedTweens.length;t<n;t++)this._chainedTweens[t].stop();return this},e.prototype.group=function(t){return this._group=t,this},e.prototype.delay=function(t){return this._delayTime=t,this},e.prototype.repeat=function(t){return this._initialRepeat=t,this._repeat=t,this},e.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},e.prototype.yoyo=function(t){return this._yoyo=t,this},e.prototype.easing=function(t){return this._easingFunction=t,this},e.prototype.interpolation=function(t){return this._interpolationFunction=t,this},e.prototype.chain=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return this._chainedTweens=t,this},e.prototype.onStart=function(t){return this._onStartCallback=t,this},e.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},e.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},e.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},e.prototype.onStop=function(t){return this._onStopCallback=t,this},e.prototype.update=function(t,n){if(t===void 0&&(t=D()),n===void 0&&(n=!0),this._isPaused)return!0;var r,i,a=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>a)return!1;n&&this.start(t)}if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),i=(t-this._startTime)/this._duration,i=this._duration===0||i>1?1:i;var s=this._easingFunction(i);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,s),this._onUpdateCallback&&this._onUpdateCallback(this._object,i),i===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(r in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[r]=="string"&&(this._valuesStartRepeat[r]=this._valuesStartRepeat[r]+parseFloat(this._valuesEnd[r])),this._yoyo&&this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var o=0,c=this._chainedTweens.length;o<c;o++)this._chainedTweens[o].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},e.prototype._updateProperties=function(t,n,r,i){for(var a in r)if(n[a]!==void 0){var s=n[a]||0,o=r[a],c=Array.isArray(t[a]),p=Array.isArray(o),_=!c&&p;_?t[a]=this._interpolationFunction(o,i):typeof o=="object"&&o?this._updateProperties(t[a],s,o,i):(o=this._handleRelativeValue(s,o),typeof o=="number"&&(t[a]=s+(o-s)*i))}},e.prototype._handleRelativeValue=function(t,n){return typeof n!="string"?n:n.charAt(0)==="+"||n.charAt(0)==="-"?t+parseFloat(n):parseFloat(n)},e.prototype._swapEndStartRepeatValues=function(t){var n=this._valuesStartRepeat[t],r=this._valuesEnd[t];typeof r=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(r):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=n},e}(),O=_e;O.getAll.bind(O);O.removeAll.bind(O);O.add.bind(O);O.remove.bind(O);O.update.bind(O);function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(this,arguments)}var ge=function(t,n){return n&&n<f.Children.count(t)?n:0},Ze=function(t,n){if(typeof window<"u"&&Array.isArray(n))return n.find(function(r){return r.breakpoint<=t})},ue={linear:T.Linear.None,ease:T.Quadratic.InOut,"ease-in":T.Quadratic.In,"ease-out":T.Quadratic.Out,cubic:T.Cubic.InOut,"cubic-in":T.Cubic.In,"cubic-out":T.Cubic.Out},be=function(t){return t?ue[t]:ue.linear},ye=function(t,n,r){var i=t.prevArrow,a=t.infinite,s=n<=0&&!a,o={"data-type":"prev","aria-label":"Previous Slide",disabled:s,onClick:r};if(i)return f.cloneElement(i,L({className:(i.props.className||"")+" nav "+(s?"disabled":"")},o));var c="nav default-nav "+(s?"disabled":"");return f.createElement("button",Object.assign({type:"button",className:c},o),f.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},f.createElement("path",{d:"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"})))},we=function(t,n,r){var i=t.nextArrow,a=t.infinite,s=t.children,o=1;"slidesToScroll"in t&&(o=t.slidesToScroll||1);var c=n>=f.Children.count(s)-o&&!a,p={"data-type":"next","aria-label":"Next Slide",disabled:c,onClick:r};if(i)return f.cloneElement(i,L({className:(i.props.className||"")+" nav "+(c?"disabled":"")},p));var _="nav default-nav "+(c?"disabled":"");return f.createElement("button",Object.assign({type:"button",className:_},p),f.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},f.createElement("path",{d:"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"})))},Ye=function(t,n,r){return f.createElement("li",{key:n},f.createElement("button",Object.assign({type:"button",className:"each-slideshow-indicator "+(t?"active":"")},r)))},Je=function(t,n,r,i){return f.cloneElement(i,L({className:i.props.className+" "+(t?"active":""),key:n},r))},me=function(t,n,r,i){var a=t.children,s=t.indicators,o=1;i?o=i==null?void 0:i.settings.slidesToScroll:"slidesToScroll"in t&&(o=t.slidesToScroll||1);var c=Math.ceil(f.Children.count(a)/o);return f.createElement("ul",{className:"indicators"},Array.from({length:c},function(p,_){var w={"data-key":_,"aria-label":"Go to slide "+(_+1),onClick:r},y=Math.floor((n+o-1)/o)===_;return typeof s=="function"?Je(y,_,w,s(_)):Ye(y,_,w)}))},V={duration:5e3,transitionDuration:1e3,defaultIndex:0,infinite:!0,autoplay:!0,indicators:!1,arrows:!0,pauseOnHover:!0,easing:"linear",canSwipe:!0,cssClass:"",responsive:[]},ne=f.forwardRef(function(e,t){var n=h.useState(ge(e.children,e.defaultIndex)),r=n[0],i=n[1],a=h.useRef(null),s=h.useRef(null),o=h.useRef(new te),c=h.useRef(),p=h.useRef(),_=h.useMemo(function(){return f.Children.count(e.children)},[e.children]),w=h.useCallback(function(){if(s.current&&a.current){var g=a.current.clientWidth,l=g*_;s.current.style.width=l+"px";for(var b=0;b<s.current.children.length;b++){var m=s.current.children[b];m&&(m.style.width=g+"px",m.style.left=b*-g+"px",m.style.display="block")}}},[a,s,_]),y=h.useCallback(function(){a.current&&(p.current=new ve(function(g){g&&w()}),p.current.observe(a.current))},[a,w]),S=h.useCallback(function(){var g=e.autoplay,l=e.children,b=e.duration,m=e.infinite;g&&f.Children.count(l)>1&&(m||r<f.Children.count(l)-1)&&(c.current=setTimeout(R,b))},[e,r]);h.useEffect(function(){return y(),function(){o.current.removeAll(),clearTimeout(c.current),E()}},[y,o]),h.useEffect(function(){clearTimeout(c.current),S()},[r,e.autoplay,S]),h.useEffect(function(){w()},[_,w]),h.useImperativeHandle(t,function(){return{goNext:function(){R()},goBack:function(){P()},goTo:function(l,b){b!=null&&b.skipTransition?i(l):B(l)}}});var E=function(){p.current&&a.current&&p.current.unobserve(a.current)},A=function(){e.pauseOnHover&&clearTimeout(c.current)},C=function(){var l=e.pauseOnHover,b=e.autoplay,m=e.duration;l&&b&&(c.current=setTimeout(function(){return R()},m))},R=function(){var l=e.children,b=e.infinite;!b&&r===f.Children.count(l)-1||k((r+1)%f.Children.count(l))},P=function(){var l=e.children,b=e.infinite;!b&&r===0||k(r===0?f.Children.count(l)-1:r-1)},I=function(l){var b=l.currentTarget;b.dataset.type==="prev"?P():R()},M=function g(){requestAnimationFrame(g),o.current.update()},k=function(l){var b=o.current.getAll();if(!b.length){var m;(m=s.current)!=null&&m.children[l]||(l=0),clearTimeout(c.current);var W={opacity:0,scale:1};M();var N=new pe(W,o.current).to({opacity:1,scale:e.scale},e.transitionDuration).onUpdate(function(z){s.current&&(s.current.children[l].style.opacity=z.opacity,s.current.children[r].style.opacity=1-z.opacity,s.current.children[r].style.transform="scale("+z.scale+")")});N.easing(be(e.easing)),N.onStart(function(){typeof e.onStartChange=="function"&&e.onStartChange(r,l)}),N.onComplete(function(){s.current&&(i(l),s.current.children[r].style.transform="scale(1)"),typeof e.onChange=="function"&&e.onChange(r,l)}),N.start()}},B=function(l){l!==r&&k(l)},q=function(l){var b=l.currentTarget;b.dataset.key&&parseInt(b.dataset.key)!==r&&B(parseInt(b.dataset.key))};return f.createElement("div",{dir:"ltr","aria-roledescription":"carousel"},f.createElement("div",{className:"react-slideshow-container "+(e.cssClass||""),onMouseEnter:A,onMouseOver:A,onMouseLeave:C},e.arrows&&ye(e,r,I),f.createElement("div",{className:"react-slideshow-fadezoom-wrapper "+e.cssClass,ref:a},f.createElement("div",{className:"react-slideshow-fadezoom-images-wrap",ref:s},(f.Children.map(e.children,function(g){return g})||[]).map(function(g,l){return f.createElement("div",{style:{opacity:l===r?"1":"0",zIndex:l===r?"1":"0"},"data-index":l,key:l,"aria-roledescription":"slide","aria-hidden":l===r?"false":"true"},g)}))),e.arrows&&we(e,r,I)),e.indicators&&me(e,r,q))});ne.defaultProps=V;var Ve=f.forwardRef(function(e,t){return f.createElement(ne,Object.assign({},e,{scale:1,ref:t}))});Ve.defaultProps=V;var et=f.forwardRef(function(e,t){return f.createElement(ne,Object.assign({},e,{ref:t}))});et.defaultProps=V;var tt=f.forwardRef(function(e,t){var n=h.useState(ge(e.children,e.defaultIndex)),r=n[0],i=n[1],a=h.useState(0),s=a[0],o=a[1],c=h.useRef(null),p=h.useRef(null),_=h.useRef(new te),w=h.useMemo(function(){return Ze(s,e.responsive)},[s,e.responsive]),y=h.useMemo(function(){return w?w.settings.slidesToScroll:e.slidesToScroll||1},[w,e.slidesToScroll]),S=h.useMemo(function(){return w?w.settings.slidesToShow:e.slidesToShow||1},[w,e.slidesToShow]),E=h.useMemo(function(){return f.Children.count(e.children)},[e.children]),A=h.useMemo(function(){return s/S},[s,S]),C=h.useRef(),R=h.useRef(),P,I=!1,M=0,k=h.useCallback(function(){if(p.current){var d=s*p.current.children.length;p.current.style.width=d+"px";for(var u=0;u<p.current.children.length;u++){var v=p.current.children[u];v&&(v.style.width=A+"px",v.style.display="block")}}},[s,A]),B=h.useCallback(function(){c.current&&(R.current=new ve(function(d){d&&Oe()}),R.current.observe(c.current))},[c]),q=h.useCallback(function(){var d=e.autoplay,u=e.infinite,v=e.duration;d&&(u||r<E-1)&&(C.current=setTimeout(m,v))},[e,E,r]);h.useEffect(function(){k()},[s,k]),h.useEffect(function(){return B(),function(){_.current.removeAll(),clearTimeout(C.current),g()}},[c,B,_]),h.useEffect(function(){clearTimeout(C.current),q()},[r,s,e.autoplay,q]),h.useImperativeHandle(t,function(){return{goNext:function(){m()},goBack:function(){W()},goTo:function(u,v){v!=null&&v.skipTransition?i(u):z(u)}}});var g=function(){R&&c.current&&R.current.unobserve(c.current)},l=function(){e.pauseOnHover&&clearTimeout(C.current)},b=function(u){if(e.canSwipe&&I){var v;if(window.TouchEvent&&u.nativeEvent instanceof TouchEvent?v=u.nativeEvent.touches[0].pageX:u.nativeEvent instanceof MouseEvent&&(v=u.nativeEvent.clientX),v&&P){var F=A*(r+K()),U=v-P;if(!e.infinite&&r===E-y&&U<0||!e.infinite&&r===0&&U>0)return;M=U,F-=M,p.current.style.transform="translate(-"+F+"px)"}}},m=function(){if(!(!e.infinite&&r===E-y)){var u=re(r+y);$(u)}},W=function(){if(!(!e.infinite&&r===0)){var u=r-y;u%y&&(u=Math.ceil(u/y)*y),$(u)}},N=function(u){var v=u.currentTarget;if(v.dataset.key){var F=parseInt(v.dataset.key);z(F*y)}},z=function(u){$(re(u))},re=function(u){return u<E&&u+y>E&&(E-y)%y?E-y:u},Ee=function(){I?Q():e.pauseOnHover&&e.autoplay&&(C.current=setTimeout(m,e.duration))},ie=function(u){var v=u.currentTarget.dataset;v.type==="next"?m():W()},Se=function(){return f.Children.toArray(e.children).slice(-S).map(function(u,v){return f.createElement("div",{"data-index":v-S,"aria-roledescription":"slide","aria-hidden":"true",key:v-S},u)})},Te=function(){if(!(!e.infinite&&S===y))return f.Children.toArray(e.children).slice(0,S).map(function(u,v){return f.createElement("div",{"data-index":E+v,"aria-roledescription":"slide","aria-hidden":"true",key:E+v},u)})},Oe=function(){c.current&&o(c.current.clientWidth)},ae=function(u){e.canSwipe&&(window.TouchEvent&&u.nativeEvent instanceof TouchEvent?P=u.nativeEvent.touches[0].pageX:u.nativeEvent instanceof MouseEvent&&(P=u.nativeEvent.clientX),clearTimeout(C.current),I=!0)},Q=function(){e.canSwipe&&(I=!1,Math.abs(M)/s>.2?M<0?m():W():Math.abs(M)>0&&$(r,300))},Ce=function d(){requestAnimationFrame(d),_.current.update()},$=function(u,v){var F=v||e.transitionDuration,U=r,Ae=_.current.getAll();if(c.current){var se=c.current.clientWidth/S;if(!Ae.length){clearTimeout(C.current);var Pe={margin:-se*(U+K())+M},X=new pe(Pe,_.current).to({margin:-se*(u+K())},F).onUpdate(function(Ie){p.current&&(p.current.style.transform="translate("+Ie.margin+"px)")});X.easing(be(e.easing)),Ce();var x=u;x<0?x=E-y:x>=E&&(x=0),X.onStart(function(){typeof e.onStartChange=="function"&&e.onStartChange(r,x)}),X.onComplete(function(){M=0,typeof e.onChange=="function"&&e.onChange(r,x),i(x)}),X.start()}}},Re=function(u){return u<r+S&&u>=r},K=function(){return e.infinite?S:0},Me={transform:"translate(-"+(r+K())*A+"px)"};return f.createElement("div",{dir:"ltr","aria-roledescription":"carousel"},f.createElement("div",{className:"react-slideshow-container",onMouseEnter:l,onMouseOver:l,onMouseLeave:Ee,onMouseDown:ae,onMouseUp:Q,onMouseMove:b,onTouchStart:ae,onTouchEnd:Q,onTouchCancel:Q,onTouchMove:b},e.arrows&&ye(e,r,ie),f.createElement("div",{className:"react-slideshow-wrapper slide "+(e.cssClass||""),ref:c},f.createElement("div",{className:"images-wrap",style:Me,ref:p},e.infinite&&Se(),(f.Children.map(e.children,function(d){return d})||[]).map(function(d,u){var v=Re(u);return f.createElement("div",{"data-index":u,key:u,className:v?"active":"","aria-roledescription":"slide","aria-hidden":v?"false":"true"},d)}),Te())),e.arrows&&we(e,r,ie)),e.indicators&&me(e,r,N,w))});tt.defaultProps=V;export{Ve as F};
