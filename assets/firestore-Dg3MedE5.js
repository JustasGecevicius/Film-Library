import{A as c,O as l}from"./index-CASEKhqL.js";import{u as i}from"./axios-fzcBKtAg.js";const n=async(e,t,r)=>{if(!r)return;const s=c(e,t,r);return(await l(s)).data()},f=async(e,t,r)=>{if(!r)return;const s=c(e,t,r),a=await l(s);return Object.keys(a.data()||{}).length},o=(e,t)=>{if(t==="rated")switch(e){case"movie":return"ratedMovies";case"series":return"ratedSeries";default:return""}else switch(e){case"movie":return"likedMovies";case"series":return"likedSeries";default:return""}},k=(e,t,r)=>{const{data:s}=i(["liked",t],()=>n(e,o(t,"liked"),r),{enabled:!!r&&!!e}),{data:a}=i(["rated",t],()=>n(e,o(t,"rated"),r),{enabled:!!r&&!!e});return{liked:s,rated:a}};export{f as a,n as f,o as g,k as u};