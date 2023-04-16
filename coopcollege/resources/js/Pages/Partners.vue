<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import AOS from 'aos'
import 'aos/dist/aos.css'
import PartnersTile from '@/Components/PartnersTile.vue'



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
            <h2 class="font-bold text-3xl leading-tight text-theme1 ">Manage Partners</h2>
        </template>

        

        <div class="py-8 postcontainer overflow-y-hidden h-max min-h-screen">
            <a href="/PartnersEditor"><button class="xl:ml-16 my-4 mx-8 px-6 py-2 rounded-md bg-theme1 transition duration-150 border border-black text-theme2 hover:scale-110 hover:-translate-y-1"> Add Partner  <font-awesome-icon icon="fa-solid fa-plus" class= " pl-2 hover:text-white " /> </button></a>
            
        <!-- HEADER NI SA POST TILE  -->
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 overflow-y-hidden space-y-1 h-max" data-aos="fade-up" data-aos-duration="1000" >
        <div class="max-w-7xl bg-white xl:px-8 xl:py-4 py-4 rounded-sm grid grid-cols-5 gap-4 text-xs xl:text-md"> 

            <div class=" flex justify-center text-center items-center"> 
                IMAGE
            </div>
            <div class=" flex justify-center text-center items-center col-span-2">
                NAME
            </div>

            <div class=" flex justify-center text-center items-center">
                     
            </div>
      
        </div>
                

        <!-- DIRI MAG LOOP ANG GIKAN SA DATABASE PAGINATE LANG DAYUN BY 10s -->

        <template v-for="(item, index) in reversedItems" :key="item.idPartner">
         
         <PartnersTile
           :image="item.image.ImageUrl"
           :name="item.partnerName"
           data-aos="fade-up" data-aos-duration="500"
         >
        
         <div class=" flex justify-center text-center items-center col-span-1">
                        <button button @click="navigateToUpdate(item.idPartner)"  class="py-2 px-8  rounded-full bg-blue-400 xl:rounded-lg text-white text-xs xl:text-md transition duration-300 hover:text-blue-400 hover:bg-white border-2 border-blue-400">Edit</button>
            </div>
            <div class=" flex justify-center text-center items-center col-span-1 ">
                        <button class="transition duration-300 hover:text-red-500 hover:bg-white py-2 px-8  rounded-full bg-red-500 xl:rounded-lg text-white text-xs xl:text-md  border-2 border-red-500">Delete</button>
            </div>
        
        </PartnersTile>
   
         </template>
 
       

            </div>
        </div>
       
    </AuthenticatedLayout>




</template>


<script>
import { BASE_URL } from '../baseurl';

export default {


data() {
  return {
 
    items: [],
    showModal: false,


  }
},

mounted() {

    axios.get(BASE_URL + '/displayPartner')
      .then(response => {
        this.items = response.data;
        console.log(this.items);
    
      })
      .catch(error => {
        console.log(error);
      });
  },
  computed: {
    reversedItems() {
      return this.items.slice().reverse();
    },
  },
  methods:{
    navigateToUpdate(idPartner) {
    window.location.href = this.route('PartnersUpdate', {idPartner: idPartner});
  }

  }
}




AOS.init({startEvent: 'load',
          once : 'true,'});
AOS.refresh();
</script>