<template>
    <div class="top-fixed">
        <div class="header">
            <div class="search">
                <form action="">
                    <div class="text-item">
                        <img :src="search" alt="" class="search-img">
                        <input type="text" class="text" placeholder="搜索商品">
                    </div>
                    <input type="submit" class="submit" value="搜索">
                </form>
            </div>
            <div class="right">
                <a href="javascript:;" class="icon service">
                    <img :src="service" alt="" class="service-img">
                </a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            search:{default:""},
            service:{default:""},
        }
    }
</script>
<style scoped>
    .top-fixed {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        max-width: 750px;
        margin: auto;
        z-index: 100;
    }
    .header {
        height: 4.5rem;
        position: relative;
        background: #FFFFFF;
    }
    .header .search {
        padding: .13rem .85rem .13rem .16rem;
        position: relative;
    }
    form {
        display: block;
        margin: 0 1rem 0 0;
        
    }
    input {
        font-family: PingFangSC-Regular,PingFang SC,Helvetica,黑体;
        font-style: normal;
        border: none;
        outline: medium;
    }
    .header .search .text-item {
        margin: 1rem 5rem 1rem 1rem;
        height: 2.24rem;
        line-height: 2.24rem;
        background: #F5F5F5;
        border-radius: 1rem;
        padding: 0 .1rem 0 .37rem;
        position: relative;
    }
    .header .search .text-item .search-img{
        content: '';
        padding: 0 0 0 0.75rem;
        position: absolute;
        width: 1.17rem;
        height: 1.17rem;
        background-size: 100%;
        left: .12rem;
        top: 50%;
        transform: translateY(-50%);
    }
    .header .search .text-item .text {
        font-size: 1rem;
        line-height: .18rem;
        margin: 0 0 0 2.5rem;
        width: 100%;
        background: none;
    }
    .header .search .submit {
        position: absolute;
        right: 3.25rem;
        height: 4.5rem;
        line-height: 4.5rem;
        top: .13rem;
        font-size: 1rem;
        color: #999999;
        background: none;
    }

    .header .right {
        position: absolute;
        top: 1.6rem;
        right: 1.5rem;
        height: 5rem;
        bottom: 0;
        padding: 0 .08rem 0 0;
    }
    .header .icon {
        display: inline-block;
        width: .36rem;
        height: .5rem;
        position: relative;
        cursor: pointer;
    }
    .header .icon .service-img{
        content: '';
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        background-size: 100%;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        }
</style>