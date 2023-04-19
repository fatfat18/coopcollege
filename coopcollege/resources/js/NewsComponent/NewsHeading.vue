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

</style>
<template>

<div class=" header  w-screen bg-white flex text-theme1">
   <div class=" w-screen flex flex-col justify-center items-center ">
    <p class="text-2xl mb-20"> {{ title }}</p>
    {{ context }}
   </div>
   <div class=" w-screen flex justify-center items-center">
    {{image}}
   </div>

  </div>

</template>