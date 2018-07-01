<template>
    <div class="login-box">
        <div class="content">
            <div class="denglubox">
                <span>绑定账号</span>
                <nuxt-link to="/zhuce" class="bb">没有账号,立即注册</nuxt-link>
            </div>
            <div class="reminder">
                您已登录成功，由于您是第一次使用QQ/微信/微博登录，请先绑定账号
            </div>
            <form class="formbox">
                <div class="phone">
                    <img src="../../images/zhuce/u18.png" alt="">
                    <input class="kuang1" type="tel" placeholder="请输入手机号">
                </div>
                <div class="duanxinyanzheng">
                    <img src="../../images/zhuce/u24.png" alt="">
                    <input class="kuang2" type="tel" placeholder="请输入短信验证码">
                </div>
                <button class="anniu2">立即绑定</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bindingMiddle"
    }
</script>

<style scoped>
    .login-box{
        /*width: 1100px;*/
        height: 550px;
        background: #f2f2f2;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .content{
        width: 600px;
        height: 450px;
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
    .reminder{
        width: 400px;
        height: 80px;
        font-size: 16px;
        color: #666;
        margin: 0 auto;
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
        width: 18px;
        height: 27px;
        position: absolute;
        left: 6px;
        top: 92px;

    }
    .kuang2{
        width: 400px;
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