<script>


export default {
    props: {
    title: {
      type: String,
      required: true,
    },
    context: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      //required: true,
    },
  },

}


</script>


<style>
.header {
  height: max-content;
}
.imgsize{
    height: 500px;  
    object-fit: contain; 
}
.card{
    
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

@media only screen and (max-device-width: 800px) {

   .header {
    height: 100%;
   }


}
</style>

<template>

<div class="z-1 header w-full overflow-y-hidden h-full justify-center items-center xl:h-screen bg-white flex text-theme1 flex-col-reverse xl:flex-row">


   <div class="z-10 shadow-2xl w-3/4 xl:mx-20 bg-zinc-200 overflow-y-hidden xl:py-24 xl:rounded-lg  px-10 xl:px-0 h-full xl:h-full flex flex-col justify-center items-center ">
        <p class="xl:text-3xl text-l text-center" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="700"> {{ title }}</p>
        <p class="xl:text-l text-base xl:mb-10 mb-0 text-theme2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] " data-aos="fade-down" data-aos-duration="1000" data-aos-delay="800"> {{ description }}</p>
        <p class="xl:px-10 text-justify xl:text-md text-sm my-10" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">{{ context }}</p>
   </div>

   <div class="overflow-y-hidden w-screen  xl:h-full h-max py-20 flex justify-center items-center xl:mr-20 " data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="500">
     <img :src="image" alt="image" class="xl:w-screen rounded-lg hover:scale-110 transition duration-500  ">
   </div>

</div>

</template>
