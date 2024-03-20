//首页模块接口
import request from '@/utils/request'
import type { HospitalResponseData, HospitalLevelAndRegionResponseData } from './type'
//通过枚举管理接口
enum API {
    HOSPITAL_URL = '/hosp/hospital/',
    //医院等级与地区接口
    HOSPITALLEVELANDREGION_URL = '/cmn/dict/findByDictCode/',
}

//获取医院信息
export const reqHospital = (page: number, limit: number, hosType = '', districtCode = '') => request.get<any, HospitalResponseData>(API.HOSPITAL_URL + `${page}/${limit}?hostype=${hosType}&districtCode=${districtCode}`)

//获取医院等级与地区
export const reqHospitalLevelAndRegion = (dictCode: string) => request.get<any, HospitalLevelAndRegionResponseData>(API.HOSPITALLEVELANDREGION_URL + dictCode)