<template>
    <div>
        <!-- <h3>Frist_Stage.vue 父组件</h3> -->
        <!-- 顶部导航 -->
        <!-- 面板 -->
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="shouye" >
                <top dress="成都" 
                    :left1Img="require('../../img/First_stage/location_icon_dg.png')"
                    :left2Img="require('../../img/First_stage/location_after_dg.png')"
                    :center="require('../../img/First_stage/logo_dg.png')"
                    :right1Img="require('../../img/First_stage/personal_icon_dg.png')"
                    :right2Img="require('../../img/First_stage/service_icon_dg.png')"
                ></top>
                <!-- 顶部导航下的轮播 -->
                <coursoul
                    :c1="require('../../img/coursoul/17.jpg')"
                    :c2="require('../../img/coursoul/28.jpg')"
                    :c3="require('../../img/coursoul/42.jpg')"
                    :c4="require('../../img/coursoul/96.jpg')"
                ></coursoul>
                <!-- 头部导航菜单+图片 -->
                <linkwrapper
                    :link1="require('../../img/link_wrapper/link-icon1.png')"
                    :link2="require('../../img/link_wrapper/link-icon2.png')"
                    :link3="require('../../img/link_wrapper/link-icon3.png')"
                    :link4="require('../../img/link_wrapper/link-icon4.png')"
                ></linkwrapper>
                <imglinkwrapper
                    :imglink1="require('../../img/img_link_wrapper/12.jpg')"
                    :imglink2="require('../../img/img_link_wrapper/63.jpg')"
                ></imglinkwrapper>
                <!-- 经典蛋糕+主题蛋糕+下午茶 菜单 list-wrapper-->
                <div class="list-wrapper">
                    <jddangao
                        :jdwrapper="require('../../img/list_wrapper/19.png')"
                    ></jddangao>
                    <ztdangao
                        :ztwrapper="require('../../img/list_wrapper/08.png')"
                    ></ztdangao>
                    <tplist
                        :tpwrapper="require('../../img/list_wrapper/21.png')"
                    ></tplist>
                </div>
                <!-- 脚本 footer 消息 -->
                <footerwrapper
                    :w1="require('../../img/footwrapper/brand_story.jpg')"
                    :zj1="require('../../img/footwrapper/gswj.png')"
                    :zj2="require('../../img/footwrapper/beian.png')"
                ></footerwrapper>
            </mt-tab-container-item>
            <mt-tab-container-item id="shangpin" >
                <productsearch
                    :search="require('../../img/product/search-icon.png')"
                    :service="require('../../img/product/service-icon.png')"
                ></productsearch>
                <product></product>
            </mt-tab-container-item>
            <mt-tab-container-item id="gouwuche" >
                <shoppingcar
                    :left="require('../../img/shoppingcar/back-icon.png')"
                    :serve="require('../../img/shoppingcar/service-icon.png')"
                    :car="require('../../img/shoppingcar/cart-nocontent-img.png')"
                ></shoppingcar>
            </mt-tab-container-item>
            <mt-tab-container-item id="gerenzhongxin" >
                <grzhongxin></grzhongxin>
            </mt-tab-container-item>
        </mt-tab-container>
            <!-- 底部导航条 -->
        <mt-tabbar fixed v-model="active">
            <!-- 添加三个按钮 -->
            <mt-tab-item id="shouye" @click.native="changeState(0)">
                <bottom :normalImg="require('../../img/First_stage/首页.png')"
                    :selectedImg="require('../../img/First_stage/首页1.png')"
                    :focused="currentIndex[0].isSelect"
                ></bottom>
                <span>首页</span>
            </mt-tab-item>
            <mt-tab-item id="shangpin" @click.native="changeState(1)">
                <bottom :normalImg="require('../../img/First_stage/商品.png')"
                    :selectedImg="require('../../img/First_stage/商品3.png')"
                    :focused="currentIndex[1].isSelect"
                ></bottom>
                <span>全部商品</span>
            </mt-tab-item>
            <mt-tab-item id="gouwuche" @click.native="changeState(2)">
                <bottom :normalImg="require('../../img/First_stage/购物车.png')"
                    :selectedImg="require('../../img/First_stage/购物车1.png')"
                    :focused="currentIndex[2].isSelect"
                ></bottom>
                <span>购物车</span>
            </mt-tab-item>
            <mt-tab-item id="gerenzhongxin" @click.native="changeState(3)">
                <bottom :normalImg="require('../../img/First_stage/个人中心.png')"
                    :selectedImg="require('../../img/First_stage/个人中心1.png')"
                    :focused="currentIndex[3].isSelect"
                ></bottom>
                <span>个人中心</span>
            </mt-tab-item>
        </mt-tabbar>
        
    </div>
</template>
<script>
import Top from "./commom/Top"
import Coursoul from "./commom/Coursoul"
import LinkWrapper from "./commom/LinkWrapper"
import ImgLinkWrapper from "./commom/ImgLinkWrapper"
import Jddangao from "./commom/Jddangao"
import ZTdangao from "./commom/ZTdangao"
import TPlist from "./commom/TPlist"
import Productsearch from "./commom/Productsearch"
import ShoppingCar from "./commom/ShoppingCar"
import Product from "./commom/Product"
import FooterWrapper from "./commom/FooterWrapper"
import Grzhongxin from "./commom/Grzhongxin"
import Bottom from "./commom/Bottom"


export default {
    data(){
        return{
            active:"shouye",
            currentIndex:[
                {isSelect:true},
                {isSelect:false},
                {isSelect:false},
                {isSelect:false},
            ]
        }
    },
    components:{
        "top":Top,
        "coursoul":Coursoul,
        "linkwrapper":LinkWrapper,
        "imglinkwrapper":ImgLinkWrapper,
        "jddangao":Jddangao,
        "ztdangao":ZTdangao,
        "tplist":TPlist,
        "productsearch":Productsearch,
        "shoppingcar":ShoppingCar,
        "product":Product,
        "footerwrapper":FooterWrapper,
        "grzhongxin":Grzhongxin,
        "bottom":Bottom,
    },
    methods:{
        changeState(n){
            for(var i=0;i<this.currentIndex.length;i++){
                if(n==i){
                    this.currentIndex[i].isSelect=true;
                }else{
                    this.currentIndex[i].isSelect=false;
                }
            }
        }
    },
}
</script>
<style scoped>
    .mint-tabbar>.mint-tab-item{
        color: #947477;
    }
    .mint-tabbar>.mint-tab-item.is-selected{
        background-color: transparent;
        color: #fd5912;
    }
    .list_wrapper{
        overflow: hidden;
    }
    mt-tab-container{
        z-index: 100;
    }
</style>