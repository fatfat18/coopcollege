<script setup>
import { Head, Link } from '@inertiajs/vue3';
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../../../css/timeline.css'
import ResponsiveNavBar from '@/Components/ResponsiveNavBar.vue'
import Header from '@/Components/Header.vue'
import ProfileCard from '@/Components/ProfileCard.vue'
import Footer from '@/Components/Footer.vue';




</script>


<style>
.bg{
background: rgb(0,0,51);
background: linear-gradient(233deg, rgba(0,0,51,1) 32%, rgba(255,204,0,1) 100%);
}


#typewriter {
    color: white;
    font-weight: bold;
    }


    #cursor {
        color: rgb(255, 255, 255);
        animation: blink .5s linear infinite;
        font-size:clamp(1rem,2.5vw,2rem);
    }


    @keyframes blink {
    
        0% {
            opacity: 100%;
        }
        50% {
            opacity: 0%;
        }
    }

</style>
<template>
  <Header />
 <ResponsiveNavBar />

<div class="w-screen flex flex-col justify-center items-center bg ">


<div class="overflow-y-hidden pt-20  w-3/4 xl:pl-20">
  <p class="text-white text-4xl xl:text-5xl">Who are we?</p><br><br>

<section class="flex flex-col justify-center items-center text-justify">
  
  <p class="text-white xl:text-xl ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span ref="typewriter"  class="text-xl xl:text-2xl"></span><span id="cursor">|</span></p>


</section>





  

</div>
<p class="text-white text-3xl xl:text-5xl xl:pt-20">Governance</p>

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
  

  <div class="max-w-7xl h-max pt-4 w-screen bg-theme2 rounded-2xl text-theme1 overflow-y-hidden xl:px-8 mb-10">
    <p class="text-theme1 text-4xl px-4 " data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">Our Focus Areas: <p class="text-2xl px-4" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">(1) Risk Management</p> <p class="text-2xl px-4" data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000">(2) Financial Literacy</p> <p class="text-2xl px-4" data-aos="fade-left" data-aos-delay="800" data-aos-duration="1000">(3) Executive Management</p> <p class="mb-10 text-2xl px-4" data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000">(4) Leadership Management and Development</p></p>
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

  <div class="h-max w-screen">



    <header class="xl:mt-40 mt-20 flex flex-col">
      <h1 class="text-white mb-20 text-2xl xl:text-7xl">OUR HISTORY</h1>
    <div class="w-screen flex justify-center items-center"><br><img src="../../../asset/timeline/climbs_logo_edited_400x400.png" alt="" class="w-32" data-aos="fade-up" data-aos-duration="1000" /></div>
</header>

<ul class="timeline">
  <!-- Item 1 -->
  <li>
    <div class="direction-r" >
      <div class="flag-wrapper overflow-y-hidden">
        <span class="hexa"></span>
        <span class="flag"></span>
        <span class="time-wrapper" data-aos="fade-right" data-aos-duration="1500"><span class="time">2011</span></span>
      </div>
      <div class="desc" data-aos="fade-left" data-aos-duration="1000">Inauguration of the CLIMBS Institute for Financial Literacy (CIFL) in November</div>
    </div>
  </li>

  <!-- Item 2 -->
  <li>
    <div class="direction-l" >
      <div class="flag-wrapper overflow-y-hidden">
        <span class="hexa"></span>
        <span class="flag"></span>
        <span class="time-wrapper" data-aos="fade-left" data-aos-duration="1500"><span class="time">2012</span></span>
      </div>
      <div class="desc" data-aos="fade-right" data-aos-duration="1000">Partner Co-ops: 20 Total ITF: PhP 7.95 M</div>
    </div>
  </li>

  <!-- Item 3 -->
  <li>
    <div class="direction-r" >
      <div class="flag-wrapper overflow-y-hidden">
        <span class="hexa"></span>
        <span class="flag"></span>
        <span class="time-wrapper" data-aos="fade-right" data-aos-duration="1500"><span class="time">2013</span></span>
      </div>
      <div class="desc" data-aos="fade-left" data-aos-duration="1000">Partner Co-ops: 36</div>
    </div>
  </li>

  <!-- Item 4 -->
  <li>
    <div class="direction-l" >
      <div class="flag-wrapper overflow-y-hidden">
        <span class="hexa"></span>
        <span class="flag"></span>
        <span class="time-wrapper" data-aos="fade-left" data-aos-duration="1500"><span class="time">2014</span></span>
      </div>
      <div class="desc" data-aos="fade-right" data-aos-duration="1000">Total Partner Co-ops: 61</div>
    </div>
  </li>

  <!-- Item 5 -->
  <li>
    <div class="direction-r" >
      <div class="flag-wrapper overflow-y-hidden">
        <span class="hexa"></span>
        <span class="flag"></span>
        <span class="time-wrapper" data-aos="fade-right" data-aos-duration="1500"><span class="time">2015</span></span>
      </div>
      <div class="desc" data-aos="fade-left" data-aos-duration="1000">Total Partner Co-ops: 70</div>
    </div>
  </li>

  <!-- Item 6 -->
  <li>
    <div class="direction-l" >
      <div class="flag-wrapper overflow-y-hidden">
        <span class="hexa"></span>
        <span class="flag"></span>
        <span class="time-wrapper" data-aos="fade-left" data-aos-duration="1500"><span class="time">2016</span></span>
      </div>
      <div class="desc" data-aos="fade-right" data-aos-duration="1000">Total Partner Co-ops: 83</div>
    </div>
  </li>

  <!-- Item 7 -->
  <li>
    <div class="direction-r" >
      <div class="flag-wrapper overflow-y-hidden">
        <span class="hexa"></span>
        <span class="flag"></span>
        <span class="time-wrapper" data-aos="fade-right" data-aos-duration="1500"><span class="time">2017</span></span>
      </div>
      <div class="desc" data-aos="fade-left" data-aos-duration="1000">Total Partner Co-ops: 116 <br>Total ITF: PhP 30.56 M</div>
      <div class="desc" data-aos="fade-left" data-aos-duration="1000"><img src=".././../../asset/timeline/2017.png" alt=""></div>
      <div class="desc" data-aos="fade-left" data-aos-duration="1000">CIFL was presented in the session “Cooperatives and the Future” in the International Cooperative Alliance (ICA) Global Conference and General Assembly in Malaysia as a sustainable model for continuous education for cooperative managers and next-generation leaders. Which birthed the global globalPartnership</div>
    </div>
  </li>

  <!-- Item 8 -->
  <li>
    <div class="direction-l">
      <div class="flag-wrapper overflow-y-hidden">
        <span class="hexa"></span>
        <span class="flag"></span>
        <span class="time-wrapper" data-aos="fade-left" data-aos-duration="1500"><span class="time">2018</span></span>
      </div>
      <div class="desc"  data-aos="fade-right" data-aos-duration="1000">Total Partner Co-ops: 130.</div>
      <div class="desc flex justify-center items-center"  data-aos="fade-right" data-aos-duration="1000"><img src="../../../asset/timeline/climbs-logo.jpg" alt=""></div>
    </div>
  </li>

  <!-- Item 9 -->
  <li>
    <div class="direction-r">
      <div class="flag-wrapper overflow-y-hidden">
        <span class="hexa"></span>
        <span class="flag"></span>
        <span class="time-wrapper" data-aos="fade-right" data-aos-duration="1500"><span class="time">2019</span></span>
      </div>
      <div class="desc"  data-aos="fade-left" data-aos-duration="1000">1st Global Cooperative Executive Masterclass held in Manila</div>
      <div class="desc flex justify-center items-center"  data-aos="fade-left" data-aos-duration="1000"><img src="../../../asset/timeline/2019.png" alt=""></div>
      <div class="desc"  data-aos="fade-left" data-aos-duration="1000">Total Partner Co-ops: 134 <br>Total ITF: PhP 40.46 M</div>
      <div class="desc"  data-aos="fade-left" data-aos-duration="1000">CIM was presented during the Centenary Celebration of the Cooperative College in United Kingdom for the theme: “Cooperative Education Across the World” and “...and Now, the Future” as to how cooperative cooperative education can address challenges that we face, to change the world and transforming communities communities and changing lives.</div>
    </div>
  </li>

  <!-- Item 10 -->
  <li>
    <div class="direction-l">
      <div class="flag-wrapper overflow-y-hidden">
        <span class="hexa"></span>
        <span class="flag"></span>
        <span class="time-wrapper" data-aos="fade-left" data-aos-duration="1500"><span class="time">2020</span></span>
      </div>
      <div class="desc italic"  data-aos="fade-right" data-aos-duration="1000">1,400+ participants: 795 coops nationwide 20 Virtual Training Conducted</div>
      <div class="desc"  data-aos="fade-right" data-aos-duration="1000">Total Partner Co-ops: 134</div>
      <div class="desc"  data-aos="fade-right" data-aos-duration="1000">&#x2022; The Sole Training Provider of National Federation of Primary Cooperatives in the Philippines (NaFeCOOP) <br><br>
        &#x2022; Will not collect Training Fund.CETF will be for NaFeCOOP.<br><br>
         
         ** CDA Memo Circular 2019 - 08</div>
    </div>
  </li>


   <!-- Item 11 -->
   <li>
    <div class="direction-r" >
      <div class="flag-wrapper overflow-y-hidden">
        <span class="hexa"></span>
        <span class="flag"></span>
        <span class="time-wrapper" data-aos="fade-right" data-aos-duration="1500"><span class="time">2021</span></span>
      </div>
      <div class="desc" data-aos="fade-left" data-aos-duration="1000">1st Global Cooperative Executive Masterclass held in Manila</div>
      <div class="desc" data-aos="fade-left" data-aos-duration="1000">&#x2022; The installation of CLIMBS Corner at the Rochdale Pioneers Museum at Rochdale, United Kingdom <br> <span class="text-xs italic">--- the cradle of Cooperative Education</span></div>
      <div class="desc flex justify-center items-center" data-aos="fade-left" data-aos-duration="1000"><img src="../../../asset/timeline/2021.png" alt=""></div>
      <div class="desc" data-aos="fade-left" data-aos-duration="1000"><span class="text-sm italic">164+ participants: 885 coops nationwide</span> <br>
20 Virtual Training Conducted

1st Post Graduate Certificate in Cooperative Management in partnership with Asian (AIM). This led to the cementing of partnership and creation of the Cooperative College of the Philippines</div>
    </div>
  </li>

  <!-- Item 12 -->
  <li>
    <div class="direction-l" >
      <div class="flag-wrapper overflow-y-hidden">
        <span class="hexa"></span>
        <span class="flag"></span>
        <span class="time-wrapper" data-aos="fade-left" data-aos-duration="1500"><span class="time">2022</span></span>
      </div>
      <div class="desc italic text-bold" data-aos="fade-right" data-aos-duration="1000">Total Partner Co-ops: 132<br>Total ITF: PhP 50.088 M</div>
      <div class="desc" data-aos="fade-right" data-aos-duration="1000"><h1 class="text-xl" >&#x2022; Strategic Planning Session for Cooperative College of the Philippines </h1> <br>
        <span class="text-xs italic">&#x2022; with Facilitator and Consultant Dr. Jose Romeo Nereus “Neric” Acosta </span><br><br>
      <span class="text-xs italic">&#x2022; June 16, 2022</span>
       </div>

       <div class="desc" data-aos="fade-right" data-aos-duration="1000"><h1 class="text-xl">&#x2022; Historic Signing of Partnership agreement between the Co-operative College UK, CLIMBS Life and General Insurance Cooperative and recently established Cooperative College of the Philippines </h1> <br>
        <span class="text-xs italic">&#x2022; Silken Al-Andalus Palace, Sevilla, Spain </span><br><br>
      <span class="text-xs italic">&#x2022; June 19, 2022</span>
       </div>

       <div class="desc" data-aos="fade-right" data-aos-duration="1000"><h1 class="text-xl">&#x2022; Historic Signing of Partnership agreement between the Co-operative College UK, CLIMBS Life and General Insurance Cooperative and recently established Cooperative College of the Philippines </h1> <br>
      <span class="text-xs italic">&#x2022; July 7, 2022</span>
       </div>


    </div>

    
  
  </li>
  <div class="w-full h-max overflow-y-hidden flex justify-center items-center text-center pt-8 text-5xl my-10">PRESENT</div>









</ul>

<Footer />

   
    

  </div>
  
</div>
</template>




<script>
export default {
  data() {
    return {
      phrases: ["We are the sole-training needs provider of the National Federation of Cooperative Primaries of the Philippines (NaFeCOOP). We Strategically pivoted from CLIMBS Institute for Financial Literacy (CIFL) to CLIMBS Institute of Management (CIM), and now, the Co-operative College of the Philippines (Co-op College PH) to further cooperative education both locally and globally, embodies the cooperative values and principles, and upgrades its educational platforms."],
      sleepTime: 30,
      curPhraseIndex: 0,
    };
  },
  mounted() {
    this.writeLoop();
  },
  methods: {
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async writeLoop() {
      while (true) {
        let curWord = this.phrases[this.curPhraseIndex];

        for (let i = 0; i < curWord.length; i++) {
          this.$refs.typewriter.textContent = curWord.substring(0, i + 1);
          await this.sleep(this.sleepTime);
        }

        await this.sleep(this.sleepTime * 9999);
      

        
      }
    },
  },
};


AOS.init({startEvent: 'load',
          once : 'true,'});
AOS.refresh();


</script>
