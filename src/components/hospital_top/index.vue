<template>
    <div class="top">
        <div class="content">
            <!-- 左侧 -->
            <div class="left" @click="goDetail">
                <img src="../../assets/images/logo.png" alt="">
                <p>尚医通 预约挂号统一平台</p>
            </div>
            <div class="right">
                <p class="help">帮助中心</p>
                <p class="login" @click="login">登录/注册</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import useUserStore from '@/store/modules/user';
let userStore = useUserStore();
let $router = useRouter();
const goDetail = () => {
  //跳转到医院详情页面，将来将携带参数
  $router.push({path: "/home",});
};

const login = () => {
  
  if (userStore.visiable) {
    userStore.visiable = false;
  }else {
    userStore.visiable = true;
  }
};

</script>

<style scoped lang="scss">
.top{
position:fixed;
z-index: 99;
width: 100%;
height: 70px;
display: flex;
justify-content: center;
.content{
    width: 1300px;
    height: 100%;
    margin: 0 auto;
    background-color:#fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        img{
            width: 50px;
            height: 50px;
            margin-right: 10px;
        }
        p{
            font-size: 20px;
            color: #55a6fe;
        }
        
    }
    .right{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        .help{
            margin-right:10px
        }
        .login{
            cursor: pointer;
        }
    }
}
}
</style>