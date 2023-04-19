<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import ResponsiveNavBar from '@/Components/ResponsiveNavBar.vue';
import Header from '@/Components/Header.vue';
import NewsHeading from '@/NewsComponent/NewsHeading.vue';
import NewsCol from '@/NewsComponent/NewsCol.vue'

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


 <div class="h-max w-screen flex flex-col justify-center ">

    <div class="xl:h-screen w-screen newsbg flex flex-col justify-center items-center " data-aos="fade" data-aos-duration="1000">
         <p class="xl:text-6xl text-white" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">What's New?</p>
         <p class="xl:text-xl xl:mt-5 text-white text-center" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">Keep posted to see the latest posts of <br> <span class="text-theme2 text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]"> Co-operative College of the Philippines</span></p>
    </div>


      <NewsHeading 
      :title="this.title" 
      :description="this.description" 
      :context="this.context" 
      :image="this.img"    
      >
      </NewsHeading>



<div class=" h-max bg-zinc-200 justify-center items-center w-screen flex xl:py-10 xl:px-40 flex-wrap">

    <div v-for="(post, index) in postsnohead" :key="post.Postid" class="overflow-y-hidden">
     <NewsCol 
       :image="post.avatar.ImageUrl" 
       :context="post.Context" 
       data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" />
     </div> 
   

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
    
      posts:[],
      postsnohead:[],
  
      

    };
  },
  created() {
    axios.get(BASE_URL + '/displayPost')
      .then(response => {
        this.posts = response.data;
        console.log(this.posts);

        this.heading = this.posts[0];
        this.postsnohead = this.posts.slice(1);
        this.title = this.heading.newsTitle;
        this.description = this.heading.Description;
        this.context = this.heading.Context;
        this.img = this.heading.avatar.ImageUrl;


        console.log(this.heading)
        console.log(this.postsnohead)
        
      
      })
      .catch(error => {
        console.log(error);
      });





   

  },
  
};


AOS.init({startEvent: 'load',
          once : 'true,'});
AOS.refresh();
</script>