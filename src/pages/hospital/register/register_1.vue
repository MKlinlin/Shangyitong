<template>
  <div class="wrap">
    <div class="top">
      <div class="hosname">
        {{ workData.baseMap?.hosname }}
      </div>
      <div class="line">|</div>
      <div>{{ workData.baseMap?.bigname }}</div>
      <div class="dot">.</div>
      <div class="hospartment">{{ workData.baseMap?.depname }}</div>
    </div>
    <div class="center">
      <h1>{{ workData.baseMap?.workDateString }}</h1>
      <div class="container">
        <div
          class="item"
          :class="{active:item.status==-1||item.availableNumber==-1}"
          v-for="item in workData.bookingScheduleList"
          :key="item"
        >
          <div class="above">{{ item.workDate }}-{{ item.dayOfWeek }}</div>
          <div class="bottom">
            <div v-if="item.status == -1">停止挂号</div>
            <div v-if="item.status == 0">
              {{
                item.availableNumber == -1
                  ? "已约满"
                  : `有号(${item.availableNumber})`
              }}
            </div>
            <div v-if="item.status==1">即将放号</div>
          </div>
        </div>
      </div>
      <el-pagination v-model:current-page="pageNo" layout="prev,pager,next" :total="workData.total" @current-change="fetchWorkData" />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from "vue";
import { reqHospitalWork } from "@/api/hospital";
import type { HospitalWordData } from "@/api/hospital/type";
import { useRoute } from "vue-router";

let $route = useRoute();
onMounted(() => {
  fetchWorkData();
});
let pageNo = ref<number>(1);
let limit = ref<number>(6);
let workData = ref<any>({});
const fetchWorkData = async () => {
  let res: HospitalWordData = await reqHospitalWork(
    pageNo.value,
    limit.value,
    String($route.query.hoscode),
    String($route.query.depcode)
  );
  console.log(res);
  if (res.code === 200) {
    workData.value = res.data;
  }
};


</script>

<style scoped lang="scss">
.wrap {
  .top {
    display: flex;
    color: #7f7f7f;
    margin: 0 10px;
    .dot,
    .line {
      margin: 0 5px;
    }
  }
  .center {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-weight: 900;
      margin: 20px 0;
    }
    .container {
      width: 100%;
      display: flex;
      margin: 30px 0;
      .item {
        flex: 1;
        border: 1px solid #7f7f7f;
        margin: 0 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        &.active {
          border: 1px solid #7f7f7f;
          color:#7f7f7f;
          .above{
            background-color: #f5f5f5;
          }
        }
      }
      .above {
        background-color: #e8f2ff;
        height: 30px;
        width: 100%;
        text-align: center;
      }
      .bottom{
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>