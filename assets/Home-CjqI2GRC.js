import{r as a,j as e}from"./index-CASEKhqL.js";import{u as o,a as n}from"./hooks-Bye8Mbwf.js";import{H as l,D as c}from"./DarkBackground-BpTdFBwT.js";import{a as t}from"./axios-fzcBKtAg.js";function p(){const r=o(),s=n();return a.useEffect(()=>{t.get("http://localhost:8000/sanctum/csrf-cookie",{withCredentials:!0}).then(i=>{t.post("http://localhost:8000/login",{email:"new@email.com",password:"password123!"},{withCredentials:!0}).then(d=>{t.get("http://localhost:8000/api/user",{withCredentials:!0}).then()})})},[]),r?e.jsxs("div",{className:"w-screen h-screen px-8",style:{backgroundImage:`url(${r})`},children:[e.jsx(l,{}),e.jsx(c,{}),s?e.jsxs("h3",{className:"relative p-6 mx-auto font-bold text-center text-white rounded-lg text-8xl darker-background transform-v-center",children:["Welcome back",e.jsx("br",{}),s]}):e.jsx("h2",{className:"relative p-6 mx-auto font-bold text-center text-white rounded-lg text-8xl darker-background transform-v-center w-fit",children:"Discover"})]}):null}export{p as default};
