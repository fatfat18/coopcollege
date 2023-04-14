<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps(['href', 'active']);

const classes = computed(() =>
    props.active
        ? 'inline-flex items-center px-8 text-center pt-1 bg-theme2 border-b-4 border-theme1 text-xs rounded-2xl mb-2 font-medium leading-5 text-theme1 focus:outline-none focus:border-indigo-700 transition duration-350 ease-in-out'
        : 'inline-flex items-center px-8 pt-1 border-b-2 border-transparent text-xs font-medium leading-5  hover:text-theme2 hover:border-theme2 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
