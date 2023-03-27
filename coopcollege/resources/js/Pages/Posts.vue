<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import AOS from 'aos'
import 'aos/dist/aos.css'
import PostsTile from '@/Components/PostsTile.vue'



library.add(faPlus);

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
            <h2 class="font-bold text-3xl leading-tight text-theme1 ">Manage Post</h2>
        </template>

        

        <div class="py-8 postcontainer overflow-y-hidden h-max min-h-screen">
            <a href="/PostsEditor"><button class="xl:ml-16 my-4 mx-8 px-6 py-2 rounded-md bg-theme1 transition duration-150 border border-black text-theme2 hover:scale-110 hover:-translate-y-1"> Add Post  <font-awesome-icon icon="fa-solid fa-plus" class= " pl-2 hover:text-white " /> </button></a>
            
        <!-- HEADER NI SA POST TILE  -->
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 overflow-y-auto space-y-1 h-max" data-aos="fade-up" data-aos-duration="1000">
        <div class="max-w-7xl bg-white xl:px-8 xl:py-4 py-4 rounded-sm grid grid-cols-8 gap-4 text-xs xl:text-l"> 
            <div class=" flex justify-center text-center items-center">
                ID
            </div>
            <div class=" flex justify-center text-center items-center"> 
                IMAGE
            </div>
            <div class=" flex justify-center text-center items-center col-span-1">
                TITLE
            </div>
            <div class=" flex justify-center text-center items-center col-span-2">
                DESCRIPTION
            </div>
          
            <div class=" flex justify-center text-center items-center">
                      
            </div>
            <div class=" flex justify-center text-center items-center">
                     
            </div>
            <div class=" flex justify-center text-center items-center">
                       
            </div>
            
        </div>
                

        <!-- DIRI MAG LOOP ANG GIKAN SA DATABASE PAGINATE LANG DAYUN BY 10s -->

               <PostsTile title="title" description='TESTING DESCRIPTION1' id='1' />
               <PostsTile title="title" description='TESTING DESCRIPTION2' id='2' />
               <PostsTile title="title" description='TESTING DESCRIPTION3' id='3' />
               <PostsTile title="title" description='TESTING DESCRIPTION4' id='4' />
               <PostsTile title="title" description='TESTING DESCRIPTION5' id='5' />
               <PostsTile title="title" description='TESTING DESCRIPTION6' id='6' />
               <PostsTile title="title" description='TESTING DESCRIPTION7' id='7' />
               <PostsTile title="title" description='TESTING DESCRIPTION8' id='8' />
               <PostsTile title="title" description='TESTING DESCRIPTION9' id='9' />
               <PostsTile title="title" description='TESTING DESCRIPTION10' id='10' />


            </div>
        </div>
       
    </AuthenticatedLayout>




</template>


<script>
AOS.init({startEvent: 'load',
          once : 'true,'});
AOS.refresh();
</script>