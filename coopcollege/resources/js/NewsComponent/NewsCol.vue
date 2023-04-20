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
    width: 450px;
}
.card{
    
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

@media only screen and (max-device-width: 800px) {

.img {
  width: 350px;
}


}


</style>

<template>

    <div class="mx-2 xl:mx-0 img xl:px-5 my-5 xl:my-10 flex justify-center items-center flex-col drop-shadow-2xl ">
        <img :src="image" class="card hover:scale-125 transition duration-500 overflow-y-hidden img object-cover object-center " alt="">
        <p class="text-xs xl:text-md mt-4 text-theme1">
            {{ context  }}
        </p>
    </div>
  


</template>