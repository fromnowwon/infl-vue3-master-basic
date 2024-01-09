import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// 전역 컴포넌트
// app.component('AppCard', AppCard);

app.config.globalProperties.msg = 'Hello';
app.provide('msg', 'msg provide입니다.');
app.provide('app-message', 'app message입니다.');
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
