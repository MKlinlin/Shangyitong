import {createRouter, createWebHistory} from 'vue-router'

export default createRouter({
    //路由模式设置
    history: createWebHistory(),
    //管理路由
    routes:[
        {
            path: '/home',
            component:()=>import('../pages/home/index.vue')
        },
        {
            path: '/hospital',
            component:()=>import('../pages/hospital/index.vue')
        },
        {
            path: '/',
            redirect: '/home'
        },
    ],
    scrollBehavior() {
        return { 
        top: 0 ,
        left:0
        }
    }
})