import{A as n,c as d,w as r,o as i,b as t,e as m,f as h,g as u,a as l,d as c}from"./app-5e558d24.js";import{_ as f}from"./AuthenticatedLayout-92860456.js";import{_ as p}from"./TextInput-5f04a848.js";import{_ as w}from"./Modal-0e1142c4.js";import{B as _}from"./baseurl-66277324.js";import"./index-9c0cfeef.js";const g=t("h2",{class:"font-semibold text-3xl text-theme1 leading-tight h-4 mb-4"},"Partners Editor ",-1),v=t("div",{class:""},null,-1),x={class:"postcontainer flex justify-center w-screen xl:px-10 xl:pb-96 py-20"},b={class:"xl:w-3/4 w-4/5 xl:mt-16 overflow-y-hidden"},y=t("button",{class:"mt-16 border border-white w-24 text-white py-2 px-4 bg-green-800 rounded-lg mb-10 hover:bg-green-600 transition ease-in duration-100"},"Save",-1),P={class:"text-white xl:h-20 w-max flex justify-center items-center","data-aos":"fade-up","data-aos-duration":"1500"},U=t("label",{for:"img",class:"text-2xl text-white rounded-2xl border-theme2 py-5 px-5 border-dashed border-2 hover:border-white hover:text-theme2 transiton duration-300"},[c("Upload Image"),t("br")],-1),D={class:"text-white flex","data-aos":"fade-up","data-aos-duration":"1500"},M={key:0},V=["src"],B={class:"overflow-y-hidden"},E=t("h2",{class:"text-theme1 text-2xl"},"Added Partners",-1),N=t("p",{class:"text-theme2 text-4xl mb-5"},"Success!",-1),A={data(){return{imagePreviewUrl:null,imagePreviewUrlholder:null,name:"",showModal:!1}},methods:{uploadFile(s){this.imagePreviewUrlholder=this.imagePreviewUrl,this.imagePreviewUrl=this.$refs.file.files[0];const e=s.target.files[0],a=new FileReader;a.onload=o=>{this.imagePreviewUrlholder=o.target.result},a.readAsDataURL(e)},submitData(){const s=new FormData;s.append("file",this.imagePreviewUrl),s.append("partnerName",this.name),axios.post(_+"/partner",s,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{console.log(e),this.showModal=!0;async function a(){await new Promise(o=>setTimeout(o,1e3)),window.location.href=route("Partners")}a()}).catch(e=>{console.log(e)}),this.imagePreviewUrl="",this.imagePreviewUrlholder="",this.name=""},closeModal(){this.showModal=!1}}};n.init({startEvent:"load",once:"true,"});n.refresh();const R=Object.assign(A,{__name:"PartnersEditor",setup(s){return(e,a)=>(i(),d(f,null,{header:r(()=>[g]),default:r(()=>[v,t("div",x,[t("div",b,[t("form",{onSubmit:a[3]||(a[3]=m((...o)=>e.submitData&&e.submitData(...o),["prevent"]))},[y,t("div",P,[U,t("input",{type:"file",accept:"image/*",onChange:a[0]||(a[0]=(...o)=>e.uploadFile&&e.uploadFile(...o)),id:"img",ref:"file",required:""},null,544)]),t("div",D,[e.imagePreviewUrlholder?(i(),h("div",M,[t("img",{src:e.imagePreviewUrlholder,class:"h-40 w-60 object-cover my-5 mx-5"},null,8,V)])):u("",!0)]),t("div",B,[l(p,{id:"name",name:"name",type:"text",class:"mt-4 py-2 px-2 w-full focus:ring-yellow-500 active:ring-yellow-500",required:"",autocomplete:"current-title",placeholder:"Name",modelValue:e.name,"onUpdate:modelValue":a[1]||(a[1]=o=>e.name=o),"data-aos":"fade-up","data-aos-duration":"1300"},null,8,["modelValue"])]),l(w,{show:e.showModal,onClose:a[2]||(a[2]=o=>e.showModal=!1)},{default:r(()=>[E,N]),_:1},8,["show"])],32)])])]),_:1}))}});export{R as default};
