import{u as l,j as r}from"./index-C-Mk1Gwc.js";import{u as d}from"./hooks-IaDbIFQz.js";import{B as n,C as e,a as p,L as u,b as g,p as b,c as m,d as c,e as f}from"./index-frmq9QVa.js";import"./axios-f8QMfS4_.js";import"./api-zHsTOtF1.js";import"./functions-B6je26cR.js";import"./api-CMss39_p.js";import"./functions-Xf47q2pl.js";import"./api-Dvk17uGi.js";import"./firestore-D8GMyvQy.js";import"./hooks-BLlkw_ic.js";e.register(p,u,g,b,m,c);const x={responsive:!0,plugins:{legend:{position:"right"},title:{display:!1},colors:{enabled:!0,forceOverride:!0}},scales:{y:{title:{display:!0,text:"Count"}},x:{title:{display:!0,text:"Ratings"}}}};e.defaults.borderColor="rgba(0, 0, 0, 0)";e.defaults.scales.linear.suggestedMax=10;e.defaults.datasets.bar.borderColor="rgba(0, 0, 0, 1)";e.defaults.datasets.bar.borderWidth=1;e.register(f);function E(){const{userInfo:t,db:a}=l(),{differentMoviesRatings:s,differentSeriesRatings:o}=d(t==null?void 0:t.uid,a),i={labels:[1,2,3,4,5,6,7,8,9,10],datasets:[{label:"Movies",data:s,borderColor:"rgba(0, 0, 0, 1)",color:"rgba(255, 255, 0, 1)",borderWidth:1},{label:"Series",data:o}]};return r.jsx("div",{className:"barWrap",children:r.jsx(n,{options:x,data:i})})}export{E as default,x as options};
