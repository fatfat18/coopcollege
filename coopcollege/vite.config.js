import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
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
    //  Other configuration options...
    // build: {
    //     target: 'es2015',
    //     outDir: 'public/build',
    //     assetsDir: 'assets',
    //     minify: 'terser',
    // },
});
