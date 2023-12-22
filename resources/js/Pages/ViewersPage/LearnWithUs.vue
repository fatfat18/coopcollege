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
    <ResponsiveNavBar class="z-20" />

    <div
        class="h-max w-screen flex flex-col justify-center items-center bg-theme1 overflow-y-hidden bg"
    >
        <div
            class="h-max xl:py-6 py-4 w-screen max-w-7xl flex bg-gradient-to-b from-theme2 to-zinc-100 justify-center items-center xl:mt-28 xl:rounded-t-xl"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <p class="xl:text-4xl text-2xl font-thin text-center text-theme1">
                Training Calendar <br />
                <span class="xl:text-7xl text-2xl">{{ currentYear }}</span>
            </p>
        </div>

        <div
            data-aos="fade-up"
            data-aos-duration="1000"
            class="rounded-t max-w-7xl px-3 xl:pl-8 w-screen bg-zinc-100 text-theme1 mt-1 py-2 xl:flex hidden items-center text-l xl:text-2xl"
        >
            <div class="w-1/5 text-center">Month</div>
            <div class="w-1/5 text-center">Course Title</div>
            <div class="w-3/5 text-center">Objectives</div>
            <div class="w-1/5 text-center">Venue</div>
            <div class="w-1/5 text-center">Cost</div>
        </div>

        <div
            class="rounded-t pb-5 h-max overflow-auto xl:overflow-hidden xl:max-w-7xl xl:w-full w-max px-2 bg-zinc-100 flex justify-center items-center flex-col text-theme1 z-0"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div
                v-for="(eventData, index) in calendar"
                :key="index"
                class="flex xl:flex-row h-full flex-col justify-center xl:items-start items-center xl:w-full w-screen border-2 border-zinc-300 bg-white xl:mx-4 xl:mt-1 mt-1 py-2 z-10 rounded-2xl xl:rounded-xl"
                data-aos="zoom-in"
                data-aos-duration="1000"
            >
                <div
                    class="xl:w-1/5 w-screen h-full text-center xl:text-base text-xl flex justify-center items-start py-2"
                >
                    {{ eventData.month }}
                </div>
                <div
                    class="flex h-full text-center w-full px-2 flex-col justify-center items-center"
                >
                    <div
                        v-for="(event, index) in calendar[index].events"
                        :key="index"
                        class="flex xl:justify-center xl:flex-row flex-col w-full"
                    >
                        <div
                            class="xl:hidden w-screen border-[1px] my-4 border-theme2"
                            v-if="index >= 1"
                        ></div>
                        <div
                            class="xl:w-1/5 w-full xl:text-center text-start xl:text-sm text-sm flex justify-start items-center py-2"
                        >
                            <span class="xl:hidden w-1/4">
                                Course Title :
                            </span>
                            <span class="xl:full w-3/4">
                                {{ event.courseTitle }}</span
                            >
                        </div>
                        <div
                            class="xl:w-3/5 w-full xl:text-center text-start xl:text-xs xl:px-4 text-sm flex justify-center items-center py-2"
                        >
                            <span class="xl:hidden w-1/4"> Objectives : </span>
                            <span class="xl:full w-3/4">{{
                                event.Objectives
                            }}</span>
                        </div>
                        <div
                            class="xl:w-1/5 w-full xl:text-center text-start xl:text-base text-sm flex justify-center items-center py-2"
                        >
                            <span class="xl:hidden w-1/4"> Venue : </span>
                            <span class="xl:full w-3/4">
                                {{ event.Venue }}</span
                            >
                        </div>
                        <div
                            class="xl:w-1/5 w-full xl:text-center text-start xl:text-base text-sm flex xl:justify-center items-center py-2"
                        >
                            <span class="xl:hidden w-1/4"> Cost : </span>
                            <span class="xl:full w-3/4"> {{ event.Cost }}</span>
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
                //console.log(this.calendar);
            })
            .catch((error) => {
                console.log(error);
            });
    },
};

AOS.init({ startEvent: "load", once: "true," });
AOS.refresh();
</script>
