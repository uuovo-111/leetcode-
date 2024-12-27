// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import axios from './plugins/axios';
const app = createApp(App);
app.use(router).use(ElementPlus).mount('#app');
app.config.globalProperties.$axios = axios;
