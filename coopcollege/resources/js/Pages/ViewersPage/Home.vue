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
</style>

<template>
    <Header />
    <ResponsiveNavBar />
    <div
        class="fixed xl:-mt-80 -mt-56 w-screen h-screen bg-sky-50 cardcontainer -z-10"
    ></div>

    <div
        id="maincontent"
        class="lpg flex justify-center items-center h-max w-screen bg-cover"
        data-aos="fade-in"
        data-aos-delay="500"
        data-aos-duration="1000"
    >
        <img
            src="../../../asset/landingpagenewest.jpg"
            class="bg-cover xl:w-3/4 w-full rounded-3xl xl:mt-8"
        />
    </div>

    <h1
        class="text-center xl:text-7xl mt-5 text-theme1"
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
        class="flex xl:flex-row h-max flex-col w-screen justify-center items-center"
    >
        <div
            class="max-w-7xl h-max w-screen flex flex-col xl:flex-row justify-center items-center"
        >
            <div
                class="h-max w-screen xl:w-1/3 xl:mr-10 z-50 xl:mx-0 xl:my-5 flex items-center justify-center"
                data-aos="fade-left"
                data-aos-delay="1000"
                data-aos-duration="1000"
            >
                <img
                    src="../../../asset/lpg1.jpg"
                    class="xl:rounded-xl rounded-3xl shadow-2xl h-max xl:w-max w-1/2 items-stretch z-50"
                />
            </div>

            <div
                class="flex flex-col xl:py-10 xl:rounded-xl justify-start xl:mt-4 items-start h-max w-screen xl:w-1/2"
                data-aos="fade-right"
                data-aos-delay="1100"
                data-aos-duration="1000"
            >
                <p
                    class="xl:text-7xl text-start text-lg px-8 mt-4 xl:mb-8 text-theme1 z-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]"
                >
                    Cebu Training Session
                </p>
                <p
                    class="text-white-800 text-xs xl:text-base tracking-wider text-justify px-8 py-4 z-10"
                >
                    The morning session on Deepening our Co-operative Identity
                    was facilitated by the
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
                    <strong
                        >National Federation of Cooperative Primaries in the
                        Philippines - Nafecoop</strong
                    >
                    now!
                </p>
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
AOS.init({ startEvent: "load", once: "true," });
AOS.refresh();
</script>
