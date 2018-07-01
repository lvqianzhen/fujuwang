<template>
    <div class="header-box">
        <div class="link-top">
            <nuxt-link to="/login" class="wenzi">请登录</nuxt-link>
            <span>|</span>
            <nuxt-link to="/zhuce" class="wenzi">立即注册</nuxt-link>
        </div>
        <div class="wrap clearfix">
            <a href="/" target="_self" class="logo fll"></a>
            <div class="xiala" @click="selectbox = true">
                <span>呼和浩特<i class="iconfont icon-jiantouxia"></i></span>
            </div>
            <div class="right clearfix">
                <span class="nav-item active"><a href="/" target="_self" >首页</a></span>
                <span class="nav-item"><a href="erShoufang" target="_blank">二手房</a></span>
                <span class="nav-item"><a href="xinFang" target="_blank">新房</a></span>
                <span class="nav-item"><a href="" target="_blank">租房</a></span>
                <span class="nav-item"><a href="" target="_blank">学区房</a></span>
                <span class="nav-item"><a href="" target="_blank">小区</a></span>
                <span class="nav-item"><a href="" target="_blank">经纪人</a></span>
                <span class="nav-item"><a href="baiKe" target="_blank">百科</a></span>
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
        </div>
        <div class="choose-box" v-show="selectbox">
            <div class="choose-box1 clearfix">
                <div>
                    <i class="iconfont icon-cha" @click="selectbox = false"></i>
                </div>
                <div class="title-box">
                    <div class="choose-box2">选择区县</div>
                    <a href="" class="choose-box3">呼和浩特</a>
                    <p>H<a href="" class="item4">回民区</a></p>
                    <p>J<a href="" class="item4">&nbsp金桥开发区</a></p>
                    <p>R<a href="" class="item4">如意开发区</a></p>
                    <p>S<a href="" class="item4">赛罕区</a></p>
                    <p>X<a href="" class="item4">新城区</a></p>
                    <p>Y<a href="" class="item4">玉泉区</a></p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Header",
        data(){
            return{
                selectbox:false
            }
        }
    }
</script>

<style scoped>
    .header-box{
        height: 100px;
        margin: 0 auto;
    }
    .link-top{
        width: 1100px;
        height: 30px;
        text-align: right;
        line-height: 30px;
        margin: 0 auto;
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
    .wrap{
        width: 1100px;
        height: 70px;
        margin: 0 auto;
        position: relative;
    }
    .logo{
        width: 128px;
        height: 40px;
        background: url("../images/shouye/logo.png") center no-repeat;
        background-size: 100% 100%;
        margin-top: 15px;
    }
    .xiala{
        width: 100px;
        height: 27px;
        border: 1px solid #999;
        border-radius: 25px;
        text-align: center;
        line-height: 27px;
        position: absolute;
        left: 150px;
        bottom: 25px;
        cursor: pointer;
    }
    .xiala i{
        padding-left: 3px;
    }
    .wrap .right{
        padding-top: 20px;
        float: right;
    }
    .wrap .right .nav-item{
        float: left;
        margin-left: 25px;
        padding: 0 5px;
        font-size: 16px;
        color: #000;
        cursor: pointer;
    }
    .spinner {
        position: relative;
    }
    .spinner .spinner-content{
        position: absolute;
        left: 5px;
        background:#fff;
        display: none;
        z-index: 9999;
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
    /*让首页下默认显示红线*/
    .right .active a {
        color: #c30d23;
        border-bottom: 2px solid #c30d23;
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
        /*display: block;*/
        display: inline-block;
        padding: 0px 0 29px;
    }
    .choose-box{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,.3);
        align-items: center;
        display: flex;
        z-index: 9999;
    }
    .choose-box1{
        margin: 0 auto;
        width: 720px;
        height: 400px;
        background: #fff;
        position: relative;
        display: flex;
        align-items: center;
    }
    .choose-box .choose-box1 i{
        position: absolute;
        top: 10px;
        right: 10px;
    }
    .title-box{
        margin: 0 auto;
        width: 640px;
        height: 340px;
    }
    .choose-box2{
        width: 640px;
        height: 40px;
        text-align: left;
        line-height: 40px;
        font-size: 22px;
        color: #333;
        font-weight: bolder;
        border-bottom: 1px solid skyblue;
        padding-bottom: 10px;
    }
    .choose-box3{
        width: 640px;
        height: 60px;
        text-align: left;
        line-height: 60px;
        font-size: 18px;
        color: #333;
        cursor: pointer;
    }
    .title-box a:hover{
        color: #c30d23;
    }
    .title-box p{
        color: #999;
        font-size: 16px;
        margin-top: 10px;
    }
    .title-box p .item4{
        font-size: 16px;
        padding-left: 15px;
        color: #333;
        margin-top: 10px;
    }
    .title-box p a:hover{
        color: #c30d23;
    }
</style>