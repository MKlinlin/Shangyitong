<template>
  <div>
    <!-- 首页轮播图 -->
    <Carousel />
    <!-- 搜索区 -->
    <Search />
    <el-row gutter="20">
      <el-col :span="20">
        <Level />
        <Region />
        <div class="hospital">
          <Card class="card" v-for="item in 10" :key="item"/>
        </div>
       <el-pagination
          v-model:current-page="pageNo"
          v-model:page-size="pageSize"
          :page-sizes="[10,20,30,40]"
          :background="background"
          layout=" prev, pager, next, jumper,->,sizes,total"
          :total="13"
    
        />
      </el-col>
      <el-col :span="4">
        123
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Carousel from "./carousel/index.vue";
import Search from "./search/index.vue";
import Level from "./level/index.vue";
import Region from "./region/index.vue";
import Card from "./card/index.vue";

import { ref } from "vue";
// 分页器当前页码
let pageNo= ref(1);
let pageSize=ref(10);
</script>

<style lang="scss" scoped>
.hospital{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .card{
    margin-right: 20px;
    width: 48%;
    margin-bottom: 20px;
  }
}
</style>