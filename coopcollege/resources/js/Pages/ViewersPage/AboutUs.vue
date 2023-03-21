<script setup>
import { Head, Link } from '@inertiajs/vue3';
import AOS from 'aos'
import 'aos/dist/aos.css'
import ResponsiveNavBar from '@/Components/ResponsiveNavBar.vue'
import Header from '@/Components/Header.vue'
import ProfileCard from '@/Components/ProfileCard.vue'

</script>


<style>
.bg{
background: rgb(0,0,51);
background: linear-gradient(233deg, rgba(0,0,51,1) 60%, rgba(255,204,0,1) 100%);
}

</style>
<template>
  <Header />
 <ResponsiveNavBar />

<div class="w-screen flex flex-col justify-center items-center bg ">


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
      <div class="w-screen max-w-7xl h-max xl:rounded-3xl py-10 xl:px-40 bg-white gap-10 flex flex-wrap px-10">

        <img src="../../../asset/partners/1.png" alt="" class="w-max xl:h-24 h-12" data-aos="zoom-in" data-aos-duration="1500">
        <img src="../../../asset/partners/2.png" alt="" class="w-max xl:h-24 h-12" data-aos="zoom-in" data-aos-duration="1500">
        <img src="../../../asset/partners/3.png" alt="" class="w-max xl:h-24 h-12" data-aos="zoom-in" data-aos-duration="1500">
        <img src="../../../asset/partners/4.png" alt="" class="w-max xl:h-24 h-12" data-aos="zoom-in" data-aos-duration="1500">
        <img src="../../../asset/partners/5.png" alt="" class="w-max xl:h-24 h-12" data-aos="zoom-in" data-aos-duration="1500">
        <img src="../../../asset/partners/6.png" alt="" class="w-max xl:h-24 h-12" data-aos="zoom-in" data-aos-duration="1500">
        <img src="../../../asset/partners/7.png" alt="" class="w-max xl:h-24 h-12" data-aos="zoom-in" data-aos-duration="1500">
        <img src="../../../asset/partners/8.png" alt="" class="w-max xl:h-24 h-12" data-aos="zoom-in" data-aos-duration="1500">
        <img src="../../../asset/partners/9.png" alt="" class="w-max xl:h-24 h-12" data-aos="zoom-in" data-aos-duration="1500">
        <img src="../../../asset/partners/10.png" alt="" class="w-max xl:h-24 h-12" data-aos="zoom-in" data-aos-duration="1500">
        <img src="../../../asset/partners/11.png" alt="" class="w-max xl:h-24 h-12" data-aos="zoom-in" data-aos-duration="1500">
        <img src="../../../asset/partners/12.png" alt="" class="w-max xl:h-24 h-12" data-aos="zoom-in" data-aos-duration="1500">
        <img src="../../../asset/partners/13.png" alt="" class="w-max xl:h-24 h-12" data-aos="zoom-in" data-aos-duration="1500">
        <img src="../../../asset/partners/14.png" alt="" class="w-max xl:h-24 h-12" data-aos="zoom-in" data-aos-duration="1500">
       



   
      </div>
  </div>
  
</div>
</template>




<script>
AOS.init({startEvent: 'load',
          once : 'true,'});
AOS.refresh();
</script>
