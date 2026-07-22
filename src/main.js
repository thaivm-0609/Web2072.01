import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import { router } from 'json-server' //lỗi, ko chạy

createApp(App).use(router).mount('#app') //gán nội dung của App.vue vào phần tử có id là app trên index.html
