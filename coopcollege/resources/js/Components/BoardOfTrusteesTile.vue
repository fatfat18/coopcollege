<script >


export default {
    props: {
    id: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    middlename: {
      type: String,
      default: '',
    },
    suffix: {
      type: String,
      default: '',
    },
    position: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      required: true,
    },
    start_date: {
      type: String,
      required: true,
    },
    end_date: {
      type: String,
      required: true,
    },
    prefix: {
      type: String,
      default: '',
    },
    address: {
      type: String,
      required: true,
    },
    coop_name: {
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
      <div class="h-24 xl:h-32 max-w-7xl bg-white xl:px-4 xl:py-4 rounded-lg grid grid-cols-14 gap-1 max-h-30 xl:max-h-40 text-sm xl:text-md pr-4">
            <div class=" flex justify-center text-center items-center">
                {{ id }}
            </div>
            <div class=" flex justify-center text-center items-center"> 
                <img :src="image" class=" xl:h-16 xl:w-40 h-12 w-16">
            </div>
            <div class=" flex justify-center text-center items-center ">
                {{ firstname }}

            </div>
            <div class=" flex justify-center text-center items-center ">
                {{ lastname }}

            </div>
            <div class=" flex justify-center text-center items-center ">
                {{ suffix }}

            </div>
            <div class=" flex justify-center text-center items-center ">
                {{ position }}

            </div>
            <div class=" flex justify-center text-center items-center ">
                {{ status }}

            </div>
            <div class=" flex justify-center text-center items-center ">
                {{ start_date }}

            </div>
            <div class=" flex justify-center text-center items-center ">
                {{ end_date }}

            </div>
            <div class=" flex justify-center text-center items-center ">
                {{ prefix }}

            </div>
            <div class=" flex justify-center text-center items-center ">
                {{ address }}

            </div>
            
            <slot />

        </div>
</template>