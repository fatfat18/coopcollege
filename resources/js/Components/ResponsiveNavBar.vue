<script setup>
import { ref } from "vue";
import NavLink from "@/Components/NavLink.vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";

const showingNavigationDropdown = ref(false);
</script>

<style>
.trans {
    transition: 1s ease-in;
    transition: transform 1s ease-in-out;
}
.nav {
    z-index: 999;
}
</style>

<template>
    <div
        class="bg-opacity-50 absolute w-screen overflow-x-hidden top-0"
        data-aos="fade-down"
        data-aos-duration="1000"
    >
        <nav class="w-screen border-gray-100 trans">
            <!-- Primary Navigation Menu -->
            <div class="flex xl:justify-center justify-end xl:pt-2">
                <div class="flex w-max justify-center h-14 xl:h-20">
                    <div class="flex">
                        <!-- Navigation Links -->
                        <div
                            class="hidden text-zinc-50 space-x-1 text-md sm:flex trans font-bold"
                        >
                            <NavLink
                                :href="route('Home')"
                                :active="route().current('Home')"
                            >
                                HOME
                            </NavLink>

                            <NavLink
                                :href="route('News')"
                                :active="route().current('News')"
                            >
                                NEWS
                            </NavLink>

                            <NavLink
                                :href="route('AboutUs')"
                                :active="route().current('AboutUs')"
                            >
                                ABOUT US
                            </NavLink>
                            <NavLink
                                :href="route('LearnWithUs')"
                                :active="route().current('LearnWithUs')"
                            >
                                LEARN WITH US
                            </NavLink>
                            <NavLink
                                :href="route('Resources')"
                                :active="route().current('Resources')"
                            >
                                RESOURCES
                            </NavLink>
                            <NavLink
                                :href="route('Projects')"
                                :active="route().current('Projects')"
                            >
                                PROJECTS
                            </NavLink>
                        </div>
                    </div>

                    <!-- Hamburger -->
                    <div class="flex items-center sm:hidden trans">
                        <button
                            @click="
                                showingNavigationDropdown =
                                    !showingNavigationDropdown
                            "
                            class="trans inline-flex items-center justify-center p-2 rounded-md text-theme1 bg-zinc-200 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-300 focus:text-theme1 transition duration-500 ease-in-out"
                        >
                            <svg
                                class="h-6 w-8"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    :class="{
                                        hidden: showingNavigationDropdown,
                                        'inline-flex':
                                            !showingNavigationDropdown,
                                    }"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    :class="{
                                        hidden: !showingNavigationDropdown,
                                        'inline-flex':
                                            showingNavigationDropdown,
                                    }"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Responsive Navigation Menu -->

            <div
                :class="{
                    block: showingNavigationDropdown,
                    hidden: !showingNavigationDropdown,
                }"
                class="sm:hidden"
            >
                <div
                    class="pt-2 pb-3 space-y-1 bg-white transition duration-500"
                >
                    <ResponsiveNavLink
                        :href="route('Home')"
                        :active="route().current('Home')"
                    >
                        HOME
                    </ResponsiveNavLink>

                    <ResponsiveNavLink
                        :href="route('News')"
                        :active="route().current('News')"
                    >
                        NEWS
                    </ResponsiveNavLink>

                    <ResponsiveNavLink
                        :href="route('AboutUs')"
                        :active="route().current('AboutUs')"
                    >
                        ABOUT US
                    </ResponsiveNavLink>
                    <ResponsiveNavLink
                        :href="route('LearnWithUs')"
                        :active="route().current('LearnWithUs')"
                    >
                        LEARN WITH US
                    </ResponsiveNavLink>
                    <ResponsiveNavLink
                        :href="route('Resources')"
                        :active="route().current('Resources')"
                    >
                        RESOURCES
                    </ResponsiveNavLink>
                    <ResponsiveNavLink
                        :href="route('Projects')"
                        :active="route().current('Projects')"
                    >
                        PROJECTS
                    </ResponsiveNavLink>
                </div>
            </div>
        </nav>
    </div>
</template>
