<script setup>
import { Head, Link } from '@inertiajs/vue3';
import AOS from 'aos'
import 'aos/dist/aos.css'
import  ResponsiveNavBar from '@/Components/ResponsiveNavBar.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
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






library.add(faTwitter,faPhoneFlip,faFacebook,faPhone,faEnvelope,faNoteSticky,faCoins,faBriefcaseMedical,faChartSimple,faLightbulb,faEarthAsia)



defineProps({
   // canLogin: Boolean,
   // canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});




</script>

<template>
    <Head title="Welcome" />


<!-- HEADER -->
<div id="welcome" class="h-28 bg-theme1 w-screen text-white  md:text-sm flex xl:flex-row justify-center items-center">
    <div class=" flex xl:justify-center xl:items-center md:items-start md:justify-center w-3/4">
        <a href="/"><img src="../../asset/logo.png" class="h-28 min-w-fit" data-aos="fade-right" data-aos-duration="1000" /></a> <p class="text-2xl" data-aos="fade-right" data-aos-duration="1000">Co-operative College of the Philippines</p>
    </div>
    <div class=" flex w-1/4">

       <a href="#"><div data-aos="fade-left" data-aos-duration="1000" class="transition ease-in delay-300 border border-white bg-theme2 text-theme1 hover:bg-theme1 hover:text-theme2 hover:border-theme2 text-l font-bold w-40 h-12 py-2 px-4 rounded-full  ">
            Contact Us<font-awesome-icon icon="fa-solid fa-phone-flip" class="h-6 w-8 ml-2 " />  
        
        </div></a>

       
    </div>
          
</div>
      <ResponsiveNavBar />


<div id="maincontent" class="flex justify-center items-center h-max w-screen bg-slate-300" data-aos="fade-up" data-aos-duration="1000" >
    <img src="../../asset/landingpage.jpg" />
</div>

<div class="xl:h-96 md:h-max xl:w-screen  flex justify-center items-center xl:text-2xl md:text-sm text-justify py-10 px-8" data-aos="fade-up" data-aos-duration="2000">

    <p class="md:mx-8">&nbsp&nbsp&nbsp&nbsp&nbsp&nbspThe morning session on Deepening our Co-operative Identity was facilitated by the <strong>Co-op College PH</strong> team headed by CEO & Principal <strong>Donna Dizon</strong>. This interactive learning activity brought out the creativity of the participants in making their own “Halo-halo” which requires certain key ingredients on embodying our identity as co-op leaders.
The afternoon session on Co-op Financial Literacy: The Usage of Statutory Funds was conducted by our Resource Speaker and Trainer <strong>Hon. Gervacio Piator, CPA, MBA, DM, PhD.</strong>
A total of 35 participants coming from 15 co-operatives nationwide joined and actively participated on these sessions. To learn more and be involved with the Co-op College programs (both locally and abroad), join us and be a member of the <strong>National Federation of Cooperative Primaries in the Philippines - Nafecoop</strong> now! </p>

</div>


<div class=" bg-theme1 h-screen w-screen flex justify-center items-center ">

    <div class="lpg1 bg-slate-900 h-screen w-1/2 " data-aos="fade-right" data-aos-duration="3000" >
        <img src="../../asset/lpg1.jpg" class="h-screen w-screen items-stretch" />
    </div>
    <div class="flex flex-col justify-center items-center h-screen w-1/2" data-aos="zoom-in-left" data-aos-duration="1000" data-aos-anchor-placement="top-center">
        <p class="xl:text-6xl md:text-l mb-8 text-white"> Cebu Training Session</p>
        <p class=" text-white xl:text-2xl md:text-sm text-justify mr-12 ">&nbsp&nbsp&nbsp&nbsp&nbsp&nbspThe morning session on Deepening our Co-operative Identity was facilitated by the <strong>Co-op College PH</strong> team headed by CEO & Principal <strong>Donna Dizon</strong>. This interactive learning activity brought out the creativity of the participants in making their own “Halo-halo” which requires certain key ingredients on embodying our identity as co-op leaders.
The afternoon session on Co-op Financial Literacy: The Usage of Statutory Funds was conducted by our Resource Speaker and Trainer <strong>Hon. Gervacio Piator, CPA, MBA, DM, PhD.</strong>
A total of 35 participants coming from 15 co-operatives nationwide joined and actively participated on these sessions. To learn more and be involved with the Co-op College programs (both locally and abroad), join us and be a member of the <strong>National Federation of Cooperative Primaries in the Philippines - Nafecoop</strong> now! </p>

    </div>


</div>

<div class=" h-max my-20 w-screen flex flex-wrap justify-center items-center px-20 ">

    <div class="px-4 text-justify flex flex-col justify-center items-center my-8 h-60 w-96 bg-theme2 mx-8 rounded-xl" data-aos="zoom-out" data-aos-duration="1000">
        <font-awesome-icon icon="fa-solid fa-note-sticky " class="text-theme1 h-10 mb-4" />
            Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor.
    </div>
    <div class="px-4 text-justify flex flex-col justify-center items-center my-8 h-60 w-96 bg-theme2 mx-8 rounded-xl" data-aos="zoom-out" data-aos-duration="1000">
        <font-awesome-icon icon="fa-solid fa-coins" class="text-theme1 h-10 mb-4" />
        Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor.
    </div>
    <div class="px-4 text-justify flex flex-col justify-center items-center my-8 h-60 w-96 bg-theme2 mx-8 rounded-xl" data-aos="zoom-out" data-aos-duration="1000">
        <font-awesome-icon icon="fa-solid fa-lightbulb" class="text-theme1 h-10 mb-4" />
        Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor.
    </div>
    <div class="px-4 text-justify flex flex-col justify-center items-center my-8 h-60 w-96 bg-theme2 mx-8 rounded-xl" data-aos="zoom-out" data-aos-duration="1000">
        <font-awesome-icon icon="fa-solid fa-briefcase-medical" class="text-theme1 h-10 mb-4" />
        Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor.
    </div>
    <div class="px-4 text-justify flex flex-col justify-center items-center my-8 h-60 w-96 bg-theme2 mx-8 rounded-xl" data-aos="zoom-out" data-aos-duration="1000">
        <font-awesome-icon icon="fa-solid fa-chart-simple" class="text-theme1 h-10 mb-4" />
        Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor.
    </div>
    <div class="px-4 text-justify flex flex-col justify-center items-center my-8 h-60 w-96 bg-theme2 mx-8 rounded-xl" data-aos="zoom-out" data-aos-duration="1000">
        <font-awesome-icon icon="fa-solid fa-earth-asia" class="text-theme1 h-10 mb-4" />
        Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor.

    </div>

</div>

   
<div class="w-screen h-60 bg-theme1 flex flex-col justify-center items-center"  >
    <p class="text-white text-3xl" data-aos="fade-down" data-aos-duration="800"> Contact and Visit Us!</p>
    <div class=" h-20 flex justify-center items-center " data-aos="fade-down" data-aos-duration="1500">
    <a href="#"><font-awesome-icon icon="fa-brands fa-facebook" class="transition ease-in duration-150 h-10 text-theme2 mx-4 hover:scale-150 overflow-y-hidden" /></a>
    <a href="#"><font-awesome-icon icon="fa-solid fa-phone" class="transition ease-in duration-150 h-10 text-theme2 mx-4 hover:scale-150 overflow-y-hidden" /></a>
    <a href="#"><font-awesome-icon icon="fa-solid fa-envelope" class="transition ease-in duration-150 h-10 text-theme2 mx-4 hover:scale-150 overflow-y-hidden" /></a>
    </div>
   

</div>






</template>




<script>
AOS.init(
            );
AOS.refresh();
</script>