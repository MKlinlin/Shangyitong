import type { HosPitalDetail, DepartmentArr,UserInfo } from "@/api/hospital/type";

//定义仓库内部数据state的类型
export interface DetailState {
  hospitalInfo: HosPitalDetail | null;
  departmentArr: DepartmentArr;
}

//定义仓库内部数据state的默认值
export interface UserState {
  visiable: boolean, //登录组件dialog显示与隐藏
  code: string, //验证码
  userInfo: UserInfo //用户信息
};