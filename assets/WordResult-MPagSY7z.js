import{r as p,j as s}from"./index-DyYmjcX4.js";import{P as d}from"./index-Ds4uTEgB.js";function x({wordData:l}){const o=l[0].word,r=l[0].phonetics,c=l[0].meanings,[i,t]=p.useState(null);return s.jsxs("div",{className:"result",children:[s.jsx("p",{className:"word",children:o}),s.jsxs("div",{className:"wordDetails",children:[s.jsx("div",{className:"phonetics flex",children:r.map((n,a)=>{if(n.text&&n.audio)return s.jsxs("div",{className:"phonetic flex",children:[s.jsx("span",{className:"phoneticText",children:n.text}),s.jsx("button",{className:"voicePlayBtn",onClick:()=>{t(a)}}),i===a&&s.jsx("audio",{src:n.audio,controls:!0,autoPlay:!0,onEnded:()=>{t(null)},style:{position:"absolute",top:"-100vh"}})]},a)})}),s.jsx("div",{className:"meaningContainer",children:c.map((n,a)=>s.jsxs("div",{className:"meaning",children:[s.jsx("p",{className:"partOfSpeechTitle",children:n.partOfSpeech}),n.definitions.map((e,m)=>s.jsxs("div",{children:[s.jsx("p",{className:"definition",children:e.definition}),e.synonyms.length>0&&s.jsxs("p",{className:"synonym",children:[s.jsx("span",{children:" — Synonyms: "}),e.synonyms.join(",")]}),e.antonyms.length>0&&s.jsxs("p",{className:"antonym",children:[s.jsx("span",{children:" — Antonyms: "}),e.antonyms.join(",")]}),e.example&&s.jsxs("p",{className:"example",children:[s.jsx("span",{children:" — Example: "}),e.example]})]},m)),n.synonyms.length>0&&s.jsxs("p",{className:"synonym last",children:[s.jsx("span",{children:"Synonyms: "}),n.synonyms.join(", ")]}),n.antonyms.length>0&&s.jsxs("p",{className:"antonym last",children:[s.jsx("span",{children:"Antonyms: "}),n.antonyms.join(", ")]})]},a))})]})]})}x.propTypes={wordData:d.object.isRequired};export{x as default};
