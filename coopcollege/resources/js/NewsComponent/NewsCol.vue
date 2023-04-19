<script>

export default {
    props: {
    context: {
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


<template>

    <div class=" xl:w-80 h-max xl:px-5 xl:my-10">
        <img src="../../asset/newsheading.jpg" class="w-full object-cover object-center" alt="">
        <p class=" text-xs xl:text-md text-justify mt-4 text-theme1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
    </div>
  


</template>