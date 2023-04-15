<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import InputLabel from '@/Components/InputLabel.vue';
import { faTty } from '@fortawesome/free-solid-svg-icons';


library.add(faFacebook,faPhone,faEnvelope,faTty);

</script>



<style>
.ftr{
    background:url("../../asset/footerimg.jpg") no-repeat;
    background-size: cover;
    background-position: center;
}

</style>


<template>
<div id="footer" class="ftr w-screen h-80 bg-theme1 pt-8 flex flex-col items-center" >


<p class="text-white text-xl" data-aos="fade-down" data-aos-duration="400" data-aos-delay="500"> Message us Now!</p>


  <div class=" flex justify-center items-center space-x-2 py-4 px-2 " data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">

      <div class="bg-white py-2 px-4 rounded-xl transition ease-in duration-150 hover:scale-125 ">
    <a :href="this.fb"  target="_blank"><font-awesome-icon icon="fa-brands fa-facebook" class="  text-theme1 overflow-y-hidden" /></a>
      </div>

    <a :href="this.email" target="_blank"><div class="bg-white py-2 px-4 rounded-xl transition ease-in duration-150 hover:scale-125 ">
     <font-awesome-icon icon="fa-solid fa-envelope" class="  text-theme1  overflow-y-hidden" />
    </div></a>

  </div>

 <div class="space-y-2">
  <div class="bg-white py-2 px-4 rounded-sm flex"  data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
    <font-awesome-icon icon="fa-solid fa-phone" class=" h-5 text-theme1 overflow-y-hidden" /> <p class="ml-2 text-sm"> {{ phonenum }} </p>
    </div>
    <div class="bg-white py-2 px-4 rounded-sm flex" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
      <font-awesome-icon icon="fa-solid fa-tty" class=" h-5 text-theme1  overflow-y-hidden"   /> <p class="ml-2 text-sm"> {{ tel }} </p>
    </div>   
</div> 

   
</div>

<div class="w-screen py-2 bg-stone-900">
  <p class="text-sm text-white text-center">© Co-operative College of the Philippines</p>

</div>

</template>

<script>
import { BASE_URL } from '../baseurl';

export default {


data() {
  return {
 
    items: [],
    contacts:[],
    fb:'',
    phonenum:'',
    tel:'',
    email:'',
    showModal: false,


  }
},

mounted() {

    axios.get(BASE_URL + '/displayContactUs?idcontactUs=1')
      .then(response => {
        this.contacts = response.data;
        console.log(this.contacts);
        this.fb = this.contacts[0].facebookLink;
        this.phonenum = this.contacts[0].phoneNum;
        this.email ="https://mail.google.com/mail/?view=cm&fs=1&to=" + this.contacts[0].emailAdd;
        this.tel = this.contacts[0].telNum;

      })
      .catch(error => {
        console.log(error);
      });
  },

} 





AOS.init({startEvent: 'load',
          once : 'true,'});
AOS.refresh();
</script>