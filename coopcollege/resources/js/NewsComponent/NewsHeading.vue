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
  height: 70vh;
}
.imgsize{
    height: 500px;  
    object-fit: contain; 
}

</style>

<template>

<div class=" header w-screen bg-zinc-100 flex text-theme1">
   <div class=" w-screen flex flex-col justify-center items-center ">
    <p class="text-5xl" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="700"> {{ title }}</p>
    <p class="text-2xl xl:mb-20 " data-aos="fade-down" data-aos-duration="1000" data-aos-delay="800"> {{ description }}</p>
    <p class="xl:px-10 text-justify" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">{{ context }}</p>
   </div>
   <div class=" w-screen  flex justify-center items-center xl:mr-20 " data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="500">
     <img :src="image" alt="image" class="w-screen ">
   </div>

  </div>

</template>
