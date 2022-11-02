import { createApp } from 'vue';
import { createPinia } from 'pinia';
import vClickOutside from 'click-outside-vue3';

import App from './App.vue';
import router from './router';

import './assets/style.css';

// change default title
document.title = import.meta.env.VITE_APP_NAME;

// fontawesome
import FontAwesomeIcon from './utils/FontAwesome';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vClickOutside);

app.component('AppIcon', FontAwesomeIcon);

app.mount('#app');
