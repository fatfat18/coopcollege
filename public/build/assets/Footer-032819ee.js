import{A as d,o as c,f as l,b as e,a as s,u as o,t as n}from"./app-d8d752a3.js";import{l as r,d as h,c as f,e as _,F as i}from"./index-bb4dd45a.js";import{f as p}from"./index-6975d92b.js";import{B as m}from"./baseurl-66277324.js";const u={id:"footer",class:"ftr w-screen h-80 bg-theme1 pt-8 flex flex-col items-center"},x=e("p",{class:"text-white text-xl","data-aos":"fade-down","data-aos-duration":"400","data-aos-delay":"500"}," Message us Now! ",-1),y={class:"flex justify-center items-center space-x-2 py-4 px-2","data-aos":"fade-down","data-aos-duration":"1000","data-aos-delay":"500"},v={class:"bg-white py-2 px-4 rounded-xl transition ease-in duration-150 hover:scale-125"},g=["href"],w=["href"],b={class:"bg-white py-2 px-4 rounded-xl transition ease-in duration-150 hover:scale-125"},k={class:"space-y-2"},A={class:"bg-white py-2 px-4 rounded-sm flex","data-aos":"fade-right","data-aos-duration":"1000","data-aos-delay":"500"},B={class:"ml-2 text-sm"},F={class:"bg-white py-2 px-4 rounded-sm flex","data-aos":"fade-right","data-aos-duration":"1000","data-aos-delay":"500"},N={class:"ml-2 text-sm"},E=e("div",{class:"w-screen py-2 relative"},[e("p",{class:"text-sm text-white text-center pt-16"}," © Co-operative College of the Philippines ")],-1),C={data(){return{items:[],contacts:[],fb:"",phonenum:"",tel:"",email:"",showModal:!1}},mounted(){axios.get(m+"/displayContactUs?idcontactUs=1").then(t=>{this.contacts=t.data,console.log(this.contacts),this.fb=this.contacts[0].facebookLink,this.phonenum=this.contacts[0].phoneNum,this.email="https://mail.google.com/mail/?view=cm&fs=1&to="+this.contacts[0].emailAdd,this.tel=this.contacts[0].telNum}).catch(t=>{console.log(t)})}};d.init({startEvent:"load",once:"true,"});d.refresh();const O=Object.assign(C,{__name:"Footer",setup(t){return r.add(p,h,f,_),(a,S)=>(c(),l("div",u,[x,e("div",y,[e("div",v,[e("a",{href:a.fb,target:"_blank"},[s(o(i),{icon:"fa-brands fa-facebook",class:"text-theme1 overflow-y-hidden"})],8,g)]),e("a",{href:a.email,target:"_blank"},[e("div",b,[s(o(i),{icon:"fa-solid fa-envelope",class:"text-theme1 overflow-y-hidden"})])],8,w)]),e("div",k,[e("div",A,[s(o(i),{icon:"fa-solid fa-phone",class:"h-5 text-theme1 overflow-y-hidden"}),e("p",B,n(a.phonenum),1)]),e("div",F,[s(o(i),{icon:"fa-solid fa-tty",class:"h-5 text-theme1 overflow-y-hidden"}),e("p",N,n(a.tel),1)])]),E]))}});export{O as _};
