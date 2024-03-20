<template>
  <div class="search">
    <el-autocomplete
      clearable
      placeholder="请输入医院名称"
      @select="goDetail"
      v-model="hosname"
      :fetch-suggestions="fetchData"
      :trigger-on-focus="false"
    />
    <el-button type="primary" size="default"
      ><el-icon><Search /></el-icon>搜索</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
//引入请求方法
import { reqHospitalInfo } from "@/api/home";
import type { HospitalInfo} from "@/api/home/type";

let hosname = ref<string>("");
let $router = useRouter();
const fetchData =async (keyword:string,cb:any) => {
 let res:HospitalInfo = await reqHospitalInfo(keyword)
let showData = res.data.map(item=>{
  return {
    value:item.hosname, //医院名称
    hoscode:item.hoscode //医院编码
  }
})
 cb(showData)
};
const goDetail = (item:any) => {
  //跳转到医院详情页面，将来将携带参数
  $router.push({path: "/hospital",});
};
</script>

<style lang="scss" scoped>
//深度选择器：>>>、:deep()
.search {
  width: 100%;
  height: 50px;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  :deep(.el-input__wrapper) {
    width: 600px;
    margin-right: 10px;
  }
}
</style>