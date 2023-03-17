<script setup>
import { Head, Link } from '@inertiajs/vue3';
import AOS from 'aos'
import 'aos/dist/aos.css'
import  ResponsiveNavBar from '@/Components/ResponsiveNavBar.vue';
import Header from '@/Components/Header.vue';
import Home from '@/Pages/ViewersPage/Home.vue';


</script>

<template>
    <Header />
      <ResponsiveNavBar />
        <Home />









</template>




<script>
AOS.init({startEvent: 'load',
          once : 'true,'});
AOS.refresh();
</script>