<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};

AOS.init();
</script>

<template>
    
    <GuestLayout>
        <Head title="Log in" />
        <div class="flex justify-center items-center max-w-screen " >
            <a href="/"><img src="../../../asset/logo.png" class="w-20"></a>
        </div>
        <div class="text-center text-2xl">
            CO-OPERATIVE COLLEGE OF THE PHILIPPINES
        </div>

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit" >
            <div>


                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full focus:ring-yellow-500 active:ring-yellow-500"
                    v-model="form.email"
                    required
                    autofocus
                    autocomplete="username"
                    placeholder="Email"
                />

                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="mt-4">
              

                <TextInput
                    id="password"
                    type="password"
                    class="mt-1 block w-full focus:ring-yellow-500 active:ring-yellow-500"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                    placeholder="Password"
                />

                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="block mt-4">
                <label class="flex items-center">
                    <Checkbox name="remember" v-model:checked="form.remember" />
                    <span class="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link
                    v-if="canResetPassword"
                    :href="route('password.request')"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                    Forgot your password?
                </Link>

                <PrimaryButton class="ml-4 text-l w-32 items-center justify-center h-14 bg-theme1 text-theme2 text-sm hover:bg-theme2 hover:text-theme1" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    LOGIN
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>
