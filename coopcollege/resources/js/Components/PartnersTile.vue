<script>


export default {
    props: {
  id: {
    type: Number,
    required: true,
  },
  name: {
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
.buttonview:hover {
    border: solid 2px rgb(0, 0, 43);
    background-color: white;
    color:rgb(0, 0, 43);
    transition: .5s;
}
.buttonedit:hover {
    border: solid 2px rgb(86, 154, 255);
    background-color: white;
    color:rgb(86, 154, 255);
    transition: .5s;
}

.buttondelete:hover {
    border: solid 2px red;
    background-color: white;
    color:red;
    transition: .5s;
}


</style>

<template>
      <div class="h-24 xl:h-32 max-w-7xl bg-white xl:px-8 xl:py-4 rounded-lg grid grid-cols-7 gap-4 max-h-30 xl:max-h-40 text-xs xl:text-md pr-4">
            <div class=" flex justify-center text-center items-center">
                {{ id }}
            </div>
            <div class=" flex justify-center text-center items-center"> 
                <img :src="image" alt="Image" class=" xl:h-16 xl:w-32 h-12 w-24">
            </div>
            <div class=" flex justify-center text-center items-center col-span-3">
                {{ name }}

            </div>
          
          <slot />
        </div>
</template>