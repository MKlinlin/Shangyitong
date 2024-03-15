import { createApp } from 'vue'
import App from '@/App.vue'
import '@/style/reset.scss'
//引入全局组件
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'
import router from './router'
const app = createApp(App)

app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)

app.use(router)
//挂载
app.mount('#app')
