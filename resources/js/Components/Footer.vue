<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import InputLabel from "@/Components/InputLabel.vue";
import { faTty } from "@fortawesome/free-solid-svg-icons";
import Modal from "@/Components/Modal.vue";

library.add(faFacebook, faPhone, faEnvelope, faTty);
</script>

<style>
.ftr {
    background: url("../../asset/footerimg.jpg") no-repeat;
    background-size: cover;
    background-position: center;
}
</style>

<template>
    <div
        class="ftr w-screen h-max flex items-center justify-center xl:pt-10 pt-4 relative"
    >
        <Modal
            class="absolute transform top-1/4 left-1/3 translate-x-1/3 translate-y-1/6 w-96 h-40 bg-theme2 rounded-3xl text-center py-10 text-3xl"
            :show="showLoading"
            @close="showLoading = false"
        >
            <span class="text-3xl">Submitting form to our team!</span
            ><br /><br />
        </Modal>
        <div class="xl:w-3/4 w-screen h-max xl:px-10 px-2">
            <p class="xl:text-7xl text-4xl text-white text-center">
                Stay Connected
            </p>
            <p class="xl:text-4xl text-xl my-2 text-white text-center">
                Join our Newsletter!
            </p>
            <p class="text-md text-white text-center">
                CIFL/CIM now pivots to the Co-operative College of the
                Philippines (Co-op College PH).The training and education arm
                for a higher level of training and education opportunities in
                the Philippine Cooperative Movement.
            </p>
            <br />
            <div class="flex items-center justify-center flex-col">
                <div class="xl:w-3/4 w-screen flex">
                    <input
                        type="text"
                        class="rounded-lg w-full mx-1"
                        placeholder="Name"
                        v-model="newslettername"
                    />
                    <input
                        type="text"
                        class="rounded-lg w-full mx-1"
                        placeholder="Email"
                        v-model="newsletteremail"
                    />
                </div>
                <div class="xl:w-3/4 w-screen px-1">
                    <textarea
                        class="rounded-lg w-full h-40 mt-1"
                        placeholder="Message"
                        v-model="newslettermessage"
                    ></textarea>
                    <button
                        class="w-full rounded-xl text-zinc-950 text-3xl bg-theme2 py-4"
                        @click="submitData()"
                    >
                        Join us now!
                    </button>
                </div>
            </div>

            <div
                class="flex xl:flex-row flex-col text-white ml-20 justify-center items-start"
            >
                <span class="flex items-center justify-center"
                    ><font-awesome-icon
                        icon="fa-solid fa-mobile"
                        class="xl:text-4xl text-xl mx-4 my-5"
                    />0917-700-9159</span
                >

                <span class="flex items-center justify-center"
                    ><font-awesome-icon
                        icon="fa-solid fa-envelope"
                        class="xl:text-4xl text-xl mx-4 my-5"
                    />info@co-opcollege.ph</span
                >

                <span class="flex items-center justify-center"
                    ><font-awesome-icon
                        icon="fa-solid fa-globe"
                        class="xl:text-4xl text-xl mx-4 my-5"
                    />www.co-opcollege.ph</span
                >
            </div>
            <div
                class="w-full py-4 flex text-white items-center justify-center"
            >
                <a href="https://www.facebook.com/CoopCollegePH" target="_blank"
                    ><span
                        ><font-awesome-icon
                            icon="fa-brands fa-facebook"
                            class="xl:text-6xl text-3xl mx-4 hover:scale-110 transition duration-500" /></span
                ></a>
                <a
                    href="https://www.linkedin.com/company/co-operative-college-of-the-philippines-ccp"
                    target="_blank"
                >
                    <span
                        ><font-awesome-icon
                            icon="fa-brands fa-linkedin"
                            class="xl:text-6xl text-3xl mx-4 hover:scale-110 transition duration-500" /></span
                ></a>
            </div>
            <div
                class="w-full pt-10 text-theme2 flex flex-col items-center justify-center text-center"
            >
                All Rights Reserved Co-operative College of the Philippines

                <img src="../../asset//logo.png" class="w-10 h-12 my-2" />
            </div>
        </div>
    </div>

    <!-- <div
        id="footer"
        class="ftr w-screen h-80 bg-theme1 pt-8 flex flex-col items-center"
    >
        <p
            class="text-white text-xl"
            data-aos="fade-down"
            data-aos-duration="400"
            data-aos-delay="500"
        >
            Message us Now!
        </p>

        <div
            class="flex justify-center items-center space-x-2 py-4 px-2"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="500"
        >
            <div
                class="bg-white py-2 px-4 rounded-xl transition ease-in duration-150 hover:scale-125"
            >
                <a :href="fb" target="_blank"
                    ><font-awesome-icon
                        icon="fa-brands fa-facebook"
                        class="text-theme1 overflow-y-hidden"
                /></a>
            </div>

            <a :href="email" target="_blank"
                ><div
                    class="bg-white py-2 px-4 rounded-xl transition ease-in duration-150 hover:scale-125"
                >
                    <font-awesome-icon
                        icon="fa-solid fa-envelope"
                        class="text-theme1 overflow-y-hidden"
                    /></div
            ></a>
        </div>

        <div class="space-y-2">
            <div
                class="bg-white py-2 px-4 rounded-sm flex"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="500"
            >
                <font-awesome-icon
                    icon="fa-solid fa-phone"
                    class="h-5 text-theme1 overflow-y-hidden"
                />
                <p class="ml-2 text-sm">{{ phonenum }}</p>
            </div>
            <div
                class="bg-white py-2 px-4 rounded-sm flex"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="500"
            >
                <font-awesome-icon
                    icon="fa-solid fa-tty"
                    class="h-5 text-theme1 overflow-y-hidden"
                />
                <p class="ml-2 text-sm">{{ tel }}</p>
            </div>
        </div>

        <div class="w-screen py-2 relative">
            <p class="text-sm text-white text-center pt-16">
                © Co-operative College of the Philippines
            </p>
        </div>
    </div> -->
</template>

<script>
import { BASE_URL } from "../baseurl";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faFacebook, faLinkedin, faEnvelope, faGlobe, faMobile);

export default {
    data() {
        return {
            items: [],
            contacts: [],
            fb: "",
            phonenum: "",
            tel: "",
            email: "",
            showModal: false,
            newslettername: "",
            newsletteremail: "",
            newslettermessage: "",
            showLoading: false,
        };
    },

    mounted() {
        axios
            .get(BASE_URL + "/displayContactUs?idcontactUs=1")
            .then((response) => {
                this.contacts = response.data;
                //console.log(this.contacts);
                this.fb = this.contacts[0].facebookLink;
                this.phonenum = this.contacts[0].phoneNum;
                this.email =
                    "https://mail.google.com/mail/?view=cm&fs=1&to=" +
                    this.contacts[0].emailAdd;
                this.tel = this.contacts[0].telNum;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    methods: {
        submitData() {
            this.showLoading = !this.showLoading;
            const formData = new FormData();
            formData.append("email", this.newsletteremail);
            formData.append("message", this.newslettermessage);
            formData.append("fullname", this.newslettername);

            // Append additional form data to the same FormData object

            axios
                .post(BASE_URL + "/email", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((response) => {
                    //console.log(response);
                    this.showLoading = !this.showLoading;
                })
                .catch((error) => {
                    console.log(error);
                });

            this.newsletteremail = "";
            this.newslettermessage = "";
            this.newslettername = "";
        },
    },
};

AOS.init({ startEvent: "load", once: "true," });
AOS.refresh();
</script>
