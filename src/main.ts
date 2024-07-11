import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

// Form components
import FormBox from '@/components/forms/FormBox.vue';
import Password from '@/components/forms/Password.vue';
import Textarea from '@/components/forms/Textarea.vue';
import TextInput from '@/components/forms/TextInput.vue';
// Generic components
import Button from '@/components/generic/Button.vue';
import CardLink from '@/components/generic/CardLink.vue';
import List from '@/components/generic/List.vue';

// Icons from Vue Material Icons
import Cash from 'vue-material-design-icons/Cash.vue';
import CheckBold from 'vue-material-design-icons/CheckBold.vue';
import CloudDownload from 'vue-material-design-icons/CloudDownload.vue';
import ContentSave from 'vue-material-design-icons/ContentSave.vue';
import ControllerClassic from 'vue-material-design-icons/ControllerClassic.vue';
import Eye from 'vue-material-design-icons/Eye.vue';
import EyeOff from 'vue-material-design-icons/EyeOff.vue';
import Github from 'vue-material-design-icons/Github.vue';
import Linkedin from 'vue-material-design-icons/Linkedin.vue';
import NoteOff from 'vue-material-design-icons/NoteOff.vue';
import Reload from 'vue-material-design-icons/Reload.vue';
import Walk from 'vue-material-design-icons/Walk.vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);

// Generic components
app.component('Button', Button)
    .component('CardLink', CardLink)
    .component('List', List)
    // Form components
    .component('FormBox', FormBox)
    .component('Password', Password)
    .component('Textarea', Textarea)
    .component('TextInput', TextInput);

// Icons from Vue Material Icons
app.component('cach-icon', Cash)
    .component('cloud-download-icon', CloudDownload)
    .component('content-save-icon', ContentSave)
    .component('check-bold-icon', CheckBold)
    .component('controller-classic-icon', ControllerClassic)
    .component('eye-icon', Eye)
    .component('eye-off-icon', EyeOff)
    .component('github-icon', Github)
    .component('linkedin-icon', Linkedin)
    .component('note-off-icon', NoteOff)
    .component('reload-icon', Reload)
    .component('walk', Walk);

app.mount('#app');
