import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import Button from '@/components/generic/Button.vue';
import CardLink from '@/components/generic/CardLink.vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('Button', Button).component('CardLink', CardLink);

app.mount('#app');
