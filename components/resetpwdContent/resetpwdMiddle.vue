<template>
    <div class="login-box">
        <div class="content">
            <div class="denglubox">
                <span>重置密码</span>
            </div>
            <form class="formbox">
                <div class="phone">
                    <img src="../../images/zhuce/u24.png" alt="">
                    <input class="kuang1" type="text" placeholder="请输入新密码">
                </div>
                <div class="duanxinyanzheng">
                    <img src="../../images/zhuce/u24.png" alt="">
                    <input class="kuang2" type="text" placeholder="请再次输入新密码">
                </div>
                <button class="anniu">提交</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "resetpwdMiddle"
    }
</script>

<style scoped>
    .login-box{
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
        width: 17px;
        height: 24px;
        position: absolute;
        left: 6px;
        top: 7px;
    }
    .kuang1{
        width: 400px;
        height: 40px;
        outline: none;
        border: 1px solid #ccc;
        margin: 0 auto 30px ;
    }
    .duanxinyanzheng img{
        width: 17px;
        height: 24px;
        position: absolute;
        left: 6px;
        top: 94px;

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
        margin: 40px auto;
    }
</style>