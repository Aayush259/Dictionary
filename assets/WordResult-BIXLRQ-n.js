import{d,j as s,F as i,P as p}from"./index-CfmUg1NO.js";function y({wordData:t}){const o=t[0].word,c=t[0].phonetics,x=t[0].meanings,[m,n]=d.useState(null);return s.jsxs("div",{className:"w-[95%] mx-auto mb-10 text-slate-800 dark:text-violet-100",children:[s.jsx("p",{className:"text-violet-900 capitalize text-2xl sm:text-3xl font-semibold dark:text-violet-300",children:o}),s.jsxs("div",{className:"pl-1",children:[s.jsx("div",{className:"flex justify-start gap-10 my-3 opacity-80 flex-wrap",children:c.map((e,a)=>{if(e.text&&e.audio)return s.jsxs("div",{className:"flex gap-2",children:[s.jsx("span",{className:"phoneticText",children:e.text}),s.jsx("button",{className:"h-5 w-5",onClick:()=>{n(a)},children:s.jsx(i,{icon:"fa-solid fa-volume-high"})}),m===a&&s.jsx("audio",{src:e.audio,controls:!0,autoPlay:!0,onEnded:()=>{n(null)},className:"absolute top-[-100vh]"})]},a)})}),s.jsx("div",{children:x.map((e,a)=>s.jsxs("div",{className:"text-lg sm:text-xl",children:[s.jsxs("p",{className:"text-xl sm:text-2xl text-violet-900 capitalize mt-4  dark:text-violet-300",children:["🔹",e.partOfSpeech]}),e.definitions.map((l,r)=>s.jsxs("div",{className:"pl-9",children:[s.jsx("p",{children:l.definition}),l.synonyms.length>0&&s.jsxs("p",{className:"my-1",children:[s.jsx("span",{className:"font-bold",children:" — Synonyms: "}),l.synonyms.join(",")]}),l.antonyms.length>0&&s.jsxs("p",{className:"my-1",children:[s.jsx("span",{className:"font-bold",children:" — Antonyms: "}),l.antonyms.join(",")]}),l.example&&s.jsxs("p",{className:"my-1",children:[s.jsx("span",{className:"font-bold",children:" — Example: "}),l.example]})]},r)),e.synonyms.length>0&&s.jsxs("p",{className:"pl-10 my-1",children:[s.jsx("span",{className:"font-bold",children:"Synonyms: "}),e.synonyms.join(", ")]}),e.antonyms.length>0&&s.jsxs("p",{className:"pl-10 my-1",children:[s.jsx("span",{className:"font-bold",children:"Antonyms: "}),e.antonyms.join(", ")]})]},a))})]})]})}y.propTypes={wordData:p.array.isRequired};export{y as default};
