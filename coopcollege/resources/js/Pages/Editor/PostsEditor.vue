<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputError from '@/Components/InputError.vue';
import TextInput from '@/Components/TextInput.vue';
import AOS from 'aos'
import 'aos/dist/aos.css'
import InputLabel from '@/Components/InputLabel.vue';
import Modal from '@/Components/Modal.vue';


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
            <h2 class="font-semibold text-3xl text-theme1 leading-tight h-4 mb-4">Post Editor </h2>
        </template>

        <div class="">
           
        </div>

        <div class="postcontainer flex justify-center h-max pb-60 w-screen xl:px-10 py-10 overflow-y-hidden ">


            <div class=" xl:w-3/4 w-4/5 h-max xl:mt-4">


                    <form @submit.prevent="submitData">
                        <button class="border border-white w-24 text-white py-2 px-4 bg-green-800 rounded-lg mb-10 hover:bg-green-600 transition ease-in duration-100">Save</button>
                                 
                    

                        <div class="text-white xl:h-20 w-max flex justify-center items-center" data-aos="fade-up"  data-aos-duration="1500" >
                             <label for="img" class="text-2xl text-white rounded-2xl border-theme2 py-5 px-5 border-dashed border-2 hover:border-white hover:text-theme2 transiton duration-300" >Upload Images<br></label>
                            <input type="file" accept="image/*" multiple @change="uploadFile" id="img" ref="file" required  >
                   
                        </div>

                                  
                        <div class="text-white flex" data-aos="fade-up" data-aos-duration="1500">
                            <div v-for="imageUrl in imagePreviewUrlholder" :key="imageUrl">
                              <img :src="imageUrl" class="h-32 w-40 object-cover my-5 mx-5">
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
                                v-model="title"
                                data-aos="fade-up"  data-aos-duration="1300"
                                >
                            
                                </TextInput>

                                
                                <TextInput
                                id="description"
                                name="description"
                                type="text"
                                class="mt-2 py-2 px-2 w-full focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete="current-description"
                                placeholder="Description"
                                v-model="description"
                                data-aos="fade-up"  data-aos-duration="1000"
                                >
                            
                                </TextInput>
                            
                                <textarea
                                id="context"
                                name="context"
                                type="text"
                                class="mt-2 h-72 py-2 px-2 block w-full rounded-lg focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete="current-Context"
                                placeholder="Context"
                                v-model="context"
                                data-aos="fade-up"  data-aos-duration="1000"
                                >
                            
                                </textarea>

                            
                                <select id="posttype" name="posttype" class="mt-4" v-model="posttype">
                                   <option hidden>Post Type</option>
                                   <option v-for="item in items" :key="item.id" :value="item.id">{{ item.category }}</option>
                                 </select>
                            
                            </div>
                        


                



                            <Modal :show="showModal" @close="showModal = false" >
                                <h2 class="text-theme1 text-2xl">Added Partners</h2>
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
    imagePreviewUrl:[],
    imagePreviewUrlholder: [],
    posttype: 'Post Type',
    idUser: 1,
    description: '',
    title: '',
    context: '',
  
    items: [],
    showModal: false,

  }
},

mounted() {
  let urlGet = "http://127.0.0.1:8000/postCategory";

    axios.get(urlGet)
      .then(response => {
        this.items = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },


methods: {
  uploadFile(event) {
  

  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
  const file = files[i];
  const reader = new FileReader();
  reader.onload = (event) => {
    this.imagePreviewUrlholder.push(event.target.result);
  };
  reader.readAsDataURL(file);;
  }
  },
  submitData() {
    
    const formData = new FormData();
    for (let i = 0; i < this.imagePreviewUrlholder.length; i++) {
        formData.append('file[]', this.imagePreviewUrlholder[i]);
      }
    formData.append('PostCatId', this.posttype);
    formData.append('idUser', this.idUser);
    formData.append('Description', this.description);
    formData.append('newsTitle', this.title);
    formData.append('Context', this.context);
   

    let urlPost = "http://127.0.0.1:8000/storePost";
 
    // Append additional form data to the same FormData object
    
    axios.post(urlPost,formData,{

    headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      console.log(response);
      this.showModal = true;
    }).catch(error => {
      console.log(error);
    });

    imagePreviewUrl = [];
    imagePreviewUrlholder =  [];
    posttype =  this.item.postCatId;
    idUser =  1;
    description =  '';
    title =  '';
    context =  '';
    date_created =  '';

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
