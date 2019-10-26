<template>
    <div>
        <div class="grzx">
            <a href="#" @click.prevent="i=true" class="logina">注册</a>
            <a href="#" @click.prevent="i=false" class="rega">登录</a>
        </div>
        <div v-show="i" class="login"><login></login></div>
        <div v-show="!i" class="reg"><reg></reg></div>
    </div>
</template>
<script>
import Reg from "./grzxzj/Reg" 
import Login from "./grzxzj/Login" 
export default {
    components:{
        "reg":Reg,
        "login":Login
    },
    data(){
        return{
            i:true
        }
    }
}
</script>
<style scoped>
    .grzx{
        margin: 3rem 0 0 0;
        text-align: center;
    }
    .grzx a{
        text-decoration: none;
        color:orangered; 
        font-size: 1.2rem;
        border-radius: 0.8rem;
        margin: 0 2rem;
        padding: 0.8rem;
        background: linear-gradient(to right,#FD5B13,#FF942B) !important;
    }
    .grzx a:hover{
        color: #fff;
    }
    .logina{
        z-index: 999;
        margin-top:40rem;
    }
    .rega{
        z-index: 999;
        margin-top:40rem; 
    }
    .reg{
        margin:1rem 0 0 0;
    }
    .login{
        margin:1rem 0 0 0;
    }
</style>