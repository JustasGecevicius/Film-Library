import{j as t,L as s}from"./index-CASEKhqL.js";import"./api-BJBHBNH-.js";import{u as i,f as l}from"./functions-Cg70y5OV.js";import{a as p}from"./api-l8M7fQqs.js";import{e as m}from"./hooks-D22SR9d5.js";const P=({imageURL:o,name:a,id:r})=>r?t.jsx(s,{to:`/Film-Library/person/${r}`,className:"min-w-fit",children:t.jsxs("div",{className:"flex gap-y-4 relative max-w-[185px] flex-col","data-id":`${r}`,children:[t.jsx("img",{src:o,alt:"posterImage",className:"rounded-xl h-[278px] w-[185px] bg-no-repeat bg-center bg-cover"}),t.jsx("p",{className:"text-center",children:a})]})}):null,d=()=>{const{config:o}=m(),{data:{pages:a}={},fetchNextPage:r}=i(["people"],({pageParam:e=1})=>p(e,!0),{getNextPageParam:e=>!Array.isArray(e)&&e.total_pages>e.page?e.page+1:void 0});return{results:a==null?void 0:a.flatMap(({results:e})=>l(o,e)),fetchNextPage:r}};export{P,d as u};