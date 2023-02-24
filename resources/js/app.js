import './bootstrap';

import {createApp} from 'vue'
import router from './router/index.js'
import App from './App.vue'
import "vant/lib/index.css";
import "./assets/css/tailwindcss.css";
import { load_components } from './plugin/load_components_ui.js'

const app = createApp(App);


// Use plugins
app.use(router);
load_components(app);

// Mount App
app.mount("#app")
