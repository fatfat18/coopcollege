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

}
</style>
<template>


    <AuthenticatedLayout>
        <template #header> 
            <h2 class="font-semibold text-3xl text-theme1 leading-tight h-4 mb-4">Member Editor </h2>
        </template>

        <div class="">
           
        </div>

        <div class="postcontainer flex justify-center h-screen w-screen xl:px-10 py-10 ">


            <div class=" xl:w-3/4 w-4/5 xl:mt-16 overflow-y-hidden">


                    <form @submit.prevent="submitData">
                        <button class="border border-white w-24 text-white py-2 px-4 bg-green-800 rounded-lg mb-10 hover:bg-green-600 transition ease-in duration-100">Save</button>
                        
                           
                        
                            <div class="overflow-y-hidden space-x-2">

                              <div class="text-white xl:h-20 w-max flex justify-center items-center" data-aos="fade-up"  data-aos-duration="1500" >
                             <label for="img" class="text-2xl text-white rounded-2xl border-theme2 py-5 px-5 border-dashed border-2 hover:border-white hover:text-theme2 transiton duration-300" >Upload Image<br></label>
                            <input type="file" accept="image/*"  @change="onFileSelected" id="img" name="file"  required  >
                        </div>

                                  
                                <div class="text-white flex" data-aos="fade-up"  data-aos-duration="1500"  >
                                      <div v-if="imagePreviewUrl" >
                                        <img :src="imagePreviewUrl" class="h-20 w-20" >
                                      </div>
                                </div>

                                <TextInput 
                                id="firstname"
                                name="firstname"
                                type="text"
                                class="mt-4 py-2 px-2  max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete="current-title"
                                placeholder="Fname"
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
                                required
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
                                id="prefix"
                                name="prefix"
                                type="text"
                                class="mt-4 py-2 px-2  max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete=""
                                placeholder="Prefix"
                                v-model="prefix"
                                data-aos="fade-up"  data-aos-duration="1300"
                                @click.stop
                                >
            
                                </TextInput>

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
                        


                

                            <Modal :show="showModal" @close="showModal = false" class="text-center">
                                <h2 class="text-theme1 text-2xl">Added Board of Trustees!</h2>
                                <p class="text-theme2 text-4xl">Success!</p>
                            </Modal>








            </form>





        </div>
    </div>


    </AuthenticatedLayout>


</template>

<script>


export default {
  data() {
    return {
      imagePreviewUrl:null,
      file:null,
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
    onFileSelected(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        this.imagePreviewUrl = event.target.result;
      };
      reader.readAsDataURL(file);
    },
    submitData() {
      this.showModal = true


      const formData = new FormData();
      formData.append('file', this.file);
      formData.append('Fname', this.firstname);
      formData.append('Lname', this.lastname);
      formData.append('Address', this.address);
      formData.append('Prefix', this.prefix);
      formData.append('Suffix', this.suffix);
      formData.append('Position', this.position);
      formData.append('startDate', this.start_date);
      formData.append('endDate', this.end_date);

      
   
      // Append additional form data to the same FormData object
      
      axios.post('http://127.0.0.1:8000/storeBOD',formData,{

      headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        console.log(response);
        
     
      }).catch(error => {
        console.log(error);
      });
      
    },
    
    closeModal() {
      // Reset any necessary data properties and hide the modal
  
      this.showModal = false;
    },
  }
  
}

AOS.init();
AOS.refresh();
</script>
