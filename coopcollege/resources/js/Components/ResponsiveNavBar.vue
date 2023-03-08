<script>
import { ref } from 'vue';
export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>

<template>
    <div class="bg-zinc-700 w-screen">
      <nav
        class="
          py-3
          xl:flex 
          justify-center
          text-xl
      
       
      
          
       

        "
        data-aos="fade-down" data-aos-duration="1000"
       >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="
              text-xl
              font-bold
              text-gray-100
              md:text-2xl
              hover:text-indigo-400
            ">
            
          </router-link>

          <!-- Mobile menu button -->
          <div @click="toggleNav" class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-100
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
                
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
            
          "
          
        >
          <a href="/"><li class="text-white ">Home</li></a>
          <a href="#"><li class="text-white ">News</li></a>
          <a href="#"><li class="text-white ">About us</li></a>
          <a href="#"><li class="text-white ">Learn with us</li></a>
          <a href="#"><li class="text-white ">Resources</li></a>
          <a href="#"><li class="text-white ">Case Studies</li></a>
          <a href="#"><li class="text-white ">Projects</li></a>
          
         
        </ul>
      </nav>
    </div>
  </template>

  <style>
  a.router-link-exact-active {
    color:yellow;
  }
</style>
