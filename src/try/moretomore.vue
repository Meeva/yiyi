<template>
    <div>
        <h2>多页面跳转</h2>
        <div class="c1">
            <input type="text"
            @focus="trans"
            @blur="aa">
            <span ref="on">请输入账号</span>
        </div>
        <div class="c2"><input type="password"
            @focus="transc2"
            @blur="aac2">
            <span ref="onc2">请输入密码</span>
        </div>
        
    </div>
</template>
<script>
export default {
    methods:{
        trans () {
            this.$refs.on.style.fontSize = 1 + "rem";
            this.$refs.on.style.top = -1 + "rem";
        },
        aa () {
            this.$refs.on.style.fontSize = 1 + "rem";
            this.$refs.on.style.top = 0;
        },
        transc2 () {
            this.$refs.onc2.style.fontSize = 1 + "rem";
            this.$refs.onc2.style.top = -1 + "rem";
        },
        aac2 () {
            this.$refs.onc2.style.fontSize = 1 + "rem";
            this.$refs.onc2.style.top = 0;
        }
    }
}
</script>
<style scoped>
    .c1 {
        position: relative;
    }
    .c2{
        position: relative;
        margin-top: 5rem; 
    }
    input,
    span {
        position: absolute;
    }
    span {
        left: 10px;
    }
</style>