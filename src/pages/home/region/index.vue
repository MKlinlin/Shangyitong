<template>
  <div class="region">
    <div class="content">
       <div class="left">地区:</div>
        <ul>
            <li class="active">全部</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
        </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss" >
.region{
    color: #7f7f7f;
    .content{
        display:flex ;
        .left{
            
            width: 50px;
        }
        ul{
            display: flex;
            flex-wrap: wrap;
            li{
                margin-right: 10px;
                margin-bottom: 10px;
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
}
</style>