<script>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';


 

export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
  computed: {
    linkActiveClass() {
      return 'router-link-active';
    },
  },
};
</script>

<style>


.trans {
  transition: 1s ease-in;
  transition: transform 0.3s ease-in-out;
}

</style>

<template>
    <div class="bg-theme1 w-screen">
      <nav
        class="
          py-3
          xl:flex 
          justify-center
          text-xl
          xl:text-2xl
        
      
          
       

        "
        data-aos="fade-down" data-aos-duration="1000"
       >
        <div class="flex items-center justify-between trans">
       
          <!-- Mobile menu button -->
          <div @click="toggleNav" class="flex md:hidden">
            <button
              type="button"
              class="
                text-white
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
                ml-4
           
       
                
              "
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
  







        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-8
            space-y-4
            md:flex md:space-y-0 md:flex-row items-center justify-center md:space-x-10 md:mt-0
            transition duration-500
            ResNavBar
            pb-4
      
            
            
          "
          
        >
          <a href="/"><li class="text-white navbar">Home</li></a>
          <a href="/News"><li class="text-white navbar">News</li></a>
          <a href="/AboutUs"><li class="text-white navbar ">About us</li></a>
          <a href="/LearnWithUs"><li class="text-white navbar ">Learn with us</li></a>
          <a href="/Resources"><li class="text-white navbar ">Resources</li></a>
          <a href="/Projects"><li class="text-white navbar ">Projects</li></a>
          
         
        </ul>
      </nav>
    </div>


  </template>

