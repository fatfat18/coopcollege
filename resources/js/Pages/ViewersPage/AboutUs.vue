<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../css/timeline.css";
import ResponsiveNavBar from "@/Components/ResponsiveNavBar.vue";
import Header from "@/Components/Header.vue";
import ProfileCard from "@/Components/ProfileCard.vue";
import Footer from "@/Components/Footer.vue";
import PartnersPic from "@/Components/PartnersPic.vue";
</script>

<style>
.bg {
    background: rgb(0, 0, 51);
    background: linear-gradient(
        233deg,
        rgba(0, 0, 51, 1) 32%,
        rgba(255, 204, 0, 1) 100%
    );
}

.bodbg {
    background: url("../../../asset/logo.png") repeat;
    background-size: 25% 50%;
}

#typewriter {
    color: white;
    font-weight: bold;
}

#cursor {
    color: rgb(255, 255, 255);
    animation: blink 0.5s linear infinite;
    font-size: clamp(1rem, 2.5vw, 2rem);
}

@keyframes blink {
    0% {
        opacity: 100%;
    }
    50% {
        opacity: 0%;
    }
}
</style>
<template>
    <ResponsiveNavBar />

    <div class="w-screen flex flex-col justify-center items-center bg">
        <span class="text-white text-3xl xl:text-5xl xl:pt-20 mt-10"
            >Governance</span
        >

        <div
            class="w-screen h-max max-w-7xl rounded-md pt-10 flex justify-center gap-10 mb-5 mt-1 flex-wrap overflow-y-hidden"
        >
            <div
                v-for="bod in bods"
                :key="bod.idBOD"
                class="h-max w-60 my-5 mx-5 overflow-y-hidden"
                data-aos="fade-right"
                data-aos-duration="1000"
            >
                <ProfileCard
                    :fullname="
                        (bod.Prefix === null ? '' : bod.Prefix + ' ') +
                        bod.Fname +
                        ' ' +
                        bod.Lname +
                        (bod.Suffix === null ? ' ' : ' ' + bod.Suffix)
                    "
                    :position="bod.Position"
                    :image="bod.image.ImageUrl"
                >
                </ProfileCard>
            </div>
        </div>
        <span class="text-white text-3xl xl:text-5xl xl:pt-20 mt-10"
            >Operations</span
        >
        <div
            class="w-screen h-max max-w-7xl rounded-md pt-10 flex justify-center gap-10 mb-5 mt-1 flex-wrap overflow-y-hidden"
        >
            <div
                v-for="op in ops"
                :key="op.idBOD"
                class="h-max w-60 my-5 mx-5 overflow-y-hidden"
                data-aos="fade-right"
                data-aos-duration="1000"
            >
                <ProfileCard
                    :fullname="
                        (op.Prefix === null ? '' : op.Prefix + ' ') +
                        op.Fname +
                        ' ' +
                        op.Lname +
                        (op.Suffix === null ? ' ' : ' ' + op.Suffix)
                    "
                    :position="op.Position"
                    :image="op.image.ImageUrl"
                >
                </ProfileCard>
            </div>
        </div>

        <div class="max-w-7xl mt-20">
            <h1 class="text-xl xl:text-3xl text-white mb-4 ml-8">
                Our Partners
            </h1>
            <div
                class="w-screen justify-center items-center max-w-7xl h-max xl:rounded-3xl py-10 xl:px-20 bg-white flex flex-wrap"
            >
                <!-- MAO NI ANG DISPLAY SA PARTNER IMAGES-->
                <template v-for="partner in partners" :key="partner.idPartner">
                    <PartnersPic
                        :name="partner.partnerName"
                        :image="partner.image.ImageUrl"
                        class="mx-4 my-2"
                        data-aos="zoom-out"
                        data-aos-duration="1000"
                    >
                    </PartnersPic>
                </template>
            </div>
        </div>

        <div
            class="w-screen h-max py-10 mt-20 flex items-center justify-center"
        >
            <div
                class="h-max pt-10 pb-1 w-128 bg-gradient-to-b from-theme2 via-white to-white flex flex-col items-end justify-center rounded-3xl px-10"
            >
                <p class="">
                    CLIMBS Life and General Insurance Cooperative, established
                    at Cagayan De Oro in 1971, is a leading LIFE & NON-LIFE
                    micro-insurance provider in the Philippines licensed by the
                    Cooperative Development Authority (CDA) & the Insurance
                    Commission (IC).
                </p>

                <button
                    class="bg-blue-500 py-8 px-12 w-full my-4 text-white rounded-3xl flex text-center items-center justify-center"
                    @click="showHistory = !showHistory"
                >
                    <p v-if="!showHistory" class="mr-1">Show</p>
                    <p v-else="showHistory" class="mr-1">Hide</p>
                    History
                </button>
            </div>
        </div>

        <div class="h-max w-screen" v-if="showHistory">
            <header class="xl:mt-40 mt-20 flex flex-col">
                <h1 class="text-white mb-20 text-2xl xl:text-5xl">
                    OUR HISTORY
                </h1>
                <div class="w-screen flex justify-center items-center">
                    <br /><img
                        src="../../../asset/timeline/climbs_logo_edited_400x400.png"
                        alt=""
                        class="w-32"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    />
                </div>
            </header>

            <ul class="timeline">
                <!-- Item 1 -->
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper overflow-y-hidden">
                            <span class="hexa"></span>
                            <span class="flag"></span>
                            <span
                                class="time-wrapper"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                                ><span class="time">2011</span></span
                            >
                        </div>
                        <div
                            class="desc"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            Inauguration of the CLIMBS Institute for Financial
                            Literacy (CIFL) in November
                        </div>
                    </div>
                </li>

                <!-- Item 2 -->
                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper overflow-y-hidden">
                            <span class="hexa"></span>
                            <span class="flag"></span>
                            <span
                                class="time-wrapper"
                                data-aos="fade-left"
                                data-aos-duration="1500"
                                ><span class="time">2012</span></span
                            >
                        </div>
                        <div
                            class="desc"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            Partner Co-ops: 20 Total ITF: PhP 7.95 M
                        </div>
                    </div>
                </li>

                <!-- Item 3 -->
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper overflow-y-hidden">
                            <span class="hexa"></span>
                            <span class="flag"></span>
                            <span
                                class="time-wrapper"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                                ><span class="time">2013</span></span
                            >
                        </div>
                        <div
                            class="desc"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            Partner Co-ops: 36
                        </div>
                    </div>
                </li>

                <!-- Item 4 -->
                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper overflow-y-hidden">
                            <span class="hexa"></span>
                            <span class="flag"></span>
                            <span
                                class="time-wrapper"
                                data-aos="fade-left"
                                data-aos-duration="1500"
                                ><span class="time">2014</span></span
                            >
                        </div>
                        <div
                            class="desc"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            Total Partner Co-ops: 61
                        </div>
                    </div>
                </li>

                <!-- Item 5 -->
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper overflow-y-hidden">
                            <span class="hexa"></span>
                            <span class="flag"></span>
                            <span
                                class="time-wrapper"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                                ><span class="time">2015</span></span
                            >
                        </div>
                        <div
                            class="desc"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            Total Partner Co-ops: 70
                        </div>
                    </div>
                </li>

                <!-- Item 6 -->
                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper overflow-y-hidden">
                            <span class="hexa"></span>
                            <span class="flag"></span>
                            <span
                                class="time-wrapper"
                                data-aos="fade-left"
                                data-aos-duration="1500"
                                ><span class="time">2016</span></span
                            >
                        </div>
                        <div
                            class="desc"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            Total Partner Co-ops: 83
                        </div>
                    </div>
                </li>

                <!-- Item 7 -->
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper overflow-y-hidden">
                            <span class="hexa"></span>
                            <span class="flag"></span>
                            <span
                                class="time-wrapper"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                                ><span class="time">2017</span></span
                            >
                        </div>
                        <div
                            class="desc"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            Total Partner Co-ops: 116 <br />Total ITF: PhP 30.56
                            M
                        </div>
                        <div
                            class="desc"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            <img
                                src=".././../../asset/timeline/2017.png"
                                alt=""
                            />
                        </div>
                        <div
                            class="desc"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            <img
                                src=".././../../asset/timeline/2017-2.png"
                                alt=""
                            />
                        </div>
                        <div
                            class="desc"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            CIFL was presented in the session “Cooperatives and
                            the Future” in the International Cooperative
                            Alliance (ICA) Global Conference and General
                            Assembly in Malaysia as a sustainable model for
                            continuous education for cooperative managers and
                            next-generation leaders. Which birthed the global
                            globalPartnership
                        </div>
                    </div>
                </li>

                <!-- Item 8 -->
                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper overflow-y-hidden">
                            <span class="hexa"></span>
                            <span class="flag"></span>
                            <span
                                class="time-wrapper"
                                data-aos="fade-left"
                                data-aos-duration="1500"
                                ><span class="time">2018</span></span
                            >
                        </div>
                        <div
                            class="desc"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            Total Partner Co-ops: 130.
                        </div>
                        <div
                            class="desc flex justify-center items-center"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <img
                                src="../../../asset/timeline/climbs-logo.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </li>

                <!-- Item 9 -->
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper overflow-y-hidden">
                            <span class="hexa"></span>
                            <span class="flag"></span>
                            <span
                                class="time-wrapper"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                                ><span class="time">2019</span></span
                            >
                        </div>
                        <div
                            class="desc"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            1st Global Cooperative Executive Masterclass held in
                            Manila
                        </div>
                        <div
                            class="desc flex justify-center items-center"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            <img
                                src="../../../asset/timeline/2019.png"
                                alt=""
                            />
                        </div>
                        <div
                            class="desc"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            Total Partner Co-ops: 134 <br />Total ITF: PhP 40.46
                            M
                        </div>
                        <div
                            class="desc flex justify-center items-center"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            <img
                                src="../../../asset/timeline/2019-2.png"
                                alt=""
                            />
                        </div>
                        <div
                            class="desc"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            CIM was presented during the Centenary Celebration
                            of the Cooperative College in United Kingdom for the
                            theme: “Cooperative Education Across the World” and
                            “...and Now, the Future” as to how cooperative
                            cooperative education can address challenges that we
                            face, to change the world and transforming
                            communities communities and changing lives.
                        </div>
                    </div>
                </li>

                <!-- Item 10 -->
                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper overflow-y-hidden">
                            <span class="hexa"></span>
                            <span class="flag"></span>
                            <span
                                class="time-wrapper"
                                data-aos="fade-left"
                                data-aos-duration="1500"
                                ><span class="time">2020</span></span
                            >
                        </div>
                        <div
                            class="desc italic"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            1,400+ participants: 795 coops nationwide 20 Virtual
                            Training Conducted
                        </div>
                        <div
                            class="desc"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            Total Partner Co-ops: 134
                        </div>
                        <div
                            class="desc"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            &#x2022; The Sole Training Provider of National
                            Federation of Primary Cooperatives in the
                            Philippines (NaFeCOOP) <br /><br />
                            &#x2022; Will not collect Training Fund.CETF will be
                            for NaFeCOOP.<br /><br />

                            ** CDA Memo Circular 2019 - 08
                        </div>
                    </div>
                </li>

                <!-- Item 11 -->
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper overflow-y-hidden">
                            <span class="hexa"></span>
                            <span class="flag"></span>
                            <span
                                class="time-wrapper"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                                ><span class="time">2021</span></span
                            >
                        </div>
                        <div
                            class="desc"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            1st Global Cooperative Executive Masterclass held in
                            Manila
                        </div>
                        <div
                            class="desc"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            &#x2022; The installation of CLIMBS Corner at the
                            Rochdale Pioneers Museum at Rochdale, United Kingdom
                            <br />
                            <span class="text-xs italic"
                                >--- the cradle of Cooperative Education</span
                            >
                        </div>
                        <div
                            class="desc flex justify-center items-center"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            <img
                                src="../../../asset/timeline/2021.png"
                                alt=""
                            />
                        </div>
                        <div
                            class="desc"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            <span class="text-sm italic"
                                >164+ participants: 885 coops nationwide</span
                            >
                            <br />
                            20 Virtual Training Conducted 1st Post Graduate
                            Certificate in Cooperative Management in partnership
                            with Asian (AIM). This led to the cementing of
                            partnership and creation of the Cooperative College
                            of the Philippines
                        </div>
                    </div>
                </li>

                <!-- Item 12 -->
                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper overflow-y-hidden">
                            <span class="hexa"></span>
                            <span class="flag"></span>
                            <span
                                class="time-wrapper"
                                data-aos="fade-left"
                                data-aos-duration="1500"
                                ><span class="time">2022</span></span
                            >
                        </div>
                        <div
                            class="desc italic text-bold"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            Total Partner Co-ops: 132<br />Total ITF: PhP 50.088
                            M
                        </div>
                        <div
                            class="desc"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <h1 class="text-xl">
                                &#x2022; Strategic Planning Session for
                                Cooperative College of the Philippines
                            </h1>
                            <br />
                            <span class="text-xs italic"
                                >&#x2022; with Facilitator and Consultant Dr.
                                Jose Romeo Nereus “Neric” Acosta </span
                            ><br /><br />
                            <span class="text-xs italic"
                                >&#x2022; June 16, 2022</span
                            >
                        </div>
                        <div
                            class="desc flex justify-center items-center"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <img
                                src="../../../asset/timeline/2022.png"
                                alt=""
                            />
                        </div>

                        <div
                            class="desc"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <h1 class="text-xl">
                                &#x2022; Historic Signing of Partnership
                                agreement between the Co-operative College UK,
                                CLIMBS Life and General Insurance Cooperative
                                and recently established Cooperative College of
                                the Philippines
                            </h1>
                            <br />
                            <span class="text-xs italic"
                                >&#x2022; Silken Al-Andalus Palace, Sevilla,
                                Spain </span
                            ><br /><br />
                            <span class="text-xs italic"
                                >&#x2022; June 19, 2022</span
                            >
                        </div>

                        <div
                            class="desc"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <h1 class="text-xl">
                                &#x2022; Historic Signing of Partnership
                                agreement between the Co-operative College UK,
                                CLIMBS Life and General Insurance Cooperative
                                and recently established Cooperative College of
                                the Philippines
                            </h1>
                            <br />
                            <span class="text-xs italic"
                                >&#x2022; July 7, 2022</span
                            >
                        </div>
                    </div>
                </li>
                <!-- Item 13 -->
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper overflow-y-hidden">
                            <span class="hexa"></span>
                            <span class="flag"></span>
                            <span
                                class="time-wrapper"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                                ><span class="time">2023</span></span
                            >
                        </div>

                        <div
                            class="desc flex justify-center items-center"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            <img
                                src="../../../asset/timeline/2023.png"
                                alt=""
                            />
                        </div>
                        <div
                            class="desc"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            <h1 class="text-xl">
                                &#x2022; The Global Co-operative Executive
                                Masterclass.
                            </h1>
                            <br />
                            <span class="text-xs italic"
                                >&#x2022; Manchester, United Kingdom</span
                            ><br /><br />
                        </div>
                    </div>
                </li>
                <div
                    class="w-full h-max overflow-y-hidden flex justify-center items-center text-center pt-8 text-5xl my-10"
                >
                    PRESENT
                </div>
            </ul>

            <Footer />
        </div>
    </div>
</template>

<script>
import { BASE_URL } from "../../baseurl";
export default {
    data() {
        return {
            phrases: [
                "We are the sole-training needs provider of the National Federation of Cooperative Primaries of the Philippines (NaFeCOOP). We Strategically pivoted from CLIMBS Institute for Financial Literacy (CIFL) to CLIMBS Institute of Management (CIM), and now, the Co-operative College of the Philippines (Co-op College PH) to further cooperative education both locally and globally, embodies the cooperative values and principles, and upgrades its educational platforms.",
            ],
            sleepTime: 20,
            curPhraseIndex: 0,
            partners: [],
            bods: [],
            ops: [],
            showHistory: false,
        };
    },
    mounted() {
        axios
            .get(BASE_URL + "/displayPartner")
            .then((response) => {
                this.partners = response.data;
                //console.log(this.partners);
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .get(BASE_URL + "/displayBOD")
            .then((response) => {
                //this.bods = response.data;
                //console.log(this.bods);
                console.log(response.data);
                for (let i = 0; i < response.data.length; i++) {
                    if (response.data[i].Position === "Operations") {
                        this.ops.push(response.data[i]);
                    } else {
                        this.bods.push(response.data[i]);
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            });
    },

    methods: {
        sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        },
    },
};

AOS.init({ startEvent: "load", once: "true," });
AOS.refresh();
</script>
