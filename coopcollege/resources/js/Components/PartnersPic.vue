<script>


export default {
    props: {
  image: {
    type: String,
    //required: true,
  },
  name: {
    type: String,
    //required: true,
  },
},
}

</script>


<template>
      <div class="flex flex-col flex-wrap max-w-7xl bg-white xl:text-md overflow-y-hidden xl:space-x-2">
  
                <img :src="image" alt="Image" class="xl:ml-0 bg-center bg-cover xl:h-32 xl:w-60 h-12 w-24 ">
                <p class="text-theme1 text-l text-center">{{ name }}</p>
         
        </div>
</template>