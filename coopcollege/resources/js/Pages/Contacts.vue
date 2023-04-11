<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTty } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import TextInput from '@/Components/TextInput.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Modal from '@/Components/Modal.vue';




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

        <form @submit.prevent="updateContactUs">
    
        <div class="max-w-7xl bg-white xl:px-8 xl:py-4 py-4 rounded-lg flex flex-col gap-4 text-xs xl:text-l w-screen h-max" v-for="(item, index) in contactUs" :key="index"> 

            <button @click="updateContactUs(item.idcontactUs)" class="border  w-24 text-white py-4 px-4 bg-green-800 rounded-lg  hover:bg-green-600 transition ease-in duration-100"  >Save</button>

            <div class="xl:flex overflow-y-hidden justify-center" >
                
                <font-awesome-icon icon="fa-solid fa-envelope" class="transition ease-in duration-150 h-10 text-theme1 mx-4 overflow-y-hidden" data-aos="fade-right"  data-aos-duration="1300" />
                <TextInput 
                                id="emailAdd"
                                name="emailAdd"
                                type="text"
                                class="px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500 "
                                required
                                placeholder="Email"
                                v-model="item.emailAdd"
                                data-aos="fade-up"  data-aos-duration="1300"
                                
                                >
                            
                                </TextInput>
            </div>
            <div class="xl:flex overflow-y-hidden justify-center">
                <font-awesome-icon icon="fa-brands fa-facebook" class="transition ease-in duration-150 h-10 text-theme1 mx-4 overflow-y-hidden" data-aos="fade-right"  data-aos-duration="1300" />
                <TextInput 
                                id="facebookLink"
                                name="facebookLink"
                                type="text"
                                class="px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500 "
                                required
                                autocomplete="current-facebook"
                                placeholder="Facebook"
                                v-model="item.facebookLink"
                                data-aos="fade-up"  data-aos-duration="1300"
                                
                                >
                            
                                </TextInput>
            </div>

            <div class="xl:flex overflow-y-hidden justify-center">
                <font-awesome-icon icon="fa-solid fa-phone" class="transition ease-in duration-150 h-10 text-theme1 mx-4 overflow-y-hidden" data-aos="fade-right"  data-aos-duration="1300" />
                <TextInput 
                                id="phoneNum"
                                name="phoneNum"
                                type="number"
                                class="px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500 "
                                required
                                autocomplete="current-phonenum"
                                placeholder="Mobile Phone"
                                v-model="item.phoneNum"
                                data-aos="fade-up"  data-aos-duration="1300"
                                
                                >
                            
                                </TextInput>
            </div>
            
            <div class="xl:flex overflow-y-hidden justify-center">
                <font-awesome-icon icon="fa-solid fa-tty" class="transition ease-in duration-150 h-10 text-theme1 mx-4 overflow-y-hidden" data-aos="fade-right"  data-aos-duration="1300" />
                <TextInput 
                                id="telNum"
                                name="telNum"
                                type="number"
                                class="px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500 "
                                required
                                autocomplete="current-telephone"
                                placeholder="Telephone"
                                v-model="item.telNum"
                                data-aos="fade-up"  data-aos-duration="1300"
                                
                                >
                            
                                </TextInput>
            </div>

            <div class="xl:flex overflow-y-hidden justify-center">
                <font-awesome-icon icon="fa-solid fa-globe" class="transition ease-in duration-150 h-10 text-theme1 mx-4 overflow-y-hidden" data-aos="fade-right"  data-aos-duration="1300" />
                <TextInput 
                                id="websiteLink"
                                name="websiteLink"
                                type="text"
                                class="px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500 "
                                required
                                autocomplete="current-website"
                                placeholder="Website Link"
                                v-model="item.websiteLink"
                                data-aos="fade-up"  data-aos-duration="1300"
                                
                                >
                            
                                </TextInput>
            </div>
            
    
        </div>
    </form>      

                      <Modal :show="showModal" @close="showModal = false" >
                                <h2 class="text-theme1 text-2xl">Updated Contacts</h2>
                                <p class="text-theme2 text-4xl">Success!</p>
                            </Modal>

            </div>
        </div>
       
    </AuthenticatedLayout>




</template>


<script>


import axios from 'axios';

export default {
  data() {
    return {
      contactUs: [],
      idcontactUs: 1,
      showModal: false,
    
      
    };
  },
  created() {
    let getUrl = "http://127.0.0.1:8000/displayContactUs"
    axios.get(getUrl)
      .then(response => {
        this.contactUs = response.data;
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    updateContactUs() {
     let updateUrl = "http://127.0.0.1:8000/contactUs/";
     let params = new URLSearchParams();
     let item = this.contactUs.find(item => item.idcontactUs === this.idcontactUs);
     params.append("emailAdd", item.emailAdd);
     params.append("phoneNum", item.phoneNum);
     params.append("telNum", item.telNum);
     params.append("facebookLink", item.facebookLink);
     params.append("websiteLink", item.websiteLink);
     params.append("Status", 1); // Assuming Status is a number
     
     axios.put(updateUrl + '?' + params.toString())
       .then(response => {
         console.log(response.data);
         this.showModal= true;
       })
       .catch(error => {
         console.log(error);
       });
    },
 
  },
};


AOS.init({startEvent: 'load',
          once : 'true,'});
AOS.refresh();
</script>