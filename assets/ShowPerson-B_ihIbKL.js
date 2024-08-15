import{j as e,r as c,a as x}from"./index-C-Mk1Gwc.js";import{u as d}from"./hooks-0zJhosAi.js";import{P as p}from"./PosterMovieSeries-C__5klqk.js";import{D as m}from"./helperComponents-CMTg0oY7.js";import{u as h,c as u,D as j,V as f}from"./VisitHomepage-BkYkeVPo.js";import{d as v,e as b}from"./hooks-BNwIgIv8.js";import{g}from"./api-DmGg8hiP.js";import{u as k}from"./axios-f8QMfS4_.js";import"./firestore-D8GMyvQy.js";import"./hooks-BLlkw_ic.js";import"./api-zHsTOtF1.js";import"./functions-lsHS-fhC.js";import"./functions-Xf47q2pl.js";const n=({arr:r,sectionName:s,id:i,type:t})=>e.jsxs("div",{className:"flex-col gap-4",children:[e.jsx(m,{link:`/Film-Library/all/${t}/credits/${i}`,title:s}),e.jsx("div",{className:"flex-row gap-4 overflow-x-auto",children:r.map((a,o)=>e.jsx(p,{imageURL:a.imageURL,title:a.title,release_date:a.release_date,id:a.id,liked:a.liked,rating:a.rating,type:t},o))})]}),w=({name:r})=>{const{id:s,db:i,userInfo:t}=h(),[a,o]=c.useState(!1),l=u(a);return t&&s?e.jsx("button",{className:"border-[1px] dark:hover:bg-white dark:hover:text-black px-2 rounded-xl max-w-16",onClick:()=>{v(i,s,t.uid,r,l),o(!a)},children:l?"Unlike":"Like"}):null},N=({backdrop:r,poster:s,title:i})=>e.jsx("div",{className:"h-[500px] bg-center bg-cover bg-no-repeat",style:{backgroundImage:`url(${r})`},children:e.jsx("div",{className:"relative h-full max-w-4xl mx-auto ",children:e.jsxs("div",{className:"relative flex-row items-end -translate-y-full top-full gap-x-8",children:[e.jsx("div",{className:"bg-cover bg-center h-48 aspect-[2/3] rounded-md",style:{backgroundImage:`url(${s})`}}),e.jsx("h2",{className:"text-6xl font-serifFont whitespace-break-spaces",children:i})]})})}),y=({birthday:r,also_known_as:s,deathday:i,place_of_birth:t})=>e.jsxs("div",{className:"flex-row flex-wrap w-full max-w-4xl gap-2 py-2 mx-auto",children:[e.jsx("div",{className:"flex-row h-[30px]",children:!!r&&e.jsx("p",{className:"px-2 border-2 whitespace-nowrap rounded-xl",children:`Birthday | ${r}`})}),s==null?void 0:s.map((a,o)=>!!a&&e.jsx("div",{className:"border-2 rounded-xl h-[30px] px-2",children:e.jsx("p",{className:"whitespace-nowrap",children:`Known as | ${a}`})},o)),!!i&&e.jsx("div",{className:"border-2 rounded-xl h-[30px] px-2",children:e.jsx("p",{className:"whitespace-nowrap",children:`Deathday | ${i}`})}),!!t&&e.jsx("div",{className:"border-2 rounded-xl h-[30px] px-2",children:e.jsx("p",{className:"whitespace-nowrap",children:`Birth place | ${t}`})})]}),P=({departments:r})=>e.jsx("div",{className:"flex-row gap-x-2",children:r.map((s,i)=>e.jsx("div",{className:"px-2 py-1 border rounded-full dark:text-white dark:border-white",children:s},i))});function V(){const{id:r}=x(),{data:s}=k(["person",r],()=>g(r),{enabled:!!r}),i=d("movie",r),t=d("series",r),a=b(s);return e.jsxs("div",{className:"px-6 dark:bg-black",children:[!!a&&!!s&&e.jsx(N,{backdrop:"",poster:a,title:s.name}),e.jsxs("div",{className:"flex-col max-w-4xl pt-4 mx-auto gap-y-4",children:[!!s&&e.jsxs(e.Fragment,{children:[e.jsx(P,{departments:[s.known_for_department]}),e.jsx(w,{name:s.name}),e.jsx(j,{overview:s.biography}),s.homepage&&e.jsx(f,{link:s.homepage}),e.jsx(y,{birthday:s.birthday,deathday:s.deathday,also_known_as:s.also_known_as.slice(0,3),place_of_birth:s.place_of_birth})]}),!!i&&e.jsx(n,{id:r,arr:i,sectionName:"Movie Credits",type:"movie"}),!!t&&e.jsx(n,{id:r,arr:t,sectionName:"Series Credits",type:"series"})]})]})}export{V as default};
