<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputError from '@/Components/InputError.vue';
import TextInput from '@/Components/TextInput.vue';
import InputLabel from '@/Components/InputLabel.vue';
import AOS from 'aos'
import 'aos/dist/aos.css'



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
            <h2 class="font-semibold text-3xl text-theme1 leading-tight h-4 mb-4">Member Editor </h2>
        </template>

        <div class="">
           
        </div>

        <div class="postcontainer flex justify-center h-screen w-screen xl:px-10 py-10 ">


            <div class=" xl:w-3/4 w-4/5 xl:mt-16 overflow-y-hidden">


                    <form action="">
                        <button class="border border-white w-24 text-white py-2 px-4 bg-green-800 rounded-lg mb-10 hover:bg-green-600 transition ease-in duration-100">Save</button>
                        
                           
                        
                            <div class="overflow-y-hidden space-x-2">

                                <div class="text-white" data-aos="fade-up"  data-aos-duration="1500" >
                                    <label for="img">Select Image :<br></label>
                                    <input type="file" accept="image/*" multiple @change="onFilesSelected">
                                </div>

                                  
                                <div class="text-white flex" data-aos="fade-up"  data-aos-duration="1500"  >
                                      <div v-for="(url, index) in imagePreviewUrls" :key="index" >
                                        <img :src="url" class="h-20 w-20">
                                      </div>
                                </div>

                                <TextInput 
                                id="firstname"
                                name="firstname"
                                type="text"
                                class="mt-4 py-2 px-2  max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete="current-title"
                                placeholder="Firstname"
                                data-aos="fade-up"  data-aos-duration="1300"
                                >
                            
                                </TextInput>

                                <TextInput 
                                id="lastname"
                                name="lastname"
                                type="text"
                                class="mt-4 py-2 px-2  max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete="current-title"
                                placeholder="Lastname"
                                data-aos="fade-up"  data-aos-duration="1300"
                                >
            
                                </TextInput>

                                <TextInput 
                                id="middlename"
                                name="middlename"
                                type="text"
                                class="mt-4 py-2 px-2  max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete="current-title"
                                placeholder="Middle Name"
                                data-aos="fade-up"  data-aos-duration="1300"
                                >
            
                                </TextInput>


                                <TextInput 
                                id="suffix"
                                name="suffix"
                                type="text"
                                class="mt-4 py-2 px-2  max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete="current-title"
                                placeholder="Suffix"
                                data-aos="fade-up"  data-aos-duration="1300"
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
                                data-aos="fade-up"  data-aos-duration="1300"
                                >
            
                                </TextInput>
                                <TextInput 
                                id="status"
                                name="status"
                                type="text"
                                class="mt-4 py-2 px-2  max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete=""
                                placeholder="Status"
                                data-aos="fade-up"  data-aos-duration="1300"
                                >
            
                                </TextInput>

                                <TextInput 
                                id="prefix"
                                name="prefix"
                                type="text"
                                class="mt-4 py-2 px-2  max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete=""
                                placeholder="Prefix"
                                data-aos="fade-up"  data-aos-duration="1300"
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
                                data-aos="fade-up"  data-aos-duration="1300"
                                >
            
                                </TextInput>

                                <TextInput 
                                id="coop_name"
                                name="coop_name"
                                type="text"
                                class="mt-4 py-2 px-2  max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete=""
                                placeholder="Coop ID"
                                data-aos="fade-up"  data-aos-duration="1300"
                                >
            
                                </TextInput>

                                <br>

                                <TextInput 
                                id="start_date"
                                name="start_date"
                                type="date"
                                class="mt-4 py-2 px-2  max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete=""
                                placeholder="Start Date"
                                data-aos="fade-up"  data-aos-duration="1300"
                                >
                               
                                </TextInput>


                                <InputLabel>Start Date</InputLabel>
                                
                                <TextInput 
                                id="end_date"
                                name="end_date"
                                type="date"
                                class="mt-4 py-2 px-2  max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete=""
                                placeholder="End Date"
                                data-aos="fade-up"  data-aos-duration="1300"
                                >
            
                                </TextInput>
                                <InputLabel>End Date</InputLabel>
                            
                               
                            
                                
                            
                            </div>
                        


                









            </form>





        </div>
    </div>


    </AuthenticatedLayout>


</template>

<script>
export default {
  data() {
    return {
      imagePreviewUrls: []
    }
  },
  methods: {
    onFilesSelected(event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = (event) => {
          this.imagePreviewUrls.push(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    }
  }
}

AOS.init();
AOS.refresh();
</script>
