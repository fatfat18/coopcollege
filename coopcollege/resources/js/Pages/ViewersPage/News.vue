<script setup>
import { Head, Link } from '@inertiajs/vue3';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ResponsiveNavBar from '@/Components/ResponsiveNavBar.vue';
import Header from '@/Components/Header.vue';
import Newsheading from '@/NewsComponent/NewsHeading.vue';
import NewsCol from '@/NewsComponent/NewsCol.vue'
import NewsRow from '@/NewsComponent/NewsRow.vue'
import Footer from '@/Components/Footer.vue';


</script>

<template>
  <Header />
 <ResponsiveNavBar />


 <div class="h-max w-screen flex flex-col justify-center items-center mt-8">

  <h1 class=" text-3xl xl:text-8xl mb-8 text-theme1" data-aos="zoom-in" data-aos-duration="1000"> WHAT'S NEW?</h1>

    <div class="h-max" data-aos="fade-up" data-aos-duration="1000">

      <Newsheading />

    </div>  
  

    <div class="h-max w-screen bg-theme1 flex xl:flex-row flex-col  overflow-y-hidden">



      <a href="/ViewPost" class="w-full"><NewsCol data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" /></a> 
      <a href="/ViewPost" class="w-full"><NewsCol data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000" /></a>
      <a href="/ViewPost" class="w-full"> <NewsCol data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" /></a>
   

    </div>

    <div class="h-max w-screen bg-theme2 flex justify-center items-center flex-col py-10">

    <a href="/ViewPost"><NewsRow data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300" /></a>
    <a href="/ViewPost"><NewsRow data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400" /></a>
    <a href="/ViewPost"><NewsRow data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500"/></a>



    </div>


    <Footer />


    

 </div>

</template>




<script>

AOS.init({startEvent: 'load',
          once : 'true,'});
AOS.refresh();
</script>