<script>


export default {
    props: {
  id: {
    type: Number,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  coursetitle: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  buttonid: {
    type: Number,
    required: true,
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
                {{ month }}
            </div>
            <div class=" flex justify-center text-center items-center ">
                {{ coursetitle }}

            </div>
            <div class=" flex justify-center text-center items-center ">
                {{ venue }}

            </div>
            <div class=" flex justify-center text-center items-center ">
                {{ year }}

            </div>
            
          
            <slot />
        </div>
</template>


