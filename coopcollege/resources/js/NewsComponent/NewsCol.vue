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

<style>
.img{
    height:300px;
    width: 400px;
}
</style>

<template>

    <div class="mx-2 xl:mx-0 img xl:px-5 xl:my-10 flex justify-center items-center flex-col ">
        <img :src="image" class="overflow-y-hidden img object-cover object-center " alt="">
        <p class=" text-xs xl:text-md text-center mt-4 text-theme1">
            {{ context  }}
        </p>
    </div>
  


</template>