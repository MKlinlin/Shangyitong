<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
        <div class="left">等级:</div>
        <ul class="hospital">
            <li class="active">全部</li>
            <li>三级甲等</li>
            <li>三级乙等</li>
            <li>二级甲等</li>
        </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
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