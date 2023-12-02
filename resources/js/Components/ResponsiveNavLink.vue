<script setup>
import { computed } from "vue";
import { Link } from "@inertiajs/vue3";

const props = defineProps(["href", "active"]);

const classes = computed(() =>
    props.active
        ? "block w-full pl-3 pr-4 py-2 border-l-4 border-theme1 text-center text-base font-medium text-zinc-50 bg-theme2 focus:outline-none focus:text-theme1 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out"
        : "block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-center text-base font-medium text-zinc-50 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
