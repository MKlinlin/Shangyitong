<template>
  <div class="region">
    <div class="content">
      <div class="left">地区:</div>
      <ul>
        <li :class="{ active: regionFlag == '' }" @click="changeRegion('')">
          全部
        </li>
        <li
          v-for="item in RegionArr"
          :key="item.value"
          :class="{ active: regionFlag == item.value }"
          @click="changeRegion(item.value)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reqHospitalLevelAndRegion } from "@/api/home";
import { ref, onMounted } from "vue";
import type {
  HospitalLevelAndRegionArr,
  HospitalLevelAndRegionResponseData,
} from "@/api/home/type";

let RegionArr = ref<HospitalLevelAndRegionArr>([]);
let regionFlag = ref<string>("");
//地区组件挂载完毕
onMounted(async () => {
  getRegion();
});

const getRegion = async () => {
  const res: HospitalLevelAndRegionResponseData =
    await reqHospitalLevelAndRegion("Beijin");
  if (res.code === 200) {
    RegionArr.value = res.data;
  }
};

const changeRegion = (region: string) => {
  regionFlag.value = region;
  $emit("getRegion", region);
};

let $emit = defineEmits(["getRegion"]);
</script>

<style scoped lang="scss" >
.region {
  color: #7f7f7f;
  margin-top: 10px;
  .content {
    display: flex;
    .left {
      width: 50px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        margin-right: 10px;
        margin-bottom: 10px;
        cursor: pointer;
        &.active {
          color: #55a6f5;
        }
      }
      li:hover {
        color: #55a6f5;
      }
    }
  }
}
</style>