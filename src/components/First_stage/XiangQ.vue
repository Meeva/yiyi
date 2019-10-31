<template>
    <!-- 这里是顶端 -->
    <div class="index">
        <div class="goods-header">
            <div class="left">
                <a href="">
                    <img src="../../img/XiangQ/back-icon.png" alt="">
                </a>
            </div>
            <div class="center">
                <div class="link">
                    <a href="javascript:;">商品</a>
                    <a href="javascript:;">评论</a>
                    <a href="javascript:;">推荐</a>
                    <a href="javascript:;">详情</a>
                </div>
            </div>
            <div class="right">
                <a href="javascript:;" class="icon cart show">
                    <div class="background"></div>
                </a>
                <a href="javascript:;" class="icon more show">
                    <div class="background"></div>
                </a>
            </div>
        </div>
        <!-- 轮播 -->
        <div class="goods-article"></div>
        <div></div>
        <div class="bottom-fixed">
            <div class="goods-footer">
                <div class="link">
                    <a href="" class="item icon3">
                        <img src="../../img/XiangQ/footer-icon3.png" alt="">
                        <span>
                            首页
                        </span>
                    </a>
                    <a href="" class="item icon1">
                        <img src="../../img/XiangQ/footer-icon1.png" alt="">
                        <span>
                            客服
                        </span>
                    </a>
                    <a href="" class="item icon2">
                        <img src="../../img/XiangQ/footer-icon2.png" alt="">
                        <span>
                            购物车
                        </span>
                    </a>
                </div>
                <div class="button-wrapper">
                    <div class="content">
                        <a href="" class="item item1">加入购物车</a>
                        <a href="" class="item item2">立即购买</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .goods-footer .link .item img{
        width:1.55rem;
    }
    .index{
        color: #323232;
        font-family: PingFangSC-Regular,PingFang SC,Helvetica,黑体;
        padding: 0;
        margin: auto !important;
        font-size: 16px;
        background: #F8F8F8;
    }
    .bottom-fixed {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 100;
        height: 4.5rem;
    }
    .goods-footer {
        height: .55rem;
        border-top: 1px solid #FAFAFA;
        position: relative;
        padding: 0 0 0 1.3rem;
        background: #FFFFFF;
        padding-bottom: env(safe-area-inset-bottom);
        border-top-left-radius: .24rem;
        border-top-right-radius: .24rem;
    }
    .goods-footer .link {
        position: absolute;
        left: 1rem;
        top: .75rem;
    }
    .goods-footer .link .item {
        float: left;
        position: relative;
        width: 3.1rem;
        text-align: center;
        font-size: .8rem;
        color: #999999;
    }
    .goods-footer .link .item span {
        position: relative;
        padding: 0 0 0 0;
        display: inline-block;
    }
    .goods-footer .button-wrapper {
        padding: .12rem .16rem 0 0;
        margin: 0 1rem 0 0;
        overflow: hidden;
        float: right;
    }
    .goods-footer .button-wrapper .content {
        float: right;
    }
    .goods-footer .button-wrapper .item {
        text-decoration: none;
        float: left;
        min-width: .7rem;
        padding: 0 .15rem;
        height: 2rem;
        line-height: 2rem;
        text-align: center;
        background: #FFFFFF;
        margin: 1rem 1.25rem 0 1rem;
        color: #EA5421;
        border: 1px solid #EA5421;
        border-radius: .8rem;
        font-family: SourceHanSansSC-Medium;
    }
    .goods-footer .button-wrapper .item.item2 {
        color: #FFFFFF;
        border: none;
        height: 2rem;
        line-height: 2rem;
        margin: 1rem 1.25rem 0 1rem;
        background: linear-gradient(to right,#FD5B13,#FF942B) !important;
    }
</style>