import { createApp } from 'vue'
import { createPinia } from 'pinia'
import api from './api/index'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import VueKinesis from "vue-kinesis";
import {install} from '@icon-park/vue-next/es/all';
import '@icon-park/vue-next/styles/index.css'
import 'element-plus/dist/index.css'
const app = createApp(App)
// 我这里用的是 provide inject 这个组件通信的方法
app.provide('$api', api);
app.use(createPinia());
app.use(VueKinesis);
app.use(router)
app.mount('#app')
install(app)
