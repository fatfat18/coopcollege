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


                    <form @submit.prevent="submitData">
                        <button type="submit" class="border border-white w-24 text-white py-2 px-4 bg-green-800 rounded-lg mb-10 hover:bg-green-600 transition ease-in duration-100">Save</button>
                            <div class="overflow-y-hidden space-x-4">

                            


                                <TextInput 
                                id="name"
                                name="month"
                                type="text"
                                class="mt-4 py-2 px-2 w-40 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete=""
                                v-model="month"
                                placeholder="Month"
                                data-aos="fade-up"  data-aos-duration="1300"
                                @click.stop
                                >
                        
                                </TextInput>
                                
                                <TextInput 
                                id="name"
                                name="coursetitle"
                                type="text"
                                class="mt-4 py-2 px-2 w-80 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete=""
                                v-model="course_title"
                                placeholder="Course Title"
                                data-aos="fade-up"  data-aos-duration="1300"
                                @click.stop
                                >
                        
                                </TextInput>

                                <TextInput 
                                id="name"
                                name="venue"
                                type="text"
                                class="mt-4 py-2 px-2 w-72 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete=""
                                placeholder="Venue"
                                v-model="venue"
                                data-aos="fade-up"  data-aos-duration="1300"
                                @click.stop
                                >
                        
                                </TextInput>

                                <TextInput 
                                id="name"
                                name="year"
                                type="number"
                                class="mt-4 py-2 px-2 w-32 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete=""
                                placeholder="Year"
                                v-model="year"
                                data-aos="fade-up"  data-aos-duration="1300"
                                @click.stop
                                >
                        
                                </TextInput>
                            
                            
                            </div>

                           
                              <Modal :show="showModal" @close="showModal = false">
                                <h2 class="text-theme1 text-2xl">Added Training Calendar!</h2>
                                <p class="text-theme2 text-4xl mb-5">Success!</p>
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
      month: '',
      course_title: '',
      year: '',
      venue: '',
      showModal: false,
      items: [],
    }
    
  },
  
  methods: {
    submitData() {
      this.showModal = true

      const formData = new FormData();
      formData.append('month', this.month);
      formData.append('courseTitle', this.course_title);
      formData.append('year', this.year);
      formData.append('venue', this.venue);

      axios.post('http://127.0.0.1:8000/storeCalendarTraining',formData, {
    
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
      this.showModal = true;
      console.log(this.showModal);
      async function redirectWithDelay() {
           await new Promise(resolve => setTimeout(resolve, 3000)); // wait for 3 seconds
           window.location.href = route('TrainingCalendar'); // redirect to the TrainingCalendar URL
         }
      redirectWithDelay();  

      this.month =  '';
      this.course_title =  '';
      this.year =  '';
      this.venue =  '';
 
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
