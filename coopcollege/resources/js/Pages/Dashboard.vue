<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import AOS from 'aos'
import 'aos/dist/aos.css'



library.add(faPlus);

</script>


<style>
.postcontainer{
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .9)),
    url('/coopcollege/coopcollege/resources/asset/editpostbackg.jpg');
}
</style>

<template>
 



    <AuthenticatedLayout>
        
        <template #header> 
            <h2 class="font-bold text-3xl leading-tight text-theme1 ">Manage Post</h2>
        </template>

        

        <div class="py-8 h-screen postcontainer">
            
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 overflow-y-hidden " >
                <a href="/PostEditor"><button class="my-4 mx-8 px-6 py-2 rounded-md bg-theme1 transition duration-150 border border-black text-theme2 hover:scale-110 hover:-translate-y-1"> Create Post  <font-awesome-icon icon="fa-solid fa-plus" class= " pl-2 hover:text-white " /> </button></a>
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg " data-aos="fade-up"  data-aos-duration="1300">
                    <div class="p-6 text-green-700" >You're logged in!</div>
                </div>
            </div>
        </div>
       
    </AuthenticatedLayout>




</template>


<script>
AOS.init({dataAosDuration:'2000',
            });
AOS.refresh();
</script>