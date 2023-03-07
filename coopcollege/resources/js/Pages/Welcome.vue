<script setup>
import { Head, Link } from '@inertiajs/vue3';
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
</script>

<template>
    <Head title="Welcome" />


    <div
        class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white"
    >
        <div v-if="canLogin" class="sm:fixed sm:top-0 sm:right-0 text-right">
            <Link
                v-if="$page.props.auth.user"
                :href="route('dashboard')"
                class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >Dashboard</Link
            >

           



      
<div>
<!-- HEADER -->
<div class="h-28 bg-theme1 w-screen text-white  md:text-sm flex xl:flex-row justify-center items-center">
    <div class=" flex xl:justify-center xl:items-center md:items-start md:justify-center w-3/4">
        <a href="/"><img src="../../asset/logo.png" class="h-28 min-w-fit" /></a> <p class="text-2xl">Co-operative College of the Philippines</p>
    </div>
    <div class=" flex w-1/4">

       <a href="#"><div class="transition ease-out duration-200 bg-theme2 text-theme1 hover:bg-theme1 hover:text-theme2 hover:border hover:border-theme2 text-l font-bold w-40 h-12 py-2 px-4 rounded-full  ">
            Contact Us<font-awesome-icon icon="fa-solid fa-phone-flip" class="h-6 w-8 ml-2 " />  
        
        </div></a>

       
    </div>
          
</div>
      <ResponsiveNavBar />

</div>






    </div>
</div>


</template>


