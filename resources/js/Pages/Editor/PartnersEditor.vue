<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import InputError from "@/Components/InputError.vue";
import TextInput from "@/Components/TextInput.vue";
import AOS from "aos";
import "aos/dist/aos.css";
</script>

<style>
.postcontainer {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),
        url("/coopcollege/coopcollege/resources/asset/editpostbackg.jpg");
    height: 110vh;
}
#img {
    display: none;
}
</style>
<template>
    <AuthenticatedLayout>
        <template #header>
            <h2
                class="font-semibold text-3xl text-theme1 leading-tight h-4 mb-4"
            >
                Partners Editor
            </h2>
        </template>

        <div class=""></div>

        <div
            class="postcontainer flex justify-center w-screen xl:px-10 xl:pb-40"
        >
            <div class="xl:w-3/4 w-4/5 overflow-y-hidden">
                <form @submit.prevent="submitData">
                    <button
                        class="mt-6 border border-white w-24 text-white py-2 px-4 bg-green-800 rounded-lg mb-10 hover:bg-green-600 transition ease-in duration-100"
                    >
                        Save
                    </button>

                    <div
                        class="text-white xl:h-20 w-max flex justify-center items-center"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        <label
                            for="img"
                            class="text-2xl text-white rounded-2xl border-theme2 py-5 px-5 border-dashed border-2 hover:border-white hover:text-theme2 transiton duration-300"
                            >Upload Image<br
                        /></label>
                        <input
                            type="file"
                            accept="image/*"
                            @change="uploadFile"
                            id="img"
                            ref="file"
                            required
                        />
                    </div>

                    <div
                        class="text-white flex"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        <div v-if="imagePreviewUrlholder">
                            <img
                                :src="imagePreviewUrlholder"
                                class="h-40 w-60 object-cover my-5 mx-5"
                            />
                        </div>
                    </div>

                    <div class="overflow-y-hidden">
                        <TextInput
                            id="name"
                            name="name"
                            type="text"
                            class="mt-4 py-2 px-2 w-full focus:ring-yellow-500 active:ring-yellow-500"
                            required
                            autocomplete="current-title"
                            placeholder="Name"
                            v-model="name"
                            data-aos="fade-up"
                            data-aos-duration="1300"
                        >
                        </TextInput>
                    </div>

                    <Modal :show="showModal" @close="showModal = false">
                        <h2 class="text-theme1 text-2xl">Added Partners</h2>
                        <p class="text-theme2 text-4xl mb-5">Success!</p>
                    </Modal>
                </form>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script>
import Modal from "@/Components/Modal.vue";
import { BASE_URL } from "../../baseurl";

export default {
    data() {
        return {
            imagePreviewUrl: null,
            imagePreviewUrlholder: null,
            name: "",
            showModal: false,
        };
    },
    methods: {
        uploadFile(event) {
            this.imagePreviewUrlholder = this.imagePreviewUrl;
            this.imagePreviewUrl = this.$refs.file.files[0];
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                this.imagePreviewUrlholder = event.target.result;
            };
            reader.readAsDataURL(file);
        },
        submitData() {
            this.showModal = true;
            const formData = new FormData();
            formData.append("file", this.imagePreviewUrl);
            formData.append("partnerName", this.name);

            // Append additional form data to the same FormData object

            axios
                .post(BASE_URL + "/partner", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((response) => {
                    console.log(response);
                    this.showModal = false;
                    async function redirectWithDelay() {
                        await new Promise((resolve) =>
                            setTimeout(resolve, 1000)
                        ); // wait for 3 seconds
                        window.location.href = route("Partners"); // redirect to the TrainingCalendar URL
                    }
                    redirectWithDelay();
                })
                .catch((error) => {
                    console.log(error);
                });

            this.imagePreviewUrl = "";
            this.imagePreviewUrlholder = "";
            this.name = "";
        },

        closeModal() {
            // Reset any necessary data properties and hide the modal

            this.showModal = false;
        },
    },
};
AOS.init({ startEvent: "load", once: "true," });
AOS.refresh();
</script>
