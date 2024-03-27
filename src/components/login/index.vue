<template>
  <div class="login_container">
    <el-dialog v-model="userStore.visiable" title="用户登录">
      <!-- 对话框结构 -->
      <el-row>
        <!-- 左侧结构:登录，微信扫一扫 -->
        <el-col :span="12">
          <div class="login">
            <div v-show="scene === 0">
              <el-form>
                <el-form-item label="用户名">
                  <el-input
                    placeholder="请输入手机号"
                    :prefix-icon="User"
                    v-model="loginParams.phone"
                  ></el-input>
                </el-form-item>
                <el-form-item label="验证码">
                  <el-input
                    placeholder="请输入验证码"
                    :prefix-icon="Lock"
                    v-model="loginParams.code"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button
                    :disabled="!isPhone || flag ? true : false"
                    @click="getCode"
                  >
                    <span v-if="flag">获取验证码({{ time }})</span>
                    <span v-else>获取验证码</span>
                  </el-button>
                </el-form-item>
              </el-form>
              <el-button
                type="primary"
                style="width: 100%"
                size="default"
                @click="login"
                :disabled="!isPhone || loginParams.code.length<6 ? true : false"
              >
                登录
              </el-button>
              <div class="bottom" @click="changeScene">
                <p>微信扫码登录</p>
                <svg
                  t="1711436503601"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="5040"
                  width="32"
                  height="32"
                >
                  <path
                    d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z"
                    fill="#33ac3b"
                    p-id="5041"
                  ></path>
                  <path
                    d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z"
                    fill="#33ac3b"
                    p-id="5042"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="wechat" v-show="scene === 1">
              <p @click="changeScene" style="cursor: pointer">返回</p>
              <img src="../../assets/images/code_login_wechat.png" alt="" />
              <p>扫一扫登录</p>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="leftContent">
            <div class="top">
              <div class="item">
                <img src="../../assets/images/code_app.png" alt="" />
                <svg
                  t="1711437039101"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4380"
                  width="16"
                  height="16"
                >
                  <path
                    d="M615.904 388.48c8.8 0 17.536 0.64 26.176 1.6-23.52-109.536-140.608-190.912-274.272-190.912C218.4 199.2 96 301.056 96 430.4c0 74.656 40.736 135.936 108.768 183.488l-27.2 81.792 95.04-47.648c33.984 6.72 61.28 13.632 95.2 13.632 8.544 0 16.992-0.416 25.376-1.088a202.496 202.496 0 0 1-8.384-56.96c0-118.752 101.984-215.136 231.104-215.136zM469.76 314.784c20.48 0 34.016 13.472 34.016 33.92 0 20.352-13.536 34.016-34.016 34.016-20.384 0-40.832-13.664-40.832-34.016 0-20.448 20.448-33.92 40.832-33.92zM279.52 382.72c-20.384 0-40.928-13.664-40.928-34.016 0-20.448 20.544-33.92 40.928-33.92 20.352 0 33.92 13.472 33.92 33.92 0 20.384-13.568 34.016-33.92 34.016z"
                    fill="#707070"
                    p-id="4381"
                  ></path>
                  <path
                    d="M864 600.352c0-108.672-108.736-197.28-230.88-197.28-129.344 0-231.2 88.576-231.2 197.28 0 108.864 101.856 197.248 231.2 197.248 27.072 0 54.368-6.816 81.568-13.632l74.56 40.8-20.448-67.904C823.328 715.936 864 661.664 864 600.352z m-305.856-34.016c-13.536 0-27.2-13.44-27.2-27.2 0-13.568 13.664-27.2 27.2-27.2 20.576 0 34.016 13.632 34.016 27.2 0 13.76-13.44 27.2-34.016 27.2z m149.536 0c-13.44 0-27.008-13.44-27.008-27.2 0-13.568 13.568-27.2 27.008-27.2 20.352 0 34.016 13.632 34.016 27.2 0 13.76-13.664 27.2-34.016 27.2z"
                    fill="#707070"
                    p-id="4382"
                  ></path>
                </svg>
                <p>微信扫一扫关注</p>
              </div>
              <div class="item">
                <img src="../../assets/images/code_login_wechat.png" alt="" />
                <svg
                  t="1711437162018"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2447"
                  width="16"
                  height="16"
                >
                  <path
                    d="M820.409449 797.228346q0 25.19685-10.07874 46.866142t-27.716535 38.299213-41.322835 26.204724-50.897638 9.574803l-357.795276 0q-27.212598 0-50.897638-9.574803t-41.322835-26.204724-27.716535-38.299213-10.07874-46.866142l0-675.275591q0-25.19685 10.07874-47.370079t27.716535-38.80315 41.322835-26.204724 50.897638-9.574803l357.795276 0q27.212598 0 50.897638 9.574803t41.322835 26.204724 27.716535 38.80315 10.07874 47.370079l0 675.275591zM738.771654 170.330709l-455.559055 0 0 577.511811 455.559055 0 0-577.511811zM510.992126 776.062992q-21.165354 0-36.787402 15.11811t-15.622047 37.291339q0 21.165354 15.622047 36.787402t36.787402 15.622047q22.173228 0 37.291339-15.622047t15.11811-36.787402q0-22.173228-15.11811-37.291339t-37.291339-15.11811zM591.622047 84.661417q0-8.062992-5.03937-12.598425t-11.086614-4.535433l-128 0q-5.03937 0-10.582677 4.535433t-5.543307 12.598425 5.03937 12.598425 11.086614 4.535433l128 0q6.047244 0 11.086614-4.535433t5.03937-12.598425z"
                    p-id="2448"
                  ></path>
                </svg>
                <p>扫一扫下载APP</p>
              </div>
            </div>
            <p class="tip">尚医通官方指定平台</p>
            <p class="tip">快速挂号 安全放心</p>
          </div>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
//获取user仓库的数据
import { User, Lock } from "@element-plus/icons-vue";
import useUserStore from "@/store/modules/user";
import { ref, reactive, computed } from "vue";
import { ElMessage } from 'element-plus';
let userStore = useUserStore();
let time = ref<number>(5);
let flag = ref<boolean>(false);
  const getCode = async () => {
  flag.value = true;
  setInterval(() => {
    time.value--;
    if (time.value === 0) {
      flag.value = false;
      time.value = 5;
    }
  }, 1000);
  try {
    await userStore.getCode(loginParams.phone);
    loginParams.code = userStore.code;
  } catch (error) {
    console.log(error);
  }
};

let loginParams = reactive({
  phone: "",
  code: "",
});
//判断当前元素是否为手机号
let isPhone = computed(() => {
  const req =
    /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
  return req.test(loginParams.phone);
});
let scene = ref<number>(0); //0代表手机号登录，1代表扫码登录
const changeScene = () => {
  scene.value === 0 ? (scene.value = 1) : (scene.value = 0);
};
//点击登录
const login = async () => {
  try {
    //登录成功
    await userStore.userLogin(loginParams);
    userStore.visiable = false;
  } catch (error) {
    ElMessage({
      type:'error',
      message:(error as Error).message
    })
  }
};

</script>

<script lang="ts">
export default {
  name: "Login",
};
</script>

<style scoped lang="scss">
.login_container {
  :v-deep(.el-dialog__body) {
    border-top: 1px solid #ebeef5;
    border-bottom: 1px solid #ebeef5;
  }
  .login {
    padding: 20px;
    border: 1px solid #ccc;
    .el-form-item {
      margin-bottom: 20px;
    }
    .bottom {
      align-items: center;
      display: flex;
      flex-direction: column;
      p {
        margin: 10px 0;
      }
    }
  }

  .leftContent {
    .top {
      display: flex;
      justify-content: space-around;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 130px;
          height: 130px;
        }
        p {
          margin: 5px 0px;
        }
      }
    }
  }
  .tip {
    text-align: center;
    margin: 20px 0;
    font-size: 20px;
    font-weight: 800;
    font-style: italic;
  }
}
</style>