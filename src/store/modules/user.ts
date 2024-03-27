//定义用户相关仓库
import { defineStore } from "pinia";
import { reqCode, reqLogin } from "@/api/hospital";
import type { UserLoginResponseData, LoginData,UserInfo } from "@/api/hospital/type";
import { UserState } from "./interface"; 

const useUserStore = defineStore('User', {
    state: ():UserState => {
        return {
            visiable: false, //登录组件dialog显示与隐藏
            code: '', //验证码
            userInfo: ({} as UserInfo) //用户信息
        }
    },
    actions: {
        //获取验证码方法
        async getCode(phone: string) {
            let result: any = await reqCode(phone)
            if (result.code === 200) {
                this.code = result.data
                console.log(this.code);
            } else {
                return Promise.reject(new Error('获取验证码失败'))
            }
        },
        //用户手机号登录方法
        async userLogin(loginData: LoginData) {
            let res: UserLoginResponseData = await reqLogin(loginData)
            if (res.code === 200) {
                this.userInfo = res.data
                return 'ok'
            }else{
                return Promise.reject(new Error('登录失败'))
            }
        },
        getters: {

        }
    }
})


export default useUserStore