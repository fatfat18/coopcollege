<script setup>
//Template ni sya sa tanan post or mao ni sya ang POST VIEWER sa mga viewers end.
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '@/Components/Header.vue';
import ResponsiveNavBar from '@/Components/ResponsiveNavBar.vue';
import ShowImgModal from '@/Components/ShowImgModal.vue';

</script>
<style>
.clickable-div {
  cursor: pointer;
}
.test{
  height: 500px;
}

</style>
<template>

<Header />
<ResponsiveNavBar />

<div class="w-screen h-max bg-zinc-200  flex justify-center items-center ">

    <div class="h-max max-w-7xl w-screen  flex xl:flex-row flex-col">
        
            <div class="h-max xl:w-1/2  flex-col min-h-max flex justify-center items-center "  >
                <img :src="this.img" alt="" id="dispimg" @click="showimgmod()"  class=" cursor-pointer transition duration-300 w-max xl:h-96 object-cover my-10  " data-aos="fade-down"  data-aos-duration="1000" >
                <ShowImgModal :show="showimgmodal" @close="showimgmodal = false">
                  <img :src="this.img" alt="" id="dispimg"  class="transition duration-300 w-max xl:w-full test scale-125 object-contain  my-10 " data-aos="fade-down"  data-aos-duration="1000" >                       
                </ShowImgModal>
                
                <div class="flex flex-wrap justify-center items-center" data-aos="fade" data-aos-delay="500" data-aos-duration="1000">
                    <div v-for="imageUrl in imagePreviewUrlholder" :key="imageUrl" >
                                  <img @click="changeImage(imageUrl)" :src="imageUrl" class="transition duration-300 hover:scale-110 clickable-div h-32 w-40 object-cover my-5 mx-5">
                    </div>
              
                </div>            

            </div>
        
            <div class="h-max xl:w-1/2  flex flex-col text-center  pt-10 px-10">

                <h1 class="text-5xl text-theme1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]" data-aos="zoom-out" data-aos-duration="1000"> {{ title }}</h1><br>
                <h1 class="text-2xl text-theme2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] " data-aos="zoom-out" data-aos-duration="1000"> {{ description }}</h1><br>

                <p class="text-slate-900 text-xs xl:text-lg flex items-center justify-center text-justify " data-aos="zoom-out" data-aos-duration="1000">
                    {{ context }}
                </p>


                <div class="mt-10 w-full  overflow-y-hidden h-full  flex justify-center  items-center"><img src="../../asset/logo.png" alt="" class="w-32" data-aos="zoom-out" data-aos-duration="1000"></div>
            </div>
    </div>
















</div>


</template>
<script>
import { BASE_URL } from '../baseurl';


export default {


data() {
  return {
 
    items: [],
    imagePreviewUrl:[],
    imagePreviewUrlholder:[],
    title:'',
    description:'',
    context:'',
    img:'',
    showimgmodal:false,

  }
},

created() {

    axios.get(BASE_URL + '/displayPost')
      .then(response => {
        this.items = response.data;
        console.log(this.items);

            const path = window.location.pathname;
        // Extract specific data from path

        const pathSegments = path.split('/');
        this.itemId = pathSegments[pathSegments.length - 1];
        console.log(this.itemId);
        
        const intNum = parseInt(this.itemId); // convert to an integer
        console.log(intNum);

        //all object from get
        this.items = response.data;
        console.log(this.items);

        for (let x = 0; x < this.items.length; x++) {
            const y = this.items[x];
            if( y.Postid == this.itemId){
              console.log(y);
              this.items = y;
              console.log(this.items);
              
            }
          
            }
   
        this.title = this.items.newsTitle;
        this.description = this.items.Description;
        this.context = this.items.Context;
        this.img = this.items.avatar.ImageUrl;
        for (let i = 0 ; i < this.items.image.length ; i++){
            this.imagePreviewUrlholder[i] = this.items.image[i].ImageUrl;
        }

        console.log(this.imagePreviewUrlholder)
   




      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    changeImage(pushedimage) {

    this.img = pushedimage;
},
showimgmod() {
    this.showimgmodal= true;
   
    
  },
  }



}









AOS.init({startEvent: 'load',
          once : 'true,'});
AOS.refresh();
</script>