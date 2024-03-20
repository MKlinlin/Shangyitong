<template>
  <div>
    <!-- 首页轮播图 -->
    <Carousel />
    <!-- 搜索区 -->
    <Search />
    <el-row gutter="20">
      <el-col :span="20">
        <Level @getLevel="getLevel" />
        <Region @getRegion="getRegion" />
        <div class="hospital" v-if="hasHosArr.length > 0">
          <Card
            class="card"
            v-for="(item, index) in hasHosArr"
            :key="index"
            :hospitalInfo="item"
          />
        </div>
        <el-empty description="暂无数据" v-else />
        <el-pagination
          v-model:current-page="pageNo"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20]"
          :background="true"
          layout=" prev, pager, next, jumper,->,sizes,total"
          :total="20"
          @current-change="currentChange"
          @size-change="sizeChange"
        />
      </el-col>
      <el-col :span="4"> 123 </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Carousel from "./carousel/index.vue";
import Search from "./search/index.vue";
import Level from "./level/index.vue";
import Region from "./region/index.vue";
import Card from "./card/index.vue";
import type { Content, HospitalResponseData } from "@/api/home/type";
import { reqHospital } from "@/api/home";
import { onMounted, ref } from "vue";
// 分页器当前页码
let pageNo = ref<number>(1);
let pageSize = ref<number>(10);
let hosType = ref<string>("");
let districtCode = ref<string>("");

let hasHosArr = ref<Content>([]);
let total = ref<number>(0);

const getHospitalInfo = async () => {
  let result: HospitalResponseData = await reqHospital(
    pageNo.value,
    pageSize.value,
    hosType.value,
    districtCode.value
  );

  if (result.code === 200) {
    hasHosArr.value = result.data.content;
    total.value = result.data.totalElements;
  }
};
onMounted(() => {
  getHospitalInfo();
});
const currentChange = (val: any) => {
  pageNo.value = val;
  getHospitalInfo();
};
const sizeChange = (val: any) => {
  pageSize.value = val;
  getHospitalInfo();
};
//子组件自定义事件
const getLevel = (level: string) => {
  hosType.value = level;
  console.log(hosType.value);

  getHospitalInfo();
};
const getRegion = (region: string) => {
  districtCode.value = region;
  getHospitalInfo();
};
</script>

<style lang="scss" scoped>
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .card {
    margin-right: 20px;
    width: 48%;
    margin-bottom: 20px;
  }
}
</style>