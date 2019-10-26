<template>
    <div class="body">
        <div class="top-fixed">
            <div class="header">
                <div class="left">
                    <a href="/" class="icon back">
                        <img :src="left" alt="">
                    </a>
                </div>
                <div class="center">免费登录注册</div>
                <div class="right">
                    <a href="javascript:;">
                        <img :src="right" alt="">
                    </a>
                </div>
            </div>
        </div>
        <div class="form">
            <div class="form-item">
                <div class="text-item">
                    <input type="text" v-model="uname" placeholder="请输入注册邮箱" id="uname" class="text tel">
                    
                </div>
            </div>
            <div class="form-item">
                <div class="text-item">
                    <input type="text" v-model="uname" placeholder="请输入注册会员名" id="uname" class="text tel">
                    
                </div>
            </div>
            <div class="form-item">
                <div class="text-item">
                    <input type="password" placeholder="请输入密码" v-model="upwd" id="password" class="text tel">
                    
                </div>
            </div>
            <div class="form-item">
                <div class="text-item">
                    <input type="password" placeholder="请确认密码" v-model="upwd" id="password" class="text tel">
                    
                </div>
            </div>
            <div class="form-button bac1" @click="login">
                注册
            </div>
            <div class="other-login">
                <a href="javascript:;" class="link">没有账号？</a>
                <a href="javascript:;" class="link">忘记密码？</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        left:{default:""},
        right:{default:""},
    },
     data(){
        return{
            uname:"",
            upwd:""
        }
    },
    methods:{
        login(){
            //功能：完成用户登录操作
            //1.获取用户输入用户名
            var u=this.uname;
            //2.获取用户输入面
            var p=this.upwd;
            console.log("1:"+u+"_"+p)
            //3.创建正则表达式 3-12 字母数字
            var reg =/^[a-z0-9]\w{2,12}$/i;
            var pw=/^\d{3,6}$/;
            //4.验证用户名
            if(reg.test(u)==false){
                console.log("2:");
                //5.验证不成功 提示消息
                this.$messagebox("用户名格式不正确");
                return;
            }
            //6.验证密码
            if(pw.test(p)==false){
            //7.验证不成功提示消息    
                this.$messagebox("","密码格式不正确");
                return;
            }
            //8发送ajax请求
            var url="Login";
            var obj={uname:u,upwd:p};
            this.axios.get(
                url,
                {params:obj}
            ).then(res=>{
                console.log(res.data.code);
                if(res.data.code<0){
                    this.$messagebox("消息","用户名或密码有误");
                }else{
                    //跳转F组件
                    this.$router.push("/First_stage/");
                }
            });
            //9.获取服务器返回结果

            //10.登录失败 提示消息
            //11.登录成功跳转  /F
        }
    }
}
</script>
<style scoped>
    .body {
        color: #323232;
        font-family: PingFangSC-Regular,PingFang SC,Helvetica,黑体;
        padding: 0;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        margin: auto !important;
        font-size: 1rem;
        background: #F8F8F8;
    }
    .top-fixed {
        position: fixed;
        max-width: 750px;
        margin: auto;
        z-index: 100;
    }
    .header {
        height: 2.5rem;
        position: relative;
        background: #FFFFFF;
    }
    .header .left {
        position: absolute;
        top: 0;
        left: 1.5rem;
        bottom: 0;
    }
    .header .back {
        padding: 0 0 0 .06rem;
    }
    .header .icon {
        display: inline-block;
        width: .36rem;
        height: .5rem;
        position: relative;
        cursor: pointer;
    }
    .left img{
        width: 1.16rem;
        height: 1.16rem;
        }
    .right img{
        height: 1.5rem;
    }
    .header .center {
        display: table;
        margin: auto;
        font-size: 1.25rem;
        line-height: 1.25rem;
        color: orange;
        text-align: center;
    }
    .header .right {
        position: absolute;
        top: 0;
        right: 1.5rem;
        background-size: 100%; 
        bottom: 0;
        padding: 0 .08rem 0 0;
    }
    img {
        border: none;
        vertical-align: top;
    }
    .form {
        overflow: hidden;
        margin: 3rem 0 0 0;
        background: #FFFFFF;
    }
    .form .form-item {
        overflow: hidden;
        height: 1rem;
        line-height: 1rem;
        padding: 1rem 4rem;
        position: relative;
    }
    .form .form-item .text-item {
        height: .45rem;
        line-height: .45rem;
        position: relative;
    }
    .form .form-item .text-item .text {
        position: relative;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1rem;
        color: #333333;
    }
    input {
        font-family: PingFangSC-Regular,PingFang SC,Helvetica,黑体;
        font-style: normal;
        border: none;
        outline: medium;
    }
    .form-button {
        width: 10rem;
        height: 2.5rem;
        line-height: 2.5rem;
        text-align: center;
        color: #FFFFFF;
        background: #FE5910;
        border-radius: 2rem;
        font-size: 1.25rem;
        margin: auto;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .other-login {
        display: table;
        margin: auto;
        text-align: center;
    }
    .other-login .link {
        display: inline-block;
        font-size: 0.9rem;
        color: #FE5910;
        margin: 0 0 .24rem 0;
    }
    .bac1 {
        background: linear-gradient(to right,#FD5B13,#FF942B) !important;
    }
</style>