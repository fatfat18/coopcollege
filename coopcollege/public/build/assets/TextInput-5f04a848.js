import{s as l,B as n,o as r,f as d}from"./app-5e558d24.js";const m=["value"],f={__name:"TextInput",props:["modelValue"],emits:["update:modelValue"],setup(t,{expose:o}){const e=l(null);return n(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),o({focus:()=>e.value.focus()}),(a,u)=>(r(),d("input",{class:"border-gray-300 rounded-md shadow-sm",value:t.modelValue,onInput:u[0]||(u[0]=s=>a.$emit("update:modelValue",s.target.value)),ref_key:"input",ref:e},null,40,m))}};export{f as _};