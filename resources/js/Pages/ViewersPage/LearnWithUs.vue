<script setup>
import { Head, Link } from "@inertiajs/vue3";
import AOS from "aos";
import "aos/dist/aos.css";
import ResponsiveNavBar from "@/Components/ResponsiveNavBar.vue";
import Header from "@/Components/Header.vue";
import CalendarMonth from "@/Components/CalendarMonth.vue";
import Footer from "@/Components/Footer.vue";
</script>

<style>
.bg {
    background: rgb(0, 0, 51);
    background: linear-gradient(
        143deg,
        rgba(0, 0, 51, 1) 60%,
        rgba(255, 204, 0, 1) 100%
    );
}
</style>

<template>
    <ResponsiveNavBar />

    <div
        class="h-max w-screen flex flex-col justify-center items-center bg-theme1 overflow-y-hidden bg"
    >
        <div
            class="h-24 w-screen max-w-7xl flex bg-theme2 justify-center items-center xl:mt-28 xl:rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <p
                class="xl:text-5xl text-2xl font-thin text-theme1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]"
            >
                Training Calendar {{ currentYear }}
            </p>
        </div>

        <div
            data-aos="fade-up"
            data-aos-duration="1000"
            class="rounded-t max-w-6xl w-screen bg-zinc-300 text-theme1 mt-5 py-2 flex items-center text-l xl:text-2xl"
        >
            <div class="xl:w-3/5 w-1/4 text-center">Month</div>
            <div class="xl:w-3/5 w-1/4 text-center">Course Title</div>
            <div class="xl:w-3/5 w-1/4 text-center">Objectives</div>
            <div class="xl:w-3/5 w-1/4 text-center">Venue</div>
        </div>

        <div
            class="rounded-t pb-5 h-max overflow-y-hidden max-w-7xl w-full bg-zinc-300 flex justify-center items-center flex-col text-theme1"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div
                v-for="(eventData, index) in calendar"
                :key="index"
                class="flex justify-center items-center h-max w-screen max-w-6xl bg-white border-2 border-theme1 xl:mx-5 xl:px-10 xl:mt-1 mt-1 py-2 rounded-2xl xl:rounded-xl"
                data-aos="zoom-in"
                data-aos-duration="1000"
            >
                <div
                    class="flex text-center w-full justify-center items-center hover:scale-105 transition duration-300"
                >
                    <div
                        class="xl:w-1/4 lg:w-2/3 w-1/3 text-center font-black xl:text-xl flex justify-center items-start py-5"
                    >
                        {{ eventData.month }}
                    </div>

                    <div class="w-screen">
                        <div
                            v-for="(event, index) in calendar[index].events"
                            :key="index"
                            class="flex space-x-5 xl:justify-center xl:pl-40"
                        >
                            <div
                                class="w-full text-center flex justify-start items-center py-2"
                            >
                                &#x2022; {{ event.courseTitle }}
                            </div>
                            <div
                                class="w-full text-start flex justify-start items-center py-2 xl:pl-14"
                            >
                                &#x2022; {{ event.Objectives }}
                            </div>
                            <div
                                class="w-full text-start flex justify-start items-center py-2 xl:pl-32"
                            >
                                &#x2022; {{ event.Venue }}
                            </div>

                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="py-5"></div>

        <Footer />
    </div>
</template>

<script>
import { BASE_URL } from "../../baseurl";

export default {
    data() {
        return {
            calendar: [],
            currentYear: new Date().getFullYear(),
        };
    },

    mounted() {
        axios
            .get(BASE_URL + "/displayCalendarTraining")
            .then((response) => {
                this.calendar = response.data;
                console.log(this.calendar);
            })
            .catch((error) => {
                console.log(error);
            });
    },
};

AOS.init({ startEvent: "load", once: "true," });
AOS.refresh();
</script>
