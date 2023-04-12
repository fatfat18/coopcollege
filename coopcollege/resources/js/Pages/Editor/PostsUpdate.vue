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


                    <form @submit.prevent="updatePosts(this.intNum)">
                        <button class="border border-white w-24 text-white py-2 px-4 bg-green-800 rounded-lg mb-10 hover:bg-green-600 transition ease-in duration-100">Save</button>
                                 
                    

                        <div class="text-white xl:h-20 w-max flex justify-center items-center" data-aos="fade-up"  data-aos-duration="1500" >
                             <label for="img" class="text-2xl text-white rounded-2xl border-theme2 py-5 px-5 border-dashed border-2 hover:border-white hover:text-theme2 transiton duration-300" >Upload Images<br></label>
                            <input type="file" accept="image/*" multiple @change="uploadFile" id="img" ref="file" >
                   
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
                                v-model="this.title"
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
                                v-model="this.description"
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
                                v-model="this.context"
                                data-aos="fade-up"  data-aos-duration="1000"
                                >
                            
                                </textarea>

                            
                                <select class="mt-4" v-model="this.posttype" name="posttype">
                                   <option hidden>Post Type</option>
                                   <option v-for="item in category" :key="item.postCatId" :value="item.PostCatId">{{ item.category }}</option>
                                 </select>
                            
                            </div>
                        


                



                            <Modal :show="showModal" @close="showModal = false" >
                                <h2 class="text-theme1 text-2xl">Update Post</h2>
                                <p class="text-theme2 text-4xl mb-5">Success!</p>
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
    posttype: '',
    idUser: 1,
    description: '',
    title: '',
    context: '',
    items: [],
    category:[],
    selectedItem:this.itemId,
    showModal: false,

  }
},

mounted(event) {
    let urlGet = "http://127.0.0.1:8000/displayPost";
    axios.get(urlGet)
      .then((response) => {
        const path = window.location.pathname;
        // Extract specific data from path

        const pathSegments = path.split('/');
        this.itemId = pathSegments[pathSegments.length - 1];
        console.log(this.itemId);
        
        const intNum = parseInt(this.itemId); // convert to an integer
        console.log(intNum);

        //all object from get
        this.items = response.data;
        console.log(this.items);

    

        for (let x = 0; x < this.items.length; x++) {
            const y = this.items[x];
            if( y.Postid == this.itemId){
              console.log(y);
              this.items = y;
              console.log(this.items);
              
            }
          
            }
          
      
    let urlGet = "http://127.0.0.1:8000/postCategory";

    axios.get(urlGet)
      .then(response => {
        this.category = response.data;
       
      })
      .catch(error => {
        console.log(error);
      });



        //assign the selected object to all mounted
 
        for (let i = 0 ; i < this.items.image.length ; i++){
            this.imagePreviewUrlholder[i] = this.items.image[i].ImageUrl;
        }
        console.log(this.imagePreviewUrlholder)
        this.description = this.items.Description;
        this.title = this.items.newsTitle;
        this.context = this.items.Context;
        this.posttype = this.items.PostCatId;
   

 

        
      })
      .catch((error) => {
        // Handle error
      });
  },


methods: {
  uploadFile(event) {
  console.log(this.imagePreviewUrlholder);

 
  
  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
  const file = files[i];
  const reader = new FileReader();
  reader.onload = (event) => {
    this.imagePreviewUrlholder.push(event.target.result);
  };
  reader.readAsDataURL(file);

  }

  const images = this.$refs.file.files;
  for (let i = 0; i < images.length; i++) {
        const image = images[i];
        this.imagePreviewUrl.push(image);
        
  }
  console.log(this.imagePreviewUrl);
  
  },
 
  
  
  closeModal() {
    // Reset any necessary data properties and hide the modal

    this.showModal = false;
  },

  updatePosts() {
     let updateUrl = "http://127.0.0.1:8000/updateCategory";
     let params = new URLSearchParams();
     //let item = this.items.find(item => item.idTC === this.selectedItem);
     
     let num = parseInt(this.itemId);


     params.append("PostCatId", this.posttype);
     params.append("idUser", this.idUser);
     params.append("Description", this.description);
     params.append("newsTitle", this.title);
     params.append("Context", this.context);
     params.append("Postid", num);
   
     
     
     

 
     
     axios.put(updateUrl + '?' + params.toString())
       .then(response => {
         console.log(response.data);
         this.showModal= true;
         
        
          
        async function redirectWithDelay() {
           await new Promise(resolve => setTimeout(resolve, 1000)); // wait for 3 seconds
           window.location.href = route('Posts'); // redirect to the TrainingCalendar URL
         }
      redirectWithDelay();  
      
         
       })
       .catch(error => {
         console.log(error);
       });
       console.log(updateUrl + '?' + params.toString());
    },

  
}


}


AOS.init({startEvent: 'load',
          once : 'true,'});
AOS.refresh();
</script>
