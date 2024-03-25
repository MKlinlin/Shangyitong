import type { HosPitalDetail,DepartmentArr} from "@/api/hospital/type";

//定义仓库内部数据state的类型
export interface DetailState {
  hospitalInfo: HosPitalDetail | null;
  departmentArr: DepartmentArr;
}
