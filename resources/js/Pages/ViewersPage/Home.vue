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
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 1) 85%
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
@media only screen and (max-width: 600px) {
    .homebg2 {
        background-size: contain;
        background-position: top;
    }
    .leftanglegradient {
        background: rgb(255, 255, 255);
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(0, 0, 0, 1) 50%
        );
    }
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
                Cooperative Excellence <br /><span
                    class="text-theme2 xl:text-lg text-sm"
                    >Cooperative College of the Philippines</span
                >.</span
            >
        </div>
    </div>

    <div
        class="w-screeen h-max bg-gradient-to-t from-theme2 to-white flex flex-col space-y-3 justify-center items-center"
    >
        <div
            class="xl:w-3/4 w-[90%] h-max bg-white rounded-b-3xl mx-5 px-8 py-4 text-start"
        >
            <div class="text-5xl text-theme1 text-center py-4">Our Mission</div>
            <span
                >I. Provide crystalized best practices for cooperators;
                <br />II. Safekeeping knowledge that will engender innovations
                and enlightenment; and <br />III. Generate the cycle of
                empowerment amongst its participating cooperators towards social
                transformation.</span
            >
        </div>
        <div
            class="xl:w-3/4 w-[90%] h-max bg-white rounded-3xl mx-5 px-8 py-4 text-center"
        >
            <span class="text-5xl text-theme1">Our Vision</span>
            <br /><br />
            <span
                >“A learning center for enlightened and empowered cooperators in
                the Philippines.”</span
            >
        </div>

        <div
            class="xl:w-3/4 w-[90%] px-10 rounded-3xl py-4 pb-6 h-max bg-gradient-to-t from-theme2 to-white text-start"
        >
            <div class="text-5xl text-theme1 text-center h-max py-2">
                Purpose
            </div>
            <br />

            <span
                >The Co-operative College of the Philippines Articles of
                Incorporation states, that the purpose for which such
                corporation is incorporated are: <br />1. To offer tertiary
                education; <br />2. Strengthening the Collective Movement
                through Education; <br />3. To value the Collaborative identity
                through education; <br />4. To provide continuous learning,
                professional management, and higher level of knowledge focusing
                on skills development; <br />5. Offer exceptional and
                tailored-fit courses relevant to professional leadership current
                issues and challenges; <br />6. Help build resiliency and
                sustainability among the associations, people’s organization and
                communities.</span
            >
        </div>
    </div>

    <div class="bg-gradient-to-b from-[#ffcc00] to-white">
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
    <div class="w-screen flex items-center justify-center">
        <div class="pt-20 overflow-hidden w-4/5 mt-6">
            <div
                class="text-theme2 py-2 w-max text-4xl xl:text-7xl text-center bg-gradient-to-r from-theme1 to-theme2 text-transparent bg-clip-text"
            >
                Who are we?
            </div>
            <br /><br />

            <section
                class="flex flex-col justify-center items-center text-justify h-max"
            >
                <p class="text-theme1 xl:text-2xl">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                        ref="typewriter"
                        class="text-base xl:text-2xl"
                    ></span
                    ><span id="cursor">|</span>
                </p>
            </section>
        </div>
    </div>

    <div
        class="w-screen h-screen flex xl:flex-row flex-col bg-gradient-to-b from-white to-[#FFCC00]"
    >
        <div
            class="xl:w-3/5 w-full xl:h-screen h-[40%] flex justify-center items-center xl:relative"
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-delay="500"
        >
            <img
                src="../../../asset/front/1.webp"
                class="xl:h-max h-40 w-1/2 rounded-3xl absolute top-1/2 left-1/3 transform -translate-y-1/4 -translate-x-1/2 rotate-6"
            />
            <img
                src="../../../asset/front/4.webp"
                class="xl:h-max h-40 w-1/2 rounded-3xl absolute top-1/3 left-2/3 transform -translate-y-1/2 -translate-x-1/2 -rotate-3"
            />
        </div>
        <div
            class="xl:w-2/5 w-full xl:h-screen h-max flex flex-col items-center justify-center"
        >
            <div
                class="xl:h-2/3 h-80 w-full flex items-center justify-center flex-col px-10"
                data-aos="zoom-out"
                data-aos-duration="1000"
            >
                <span class="xl:text-4xl text-lg text-theme1"
                    >Ceremonial Turn-over of the Purchased 2 ha. lot by CLIMBS
                    Life and General Insurance Cooperative to Co-operative
                    College of the Philippines</span
                >
                <span class="xl:text-md text-[13px] mt-4"
                    >On March 14, 2023, the Ceremonial Turn-over of the
                    Purchased 2 ha. lot by CLIMBS Life and General Insurance
                    Cooperative to Co-operative College of the Philippines was
                    carried-out wherein soon to rise will be the latter's campus
                    in El Salvador City, Misamis Oriental, Philippines.</span
                >
            </div>

            <div
                class="xl:h-1/3 h-max w-full xl:pt-0 pt-4 flex items-center justify-center flex-col px-10"
                data-aos="zoom-out"
                data-aos-duration="1000"
            >
                <span class="xl:text-4xl text-lg w-full text-start text-theme1"
                    >Cooperative Executive Masterclass in Manchester, UK</span
                >
                <span class="xl:text-md text-[13px] mt-4"
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
        class="h-max pt-4 w-screen bg-gradient-to-b from-theme2 to-white text-theme1 overflow-y-hidden xl:px-8"
    >
        <p
            class="text-theme1 text-4xl px-4"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
        >
            Our Focus Areas:
        </p>
        <p
            class="text-xl px-4"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="1000"
        >
            (1) Risk Management
        </p>
        <p
            class="text-xl px-4"
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-duration="1000"
        >
            (2) Financial Literacy
        </p>
        <p
            class="text-xl px-4"
            data-aos="fade-left"
            data-aos-delay="800"
            data-aos-duration="1000"
        >
            (3) Executive Management
        </p>
        <p
            class="mb-10 text-xl px-4"
            data-aos="fade-left"
            data-aos-delay="1000"
            data-aos-duration="1000"
        >
            (4) Leadership Management and Development
        </p>
        <p
            class="text-theme1 xl:text-4xl text-2xl"
            data-aos="fade-right"
            data-aos-duration="1000"
        >
            What We Offer :
        </p>

        <div
            class="bg-white h-max rounded-3xl w-1/1 px-8 xl:px-0 my-4 flex justify-start xl:flex-row flex-col items-start xl:gap-10 xl:text-xl text-sm"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="500"
        >
            <div class="xl:w-1/2 xl:px-8 py-8 h-max pb-4 xl:pb-8">
                <div class="">
                    <h1 class="xl:text-3xl text-xl underline">
                        Executive Courses (E)
                    </h1>

                    &#x2022; Post - Graduate Certificate in Cooperative
                    Management (PGC CM)<br />
                    &#x2022; Global Co-operative Executives Masterclass<br />
                    &#x2022; Strategic Planning and Thinking Management<br />
                    &#x2022; Human Capital Management<br />
                    &#x2022; Cooperative Digital Transformation<br />
                </div>
                <br />
                <div>
                    <h1 class="xl:text-3xl text-xl underline">
                        Leadership Courses (L)
                    </h1>

                    &#x2022; Cooperative Leadership Program<br />
                    &#x2022; Cooperative Management Training<br />
                    &#x2022; Raising Cooperative Leaders<br />
                    &#x2022; Advcanced Cooperative Business Management<br />
                </div>
            </div>
            <div class="xl:w-1/2 xl:px-8 py-8 pt-0 h-max xl:pt-8">
                <div>
                    <h1 class="xl:text-3xl text-xl underline">
                        Risk Manangement Courses (R)
                    </h1>

                    &#x2022; Business Continuity Planning<br />
                    &#x2022; Financial Literacy and Management<br />
                    &#x2022; Environmental, Social and Corporate Governance
                    (ESG)<br />
                    &#x2022; Corporate Governance and Enterprise Risk Management
                    (ERM)<br />
                </div>
                <br />
                <div>
                    <h1 class="xl:text-3xl text-xl underline">Others (O)</h1>

                    &#x2022; Community Engagement through our Community
                    Development Fund (CDF): A Collective Action Initiative<br />
                    &#x2022; Digital Marketing Strategy for Managers and
                    Entrepreneurs<br />
                    &#x2022; Diversity and Inclusivity / Social Concerns<br />
                    &#x2022; The Cooperative Culture and Sustainable Development
                    Goals<br />
                    &#x2022; Customized E-Learning<br />
                    &#x2022; Customized Face-to-Face Programs<br />
                </div>
            </div>
        </div>
    </div>

    <div
        class="w-screen h-max py-10 mt-16 px-2 xl:px-0 flex flex-wrap items-center justify-center xl:space-x-6"
    >
        <div
            class="w-screen text-theme1 text-center xl:text-7xl text-3xl tracking-widest"
        >
            MAJOR PARTNERS
        </div>
        <div
            class="my-4 h-128 pt-10 pb-1 w-96 bg-gradient-to-b from-theme2 via-white to-zinc-100 flex flex-col items-center justify-center rounded-3xl px-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-back"
            data-aos-delay="500"
        >
            <div class="h-1/4 w-full flex items-center justify-center">
                <img
                    src="../../../asset/majorpartners/aim.png"
                    class="rounded-full object-cover h-full"
                />
            </div>
            <div
                class="h-1/4 text-start w-full text-2xl mt-2 flex items-center justify-center"
            >
                Asia Institute of Management
            </div>
            <div class="w-full h-1/4 flex items-center justify-center">
                <p class="text-sm text-zinc-500">
                    AIM doesn’t just sit at the heart of fluid change, but
                    leads, inspires, and transforms the forces that exist around
                    it — ultimately changing the perception of what an
                    educational institution can be.
                </p>
            </div>

            <div class="h-1/4 w-full flex items-center justify-center">
                <a
                    class="bg-blue-500 py-6 px-12 w-full my-4 text-white rounded-3xl flex text-center items-center justify-center hover:bg-theme1 transition duration-500"
                    href="https://aim.edu/"
                    target="_blank"
                >
                    Visit<i class="text-xs ml-2"
                        ><font-awesome-icon icon="fa-solid fa-arrow-right-long"
                    /></i>
                </a>
            </div>
        </div>
        <div
            class="my-4 h-128 pt-10 pb-1 w-96 bg-gradient-to-b from-theme2 via-white to-zinc-100 flex flex-col items-center justify-center rounded-3xl px-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-back"
            data-aos-delay="600"
        >
            <div class="w-full h-1/4 flex items-center justify-center">
                <img
                    src="../../../asset/majorpartners/icmif.png"
                    class="rounded-full object-contain h-full"
                />
            </div>
            <div class="w-full h-1/4 flex items-center justify-center">
                <div class="text-start w-full text-2xl mt-2">
                    International Cooperative and Mutual Insurance Federation
                </div>
            </div>
            <div class="w-full h-1/4 flex items-center justify-center">
                <p class="text-sm text-zinc-500">
                    Unlike other industry associations or networking platforms
                    you might know, because it is the only place where
                    purpose-led insurers from across the globe come together to
                    strengthen their organisations within a non-competitive
                    environment.
                </p>
            </div>
            <div class="w-full h-1/4 flex items-center justify-center">
                <a
                    class="bg-blue-500 py-6 px-12 w-full my-4 text-white rounded-3xl flex text-center items-center justify-center hover:bg-theme1 transition duration-500"
                    href="https://www.icmif.org/"
                    target="_blank"
                >
                    Visit<i class="text-white text-xs ml-2"
                        ><font-awesome-icon icon="fa-solid fa-arrow-right-long"
                    /></i>
                </a>
            </div>
        </div>
        <div
            class="my-4 h-128 pt-10 pb-1 w-96 bg-gradient-to-b from-theme2 via-white to-zinc-100 flex flex-col items-center justify-center rounded-3xl px-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-back"
            data-aos-delay="700"
        >
            <div class="w-full h-1/4 flex items-center justify-center">
                <img
                    src="../../../asset/majorpartners/cc.png"
                    class="rounded-full object-contain h-full"
                />
            </div>
            <div class="w-full h-1/4 flex items-center justify-center">
                <div class="text-start w-full text-2xl mt-2">
                    Cooperative College (UK)
                </div>
            </div>
            <div class="w-full h-1/4 flex items-center justify-center">
                <p class="text-sm text-zinc-500">
                    Here at the Co-operative College, we’ve always done things
                    differently. Born over 100 years ago out of a need for
                    radical education that fights for social justice, our
                    mission hasn’t changed.We are fearless thinkers, innovators
                    and passionate about change.
                </p>
            </div>

            <div class="w-full h-1/4 flex items-center justify-center">
                <a
                    class="bg-blue-500 py-6 px-12 w-full my-4 text-white rounded-3xl flex text-center items-center justify-center hover:bg-theme1 transition duration-500"
                    href="https://www.co-op.ac.uk/"
                    target="_blank"
                >
                    Visit<i class="text-white text-xs ml-2"
                        ><font-awesome-icon icon="fa-solid fa-arrow-right-long"
                    /></i>
                </a>
            </div>
        </div>

        <div
            class="my-4 h-128 pt-10 pb-1 w-96 bg-gradient-to-b from-theme2 via-white to-zinc-100 flex flex-col items-center justify-center rounded-3xl px-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-back"
            data-aos-delay="800"
        >
            <div class="w-full h-1/4 flex items-center justify-center">
                <img
                    src="../../../asset/majorpartners/arete.png"
                    class="rounded-full object-contain h-full"
                />
            </div>
            <div class="w-full h-1/4 flex items-center justify-center">
                <div class="text-start w-full text-2xl mt-2">Areté</div>
            </div>
            <div class="w-full h-1/4 flex items-center justify-center">
                <p class="text-sm text-zinc-500">
                    Areté has been in the industry of training and corporate
                    consulting since 2008. Its services cover a broad range of
                    learning and development interventions.
                </p>
            </div>

            <div class="w-full h-1/4 flex items-center justify-center">
                <a
                    class="bg-blue-500 py-6 px-12 w-full my-4 text-white rounded-3xl flex text-center items-center justify-center hover:bg-theme1 transition duration-500"
                    href="https://www.teamarete.org/"
                    target="_blank"
                >
                    Visit<i class="text-white text-xs ml-2"
                        ><font-awesome-icon icon="fa-solid fa-arrow-right-long"
                    /></i>
                </a>
            </div>
        </div>
        <div
            class="my-4 h-128 pt-10 pb-1 w-96 bg-gradient-to-b from-theme2 via-white to-zinc-100 flex flex-col items-center justify-center rounded-3xl px-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-back"
            data-aos-delay="900"
        >
            <div class="w-full h-1/4 flex items-center justify-center">
                <img
                    src="../../../asset/majorpartners/nafecoop.jpeg"
                    class="rounded-full object-contain h-full"
                />
            </div>
            <div class="w-full h-1/4 flex items-center justify-center">
                <div class="text-start w-full text-2xl mt-2">NaFeCoop</div>
            </div>
            <div class="w-full h-1/4 flex items-center justify-center">
                <p class="text-sm text-zinc-500">
                    Provides continuous learning , professional cooperative
                    management, and higher level of knowledge foc.
                </p>
            </div>

            <div class="w-full h-1/4 flex items-center justify-center">
                <a
                    class="bg-blue-500 py-6 px-12 w-full my-4 text-white rounded-3xl flex text-center items-center justify-center hover:bg-theme1 transition duration-500"
                    href="https://www.facebook.com/NaFeCoopOfficial"
                    target="_blank"
                >
                    Visit<i class="text-white text-xs ml-2"
                        ><font-awesome-icon icon="fa-solid fa-arrow-right-long"
                    /></i>
                </a>
            </div>
        </div>
    </div>

    <Footer />
</template>

<script>
import img1 from "../../../asset/front/3.webp";
import img2 from "../../../asset/front/2.webp";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faArrowRightLong);

export default {
    data() {
        return {
            cover: [img1, img2],
            currentIndex: 0,
            phrases: [
                "We are the sole-training needs provider of the National Federation of Cooperative Primaries of the Philippines (NaFeCOOP). We Strategically pivoted from CLIMBS Institute for Financial Literacy (CIFL) to CLIMBS Institute of Management (CIM), and now, the Co-operative College of the Philippines (Co-op College PH) to further cooperative education both locally and globally, embodies the cooperative values and principles, and upgrades its educational platforms.",
            ],
            sleepTime: 20,
            curPhraseIndex: 0,
        };
    },

    mounted() {
        setInterval(() => {
            this.nextSlide();
        }, 5000);

        setTimeout(() => {
            this.writeLoop();
        }, 3000);
    },
    methods: {
        prevSlide() {
            this.currentIndex =
                (this.currentIndex - 1 + this.cover.length) % this.cover.length;
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.cover.length;
        },
        sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        },
        async writeLoop() {
            while (true) {
                let curWord = this.phrases[this.curPhraseIndex];

                for (let i = 0; i < curWord.length; i++) {
                    this.$refs.typewriter.textContent = curWord.substring(
                        0,
                        i + 1
                    );
                    await this.sleep(this.sleepTime);
                }

                await this.sleep(this.sleepTime * 9999);
            }
        },
    },
};

AOS.init({ startEvent: "load", once: "true," });
AOS.refresh();
</script>
