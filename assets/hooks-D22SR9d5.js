import{l as i,g as f}from"./api-BJBHBNH-.js";import{r as o}from"./index-CASEKhqL.js";import{u as l}from"./axios-fzcBKtAg.js";const a=(r,s)=>{o.useEffect(()=>{if(s)return document.addEventListener("scroll",r),()=>document.removeEventListener("scroll",r)},[r,s])},h=(r,s)=>{o.useEffect(()=>{if(s)return s.addEventListener("scroll",r),()=>document.removeEventListener("scroll",r)},[r,s])},L=(r,s)=>o.useCallback(()=>{!s||window.innerHeight+250<(s==null?void 0:s.getBoundingClientRect().bottom)||r()},[r,s]),w=(r,s,t)=>o.useCallback(()=>{if(!t)return;const{scrollLeft:e,scrollWidth:n}=t,{innerWidth:u}=window;n-u-e<s&&r()},[r,s,t]),d=(r,s)=>o.useMemo(()=>i.debounce(r,s),[s,r]),x=()=>{const{data:r}=l("config",f,{staleTime:3e5});return{config:r}};function C(r,s){const{results:t,fetchNextPage:c}=r(),e=d(c,100),n=L(e,s);return a(n,s),t}export{w as a,h as b,L as c,a as d,x as e,C as f,d as u};