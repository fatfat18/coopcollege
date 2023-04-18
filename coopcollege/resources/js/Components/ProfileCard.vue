<script >
export default {
props:{
    fullname: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    //required: true,
  },
  
}
};


</script>


<template>

    <div>
        <img :src="image" alt="BOD" class="w-60 h-80">
    </div>

    <div>
        <p class="text-l text-theme1"> {{ fullname }} </p>
        <p class="text-xl text-theme2"> {{ position }} </p>
    </div>

</template>