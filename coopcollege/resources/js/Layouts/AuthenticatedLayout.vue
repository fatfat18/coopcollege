<script setup>
import { ref } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLinkAdmin from '@/Components/NavLinkAdmin.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/vue3';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from  '@fortawesome/free-solid-svg-icons';

library.add(faUser,faRightFromBracket,faAddressCard)

const showingNavigationDropdown = ref(false);
</script>

<template>
    <div>
        <div class="min-h-screen bg-gray-100">
            <nav class="bg-white border-b border-gray-100">
                <!-- Primary Navigation Menu -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <!-- Logo -->
                            

                            <!-- Navigation Links -->
                            <div class="hidden space-x-1 sm:ml-10 sm:flex">
                                <NavLinkAdmin :href="route('Posts')" :active="route().current('Posts')">
                                    Posts
                                </NavLinkAdmin>

                                <NavLinkAdmin :href="route('BoardOfTrustees')" :active="route().current('BoardOfTrustees')">
                                    Board of Trustees
                                </NavLinkAdmin>

                                <NavLinkAdmin :href="route('Partners')" :active="route().current('Partners')">
                                    Partners
                                </NavLinkAdmin>
                                <NavLinkAdmin :href="route('TrainingCalendar')" :active="route().current('TrainingCalendar')">
                                    Training Calendar
                                </NavLinkAdmin>
                                <NavLinkAdmin :href="route('Contacts')" :active="route().current('Contacts')">
                                    Contacts
                                </NavLinkAdmin>


                            </div>


                         
                        </div>


                        
                        <div class="hidden sm:flex sm:items-center sm:ml-6">
                            <!-- Settings Dropdown -->
                            <div class="ml-3 relative">
                                <Dropdown align="right" width="60" >

                                    <template #trigger>
                                        <span class="inline-flex rounded-md">
                                            <button type="button"
                                                class="text-theme1 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                                                {{ $page.props.auth.user.name }} <font-awesome-icon icon="fa-solid fa-user" class="ml-2" />

                                                <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </button>
                                        </span>
                                    </template>


                                    <template #content>
                                        <DropdownLink :href="route('profile.edit')" class="text-theme2"> Profile <font-awesome-icon icon="fa-solid fa-address-card" class="ml-2" /> </DropdownLink>
                                        <DropdownLink :href="route('logout')" method="post" as="button" class="text-red-500">
                                            Log Out <font-awesome-icon icon="fa-solid fa-right-from-bracket" class="ml-2"  /> 
                                        </DropdownLink>
                                    </template>
                                </Dropdown>


                                
                            </div>
                        </div>






                        
                        <!-- Hamburger -->
                        <div class=" flex items-center sm:hidden">
                            <button @click="showingNavigationDropdown = !showingNavigationDropdown"
                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                <svg class="h-6 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path :class="{
                                        hidden: showingNavigationDropdown,
                                        'inline-flex': !showingNavigationDropdown,
                                    }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                    <path :class="{
                                        hidden: !showingNavigationDropdown,
                                        'inline-flex': showingNavigationDropdown,
                                    }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Responsive Navigation Menu -->
                <div :class="{ block: showingNavigationDropdown, hidden: !showingNavigationDropdown }" class="sm:hidden">
                    <div class="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink :href="route('Posts')" :active="route().current('Posts')">
                            Posts
                        </ResponsiveNavLink>
                        <ResponsiveNavLink :href="route('BoardOfTrustees')" :active="route().current('BoardOfTrustees')">
                            Board of Trustees
                        </ResponsiveNavLink>
                        <ResponsiveNavLink :href="route('Partners')" :active="route().current('Partners')">
                            Partners
                        </ResponsiveNavLink>
                        <ResponsiveNavLink :href="route('TrainingCalendar')" :active="route().current('TrainingCalendar')">
                            Training Calendar
                        </ResponsiveNavLink>
                        <ResponsiveNavLink :href="route('Contacts')" :active="route().current('Contacts')">
                            Contacts
                        </ResponsiveNavLink>
                    </div>
                    

                    <!-- Responsive Settings Options -->
                    <div class="pt-4 pb-1 border-t border-gray-200">
                        <div class="px-4">
                            <div class="font-medium text-base text-theme1">
                                {{ $page.props.auth.user.name }} <font-awesome-icon icon="fa-solid fa-user" class="ml-2" />
                            </div>
                            <div class="font-medium text-sm text-gray-500">{{ $page.props.auth.user.email }}</div>
                        </div>

                        <div class="mt-3 space-y-1">
                            <ResponsiveNavLink :href="route('profile.edit')" class="text-theme2"> Profile <font-awesome-icon icon="fa-solid fa-address-card" class="ml-2" /> </ResponsiveNavLink>
                            <ResponsiveNavLink :href="route('logout')" method="post" as="button" class="text-red-500">
                                Log Out <font-awesome-icon icon="fa-solid fa-right-from-bracket" class="ml-2"/> 
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Page Heading -->
            <header class="shadow bg-white" v-if="$slots.header">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
                    <slot name="header" />
                </div>
            </header>

            <!-- Page Content -->
            <main class="bg-theme1 h-max min-h-screen ">

                <slot />

                
            </main>
        </div>
    </div>
</template>
