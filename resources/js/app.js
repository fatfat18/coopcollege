<<<<<<< HEAD
import './bootstrap';
import '../css/app.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';





const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
=======
import "./bootstrap";
import "../css/app.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Swiper from "swiper";
import "swiper/css";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
>>>>>>> aabb7ed39a62dc001c94e8603f0c9f7176b5fa1b
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
    progress: {
<<<<<<< HEAD
        color: '#4B5563',
    },
});

=======
        color: "#4B5563",
    },
});
>>>>>>> aabb7ed39a62dc001c94e8603f0c9f7176b5fa1b
