<template>
    <div class="top-fixed">
        <div class="page-tab">
            <div class="content">
                <mt-navbar v-model="active" class="pindex">
                    <mt-tab-item class="item " id="dangao" @click.native="changeState(0)">
                        生日蛋糕<!-- <span>生日蛋糕</span> -->
                    </mt-tab-item>
                    <mt-tab-item class="item " id="xiawuc" @click.native="changeState(1)">
                        甜品饼干<!-- <span>甜品果茶</span> -->
                    </mt-tab-item>
                    <mt-tab-item class="item " id="xianhua" @click.native="changeState(2)">
                        靓丽鲜花<!-- <span>靓丽鲜花</span> -->
                    </mt-tab-item>
                    <mt-tab-item class="item " id="taocan" @click.native="changeState(3)">
                        靓丽鲜花<!-- <span>经典套餐</span> -->
                    </mt-tab-item>
                    <mt-tab-item class="item " id="baochang" @click.native="changeState(4)">
                        靓丽鲜花<!-- <span>生日场景</span> -->
                    </mt-tab-item>
                </mt-navbar>
                <!-- 蛋糕详情面板 -->
                <mt-tab-container v-model="active" class="phead">
                    <mt-tab-container-item id="dangao">
                        <pdangao></pdangao>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="xiawuc">
                        <tpxwc></tpxwc>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="xianhua">3</mt-tab-container-item>
                    <mt-tab-container-item id="taocan">4</mt-tab-container-item>
                    <mt-tab-container-item id="baochang">5</mt-tab-container-item>
                </mt-tab-container>
            </div>
        </div>
    </div>
</template>
<script>
import Pdangao from "./Product子组件/Pdangao"
import Tpxwc from "./Product子组件/Tpxwc"

export default {
    data(){
        return{
            active:"dangao",
            currentIndex:[
                {isSelect:true},
                {isSelect:false},
                {isSelect:false},
                {isSelect:false},
            ]
        }
    },
    components:{
        "pdangao":Pdangao,
        "tpxwc":Tpxwc,
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
<style>
    .top-fixed {
        top: 2rem;
        left: 0;
        right: 0;
        max-width: 24rem;
        margin: auto;
        z-index: 100;
    }
    .content{
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        transition-property: transform,-webkit-transform;
        box-sizing: content-box;
    }
    .content .item{
        font-size: .94rem;
        float: left;
        margin: 0 .2rem 0 0;
        position: relative;
        width: auto !important;
        color: gray;
        }
    .page-tab {
        padding: 0 .1rem 0 .16rem;
        margin: 2rem 0 0 0;
        height: auto;
        position: relative;
        background: #FFFFFF;
        overflow: hidden;
    }
    .phead{
        margin: 0 0 0 0;
    }
    .pindex{
        margin:0 0 0 0;
    }
</style>