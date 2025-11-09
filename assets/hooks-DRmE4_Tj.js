import{g as A,_ as ee,b as te,c as ne,d as re,C as se,e as D,f as oe,S as ie,F as ae,r as N,u as ue}from"./index-CD_z1DSE.js";import{u as ce}from"./axios-C3ovwQAk.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H="firebasestorage.googleapis.com",q="storageBucket",le=2*60*1e3,he=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l extends ae{constructor(t,n,r=0){super(O(t),`Firebase Storage: ${n} (${O(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return O(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function O(e){return"storage/"+e}function B(){const e="An unknown error occurred, please check the error payload for server response.";return new l("unknown",e)}function de(e){return new l("object-not-found","Object '"+e+"' does not exist.")}function fe(e){return new l("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function pe(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new l("unauthenticated",e)}function ge(){return new l("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function _e(e){return new l("unauthorized","User does not have permission to access '"+e+"'.")}function me(){return new l("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function ke(){return new l("canceled","User canceled the upload/download.")}function we(e){return new l("invalid-url","Invalid URL '"+e+"'.")}function be(e){return new l("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function Re(){return new l("no-default-bucket","No default bucket found. Did you set the '"+q+"' property when initializing the app?")}function ye(){return new l("no-download-url","The given file does not have any download URLs.")}function U(e){return new l("invalid-argument",e)}function X(){return new l("app-deleted","The Firebase app was deleted.")}function xe(e){return new l("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function x(e){throw new l("internal-error","Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=d.makeFromUrl(t,n)}catch{return new d(t,"")}if(r.path==="")return r;throw be(t)}static makeFromUrl(t,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(p){p.path.charAt(p.path.length-1)==="/"&&(p.path_=p.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+s+i,"i"),u={bucket:1,path:3};function c(p){p.path_=decodeURIComponent(p.path)}const g="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",w=new RegExp(`^https?://${m}/${g}/b/${s}/o${_}`,"i"),k={bucket:1,path:3},T=n===H?"(?:storage.googleapis.com|storage.cloud.google.com)":n,f="([^?#]*)",C=new RegExp(`^https?://${T}/${s}/${f}`,"i"),y=[{regex:a,indices:u,postModify:o},{regex:w,indices:k,postModify:c},{regex:C,indices:{bucket:1,path:2},postModify:c}];for(let p=0;p<y.length;p++){const v=y[p],P=v.regex.exec(t);if(P){const J=P[v.indices.bucket];let I=P[v.indices.path];I||(I=""),r=new d(J,I),v.postModify(r);break}}if(r==null)throw we(t);return r}}class Te{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e,t,n){let r=1,s=null,o=null,i=!1,a=0;function u(){return a===2}let c=!1;function g(...f){c||(c=!0,t.apply(null,f))}function m(f){s=setTimeout(()=>{s=null,e(w,u())},f)}function _(){o&&clearTimeout(o)}function w(f,...C){if(c){_();return}if(f){_(),g.call(null,f,...C);return}if(u()||i){_(),g.call(null,f,...C);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,m(y)}let k=!1;function T(f){k||(k=!0,_(),!c&&(s!==null?(f||(a=2),clearTimeout(s),m(0)):f||(a=1)))}return m(0),o=setTimeout(()=>{i=!0,T(!0)},n),T}function ve(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(e){return e!==void 0}function Ee(e){return typeof e=="object"&&!Array.isArray(e)}function z(e){return typeof e=="string"||e instanceof String}function M(e,t,n,r){if(r<t)throw U(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw U(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function W(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const s=t(r)+"="+t(e[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(b||(b={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(e,t){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||s||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t,n,r,s,o,i,a,u,c,g,m,_=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=g,this.connectionFactory_=m,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,k)=>{this.resolve_=w,this.reject_=k,this.start_()})}start_(){const t=(r,s)=>{if(s){r(!1,new S(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const a=o.getErrorCode()===b.NO_ERROR,u=o.getStatus();if((!a||Pe(u,this.additionalRetryCodes_))&&this.retry){const g=o.getErrorCode()===b.ABORT;r(!1,new S(!1,null,g));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new S(c,o))})},n=(r,s)=>{const o=this.resolve_,i=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());Se(u)?o(u):o()}catch(u){i(u)}else if(a!==null){const u=B();u.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,u)):i(u)}else if(s.canceled){const u=this.appDelete_?X():ke();i(u)}else{const u=me();i(u)}};this.canceled_?n(!1,new S(!1,null,!0)):this.backoffId_=Ce(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&ve(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class S{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function Oe(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Ue(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Ae(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Fe(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function De(e,t,n,r,s,o,i=!0){const a=W(e.urlParams),u=e.url+a,c=Object.assign({},e.headers);return Ae(c,t),Oe(c,n),Ue(c,o),Fe(c,r),new Ie(u,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e){let t;try{t=JSON.parse(e)}catch{return null}return Ee(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Me(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function V(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(e,t){return t}class h{constructor(t,n,r,s){this.server=t,this.local=n||t,this.writable=!!r,this.xform=s||$e}}let E=null;function Le(e){return!z(e)||e.length<2?e:V(e)}function je(){if(E)return E;const e=[];e.push(new h("bucket")),e.push(new h("generation")),e.push(new h("metageneration")),e.push(new h("name","fullPath",!0));function t(o,i){return Le(i)}const n=new h("name");n.xform=t,e.push(n);function r(o,i){return i!==void 0?Number(i):i}const s=new h("size");return s.xform=r,e.push(s),e.push(new h("timeCreated")),e.push(new h("updated")),e.push(new h("md5Hash",null,!0)),e.push(new h("cacheControl",null,!0)),e.push(new h("contentDisposition",null,!0)),e.push(new h("contentEncoding",null,!0)),e.push(new h("contentLanguage",null,!0)),e.push(new h("contentType",null,!0)),e.push(new h("metadata","customMetadata",!0)),E=e,E}function He(e,t){function n(){const r=e.bucket,s=e.fullPath,o=new d(r,s);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function qe(e,t,n){const r={};r.type="file";const s=n.length;for(let o=0;o<s;o++){const i=n[o];r[i.local]=i.xform(r,t[i.server])}return He(r,e),r}function Be(e,t,n){const r=K(t);return r===null?null:qe(e,r,n)}function Xe(e,t,n,r){const s=K(t);if(s===null||!z(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(c=>{const g=e.bucket,m=e.fullPath,_="/b/"+i(g)+"/o/"+i(m),w=G(_,n,r),k=W({alt:"media",token:c});return w+k})[0]}class ze{constructor(t,n,r,s){this.url=t,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(e){if(!e)throw B()}function We(e,t){function n(r,s){const o=Be(e,s,t);return Ge(o!==null),Xe(o,s,e.host,e._protocol)}return n}function Ke(e){function t(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=ge():s=pe():n.getStatus()===402?s=fe(e.bucket):n.getStatus()===403?s=_e(e.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return t}function Ve(e){const t=Ke(e);function n(r,s){let o=t(r,s);return r.getStatus()===404&&(o=de(e.path)),o.serverResponse=s.serverResponse,o}return n}function Ye(e,t,n){const r=t.fullServerUrl(),s=G(r,e.host,e._protocol),o="GET",i=e.maxOperationRetryTime,a=new ze(s,o,We(e,n),i);return a.errorHandler=Ve(t),a}class Qe{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=b.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=b.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=b.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,s){if(this.sent_)throw x("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw x("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw x("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw x("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw x("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Ze extends Qe{initXhr(){this.xhr_.responseType="text"}}function Je(){return new Ze}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t,n){this._service=t,n instanceof d?this._location=n:this._location=d.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new R(t,n)}get root(){const t=new d(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return V(this._location.path)}get storage(){return this._service}get parent(){const t=Ne(this._location.path);if(t===null)return null;const n=new d(this._location.bucket,t);return new R(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw xe(t)}}function et(e){e._throwIfRoot("getDownloadURL");const t=Ye(e.storage,e._location,je());return e.storage.makeRequestWithTokens(t,Je).then(n=>{if(n===null)throw ye();return n})}function tt(e,t){const n=Me(e._location.path,t),r=new d(e._location.bucket,n);return new R(e.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(e){return/^[A-Za-z]+:\/\//.test(e)}function rt(e,t){return new R(e,t)}function Y(e,t){if(e instanceof F){const n=e;if(n._bucket==null)throw Re();const r=new R(n,n._bucket);return t!=null?Y(r,t):r}else return t!==void 0?tt(e,t):e}function st(e,t){if(t&&nt(t)){if(e instanceof F)return rt(e,t);throw U("To use ref(service, url), the first argument must be a Storage instance.")}else return Y(e,t)}function $(e,t){const n=t==null?void 0:t[q];return n==null?null:d.makeFromBucketSpec(n,e)}function ot(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken=typeof s=="string"?s:oe(s,e.app.options.projectId))}class F{constructor(t,n,r,s,o){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=H,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=le,this._maxUploadRetryTime=he,this._requests=new Set,s!=null?this._bucket=d.makeFromBucketSpec(s,this._host):this._bucket=$(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=d.makeFromBucketSpec(this._url,t):this._bucket=$(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){M("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){M("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new R(this,t)}_makeRequest(t,n,r,s,o=!0){if(this._deleted)return new Te(X());{const i=De(t,this._appId,r,s,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,s).getPromise()}}const L="@firebase/storage",j="0.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q="storage";function it(e){return e=A(e),et(e)}function at(e,t){return e=A(e),st(e,t)}function ut(e=ne(),t){e=A(e);const r=ee(e,Q).getImmediate({identifier:t}),s=te("storage");return s&&ct(r,...s),r}function ct(e,t,n,r={}){ot(e,t,n,r)}function lt(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new F(n,r,s,t,ie)}function ht(){re(new se(Q,lt,"PUBLIC").setMultipleInstances(!0)),D(L,j,""),D(L,j,"esm2017")}ht();const pt=()=>{const e=ut(),t=at(e,"background.avif"),{data:n}=ce(["link"],()=>it(t),{staleTime:1/0});return n},gt=()=>{const[e,t]=N.useState(),{userInfo:n}=ue();return N.useEffect(()=>{n&&t(n.displayName.split(" ").slice(0,-1).join("."))},[n]),e};export{gt as a,pt as u};
