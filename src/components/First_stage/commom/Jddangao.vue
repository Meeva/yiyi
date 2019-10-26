<template>
    <div class="home-list">
        <div class="head">
            <!-- <h3>经典蛋糕</h3> -->
            <a href="javescript:;">
                <img :src="jdwrapper">
                
            </a>
        </div> 
        <div class="content" v-for="(item,i) of list" :key="i">
            <ul>
                <li>
                    <div class="item">
                        <a href="javascript:;">
                            <div class="img">
                                <img :src="item.img">
                            </div>
                            <div class="info">
                                <div class="title">{{item.name}}</div>
                                <div class="msg">{{item.pname}}</div>
                                <div class="price ">{{item.price}}</div>
                            </div>
                            <!-- <mt-button>加入购物车</mt-button> -->
                        </a>
                    </div>    
                </li>
                <li>
                    <div class="item">
                        <a href="javascript:;">
                            <div class="img">
                                <img :src="item.img">
                            </div>
                            <div class="info">
                                <div class="title">{{item.name}}</div>
                                <div class="msg">{{item.pname}}</div>
                                <div class="price ">{{item.price}}</div>
                            </div>
                            <!-- <mt-button>加入购物车</mt-button> -->
                        </a>
                    </div>    
                </li>
                <!-- <li><img src="http://127.0.0.1:4000/02.jpg"></li> -->
            </ul>
        </div>
        <!-- <mt-button>查看购物车</mt-button> -->
        <div class="more">
            <a href="javascript:;">
                <span @click="loadMore"> more+</span>
            </a>    
            <!-- <mt-button type="primary" size="large" @click="loadMore">more+</mt-button> -->
        </div>
    </div>
</template>
<script>
export default {
    props:{
        jdwrapper:{default:""},
    },
    data(){
        return{
            list:[],
        }
    },
    created(){
        this.loadMore();
    },
    methods:{
        loadMore(){
            //1.创建url
            var url = "First_stage"
            //2.创建obj参数
            var num=1;
            var obj = {pno:num++};
            // for(var num=1;num<20;num++){
            //     var obj={pno:num};
            //     return num;
            //     console.log(num);
            // }
            // console.log(num);
            //3.发送axios请求
            this.axios.get(url,{params:obj}).then(res=>{
                //4.接收返回结果并且显示
                //this.list = res.data.data;
                console.log(this.list);
                //拼接上一页和下一页内容
                var rows = this.list.concat(res.data.data);
                this.list = rows;
            })
        }
    }
}
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    div{
        display: block;
    }
    .home-list .head {
        overflow: hidden;
        margin-top: 1rem;
    }
    a {
        color: inherit;
        text-decoration: none;
        border: 0px;
        color: #323232;
    }
    .home-list .head img {
        width: 100%;
        height: auto;
    }
    img {
        border: none;
        vertical-align: top;
    }
    .home-list .content {
        overflow: hidden;
        padding: .16rem .01rem 0 0;
    }
    .home-list .content ul {
        overflow: hidden;
        padding: 0 0 0 .16rem;
    }
    ul, ol, li {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    ul {
        display: block;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
    }
    li {
        display: list-item;
        text-align: -webkit-match-parent;
    }
    .home-list .content ul li {
        float: left;
        width: 50%;
        padding: .02rem 0 0 0;
    }
    .home-list .content .item {
        margin: 0 1rem .14rem .1rem;
        border-radius: .8rem;
        box-shadow: .5rem 0.4rem 0.4rem 0 rgba(153, 153, 153, 0.15);
        position: relative;
        overflow: hidden;
    }
    .home-list .content .img {
        height: 10.62rem;
        overflow: hidden;
        background: #FAFAFA;
    }
    .home-list .content .img img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .home-list .content {
        height: 14.62rem;
        overflow: hidden; 
        background: #FAFAFA;
    }
    .home-list .content .info {
        padding: .08rem .12rem .12rem .12rem;
    }
    .home-list .content .title {
        font-size: .14rem;
        color: #333333;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .home-list .content .msg {
        font-size: .12rem;
        color: #999999;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .home-list .content .price {
        font-size: .14rem;
        color: #FE5910;
        margin: .02rem 0 0 0;
    }
    .home-list .more {
        text-align: center;
        padding: 0 0 .16rem 0;
        /* clear: both; */
        margin-bottom:2rem; 
    }
    .home-list .more a {
        display: inline-block;
        padding: 0 .08rem 0 0;
        font-size: .14rem;
        color: #999999;
        position: relative;
    }
</style>