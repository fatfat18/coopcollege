<script setup>
import { Head, Link } from '@inertiajs/vue3';
import AOS from 'aos'
import 'aos/dist/aos.css'
import  ResponsiveNavBar from '@/Components/ResponsiveNavBar.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {  faPhoneFlip } from "@fortawesome/free-solid-svg-icons"




library.add(faPhoneFlip)





</script>


<style>
.card{
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
.welcome{
    background: url('../../asset/header.jpg') no-repeat;
    background-size:  cover;
    background-position: center;
    
}

</style>

<template>
<div id="welcome" class="xl:h-60 h-28 bg-theme1 w-screen text-white  md:text-sm flex xl:flex-row justify-center items-center py-20 overflow-y-hidden welcome ">
    <div class=" flex xl:justify-center xl:items-center md:items-start md:justify-center w-3/4 ">
        <a href="/"><img src="../../asset/logo.png" class="mx-2 xl:h-32 h-20 xl:mr-8 md:mr-4 min-w-fit" data-aos="fade-right" data-aos-delay="300"  data-aos-duration="800" /></a> <p class="pt-2 overflow-y-hidden xl:text-3xl tracking-wider" data-aos="fade-right" data-aos-delay="100" data-aos-duration="500">CO-OPERATIVE COLLEGE <br><span class="xl:text-xl text-xs absolute">OF THE</span><span class="mx-6 xl:mx-10"></span>PHILIPPINES</p>
    </div>
    <div class=" flex w-1/4  transition ease-in duration-300">

       <a href="#footer"><div data-aos="zoom-in" data-aos-duration="1000" class=" border border-white bg-theme2 text-theme1 hover:bg-theme1 hover:text-theme2 hover:border-theme2 text-l font-bold w-36 h-12 py-4 px-4 rounded-full overflow-y-hidden relative contactus ">
            Contact Us<font-awesome-icon icon="fa-solid fa-phone-flip" class="h-4 w-6 ml-2 contactussvg" />  
        
        </div></a>

       
    </div>
          
</div>
</template>
<script>
AOS.init({startEvent: 'load',
          once : 'true,'});
AOS.refresh();

</script>
