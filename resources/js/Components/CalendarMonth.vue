<script>
export default {
 props: ['Month','CourseTitle1','CourseTitle2','Venue1','Venue2']
};

</script>
<template>

<div class="bg-zinc-200 w-srceen max-w-7xl flex flex-row h-max py-8 text-theme1 text-xs xl:text-xl">
        <div class="w-1/3 flex justify-center items-center">
        {{ Month }}
        </div>
      
        <div class="w-2/3 flex h-max items-center ">
            {{ CourseTitle1 }}<br>
            {{ CourseTitle2 }}
        </div>
      
        <div class="w-1/3 flex justify-center h-max  items-center">
       {{ Venue1 }}<br>
       {{ Venue2 }}
        </div>
      </div>

</template>