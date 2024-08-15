import{j as e,L as h,r as d}from"./index-CASEKhqL.js";import{u as f,a as k,b as g}from"./VisitHomepage-Da2Cg8pW.js";import{l as j,r as w,s as p}from"./hooks-DFcpSZ5H.js";import{l as N,y as v}from"./api-BJBHBNH-.js";import{u as y}from"./axios-fzcBKtAg.js";const R=({genres:a})=>e.jsx("div",{className:"flex-row gap-x-2",children:a.map((r,s)=>e.jsx("div",{className:"px-2 py-1 text-white border border-white rounded-full",children:r.name},s))}),T=({backdrop:a,poster:r,title:s,genres:l})=>e.jsx("div",{className:"h-[500px] p-8 bg-center bg-cover bg-no-repeat lower-backdrop",style:{backgroundImage:`url(${a})`},children:e.jsxs("div",{className:"flex-col justify-between h-full max-w-4xl mx-auto",children:[e.jsx(h,{to:"/Film-Library/explore",children:e.jsx("button",{className:"px-2 py-1 text-white bg-black border border-white rounded-full",children:"Home"})}),e.jsxs("div",{className:"flex-col gap-y-2",children:[e.jsx("div",{className:"h-48 bg-center bg-cover rounded-xl w-36",style:{backgroundImage:`url(${r})`}}),e.jsx("h2",{className:"text-2xl text-white",children:s}),e.jsx(R,{genres:l})]})]})}),A=({title:a,type:r})=>{const{id:s,db:l,userInfo:t}=f(),[i,m]=d.useState(!1),c=k(i,r,s,t,l),o=d.useRef(),[u,n]=d.useState(!1),x=g(u,o.current,r,s,t,l);return t&&s?e.jsxs("div",{className:"flex-row h-full py-4 gap-x-2",children:[e.jsx("button",{className:"px-2 py-1 border border-black rounded-full",onClick:()=>{j(l,s,t.uid,a,c,r),m(!i)},children:c?"Unlike":"Like"}),e.jsxs("div",{className:"border border-black rounded-full",children:[e.jsx("input",{name:"rateInput",className:"w-[70px] h-full px-2 border-r border-black rounded-l-full",type:"number",max:"10",min:"1",onChange:b=>o.current=+b.target.value,placeholder:"Rating"}),e.jsx("button",{className:"h-full px-2 py-1 rounded-r-full dark:border-solid dark:border-white dark:border",onClick:()=>{w(l,s,t.uid,o.current,r),n(!u)},children:"Rate"})]}),e.jsx("p",{className:"px-2 py-1 border border-black rounded-full",children:`Your Rating: ${x||"none"}`})]}):null},P=({productionCompanies:a})=>e.jsxs("div",{className:"flex-col w-full max-w-4xl py-4 mx-auto gap-y-2",children:[e.jsx("h3",{className:"text-xl font-bold",children:" Production Companies"}),e.jsx("div",{className:"flex-row flex-wrap gap-2",children:a.map((r,s)=>e.jsxs("div",{className:"flex-col items-center bg-white rounded-xl",children:[e.jsx("div",{className:"w-[100px] h-[100px] bg-center bg-no-repeat bg-contain",style:{backgroundImage:`url(${r.logo_path})`}}),e.jsx("p",{className:"p-2 text-black",children:r.name})]},s))})]}),q=({budget:a,revenue:r,runtime:s,voteAverage:l,last_air_date:t,number_of_episodes:i,number_of_seasons:m})=>{const c=a?p(a):void 0,o=r?p(r):void 0,u=[["Budget",c],["Revenue",o],["Runtime",s?`${s} minutes`:void 0],["Average Rating",l?N.round(l,2):void 0],["Last Episode",t],["Episodes",i],["Seasons",m]];return e.jsx("div",{className:"flex-row flex-wrap justify-start w-full max-w-4xl mx-auto gap-x-2",children:u.map((n,x)=>n[1]?e.jsx("div",{className:"px-2 py-1 border border-black rounded-full dark:border-white",children:e.jsx("p",{children:`${n[0]} | ${n[1]}`})},x):null)})},L=async a=>await v(`search?part=snippet&maxResults=1&q=${a}&type=video&videoEmbeddable=true&key=AIzaSyDkMa8qqmLWHN_AyoHy1Lg4yu7bfdZOQOE`).then(r=>r.data),$=(a,r)=>{const[s,l]=d.useState(),{data:t}=y(["trailer",a,r],()=>L(`${a} ${r.split("-")[0]}`),{enabled:!!a&&!!r,staleTime:3e5});return d.useEffect(()=>{t&&l(`https://www.youtube.com/embed/${t.items[0].id.videoId}`)},[t]),s},D=({name:a,year:r})=>{const s=$(a,r);return s?e.jsx("iframe",{title:"trailer",src:`${s}`,className:"w-full aspect-video",allowFullScreen:!0}):null};export{T as B,q as D,A as L,P,D as T};