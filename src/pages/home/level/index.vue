<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
        <div class="left">等级:</div>
        <ul class="hospital">
            <li :class="{active:activeFlag==''}" @click="changeLevel('')">全部</li>
            <li v-for="level in levelArr" :key="level.value" :class="{active:activeFlag==level.value}" @click="changeLevel(level.value)">{{level.name}}</li>
        </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reqHospitalLevelAndRegion } from '@/api/home';
import { ref, onMounted } from 'vue';
import type { HospitalLevelAndRegionArr, HospitalLevelAndRegionResponseData } from '@/api/home/type';

let levelArr= ref<HospitalLevelAndRegionArr>([]);
let activeFlag= ref<string>('');
onMounted(() => {
    getlevel();
});

const getlevel = async () => {
    const res: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('HosType');
    if (res.code === 200) {
        levelArr.value = res.data;
    };
};

const changeLevel = (level: string) => {
    activeFlag.value = level;
};
</script>

<style lang="scss" scoped>
.level{
    color: #7f7f7f;
    h1 {
        
        font-weight:900;
        margin:10px 0;
    }
    .content{
        display:flex ;
        .left{
            width: 50px;
        }
    }
    .hospital{
        display: flex;
        li{
            margin-right: 10px;
            cursor: pointer;
            &.active{
                color: #55a6f5;
            }
        }
        li:hover{
            color: #55a6f5;
        }
    }
}
</style>