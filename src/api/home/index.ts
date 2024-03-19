//首页模块接口
import request from '@/utils/request'
import type {HospitalResponseData} from './type'
//通过枚举管理接口
enum API {
    HOSPITAL_URL='/hosp/hospital/',
}

//获取医院信息
export const reqHospital =(page:number,limit:number)=>request.get<any,HospitalResponseData>(API.HOSPITAL_URL+`${page}/${limit}`)