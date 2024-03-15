<template>
  <div class="container">
    <!-- 顶部全局组件 -->
    <HospitalTop />
    <!-- 医院信息 -->
    <div class="content">
     <router-view></router-view>
    </div>
    <HospitalBottom />
  </div>
</template>

<script setup lang="ts"> 
</script> 



<style scoped lang="scss">
.container{
  display:flex;
  flex-direction: column;
  align-items: center;
  .content{
    margin-top: 70px;
    width: 1300px;
    min-height: 700px;
  }
}

</style>