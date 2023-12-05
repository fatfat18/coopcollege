<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
import ResponsiveNavBar from "@/Components/ResponsiveNavBar.vue";
import Header from "@/Components/Header.vue";
import NewsHeading from "@/NewsComponent/NewsHeading.vue";
import NewsCol from "@/NewsComponent/NewsCol.vue";

import Footer from "@/Components/Footer.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleLeft, faAngleRight);
</script>

<style>
.newsbg {
    background: url("../../../asset/newsbg.png") no-repeat;
    background-size: cover;
    background-position: bottom;
    background-blend-mode: color-burn;
    z-index: 10;
}
.clickable-div {
    cursor: pointer;
}

.card {
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
        rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
        rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
        rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
        rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
        rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
</style>
<template>
    <div class="h-max w-screen flex flex-col justify-center">
        <div
            class="xl:h-screen h-screen py-80 xl:py-0 w-screen newsbg bg-theme1 flex flex-col justify-center items-center"
            data-aos="fade"
            data-aos-duration="1000"
        >
            <ResponsiveNavBar />
            <p
                class="xl:text-6xl text-3xl text-white"
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-duration="1200"
            >
                What's New?
            </p>
            <p
                class="xl:text-xl xl:mt-5 text-white text-center"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
            >
                Keep posted to see the latest posts of <br />
            </p>
            <p
                class="text-theme2 xl:text-5xl text-3xl mx-2 text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]"
                data-aos="fade-up"
                data-aos-delay="1100"
                data-aos-duration="1000"
            >
                Co-operative College of the Philippines
            </p>
        </div>

        <NewsHeading
            :title="title"
            :description="sliceText(description, 10)"
            :context="sliceText(context, 200)"
            :image="img"
            class="clickable-div z-1"
            @click="navigateToPost(pid)"
        >
        </NewsHeading>

        <div class="w-screen bg-theme2 h-4 xl:hidden flex"></div>

        <div
            class="h-max bg-white justify-center items-center w-screen flex xl:py-10 xl:px-20 flex-wrap"
        >
            <div
                v-for="(post, index) in paginatedPosts"
                :key="post.Postid"
                class="overflow-y-hidden flex items-center justify-center xl:px-15"
            >
                <NewsCol
                    :image="post.avatar.ImageUrl"
                    :context="sliceText(post.Context, 200)"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    class="clickable-div text-md overflow-y-hidden"
                    @click="navigateToPost(post.Postid)"
                />
            </div>
        </div>
        <div
            class="w-screen flex justify-center items-center xl:space-x-2 text-md bg-white"
        >
            <button
                class="py-3 border-2 border-theme1 px-4 my-2 mx-2 rounded-lg hover:bg-theme1 hover:text-white transition duration-300 text-theme1 active:-translate-x-2"
                :disabled="currentPage === 1"
                @click="currentPage--"
            >
                <font-awesome-icon
                    icon="fa-solid fa-angle-left "
                    class="text-md"
                />
                Previous
            </button>
            <button
                class="py-3 border-2 border-theme1 px-8 my-2 mx-2 rounded-lg hover:bg-theme1 hover:text-white transition duration-300 text-theme1 active:translate-x-2"
                :disabled="currentPage === totalPages"
                @click="currentPage++"
            >
                Next
                <font-awesome-icon
                    icon="fa-solid fa-angle-right"
                    class="text-md"
                />
            </button>
        </div>
    </div>

    <Footer />
</template>

<script>
import { BASE_URL } from "../../baseurl";

export default {
    data() {
        return {
            title: "",
            description: "",
            context: "",
            img: "",
            pid: "",
            postsnohead: [],
            pageposts: [],
            currentPage: 1,
            perPage: 6,
            heading: {},
        };
    },

    mounted() {
        this.fetchData();
    },
    computed: {
        totalPages() {
            return Math.ceil(this.pageposts.length / this.perPage);
        },
        paginatedPosts() {
            const startIndex = (this.currentPage - 1) * this.perPage;
            const endIndex = startIndex + this.perPage;
            return this.pageposts.slice(startIndex, endIndex);
        },
    },

    methods: {
        sliceText(text, limit) {
            if (text.length > limit) {
                return text.slice(0, 200) + " ...";
            } else {
                return text;
            }
        },
        navigateToPost(Postid) {
            window.location.href = this.route("ViewPost", { Postid: Postid });
        },
        async fetchData() {
            try {
                const response = await axios.get(
                    BASE_URL + "/paginateDisplayPost"
                );

                console.log(response);
                this.heading = response.data.data[0];
                console.log(this.heading);
                this.title = this.heading.newsTitle;
                this.description = this.heading.Description;
                this.context = this.heading.Context;
                this.img = this.heading.avatar.ImageUrl;
                console.log(this.img);
                this.pid = this.heading.Postid;
                this.pageposts = response.data.data.slice(1);
                console.log(this.pageposts);
            } catch (error) {
                console.error(error);
            }
        },
    },
};

AOS.init({ startEvent: "load", once: "true," });
AOS.refresh();
</script>
