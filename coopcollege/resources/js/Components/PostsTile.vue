<script >


export default {
    props: {

  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  context: {
    type: String,
    required: true,
  },
  date_created: {
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
.test{
  text-overflow: ellipsis;
  max-width: max-content;
}


</style>

<template>
      <div class="h-24 xl:h-32 max-w-7xl bg-white xl:px-8 xl:py-4 rounded-lg grid grid-cols-9 xl:gap-2 max-h-30 xl:max-h-40 text-[12px] xl:text-md pr-2 pl-2">

            <div class=" flex justify-center text-center items-center col-span-1"> 
       
                <img :src="image" alt="Images" class=" xl:h-16 xl:w-32 h-12 w-24 object-contain object-top">
            
            </div>
            <div class=" flex justify-center text-center items-center col-span-1">
                {{ title }}

            </div>
            <div class=" flex justify-center text-center items-center col-span-1">
                {{ description }}

            </div>
            <div class=" flex justify-center text-xs text-center items-center col-span-3 overflow-y-hidden text-[10px]">
                {{ context }}

            </div>
            <div class=" flex justify-center text-center items-center col-span-1">
                {{ date_created }}

            </div>
          <slot />
          
        </div>
</template>