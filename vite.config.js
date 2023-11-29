import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.js",
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    server: {
<<<<<<< HEAD
        host: true,
=======
        host: "localhost", // or '0.0.0.0'
        port: 5173,
>>>>>>> aabb7ed39a62dc001c94e8603f0c9f7176b5fa1b
    },
});
