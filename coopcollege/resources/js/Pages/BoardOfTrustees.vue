<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import AOS from 'aos'
import 'aos/dist/aos.css'



</script>



<style>

.postcontainer{
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .9)),
    url('/coopcollege/coopcollege/resources/asset/editpostbackg.jpg');
    background-size: cover;
}
</style>

<template>

    <AuthenticatedLayout>


        <template #header> 
            <h2 class="font-bold text-3xl leading-tight text-theme1 ">Board of Trustees</h2>
        </template>

        <div class="py-8 postcontainer overflow-y-hidden h-max min-h-screen">

            


        </div>



    </AuthenticatedLayout>

    
</template>