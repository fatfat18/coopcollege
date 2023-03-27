<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';


library.add(faFacebook,faPhone,faEnvelope);

</script>

<template>
<div id="footer" class="w-screen h-80 bg-theme1 flex flex-col justify-center items-center"  >
    <p class="text-white text-2xl" data-aos="fade-down" data-aos-duration="400" data-aos-delay="500"> Message Us Now!</p>
    <div class=" h-20 flex justify-center items-center " data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
    <a href="https://www.facebook.com/CoopCollegePH" target="_blank"><font-awesome-icon icon="fa-brands fa-facebook" class="transition ease-in duration-150 h-10 text-theme2 mx-4 hover:scale-125 overflow-y-hidden" /></a>
    <button @click="copyMobileNum()" ><font-awesome-icon icon="fa-solid fa-phone" class="transition ease-in duration-150 h-10 text-theme2 mx-4 hover:scale-125 overflow-y-hidden" /></button>
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=institute@climbs.coop" target="_blank"> <font-awesome-icon icon="fa-solid fa-envelope" class="transition ease-in duration-150 h-10 text-theme2 mx-4 hover:scale-125 overflow-y-hidden" /></a>
    </div>
   
</div>
</template>

<script>
AOS.init({startEvent: 'load',
          once : 'true,'});
AOS.refresh();
</script>