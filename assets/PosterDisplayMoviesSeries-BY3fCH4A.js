import{r as g,j as a}from"./index-CASEKhqL.js";import{P as c}from"./PosterMovieSeries-DrWMH0tN.js";import{S as m,T as x,H as N}from"./sections-XDfzzgUj.js";import{h as j}from"./hooks-DFcpSZ5H.js";import{u as E,a as P,b as h}from"./hooks-D22SR9d5.js";import{D as u}from"./helperComponents-YmbOGeEK.js";const D=({section:e,type:o,id:i,link:l})=>{const[r,s]=g.useState(),n=e==="recommended"?j:N[e],{results:d,fetchNextPage:f}=n(o,i),p=E(f,100),v=P(p,200,r);return h(v,r),a.jsxs("div",{className:"pt-8 overflow-x-auto",children:[a.jsx(u,{link:l||`/Film-Library/all/${o}/${e}${i?`/${i}`:""}`,title:`${m[e]} ${x[o]}`}),a.jsx("div",{className:"flex flex-row py-4 overflow-auto gap-x-4",ref:t=>s(t||void 0),children:d==null?void 0:d.map((t,S)=>a.jsx(c,{imageURL:t.imageURL,title:t.title,release_date:t.release_date,id:t.id,liked:t.liked,rating:t.rating,type:o},S))})]})},M=({arr:e,type:o,link:i,section:l,viewAll:r})=>a.jsxs("div",{className:"pt-8 overflow-x-auto",children:[a.jsx(u,{link:i,title:`${m[l]} ${x[o]}`,viewAll:r}),a.jsx("div",{className:"flex flex-row py-4 overflow-auto gap-x-4",children:e==null?void 0:e.map((s,n)=>a.jsx(c,{imageURL:s.imageURL,title:s.title,release_date:s.release_date,id:s.id,liked:s.liked,rating:s.rating,type:o},n))})]});export{D as P,M as a};