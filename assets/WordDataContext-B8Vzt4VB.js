import{r as t,j as l}from"./index-DulRLO9J.js";const n=t.createContext(),m=({children:c})=>{const[r,e]=t.useState(JSON.parse(localStorage.getItem("userHistory"))||[]);t.useEffect(()=>{localStorage.setItem("userHistory",JSON.stringify(r))},[r]);const i=t.useCallback(o=>{const s={id:Date.now(),word:o};e(a=>[...a,s])},[e]),u=t.useCallback(o=>{e(s=>s.filter(a=>a.id!==o))},[e]),d=()=>e([]);return l.jsx(n.Provider,{value:{userData:r,addWordInHistory:i,removeWordFromHistory:u,clearHistory:d},children:c})},C=()=>t.useContext(n);export{m as W,C as u};
