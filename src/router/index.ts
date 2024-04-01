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
            component:()=>import('../pages/hospital/index.vue'),
            children:[
                {
                    path: 'register',
                    component:()=>import('../pages/hospital//register/index.vue')
                },
                {
                    path: 'detail',
                    component:()=>import('../pages/hospital/detail/index.vue')
                },
                {
                    path: 'search',
                    component:()=>import('../pages/hospital/search/index.vue')
                },
                {
                    path:'close',
                    component:()=>import('../pages/hospital/close/index.vue')
                },
                {
                    path: 'notice',
                    component:()=>import('../pages/hospital/notice/index.vue')
                },
                {
                    path: 'register_1',
                    component:()=>import('../pages/hospital/register/register_1.vue')
                }
            ]
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