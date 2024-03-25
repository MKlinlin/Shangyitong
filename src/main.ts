import { createApp } from 'vue'
import App from '@/App.vue'
import '@/style/reset.scss'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import pinia from '@/store'
//@ts-ignore
import { zhCn } from 'element-plus/es/locales.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引入全局组件
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'

const app = createApp(App)

app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(router)
app.use(ElementPlus,{
    locale: zhCn
})
app.use(pinia)
//挂载
app.mount('#app')
