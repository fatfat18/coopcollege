<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputError from '@/Components/InputError.vue';
import TextInput from '@/Components/TextInput.vue';
import AOS from 'aos'
import 'aos/dist/aos.css'



</script>

<style>
.postcontainer{
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .9)),
    url('/coopcollege/coopcollege/resources/asset/editpostbackg.jpg');
}
</style>
<template>


    <AuthenticatedLayout>
        <template #header> 
            <h2 class="font-semibold text-3xl text-theme1 leading-tight h-4 mb-4">Partners Editor </h2>
        </template>

        <div class="">
           
        </div>

        <div class="postcontainer flex justify-center h-screen w-screen xl:px-10 py-10 ">


            <div class=" xl:w-3/4 w-4/5 xl:mt-16 overflow-y-hidden">


                    <form action="">
                        <button class="border border-white w-24 text-white py-2 px-4 bg-green-800 rounded-lg mb-10 hover:bg-green-600 transition ease-in duration-100">Save</button>
                    
                        
                            <div class="overflow-y-hidden space-x-4">

                                <TextInput 
                                id="name"
                                name="id"
                                type="text"
                                class="mt-4 py-2 px-2 w-40 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete=""
                                placeholder="ID"
                                data-aos="fade-up"  data-aos-duration="1300"
                                >
                        
                                </TextInput>



                                <TextInput 
                                id="name"
                                name="month"
                                type="text"
                                class="mt-4 py-2 px-2 w-40 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete=""
                                placeholder="Month"
                                data-aos="fade-up"  data-aos-duration="1300"
                                >
                        
                                </TextInput>
                                
                                <TextInput 
                                id="name"
                                name="coursetitle"
                                type="text"
                                class="mt-4 py-2 px-2 w-96 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete=""
                                placeholder="Course Title"
                                data-aos="fade-up"  data-aos-duration="1300"
                                >
                        
                                </TextInput>

                                <TextInput 
                                id="name"
                                name="venue"
                                type="text"
                                class="mt-4 py-2 px-2 w-40 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete=""
                                placeholder="Venue"
                                data-aos="fade-up"  data-aos-duration="1300"
                                >
                        
                                </TextInput>

                                <TextInput 
                                id="name"
                                name="year"
                                type="text"
                                class="mt-4 py-2 px-2 w-40 focus:ring-yellow-500 active:ring-yellow-500"
                                required
                                autocomplete=""
                                placeholder="Year"
                                data-aos="fade-up"  data-aos-duration="1300"
                                >
                        
                                </TextInput>


                    
                            
                    
                            
                            
                            </div>
                        


                









            </form>





        </div>
    </div>


    </AuthenticatedLayout>


</template>

<script>
AOS.init();
AOS.refresh();
</script>
