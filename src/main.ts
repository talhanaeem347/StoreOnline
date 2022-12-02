import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import  store  from "./store/index";
import './assets/tailwind.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import VueSplide from '@splidejs/vue-splide';
// Default theme
import '@splidejs/vue-splide/css';


// or other themes
// import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';


// or only core styles
    // import '@splidejs/vue-splide/css/core';
library.add(fas,far,fab)




const app = createApp(App);


app.use(VueSplide);
app.use(router);
app.use(store)
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
