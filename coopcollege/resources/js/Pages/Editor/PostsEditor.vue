<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputError from '@/Components/InputError.vue';
import TextInput from '@/Components/TextInput.vue';
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
            <h2 class="font-semibold text-3xl text-theme1 leading-tight h-4 mb-4">Post Editor </h2>
        </template>

        <div class="">
           
        </div>

        <div class="postcontainer flex justify-center h-screen w-screen xl:px-10 py-10 ">


            <div class=" xl:w-3/4 w-4/5 xl:mt-16 overflow-y-hidden">


                    <form action="">
                        <button class="border border-white w-24 text-white py-2 px-4 bg-green-800 rounded-lg mb-10 hover:bg-green-600 transition ease-in duration-100">Save</button>
                                 
                        <div class="text-white" data-aos="fade-up"  data-aos-duration="1500" >
                             <label for="img">Select Images :<br></label>
                            <input type="file" accept="image/*" multiple @change="onFilesSelected">
                        </div>

                                  
                            <div class="text-white flex" data-aos="fade-up"  data-aos-duration="1500"  >
                                  <div v-for="(url, index) in imagePreviewUrls" :key="index" >
                                    <img :src="url" class="h-20 w-40">
                                  </div>
                            </div>


                        
                            <div class="overflow-y-hidden">
                                <TextInput 
                                id="title"
                                name="title"
                                type="text"
                                class="mt-4 py-2 px-2 w-full focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete="current-title"
                                placeholder="Title"
                                data-aos="fade-up"  data-aos-duration="1300"
                                >
                            
                                </TextInput>
                            
                                <Textarea 
                                id="description"
                                name="description"
                                type="text"
                                class="mt-4 h-72 py-2 px-2 block w-full rounded-lg focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete="current-description"
                                placeholder="Description"
                                data-aos="fade-up"  data-aos-duration="1000"
                                >
                            
                                </Textarea>
                            
                                <select id="posttype" name="posttype" class="mt-4" data-aos="fade-up"  data-aos-duration="700">
                                  <option hidden>Post Type</option>
                                  <option value="News">News</option>
                                  <option value="News">Resources</option>
                                  <option value="Activity">Projects</option>
                                </select>
                            
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
