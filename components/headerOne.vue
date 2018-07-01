<template>
    <div class="header-box">
        <div class="wrap clearfix">
            <div class="right clearfix">
                <span class="nav-item active"><a href="/" target="_self" >首页</a></span>
                <span class="nav-item"><a href="" target="_blank">二手房</a></span>
                <span class="nav-item"><a href="" target="_blank">新房</a></span>
                <span class="nav-item"><a href="" target="_blank">租房</a></span>
                <span class="nav-item"><a href="" target="_blank">学区房</a></span>
                <span class="nav-item"><a href="" target="_blank">小区</a></span>
                <span class="nav-item"><a href="" target="_blank">经纪人</a></span>
                <span class="nav-item"><a href="" target="_blank">百科</a></span>
                <span class="nav-item spinner">
                    <a class="toggle" target="_blank">在线委托</a>
                    <div class="spinner-content">
                        <div>
                            <a href="" target="_blank" class="item1">我是业主</a>
                        </div>
                         <div>
                            <a href="" target="_blank" class="item1">帮我找房</a>
                        </div>
                    </div>
                </span>
                <span class="nav-item"><a href="" target="_blank">工具</a></span>
                <span class="nav-item"><a href="" target="_blank">专题</a></span>
            </div>
            <div class="link-top">
                <nuxt-link to="/login" class="wenzi">请登录</nuxt-link>
                <span>|</span>
                <nuxt-link to="/zhuce" class="wenzi">立即注册</nuxt-link>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "headerOne"
    }
</script>

<style scoped>
    .header-box{
        height: 60px;
        background: #f2f2f2;
        border: none;
    }
    .wrap{
        width: 1100px;
        height: 60px;
        align-items: center;
        margin: 0 auto;
        position: relative;
    }
    .wrap .right{
        padding-top: 20px;
        float: left;
    }
    .wrap .right .nav-item{
        float: left;
        margin-left: 25px;
        padding: 0 5px;
        font-size: 16px;
        color: #000;
        cursor: pointer;
    }
    .wrap .right .nav-item:first-child{
        margin-left: 0;
        padding-left: 0;
    }
    .spinner {
        position: relative;
    }
    .spinner .spinner-content{
        position: absolute;
        left: 5px;
        top: 40px;
        background:#fff;
        display: none;
        z-index: 9999;
        /*color: #000;*/
    }
    .spinner:hover .spinner-content{
        display: block;
    }
    .spinner .spinner-content div{
        cursor: pointer;
        text-align: center;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    /*鼠标指向哪个哪个就变色和显示下滑横线*/
    .nav-item a:hover{
        color: #c30d23;
        border-bottom: 2px solid #c30d23;
    }
    /*去除在线委托中的下滑横线*/
    .spinner .spinner-content div a:hover{
        border: none;
    }
    /*设置下划横线与上面文字的padding*/
    .right>.nav-item>a {
        display: block;
        padding: 0px 0 20px;
    }
    .link-top{
        height: 60px;
        text-align: right;
        line-height: 60px;
        /*margin: 0 auto;*/
    }
    .wenzi{
        font-size: 12px;
        color: #000;
        text-decoration: none;
    }
    .link-top span{
        padding-left: 10px;
        padding-right: 10px;
    }
</style>