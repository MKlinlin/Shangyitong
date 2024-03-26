//定义用户相关仓库
import { defineStore } from "pinia";

const useUserStore = defineStore('User',{
    state:()=>{
        return {
            visiable: false, //登录组件dialog显示与隐藏
        }
    },
    actions:{
      
    },
    getters:{
      
    }
})

export default useUserStore