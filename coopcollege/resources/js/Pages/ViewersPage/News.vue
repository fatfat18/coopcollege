<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import ResponsiveNavBar from '@/Components/ResponsiveNavBar.vue';
import Header from '@/Components/Header.vue';
import NewsHeading from '@/NewsComponent/NewsHeading.vue';
import NewsCol from '@/NewsComponent/NewsCol.vue'

import Footer from '@/Components/Footer.vue';


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";


library.add(faAngleLeft,faAngleRight)


</script>

<style>

.newsbg{
  background: url('../../../asset/newsbg.png') no-repeat;
  background-size: cover;
  background-position: bottom;
 
}
.clickable-div {
  cursor: pointer;
}

</style>
<template>
  <Header />
 <ResponsiveNavBar />


 <div class="h-max w-screen flex flex-col justify-center ">

    <div class="xl:h-screen py-80 xl:py-0 w-screen newsbg flex flex-col justify-center items-center " data-aos="fade" data-aos-duration="1000">
         <p class="xl:text-6xl text-3xl text-white" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1200">What's New?</p>
         <p class="xl:text-xl xl:mt-5 text-white text-center" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Keep posted to see the latest posts of <br> </p>
         <p class="text-theme2 xl:text-5xl text-3xl mx-2 text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]" data-aos="fade-up" data-aos-delay="1100" data-aos-duration="1000"> Co-operative College of the Philippines</p>
    </div>


      <NewsHeading 
      :title="this.title" 
      :description="this.description" 
      :context="this.context"
      :image="this.img" 
      class="clickable-div"   
      @click="navigateToPost(this.pid)"
      >
      </NewsHeading>

<div class="w-screen bg-theme2 h-4 xl:hidden flex"></div>

<div class=" h-max bg-zinc-200 justify-center items-center w-screen flex xl:py-10 xl:px-40 flex-wrap">

    <div v-for="(post, index) in paginatedPosts" :key="post.Postid" class="overflow-y-hidden  ">
     <NewsCol 
       :image="post.avatar.ImageUrl" 
       :context=sliceText(post.Context,200)
       data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"
       class="clickable-div text-md overflow-y-hidden  "   
      @click="navigateToPost(post.Postid)"
      
      />
     
    </div> 
   

</div>
      <div class="w-screen flex justify-center items-center xl:space-x-2 text-md bg-zinc-200">
        <button class="py-3 border-2 border-theme1 px-4 my-2 mx-2 rounded-lg hover:bg-theme1 hover:text-white transition duration-300 text-theme1 hover:-translate-x-2" :disabled="currentPage === 1" @click="currentPage--"><font-awesome-icon icon="fa-solid fa-angle-left " class="text-md "/> Previous</button>
        <button class="py-3 border-2 border-theme1 px-8 my-2 mx-2 rounded-lg hover:bg-theme1 hover:text-white transition duration-300 text-theme1 hover:translate-x-2" :disabled="currentPage === totalPages" @click="currentPage++">Next <font-awesome-icon icon="fa-solid fa-angle-right" class="text-md "/></button>
      </div>






 </div>


 <Footer />
</template>




<script>

import { BASE_URL } from '../../baseurl';

export default {
  data() {
    return {

      title:'',
      description:'',
      context:'',
      img:'',
      pid:'',
      posts:[],
      postsnohead:[],
      pageposts:[],
      currentPage: 1,
      perPage: 6,
      

    };
  },
  
  created() {
      this.fetchData();
  },
  computed: {
      totalPages() {
        return Math.ceil(this.pageposts.length / this.perPage);
      },
      paginatedPosts() {
        const startIndex = (this.currentPage - 1) * this.perPage;
        const endIndex = startIndex + this.perPage;
        return this.pageposts.slice(startIndex, endIndex);
      },
    },



  methods: {
    sliceText(text, limit) {
      if (text.length > limit) {
        return text.slice(0, 200) + ' ...';
      } else {
        return text;
      }
    },
    navigateToPost(Postid) {
    window.location.href = this.route('ViewPost', {Postid: Postid});
  },
  async fetchData() {
        try {
          const response = await axios.get(BASE_URL + '/paginateDisplayPost');
          this.heading = response.data.data[0];
          this.title = this.heading.newsTitle;
          this.description = this.heading.Description;
          this.context = this.heading.Context;
          this.img = this.heading.avatar.ImageUrl;
          this.pid = this.heading.Postid;
          this.pageposts = response.data.data.slice(1);
 
          
        } catch (error) {
          console.error(error);
        }
      },






  }
  
};


AOS.init({startEvent: 'load',
          once : 'true,'});
AOS.refresh();
</script>