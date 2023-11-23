import{v as c,c as u,w as r,o as l,a as t,u as s,X as d,f,t as _,g as p,b as a,d as w,n as g,e as h}from"./app-5e558d24.js";import{_ as b}from"./GuestLayout-5a8279bd.js";import{_ as x}from"./InputError-2366550d.js";import{_ as y}from"./InputLabel-55d70224.js";import{_ as v}from"./PrimaryButton-97c525b7.js";import{_ as k}from"./TextInput-5f04a848.js";import"./logo-6ff3b84f.js";const V=a("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600"},$=["onSubmit"],B={class:"flex items-center justify-end mt-4"},D={__name:"ForgotPassword",props:{status:String},setup(o){const e=c({email:""}),i=()=>{e.post(route("password.email"))};return(S,m)=>(l(),u(b,null,{default:r(()=>[t(s(d),{title:"Forgot Password"}),V,o.status?(l(),f("div",N,_(o.status),1)):p("",!0),a("form",{onSubmit:h(i,["prevent"]),class:"py-28"},[a("div",null,[t(y,{for:"email",value:"Email"}),t(k,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":m[0]||(m[0]=n=>s(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(x,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),a("div",B,[t(v,{class:g(["items-center justify-center h-14 bg-theme1 text-theme2 text-sm hover:bg-theme2 hover:text-theme1",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:r(()=>[w(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,$)]),_:1}))}};export{D as default};