<template>
  <div class="hospital">
    <!-- 左侧导航区 -->
    <div class="menu">
      <div class="to">
        <el-icon><HomeFilled /></el-icon>
        <span>  /医院信息</span>
      </div>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
      >
        <el-menu-item index="/hospital/register" @click="changeActive('/hospital/register')">
          <el-icon><Menu /></el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item index="/hospital/detail" @click="changeActive('/hospital/detail')">
          <el-icon><document /></el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item index="/hospital/notice" @click="changeActive('/hospital/notice')">
          <el-icon><Notification /></el-icon>
          <span>预约通知</span>
        </el-menu-item>
        <el-menu-item index="/hospital/close" @click="changeActive('/hospital/close')">
          <el-icon><InfoFilled /></el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item index="/hospital/search" @click="changeActive('/hospital/search')">
          <el-icon><Search /></el-icon>
          <span>查询/取消</span>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 右侧内容展示区 -->
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter,useRoute} from 'vue-router'
import {onMounted} from 'vue'
import useDetailStore from '@/store/modules/hospitalDetail'

let detailStore = useDetailStore()
let $router = useRouter()
let $route = useRoute()
function changeActive(path: string) {
  $router.push(path)
}
onMounted(()=>{
  detailStore.getHospital($route.query.hoscode as string)
  //获取某一个医院科室的数据
  detailStore.getDepartment($route.query.hoscode as string)
})
</script>

<style scoped lang="scss">
.hospital {
  display: flex;
  .menu {
    flex: 2;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .top{
      color:#7f7f7f;
    }
  }
  .content {
    flex: 8;
  }
}
</style>