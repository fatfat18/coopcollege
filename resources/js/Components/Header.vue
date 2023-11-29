<script setup>
import { Head, Link } from "@inertiajs/vue3";
import AOS from "aos";
import "aos/dist/aos.css";
import ResponsiveNavBar from "@/Components/ResponsiveNavBar.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";

library.add(faPhoneFlip);
</script>

<style>
.card {
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
        rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
        rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
        rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
        rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
        rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
.welcome {
    background: url("../../asset/bgimg.webp") no-repeat;
    background-size: cover;
    background-position: 70% 71%;
}
</style>

<template>
    <div
        id="welcome"
        class="xl:h-60 h-28 bg-theme1 w-screen text-white md:text-sm flex xl:flex-row justify-center items-center py-20 overflow-y-hidden welcome"
    >
        <div
            class="flex xl:justify-center xl:items-center md:items-start md:justify-center"
        >
            <a href="/"
                ><img
                    src="../../asset/logo.png"
                    class="mx-2 xl:h-32 h-20 xl:mr-8 md:mr-4 shadow-2xl"
                    data-aos="fade-right"
                    data-aos-delay="300"
                    data-aos-duration="800"
            /></a>
            <p
                class="pt-2 overflow-y-hidden xl:text-3xl tracking-wider pl-2 xl:pl-0 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="500"
            >
                CO-OPERATIVE COLLEGE <br /><span
<<<<<<< HEAD
                    class="xl:text-xl text-xxs absolute"
                    >OF THE</span
                ><span class="mx-8 xl:mx-10"></span>PHILIPPINES
=======
                    class="xl:text-xl text-[10px] absolute"
                    >OF THE</span
                ><span class="mr-10 xl:mx-10"></span>PHILIPPINES
>>>>>>> aabb7ed39a62dc001c94e8603f0c9f7176b5fa1b
            </p>
        </div>

        <div
            class="h-40 w-40 xl:ml-60 flex justify-center items-center"
            data-aos="fade"
            data-aos-delay="300"
            data-aos-duration="1000"
        >
            <a href="#footer"
                ><button
                    class="xl:w-32 w-24 h-15 border text-xs xl:text-sm border-white rounded-md bg-theme1 text-theme2 transition duration-500 py-2 px-2 hover:bg-theme2 hover:text-theme1"
                >
                    Contact Us<br /><font-awesome-icon
                        icon="fa-solid fa-phone-flip"
                        class=""
                    /></button
            ></a>
        </div>
    </div>
</template>

<script>
AOS.init({ startEvent: "load", once: "true," });
AOS.refresh();
</script>
