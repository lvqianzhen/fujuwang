<template>
    <div class="login-box">
        <div class="content">
            <div class="denglubox">
                <span>找回密码</span>
                <nuxt-link to="/login" class="bb">返回登录</nuxt-link>
            </div>
            <form class="formbox">
                <div class="phone">
                    <img src="../../images/zhuce/u18.png" alt="">
                    <input class="kuang1" type="tel" placeholder="请输入手机号">
                </div>
                <div class="duanxinyanzheng">
                    <img src="../../images/zhuce/u6.png" alt="">
                    <input class="kuang2" type="tel" placeholder="请输入短信验证码">
                    <button class="anniu1">获取验证码</button>
                </div>
                <button class="anniu2">下一步</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "forgetMiddle"
    }
</script>

<style scoped>
    .login-box{
        width: 1100px;
        height: 500px;
        background: #f2f2f2;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .content{
        width: 600px;
        height: 400px;
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
        margin: 0 auto 30px ;
    }
    .duanxinyanzheng img{
        width: 20px;
        height: 25px;
        position: absolute;
        left: 5px;
        top: 93px;

    }
    .kuang2{
        width: 280px;
        height: 40px;
        outline: none;
        border: 1px solid #ccc;
        margin: 15px auto;
    }
    .anniu1{
        width: 100px;
        height: 40px;
        float: right;
        background: #fff;
        border: 1px solid #ccc;
        color: #666;
        margin: 15px auto;
    }
    .anniu2{
        width: 400px;
        height: 44px;
        background: #db4049;
        border: 1px solid #ccc;
        color: #fff;
        font-size: 16px;
        margin: 40px auto;
    }
</style>