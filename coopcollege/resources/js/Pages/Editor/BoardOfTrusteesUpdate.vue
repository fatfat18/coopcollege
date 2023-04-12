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

        <div class="postcontainer flex justify-center h-screen w-screen xl:px-10 py-10 ">


            <div class=" xl:w-3/4 w-4/5 xl:mt-16 overflow-y-hidden">


                    <form @submit.prevent="updateBOD(this.intNum)">
                        <button class="border border-white w-24 text-white py-2 px-4 bg-green-800 rounded-lg mb-10 hover:bg-green-600 transition ease-in duration-100">Save</button>
                        
                           
                        
                            <div class="overflow-y-hidden space-x-2">

                              <div class="text-white xl:h-20 w-max flex justify-center items-center" data-aos="fade-up"  data-aos-duration="1500" >
                             <label for="img" class="text-2xl text-white rounded-2xl border-theme2 py-5 px-5 border-dashed border-2 hover:border-white hover:text-theme2 transiton duration-300" >Upload Image<br></label>
                            <input type="file" accept="image/*" @change="uploadFile" id="img" ref="file"   >
                   
                        </div>

                                  
                                <div class="text-white flex" data-aos="fade-up"  data-aos-duration="1500"  >
                                      <div v-if="imagePreviewUrlholder" >
                                        <img :src="imagePreviewUrlholder" class="h-40 w-60 object-cover my-5 mx-5" >
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
                                v-model="this.firstname"
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
                                v-model="this.lastname"
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
                                v-model="this.suffix"
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
                                v-model="this.position"
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
                          
                                autocomplete=""
                                placeholder="Prefix"
                                v-model="this.prefix"
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
                                v-model="this.address"
                                data-aos="fade-up"  data-aos-duration="1300"
                                @click.stop
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
                                v-model="this.status"
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
                                v-model="this.start_date"
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
                                v-model="this.end_date"
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


export default {

  data() {
    return {
      imagePreviewUrl:null,
      imagePreviewUrlholder:null,
      firstname: '',
      lastname: '',
      prefix: null,
      suffix: null,
      position: '',
      address: '',
      start_date: '',
      end_date: '',
      status:'',
      showModal: false,

    }
  },
  mounted(event) {
    let urlGet = "http://127.0.0.1:8000/displayBOD";
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
            if( y.idBOD == this.itemId){
              console.log(y);
              this.items = y;
              console.log(this.items);
              
            }
          
            }
          

        //assign the selected object to all mounted
      
        this.imagePreviewUrlholder = this.items.image.ImageUrl;
        console.log(this.imagePreviewUrlholder)
        this.firstname = this.items.Fname;
        this.lastname = this.items.Lname;
        this.suffix = this.items.Suffix;
        this.position = this.items.Position;
        this.start_date = this.items.startDate;
        this.end_date = this.items.endDate;
        this.address = this.items.Address;
        this.status = this.items.Status;
        
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
    
    
    closeModal() {
      // Reset any necessary data properties and hide the modal
  
      this.showModal = false;
    },

    updateBOD() {
     let updateUrl = "http://127.0.0.1:8000/updateBOD";
     let params = new URLSearchParams();
     //let item = this.items.find(item => item.idTC === this.selectedItem);
     
     let num = parseInt(this.itemId);


     params.append("idBOD", num);
     params.append("Fname", this.firstname);
     params.append("Lname", this.lastname);
     params.append("Prefix", this.prefix);
     params.append("Suffix", this.suffix);
     params.append("Status", this.status);
     params.append("Position", this.position);
     params.append("startDate", this.start_date);
     params.append("endDate", this.end_date);
     params.append("Address", this.address);

    
     
     axios.put(updateUrl + '?' + params.toString())
       .then(response => {
         console.log(response.data);
         this.showModal= true;
         console.log(params.toString());
        
          
        async function redirectWithDelay() {
           await new Promise(resolve => setTimeout(resolve, 1000)); // wait for 3 seconds
           window.location.href = route('BoardOfTrustees'); // redirect to the TrainingCalendar URL
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
