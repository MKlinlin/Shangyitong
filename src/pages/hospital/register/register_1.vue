<template>
  <div class="wrap">
    <div class="top">
        <div class="hosname">
            北京人民医院
        </div>
        <div class="line">|</div>
        <div>专科</div>
        <div class="dot">.</div>
        <div class="hospartment">xx门诊</div>
    </div>
    <div class="center">
        <h1>2024年4月</h1>
        <div class="container">
            <div class="item" v-for="item in 6" :key="item">
                <div class="above">123</div>
                <div class="bottom">456</div>
            </div>
        </div>
        <el-pagination layout="prev,pager,next" :total="20" />
    </div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang="scss">
.wrap{
    .top{
        display:flex;
        color:#7f7f7f;
        margin:0 10px;
        .dot,.line{
            margin:0 5px;
        }
    }
    .center{
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1{
            font-weight: 900;
            margin:20px 0;
        }
        .container{
            width: 100%;
            display: flex;
            margin:30px 0;
            .item{
                flex:1;
                border:1px solid #7f7f7f;
                margin: 0 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .above{
                background-color: #e8f2ff;
                height: 30px;
                width: 100%;
                text-align: center;
            }
        }
    }
}
</style>