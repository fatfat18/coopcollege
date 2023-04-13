<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>




<style>

.postcontainer{
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .9)),
    url('/coopcollege/coopcollege/resources/asset/guestbackg.jpg');
    background-size: cover;
}

</style>

<template>
   
    <div class="min-h-screen flex xl:flex-row flex-col-reverse sm:justify-center items-center xl:pt-6 sm:pt-0 bg-gray-100 justify-center postcontainer" >
   
        <div class="bg-white w-screen xl:py-20  xl:w-96" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">

            <div class="flex justify-center items-center max-w-screen " >
            <a href="/"><img src="../../asset/logo.png" class="pt-5 h-60"></a>
            </div>
            <div class="text-center text-xl text-theme1 font-semibold pt-5">
                CO-OPERATIVE COLLEGE<br> <span class="text-xs">OF THE</span> <br>PHILIPPINES
            </div>

        </div>
        <div
            class=" w-full  sm:max-w-md px-6 xl:py-32  xl:flex xl:justify-center xl:items-center bg-zinc-50 shadow-2xl overflow-hidden" data-aos="fade-right" data-aos-duration="1000"
        >
       
            <slot />


        </div>

        
    </div>
</template>
