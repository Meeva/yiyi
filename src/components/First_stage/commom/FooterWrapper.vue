<template>
    <div class="footer">
            <div class="home-special">
                <div class="head">
                    <h2>品牌介绍</h2>
                </div>
                <div class="content">
                    <a href="javascript:;">
                        <div class="img">
                            <img :src="w1" alt="">
                        </div>
                        <div class="info">
                            <div class="title">庆祝生日 壹点壹客</div>
                            <div class="msg">Happy Birthday</div>
                            <div class="button bac1">查看</div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="contact-wrapper">
                <p>订购和咨询热线：
                    <a href="javascript:;">0755-36885360</a>
                </p>
                <p>
                    采集大客户专线
                    <a href="javascript:;">0755-86291473</a>(深圳)
                    <a href="javascript:;">0755-86291473</a>(成都)
                </p>
                <p>客服邮箱：service@1date1cake.com</p>
                <p>
                    <a href="javascript:;">
                        <img :src="zj1" alt="" width="25">
                    </a>
                    <a href="javascript:;">粤ICP备11021841号</a>
                </p>
                <p>
                    <a href="javascript:;">食品生产许可证</a>
                </p>
                <p>
                    <a href="javascript:;">
                        <img :src="zj2" alt="" width="25">粤公网安备 44030502004413号
                    </a>
                </p>
            </div>
        </div>
</template>
<script>
export default {
    props:{
        w1:{default:""},
        zj1:{default:""},
        zj2:{default:""},
    }
}
</script>
<style scoped>
    .home-special{
        overflow: hidden;
        background: #fff;
    }
    .home-special .head {
        padding: .15rem .16rem 0 .16rem;
        position: relative;
    }
    .home-special .head h2 {
        margin-left: 2rem;
        line-height: .16rem;
        font-size: 1rem;
        font-family: PingFangSC-Medium;
    }
    .home-special .content {
        margin: 1.16rem;
        border-radius: 1.08rem;
        box-shadow: 0 0.03rem 1rem 0 rgba(173, 179, 191, 1);
        background: #FFFFFF;
        overflow: hidden;
    }
    .content {
        position: relative;
        width: 23.5rem;
        height: 100%;
        z-index: 1;
        transition-property: transform,-webkit-transform;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
    }
    a {
        color: inherit;
        text-decoration: none;
        border: 0px;
        color: #323232;
    }
    .home-special .content .img {
        height: 12.75rem;
        overflow: hidden;
        background: #FAFAFA;
    }
    .home-special .content .img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .home-special .content .info {
        margin-left: 1rem;
        height: 3rem;
        padding: .08rem .16rem .16rem .16rem;
        position: relative;
    }
    .home-special .content .title {
        font-size: 1.14rem;
        line-height: 2rem;
        color: #4D4D4D;
    }
    .home-special .content .msg {
        font-size: .5rem;
        line-height: .12rem;
        color: #999999;
        margin: .04rem 0 0 0;
    }
    
    .home-special .content .button {
        position: absolute;
        width: 5rem;
        height: 1.5rem;
        line-height: 1.5rem;
        text-align: center;
        /*background-color: coral;*/
        background: linear-gradient(to right,#FD5B13,#FF942B) !important;
        font-size: 1rem;
        border-radius: 1rem;
        right: 3.16rem;
        top: 50%;
        color: #FFFFFF;
        transform: translateY(-50%);
    }
    /**/
    .contact-wrapper {
        margin-left: 1rem;
        overflow: hidden;
        padding: .16rem 0 .2rem .16rem;
        font-size: .11rem;
        color: #999999;
        line-height: .18rem;
    }
    .contact-wrapper a {
        color: #999999;
        text-decoration: underline;
    }
</style>