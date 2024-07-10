import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

// Form components
import Password from '@/components/forms/Password.vue';
import Textarea from '@/components/forms/Textarea.vue';
import TextInput from '@/components/forms/TextInput.vue';
// Generic components
import Button from '@/components/generic/Button.vue';
import CardLink from '@/components/generic/CardLink.vue';
import List from '@/components/generic/List.vue';

// Icons from Vue Material Icons
import CheckBold from 'vue-material-design-icons/CheckBold.vue';
import ControllerClassic from 'vue-material-design-icons/ControllerClassic.vue';
import Eye from 'vue-material-design-icons/Eye.vue';
import EyeOff from 'vue-material-design-icons/EyeOff.vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);

// Generic components
app.component('Button', Button)
    .component('CardLink', CardLink)
    .component('List', List)
    .component('Password', Password)
    .component('Textarea', Textarea)
    .component('TextInput', TextInput);

// Icons from Vue Material Icons
app.component('eye-icon', Eye)
    .component('eye-off-icon', EyeOff)
    .component('controller-classic-icon', ControllerClassic)
    .component('check-bold-icon', CheckBold);

app.mount('#app');
