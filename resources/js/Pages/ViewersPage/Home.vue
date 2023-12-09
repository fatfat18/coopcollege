<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faBriefcaseMedical } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import Header from "@/Components/Header.vue";
import ResponsiveNavBar from "@/Components/ResponsiveNavBar.vue";
import Footer from "@/Components/Footer.vue";

library.add(
    faPhoneFlip,
    faFacebook,
    faPhone,
    faEnvelope,
    faNoteSticky,
    faCoins,
    faBriefcaseMedical,
    faChartSimple,
    faLightbulb,
    faEarthAsia
);
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
/* .cardcontainer {
    background-color: #eaeaee;
    opacity: 1;
    background-image: repeating-radial-gradient(
            circle at 0 0,
            transparent 0,
            #eaeaee 10px
        ),
        repeating-linear-gradient(#fffefe55, #fffefe);
} */

.cardtext {
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
        rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
        rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
        rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
        rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
        rgba(0, 0, 0, 0.09) 0px 32px 16px;
    background: rgba(255, 255, 255, 0);
    -webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
    border: 1px solid rgba(255, 255, 255, 0);
}

.lpg {
    border-radius: 25% 25% 46% 50% / 0% 0% 20% 20%;
}
.image-slider {
    width: 100%;
    overflow: hidden;
}

img {
    transition: opacity 0.5s ease;
}
/* Fading animation */
.fade {
    animation-name: fade;
    animation-duration: 1s;
}

@keyframes fade {
    0% {
        opacity: 0.4;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0.4;
    }
}

.slide {
    transition: transform 2s ease; /* Adjust the duration and timing function as needed */
}
.gradient-div {
    background: linear-gradient(
        to bottom,
        #333,
        #fff
    ); /* Set the colors you want */
}
.homebg {
    background: url("../../../asset/ldpg.webp") no-repeat;
    background-size: cover;
    background-position: center;
}
.homebg2 {
    background: url("../../../asset/front/10.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0px -220px;
}
.bottomgradient {
    background: rgb(255, 0, 0);
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(255, 255, 255, 0) 100%
    );
}
.topgradient {
    background: rgb(0, 0, 0);
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 50%,
        rgba(255, 255, 255, 0) 100%
    );
}
.ygradient {
    background: rgb(255, 255, 255);
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 1) 50%,
        rgba(255, 255, 255, 0) 100%
    );
}

.leftgradient {
    background: rgb(255, 255, 255);
    background: linear-gradient(
        270deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 1) 80%
    );
}
.rightgradient {
    background: rgb(255, 255, 255);
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 1) 80%
    );
}
.leftanglegradient {
    background: rgb(255, 255, 255);
    background: linear-gradient(
        220deg,
        rgba(255, 255, 255, 0) 20%,
        rgba(0, 0, 0, 1) 70%
    );
}
.radialgradient {
    background: rgb(255, 204, 0);
    background: radial-gradient(
        circle,
        rgba(255, 204, 0, 1) 0%,
        rgba(255, 255, 255, 1) 50%
    );
}
.zindex {
    z-index: 10;
}
</style>

<template>
    <ResponsiveNavBar />

    <div
        class="h-screen homebg xl:bg-cover w-screen flex items-center justify-center"
    >
        <div
            class="xl:text-7xl text-3xl py-2 text-zinc-50 h-max text-center tracking-widest font-bold flex flex-col items-center justify-center overflow-hidden"
        >
            <img
                src="../../../asset/logo.png"
                class="xl:w-44 w-32"
                data-aos="fade-down"
                data-aos-duration="700"
                data-aos-easing="ease-in-out-back"
            />
            <span
                data-aos="zoom-in-down"
                data-aos-duration="1000"
                data-aos-delay="600"
                data-aos-easing="ease-in-out-back"
                >Cooperative College</span
            >
            <span
                class="xl:text-3xl text-xl"
                data-aos="zoom-in-down"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-back"
                data-aos-delay="650"
                >of the</span
            >
            <span
                data-aos="zoom-in-down"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-back"
                data-aos-delay="700"
                >Philippines</span
            >
            <span
                class="xl:text-base text-xs tracking-tight w-3/4 mt-4"
                data-aos="zoom-in-down"
                data-aos-duration="1000"
                data-aos-delay="800"
                data-aos-easing="ease-in-out-back"
                >Empowering Futures, Building Together: Your Gateway to
                Cooperative Excellence at <br /><span
                    class="text-theme2 xl:text-lg text-sm"
                    >Cooperative College of the Philippines</span
                >.</span
            >
            <div
                class="w-screen ygradient h-1/2 absolute bottom-[-15rem]"
            ></div>
        </div>
    </div>

    <div class="w-screen h-screen homebg2">
        <div class="leftanglegradient relative h-screen w-screen z-20">
            <span
                data-aos="fade-right"
                data-aos-duration="500"
                class="text-6xl w-1/2 pl-10 text-white h-max absolute top-1/2 transform -translate-y-1/2"
                ><span class="text-theme2 text-7xl">CLIMBS</span> visit to the
                Wharton School, University of Pennsylvania</span
            >
            <span
                class="text-sm w-2/3 pl-10 xl:pt-10 text-white h-max absolute top-3/4 transform -translate-y-1/2"
                data-aos="fade-right"
                data-aos-duration="500"
            >
                Meeting experts in the fields of climate policy , resilience and
                environmental economics supports the ongoing efforts of CLIMBS
                in its climate action activities like the Weather Protect
                Insurance (WPI) and CLIMBS Community Action Response and1x
                Emergency Services'(CARES) community programs and services.
                Susanna Berkouwer, Assistant Professor of Business Economics &
                Public Policy, Wharton School, University of Pennsylvania
                introduced Donna Dizon of CLIMBS and Wendy Smith of Global
                Parametrics to Michael Weisberg, senior faculty fellow and
                director of post-graduate programs and advisor to the United
                Nations Framework Convention on Climate Change, and contributing
                author to the "Intergovernmental Panel on Climate Change's Sixth
                Assessment Report”; and Garrett M. Albistegui Adler (not in
                photo), an interdisciplinary environmental social scientist
                focused on political and social impacts of climate change and
                variability. Strengthening our partnerships and understanding
                more of the cooperatives and how the holistic risk solutions
                work in the Philippines is essential as we scale our innovative
                products and services like the Weather Protect Insurance
                (WPI).</span
            >
        </div>
    </div>

    <div
        class="bg-gradient-to-b from-[#ffcc00] to-white w-screen h-screen flex items-center justify-center"
    >
        <span></span>
        <div class="w-full px-10 h-max flex justify-center items-center">
            <div
                class="w-1/3 mx-2 h-max px-10 py-10 rounded-3xl pt-4"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="300"
            >
                <img
                    src="../../../asset/front/6.webp"
                    class="rounded-3xl hover:scale-110 hover:-rotate-3 transition duration-500 overflow-hidden"
                />
                <div class="mt-5 text-2xl text-center text-theme1">
                    Educational Forum: “Sustainability for Planet and People”
                </div>
                <div class="text-sm text-center text-tight">
                    51st General Assembly of CLIMBS Life and General Insurance
                    Cooperative with the theme "Sustainability for Planet and
                    People" on April 26, 2023, at the Atrium, Limketkai Center.
                </div>
            </div>
            <div
                class="w-1/3 mx-2 h-max px-10 py-10 rounded-3xl pt-4"
                data-aos="fade-up"
                data-aos-duration="500"
            >
                <img
                    src="../../../asset/front/7.webp"
                    class="rounded-3xl hover:scale-110 transition duration-500 overflow-hidden"
                />
                <div class="mt-5 text-xl text-center text-theme1">
                    Ceremonial Signing of Memorandum of Agreement between the
                    University of Chicago Booth School of Business and Wharton
                    School of the University of Pennsylvania
                </div>
                <div class="text-sm text-center text-tight">
                    Business represented by Prof. Joshua T. Dean—Assistant
                    Professor of Behavioral Science and Economics, The Wharton
                    School of the University of Pennsylvania represented by
                    Prof. Susanna B. Berkouwer—Assistant Professor of Business
                    Economics and Public Policy, and CLIMBS Life and General
                    Insurance Cooperative through the Co-operative College of
                    the Philippines.
                </div>
            </div>
            <div
                class="w-1/3 mx-2 h-max px-10 py-10 rounded-3xl pt-4"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="400"
            >
                <img
                    src="../../../asset/front/8.webp"
                    class="rounded-3xl hover:scale-110 transition duration-500 overflow-hidden hover:rotate-3"
                />
                <div class="mt-5 text-2xl text-center text-theme1">
                    Launching of the "Youth for Coops"
                </div>
                <div class="text-sm text-center text-tight">
                    Education is one of CLIMBS’ advocacy as a cooperative. The
                    cooperative movement itself has a long-standing and
                    distinguished commitment to education which is one of its
                    founding principles—specifically, the Principle No. 5
                    wherein great part of it is to inform and involve the young
                    people, that represents not only the future of our country.
                </div>
            </div>
        </div>
    </div>

    <!-- 
    <div
        class="flex xl:flex-row h-max flex-col w-screen justify-center items-center"
    >
        <div
            class="max-w-7xl h-max w-screen flex flex-col xl:flex-row justify-center items-center"
        >
            <div
                class="h-max w-screen xl:w-full z-50 xl:mx-0 xl:my-5 flex px-6 xl:px-0 items-center justify-center"
                data-aos="fade-left"
                data-aos-delay="1000"
                data-aos-duration="1000"
            >
                <img
                    src="../../../asset/lpg1.jpg"
                    class="xl:rounded-xl rounded-3xl shadow-2xl h-full xl:w-max w-full z-50"
                />
            </div>

            <div
                class="flex flex-col xl:py-10 xl:rounded-xl justify-start xl:mt-4 items-start h-max w-screen xl:w-1/2"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="1000"
            >
                <p
                    class="xl:text-7xl text-start xl:text-center text-lg px-8 mt-4 xl:mb-8 text-theme1 z-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]"
                >
                    Cebu Training Session
                </p>
                <p
                    class="text-white-800 text-xs xl:text-base tracking-tight text-justify px-8 py-4 z-10"
                >
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp The morning session
                    on Deepening our Co-operative Identity was facilitated by
                    the
                    <strong>Co-op College PH</strong> team headed by CEO &
                    Principal <strong>Donna Dizon</strong>. This interactive
                    learning activity brought out the creativity of the
                    participants in making their own “Halo-halo” which requires
                    certain key ingredients on embodying our identity as co-op
                    leaders. The afternoon session on Co-op Financial Literacy:
                    The Usage of Statutory Funds was conducted by our Resource
                    Speaker and Trainer
                    <strong>Hon. Gervacio Piator, CPA, MBA, DM, PhD.</strong> A
                    total of 35 participants coming from 15 co-operatives
                    nationwide joined and actively participated on these
                    sessions. To learn more and be involved with the Co-op
                    College programs (both locally and abroad), join us and be a
                    member of the
                    <strong class="text-theme1 xl:text-xl text-md"
                        >National Federation of Cooperative Primaries in the
                        Philippines - Nafecoop</strong
                    >
                    now!
                </p>
            </div>
        </div>
    </div> -->

    <div
        class="w-max flex"
        data-aos="zoom-out"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out-back"
    >
        <div
            class="slide flex flex-col w-screen"
            :style="{
                transform: `translateX(${-currentIndex * 100}%)`,
            }"
            v-for="(image, index) in cover"
        >
            <div
                class="w-screen flex h-full flex-col items-center justify-center lpg"
            >
                <img
                    :src="image"
                    class="carimg flex items-center justify-center h-full slide xl:w-5/6 xl:h-96 object-cover w-full xl:rounded-3xl rounded-none xl:mt-10 transition duration-1000"
                    alt="Carousel Image 1"
                    :class="{
                        'scale-100': currentIndex === index,
                        'scale-[.25]': currentIndex !== index,
                    }"
                />
            </div>
        </div>
    </div>

    <h1
        class="text-center xl:text-7xl text-2xl px-4 mt-5 text-theme1"
        data-aos="zoom-in"
        data-aos-delay="1000"
        data-aos-duration="500"
    >
        Succession Planning and Importance of Strengthening Middle Management
    </h1>

    <div
        class="xl:h-max md:h-max xl:w-screen flex justify-center items-center xl:text-base text-xs text-justify xl:my-12 py-5 xl:px-0 px-4"
        data-aos="fade-up"
        data-aos-duration="2000"
    >
        <p class="md:mx-8 max-w-7xl">
            One of our esteemed speakers for this afternoon for the topic on
            Succession Planning and Importance of Strengthening Middle
            Management in the Co-ops: Atty. Marc Castrodes of Areté Leadership.
            A leader’s lasting value is measured by succession indeed, most
            especially in the co-op movement.<br /><br />
            To learn more, send us a message at:<br />
            institute@climbs.coop (Co-op College PH)<br />
            nafemarketing22@climbs.coop (NaFeCOOP)<br />
        </p>
    </div>

    <div
        class="w-screen h-screen flex bg-gradient-to-b from-white to-[#FFCC00]"
    >
        <div
            class="w-3/5 h-full flex justify-center items-center relative"
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-delay="500"
        >
            <img
                src="../../../asset/front/1.webp"
                class="h-128 w-1/2 rounded-3xl absolute top-1/2 left-1/3 transform -translate-y-1/4 -translate-x-1/2 rotate-6"
            />
            <img
                src="../../../asset/front/4.webp"
                class="h-128 w-1/2 rounded-3xl absolute top-1/3 left-2/3 transform -translate-y-1/2 -translate-x-1/2 -rotate-3"
            />
        </div>
        <div class="w-2/5 h-full flex flex-col items-center justify-center">
            <div
                class="h-1/3 w-full flex items-center justify-center flex-col px-10"
                data-aos="zoom-out"
                data-aos-duration="1000"
            >
                <span class="text-4xl text-theme1"
                    >Ceremonial Turn-over of the Purchased 2 ha. lot by CLIMBS
                    Life and General Insurance Cooperative to Co-operative
                    College of the Philippines</span
                >
                <span class="text-md mt-4"
                    >On March 14, 2023, the Ceremonial Turn-over of the
                    Purchased 2 ha. lot by CLIMBS Life and General Insurance
                    Cooperative to Co-operative College of the Philippines was
                    carried-out wherein soon to rise will be the latter's campus
                    in El Salvador City, Misamis Oriental, Philippines.</span
                >
            </div>
            <div
                class="w-full flex h-max overflow-hidden justify-center items-center"
            >
                <img src="../../../asset/logo.png" class="w-40 h-40" />
            </div>
            <div
                class="h-1/3 w-full flex items-center justify-center flex-col px-10"
                data-aos="zoom-out"
                data-aos-duration="1000"
            >
                <span class="text-4xl w-full text-start text-theme1"
                    >Cooperative Executive Masterclass in Manchester, UK</span
                >
                <span class="text-md mt-4"
                    >48 official delegates coming from 17 Philippine
                    co-operative organizations finally arrived at the very
                    birthplace of the modern co-operative movement: the Rochdale
                    Pioneers Museum. It is located in Rochdale, Greater
                    Manchester. This is where the Rochdale Equitable Pioneers
                    Society started trading on 21 December 1844.</span
                >
            </div>
        </div>
    </div>

    <div
        class="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-t from-white to-[#FFCC00] text-center"
    >
        <span
            class="text-5xl w-2/3 mb-10 text-theme1"
            data-aos="fade-down"
            data-aos-duration="1000"
            >Deepening Our Cooperative Identity Through Education & The Usage of
            Cooperative Statutory Funds</span
        >

        <span
            class="text-md w-3/4 mb-10"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="300"
            >The morning session on Deepening our Co-operative Identity was
            facilitated by the Co-op College Ph team headed by CEO & Principal
            Donna Dizon. This interactive learning activity brought out the
            creativity of the participants in making their own “Halo-halo” which
            requires certain key ingredients on embodying our identity as co-op
            leaders. The afternoon session on Co-op Financial Literacy: The
            Usage of Statutory Funds was conducted by our Resource Speaker and
            Trainer Hon. Gervacio Piator, CPA, MBA, DM, PhD. A total of 35
            participants coming from 15 co-operatives nationwide joined and
            actively participated on these sessions.</span
        >
        <div
            class="flex items-center justify-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-out-back"
        >
            <img src="../../../asset/front/5.webp" class="w-4/5 rounded-3xl" />
        </div>
    </div>

    <div class="w-screen h-max radialgradient">
        <div class="flex">
            <div
                class="w-1/2 flex items-center justify-center"
                data-aos="fade-right"
                data-aos-duration="1000"
            >
                <img
                    src="../../../asset/front/9.webp"
                    class="h-full w-2/3 rounded-3xl"
                />
            </div>
            <div class="w-1/2 flex items-center justify-center flex-col px-10">
                <span
                    class="text-5xl text-theme1"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    >CLIMBS visit to the University of Chicago Booth School of
                    Business</span
                >
                <span class="pt-10" data-aos="zoom-out" data-aos-duration="1000"
                    >CLIMBS Life and General Insurance Cooperative
                    representatives led by President and CEO Noel Raboy, MBA Ex
                    were welcomed at the University of Chicago Booth School of
                    Business by Economics’ Assistant Professor , Joshua T. Dean.
                    They visited the Mindworks, a working laboratory of the
                    school and met with world-renowned economist, Rachel
                    Glennerster, Associate Professor of Economics in the
                    Division of Social Science. The Co-operative College of the
                    Philippines’ ongoing research collaboration with University
                    of Chicago Booth School of Business includes a work on the
                    innovative and holistic risk solutions of the enhanced
                    Weather Protect Insurance and its cooperative members and
                    farmers that are part of the climate action initiatives of
                    CLIMBS. CLIMBS Director Hermes Vergara representing the Oro
                    Integrated Cooperative, Director Noel Quidilla of Tagum
                    Cooperative and CLIMBS VP for Admin and Corp. Planning/ CEO
                    & Principal of the Co-op College Ph, Donna Dizon, CHRP were
                    also in the meeting.</span
                >
            </div>
        </div>
        <div class="flex">
            <div class="w-1/2 flex items-center justify-center flex-col px-10">
                <span
                    class="text-5xl text-theme1 w-full text-start"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    >Brand Activation for Co-operatives</span
                >
                <span class="pt-10" data-aos="zoom-out" data-aos-duration="1000"
                    >With a total of 137 participants coming from 100
                    co-operatives nationwide, the webinar session on Brand
                    Activation for Cooperatives was concluded today. This
                    webinar is in collaboration with the National Federation of
                    Cooperative Primaries in the Philippines - Nafecoop, PPSA,
                    Smart Communications, Inc., and PLDT. The said session
                    widened our perspective on the possibilities of creating a
                    stronger, more meaningful connection between our respective
                    brand and our target audience in a co-operative
                    context.</span
                >
            </div>
            <div
                class="w-1/2 flex items-center justify-center"
                data-aos="fade-left"
                data-aos-duration="1000"
            >
                <img
                    src="../../../asset/front/12.webp"
                    class="h-full w-max rounded-3xl"
                />
            </div>
        </div>
    </div>

    <div
        class="h-max py-8 w-screen flex flex-wrap justify-center items-center px-4 text-sm"
    >
        <div class="flex flex-col xl:flex-row justify-center items-center">
            <div
                class="card relative text-xl px-4 text-center flex flex-col justify-center items-center my-4 mx-4 mb-10 h-96 xl:w-96 w-80 bg-theme2 rounded-xl"
                data-aos="zoom-out"
                data-aos-duration="1000"
                data-aos-delay="300"
            >
                <font-awesome-icon
                    icon="fa-solid fa-note-sticky "
                    class="text-theme1 xl:h-16 h-12 mb-4 absolute z-40 hover:opacity-0"
                />
                <p
                    class="cardtext px-12 xl:px-8 z-50 flex items-center justify-center h-96 w-80 xl:w-96 opacity-0 hover:opacity-100 transition duration-700 text-theme1 rounded-2xl cursor-pointer"
                >
                    National Federation of Cooperative Primaries in the
                    Philippines -(NaFeCOOP)National Federation of Cooperative
                    Primaries in the Philippines - (NaFeCOOP).
                </p>
            </div>
            <div
                class="card px-4 text-center flex flex-col justify-center items-center my-4 mb-10 h-96 xl:w-96 w-80 bg-theme2 mx-4 rounded-xl"
                data-aos="zoom-out"
                data-aos-duration="1000"
                data-aos-delay="500"
            >
                <font-awesome-icon
                    icon="fa-solid fa-coins"
                    class="text-theme1 h-10 xl:h-16 absolute z-40 hover:opacity-0 mb-4"
                />
                <p
                    class="cardtext px-12 xl:px-8 bg-theme2 z-50 flex flex-col items-center justify-center h-96 w-80 xl:w-96 opacity-0 hover:opacity-100 transition duration-700"
                >
                    <span class="text-xl"
                        >The NaFeCOOP and its relation to the Co-op College
                        PH:</span
                    ><br />
                    70% Consumable - for education, training and other related
                    expenditures.<br />
                    20% Redeemable - If not used in 5 years subject to terms and
                    conditions
                    <br />
                    10% Advocacy Fund - For Federation, Education and Training
                    Advocacy.<br />
                </p>
            </div>
            <div
                class="card px-4 flex flex-col justify-center xl:text-sm text-xs items-center my-4 mb-10 h-96 xl:w-96 w-80 bg-theme2 mx-4 rounded-xl text-center"
                data-aos="zoom-out"
                data-aos-duration="1000"
                data-aos-delay="700"
            >
                <font-awesome-icon
                    icon="fa-solid fa-lightbulb"
                    class="text-theme1 xl:h-16 h-12 mb-4 absolute z-40 hover:opacity-0"
                />
                <p
                    class="cardtext px-12 xl:px-8 bg-theme2 z-50 flex flex-col items-center justify-center h-96 w-80 xl:w-96 opacity-0 hover:opacity-100 transition duration-700"
                >
                    <span class="text-xl">The KoopSkwela </span>
                    A mobile learning hub and educational initiative by CLIMBS
                    Life and General Insurance Cooperative, the Co-operative
                    College of the Philippines (Co-op College PH), Coop Life
                    General Insurance & Financial Services Agency (CLIFSA),
                    MASS-SPECC Cooperative Development Center, the National
                    Confederation of Cooperatives (NATCCO Network), First
                    Community Cooperative (FICCO), the National Federation of
                    Cooperative Primaries in the Philippines (NaFeCOOP), and
                    with the coordination of the Regional Cooperative
                    Development Council (RCDC) - Region X.
                </p>
            </div>
        </div>

        <div class="flex flex-col xl:flex-row justify-center items-center">
            <div
                class="card px-4 text-center flex flex-col justify-center items-center my-4 mb-10 h-96 xl:w-96 w-80 bg-theme2 mx-4 rounded-xl"
                data-aos="zoom-out"
                data-aos-duration="1000"
                data-aos-delay="900"
            >
                <font-awesome-icon
                    icon="fa-solid fa-briefcase-medical"
                    class="text-theme1 xl:h-16 h-12 mb-4 absolute z-40 hover:opacity-0"
                />
                <p
                    class="cardtext px-12 xl:px-8 bg-theme2 z-50 flex flex-col items-center justify-center h-96 w-80 xl:w-96 opacity-0 hover:opacity-100 transition duration-700"
                >
                    From the CIFL to the Co-op College PH The CLIMBS Institute
                    of Financial Literacy (CIFL) strategically pivoted to the
                    CLIMBS Institute of Management (CIM), and finally to the
                    Co-operative College of the Philippines (Co-op College PH)
                    which aims to further co-operative education by embodying
                    the Co-operative Values & Principles, providing higher level
                    of trainings, upgrade educational & learning platforms, and
                    widen its reach through local & international partnerships.
                </p>
            </div>
            <div
                class="card px-4 text-center flex flex-col justify-center items-center my-4 mb-10 h-96 xl:w-96 w-80 bg-theme2 mx-4 rounded-xl"
                data-aos="zoom-out"
                data-aos-duration="1000"
                data-aos-delay="1100"
            >
                <font-awesome-icon
                    icon="fa-solid fa-chart-simple"
                    class="text-theme1 xl:h-16 h-12 mb-4 absolute z-40 hover:opacity-0"
                />
                <p
                    class="cardtext px-12 xl:px-8 bg-theme2 z-50 flex flex-col items-center justify-center h-96 w-80 xl:w-96 opacity-0 hover:opacity-100 transition duration-700"
                >
                    <span class="text-xl">Cooperative Management</span><br />
                    in partnership with the Asian Institute of Management (AIM).
                </p>
            </div>
            <div
                class="card px-4 text-center flex flex-col justify-center items-center my-4 mb-10 h-96 xl:w-96 w-80 bg-theme2 mx-4 rounded-xl"
                data-aos="zoom-out"
                data-aos-duration="1000"
                data-aos-delay="1300"
            >
                <font-awesome-icon
                    icon="fa-solid fa-earth-asia"
                    class="text-theme1 xl:h-16 h-12 mb-4 absolute z-40 hover:opacity-0"
                />
                <p
                    class="cardtext px-12 xl:px-8 bg-theme2 z-50 flex flex-col items-center justify-center h-96 w-80 xl:w-96 opacity-0 hover:opacity-100 transition duration-700"
                >
                    <span class="text-xl">
                        The Global Co-operative Executive Masterclass</span
                    ><br />
                    Was held in Manchester, United Kingdom, in the heart of the
                    birthplace of the modern Co-operative Movement, following in
                    the footsteps of the Rochdale Pioneers.
                </p>
            </div>
        </div>
    </div>

    <Footer />
</template>

<script>
import img1 from "../../../asset/front/3.webp";
import img2 from "../../../asset/front/2.webp";

export default {
    data() {
        return {
            cover: [img1, img2],
            currentIndex: 0,
        };
    },

    mounted() {
        setInterval(() => {
            this.nextSlide();
        }, 5000);
    },
    methods: {
        prevSlide() {
            this.currentIndex =
                (this.currentIndex - 1 + this.cover.length) % this.cover.length;
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.cover.length;
        },
    },
};

AOS.init({ startEvent: "load", once: "true," });
AOS.refresh();
</script>
