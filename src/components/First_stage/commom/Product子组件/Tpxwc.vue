<template>
<!-- 子栏目 -->
    <div class="subnav">
    <!-- 循环创建每一个子页面 -->
        <div class="content">
        <!-- 1循环每个子页面下一个标签列表 -->
            <ul >
                <li>
                    <a @click.prevent="comName='view1'">
                        <span>全部</span>
                    </a>
                </li>
                <li>
                    <a @click.prevent="comName='view2'">
                        <span>MINI西点</span>
                    </a>
                </li>
                <li>
                    <a @click.prevent="comName='view3'">
                        <span>手工饼干</span>
                    </a>
                </li>
                <li>
                    <a @click.prevent="comName='view4'">
                        <span>手工马卡龙</span>
                    </a>
                </li>
                <li>
                    <a @click.prevent="comName='view5'">
                        <span>手工巧克力</span>
                    </a>
                </li>
                
            <!--2 循环每个子页面下一个标签列表 -->
            </ul>
        </div>
        <component :is="comName"></component>
    </div>
</template>
<script>
    import View1 from "./Tpxwcpro/View1"
    import View2 from "./Tpxwcpro/View2"
    import View3 from "./Tpxwcpro/View3"
    import View4 from "./Tpxwcpro/View4"
    import View5 from "./Tpxwcpro/View5"
    
    export default {
        data () {
            return {
                comName:"view1"
            }
        },
        components:{
            "view1":View1,
            "view2":View2,
            "view3":View3,
            "view4":View4,
            "view5":View5,
            
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
        margin: 0 .2rem .08rem 1rem;
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
    .subnav .content>ul>li a span{
        display: block;
        padding: .35rem .5rem;
        background: #FAFAFA;
        height: 1.18rem;
        line-height: 1.18rem;
        border: .01rem solid #FAFAFA;
        border-right: none;
        margin: .5rem .06rem 0 0;
    }
</style>