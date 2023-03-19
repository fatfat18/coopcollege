<script setup>

import AOS from 'aos'
import 'aos/dist/aos.css'

import Home from '@/Pages/ViewersPage/Home.vue';


</script>

<template>
        <Home />


</template>




<script>
AOS.init({startEvent: 'load',
          once : 'true,'});
AOS.refresh();
</script>