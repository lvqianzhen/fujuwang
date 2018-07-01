<template>
    <div class="zhuce">
        <div class="yi">
            <span>创建账号</span>
            <nuxt-link to="/login" class="aa">已有账号,立即登录</nuxt-link>
        </div>
        <form class="form-box">
            <div class="phone">
                <img src="../../images/zhuce/u18.png" alt="">
                <input class="kuang1" type="tel" placeholder="请输入手机号">
            </div>
            <div class="duanxinyanzheng">
                <img src="../../images/zhuce/u24.png" alt="">
                <input class="kuang2" type="tel"  placeholder="请输入短信验证码">
                <button class="anniu1">获取验证码</button>
            </div>
            <div class="shurumima">
                <img src="../../images/zhuce/u24.png" alt="">
                <input class="kuang3" type="text" placeholder="请输入6-18位密码">
            </div>
            <div class="shurunicheng">
                <img src="../../images/zhuce/u18.png" alt="">
                <input class="kuang4" type="text"  placeholder="请输入昵称">
            </div>
            <button class="anniu2">立即注册</button>
            <p>点击立即注册，则表示您阅读并同意遵守<a href="/zhucexieyi">福居网平台服务协议</a></p>
        </form>
    </div>
</template>

<script>
    import axios from '~/plugins/axios'
    import api from '~/mainApi/allApi'
    export default {
        name: "zhuceContent",
        data(){
            return{
                // register:{
                //     phone:"",
                //     verify:"",
                //     password:"",
                //     userName:""
                // }
            }
        },
        // async asyncData(){
        //     let regData = await axios.get(api.paramToUrl(api.register,{}))
        // }
        // mounted(){
        //     axios.get(api.paramToUrl(api.register,{mobile:13021211892})).then(res=>{
        //         console.log(res);
        //     })
        // }
    }
</script>

<style scoped>
    *{
        padding: 0;
        margin: 0;
    }
    .zhuce{
        width: 600px;
        height: 500px;
        background: #fff;
        margin: 0 auto;
    }
    .yi{
        width: 400px;
        height: 100px;
        margin: 0 auto;
        line-height: 100px;
    }
    .yi span{
        float: left;
        font-size: 26px;
        color: #7f828b;
    }
    .yi .aa{
        float: right;
        font-size: 14px;
        color: #FFAC66;
        text-decoration: none;
    }
    .form-box{
        width: 400px;
        height: 400px;
        margin: 0 auto;
        position: relative;
    }
    .form-box input{
        border: 1px solid #ccc;
        text-indent: 26px;
        font-size: 12px;
    }
    .phone img{
        width: 15px;
        height: 29px;
        position: absolute;
        left: 7px;
        top: 6px;
    }
    .kuang1{
        width: 400px;
        height: 40px;
        outline: none;
        border: 1px solid #ccc;
        margin: 0 auto 15px ;
    }
    .duanxinyanzheng img{
        width: 18px;
        height: 28px;
        position: absolute;
        left: 6px;
        top: 78px;

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
    .shurumima img{
        width: 18px;
        height: 28px;
        position: absolute;
        left: 4px;
        top: 150px;
        padding-left: 2px;
    }
    .kuang3{
        width: 400px;
        height: 40px;
        outline: none;
        border: 1px solid #ccc;
        margin: 15px auto;
    }
    .shurunicheng img{
        width: 16px;
        height: 31px;
        position: absolute;
        left: 5px;
        top: 222px;
        padding-left: 2px;
    }
    .kuang4{
        width: 400px;
        height: 40px;
        outline: none;
        border: 1px solid #ccc;
        margin: 15px auto;
    }
    .anniu2{
        width: 400px;
        height: 44px;
        background: #db4049;
        border: 1px solid #ccc;
        color: #fff;
        font-size: 16px;
        margin: 15px auto;
    }
    p{
        font-size: 12px;
        color: #666;
        text-align: center;
    }
    p a{
        font-size: 14px;
        font-weight: bold;
        text-decoration: none;
        color: #000;
    }
</style>
