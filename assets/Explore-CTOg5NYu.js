import{r as m,j as i}from"./index-CASEKhqL.js";import{P as l}from"./PosterDisplayMoviesSeries-BY3fCH4A.js";import{u as j}from"./hooks-CfMXO_F7.js";import{S as O}from"./SearchArea-CwdKrDBK.js";import"./PosterMovieSeries-DrWMH0tN.js";import"./sections-XDfzzgUj.js";import"./hooks-DFcpSZ5H.js";import"./api-BJBHBNH-.js";import"./axios-fzcBKtAg.js";import"./functions-Cg70y5OV.js";import"./firestore-Dg3MedE5.js";import"./functions-Xf47q2pl.js";import"./hooks-D22SR9d5.js";import"./api-D3AJ3jta.js";import"./helperComponents-YmbOGeEK.js";import"./api-BeM9INtn.js";import"./api-Bti_N7Zs.js";import"./api-l8M7fQqs.js";import"./DarkBackground-BpTdFBwT.js";import"./SearchBarPeople-DhBNVije.js";import"./react-slideshow-image.esm-Bsb0-ovJ.js";import"./SearchBarFriends-BFAWTzRG.js";var w={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function S(e){if(typeof e=="number")return{value:e,unit:"px"};var r,n=(e.match(/^[0-9.]*/)||"").toString();n.includes(".")?r=parseFloat(n):r=parseInt(n,10);var t=(e.match(/[^0-9]*$/)||"").toString();return w[t]?{value:r,unit:t}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(r,"px.")),{value:r,unit:"px"})}function u(e){var r=S(e);return"".concat(r.value).concat(r.unit)}var E=function(e,r,n){var t="react-spinners-".concat(e,"-").concat(n);if(typeof window>"u"||!window.document)return t;var o=document.createElement("style");document.head.appendChild(o);var a=o.sheet,s=`
    @keyframes `.concat(t,` {
      `).concat(r,`
    }
  `);return a&&a.insertRule(s,0),t},p=function(){return p=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},p.apply(this,arguments)},_=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]]);return n},k=E("BounceLoader","0% {transform: scale(0)} 50% {transform: scale(1.0)} 100% {transform: scale(0)}","bounce");function M(e){var r=e.loading,n=r===void 0?!0:r,t=e.color,o=t===void 0?"#000000":t,a=e.speedMultiplier,s=a===void 0?1:a,d=e.cssOverride,h=d===void 0?{}:d,v=e.size,c=v===void 0?60:v,y=_(e,["loading","color","speedMultiplier","cssOverride","size"]),f=function(g){var b=g===1?"".concat(1/s,"s"):"0s";return{position:"absolute",height:u(c),width:u(c),backgroundColor:o,borderRadius:"100%",opacity:.6,top:0,left:0,animationFillMode:"both",animation:"".concat(k," ").concat(2.1/s,"s ").concat(b," infinite ease-in-out")}},x=p({display:"inherit",position:"relative",width:u(c),height:u(c)},h);return n?m.createElement("span",p({style:x},y),m.createElement("span",{style:f(1)}),m.createElement("span",{style:f(2)})):null}function Y(){const e=j();return e?i.jsxs("div",{className:"dark:bg-black",children:[i.jsx(O,{links:e,type:"movieSeries"}),i.jsxs("div",{className:"p-8",children:[i.jsx("h2",{className:"text-3xl font-bold",children:"Movies"}),i.jsx(l,{section:"popular",type:"movie"}),i.jsx(l,{section:"top",type:"movie"}),i.jsx("h2",{className:"text-3xl font-bold",children:"Series"}),i.jsx(l,{section:"popular",type:"series"}),i.jsx(l,{section:"top",type:"series"})]})]}):i.jsx("div",{className:"spinner",children:i.jsx(M,{color:"rgba(0, 0, 0, 1)"})})}export{Y as default};