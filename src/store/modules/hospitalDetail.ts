import {defineStore} from 'pinia'
import { reqHospitalDetail,reqHospitalDepartment } from '@/api/hospital';
import { HosPitalDetail,DeparmentResponseData,DepartmentArr } from '@/api/hospital/type';
import type { DetailState } from './interface';
const useDetailStore = defineStore('Detail',{
    state:():DetailState=>{
        return {
            //医院详情数据
            hospitalInfo:( {} as HosPitalDetail),
            departmentArr:[]
        }
    },
    actions:{
        async getHospital(hoscode:string){
           let res:HosPitalDetail =  await reqHospitalDetail(hoscode)
            console.log(res);
            if(res.code=== 200){
                this.hospitalInfo = res.data
            }
        },
        async getDepartment(hoscode:string){
             let res:DeparmentResponseData = await reqHospitalDepartment(hoscode)
            if(res.code === 200){
                console.log(res.data);
                this.departmentArr= res.data
              
            }
        }
    },
    getters:{

    }
})

//暴露获取仓库的方法
export default useDetailStore;