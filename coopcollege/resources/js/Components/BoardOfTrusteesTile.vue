<script >


export default {
 props: ['id','img','firstname','lastname','middlename','suffix','position','status','start_date','end_date','prefix','address','coop_name' ]
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
      <div class="h-24 xl:h-32 max-w-7xl bg-white xl:px-4 xl:py-4 rounded-lg grid grid-cols-15 gap-1 max-h-30 xl:max-h-40 text-sm xl:text-md pr-4">
            <div class=" flex justify-center text-center items-center">
                {{ id }}
            </div>
            <div class=" flex justify-center text-center items-center"> 
                <img src="../../asset/sample.jpg" class=" xl:h-24 xl:w-40 h-12 w-16">
            </div>
            <div class=" flex justify-center text-center items-center ">
                {{ firstname }}

            </div>
            <div class=" flex justify-center text-center items-center ">
                {{ lastname }}

            </div>
            <div class=" flex justify-center text-center items-center  ">
                {{ middlename }}

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
            <div class=" flex justify-center text-center items-center ">
                {{ coop_name }}

            </div>

          
            <div class=" flex justify-center text-center items-center">
                        <button class="py-2 px-4  rounded-full bg-blue-400 xl:rounded-lg text-white text-xs xl:text-md buttonedit border-2 border-blue-400">Edit</button>
            </div>
            <div class=" flex justify-center text-center items-center ">
                        <button class="py-2 px-4  rounded-full bg-red-500 xl:rounded-lg text-white text-xs xl:text-md buttondelete border-2 border-red-500">Delete</button>
            </div>
        </div>
</template>