<template>
  <div class="content-box">
    <Header></Header>
    <!--轮播图开始-->
    <div class="lunbo">
      <div v-swiper:mySwiper="swiperOption" v-binner style="overflow: hidden">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="banner in bannerData">
            <img class="myimg" :src="'http://www.fooju.cn/'+banner.picurl">
          </div>
        </div>
      </div>
      <div class="mask v-binner"></div>
    </div>
    <!--轮播结束-->
    <listRight></listRight>
    <!--搜索框开始-->
    <div class="search-box">
      <ul class="clearfix links">
        <li class="fll link-item" :class="{
                active:seletedIndex == 0}" @click="seletedIndex = 0">找二手房</li>
        <li class="fll link-item" :class="{
                active:seletedIndex == 1}" @click="seletedIndex = 1">找新房</li>
        <li class="fll link-item" :class="{
                active:seletedIndex == 2}" @click="seletedIndex = 2">找租房</li>
        <li class="fll link-item" :class="{
                active:seletedIndex == 3}" @click="seletedIndex = 3">找学区房</li>
        <li class="fll link-item" :class="{
                active:seletedIndex == 4}" @click="seletedIndex = 4">找小区</li>
      </ul>
      <div class="search-button clearfix">
        <input type="text" class="fll" :placeholder="placeholderText">
        <span class="search-btn fll">搜索</span>
        <a href="">
                     <span class="mapbox flr clearfix mapright">
                        <img src="../images/shouye/mapSearch.png" class="fll" alt="">
                        地图找房
                     </span>
        </a>

      </div>
    </div>
    <!--搜索框结束-->
    <!--一行四个图片开始-->
    <div class="serviceOne clearfix">
      <div class="service1">
        <a href="">
          <img src="../images/shouye/store.png" alt="">
        </a>
        <a href="">
          <div class="aaa">查门店</div>
        </a>
        <a href="">
          <div class="bbb">查优质门店</div>
        </a>
      </div>
      <div class="service1">
        <a href="">
          <img src="../images/shouye/entrust.png" alt="">
        </a>
        <a href="">
          <div class="aaa">在线委托</div>
        </a>
        <a href="">
          <div class="bbb">有问题我们帮你</div>
        </a>
      </div>
      <div class="service1">
        <a href="">
          <img src="../images/shouye/mapBlue.png" alt="">
        </a>
        <a href="">
          <div class="aaa">地图找房</div>
        </a>
        <a href="">
          <div class="bbb">地图找房</div>
        </a>
      </div>
      <div class="service1">
        <a href="">
          <img src="../images/shouye/encyclopedias.png" alt="">
        </a>
        <a href="">
          <div class="aaa">福居百科</div>
        </a>
        <a href="">
          <div class="bbb">看百科了解更多</div>
        </a>
      </div>
    </div>
    <!--一行四个图片结束-->
    <!--一行三个图片开始-->
    <div class="serviceTwo clearfix">
            <span class="service2 fleft">
                <a href="">
                    <img src="../images/shouye/3.png" alt="">
                    <div class="advertising" v-text="bigimgData[0].title"></div>
                </a>
            </span>
             <span class="service2 fleft fleft2">
                <a href="">
                    <img src="../images/shouye/2.png" alt="">
                    <div class="advertising" v-text="bigimgData[1].title"></div>
                </a>
            </span>
            <span class="service2 fleft fleft3">
                <a href="">
                    <img src="../images/shouye/1.png" alt="">
                    <div class="advertising" v-text="bigimgData[2].title"></div>
                </a>
            </span>
    </div>
    <!--一行三个图片结束-->
    <!--精品新房导航开始-->
    <div class="jingpin clearfix">
      <span class="jtitle">精品新房</span>
      <span><a href="" class="morehouse">更多新房<i class="iconfont icon-mjiantou"></i></a></span>
      <div class="jtitlemore">
        在这里为您寻觅一个新家
      </div>
    </div>
    <!--精品新房导航结束-->
    <!--精品新房图片开始-->
    <div class="servicethree clearfix">
            <span class="imgBox">
                <a href=""><img :src="'http://www.fooju.cn/'+newhouseData[0].pic" alt=""></a>
                <div class="detilebox">
                    <span class="detilebox1">{{newhouseData[0].title}}</span>
                    <span class="detilebox2">{{newhouseData[0].average_price}}元/平</span>
                </div>
            </span>
      <span class="imgBox fright1">
                <a href=""><img :src="'http://www.fooju.cn/'+newhouseData[1].pic" alt=""></a>
                <div class="detilebox">
                    <span class="detilebox1">{{newhouseData[1].title}}</span>
                    <span class="detilebox2">{{newhouseData[1].average_price}}元/平</span>
                </div>
            </span>
      <span class="imgBox">
                <a href=""><img :src="'http://www.fooju.cn/'+newhouseData[2].pic" alt=""></a>
                <div class="detilebox">
                    <span class="detilebox1">{{newhouseData[2].title}}</span>
                    <span class="detilebox2">{{newhouseData[2].average_price}}元/平</span>
                </div>
            </span>
    </div>
    <!--精品新房图片结束-->
    <!--二手优品导航开始-->
    <div class="jingpin clearfix">
      <span class="jtitle">二手优品</span>
      <span><a href="" class="morehouse">更多二手房<i class="iconfont icon-mjiantou"></i></a></span>
      <div class="jtitlemore">
        生活因为宽广，才不断延伸
      </div>
    </div>
    <!--二手优品导航结束-->

    <!--二手优品房开始-->
    <div class="lowerbox clearfix">
        <span class="lowerbox-item" v-for="item in secondhandData">
            <a href="" class="imgitem1-box">
                <img class="imgitem1" :src="'http://www.fooju.cn/'+item.pic" alt="">
            </a>
            <img class="imgitem2" src="../images/shouye/pricetag.png" alt="">
            <p class="introduce1">{{item.total_price}}万</p>
            <div class="introducebox">
                <p class="introduce2">{{item.title}}</p>
                <span class="leixing">{{item.bedroom}}室{{item.livingroom}}厅{{item.wc}}卫</span>
                <span class="leixing">{{item.built_area}}㎡</span>
            </div>
        </span>
    </div>
    <!--二手优品房结束-->
    <!--租房导航开始-->
    <div class="jingpin clearfix">
      <span class="jtitle">精品租房</span>
      <span><a href="" class="morehouse">更多租房<i class="iconfont icon-mjiantou"></i></a></span>
      <div class="jtitlemore">
        与其等待，不如坐享繁华
      </div>
    </div>
    <!--租房导航结束-->
    <!--精品租房开始-->
    <div class="lowerbox clearfix">
            <span class="lowerbox-item" v-for="item in renthouseData">
                <a href="" class="imgitem1-box">
                    <img class="imgitem1" :src="'http://www.fooju.cn/'+item.pic" alt="">
                </a>
                <div class="introducebox">
                    <p class="introduce2">{{item.title}}</p>
                    <span class="leixing">{{item.bedroom}}室{{item.livingroom}}厅{{item.wc}}卫</span>
                    <span class="leixing">{{item.built_area}}㎡</span>
                    <span class="price">{{item.rent}}{{item.rent_type}}</span>
                </div>
            </span>
    </div>
    <!--精品租房结束-->
    <Footer></Footer>
  </div>
</template>

<script>
    import api from '~/mainApi/allApi'
    import axios from '~/plugins/axios'
    import Header from '~/components/Header'
    import listRight from '~/components/listRight'
    import Footer from '~/components/Footer'
    export default {
        layout:"newLayout",
        head(){
            return{
                title:'福居网'
            }
        },
        components:{
            Header,
            listRight,
            Footer,
        },
        data(){
            return{
                swiperOption:{
                    autoplay:true
                },
                seletedIndex:0,
                placeholderText:"输入小区名查找二手房"
            }
        },
        //首页轮播图请求接口开始
        async asyncData(){
            //调主页轮播图接口
            let bannerData = await axios.get(api.paramToUrl(api.adLists,{type:0,position:0}))
            //调精品新房上面三个图片接口
            let bigimgData = await axios.get(api.paramToUrl(api.linkData,{type:3,position:0}))
            //调精品新房接口
            let newhouseData = await axios.get(api.paramToUrl(api.recommend,{type:0,position:0}))
            //调二手优品接口
            let secondhandData = await axios.get(api.paramToUrl(api.recommend,{type:0,position:0}))
            // 调精品租房接口
            let renthouseData = await axios.get(api.paramToUrl(api.recommend,{type:0,position:0}))
            console.log(renthouseData)
            return{
                bannerData:bannerData.data.data,
                bigimgData:bigimgData.data.datas,
                newhouseData:newhouseData.data.new,
                secondhandData:secondhandData.data.used,
                renthouseData:renthouseData.data.retal
            }
        },
        mounted(){
            // console.log(this.bannerData)
            // console.log(this.bigimgData)
            console.log(this.secondhandData)
            // console.log(this.renthouseData)
        },
        //首页轮播图请求接口结束

        //全屏大图请求接口开始
        //全屏大图请求接口结束

        watch:{
            seletedIndex(newValue,oldValue){
                switch (newValue) {
                    case 0 :
                        this.placeholderText = "输入小区名查找二手房"
                        break;
                    case 1 :
                        this.placeholderText = "输入楼盘名进行搜索"
                        break;
                    case 2 :
                        this.placeholderText = "输入小区名可以查找出租的房屋"
                        break;
                    case 3 :
                        this.placeholderText = "输入小区名搜索学区房"
                        break;
                    case 4 :
                        this.placeholderText = "找小区要输入小区名"
                        break;
                }
            }
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
        }
    }
</script>

<style scoped>
  .content-box{
    background: #fff;
    position: relative;
    margin: 0 auto;
  }
  /*轮播图开始*/
  .lunbo{
      width: 100%;
      position: relative;
  }
  /*.lunbo .mask{*/
    /*position: absolute;*/
    /*z-index: 99;*/
    /*background-color: rgba(0,0,0,.3);*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*top: 0;*/
    /*left: 0;*/
  /*}*/
  .myimg{
    display: block;
    width: 100%;
    background: rgba(0,0,0,.3);
  }
  /*轮播图结束*/

  /*搜索框开始*/
  .search-box{
    width: 1100px;
    margin: 0 auto;
    position: absolute;
    top: 200px;
    left: 48px;
    z-index: 1000;
  }
  .link-item{
    position: relative;
    padding: 15px 10px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
  .search-box .link-item:first-child{
    padding-left: 0;
  }
  .search-box .active::after{
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border: 10px solid transparent;
    border-bottom: 10px solid #fff;
  }
  .search-box .active{
    font-weight: 700;
  }
  .search-box .link-item:hover{
    font-weight: 700;
  }
  .search-button input{
    width: 700px;
    height: 50px;
    background: #fff;
    outline: none;
    border: none;
    text-indent: 10px;
  }
  .search-button input::placeholder{
    font-size: 14px;
    color: #666;
  }
  .search-button .search-btn{
    width: 160px;
    height: 50px;
    background: #c30d23;
    color: #fff;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
  }
  .search-button .mapbox{
    width: 180px;
    height: 50px;
    font-size: 16px;
    color: #fff;
    display: block;
    text-align: center;
    background: #5f1985;
    line-height: 50px;
    border-radius: 3px;
    position: relative;
  }
  .mapright{
    margin-right: 40px;
  }
  .search-button a .mapbox img{
    position: absolute;
    top: 15px;
    left: 35px;
    width: 20px;
    height: 20px;
  }
  /*搜索框结束*/

  /*一行四个图开始*/
  .content-box .serviceOne{
    width: 1100px;
    display: flex;
    align-items: center;
    margin: 30px auto;
    justify-content: center;
    flex: 4;
  }
  .content-box .service1{
    padding: 0 40px;
    align-items: center;
    text-align: center;
    margin: 0 auto;
  }
  .content-box .serviceOne .service1 img{
    width: 98px;
    height: 90px;
    vertical-align: center;
  }
  .content-box .serviceOne .service1 .aaa{
    font-size: 20px;
    color: #333;
    margin-top: 15px;
    margin-bottom: 12px;
  }
  .content-box .serviceOne .service1 .bbb{
    font-size: 16px;
    color: #444;
  }
  /*一行四个图结束*/

  /*一行三个图开始*/
  .content-box .serviceTwo{
    width: 1100px;
    margin: 30px auto;
    position: relative;
  }
  .content-box .serviceTwo .service2{
    display: block;
  }
  .fleft{
    position: relative;
    float: left;
  }
  .fleft2{
    margin-left: 100px;

  }
  .fleft3{
    position: absolute;
    right: 0;
  }
  .content-box .serviceTwo .service2 .advertising{
    width: 230px;
    font-size: 24px;
    color: #fff;
    position: absolute;
    top: 150px;
    /*left: 32px;*/
    left: 55px;
    letter-spacing: 2px;
  }
  /*一行三个图结束*/

  /*精品新房导航开始*/
  .jingpin{
    width: 1100px;
    height: 80px;
    position: relative;
    margin: 0 auto;
  }
  .jtitle{
    font-size: 30px;
    font-weight: bolder;
    color: #333;
  }
  .jingpin .morehouse{
    position: absolute;
    right: 0;
    top: 0;
    font-size: 16px;
    color: #999;
  }
  .jingpin .morehouse i{
    padding-left: 5px;
  }
  .jingpin .jtitlemore{
    font-size: 16px;
    color: #666;
    padding-top: 20px;
  }
  /*精品新房导航结束*/

  /*精品房开始*/
  .servicethree {
    width: 1100px;
    margin: 30px auto;
    display: flex;
  }
  .servicethree .imgBox{
    width: 342px;
    height: 257px;
    position: relative;
    flex: 3;
    overflow: hidden;
  }
  .servicethree img{
    width: 342px;
    height: 257px;
    cursor: pointer;
    transition: all 3s;
  }
  .servicethree img:hover{
    transform: scale(1.1);
  }
  .fright1{
    margin: 0 37px;
  }
  .detilebox{
    width: 342px;
    height: 30px;
    background: rgba(0,0,0,.3);
    position: absolute;
    left: 0;
    bottom: 0;
    line-height: 30px;
  }
  .detilebox span{
    font-size: 16px;
    color: #fff;
  }
  .detilebox .detilebox1{
    padding-left: 10px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .detilebox .detilebox2{
    padding-right: 10px;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  /*精品房结束*/
  /*二手优品房子开始*/
  .lowerbox{
    width: 1100px;
    margin: 30px auto;
    display: flex;
  }
  .lowerbox .lowerbox-item{
    position: relative;
    overflow: hidden;
    flex: 3;
      margin-left: 37px;
  }
  .lowerbox .lowerbox-item:first-child{
      margin-left: 0;
  }
  .lowerbox .lowerbox-item .imgitem1-box{
    width: 342px;
    height: 257px;
  }
  .lowerbox .lowerbox-item .imgitem1-box .imgitem1{
    width: 342px;
    height: 257px;
    cursor: pointer;
    transition: all 3s;
    display: block;

  }
  .lowerbox .lowerbox-item .imgitem1-box .imgitem1:hover{
    transform: scale(1.1);
  }
  .lowerbox-item  .imgitem2{
    position: absolute;
    top: 0;
    left: 0;
  }
  .lowerbox-item  .introduce1{
    position: absolute;
    top: 16px;
    left: 23px;
    color: #fff;
    font-size: 20px;
  }
  .introducebox{
    width: 342px;
    position: relative;
  }
  .introducebox .price{
    position: absolute;
    right: 0;
    color: #c30d23;
    font-size: 14px;
  }
  .lowerbox-item .introducebox .introduce2{
    width: 340px;
    font-size: 16px;
    color: #333;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .lowerbox-item .introducebox .leixing{
    font-size: 14px;
    color: #666;
    margin-top: 10px;
    margin-right: 10px;
  }
  /*二手优品房子结束*/
</style>
