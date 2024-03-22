<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "@/Pages/ViewersPage/Home.vue";
</script>

<template>
    NOTHING HERE

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
</template>

<script>
AOS.init({ startEvent: "load", once: "true," });
AOS.refresh();
</script>
