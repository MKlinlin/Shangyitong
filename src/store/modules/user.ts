//定义用户相关仓库
import { defineStore } from "pinia";
import { reqCode } from "@/api/hospital";
const useUserStore = defineStore('User',{
    state:()=>{
        return {
            visiable: false, //登录组件dialog显示与隐藏
            code:'', //验证码
        }
    },
    actions:{
      //获取验证码方法
      async getCode(phone:string){
      let result:any  =  await reqCode(phone)
        if (result.code === 200) {
            this.code = result.data
            console.log(this.code);
        }else{
            return Promise.reject(new Error('获取验证码失败'))
        }
      }
    },
    getters:{
      
    }
})

export default useUserStore