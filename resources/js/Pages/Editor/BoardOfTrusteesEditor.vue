<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputError from '@/Components/InputError.vue';
import TextInput from '@/Components/TextInput.vue';
import InputLabel from '@/Components/InputLabel.vue';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Modal from '@/Components/Modal.vue'




</script>

<style>
.postcontainer{
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .9)),
    url('/coopcollege/coopcollege/resources/asset/editpostbackg.jpg');
   
}
#img {
display: none;
}
</style>
<template>


    <AuthenticatedLayout>
        <template #header> 
            <h2 class="font-semibold text-3xl text-theme1 leading-tight h-4 mb-4">Member Editor </h2>
        </template>

        <div class="">
           
        </div>

        <div class="postcontainer flex justify-center h-max w-screen xl:px-10 xl:pb-96 py-20  ">


            <div class=" xl:w-3/4 w-4/5 xl:mt-16 overflow-y-hidden">


                    <form @submit.prevent="submitData">
                        <button class="mt-16 border border-white w-24 text-white py-2 px-4 bg-green-800 rounded-lg mb-10 hover:bg-green-600 transition ease-in duration-100">Save</button>
                        
                           
                        
                            <div class="overflow-y-hidden space-x-2">

                              <div class="text-white xl:h-20 w-max flex justify-center items-center" data-aos="fade-up"  data-aos-duration="1500" >
                             <label for="img" class="text-2xl text-white rounded-2xl border-theme2 py-5 px-5 border-dashed border-2 hover:border-white hover:text-theme2 transiton duration-300" >Upload Image<br></label>
                            <input type="file" accept="image/*" @change="uploadFile" id="img" ref="file" required  >
                   
                        </div>

                                  
                                <div class="text-white flex" data-aos="fade-up"  data-aos-duration="1500"  >
                                      <div v-if="imagePreviewUrlholder" >
                                        <img :src="imagePreviewUrlholder" class="h-60 w-40 object-cover my-5 mx-5" >
                                      </div>
                                </div>


                                <TextInput 
                                id="prefix"
                                name="prefix"
                                type="text"
                                class="mt-4 py-2 px-2  max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500"
                          
                                autocomplete=""
                                placeholder="Prefix"
                                v-model="prefix"
                                data-aos="fade-up"  data-aos-duration="1300"
                                @click.stop
                                >
            
                                </TextInput>

                                
                                <TextInput 
                                id="firstname"
                                name="firstname"
                                type="text"
                                class="mt-4 py-2 px-2  max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete="current-title"
                                placeholder="Firstname"
                                v-model="firstname"
                                data-aos="fade-up"  data-aos-duration="1300"
                                @click.stop
                                >
                            
                                </TextInput>

                                <TextInput 
                                id="lastname"
                                name="lastname"
                                type="text"
                                class="mt-4 py-2 px-2  max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete="Lname"
                                placeholder="Lastname"
                                v-model="lastname"
                                data-aos="fade-up"  data-aos-duration="1300"
                                @click.stop
                                >
            
                                </TextInput>

                              


                                <TextInput 
                                id="suffix"
                                name="suffix"
                                type="text"
                                class="mt-4 py-2 px-2  max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500"
                      
                                autocomplete="Suffix"
                                placeholder="Suffix"
                                v-model="suffix"
                                data-aos="fade-up"  data-aos-duration="1300"
                                @click.stop
                                >
            
                                </TextInput>
                                <TextInput 
                                id="position"
                                name="position"
                                type="text"
                                class="mt-4 py-2 px-2  max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete=""
                                placeholder="Position"
                                v-model="position"
                                data-aos="fade-up"  data-aos-duration="1300"
                                @click.stop
                                >
            
                                </TextInput>
                                <!-- <TextInput 
                                id="status"
                                name="status"
                                type="text"
                                class="mt-4 py-2 px-2  max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete=""
                                placeholder="Status"
                                v-model="status"
                                data-aos="fade-up"  data-aos-duration="1300"
                                @click.stop
                                >
            
                                </TextInput> -->

                               

                                <TextInput 
                                id="address"
                                name="address"
                                type="text"
                                class="mt-4 py-2 px-2  max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete=""
                                placeholder="Address"
                                v-model="address"
                                data-aos="fade-up"  data-aos-duration="1300"
                                @click.stop
                                >
            
                               </TextInput>


                            <!-- 
                                <TextInput 
                                id="coop_name"
                                name="coop_name"
                                type="text"
                                class="mt-4 py-2 px-2  max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete=""
                                placeholder="Coop Name"
                                v-model="coop_name"
                                data-aos="fade-up"  data-aos-duration="1300"
                                @click.stop
                                >
            
                                </TextInput> -->

                                <br>

                                <TextInput 
                                id="start_date"
                                name="start_date"
                                type="date"
                                class="mt-4 py-2 px-2  max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete=""
                                placeholder="Start Date"
                                v-model="start_date"
                                data-aos="fade-up"  data-aos-duration="1300"
                                @click.stop
                                >
                               
                                </TextInput>


                                <InputLabel @click.stop>Start Date</InputLabel>
                                
                                <TextInput 
                                id="end_date"
                                name="end_date"
                                type="date"
                                class="mt-4 py-2 px-2  max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete=""
                                placeholder="End Date"
                                v-model="end_date"
                                data-aos="fade-up"  data-aos-duration="1300"
                                @click.stop
                                >
            
                                </TextInput>
                                <InputLabel>End Date</InputLabel>
                            
                               
                            
                                
                            
                            </div>
                        


                

                            <Modal :show="showModal" @close="showModal = false">
                                <h2 class="text-theme1 text-2xl">Added Board of Trustees</h2>
                                <p class="text-theme2 text-4xl mb-5">Success!</p>
                            </Modal>

                         
                       





            </form>





        </div>
    </div>


    </AuthenticatedLayout>


</template>

<script>
import axios from 'axios';
import { BASE_URL } from '../../baseurl';


export default {

  data() {
    return {
      imagePreviewUrl:null,
      imagePreviewUrlholder:null,
      firstname: '',
      lastname: '',
      prefix: '',
      suffix: '',
      position: '',
      address: '',
      start_date: '',
      end_date: '',
      showModal: false,

    }
  },
  methods: {
    uploadFile(event) {
    this.imagePreviewUrlholder = this.imagePreviewUrl;
    this.imagePreviewUrl = this.$refs.file.files[0]; 
    const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        this.imagePreviewUrlholder = event.target.result;
      };
      reader.readAsDataURL(file);

    },
    submitData() {
      
      const formData = new FormData();
      formData.append('file', this.imagePreviewUrl);
      formData.append('Fname', this.firstname);
      formData.append('Lname', this.lastname);
      formData.append('Address', this.address);
      formData.append('Prefix', this.prefix);
      formData.append('Suffix', this.suffix);
      formData.append('Position', this.position);
      formData.append('startDate', this.start_date);
      formData.append('endDate', this.end_date);


   
      // Append additional form data to the same FormData object
      
      axios.post(BASE_URL + '/storeBOD',formData,{

      headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        console.log(response);
        this.showModal = true;
        async function redirectWithDelay() {
           await new Promise(resolve => setTimeout(resolve, 1000)); // wait for 3 seconds
           window.location.href = route('BoardOfTrustees'); // redirect to the TrainingCalendar URL
         }
      redirectWithDelay(); 
      }).catch(error => {
        console.log(error);
      });

      this.imagePreviewUrl = '';
      this.imagePreviewUrlholder = '';
      this.firstname =  '';
      this.lastname = '';
      this.prefix =  '';
      this.suffix =  '';
      this.position =  '';
      this.address =  '';
      this.start_date =  '';
      this.end_date =  '';
    },
    
    
    closeModal() {
      // Reset any necessary data properties and hide the modal
  
      this.showModal = false;
    },

    
  }
  
  
}

AOS.init({startEvent: 'load',
          once : 'true,'});
AOS.refresh();
</script>
