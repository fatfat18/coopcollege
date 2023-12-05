<script>
export default {
    props: {
        fullname: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            //required: true,
        },
    },
};
</script>

<template>
    <div class="overflow-y-hidden">
        <img
            :src="image"
            alt="BOD"
            class="w-60 h-80 object-cover object-center hover:scale-110 overflow-y-hidden transition duration-500 rounded-md"
        />
    </div>

    <div class="text-center">
        <p class="text-3xl mt-2 text-white">{{ fullname }}</p>
        <p class="text-md text-theme2">
            {{ position }}
        </p>
    </div>
</template>
