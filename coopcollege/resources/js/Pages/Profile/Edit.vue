<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import DeleteUserForm from './Partials/DeleteUserForm.vue';
import UpdatePasswordForm from './Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.vue';
import { Head } from '@inertiajs/vue3';
import AOS from 'aos'
import 'aos/dist/aos.css'


defineProps({
    mustVerifyEmail: Boolean,
    status: String,
});
</script>

<style>
.postcontainer{
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .9)),
    url('/coopcollege/coopcollege/resources/asset/editpostbackg.jpg');
}
</style>
<template>
    <Head title="Profile" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-3xl text-theme1 leading-tight">Profile</h2>
        </template>

        <div class="py-12 postcontainer">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-8 overflow-y-hidden">
                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg" data-aos="fade-right"  data-aos-duration="1000">
                    <UpdateProfileInformationForm
                        :must-verify-email="mustVerifyEmail"
                        :status="status"
                        class="max-w-xl"
                    />
                </div>

                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg" data-aos="fade-left"  data-aos-duration="1000">
                    <UpdatePasswordForm class="max-w-xl" />
                </div>

                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg" data-aos="zoom-in"  data-aos-duration="1000">
                    <DeleteUserForm class="max-w-xl" />
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script>
AOS.init({dataAosDuration:'2000',
            });
AOS.refresh();
</script>