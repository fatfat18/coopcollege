<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputError from '@/Components/InputError.vue';
import TextInput from '@/Components/TextInput.vue';


</script>

<style>
.postcontainer {
background: #000033;
background: -webkit-linear-gradient(0deg, #000033 0%, #ffcc00 100%);
background: linear-gradient(0deg, #000033 0%, #ffcc00 100%);
}

</style>
<template>


    <AuthenticatedLayout>
        <template #header> 
            <h2 class="font-semibold text-3xl text-gray-800 leading-tight h-4 ">Create Post </h2>
        </template>
        <div class="">
           
        </div>

        <div class="postcontainer flex justify-center h-screen w-screen xl:px-10 py-10">


            <div class=" xl:w-3/4 w-4/5">
                    <form action="">
                    <button class="text-white py-2 px-4 bg-green-700 rounded-lg mb-10 hover:bg-green-600 hover:translate-y-2 hover:scale-105 transition ease-in duration-300">Save</button>
                    
                        <div class="">
                        
                              <label for="img">Select Images :<br></label>
                              <input type="file" id="img" name="img" accept="image/*" multiple >
                        </div>
                    
                        <div class="">
                            <TextInput 
                            id="title"
                            type="title"
                            class="mt-4 py-2 px-2 w-full focus:ring-yellow-500 active:ring-yellow-500"
                            required
                            autocomplete="current-title"
                            placeholder="Title"
                            >
                        
                            </TextInput>
                        
                            <Textarea 
                            id="description"
                            type="description"
                            class="mt-4 h-40 py-2 px-2 block w-full rounded-lg focus:ring-yellow-500 active:ring-yellow-500"
                            required
                            autocomplete="current-description"
                            placeholder="Description"
                            >
                        
                            </Textarea>
                        
                            <select id="posttype" name="posttype" class="mt-4">
                              <option hidden>Post Type</option>
                              <option value="News">News</option>
                              <option value="Article">Article</option>
                              <option value="Events">Events</option>
                              <option value="Activity">Activity</option>
                            </select>
                        
                        </div>
           


                









            </form>





        </div>
    </div>


    </AuthenticatedLayout>


</template>
