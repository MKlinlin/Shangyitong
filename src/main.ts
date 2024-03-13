import { createApp } from 'vue'
import App from '@/App.vue'
import '@/style/reset.scss'
//引入全局组件
import HospitalTop from '@/components/hospital_top/index.vue'
const app=createApp(App)
app.component('HospitalTop',HospitalTop)
app.mount('#app')
