<template>
    <div class="index-header">
        <!-- <h3>顶部导航条</h3> -->
        <!-- 左侧定位 -->
        <div class="left">
            <img class="left1" :src="left1Img">
            <a href="javascript:;" class="location">
                <span id="from_city">{{dress}}</span>
            </a>
            <img class="left2" :src="left2Img">
        </div>
        <!-- 中间logo -->
        <div class="center">
            <a href="javascript:;" >
                <img :src="center" class="logo">
            </a>
        </div>
        <!-- 右边个人中心及会话 -->
        <div class="right">
            <a href="javascript:;" class="personal" title="会员中心">
                <img class="right1" :src="right1Img">
            </a>
            <a href="javascript:;" class="service" title="联系客服">
                <img class="right2" :src="right2Img">
            </a>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        dress:{default:""},
        left1Img:{default:""},
        left2Img:{default:""},
        center:{default:""},
        right1Img:{default:""},
        right2Img:{default:""},
    },
    data(){
        return{

        }
    }
}
</script>
<style scoped>
    div{
        margin: 0;
        padding: 0;
        border: 0;
        font-weight: normal;
    }
    .index-header{
        height:50px;
        background: #ffffff;
        z-index: 999;
        box-shadow: 0 0.011rem 0.03rem ragba(0,0,0,0,2);
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        max-width: 500;
        margin:auto;
    }
    .index-header .left{
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
    }
    .index-header .location{
        float: left;
        padding: 0 15px 0 40px;
        color: #ff771c;
        height: 50px;
        line-height: 50px;
        position: relative;
        font-size: 14px;
    }

    .index-header .left1{
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        background-size: 100%;
        left: 15px;
        top: 50%;
        margin-top: -10px;
    }
    .index-header .left2{
        content: '';
        position: absolute;
        width: 9px;
        height: 9px;
        background-size: 100%;
        top: 50%;
        margin-top: -5px;
        right: 0;
    }
    .index-header .center{
        display: table;
        margin: auto;
        height: 50px;
    }
    .index-header .logo{
        display: block;
        width: 98px;
        height: 25px;
        background-size: 100%;
        margin: 12px 0 0 0;
    }
    .index-header .right{
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
    }
    .index-header .personal{
        float: left;
    height: 50px;
    position: relative;
    width: 20px;
    padding: 0 10px;
    }
    .index-header .right1{
        content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-size: 100%;
    top: 50%;
    margin-top: -10px;
    }
    .index-header .service{
        float: left;
        height: 50px;
        position: relative;
        width: 20px;
        padding: 0 15px 0 15px;
    }
    .index-header .right2{
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        background-size: 100%;
        top: 50%;
        margin-top: -10px;
    }
</style>