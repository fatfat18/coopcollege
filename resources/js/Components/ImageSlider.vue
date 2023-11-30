<template>
    <div class="image-slider">
        <div
            class="slider-container"
            :style="{ transform: `translateX(${translateValue}px)` }"
        >
            <div v-for="(image, index) in images" :key="index" class="slide">
                <img :src="image" alt="Slide" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                "../../asset/landingpagenewest.jpg",
                "../../asset/landingpagenewest.jpg",
                "../../asset/landingpagenewest.jpg",

                // Add more image URLs as needed
            ],
            translateValue: 0,
        };
    },
    methods: {
        nextSlide() {
            this.translateValue -= 100; // Adjust as needed
        },
        prevSlide() {
            this.translateValue += 100; // Adjust as needed
        },
    },
};
</script>

<style scoped>
.image-slider {
    width: 100%;
    overflow: hidden;
}

.slider-container {
    display: flex;
    transition: transform 0.5s ease;
}

.slide {
    flex: 0 0 100%;
}

img {
    width: 100%;
    height: auto;
}
</style>
