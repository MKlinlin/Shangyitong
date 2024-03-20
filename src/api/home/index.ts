//首页模块接口
import request from '@/utils/request'
import type { HospitalResponseData, HospitalLevelAndRegionResponseData,HospitalInfo } from './type'
//通过枚举管理接口
enum API {
    HOSPITAL_URL = '/hosp/hospital/',
    //医院等级与地区接口
    HOSPITALLEVELANDREGION_URL = '/cmn/dict/findByDictCode/',
    //根据关键字医院的名字获取数据
    HOSPITALINFO_URL = '/hosp/hospital/findByHosname/'
}

//获取医院信息
export const reqHospital = (page: number, limit: number, hosType = '', districtCode = '') => request.get<any, HospitalResponseData>(API.HOSPITAL_URL + `${page}/${limit}?hostype=${hosType}&districtCode=${districtCode}`)

//获取医院等级与地区
export const reqHospitalLevelAndRegion = (dictCode: string) => request.get<any, HospitalLevelAndRegionResponseData>(API.HOSPITALLEVELANDREGION_URL + dictCode)

//根据关键字医院的名字获取数据
export const reqHospitalInfo = (hosname: string) => request.get<any, HospitalInfo>(API.HOSPITALINFO_URL + hosname)