import HomeView from '@/views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('@/views/DashboardView.vue'),
        },
        {
            path: '/logbook', //'/logbook/:username/:title',
            name: 'logbook',
            component: () => import('@/views/LogbookView.vue'),
        },
        {
            path: '/user-settings',
            name: 'user-settings',
            component: () => import('@/views/UserSettingsView.vue'),
        },
        {
            path: '/design-test',
            name: 'design-test',
            component: () => import('@/views/DesignTestView.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue'),
        },
    ],
});

export default router;
