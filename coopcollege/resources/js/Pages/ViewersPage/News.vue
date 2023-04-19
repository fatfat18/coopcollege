<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import ResponsiveNavBar from '@/Components/ResponsiveNavBar.vue';
import Header from '@/Components/Header.vue';
import Newsheading from '@/NewsComponent/NewsHeading.vue';
import NewsCol from '@/NewsComponent/NewsCol.vue'
import NewsRow from '@/NewsComponent/NewsRow.vue'
import Footer from '@/Components/Footer.vue';


</script>

<style>

.newsbg{
  background: url('../../../asset/newsbg.png') no-repeat;
  background-size: cover;
  background-position: bottom;
 
}

</style>
<template>
  <Header />
 <ResponsiveNavBar />


 <div class="h-max w-screen flex flex-col justify-center">

    <div class="xl:h-screen w-screen newsbg flex flex-col justify-center items-center " data-aos="fade" data-aos-duration="1000">
         <p class="xl:text-6xl text-white" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">What's New?</p>
         <p class="xl:text-xl xl:mt-5 text-white text-center" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">Keep posted to see the latest posts of <br> <span class="text-theme2 text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]"> Co-operative College of the Philippines</span></p>
    </div>


<Newsheading title="SAMPLE TITLE" context="Sample Context Here" image="alt" />



<div class=" h-max bg-white justify-start items-center w-screen flex xl:py-10 xl:px-40 flex-wrap">

  <a href="/ViewPost" ><NewsCol data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" /></a> 
  <a href="/ViewPost" ><NewsCol data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" /></a> 
  <a href="/ViewPost" ><NewsCol data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" /></a> 
  <a href="/ViewPost" ><NewsCol data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" /></a> 
  <a href="/ViewPost" ><NewsCol data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" /></a> 
  <a href="/ViewPost" ><NewsCol data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" /></a> 
  <a href="/ViewPost" ><NewsCol data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" /></a> 
  <a href="/ViewPost" ><NewsCol data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" /></a> 
  <a href="/ViewPost" ><NewsCol data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" /></a> 


</div>





<!-- 

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
 -->



 </div>


 <Footer />
</template>




<script>
AOS.init({startEvent: 'load',
          once : 'true,'});
AOS.refresh();
</script>