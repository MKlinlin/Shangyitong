// 对于axios进行二次封装
// 目的：1.利用aixos请求，响应拦截器统一处理错误信息
//      2.可以在请求头中携带公共参数：token等
//     3.可以简化服务器返回的数据，处理http网络错误
import axios from 'axios'
import { ElMessage } from 'element-plus'

//利用axios.create创建一个axios实例，可以设置基础路径、超时时间等
const request=axios.create({
    baseURL:'/api', //基础路径
    timeout:5000,
})

//请求拦截器
request.interceptors.request.use(
    config=>{
        //可以在请求头中携带公共参数：token等
        //...
        return config
    },
)

//响应拦截器
request.interceptors.response.use(
    response=>{
        //可以简化服务器返回的数据
        return response.data
    },
    error=>{
        //处理http网络错误
        let status = error.response.status
        switch(status){
            case 404:
                ElMessage({
                    message:'请求的资源不存在',
                    type:'error'
                })
                break
            case 500||502||503||504:
                ElMessage({
                    message:'服务器错误',
                    type:'error'
                })
                break
            case 401:
                ElMessage({
                    message:'没有权限',
                    type:'error'
                })
                break
        }
        return Promise.reject(new Error(error.message))
    }
)

export default request