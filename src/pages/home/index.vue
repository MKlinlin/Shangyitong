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
</script>

<style lang="scss" scoped>
</style>