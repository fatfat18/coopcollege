<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import AOS from "aos";
import "aos/dist/aos.css";
import TrainingCalendarTile from "@/Components/TrainingCalendarTile.vue";
import DeleteModal from "@/Components/DeleteModal.vue";
import Modal from "@/Components/Modal.vue";

library.add(faPlus);
</script>

<style>
.postcontainer {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),
        url("/coopcollege/coopcollege/resources/asset/editpostbackg.jpg");
    background-size: cover;
}
</style>

<template>
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-bold text-3xl leading-tight text-theme1">
                Manage Training Calendar
            </h2>
        </template>

        <div class="py-8 postcontainer overflow-y-hidden h-max min-h-screen">
            <a href="/TrainingCalendarEditor"
                ><button
                    class="xl:ml-16 my-4 mx-8 px-6 py-2 rounded-md bg-theme1 transition duration-150 border border-black text-theme2 hover:scale-110 hover:-translate-y-1"
                >
                    Add Training Calendar
                    <font-awesome-icon
                        icon="fa-solid fa-plus"
                        class="pl-2 hover:text-white"
                    /></button
            ></a>

            <!-- HEADER NI SA POST TILE  -->
            <div
                class="max-w-7xl mx-auto sm:px-6 lg:px-8 overflow-y-hidden space-y-1 h-max"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div
                    class="max-w-7xl bg-white xl:px-8 xl:py-4 py-4 rounded-sm grid grid-cols-6 gap-4 text-xs xl:text-md"
                >
                    <div class="flex justify-center text-center items-center">
                        MONTH
                    </div>
                    <div class="flex justify-center text-center items-center">
                        COURSE TITLE
                    </div>
                    <div class="flex justify-center text-center items-center">
                        VENUE
                    </div>
                    <div class="flex justify-center text-center items-center">
                        YEAR
                    </div>

                    <div
                        class="flex justify-center text-center items-center"
                    ></div>
                    <div
                        class="flex justify-center text-center items-center"
                    ></div>
                </div>

                <!-- DIRI MAG LOOP ANG GIKAN SA DATABASE PAGINATE LANG DAYUN BY 10s -->

                <template
                    v-for="(item, index) in reversedItems"
                    :key="item.idTC"
                >
                    <TrainingCalendarTile
                        :month="item.month"
                        :coursetitle="item.event.courseTitle"
                        :venue="item.event.Venue"
                        :year="item.year"
                        :buttonid="item.idTC"
                        data-aos="fade-up"
                        data-aos-duration="500"
                    >
                        <div
                            class="flex justify-center text-center items-center"
                        >
                            <button
                                @click="navigateToUpdate(item.idTC)"
                                class="py-2 xl:px-8 px-4 rounded-full bg-blue-400 xl:rounded-lg text-white text-[11px] xl:text-md transition duration-300 hover:text-blue-400 hover:bg-white border-2 border-blue-400"
                            >
                                Edit
                            </button>
                        </div>
                        <div
                            class="flex justify-center text-center items-center"
                        >
                            <button
                                @click.prevent="confirmdel(item)"
                                class="py-2 xl:px-8 px-4 rounded-full bg-red-500 xl:rounded-lg text-white text-[11px] xl:text-md transition duration-300 hover:text-red-500 hover:bg-white border-2 border-red-500"
                            >
                                Delete
                            </button>
                        </div>

                        <DeleteModal
                            :show="showModal"
                            @close="showModal = false"
                        >
                            <h2 class="text-black text-l">
                                Are You Sure You Want to Delete <br />
                                <span class="text-theme1">{{
                                    confirmname
                                }}</span>
                                on
                                <span class="text-theme1"
                                    >{{ confirmdate }}
                                    {{ confirmyear }}
                                    <span class="text-black">at</span>
                                    {{ confirmvenue }}</span
                                >?
                            </h2>
                            <br />
                            <button
                                @click.prevent="navigatetoDelete()"
                                class="transition duration-300 rounded-lg hover:text-red-500 hover:bg-white border border-red-500 px-4 py-4 bg-red-500 text-white mx-2 text-sm"
                            >
                                CONFIRM
                            </button>
                            <button
                                class="transition duration-300 rounded-lg hover:text-black hover:bg-white border border-zinc-400 px-4 py-4 bg-zinc-400 text-white mx-2 text-sm"
                                @click="showModal = false"
                            >
                                CANCEL
                            </button>
                        </DeleteModal>
                    </TrainingCalendarTile>

                    <Modal
                        :show="confirmdelmodal"
                        @close="confirmdelmodal = false"
                    >
                        <h2 class="text-red-500 text-2xl">
                            Delete Training Calendar
                        </h2>
                        <p class="text-theme2 text-4xl mb-5">Success!</p>
                    </Modal>
                </template>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script>
import { BASE_URL } from "../baseurl";

export default {
    data() {
        return {
            items: [],
            showModal: false,
            confirmdelmodal: false,
            confirmname: "",
            confirmdate: "",
            confirmyear: "",
            confirmvenue: "",
            itemcv: "",
        };
    },

    mounted() {
        axios
            .get(BASE_URL + "/displayCalendarTrainingAdmin")
            .then((response) => {
                this.items = response.data;
                console.log(this.items);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    computed: {
        reversedItems() {
            return this.items.slice().reverse();
        },
    },
    methods: {
        navigateToUpdate(idTC) {
            window.location.href = this.route("TrainingCalendarUpdate", {
                idTC: idTC,
            });
        },

        confirmdel(item) {
            this.showModal = true;
            this.confirmname = item.event.courseTitle;
            this.confirmdate = item.month;
            this.confirmyear = item.year;
            this.confirmvenue = item.event.Venue;
            this.itemcv = item.idCV;
        },
        navigatetoDelete() {
            this.showModal = false;
            this.confirmdelmodal = true;
            console.log(this.itemcv);

            let params = new URLSearchParams();
            let num = parseInt(this.itemcv);

            params.append("idCV", num);

            axios
                .delete(BASE_URL + "/deleteCalendar" + "?" + params.toString())
                .then((response) => {
                    console.log(response.data);

                    async function redirectWithDelay() {
                        await new Promise((resolve) =>
                            setTimeout(resolve, 1000)
                        ); // wait for 1 seconds
                        window.location.href = route("TrainingCalendar"); // redirect to the TrainingCalendar URL
                    }
                    redirectWithDelay();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};

AOS.init({ startEvent: "load", once: "true," });
AOS.refresh();
</script>
