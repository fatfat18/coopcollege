<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import {  faPhoneFlip } from "@fortawesome/free-solid-svg-icons"
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faBriefcaseMedical } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import { ref } from 'vue';
import Header from "@/Components/Header.vue"
import ResponsiveNavBar from '@/Components/ResponsiveNavBar.vue'




library.add(faTwitter,faPhoneFlip,faFacebook,faPhone,faEnvelope,faNoteSticky,faCoins,faBriefcaseMedical,faChartSimple,faLightbulb,faEarthAsia)


const pixCodeInput = ref(null);

function copyMobileNum() {
    navigator.clipboard.writeText("09175085263");
    alert("Mobile Phone Copied to Clipboard");
}
function copyEmailAdd() {
    navigator.clipboard.writeText("institute@climbs.coop");
    alert("Email Address Copied to Clipboard");
}

</script>



<style>
.card{
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}


</style>


<template >
    <Header />
      <ResponsiveNavBar />

<div id="maincontent" class="flex justify-center items-center h-max w-screen bg-cover" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000" >
    <img src="../../../asset/landingpagenew.jpg" class="bg-cover w-full"  /> 
</div>

<div class="xl:h-96 md:h-max xl:w-screen  flex justify-center items-center xl:text-2xl text-xs text-justify py-10 px-8" data-aos="fade-up" data-aos-duration="2000">

    <p class="md:mx-8">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp On March 14, 2023, the Ceremonial Turn-over of the Purchased 2 ha. lot by CLIMBS Life and General Insurance Cooperative to Co-operative College of the Philippines was carried-out wherein soon to rise will be the latter's campus in El Salvador City, Misamis Oriental, Philippines.
#CooperativeEducation #CooperativeIdentity #continuouslearning </p>
</div>


<div class=" bg-theme1 h-max w-screen flex flex-col xl:flex-row justify-center items-center ">

    <div class="lpg1 bg-slate-900 h-max w-screen xl:w-1/2 " data-aos="fade-right" data-aos-duration="1000" >
        <img src="../../../asset/lpg1.jpg" class="h-screen w-screen items-stretch" />
    </div>
    <div class="flex flex-col justify-center items-center h-max w-screen xl:w-1/2" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000" >
        <p class="xl:text-6xl text-sm mt-4 xl:mb-8 text-white"> Cebu Training Session</p>
        <p class=" text-white text-xs xl:text-xl text-justify px-8 py-4 xl:mr-12 ">&nbsp&nbsp&nbsp&nbsp&nbsp&nbspThe morning session on Deepening our Co-operative Identity was facilitated by the <strong>Co-op College PH</strong> team headed by CEO & Principal <strong>Donna Dizon</strong>. This interactive learning activity brought out the creativity of the participants in making their own “Halo-halo” which requires certain key ingredients on embodying our identity as co-op leaders.
The afternoon session on Co-op Financial Literacy: The Usage of Statutory Funds was conducted by our Resource Speaker and Trainer <strong>Hon. Gervacio Piator, CPA, MBA, DM, PhD.</strong>
A total of 35 participants coming from 15 co-operatives nationwide joined and actively participated on these sessions. To learn more and be involved with the Co-op College programs (both locally and abroad), join us and be a member of the <strong>National Federation of Cooperative Primaries in the Philippines - Nafecoop</strong> now! </p>

    </div>


</div>

<div class=" h-max py-10 my-10 w-screen flex flex-wrap justify-center items-center px-4text-sm ">

    <div class="card px-4 text-justify flex flex-col justify-center items-center my-8 mb-10 h-60 w-96 bg-theme2 mx-8 rounded-xl" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100" >
        <font-awesome-icon icon="fa-solid fa-note-sticky " class="text-theme1 h-10 mb-4" />
            Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor.
    </div>
    <div class="card px-4 text-justify flex flex-col justify-center items-center my-8 mb-10 h-60 w-96 bg-theme2 mx-8 rounded-xl" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="300" >
        <font-awesome-icon icon="fa-solid fa-coins" class="text-theme1 h-10 mb-4" />
        Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor.
    </div>
    <div class="card px-4 text-justify flex flex-col justify-center items-center my-8 mb-10 h-60 w-96 bg-theme2 mx-8 rounded-xl" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="500" >
        <font-awesome-icon icon="fa-solid fa-lightbulb" class="text-theme1 h-10 mb-4" />
        Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor.
    </div>
    <div class="card px-4 text-justify flex flex-col justify-center items-center my-8 mb-10 h-60 w-96 bg-theme2 mx-8 rounded-xl" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="700" >
        <font-awesome-icon icon="fa-solid fa-briefcase-medical" class="text-theme1 h-10 mb-4" />
        Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor.
    </div>
    <div class="card px-4 text-justify flex flex-col justify-center items-center my-8 mb-10 h-60 w-96 bg-theme2 mx-8 rounded-xl" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="900" >
        <font-awesome-icon icon="fa-solid fa-chart-simple" class="text-theme1 h-10 mb-4" />
        Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor.
    </div>
    <div class="card px-4 text-justify flex flex-col justify-center items-center my-8 mb-10 h-60 w-96 bg-theme2 mx-8 rounded-xl" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="1100" >
        <font-awesome-icon icon="fa-solid fa-earth-asia" class="text-theme1 h-10 mb-4" />
        Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor.

    </div>

</div>

   
<div id="footer" class="w-screen h-80 bg-theme1 flex flex-col justify-center items-center"  >
    <p class="text-white text-2xl" data-aos="fade-down" data-aos-duration="400" data-aos-delay="500"> Message Us Now!</p>
    <div class=" h-20 flex justify-center items-center " data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
    <a href="https://www.facebook.com/CoopCollegePH" target="_blank"><font-awesome-icon icon="fa-brands fa-facebook" class="transition ease-in duration-150 h-10 text-theme2 mx-4 hover:scale-125 overflow-y-hidden" /></a>
    <button @click="copyMobileNum()" ><font-awesome-icon icon="fa-solid fa-phone" class="transition ease-in duration-150 h-10 text-theme2 mx-4 hover:scale-125 overflow-y-hidden" /></button>
    <button @click="copyEmailAdd()"><font-awesome-icon icon="fa-solid fa-envelope" class="transition ease-in duration-150 h-10 text-theme2 mx-4 hover:scale-125 overflow-y-hidden" /></button>
    </div>
   
<p class="text-white text-sm mt-12">©️ Copyright All Rights Reserved 2023 ™️</p>
 
</div>


</template>
<script>
AOS.init({startEvent: 'load',
          once : 'true,'});
AOS.refresh();

</script>


