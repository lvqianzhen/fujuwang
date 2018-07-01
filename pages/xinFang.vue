<template>
    <div class="header-box">
        <headerOne></headerOne>
        <!--wrap开始-->
        <div class="wrap clearfix">
            <a href="/" target="_self" class="logo fll"></a>
            <div class="xiala fll clearfix" @click="selectbox = true">
                <span>呼和浩特<i class="iconfont icon-jiantouxia"></i></span>
            </div>
            <div class="center clearfix">
                <span class="nav-item active fll clearfix"><a href="/" target="_self" >首页</a></span>
                <span class="nav-item fll clearfix"><a href="" target="_blank">楼盘</a></span>
                <span class="right clearfix">
                    <input type="text" class="fll clearfix">
                    <span class="button1 fll clearfix">搜索</span>
                    <span class="button2 fll clearfix">地图找房</span>
                </span>
            </div>

        </div>
        <div class="choose-box" v-show="selectbox">
            <div class="choose-box1 clearfix">
                <div>
                    <i class="iconfont icon-chahao" @click="selectbox = false"></i>
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
        <!--wrap结束-->
        <!--轮播图开始-->
        <div class="lunbo">
            <div v-swiper:mySwiper="swiperOption" v-binner style="overflow: hidden">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="banner in bannerData">
                        <img class="myimg" :src="'http://www.fooju.cn/'+banner.picurl">
                    </div>
                </div>
            </div>
        </div>
        <!--轮播结束-->
        <!--listRight开始-->
        <listRight></listRight>
        <!--listRight结束-->
        <!--图片上的select选项开始-->
        <div class="select-box">
            <div class="box1">
                <el-select v-model="value" placeholder="区域">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
        <!--图片上的select选项结束-->
    </div>
</template>

<script>
    import axios from '~/plugins/axios'
    import api from '~/mainApi/allApi'
    import headerOne from '~/components/headerOne'
    import listRight from '~/components/listRight'
    export default {
        name: "xinFang",
        head(){
            return{
                title:'新房'
            }
        },
        data(){
            return{
                swiperOption:{
                    autoplay:true
                },
                selectbox:false,
                // selectOne开始
                options: [{
                    value: '选项1',
                    label: '不限'
                }, {
                    value: '选项2',
                    label: '金桥开发区'
                }, {
                    value: '选项3',
                    label: '如意开发区'
                }, {
                    value: '选项4',
                    label: '玉泉区'
                }, {
                    value: '选项5',
                    label: '回民区'
                },{
                    value: '选项6',
                    label: '赛罕区'
                },{
                    value: '选项7',
                    label: '新城区'
                }],
                value: ''
                // selectOne结束
            }
        },
        components:{
            headerOne,
            listRight
        },
        directives:{
            binner(el,binding,vnode){
                function setBnanerHeight() {
                    let bannerHeight = (document.documentElement.clientHeight || document.body.clientHeight)-100 ;
                    let bannerWidth = document.documentElement.clientWidth || document.body.clientWidth ;
                    el.style.width = bannerWidth + "px"
                    el.style.height = bannerHeight + "px"
                    let bannerRate = bannerWidth/bannerHeight
                    let imgArr = el.querySelectorAll('img');
                    imgArr.forEach(item=>{
                        let imgHeight = item.offsetHeight
                        let imgWidth = item.offsetWidth
                        let imgRate = imgWidth/imgHeight
                        if (bannerRate>imgRate) {
                            item.style.width = bannerWidth + "px";
                            item.style.height = "auto";
                            item.style.marginTop = -(imgHeight-bannerHeight)/2 + "px";
                        }
                        else{
                            item.style.height = bannerHeight + "px";
                            item.style.width = "auto";
                            item.style.marginLeft = -(imgWidth-bannerWidth)/2 + "px";
                        }
                    })
                }
                setBnanerHeight();
                window.onresize = setBnanerHeight
            }
        },
        async asyncData(){
            let bannerData = await axios.get(api.paramToUrl(api.adLists,{type:0,position:1}))
            // console.log(bannerData)
            return{
                bannerData:bannerData.data.data
            }
        },
        mounted(){
            console.log(this.bannerData)
        }
    }
</script>

<style scoped>
    .header-box{
        height: 100px;
        margin: 0 auto;
    }
    /*wrap开始*/
    .wrap{
        width: 1100px;
        height: 80px;
        margin: 0 auto;
    }
    .logo{
        width: 128px;
        height: 40px;
        background: url("../images/shouye/logo.png") center no-repeat;
        background-size: 100% 100%;
        margin-top: 18px;
    }
    .xiala{
        width: 105px;
        height: 27px;
        border: 1px solid #999;
        border-radius: 25px;
        text-align: center;
        line-height: 27px;
        font-size: 16px;
        margin-top: 23px;
        margin-left: 30px;
        margin-right: 40px;
        cursor: pointer;
    }
    .xiala i{
        padding-left: 3px;
    }
    .wrap .center{
        padding-top: 20px;
    }
    .wrap .center .nav-item{
        /*float: left;*/
        margin-left: 25px;
        padding: 0 5px;
        font-size: 16px;
        color: #000;
        cursor: pointer;
    }
    .right input{
        width: 300px;
        height: 35px;
        margin-left: 80px;
    }
    .right .button1{
        width: 115px;
        height: 39px;
        background: #c30d23;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
        text-align: center;
        line-height: 39px;
    }
    .right .button2{
        width: 140px;
        height: 39px;
        background: #5f1985;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
        text-align: center;
        line-height: 39px;
        margin-left: 20px;
    }
    /*让首页默认显示红色*/
    .center .active a {
        color: #c30d23;
    }
    /*设置下划横线与上面文字的padding*/
    .center>.nav-item>a {
        display: inline-block;
        padding: 10px 0 10px;
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
    /*wrap结束*/
    /*轮播图开始*/
    .myimg{
        display: block;
        width: 100%;
    }
    /*轮播图结束*/

    /*selectOne开始*/
    .select-box{
        width: 1100px;
        margin: 0 auto;
    }
    .box1{
        position: absolute;
        width: 300px;
        height: 100%;
        text-align: center;
    }
    /*selectOne结束*/
</style>
