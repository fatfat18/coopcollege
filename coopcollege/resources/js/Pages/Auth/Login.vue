<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
import Checkbox from "@/Components/Checkbox.vue";
import GuestLayout from "@/Layouts/GuestLayout.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faLock, faKey);

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: "",
    password: "",
    remember: false,
});

const submit = () => {
    form.post(route("login"), {
        onFinish: () => form.reset("password"),
    });
};

AOS.init();
</script>

<style>
.form-control {
    position: relative;

    width: 320px;
}

.form-control input {
    background-color: transparent;
    border: 0;
    border: 2px #000033 solid;
    display: block;
    width: 100%;
    padding-top: 35px;
    padding-left: 45px;
    padding-bottom: 5px;
    font-size: 15px;
    color: black;
    overflow-y: hidden;
    border-radius: 5px;
}

.form-control input:focus,
.form-control input:valid {
    outline: 0;
    border: 2px solid #000033;
}

.form-control label {
    position: absolute;
    top: 25px;
    left: 10px;
    pointer-events: none;
}

.form-control label span {
    display: inline-block;
    font-size: 13px;
    min-width: 5px;
    color: rgba(39, 39, 39, 0.534);
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.form-control input:focus + label span,
.form-control input:valid + label span {
    color: #000033;
    transform: translateY(-20px);
}

.login {
    position: relative;
    display: inline-block;
    margin: 15px;
    padding: 15px 30px;
    text-align: center;
    font-size: 12px;
    text-decoration: none;
    color: white;
    background-color: #000033;
    cursor: pointer;
    transition: ease-out 0.7s;
    border: 2px solid #ffcc00;
    border-radius: 5px;
    box-shadow: inset 0 0 0 0 #ffcc00;
}

.login:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 #ffcc00;
    border: 2px solid #000033;
}

.test {
    background: rgba(255, 255, 255, 0.5);
    -webkit-backdrop-filter: blur(1px);
    backdrop-filter: blur(1px);
    border: 1px solid rgba(255, 255, 255, 0.25);
}
</style>

<template>
    <GuestLayout>
        <Head title="Log in" />

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div class="">
                <div class="text-sm w-full text-center mb-1 text-zinc-500">
                    Login to continue
                </div>
                <div class="flex justify-center items-center">
                    <div class="form-control">
                        <input
                            class=""
                            type="text"
                            required
                            autofocus
                            v-model="form.email"
                        />

                        <label>
                            <i class="text-theme2 text-xl pr-4"
                                ><font-awesome-icon icon="fa-solid fa-lock"
                            /></i>
                            <span style="transition-delay: 0ms">E</span
                            ><span style="transition-delay: 50ms">m</span
                            ><span style="transition-delay: 100ms">a</span
                            ><span style="transition-delay: 150ms">i</span
                            ><span style="transition-delay: 200ms">l</span>
                        </label>
                    </div>

                    <!-- <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full focus:ring-yellow-500 active:ring-yellow-500"
                    v-model="form.email"
                    required
                    autofocus
                    autocomplete="username"
                    placeholder="Email"
                /> -->
                </div>
                <InputError
                    class="mt-2 text-center"
                    :message="form.errors.email"
                />
            </div>

            <div>
                <div class="mt-4 flex justify-center items-center">
                    <div class="form-control">
                        <input
                            type="password"
                            required
                            autofocus
                            v-model="form.password"
                        />
                        <label>
                            <i class="text-theme2 text-xl pr-4"
                                ><font-awesome-icon icon="fa-solid fa-key"
                            /></i>
                            <span style="transition-delay: 0ms">P</span
                            ><span style="transition-delay: 50ms">a</span
                            ><span style="transition-delay: 100ms">s</span
                            ><span style="transition-delay: 150ms">s</span
                            ><span style="transition-delay: 200ms">w</span
                            ><span style="transition-delay: 250ms">o</span
                            ><span style="transition-delay: 300ms">r</span
                            ><span style="transition-delay: 350ms">d</span>
                        </label>
                    </div>

                    <!-- <TextInput
                    id="password"
                    type="password"
                    class="mt-1 block w-full focus:ring-yellow-500 active:ring-yellow-500"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                    placeholder="Password"
                /> -->
                </div>
                <InputError
                    class="mt-2 text-center"
                    :message="form.errors.password"
                />
            </div>

            <div class="flex items-center justify-center">
                <PrimaryButton
                    class="login ml-4 text-l w-80 items-center justify-center h-16 bg-theme1 text-white text-sm"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                >
                    LOGIN
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>
