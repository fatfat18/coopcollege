<script setup>
import { computed } from "vue";
import { Link } from "@inertiajs/vue3";

const props = defineProps(["href", "active"]);

const classes = computed(() =>
    props.active
        ? "inline-flex items-center px-8 pt-1 tracking-widest border-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]  border-b-4 border-theme1 rounded-md mb-2 font-black leading-5 text-theme1 transition duration-350 ease-in-out"
        : "inline-flex items-center px-8 pt-1 border-b-2 border-transparent  font-black leading-5  hover:text-theme1 hover:border-theme1 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
