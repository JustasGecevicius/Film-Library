import{j as r}from"./api-21sfLv8K.js";const p=async(a,t=1,o)=>await r(`/${a==="movie"?"movie":"tv"}/popular?language=en-US&page=${t}`).then(({data:e})=>o?e:e.results);export{p as g};
