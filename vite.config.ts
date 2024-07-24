import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';
const API_URL = process.env.VITE_API_URL as string;
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx()],
    // server: {
    //     proxy: {
    //         api: {
    //             target: API_URL,
    //             changeOrigin: true,
    //             secure: false,
    //             rewrite: (path) => path.replace(/^\/api/, ''),
    //         },
    //     },
    // },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@images': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
            '@icons': fileURLToPath(new URL('./src/assets/icons', import.meta.url)),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/assets/styles/theme.scss";`,
            },
        },
    },
});
