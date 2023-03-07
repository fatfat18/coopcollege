<script setup>
import { Head, Link } from '@inertiajs/vue3';
import AOS from 'aos'
import 'aos/dist/aos.css'


import  ResponsiveNavBar from '@/Components/ResponsiveNavBar.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons"






library.add(faTwitter,faPhoneFlip)



defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});

AOS.init()


</script>

<template>
    <Head title="Welcome" />


<!-- HEADER -->
<div id="welcome" class="h-28 bg-theme1 w-screen text-white  md:text-sm flex xl:flex-row justify-center items-center">
    <div class=" flex xl:justify-center xl:items-center md:items-start md:justify-center w-3/4">
        <a href="/"><img src="../../asset/logo.png" class="h-28 min-w-fit" data-aos="fade-right" data-aos-duration="1000" /></a> <p class="text-2xl" data-aos="fade-right" data-aos-duration="1000">Co-operative College of the Philippines</p>
    </div>
    <div class=" flex w-1/4">

       <a href="#"><div data-aos="fade-left" data-aos-duration="1000" class=" border border-white bg-theme2 text-theme1 hover:bg-theme1 hover:text-theme2 hover:border hover:border-theme2 text-l font-bold w-40 h-12 py-2 px-4 rounded-full  ">
            Contact Us<font-awesome-icon icon="fa-solid fa-phone-flip" class="h-6 w-8 ml-2 " />  
        
        </div></a>

       
    </div>
          
</div>
      <ResponsiveNavBar />


<div id="maincontent" class="flex justify-center items-center h-max w-screen bg-slate-300" data-aos="fade-up" data-aos-duration="1000" >
    <img src="../../asset/landingpage.jpg" />
</div>

<div class="xl:h-96 md:h-max xl:w-screen  flex justify-center items-center xl:text-2xl md:text-sm text-justify py-10 px-8" data-aos="fade-up" data-aos-duration="1500">

    <p class="md:mx-8">&nbsp&nbsp&nbsp&nbsp&nbsp&nbspThe morning session on Deepening our Co-operative Identity was facilitated by the <strong>Co-op College PH</strong> team headed by CEO & Principal <strong>Donna Dizon</strong>. This interactive learning activity brought out the creativity of the participants in making their own “Halo-halo” which requires certain key ingredients on embodying our identity as co-op leaders.
The afternoon session on Co-op Financial Literacy: The Usage of Statutory Funds was conducted by our Resource Speaker and Trainer <strong>Hon. Gervacio Piator, CPA, MBA, DM, PhD.</strong>
A total of 35 participants coming from 15 co-operatives nationwide joined and actively participated on these sessions. To learn more and be involved with the Co-op College programs (both locally and abroad), join us and be a member of the <strong>National Federation of Cooperative Primaries in the Philippines - Nafecoop</strong> now! </p>

</div>


<div class=" bg-slate-700 h-screen w-screen flex justify-center items-center ">




</div>

<div class=" bg-zinc-900 h-screen w-screen flex justify-center items-center ">




</div>

   




</template>


