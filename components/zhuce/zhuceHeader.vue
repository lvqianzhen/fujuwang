<template>
    <div class="herder clearfix">
        <div class="wrap">
            <h1 class="img-box">
                <nuxt-link to="/" class="logo"></nuxt-link>
            </h1>
            <nuxt-link to="/" class="header-right">
                返回福居网首页
                <img src="../../images/zhuce/u44.png">
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "zhuceHeader"
    }
</script>

<style scoped>
    *{
        padding: 0;
        margin: 0;
    }
    .herder{
        height: 80px;
        background: #fff;
    }
    .wrap{
        width: 1100px;
        height: 80px;
        margin: 0 auto;
        text-align: center;
        overflow: hidden;
    }
    .img-box{
        float: left;
        margin-top: 10px;
        width: 120px;
        height: 60px;
        background: url("../../images/zhuce/logo_u39.png") center no-repeat;
        background-size: 120px auto;
    }
    .logo{
        display: block;
        width: 100%;
        height: 100%;
    }
    .header-right{
        width: 130px;
        height: 80px;
        float: right;
        line-height: 80px;
        font-size: 14px;
        color: #666;
        text-decoration: none;
    }
    .header-right img{
        float: right;
        width: 20px;
        height: 20px;
        vertical-align: middle;
        padding: 30px 0;
    }
</style>