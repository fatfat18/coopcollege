<script setup>
import { Head, Link } from '@inertiajs/vue3';
import AOS from 'aos'
import 'aos/dist/aos.css'
import ResponsiveNavBar from '@/Components/ResponsiveNavBar.vue'
import Header from '@/Components/Header.vue'

</script>

<template>
  <Header />
 <ResponsiveNavBar />


 <div class="h-screen w-screen flex justify-center items-center">

    <h1>
        SO MAO NING lEARN WITH US
    </h1>

 </div>

</template>




<script>
AOS.init({dataAosDuration:'2000',
            });
AOS.refresh();
</script>