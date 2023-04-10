<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputError from '@/Components/InputError.vue';
import TextInput from '@/Components/TextInput.vue';
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios';
import Modal from '@/Components/Modal.vue'




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
            <h2 class="font-semibold text-3xl text-theme1 leading-tight h-4 mb-4">Training Calendar Editor </h2>
        </template>

        <div class="">
           
        </div>

        <div class="postcontainer flex justify-center h-screen w-screen xl:px-10 py-10 ">


            <div class=" xl:w-3/4 w-4/5 xl:mt-16 overflow-y-hidden">

                <h1 class="text-5xl text-white"> THIS IS THE UPDATE</h1>

                    <form @submit.prevent="submitData">
                        <button type="submit" class="border border-white w-24 text-white py-2 px-4 bg-green-800 rounded-lg mb-10 hover:bg-green-600 transition ease-in duration-100">Save</button>
                            <div class="overflow-y-hidden space-x-4" >

                            


                                <TextInput 
                                id="name"
                                name="month"
                                type="text"
                                class="mt-4 py-2 px-2 w-40 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete=""
                                v-model="this.month"
                                placeholder="Month"
                                data-aos="fade-up"  data-aos-duration="1300"
                                @click.stop
                                >
                        
                                </TextInput>
                                
                                <TextInput 
                                id="name"
                                name="coursetitle"
                                type="text"
                                class="mt-4 py-2 px-2 w-96 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete=""
                                v-model="this.course_title"
                                placeholder="Course Title"
                                data-aos="fade-up"  data-aos-duration="1300"
                                @click.stop
                                >
                        
                                </TextInput>

                                <TextInput 
                                id="name"
                                name="venue"
                                type="text"
                                class="mt-4 py-2 px-2 w-40 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete=""
                                placeholder="Venue"
                                v-model="this.venue"
                                data-aos="fade-up"  data-aos-duration="1300"
                                @click.stop
                                >
                        
                                </TextInput>

                                <TextInput 
                                id="name"
                                name="year"
                                type="text"
                                class="mt-4 py-2 px-2 w-40 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete=""
                                placeholder="Year"
                                v-model="this.year"
                                data-aos="fade-up"  data-aos-duration="1300"
                                @click.stop
                                >
                        
                                </TextInput>
                            
                            
                            </div>

                           
                              <Modal :show="showModal" @close="showModal = false">
                                <h2 class="text-theme1 text-2xl">Added Training Calendar!</h2>
                                <p class="text-theme2 text-4xl">Success!</p>
                              </Modal>

                       

                    </form>

        </div>
    </div>


    </AuthenticatedLayout>


</template>

<script>



export default {
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
      month: '',
      course_title: '',
      year: '',
      venue: '',
      items: [],
      selectedItem:this.itemId,
      
      
    }
    
  },
  
  methods: {
  
    closeModal() {
      // Reset any necessary data properties and hide the modal
  
      this.showModal = false;
    },
  },
  methods: {
    updateContactUs() {
     let updateUrl = "http://127.0.0.1:8000/updateCalendarTraining/";
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
  mounted() {
    
    let urlGet = "http://127.0.0.1:8000/displayCalendarTraining";
    axios.get(urlGet)
      .then((response) => {
        const path = window.location.pathname;
        // Extract specific data from path

        const pathSegments = path.split('/');
        this.itemId = pathSegments[pathSegments.length - 1];
        this.BASEID = this.itemId;
        console.log(this.itemId);
        
        const intNum = parseInt(this.itemId); // convert to an integer
        console.log(intNum);

        //all object from get
        this.items = response.data;
        console.log(this.items);

    

        for (let x = 0; x < this.items.length; x++) {
            const y = this.items[x];
            if( y.idTC == this.itemId){
              console.log(y);
              this.items = y;
              console.log(this.items);
              
            }
          
            }
          

        //assign the selected object to all mounted
        this.month = this.items.month;
        this.year = this.items.year;
        this.course_title = this.items.events[0].courseTitle;
        this.venue = this.items.events[0].Venue;

        
      })
      .catch((error) => {
        // Handle error
      });
      
  },
 
  
}







AOS.init();
AOS.refresh();
</script>
