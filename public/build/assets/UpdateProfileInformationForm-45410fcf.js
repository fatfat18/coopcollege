import{J as g,v as x,f as l,b as a,a as s,u as e,d as n,w as m,h as y,z as V,g as f,T as b,e as k,o as u,j as w}from"./app-b0042f5f.js";import{_ as p}from"./InputError-d3908436.js";import{_}from"./InputLabel-9fccf59e.js";import{_ as S}from"./PrimaryButton-33c78b8e.js";import{_ as v}from"./TextInput-1604c0fd.js";const N=a("header",null,[a("h2",{class:"text-lg font-medium text-gray-900"},"Profile Information"),a("p",{class:"mt-1 text-sm text-gray-600"}," Update your account's profile information and email address. ")],-1),$={key:0},B={class:"text-sm mt-2 text-gray-800"},E={class:"mt-2 font-medium text-sm text-green-600"},U={class:"flex items-center gap-4"},C={key:0,class:"text-sm text-gray-600"},z={__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:Boolean,status:String},setup(h){const d=h,r=g().props.auth.user,t=x({name:r.name,email:r.email});return(c,o)=>(u(),l("section",null,[N,a("form",{onSubmit:o[2]||(o[2]=k(i=>e(t).patch(c.route("profile.update")),["prevent"])),class:"mt-6 space-y-6"},[a("div",null,[s(_,{for:"name",value:"Name"}),s(v,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e(t).name,"onUpdate:modelValue":o[0]||(o[0]=i=>e(t).name=i),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),s(p,{class:"mt-2",message:e(t).errors.name},null,8,["message"])]),a("div",null,[s(_,{for:"email",value:"Email"}),s(v,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(t).email,"onUpdate:modelValue":o[1]||(o[1]=i=>e(t).email=i),required:"",autocomplete:"username"},null,8,["modelValue"]),s(p,{class:"mt-2",message:e(t).errors.email},null,8,["message"])]),d.mustVerifyEmail&&e(r).email_verified_at===null?(u(),l("div",$,[a("p",B,[n(" Your email address is unverified. "),s(e(w),{href:c.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:m(()=>[n(" Click here to re-send the verification email. ")]),_:1},8,["href"])]),y(a("div",E," A new verification link has been sent to your email address. ",512),[[V,d.status==="verification-link-sent"]])])):f("",!0),a("div",U,[s(S,{class:"bg-theme1 text-white text-sm hover:bg-theme2 hover:text-theme1",disabled:e(t).processing},{default:m(()=>[n("Save")]),_:1},8,["disabled"]),s(b,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:m(()=>[e(t).recentlySuccessful?(u(),l("p",C,"Saved.")):f("",!0)]),_:1})])],32)]))}};export{z as default};
