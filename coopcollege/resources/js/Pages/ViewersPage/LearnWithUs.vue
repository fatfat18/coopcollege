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


 <div class="h-max w-screen flex flex-col justify-center items-center bg-theme1 overflow-y-hidden bg">

  <div class="h-24 w-screen max-w-7xl flex bg-theme2 justify-center items-center mt-10 xl:rounded-lg " data-aos="fade-up" data-aos-duration="1000" >
    <p class="xl:text-5xl text-2xl font-thin text-theme1" > Training Calendar {{ currentYear }}</p>
        </div>
         <div class="h-max w-screen max-w-7xl flex flex-col bg-white xl:mt-5 xl:my-0 my-10 py-4 px-2 gap-2 xl:rounded-3xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" >

            <CalendarMonth Month="Month" CourseTitle1="Course Title" Venue1="Venue" class="max-w-7xl rounded-3xl " />
            <CalendarMonth Month="January" CourseTitle1="&#x2022; Deepening our Co-operative Identity Through Education" CourseTitle2="&#x2022; Global Co-operative Executive Masterclass (Manchester, UK)" Venue1="&#x2022; Seda Centrio, CDO" Venue2="&#x2022; Manchester, United Kingdom" class="max-w-7xl rounded-3xl shadow-md" data-aos="zoom-in" data-aos-duration="1000" />
            <CalendarMonth Month="February" CourseTitle1="&#x2022; Financial Literacy: Usage of Cooperative Satutory Funds" Venue1="&#x2022; Visayas" class="max-w-7xl rounded-3xl shadow-md" data-aos="zoom-in" data-aos-duration="1000" />
            <CalendarMonth Month="March" CourseTitle1="&#x2022; Board & Management Relationship" CourseTitle2="&#x2022; Diversity and Inclusivity (GST)" Venue1="&#x2022; Luzon" Venue2="&#x2022; Virtual" class="max-w-7xl rounded-3xl shadow-md" data-aos="zoom-in" data-aos-duration="1000" />
            <CalendarMonth Month="April" CourseTitle1="&#x2022; Educational Forum" Venue1="&#x2022; Mindanao (CDO)" class="max-w-7xl rounded-3xl shadow-md" data-aos="zoom-in" data-aos-duration="1000" />
            <CalendarMonth Month="May" CourseTitle1="&#x2022; Effective Governance: Enhancing Board and Manangement Relations" CourseTitle2="&#x2022; Post-Graduate Certificate in Cooperative Management" Venue1="&#x2022; Visayas" Venue2="&#x2022; Virtual/F2F" class="max-w-7xl rounded-3xl shadow-md " data-aos="zoom-in" data-aos-duration="1000" />
            <CalendarMonth Month="June" CourseTitle1="&#x2022; Business Continuity Planning" Venue1="&#x2022; Luzon" class="max-w-7xl rounded-3xl shadow-md " data-aos="zoom-in" data-aos-duration="1000" />
            <CalendarMonth Month="July" CourseTitle1="&#x2022; Strategic Planning and Thinking" Venue1="&#x2022; Mindanao" class="max-w-7xl rounded-3xl shadow-md " data-aos="zoom-in" data-aos-duration="1000" />
            <CalendarMonth Month="August" CourseTitle1="&#x2022; Community Engagement through our CDF" CourseTitle2="&#x2022; Coop Financial Literacy & Management" Venue1="&#x2022; Visayas" Venue2="&#x2022; Luzon/Virtual" class="max-w-7xl rounded-3xl shadow-md " data-aos="zoom-in" data-aos-duration="1000" />
            <CalendarMonth Month="September" CourseTitle1="&#x2022; Cooperative Project Management" CourseTitle2="&#x2022; Human Capital Management in the Cooperatives" Venue1="&#x2022; Virtual" Venue2="&#x2022; Mindanao" class="max-w-7xl rounded-3xl shadow-md " data-aos="zoom-in" data-aos-duration="1000" />
            <CalendarMonth Month="October" CourseTitle1="&#x2022; Our Cooperative Identity, Culture & Sustainable Development Goals" Venue1="&#x2022; Luzon" class="max-w-7xl rounded-3xl shadow-md " data-aos="zoom-in" data-aos-duration="1000" />
            <CalendarMonth Month="November" CourseTitle1="&#x2022; Digital Marketing Strategy for Cooperative Managers & Entrepreneurs" Venue1="&#x2022; Virtual" class="max-w-7xl rounded-3xl shadow-md " data-aos="zoom-in" data-aos-duration="1000" />
            <CalendarMonth Month="December" CourseTitle1="&#x2022; Economic Forum for year 2024" Venue1="&#x2022; Visayas" class="max-w-7xl rounded-3xl shadow-md " data-aos="zoom-in" data-aos-duration="1000" />
  
          </div>

          
    <Footer />
  
 </div>

</template>




<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
AOS.init({startEvent: 'load',
          once : 'true,'});
AOS.refresh();
</script>