//定义首页模块ts数据类型
export interface ResponseData {
    code: number;
    ok: boolean;
    message: string;

}

//代表已有的医院数据的ts类型
export interface Hospital {
    id: number;
    creaTime: string;
    updateTime: string;
    isDeleted: number;
    param: {
        hosTypeString: string;
        fullAddress: string;
    }
    hoscode: string;
    hosname: string;
    hostype: string;
    provinceCode: string;
    cityCode: string;
    districtCode: string;
    address: string;
    logoData: string;
    intro: string;
    route: string;
    bookingRule: {
        cycle: number;
        quitDay: number;
        quitTime: string;
        stopTime: string;
        releaseTime: string;
        rule: string[];
    }

}

//存储全部已有医院的数组类型
export type Content = Hospital[]
export  interface Sort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  }
//获取已有已有接口返回的数据类型
export interface HospitalResponseData extends ResponseData {
  [x: string]: any;
    content: Content;
       Pageable: {
        sort: Sort;
        pageNumber: number;
        pageSize: number;
        offset: number;
        paged: boolean;
        unpaged: boolean;
      }
      
     
}


