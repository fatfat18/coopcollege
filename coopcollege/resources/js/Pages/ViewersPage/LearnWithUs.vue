<script setup>
import { Head, Link } from '@inertiajs/vue3';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ResponsiveNavBar from '@/Components/ResponsiveNavBar.vue';
import Header from '@/Components/Header.vue';
import CalendarMonth from '@/Components/CalendarMonth.vue';
import Footer from '@/Components/Footer.vue';

</script>

<style>
.bg{
background: rgb(0,0,51);
background: linear-gradient(143deg, rgba(0,0,51,1) 60%, rgba(255,204,0,1) 100%);
}
</style>

<template>
  <Header />
 <ResponsiveNavBar />


 <div class="h-max w-screen flex flex-col justify-center items-center bg-theme1 overflow-y-hidden bg ">

  <div class="h-24 w-screen max-w-7xl flex bg-theme2 justify-center items-center mt-10 xl:rounded-lg " data-aos="fade-up" data-aos-duration="1000" >
    <p class="xl:text-5xl text-2xl font-thin text-theme1" > Training Calendar {{ currentYear }}</p>
        </div>

     
    <div class="max-w-7xl w-screen bg-white mt-5 py-2 flex  items-center"> <div class="w-1/3 text-center">Month</div> <div class="w-1/3 text-center">Course Title</div><div class="w-1/3 text-center">Venue</div></div>
    



    <div v-for="(eventData, index) in calendar" :key="index" class=" flex justify-center items-center h-max w-screen max-w-7xl bg-zinc-300 xl:mt-1 py-2  xl:rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" >

  
            <div  class="flex text-center justify-center items-center">

              <div class="xl:w-3/4 lg:w-2/3 w-1/3 text-center flex justify-center items-center py-5">{{ eventData.month }}</div>


              <div class="w-screen">

                <div v-for="(event, index) in calendar[index].events" :key="index" class="flex space-x-5 ">
                   
                <div class="w-2/3 text-center  flex justify-center items-center py-2">&#x2022; {{ event.courseTitle }}</div>
                <div class="w-2/3 text-center flex justify-center items-center py-2">&#x2022; {{ event.Venue }}</div>


                  <br>
            
                </div>
                
              </div>


        
          



    </div> 
  </div>
    
    
    <Footer />
  
 </div>

</template>




<script>
import { BASE_URL } from '../../baseurl';

export default {
  data() {
    return {
      calendar:[],
      currentYear: new Date().getFullYear()
    }
    
  },

  mounted() {

axios.get(BASE_URL + '/displayCalendarTraining')
  .then(response => {
    this.calendar = response.data;
    console.log(this.calendar);



  })
  .catch(error => {
    console.log(error);
  });

  
}


}

AOS.init({startEvent: 'load',
          once : 'true,'});
AOS.refresh();



</script>