<script setup>
//Template ni sya sa tanan post or mao ni sya ang POST VIEWER sa mga viewers end.
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '@/Components/Header.vue';
import ResponsiveNavBar from '@/Components/ResponsiveNavBar.vue';

</script>

<template>

<Header />
<ResponsiveNavBar />

<div class="w-screen h-max bg-zinc-200  flex justify-center items-center text-theme1">

    <div class="h-max max-w-7xl w-screen  flex xl:flex-row flex-col">
            <div class="h-max xl:w-1/2   flex-col min-h-screen">
                <img src="../../asset/newsheading.jpg" alt="" class="w-full h-1/2 my-10" data-aos="fade-up" data-aos-duration="1000">
                <div class="flex flex-wrap  gap-5 justify-center  overflow-y-hidden" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
                    <img src="../../asset/newsheading.jpg" alt="" class="w-40" >
                    <img src="../../asset/newsheading.jpg" alt="" class="w-40" >
                    <img src="../../asset/newsheading.jpg" alt="" class="w-40" >
                    <img src="../../asset/newsheading.jpg" alt="" class="w-40" >
                    <img src="../../asset/newsheading.jpg" alt="" class="w-40" >
                </div>
                

            </div>
        
            <div class="h-screen xl:w-1/2  flex flex-col text-center  pt-10 text-5xl">

                <h1 class="" data-aos="zoom-out" data-aos-duration="1000"> TITLE</h1><br>

                <p class="text-xs xl:text-xl flex items-center justify-center text-justify px-10" data-aos="zoom-out" data-aos-duration="1000">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>


                <div class="mt-20 w-full  overflow-y-hidden   flex justify-center  items-center"><img src="../../asset/logo.png" alt="" class="w-32" data-aos="zoom-out" data-aos-duration="1000"></div>
            </div>
    </div>
















</div>


</template>
<script>

AOS.init({startEvent: 'load',
          once : 'true,'});
AOS.refresh();
</script>