<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTty } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import TextInput from '@/Components/TextInput.vue';
import AOS from 'aos'
import 'aos/dist/aos.css'




library.add(faPlus,faFacebook,faEnvelope,faPhone,faTty,faGlobe);

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
            <h2 class="font-bold text-3xl leading-tight text-theme1 ">Manage Contacts</h2>
        </template>


        <div class="py-8 postcontainer overflow-y-hidden h-max min-h-screen">
            
            
        <!-- HEADER NI SA POST TILE  -->
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 overflow-y-auto space-y-1 h-max xl:flex xl:justify-center " data-aos="fade-up" data-aos-duration="1000">

        <div class="max-w-7xl bg-white xl:px-8 xl:py-4 py-4 rounded-lg flex flex-col gap-4 text-xs xl:text-l w-screen h-max"> 

            <button class="border  w-24 text-white py-4 px-4 bg-green-800 rounded-lg  hover:bg-green-600 transition ease-in duration-100">Save</button>

            <div class="xl:flex overflow-y-hidden justify-center">
                <font-awesome-icon icon="fa-solid fa-envelope" class="transition ease-in duration-150 h-10 text-theme1 mx-4 overflow-y-hidden" data-aos="fade-right"  data-aos-duration="1300" />
                <TextInput 
                                id="title"
                                name="title"
                                type="text"
                                class="px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500 "
                                required
                                autocomplete="current-email"
                                placeholder="Email"
                                data-aos="fade-up"  data-aos-duration="1300"
                                
                                >
                            
                                </TextInput>
            </div>
            <div class="xl:flex overflow-y-hidden justify-center">
                <font-awesome-icon icon="fa-brands fa-facebook" class="transition ease-in duration-150 h-10 text-theme1 mx-4 overflow-y-hidden" data-aos="fade-right"  data-aos-duration="1300" />
                <TextInput 
                                id="title"
                                name="title"
                                type="text"
                                class="px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500 "
                                required
                                autocomplete="current-facebook"
                                placeholder="Facebook"
                                data-aos="fade-up"  data-aos-duration="1300"
                                
                                >
                            
                                </TextInput>
            </div>

            <div class="xl:flex overflow-y-hidden justify-center">
                <font-awesome-icon icon="fa-solid fa-phone" class="transition ease-in duration-150 h-10 text-theme1 mx-4 overflow-y-hidden" data-aos="fade-right"  data-aos-duration="1300" />
                <TextInput 
                                id="title"
                                name="title"
                                type="text"
                                class="px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500 "
                                required
                                autocomplete="current-phonenum"
                                placeholder="Mobile Phone"
                                data-aos="fade-up"  data-aos-duration="1300"
                                
                                >
                            
                                </TextInput>
            </div>
            
            <div class="xl:flex overflow-y-hidden justify-center">
                <font-awesome-icon icon="fa-solid fa-tty" class="transition ease-in duration-150 h-10 text-theme1 mx-4 overflow-y-hidden" data-aos="fade-right"  data-aos-duration="1300" />
                <TextInput 
                                id="title"
                                name="title"
                                type="text"
                                class="px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500 "
                                required
                                autocomplete="current-telephone"
                                placeholder="Telephone"
                                data-aos="fade-up"  data-aos-duration="1300"
                                
                                >
                            
                                </TextInput>
            </div>

            <div class="xl:flex overflow-y-hidden justify-center">
                <font-awesome-icon icon="fa-solid fa-globe" class="transition ease-in duration-150 h-10 text-theme1 mx-4 overflow-y-hidden" data-aos="fade-right"  data-aos-duration="1300" />
                <TextInput 
                                id="title"
                                name="title"
                                type="text"
                                class="px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500 "
                                required
                                autocomplete="current-website"
                                placeholder="Website Link"
                                data-aos="fade-up"  data-aos-duration="1300"
                                
                                >
                            
                                </TextInput>
            </div>
            
       
   

       



           
            
        </div>
                

            </div>
        </div>
       
    </AuthenticatedLayout>




</template>


<script>
AOS.init({startEvent: 'load',
          once : 'true,'});
AOS.refresh();
</script>