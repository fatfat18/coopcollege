<script>


export default {
    props: {
  image: {
    type: String,
    //required: true,
  },
},
}

</script>


<template>
      <div class="flex flex-wrap max-w-7xl bg-white  rounded-lg  xl:text-md overflow-y-hidden xl:space-x-2">
  
                <img :src="image" alt="Image" class="xl:ml-0  bg-center bg-contain xl:h-32 xl:w-60  h-12 w-24 ">
         
        </div>
</template>