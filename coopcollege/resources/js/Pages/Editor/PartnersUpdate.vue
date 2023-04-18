<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputError from '@/Components/InputError.vue';
import TextInput from '@/Components/TextInput.vue';
import AOS from 'aos'
import 'aos/dist/aos.css'
import InputLabel from '@/Components/InputLabel.vue';



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
            <h2 class="font-semibold text-3xl text-theme1 leading-tight h-4 mb-4">Partners Editor </h2>
        </template>

        <div class="">
           
        </div>

        <div class="postcontainer flex justify-center h-max w-screen xl:px-10 xl:pb-96 py-20 ">


            <div class=" xl:w-3/4 w-4/5 xl:mt-16 overflow-y-hidden">


                    <form @submit.prevent="updatePartners(this.intNum)">
                        <button class="mt-16 border border-white w-24 text-white py-2 px-4 bg-green-800 rounded-lg mb-10 hover:bg-green-600 transition ease-in duration-100">Save</button>
                        
                        <div class="text-white xl:h-20 w-max flex justify-center items-center" data-aos="fade-up"  data-aos-duration="1500" >
                             <label for="img" class="text-2xl text-white rounded-2xl border-theme2 py-5 px-5 border-dashed border-2 hover:border-white hover:text-theme2 transiton duration-300" >Upload Image<br></label>
                            <input type="file" accept="image/*" @change="uploadFile" id="img" ref="file"   >
                   
                        </div>

                                  
                                <div class="text-white flex" data-aos="fade-up"  data-aos-duration="1500"  >
                                      <div v-if="imagePreviewUrlholder" >
                                        <img :src="imagePreviewUrlholder" class="h-40 w-60 object-cover my-5 mx-5" >
                                      </div>
                                </div>
                        
                            <div class="overflow-y-hidden">
                                <TextInput 
                                id="name"
                                name="name"
                                type="text"
                                class="mt-4 py-2 px-2 w-full focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete="current-title"
                                placeholder="Name"
                                v-model="this.name"
                                data-aos="fade-up"  data-aos-duration="1300"
                                >
                        
                                </TextInput>

                                <br><br>
                               <InputLabel class="text-xl text-white -mb-5">Status : ( 1 - Active) (2 - Inactive) </InputLabel>
                                <TextInput 
                                id="status"
                                name="status"
                                type="text"
                                class="mt-4 py-2 px-2 w-40 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete="current-title"
                                placeholder="Status "
                                v-model="this.status "
                                data-aos="fade-up"  data-aos-duration="1300"
                              
                                >
                        
                                </TextInput>
                               
                    
                            
                    
                            
                            
                            </div>
                        


                            <Modal :show="showModal" @close="showModal = false" >
                                <h2 class="text-theme1 text-2xl">Update Partners</h2>
                                <p class="text-theme2 text-4xl mb-5">Success!</p>
                            </Modal>










            </form>





        </div>
    </div>


    </AuthenticatedLayout>


</template>


<script>
import Modal from '@/Components/Modal.vue';
import { BASE_URL } from '../../baseurl';


export default {
  data() {
    return {
      imagePreviewUrl:null,
      imagePreviewUrlholder:null,
      name: '',
      status:'',
      showModal: false,
    }
  },

  mounted(){

    axios.get(BASE_URL + '/displayPartner')
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
            if( y.idPartner == this.itemId){
              console.log(y);
              this.items = y;
              console.log(this.items);
              
            }
          
            }


        //assign the selected object to all mounted
 
        this.imagePreviewUrlholder = this.items.image.ImageUrl;
        console.log(this.imagePreviewUrlholder)

        this.name = this.items.partnerName;
        this.status = this.items.status;
   
  
   

 

        
      })
      .catch((error) => {
        // Handle error
      });


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

    updatePartners() {

     let params = new URLSearchParams();
     //let item = this.items.find(item => item.idTC === this.selectedItem);
     
     let num = parseInt(this.itemId);

     params.append("idPartner", num);
     params.append("status", this.status);
     params.append("partnerName", this.name);
     
     
     
 
     
     axios.put(BASE_URL + '/updatePartnerStatus' + '?' + params.toString())
       .then(response => {
         console.log(response.data);
         this.showModal= true;
         
        
          
        async function redirectWithDelay() {
           await new Promise(resolve => setTimeout(resolve, 1000)); // wait for 3 seconds
           window.location.href = route('Partners'); // redirect to the TrainingCalendar URL
         }
      redirectWithDelay();  
      
         
       })
       .catch(error => {
         console.log(error);
       });
       console.log(BASE_URL + '/updatePartnerStatus' + '?' + params.toString());
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
