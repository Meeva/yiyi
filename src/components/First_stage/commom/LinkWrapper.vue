<template>
    <div class="link-wrapper"> 
        <a href="javascript:;">
            <img class="link1" :src="link1">
            <p>生日蛋糕</p>
        </a>
        <a href="javascript:;">
            <img class="link2" :src="link2">
            <p>甜品鲜花</p>
        </a>
        <a href="javascript:;">
            <img class="link3" :src="link3">
            <p>定制派对</p>
        </a>
        <a href="javascript:;">
            <img class="link4" :src="link4">
            <p>商务茶歇</p>
        </a>
    </div>
</template>
<script>
import mlist from "../json/Yiyi.json"
export default {
    props:{
        link1:{default:""},
        link2:{default:""},
        link3:{default:""},
        link4:{default:""},
    },
    data(){
        return{
            //将读取的数据保存list，显示
            list:mlist
        }
    }
}
</script>
<style scoped>
    div{
        margin: 0;
        padding: 0;
        border: 0px;
        font-weight: normal;
    }
    .link-wrapper{
        overflow: hidden;
        background: #FFFFFF;
    }
    .link-wrapper a{
        float: left;
        width: 25%;
        text-align: center;
        font-size: .24rem;
        color: #431406;
        padding: 1rem 0 .1rem 0;
        position: relative;
        text-decoration: none;
    }
    .link-wrapper img{
        content: '';
        position: absolute;
        width: 2.7rem;
        height: 2.7rem;
        background-size: 100%;
        left: 50%;
        margin-left: -1.75rem;
        top: .8rem;
    }
    .link-wrapper p{
        margin-left: -.75rem;
        margin-top: 3rem;
        color:#947477;
    }

</style>