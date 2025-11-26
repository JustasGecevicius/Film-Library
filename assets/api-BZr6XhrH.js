import{j as r}from"./api-C7sXjP99.js";const p=async(a,t=1,o)=>await r(`/${a==="movie"?"movie":"tv"}/popular?language=en-US&page=${t}`).then(({data:e})=>o?e:e.results);export{p as g};
