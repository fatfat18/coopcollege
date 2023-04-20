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

@media only screen and (max-device-width: 800px) {

   .header {
    height: 100%;
   }


}
</style>

<template>

<div class=" header w-full overflow-y-hidden h-full justify-center items-center xl:h-screen bg-zinc-100 flex text-theme1 flex-col-reverse xl:flex-row">


   <div class=" w-screen overflow-y-hidden xl:py-0  px-10 xl:px-0 h-full xl:h-full flex flex-col justify-center items-center ">
        <p class="xl:text-5xl text-3xl text-center" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="700"> {{ title }}</p>
        <p class="xl:text-xl text-md xl:mb-10 mb-0 " data-aos="fade-down" data-aos-duration="1000" data-aos-delay="800"> {{ description }}</p>
        <p class="xl:px-10 text-justify xl:text-md text-sm my-10" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">{{ context }}</p>
   </div>

   <div class="overflow-y-hidden w-screen  xl:h-full h-max py-20 flex justify-center items-center xl:mr-20 " data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="500">
     <img :src="image" alt="image" class="xl:w-screen ">
   </div>

</div>

</template>
