<script setup>
import { Head, Link } from '@inertiajs/vue3';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ResponsiveNavBar from '@/Components/ResponsiveNavBar.vue';
import Header from '@/Components/Header.vue';
import CalendarMonth from '@/Components/CalendarMonth.vue';

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

  <div class="h-24 w-screen max-w-7xl flex bg-theme2 justify-center items-center mt-10 xl:rounded-full " data-aos="fade-up" data-aos-duration="1000" >
    <p class="xl:text-5xl text-2xl font-thin text-theme1" > Training Calendar 2023</p>
        </div>
         <div class="h-max w-screen max-w-7xl flex flex-col bg-white xL:mt-20  my-10 py-4 px-2 gap-2 xl:rounded-3xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" >

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

          <div class="max-w-7xl h-max pt-4 w-screen bg-theme2 rounded-2xl text-theme1 overflow-y-hidden xl:px-8 mb-20">
            <p class="text-theme1 xl:text-4xl text-2xl" data-aos="fade-right" data-aos-duration="1000">What We Offer :</p>
            <div class="bg-zinc-200 h-max w-1/1 px-8 xl:px-0 my-4 rounded-2xl flex justify-center xl:flex-row flex-col items-center xl:gap-10 xl:text-xl text-sm" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500">
              
              <div class=" xl:w-1/2 xl:px-8 py-8 h-max pb-4 xl:pb-8 ">
                    <div class="">
                      <h1 class="xl:text-3xl text-xl italic">Executive Courses (E)</h1>
                    
                      &#x2022; Post - Graduate Certificate in Cooperative Management (PGC CM)<br>
                      &#x2022; Global Co-operative Executives Masterclass<br>
                      &#x2022; Strategic Planning and Thinking Management<br>
                      &#x2022; Human Capital Management<br>
                      &#x2022; Cooperative Digital Transformation<br>
                    </div>
                    <br>
                    <div>
                      <h1 class="xl:text-3xl text-xl italic">Leadership Courses (L)</h1>
                    
                      &#x2022; Cooperative Leadership Program<br>
                      &#x2022; Cooperative Management Training<br>
                      &#x2022; Raising Cooperative Leaders<br>
                      &#x2022; Advcanced Cooperative Business Management<br>
                   
                    </div>

                
              </div>
              <div class=" xl:w-1/2 xl:px-8 py-8 pt-0 h-max xl:pt-8">
                <div>
                      <h1 class="xl:text-3xl text-xl italic">Risk Manangement Courses (R)</h1>
                    
                      &#x2022; Business Continuity Planning<br>
                      &#x2022; Financial Literacy and Management<br>
                      &#x2022; Environmental, Social and Corporate Governance (ESG)<br>
                      &#x2022; Corporate Governance and Enterprise Risk Management (ERM)<br>
                   
                    </div>
                    <br>
                    <div>
                      <h1 class="xl:text-3xl text-xl italic">Others (O)</h1>
                    
                      &#x2022; Coommunity Engagement through our Community Development Fund (CDF): A Collective Action Initiative<br>
                      &#x2022; Digital Marketing Strategy for Managers and Entrepreneurs<br>
                      &#x2022; Diversity and Inclusivity / Social Concerns<br>
                      &#x2022; The Cooperative Culture and Sustainable Development Goals<br>
                      &#x2022; Customized E-Learning<br>
                      &#x2022; Customized Face-to-Face Programs<br>
                   
                    </div>





            

              </div>

            </div>

          </div>
  
 </div>

</template>




<script>
AOS.init({startEvent: 'load',
          once : 'true,'});
AOS.refresh();
</script>