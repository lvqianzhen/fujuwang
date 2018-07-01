<template>
    <div class="login-box">
        <div class="content">
            <div class="denglubox">
                <span>登录</span>
                <nuxt-link to="/zhuce" class="bb">没有账号,立即注册</nuxt-link>
            </div>
            <form class="formbox">
                <div class="phone">
                    <img src="../../images/zhuce/u18.png" alt="">
                    <input class="kuang1" type="tel" placeholder="请输入手机号">
                </div>
                <div class="ipwd">
                    <img src="../../images/zhuce/u24.png" alt="">
                    <input class="kuang2" type="text" placeholder="请输入6-18位密码">
                </div>
                <button class="anniu">登录</button>
                <div class="forget-pwd">
                    <a href="/findPwd">忘记密码？</a>
                </div>
                <div class="loginstyle">
                    <a href="/" class="tupian-box">
                        <img src="../../images/login/u336.png" alt="">
                        <div class="public">QQ登录</div>
                    </a>
                    <a href="/" class="tupian-box">
                        <img src="../../images/login/u326.png" alt="">
                        <div class="public">微信登录</div>
                    </a>
                    <a href="/" class="tupian-box">
                        <img src="../../images/login/u331.png" alt="">
                        <div class="public">新浪微博登录</div>
                    </a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "loginmiddle"
    }
</script>

<style scoped>
    .login-box{
        height: 600px;
        background: #f2f2f2;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .content{
        width: 600px;
        height: 500px;
        background: #fff;
        margin: 0 auto;
    }
    .denglubox{
        width: 400px;
        height: 100px;
        margin: 0 auto;
        line-height: 100px;
    }
    .denglubox span{
        float: left;
        font-size: 26px;
        color: #7f828b;
    }
    .denglubox .bb{
        float: right;
        font-size: 14px;
        color: #FFAC66;
        text-decoration: none;
    }
    .formbox{
        width: 400px;
        height: 400px;
        margin: 0 auto;
        position: relative;
    }
    .formbox input{
        border: 1px solid #ccc;
        text-indent: 26px;
        font-size: 12px;
    }
    .phone img{
        width: 15px;
        height: 30px;
        position: absolute;
        left: 8px;
        top: 6px;
    }
    .kuang1{
        width: 400px;
        height: 40px;
        outline: none;
        border: 1px solid #ccc;
        margin: 0 auto 15px ;
    }
    .ipwd img{
        width: 17px;
        height: 26px;
        position: absolute;
        left: 4px;
        top: 78px;
        padding-left: 2px;
    }
    .kuang2{
        width: 400px;
        height: 40px;
        outline: none;
        border: 1px solid #ccc;
        margin: 15px auto;
    }
    .anniu{
        width: 400px;
        height: 44px;
        background: #db4049;
        border: 1px solid #ccc;
        color: #fff;
        font-size: 16px;
        margin: 15px auto;
    }
    .forget-pwd{
        width: 300px;
        height: 40px;
        text-align: center;
        border-bottom: 1px solid #ccc;
        line-height: 40px;
        margin: 10px auto;
    }
    .forget-pwd a{
        font-size: 14px;
        text-decoration: none;
        color: #666;
    }
    .loginstyle{
        width: 300px;
        height: 80px;
        display: flex;
        margin: 0 auto;
        align-items: center;
    }
    .tupian-box{
        width: 100px;
        height: 80px;
        align-items: center;
        text-align: center;
    }
    .loginstyle img{
        width: 40px;
        height: 40px;
        margin: 0 auto;
        vertical-align: center;
    }
    .loginstyle .tupian-box .public{
        font-size: 14px;
        color: #666;
        text-decoration: none;
        padding-top: 10px;
    }
</style>