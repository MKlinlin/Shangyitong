import request from '@/utils/request';
import type { HosPitalDetail,DeparmentResponseData } from './type'
enum API {
    HOSPITALDETAIL_URL = '/hosp/hospital/',
    //获取某个医院的科室数据
    HOSPITALDEPARTMENT_URL= '/hosp/hospital/department/',
}

// 获取医院详情的接口
export const reqHospitalDetail = (hoscode: string) => request.get<any, HosPitalDetail>(API.HOSPITALDETAIL_URL + hoscode);

// 获取某个医院科室接口
export const reqHospitalDepartment = (hoscode: string) => request.get<any, DeparmentResponseData>(API.HOSPITALDEPARTMENT_URL + hoscode);