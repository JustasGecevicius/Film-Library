import{r as n,j as s,u as w}from"./index-CASEKhqL.js";import{H as C,D as j,c as b}from"./DarkBackground-BpTdFBwT.js";import{u as N}from"./hooks-Bye8Mbwf.js";import{u as P}from"./hooks-B6tIdcW8.js";import{C as E,B,a as W,L as V,b as O,p as _,c as I,d as M}from"./index-BmZuzSY2.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var u=function(e,t){return u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var i in r)r.hasOwnProperty(i)&&(a[i]=r[i])},u(e,t)};function S(e,t){u(e,t);function a(){this.constructor=e}e.prototype=t===null?Object.create(t):(a.prototype=t.prototype,new a)}var L=100,H=100,m=50,d=50,x=50;function f(e){var t=e.className,a=e.counterClockwise,r=e.dashRatio,i=e.pathRadius,o=e.strokeWidth,l=e.style;return n.createElement("path",{className:t,style:Object.assign({},l,X({pathRadius:i,dashRatio:r,counterClockwise:a})),d:D({pathRadius:i,counterClockwise:a}),strokeWidth:o,fillOpacity:0})}function D(e){var t=e.pathRadius,a=e.counterClockwise,r=t,i=a?1:0;return`
      M `+d+","+x+`
      m 0,-`+r+`
      a `+r+","+r+" "+i+" 1 1 0,"+2*r+`
      a `+r+","+r+" "+i+" 1 1 0,-"+2*r+`
    `}function X(e){var t=e.counterClockwise,a=e.dashRatio,r=e.pathRadius,i=Math.PI*2*r,o=(1-a)*i;return{strokeDasharray:i+"px "+i+"px",strokeDashoffset:(t?-o:o)+"px"}}var y=function(e){S(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return m-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var a=this.props,r=a.value,i=a.minValue,o=a.maxValue,l=Math.min(Math.max(r,i),o);return(l-i)/(o-i)},t.prototype.render=function(){var a=this.props,r=a.circleRatio,i=a.className,o=a.classes,l=a.counterClockwise,c=a.styles,h=a.strokeWidth,p=a.text,g=this.getPathRadius(),R=this.getPathRatio();return n.createElement("svg",{className:o.root+" "+i,style:c.root,viewBox:"0 0 "+L+" "+H,"data-test-id":"CircularProgressbar"},this.props.background?n.createElement("circle",{className:o.background,style:c.background,cx:d,cy:x,r:m}):null,n.createElement(f,{className:o.trail,counterClockwise:l,dashRatio:r,pathRadius:g,strokeWidth:h,style:c.trail}),n.createElement(f,{className:o.path,counterClockwise:l,dashRatio:R*r,pathRadius:g,strokeWidth:h,style:c.path}),p?n.createElement("text",{className:o.text,style:c.text,x:d,y:x},p):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(n.Component);const v=({average:e=0,text:t})=>s.jsxs("div",{className:"flex-col items-center justify-center w-20 text-center",children:[s.jsx("div",{className:"w-16",children:s.jsx(y,{value:e||0,minValue:0,maxValue:10,text:`${e}`,strokeWidth:15})}),s.jsx("p",{className:"font-bold text-white min-h-16 text-wrap",children:t})]}),k=({number:e=0,text:t})=>s.jsxs("div",{className:"flex-col items-center justify-center w-20 text-center",children:[s.jsx("div",{className:"w-16",children:s.jsx(y,{value:e||0,minValue:0,maxValue:e*2,text:`${e}`,strokeWidth:15})}),s.jsx("p",{className:"font-bold text-white min-h-16 text-wrap",children:t})]}),U=({links:e,profileImage:t,userName:a,userNumbers:r})=>{const i=N();return e?s.jsxs("div",{style:{backgroundImage:`url(${i})`},className:"relative",children:[s.jsx(C,{}),s.jsx(j,{}),s.jsx("div",{className:"relative p-8 mx-auto",children:s.jsxs("div",{className:"relative flex-row items-center max-w-4xl p-8 mx-auto gap-x-6 darker-background",children:[t&&b(t)&&s.jsx("img",{src:t,alt:"userImage",className:"rounded-full"}),s.jsxs("div",{className:"flex-row flex-wrap justify-around gap-x-4 gap-y-6 grow",children:[s.jsx("h3",{className:"flex items-center text-3xl font-bold text-white text-wrap",children:a}),s.jsxs("div",{className:"flex-row gap-x-2",children:[s.jsx(v,{average:r.averageMovieRating,text:"Average Movie Rating"}),s.jsx(v,{average:r.averageSeriesRating,text:"Average Series Rating"}),s.jsx(k,{number:r.numberOfLikedMovies,text:"Movies Liked"}),s.jsx(k,{number:r.numberOfLikedSeries,text:"Series Liked"})]})]})]})})]}):s.jsx("div",{children:"Loading..."})};E.register(B,W,V,O,_,I);const Y=({id:e})=>{const{db:t}=w(),{differentMoviesRatings:a,differentSeriesRatings:r}=P(e,t),i={responsive:!0,plugins:{legend:{position:"right"},title:{display:!1},colors:{enabled:!0,forceOverride:!0}},scales:{y:{title:{display:!0,text:"Count"}},x:{title:{display:!0,text:"Ratings"}}}},o={labels:[1,2,3,4,5,6,7,8,9,10],datasets:[{label:"Movies",data:a},{label:"Series",data:r}]};return s.jsx("div",{className:"flex-row justify-center max-w-4xl mx-auto",children:s.jsx(M,{options:i,data:o})})};export{U as B,Y as C};