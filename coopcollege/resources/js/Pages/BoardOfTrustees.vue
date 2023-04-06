<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import AOS from 'aos'
import 'aos/dist/aos.css'
import BoardOfTrusteesTile from '@/Components/BoardOfTrusteesTile.vue'



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
            <h2 class="font-bold text-3xl leading-tight text-theme1 ">Manage Board Of Trustees</h2>
        </template>

        

        <div class="py-8 postcontainer overflow-y-hidden h-max min-h-screen">
            <a href="/BoardOfTrusteesEditor"><button class="xl:ml-16 my-4 mx-8 px-6 py-2 rounded-md bg-theme1 transition duration-150 border border-black text-theme2 hover:scale-110 hover:-translate-y-1"> Add Member  <font-awesome-icon icon="fa-solid fa-plus" class= " pl-2 hover:text-white " /> </button></a>
            
        <!-- HEADER NI SA POST TILE  -->
    <div class="max-w-7xl cont w-screen mx-auto sm:px-6 lg:px-8 space-y-1 h-max" data-aos="fade-up" data-aos-duration="1000">
        <div class="max-w-7xl  bg-white xl:px-8 xl:py-4 py-4 rounded-sm grid grid-cols-15 gap-4 text-xs xl:text-l"> 
            <div class=" flex justify-center text-center items-center">
                ID
            </div>
            <div class=" flex justify-center text-center items-center"> 
                IMAGE
            </div>
            <div class=" flex justify-center text-center items-center">
                FIRSTNAME
            </div>
            <div class=" flex justify-center text-center items-center">
                LASTNAME
            </div>
            <div class=" flex justify-center text-center items-center">
                MIDDLE NAME
            </div>
            <div class=" flex justify-center text-center items-center">
                SUFFIX
            </div>
            <div class=" flex justify-center text-center items-center">
                POSITION
            </div>
            <div class=" flex justify-center text-center items-center">
                STATUS
            </div>
            <div class=" flex justify-center text-center items-center">
                START DATE
            </div>
            <div class=" flex justify-center text-center items-center">
                END DATE
            </div>
            <div class=" flex justify-center text-center items-center">
                PREFIX
            </div>
            <div class=" flex justify-center text-center items-center">
                ADDRESS
            </div>
            <div class=" flex justify-center text-center items-center">
                COOP NAME
            </div>

            <div class=" flex justify-center text-center items-center">
                     
            </div>
            <div class=" flex justify-center text-center items-center">
                       
            </div>
            
        </div>
                

        <!-- DIRI MAG LOOP ANG GIKAN SA DATABASE PAGINATE LANG DAYUN BY 10s -->

               <BoardOfTrusteesTile id='1' firstname='firstname' lastname='lastname' middlename='middlename' suffix='suffix' position='position' status='status' start_date='start_date' end_date='end_date' prefix='prefix' address='address' coop_name='coopname' />
               <BoardOfTrusteesTile id='2' firstname='firstname' lastname='lastname' middlename='middlename' suffix='suffix' position='position' status='status' start_date='start_date' end_date='end_date' prefix='prefix' address='address' coop_name='coopname' />
               <BoardOfTrusteesTile id='3' firstname='firstname' lastname='lastname' middlename='middlename' suffix='suffix' position='position' status='status' start_date='start_date' end_date='end_date' prefix='prefix' address='address' coop_name='coopname' />
       


            </div>
        </div>
       
    </AuthenticatedLayout>




</template>


<script>
AOS.init({startEvent: 'load',
          once : 'true,'});
AOS.refresh();
</script>