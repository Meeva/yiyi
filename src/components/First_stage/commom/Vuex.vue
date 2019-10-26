<template>
    <div>
        <h3>vuex</h3>
        <!-- 获取共享数据fa -->
        <span>成亮老师的发量{{$store.getters.getFa}}</span>
        <!-- 添加按钮：减一根 -->
        <input type="button" value="减一" @click="sub">
        <!-- 添加按钮：发量清空 -->
        <input type="button" value="清空" @click="clear">
    </div>
</template>
<script>
export default {
    methods:{
        sub(){//调用修改数据方法
            this.$store.commit("subItem")
        },
        clear(){//调用修改数据方法
            this.$store.commit("clear")
        }
    }
}
</script>