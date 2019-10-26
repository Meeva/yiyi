<template>
    <div class="body">
        <div class="top-fixed">
            <div class="header">
                <div class="left">
                    <a href="/" class="icon back">
                        <img :src="left" alt="">
                    </a>
                </div>
                <div class="center">购物车</div>
                <div class="right">
                    <a href="javascript:;">
                        <img :src="serve" alt="">
                    </a>
                </div>
            </div>
        </div>
        <div class="no-content">
            <div class="img">
                <img :src="car" alt="">
            </div>
            <p>购物车还空空的呢~</p>
            <a href="javascript:;" class="button bac1">去购物</a>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        serve:{default:""},
        left:{default:""},
        car:{default:""},
    },
}
</script>
<style scoped>
    .body {
        color: #323232;
        font-family: PingFangSC-Regular,PingFang SC,Helvetica,黑体;
        padding: 0;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        margin: auto !important;
        font-size: 1rem;
        background: #F8F8F8;
    }
    .top-fixed {
        position: fixed;
        max-width: 750px;
        margin: auto;
        z-index: 100;
    }
    .header {
        height: 2.5rem;
        position: relative;
        background: #FFFFFF;
    }
    .header .left {
        position: absolute;
        top: 0;
        left: 1.5rem;
        bottom: 0;
    }
    .header .back {
        padding: 0 0 0 .06rem;
    }
    .header .icon {
        display: inline-block;
        width: .36rem;
        height: .5rem;
        position: relative;
        cursor: pointer;
    }
    .left img{
        width: 1.16rem;
        height: 1.16rem;
        }
    .right img{
        height: 1.5rem;
    }
    .header .center {
        display: table;
        margin: auto;
        font-size: 1.25rem;
        line-height: 1.25rem;
        color: #333333;
        text-align: center;
    }
    .header .right {
        position: absolute;
        top: 0;
        right: 1.5rem;
        background-size: 100%; 
        bottom: 0;
        padding: 0 .08rem 0 0;
    }
    .no-content {
        padding: 5.4rem .44rem;
        height: 29rem;
        text-align: center;
    }
    .no-content .img img {
        width: 100%;
        height: auto;
    }
    img {
        border: none;
        vertical-align: top;
    }
    .no-content p {
        font-size: 1.14rem;
        color: #C8C8C8;
        margin: 1.1rem 0 0 0;
    }
    .no-content .button {
        position: absolute;
        bottom: 10rem;
        width: 6.84rem;
        height: 1.88rem;
        line-height: 1.88rem;
        text-align: center;
        color: #FFFFFF;
        left: 50%;
        transform: translateX(-50%);
        border-radius: .6rem;
        text-decoration: none;
    }
    .bac1 {
        background: linear-gradient(to right,#FD5B13,#FF942B) !important;
    }
</style>