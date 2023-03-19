<script setup>
import { Head, Link } from '@inertiajs/vue3';
import AOS from 'aos'
import 'aos/dist/aos.css'
import ResponsiveNavBar from '@/Components/ResponsiveNavBar.vue'
import Header from '@/Components/Header.vue'
import ProfileCard from '@/Components/ProfileCard.vue'

</script>

<template>
  <Header />
 <ResponsiveNavBar />

<div class="w-screen flex flex-col justify-center items-center bg-zinc-800">


<div class="overflow-y-hidden pt-20  w-3/4 xl:pl-20">
  <p class="text-white text-4xl xl:text-5xl">Who are we?</p>
  <p class="text-white text-3xl xl:text-3xl xl:pt-4">BOARD OF TRUSTEES</p>

</div>

  <div class="w-screen max-w-7xl h-max  pt-10 flex justify-center gap-10 flex-wrap overflow-y-hidden">

  <ProfileCard data-aos="fade-right" data-aos-duration="500"/>
  <ProfileCard data-aos="fade-right" data-aos-duration="600"/>
  <ProfileCard data-aos="fade-right" data-aos-duration="700"/>
  <ProfileCard data-aos="fade-right" data-aos-duration="800"/>
  <ProfileCard data-aos="fade-right" data-aos-duration="500"/>
  <ProfileCard data-aos="fade-right" data-aos-duration="600"/>
  <ProfileCard data-aos="fade-right" data-aos-duration="700"/>
  <ProfileCard data-aos="fade-right" data-aos-duration="800"/>
  <ProfileCard data-aos="fade-right" data-aos-duration="500"/>
  <ProfileCard data-aos="fade-right" data-aos-duration="600"/>
  <ProfileCard data-aos="fade-right" data-aos-duration="700"/>
  <ProfileCard data-aos="fade-right" data-aos-duration="800"/>
  <ProfileCard data-aos="fade-right" data-aos-duration="500"/>

  </div>

  <div class="max-w-7xl mt-20">
      <h1 class=" text-xl xl:text-3xl text-white mb-4 ml-8">Our Partners</h1>
      <div class="w-screen max-w-7xl h-screen bg-white xl:rounded-3xl px-20 py-10 overflow-y-hidden flex justify-center item-center">
   
      </div>
  </div>
  
</div>
</template>




<script>
AOS.init({startEvent: 'load',
          once : 'true,'});
AOS.refresh();
</script>
