import{j as r,r as c,u as l,O as f,A as u}from"./index-C-Mk1Gwc.js";import{H as p,D as h}from"./DarkBackground-3LC7EEEt.js";import{S as x}from"./SearchBarFriends-51gHdjZh.js";import{u as j}from"./hooks-BFjOAdAX.js";import{F}from"./react-slideshow-image.esm-Qyyj9p4o.js";import{u as g}from"./axios-f8QMfS4_.js";import{f as b}from"./functions-B6je26cR.js";import"./api-zHsTOtF1.js";import{N as v}from"./NoUser-CmJaQUgk.js";import"./api-CMss39_p.js";import"./api-Dvk17uGi.js";import"./api-DmGg8hiP.js";import"./api-CoIFmnul.js";import"./functions-Xf47q2pl.js";import"./hooks-CRGEaVKu.js";const k=()=>{const s=j();return s?r.jsxs("div",{className:"slide-container",children:[r.jsx(F,{children:s.map((n,e)=>r.jsx("div",{children:r.jsx("img",{style:{width:"100%"},src:n,alt:"backgroundImage"})},e))}),r.jsxs("div",{className:"slideOverlay",children:[r.jsx(p,{}),r.jsx(h,{}),r.jsx(x,{})]})]}):r.jsx("div",{children:"Loading..."})},y=()=>{const[s,n]=c.useState(),{userInfo:e,db:a}=l(),{data:t}=g(["friends",e,a],()=>b(e,a),{enabled:!!e&&!!a});return c.useEffect(()=>{if(t&&(s==null?void 0:s.length)===Object.keys(t).length)return;const o=[];(async()=>{if(!t)return;Object.keys(t).forEach(i=>{const m=f(u(a,`userNames/${i}`));o.push(m)});const d=(await Promise.all(o)).map(i=>({...i.data(),name:i.id}));n(d)})()},[t]),s};function $(){const s=y();return r.jsx(r.Fragment,{children:s?r.jsxs("div",{className:"min-h-screen dark:bg-black",children:[r.jsx(k,{}),r.jsx("div",{className:"p-8",children:r.jsx("h2",{className:"text-3xl font-bold",children:" WIP "})})]}):r.jsx(v,{})})}export{$ as default};
