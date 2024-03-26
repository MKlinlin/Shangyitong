<template>
  <div class="login">
    <el-dialog v-model="userStore.visiable" title="用户登录">
      adfasdf
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
//获取user仓库的数据
import useUserStore from '@/store/modules/user';
let userStore = useUserStore();
</script>

<script lang="ts">
export default {
    name: 'Login',
}

</script>

<style scoped lang="scss">

</style>