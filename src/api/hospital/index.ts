import request from '@/utils/request';
import type { HosPitalDetail,DeparmentResponseData,LoginData,UserLoginResponseData } from './type'
enum API {
    HOSPITALDETAIL_URL = '/hosp/hospital/',
    //获取某个医院的科室数据
    HOSPITALDEPARTMENT_URL= '/hosp/hospital/department/',
    //获取验证码
    GETUSERCODE_URL = '/sms/send/',
    //用户登录
    USERLOGIN_URL = '/user/login',
}

// 获取医院详情的接口
export const reqHospitalDetail = (hoscode: string) => request.get<any, HosPitalDetail>(API.HOSPITALDETAIL_URL + hoscode);

// 获取某个医院科室接口
export const reqHospitalDepartment = (hoscode: string) => request.get<any, DeparmentResponseData>(API.HOSPITALDEPARTMENT_URL + hoscode);

// 获取验证码接口
export const reqCode = (phone: string) => request.get<any, string>(API.GETUSERCODE_URL + phone);

// 用户登录接口
export const reqLogin = (data: LoginData) => request.post<any, UserLoginResponseData>(API.USERLOGIN_URL, data);