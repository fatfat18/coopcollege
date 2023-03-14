<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>




<style>

.postcontainer{
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .9)),
    url('/coopcollege/coopcollege/resources/asset/guestbackg.jpg');
}
</style>

<template>
   
    <div class="min-h-screen flex flex-col sm:justify-center items-center xl:pt-6 sm:pt-0 bg-gray-100 justify-center postcontainer" >
   

        <div
            class="w-full sm:max-w-md xl:mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg" data-aos="fade-down" data-aos-duration="1000"
        >

        
            <slot />



        </div>
    </div>
</template>
