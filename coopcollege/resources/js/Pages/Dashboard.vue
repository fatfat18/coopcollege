<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'



library.add(faPlus);

</script>




<template>
 



    <AuthenticatedLayout>
        
        <template #header> 
            <h2 class="font-semibold text-xl text-gray-800 leading-tight ">Post Manager </h2>
        </template>

        

        <div class="py-8">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <a href="/CreatePost"><button class="my-4 mx-8 px-6 py-2 rounded-md bg-theme1 transition duration-150 border border-black text-white hover:scale-110 hover:-translate-y-1"> Create Post  <font-awesome-icon icon="fa-solid fa-plus" class= " pl-2 hover:text-white " /> </button></a>
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-green-700">You're logged in!</div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>




</template>
