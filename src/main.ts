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
import Account from 'vue-material-design-icons/Account.vue';
import Cash from 'vue-material-design-icons/Cash.vue';
import CheckBold from 'vue-material-design-icons/CheckBold.vue';
import CloseThick from 'vue-material-design-icons/CloseThick.vue';
import CloudDownload from 'vue-material-design-icons/CloudDownload.vue';
import ContentSave from 'vue-material-design-icons/ContentSave.vue';
import ControllerClassic from 'vue-material-design-icons/ControllerClassic.vue';
import DeleteEmpty from 'vue-material-design-icons/DeleteEmpty.vue';
import Eye from 'vue-material-design-icons/Eye.vue';
import EyeOff from 'vue-material-design-icons/EyeOff.vue';
import Github from 'vue-material-design-icons/Github.vue';
import Linkedin from 'vue-material-design-icons/Linkedin.vue';
import Menu from 'vue-material-design-icons/Menu.vue';
import Note from 'vue-material-design-icons/Note.vue';
import PlusCircle from 'vue-material-design-icons/PlusCircle.vue';
import Reload from 'vue-material-design-icons/Reload.vue';
import StarOff from 'vue-material-design-icons/StarOff.vue';
import StarPlus from 'vue-material-design-icons/StarPlus.vue';
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
app.component('account-icon', Account)
    .component('cash-icon', Cash)
    .component('cloud-download-icon', CloudDownload)
    .component('close-thick-icon', CloseThick)
    .component('content-save-icon', ContentSave)
    .component('check-bold-icon', CheckBold)
    .component('controller-classic-icon', ControllerClassic)
    .component('delete-empty-icon', DeleteEmpty)
    .component('eye-icon', Eye)
    .component('eye-off-icon', EyeOff)
    .component('github-icon', Github)
    .component('menu-icon', Menu)
    .component('linkedin-icon', Linkedin)
    .component('note-icon', Note)
    .component('plus-circle-icon', PlusCircle)
    .component('reload-icon', Reload)
    .component('star-off-icon', StarOff)
    .component('star-plus-icon', StarPlus)
    .component('walk-icon', Walk);

app.mount('#app');
