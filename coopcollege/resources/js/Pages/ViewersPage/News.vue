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

    <div v-for="(post, index) in postsnohead" :key="post.Postid" class="overflow-y-hidden  ">
     <NewsCol 
       :image="post.avatar.ImageUrl" 
       :context=sliceText(post.Context,200)
       data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"
       class="clickable-div text-md "   
      @click="navigateToPost(post.Postid)"
      
      />
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
      pid:'',
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
        this.pid = this.heading.Postid;

        console.log(this.heading)
        console.log(this.postsnohead)
        
      
      })
      .catch(error => {
        console.log(error);
      });
   

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
  }
  
};


AOS.init({startEvent: 'load',
          once : 'true,'});
AOS.refresh();
</script>