<template>
    <div>
        <!--头部开始-->
        <headerOne></headerOne>
        <div class="header-box">
            <div class="wrap clearfix">
                <a href="/" target="_self" class="logo"></a>
                <div class="right clearfix">
                    <span class="nav-item active"><a href="/" target="_self" >百科</a></span>
                    <span class="nav-item"><a href="" target="_blank">专题</a></span>
                </div>
            </div>
        </div>
        <!--头部结束-->
        <!--wrap开始-->
        <div class="top">
            <span>
                <a href="">福居网</a>>
                <a href="">百科</a>
            </span>
            <div class="search clearfix">
                <input type="text" class="fll" placeholder="搜索">
                <span class="fll">搜索</span>
            </div>
        </div>
        <!--wrap结束-->
        <div class="bottom-box">
            <div class="bottom-left fll clearfix">
                <h2>百科分类</h2>
                <h3>二手房</h3>
                <div class="left clearfix">
                    <div class="left-item">
                        <a href="javascript:;" :class="{active:seletedIndex == 0}" @click="seletedIndex = 0">买房风险</a>
                    </div>
                    <div class="left-item">
                        <a href="javascript:;" :class="{active:seletedIndex == 1}" @click="seletedIndex = 1">入住/交接</a>
                    </div>
                    <div class="left-item">
                        <a href="javascript:;" :class="{active:seletedIndex == 2}" @click="seletedIndex = 2">缴税/过户</a>
                    </div>
                    <div class="left-item">
                        <a href="javascript:;" :class="{active:seletedIndex == 3}" @click="seletedIndex = 3">全款/贷款</a>
                    </div>
                    <div class="left-item">
                        <a href="javascript:;" :class="{active:seletedIndex == 4}" @click="seletedIndex = 4">签约/定房</a>
                    </div>
                    <div class="left-item">
                        <a href="javascript:;" :class="{active:seletedIndex == 5}" @click="seletedIndex = 5">看房/选房</a>
                    </div>
                    <div class="left-item">
                        <a href="javascript:;" :class="{active:seletedIndex == 6}" @click="seletedIndex = 6">准备买房</a>
                    </div>
                </div>
                <h3>新房</h3>
                <div class="left clearfix">
                    <div class="left-item">
                        <a href="javascript:;" :class="{active:seletedIndex == 7}" @click="seletedIndex = 7">认购新房</a>
                    </div>
                    <div class="left-item">
                        <a href="javascript:;" :class="{active:seletedIndex == 8}" @click="seletedIndex = 8">看房/选房</a>
                    </div>
                    <div class="left-item">
                        <a href="javascript:;" :class="{active:seletedIndex == 9}" @click="seletedIndex = 9">活动</a>
                    </div>
                    <div class="left-item">
                        <a href="javascript:;" :class="{active:seletedIndex == 10}" @click="seletedIndex = 10">签约/定房</a>
                    </div>
                    <div class="left-item">
                        <a href="javascript:;" :class="{active:seletedIndex == 11}" @click="seletedIndex = 11">收房/验房</a>
                    </div>
                    <div class="left-item">
                        <a href="javascript:;" :class="{active:seletedIndex == 12}" @click="seletedIndex = 12">装修/入住</a>
                    </div>
                    <div class="left-item">
                        <a href="javascript:;" :class="{active:seletedIndex == 13}" @click="seletedIndex = 13">看房/选房</a>
                    </div>
                    <div class="left-item">
                        <a href="javascript:;" :class="{active:seletedIndex == 14}" @click="seletedIndex = 14">房产活动</a>
                    </div>
                    <div class="left-item">
                        <a href="javascript:;" :class="{active:seletedIndex == 15}" @click="seletedIndex = 15">网签数据</a>
                    </div>
                </div>
                <h3>购房宝典</h3>
                <div class="left clearfix">
                    <div class="left-item">
                        <a href="javascript:;" :class="{active:seletedIndex == 16}" @click="seletedIndex = 16">房产政策</a>
                    </div>
                    <div class="left-item">
                        <a href="javascript:;" :class="{active:seletedIndex == 17}" @click="seletedIndex = 17">购房建议</a>
                    </div>
                    <div class="left-item">
                        <a href="javascript:;" :class="{active:seletedIndex == 18}" @click="seletedIndex = 18">法律纠纷</a>
                    </div>
                </div>
                <h3>租房</h3>
                <div class="left clearfix">
                    <div class="left-item">
                        <a href="javascript:;" :class="{active:seletedIndex == 19}" @click="seletedIndex = 19">注意事项</a>
                    </div>
                    <div class="left-item">
                        <a href="javascript:;" :class="{active:seletedIndex == 20}" @click="seletedIndex = 20">租房风险</a>
                    </div>
                </div>
                <h3>换房</h3>
                <div class="left clearfix">
                    <div class="left-item">
                        <a href="javascript:;" :class="{active:seletedIndex == 21}" @click="seletedIndex = 21">准备换房</a>
                    </div>
                    <div class="left-item">
                        <a href="javascript:;" :class="{active:seletedIndex == 22}" @click="seletedIndex = 22">换房风险</a>
                    </div>
                    <div class="left-item">
                        <a href="javascript:;" :class="{active:seletedIndex == 23}" @click="seletedIndex = 23">缴税/过户</a>
                    </div>
                </div>
            </div>
            <div class="bottom-right flr clearfix">
                <h2 v-text="wenzishi"></h2>
                <div class="right" v-show="seletedIndex==0?true:false">
                    <a href="" class="clearfix">
                        <div class="myimg-box fll clearfix">
                            <img src="http://www.fooju.cn/fjw/uploads/ency/20180625/5b30ba95a241d.jpg" alt="">
                        </div>
                        <div class="desc fll clearfix">
                            <h3>买房遇到这种阳台的户型，再便宜聪明人都不会买，有钱人一看就懂</h3>
                            <p class="desc1">买房遇到这种阳台的户型，再便宜聪明人都不会买，有钱人一看就懂</p>
                            <p class="desc2">2018-06-25&nbsp17:50:58</p>
                        </div>
                    </a>
                    <a href="" class="clearfix">
                        <div class="myimg-box fll clearfix">
                            <img src="http://www.fooju.cn/fjw/uploads/ency/20180625/5b309454c1379.JPEG" alt="">
                        </div>
                        <div class="desc fll clearfix">
                            <h3>买房不能贷满30年?这些因素会影响二手房贷款年限</h3>
                            <p class="desc1">​一般来说，银行会审查二手房的房龄，房龄越大，评估价格会相对低一些。</p>
                            <p class="desc2">2018-06-25&nbsp15:06:58</p>
                        </div>
                    </a>
                    <a href="" class="clearfix">
                        <div class="myimg-box fll clearfix">
                            <img src="http://www.fooju.cn/fjw/uploads/ency/20180621/5b2b04669a87b.jpg" alt="">
                        </div>
                        <div class="desc fll clearfix">
                            <h3>二手房交易流程详解</h3>
                            <p class="desc1">二手房交易可分为签约、付款、交房、过户四大步骤。</p>
                            <p class="desc2">2018-06-21&nbsp09:55:00</p>
                        </div>
                    </a>
                    <a href="" class="clearfix">
                        <div class="myimg-box fll clearfix">
                            <img src="http://www.fooju.cn/fjw/uploads/ency/20180625/5b30ba95a241d.jpg" alt="">
                        </div>
                        <div class="desc fll clearfix">
                            <h3>买房遇到这种阳台的户型，再便宜聪明人都不会买，有钱人一看就懂</h3>
                            <p class="desc1">买房遇到这种阳台的户型，再便宜聪明人都不会买，有钱人一看就懂</p>
                            <p class="desc2">2018-06-25&nbsp17:50:58</p>
                        </div>
                    </a>
                    <!--分页开始-->
                    <div class="pageTool">
                        <div class="ui-paging-container">
                            <ul class="clearfix">
                                <li class="js-page-first js-page-action ui-pager ui-pager-disabled">首页</li>
                                <li class="js-page-prev js-page-action ui-pager ui-pager-disabled">上一页</li>
                                <li data-page="1" class="pager">1</li>
                                <li data-page="2" class="pager">2</li>
                                <li data-page="3" class="pager">3</li>
                                <li data-page="4" class="pager">4</li>
                                <li class="js-page-next js-page-action ui-pager ui-pager-disabled">下一页</li>
                                <li class="js-page-last js-page-action ui-pager ui-pager-disabled">末页</li>
                            </ul>
                        </div>
                    </div>
                    <!--分页结束-->
                </div>
                <div class="right" v-show="seletedIndex==1?true:false">
                    <a href="" class="clearfix">
                        <div class="myimg-box fll clearfix">
                            <img src="http://www.fooju.cn/fjw/uploads/ency/20180521/5b026fb58019e.jpg" alt="">
                        </div>
                        <div class="desc fll clearfix">
                            <h3>买房遇到这种阳台的户型，再便宜聪明人都不会买，有钱人一看就懂</h3>
                            <p class="desc1">买房遇到这种阳台的户型，再便宜聪明人都不会买，有钱人一看就懂</p>
                            <p class="desc2">2018-06-25&nbsp17:50:58</p>
                        </div>
                    </a>
                    <a href="" class="clearfix">
                        <div class="myimg-box fll clearfix">
                            <img src="http://www.fooju.cn/fjw/uploads/ency/20180625/5b30ba95a241d.jpg" alt="">
                        </div>
                        <div class="desc fll clearfix">
                            <h3>买房遇到这种阳台的户型，再便宜聪明人都不会买，有钱人一看就懂</h3>
                            <p class="desc1">买房遇到这种阳台的户型，再便宜聪明人都不会买，有钱人一看就懂</p>
                            <p class="desc2">2018-06-25&nbsp17:50:58</p>
                        </div>
                    </a>
                    <a href="" class="clearfix">
                        <div class="myimg-box fll clearfix">
                            <img src="http://www.fooju.cn/fjw/uploads/ency/20180625/5b30ba95a241d.jpg" alt="">
                        </div>
                        <div class="desc fll clearfix">
                            <h3>买房遇到这种阳台的户型，再便宜聪明人都不会买，有钱人一看就懂</h3>
                            <p class="desc1">买房遇到这种阳台的户型，再便宜聪明人都不会买，有钱人一看就懂</p>
                            <p class="desc2">2018-06-25&nbsp17:50:58</p>
                        </div>
                    </a>
                    <a href="" class="clearfix">
                        <div class="myimg-box fll clearfix">
                            <img src="http://www.fooju.cn/fjw/uploads/ency/20180625/5b30ba95a241d.jpg" alt="">
                        </div>
                        <div class="desc fll clearfix">
                            <h3>买房遇到这种阳台的户型，再便宜聪明人都不会买，有钱人一看就懂</h3>
                            <p class="desc1">买房遇到这种阳台的户型，再便宜聪明人都不会买，有钱人一看就懂</p>
                            <p class="desc2">2018-06-25&nbsp17:50:58</p>
                        </div>
                    </a>
                    <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="1000"
                            :class="aa"
                    >
                    </el-pagination>
                    <!--<el-pagination-->
                    <!--background-->
                    <!--layout="prev, pager, next"-->
                    <!--:total="1000">-->
                    <!--</el-pagination>-->
                    <!--<div class="pageTool">-->
                    <!--<div class="fenye">-->
                    <!--<ul>-->
                    <!--<li class="js-page-first js-page-action ui-pager ui-pager-disabled">首页</li>-->
                    <!--<li class="js-page-prev js-page-action ui-pager ui-pager-disabled">上一页</li>-->
                    <!--<li data-page="1" class="pager">1</li>-->
                    <!--<li data-page="2" class="pager">2</li>-->
                    <!--<li data-page="3" class="pager">3</li>-->
                    <!--<li data-page="4" class="pager">4</li>-->
                    <!--<li class="js-page-next js-page-action ui-pager ui-pager-disabled">下一页</li>-->
                    <!--<li class="js-page-last js-page-action ui-pager ui-pager-disabled">末页</li>-->
                    <!--</ul>-->
                    <!--</div>-->
                    <!--</div>-->
                </div>
                <div class="right" v-show="seletedIndex==2?true:false">
                    <a href="" class="clearfix">
                        <div class="myimg-box fll clearfix">

                            <img src="http://www.fooju.cn/fjw/uploads/ency/20180625/5b30ba95a241d.jpg" alt="">

                        </div>
                        <div class="desc fll clearfix">
                            <h3>买房遇到这种阳台的户型，再便宜聪明人都不会买，有钱人一看就懂</h3>
                            <p class="desc1">买房遇到这种阳台的户型，再便宜聪明人都不会买，有钱人一看就懂</p>
                            <p class="desc2">2018-06-25&nbsp17:50:58</p>
                        </div>
                    </a>
                    <a href="" class="clearfix">
                        <div class="myimg-box fll clearfix">
                            <img src="http://www.fooju.cn/fjw/uploads/ency/20180625/5b30ba95a241d.jpg" alt="">
                        </div>
                        <div class="desc fll clearfix">
                            <h3>买房遇到这种阳台的户型，再便宜聪明人都不会买，有钱人一看就懂</h3>
                            <p class="desc1">买房遇到这种阳台的户型，再便宜聪明人都不会买，有钱人一看就懂</p>
                            <p class="desc2">2018-06-25&nbsp17:50:58</p>
                        </div>
                    </a>
                    <a href="" class="clearfix">
                        <div class="myimg-box fll clearfix">
                            <img src="http://www.fooju.cn/fjw/uploads/ency/20180625/5b30ba95a241d.jpg" alt="">
                        </div>
                        <div class="desc fll clearfix">
                            <h3>买房遇到这种阳台的户型，再便宜聪明人都不会买，有钱人一看就懂</h3>
                            <p class="desc1">买房遇到这种阳台的户型，再便宜聪明人都不会买，有钱人一看就懂</p>
                            <p class="desc2">2018-06-25&nbsp17:50:58</p>
                        </div>
                    </a>
                    <a href="" class="clearfix">
                        <div class="myimg-box fll clearfix">
                            <img src="http://www.fooju.cn/fjw/uploads/ency/20180625/5b30ba95a241d.jpg" alt="">
                        </div>
                        <div class="desc fll clearfix">
                            <h3>买房遇到这种阳台的户型，再便宜聪明人都不会买，有钱人一看就懂</h3>
                            <p class="desc1">买房遇到这种阳台的户型，再便宜聪明人都不会买，有钱人一看就懂</p>
                            <p class="desc2">2018-06-25&nbsp17:50:58</p>
                        </div>
                    </a>
                    <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="1000"
                            :class="aa"
                    >
                    </el-pagination>
                    <!--<el-pagination-->
                    <!--background-->
                    <!--layout="prev, pager, next"-->
                    <!--:total="1000">-->
                    <!--</el-pagination>-->
                    <!--<div class="pageTool">-->
                    <!--<div class="fenye">-->
                    <!--<ul>-->
                    <!--<li class="js-page-first js-page-action ui-pager ui-pager-disabled">首页</li>-->
                    <!--<li class="js-page-prev js-page-action ui-pager ui-pager-disabled">上一页</li>-->
                    <!--<li data-page="1" class="pager">1</li>-->
                    <!--<li data-page="2" class="pager">2</li>-->
                    <!--<li data-page="3" class="pager">3</li>-->
                    <!--<li data-page="4" class="pager">4</li>-->
                    <!--<li class="js-page-next js-page-action ui-pager ui-pager-disabled">下一页</li>-->
                    <!--<li class="js-page-last js-page-action ui-pager ui-pager-disabled">末页</li>-->
                    <!--</ul>-->
                    <!--</div>-->
                    <!--</div>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headerOne from '~/components/headerOne'
    export default {
        name: "baiKe",
        head(){
            return{
                title:'百科'
            }
        },
        data(){
            return{
                seletedIndex:0,
                wenzishi:"买房风险"
            }
        },
        watch:{
            seletedIndex(newValue,oldValue){
                switch (newValue) {
                    case 0 :
                        this.wenzishi = "买房风险"
                        break;
                    case 1 :
                        this.wenzishi = "入住/交接"
                        break;
                    case 2 :
                        this.wenzishi = "缴税/过户"
                        break;
                    case 3 :
                        this.wenzishi = "全款/贷款"
                        break;
                    case 4 :
                        this.wenzishi = "签约/定房"
                        break;
                    case 5 :
                        this.wenzishi = "看房/选房"
                        break;
                    case 6 :
                        this.wenzishi = "准备买房"
                        break;
                    case 7 :
                        this.wenzishi = "认购新房"
                        break;
                    case 8 :
                        this.wenzishi = "看房/选房"
                        break;
                    case 9 :
                        this.wenzishi = "活动"
                        break;
                    case 10 :
                        this.wenzishi = "签约/定房"
                        break;
                    case 11 :
                        this.wenzishi = "收房/验房"
                        break;
                    case 12 :
                        this.wenzishi = "装修/入住"
                        break;
                    case 13 :
                        this.wenzishi = "看房/选房"
                        break;
                    case 14 :
                        this.wenzishi = "房产活动"
                        break;
                    case 15 :
                        this.wenzishi = "网签数据"
                        break;
                    case 16 :
                        this.wenzishi = "房产政策"
                        break;
                    case 17 :
                        this.wenzishi = "购房建议"
                        break;
                    case 18 :
                        this.wenzishi = "法律纠纷"
                        break;
                    case 19 :
                        this.wenzishi = "注意事项"
                        break;
                    case 20 :
                        this.wenzishi = "租房风险"
                        break;
                    case 21 :
                        this.wenzishi = "准备换房"
                        break;
                    case 22 :
                        this.wenzishi = "换房风险"
                        break;
                    case 23 :
                        this.wenzishi = "缴税/过户"
                        break;
                }
            }
        },
        components:{
            headerOne
        }
    }
</script>
<style>
    .el-pager li{
        padding: 0 4px;
        background: #fff;
        font-size: 13px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .el-pagination.is-background .el-pager li:not(.disabled).active{
        background-color: #5f1985;
    }
</style>
<style scoped>
    /*头部开始*/
    .header-box{
        height: 80px;
        margin: 0 auto;
        background: #fff;
        border-bottom: 1px solid #ccc;
    }
    .wrap{
        width: 1100px;
        height: 80px;
        align-items: center;
        margin: 0 auto;
        position: relative;
    }
    .logo{
        float: left;
        margin-top: 20px;
        width: 128px;
        height: 40px;
        background: url("../images/shouye/logo.png") no-repeat;
        background-size: 100% 100%;
        display: block;
    }
    .wrap .right{
        line-height: 80px;
        float: left;
    }
    .wrap .right .nav-item{
        float: left;
        margin-left: 43px;
        padding: 0 5px;
        font-size: 16px;
        color: #000;
        cursor: pointer;
    }
    .wrap .right .nav-item:first-child{
        margin-left: 180px;
    }
    /*让首页默认显示红色*/
    .right .active a {
        color: #c30d23;
    }
    /*鼠标指向哪个哪个就变色*/
    .nav-item a:hover{
        color: #c30d23;
    }
    /*头部结束*/

    /*wrap开始*/
    .top{
        width: 1100px;
        /*height: 60px;*/
        margin: 0 auto;
    }
    .top span{
        height: 60px;
    }
    .top span a{
        font-size: 14px;
        color: #999;
        line-height: 60px;
    }
    /*搜索框开始*/
    .search{
        width: 1100px;
        margin: 20px auto 80px;
    }
    .search input{
        width: 740px;
        height: 60px;
        outline: none;
        border: none;
        text-indent: 20px;
        background: #f4f4f4;
    }
    .search span{
        width: 180px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        font-size: 16px;
        color: #fff;
        cursor: pointer;
        background: #c30d23;
    }
    /*搜索框结束*/
    /*wrap结束*/

    /*bottom开始*/
    .bottom-box{
        width: 1100px;
        margin: 0 auto;
    }
    .bottom-box h2{
        font-size: 30px;
        font-weight: 700;
        color: #000;
        padding-bottom: 20px;
        border-bottom: 1px solid #d5d5d5;
    }
    .bottom-left{
        width: 300px;
    }
    .bottom-left h3{
        font-size: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
        color: #333;
        font-weight: 700;
    }
    .bottom-left .left{
        margin-bottom: 35px;
    }
    .bottom-left .left .left-item{
        float: left;
        width: 33.3%;
        margin-bottom: 15px;
        font-size: 14px;
        font-weight: 400;
        color: #333;
    }
    .bottom-left .left a:hover{
        color: #c30d23;
    }
    /*左半部分结束*/
    .bottom-right{
        width: 700px;
    }
    .bottom-right .right{
        width: 700px;
        /*margin-bottom: 35px;*/
    }
    .bottom-right .right a{
        width: 700px;
    }
    .bottom-right .right .myimg-box{
        width: 280px;
        height: 210px;
        margin-top: 30px;
        margin-bottom: 5px;
    }
    .bottom-right .right .myimg-box img{
        width:100%;
        height: 100%;
        display: block;
    }
    .bottom-right .right .desc{
        width: 390px;
        margin-top: 30px;
        margin-left: 30px;
        margin-bottom: 5px;
    }
    .bottom-right .right .desc h3{
        font-size: 20px;
        color: #333;
        margin-bottom: 30px;
    }
    .bottom-right .right .desc .desc1{
        font-size: 14px;
        color: #333;
        line-height: 2;
        margin-bottom: 30px;
    }
    .bottom-right .right .desc .desc2{
        font-size: 14px;
        color: #999;
    }
    /*右半部分结束*/
    /*bottom结束*/

    /*右半部分分页开始 还没写完*/
    .pageTool{
        font-weight: 400;
    }
    .ui-paging-container{
        color: #666;
        font-size: 12px;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .pageTool ul{
        display: block;
        text-align: right;
        overflow: hidden;
    }
    ul li{
        float: left;
        margin-left: 5px;
        width: 60px;
        height: 30px;
        border: 1px solid #999;
        text-align: center;
        line-height: 30px;
        border-radius: 5px;
        font-size: 14px;
    }
    ul li:hover{
        background-color: #5f1985;
        color: #fff;
        cursor: pointer;
    }
    ul li:not(.disabled).active{
        background-color: #5f1985;
        color: #fff;
    }
    /*右半部分分页结束*/
</style>