import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import DsVue3Table from '../packages/index'; // 全局挂在table组件
// import DsVue3Table from '../dist/vue3-table.es.js'

createApp(App).use(router).use(ElementPlus).use(DsVue3Table).mount('#app')
