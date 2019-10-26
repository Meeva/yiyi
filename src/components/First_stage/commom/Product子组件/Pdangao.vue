<template>
<!-- 子栏目 -->
    <div class="subnav">
    <!-- 循环创建每一个子页面 -->
        <div class="content">
        <!-- 1循环每个子页面下一个标签列表 -->
            <ul >
                <li>
                    <a @click.prevent="comName='view1'">
                        <span   
                            
                        >全部</span>
                    </a>
                </li>
                <li>
                    <a @click.prevent="comName='view2'">
                        <span
                            
                        >微糖蛋糕</span>
                    </a>
                </li>
                <li>
                    <a @click.prevent="comName='view3'">
                        <span>主题蛋糕</span>
                    </a>
                </li>
                <li>
                    <a @click.prevent="comName='view4'">
                        <span>经典蛋糕</span>
                    </a>
                </li>
                <li>
                    <a @click.prevent="comName='view5'">
                        <span>儿童</span>
                    </a>
                </li>
                <li>
                    <a @click.prevent="comName='view6'">
                        <span>婚庆</span>
                    </a>
                </li>
                <li>
                    <a @click.prevent="comName='view7'">
                        <span>下午茶蛋糕</span>
                    </a>
                </li>
                <li>
                    <a @click.prevent="comName='view8'">
                        <span>聚会</span>
                    </a>
                </li>
                <li>
                    <a @click.prevent="comName='view9'">
                        <span>畅销新品</span>
                    </a>
                </li>
            <!--2 循环每个子页面下一个标签列表 -->
            </ul>
        </div>
        <component :is="comName"></component>
    </div>
</template>
<script>
    import View1 from "./Pdangaopro/View1"
    import View2 from "./Pdangaopro/View2"
    import View3 from "./Pdangaopro/View3"
    import View4 from "./Pdangaopro/View4"
    import View5 from "./Pdangaopro/View5"
    import View6 from "./Pdangaopro/View6"
    import View7 from "./Pdangaopro/View7"
    import View8 from "./Pdangaopro/View8"
    import View9 from "./Pdangaopro/View9"
    export default {
        data () {
            return {
                comName:"view1"
            };
        },
        methods:{
            
        },
        components:{
            "view1":View1,
            "view2":View2,
            "view3":View3,
            "view4":View4,
            "view5":View5,
            "view6":View6,
            "view7":View7,
            "view8":View8,
            "view9":View9,
        },
    }
</script>

<style scoped>
    .subnav{
        padding: .16rem 0 0 0;
        overflow: hidden;
    }
    .subnav .content{
        margin: 0 0 .08rem 0;
        overflow: hidden;
    } 
    .subnav .content>ul{
        display: flex;
        display: inline-block;
        overflow: hidden;
        padding: 0 .08rem  0 .16rem;
        list-style: none;
        margin: 0;
    }
    .subnav .content>ul>li{
        float: left;
        overflow: hidden;
        margin: 0 .2rem .08rem .65rem;
        font-size: .9rem;
        width: auto;
        list-style: none;
    }
    .subnav .content>ul>li a{
        color: #999999;
        display: block;
        position: relative;
        overflow: hidden;
        text-decoration: none;
    }
    .subnav .content>ul>li a span {
        display: block;
        padding: .35rem .5rem;
        background: #FAFAFA;
        height: 1.18rem;
        line-height: 1.18rem;
        border: .1rem solid #FAFAFA;
        margin: .35rem .06rem 0 0;
    }
    .subnav .content>ul>li a span:hover {
        border: .1rem solid #F09F70;
        border-radius: .8rem;
    }
    
</style>