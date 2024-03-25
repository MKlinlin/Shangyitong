import {defineStore} from 'pinia'
import { reqHospitalDetail } from '@/api/hospital';
import { HosPitalDetail } from '@/api/hospital/type';
import type { DetailState } from './interface';
const useDetailStore = defineStore('Detail',{
    state:():DetailState=>{
        return {
            //医院详情数据
            hospitalInfo:( {} as HosPitalDetail)
        }
    },
    actions:{
        async getHospital(hoscode:string){
           let res:HosPitalDetail =  await reqHospitalDetail(hoscode)
            console.log(res);
            if(res.code=== 200){
                this.hospitalInfo = res.data
            }
        }
    },
    getters:{

    }
})

//暴露获取仓库的方法
export default useDetailStore;