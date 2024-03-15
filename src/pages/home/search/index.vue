<template>
  <div class="search">
    <el-autocomplete clearable placeholder="请输入医院名称" />
    <el-button type="primary" size="default"
      ><el-icon><Search /></el-icon>搜索</el-button
    >
  </div>
</template>

<script setup lang="ts">
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