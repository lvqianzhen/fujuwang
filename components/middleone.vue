<template>
    <div>
        <div class="top">
            <slot>
                <span>
                    <a href="">福居网</a>>
                    <a href="">二手房</a>
                </span>
                <div class="search clearfix">
                    <input type="text" class="fll" placeholder="搜索">
                    <span class="fll">搜索</span>
                </div>
                <!--选项卡开始-->
                <div class="select clearfix">
                    <!--区域开始-->
                    <div class="areaBox clearfix">
                        <span class="itemOne fll">区域</span>
                        <div class="area-box fll">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox class="public-item" label="不限"></el-checkbox>
                                <el-checkbox class="public-item" label="金桥开发区"></el-checkbox>
                                <el-checkbox class="public-item" label="如意开发区"></el-checkbox>
                                <el-checkbox class="public-item" label="玉泉区"></el-checkbox>
                                <el-checkbox class="public-item" label="回民区"></el-checkbox>
                                <el-checkbox class="public-item" label="赛罕区"></el-checkbox>
                                <el-checkbox class="public-item" label="新城区"></el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                    <!--区域结束-->
                    <!--价格开始-->
                    <div class="areaBox clearfix">
                        <span class="itemOne fll">价格</span>
                        <div class="area-box fll clearfix">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox class="public-item" label="不限"></el-checkbox>
                                <el-checkbox class="public-item" label="30万以下"></el-checkbox>
                                <el-checkbox class="public-item" label="30-40万"></el-checkbox>
                                <el-checkbox class="public-item" label="40-50万"></el-checkbox>
                                <el-checkbox class="public-item" label="50万以上"></el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                    <div class="select-priceinput clearfix">
                        <input type="text" class="price-input fll">
                        <b class="fll">&nbsp;-&nbsp;</b>
                        <input type="text" class="price-input fll">
                        <b class="fll">万</b>
                        <div class="price-btn fll">
                            确定
                        </div>
                    </div>
                    <!--价格结束-->
                    <!--户型开始-->
                    <div class="areaBox clearfix">
                        <span class="itemOne fll">户型</span>
                        <div class="area-box fll clearfix">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox class="public-item" label="一室"></el-checkbox>
                                <el-checkbox class="public-item" label="两室"></el-checkbox>
                                <el-checkbox class="public-item" label="三室"></el-checkbox>
                                <el-checkbox class="public-item" label="四室"></el-checkbox>
                                <el-checkbox class="public-item" label="五室"></el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                    <!--户型结束-->
                </div>
                <!--选项卡结束-->
            </slot>
        </div>
        <div class="middle">
            <div style="height: 0;" class="flex-box" v-trans>
                <slot name="middle">
                    <!--类型开始-->
                    <div class="areaBox clearfix">
                        <span class="itemOne fll">类型</span>
                        <div class="area-box fll clearfix">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox class="public-item" label="平层"></el-checkbox>
                                <el-checkbox class="public-item" label="复式"></el-checkbox>
                                <el-checkbox class="public-item" label="跃层"></el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                    <!--类型结束-->
                    <!--装修开始-->
                    <div class="areaBox clearfix">
                        <span class="itemOne fll">装修</span>
                        <div class="area-box fll clearfix">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox class="public-item" label="毛坯"></el-checkbox>
                                <el-checkbox class="public-item" label="豪装"></el-checkbox>
                                <el-checkbox class="public-item" label="精装"></el-checkbox>
                                <el-checkbox class="public-item" label="简装"></el-checkbox>
                                <el-checkbox class="public-item" label="中装"></el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                    <!--装修结束-->
                    <!--朝向开始-->
                    <div class="areaBox clearfix">
                        <span class="itemOne fll">朝向</span>
                        <div class="area-box fll clearfix">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox class="public-item" label="东"></el-checkbox>
                                <el-checkbox class="public-item" label="西"></el-checkbox>
                                <el-checkbox class="public-item" label="南"></el-checkbox>
                                <el-checkbox class="public-item" label="北"></el-checkbox>
                                <el-checkbox class="public-item" label="南北"></el-checkbox>
                                <el-checkbox class="public-item" label="双南"></el-checkbox>
                                <el-checkbox class="public-item" label="东南"></el-checkbox>
                                <el-checkbox class="public-item" label="西南"></el-checkbox>
                                <el-checkbox class="public-item" label="东北"></el-checkbox>
                                <el-checkbox class="public-item" label="西北"></el-checkbox>
                                <el-checkbox class="public-item" label="东西"></el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                    <!--朝向结束-->
                    <!--面积开始-->
                    <div class="areaBox clearfix">
                        <span class="itemOne fll">面积</span>
                        <div class="area-box fll clearfix">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox class="public-item" label="不限"></el-checkbox>
                                <el-checkbox class="public-item" label="50平以下"></el-checkbox>
                                <el-checkbox class="public-item" label="50-70平"></el-checkbox>
                                <el-checkbox class="public-item" label="70-90平"></el-checkbox>
                                <el-checkbox class="public-item" label="90平以上"></el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                    <div class="select-priceinput clearfix">
                        <input type="text" class="price-input fll">
                        <b class="fll">&nbsp;-&nbsp;</b>
                        <input type="text" class="price-input fll">
                        <b class="fll">平</b>
                        <div class="price-btn fll">
                            确定
                        </div>
                    </div>
                    <!--面积结束-->
                    <!--楼龄开始-->
                    <div class="areaBox clearfix">
                        <span class="itemOne fll">楼龄</span>
                        <div class="area-box fll clearfix">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox class="public-item" label="不限"></el-checkbox>
                                <el-checkbox class="public-item" label="5年以内"></el-checkbox>
                                <el-checkbox class="public-item" label="10年以内"></el-checkbox>
                                <el-checkbox class="public-item" label="15年以内"></el-checkbox>
                                <el-checkbox class="public-item" label="15年以上"></el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                    <!--楼龄结束-->
                    <!--楼层开始-->
                    <div class="areaBox clearfix">
                        <span class="itemOne fll">楼层</span>
                        <div class="area-box fll clearfix">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox class="public-item" label="不限"></el-checkbox>
                                <el-checkbox class="public-item" label="底层"></el-checkbox>
                                <el-checkbox class="public-item" label="低楼层"></el-checkbox>
                                <el-checkbox class="public-item" label="中层"></el-checkbox>
                                <el-checkbox class="public-item" label="中高层"></el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                    <!--楼层结束-->
                    <!--电梯开始-->
                    <div class="areaBox clearfix">
                        <span class="itemOne fll">电梯</span>
                        <div class="area-box fll clearfix">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox class="public-item" label="是"></el-checkbox>
                                <el-checkbox class="public-item" label="否"></el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                    <!--电梯结束-->
                    <!--其他开始-->
                    <div class="otherBox clearfix">
                        <span class="otherBox-desc fll">其他</span>
                        <input type="text" class="fll" placeholder="在结果中搜索">
                        <span class="btn2 fll">确定</span>
                    </div>
                    <!--其他结束-->
                </slot>
            </div>
        </div>
        <div class="bottom clearfix">
            <slot name="bottom">
                <span class="selecttitle fll">筛选分类</span>
                <div class="clearbox fll">
                    <span class="kong">
                        <i class="iconfont icon-cha"></i>
                    </span>
                    <span class="clearall-button">
                        <i class="iconfont icon-lajitong"></i>
                        清除全部
                    </span>
                </div>
            </slot>
        </div>
        <button @click="handleShow" class="button-box">
            {{isShow ? "收起选项":"更多选项"}}
            <i class="iconfont icon-jiantoushang" v-show="isShow==1"></i>
            <i class="iconfont icon-jiantouxia" v-show="isShow==0"></i>
        </button>

    </div>
</template>

<script>
    export default {
        name: "middleone",
        data(){
            return{
                isShow:false,
                //区域选择开始
                checkList:[]
                // 区域选择结束
            }
        },
        methods:{
            handleShow(){
                this.isShow = !this.isShow
            }
        },
        directives:{
            trans:{
                update(el,binding,vnode){
                    // 先拿isShow的值
                    let isShow = vnode.context.$data.isShow ;
                    // 不等于0的值是更多选项，取反为收起选项，
                    if (!isShow){
                        el.style.height = 0 ;
                    }
                    else{
                        el.style.height = "auto";
                        let startHeight = 0;
                        let targetHeight = getComputedStyle(el).height;
                        el.style.transition = "none";
                        el.style.height = startHeight;
                        //触发浏览器重排
                        el.offsetWidth;
                        el.style.transition = "height ease .5s";
                        el.style.height = targetHeight;
                    }
                }
            }
        }
    }
</script>

<style scoped>
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
        color: #666;
        line-height: 60px;
    }
    /*搜索框开始*/
    .search{
        width: 1100px;
        margin: 20px auto 40px;
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
    /*区域选择开始*/
    .select{
        width: 1100px;
        margin: 0 auto;
    }
    .select .areaBox{
        width: 1100px;
        margin-bottom: 20px;
    }
    .select .areaBox .itemOne{
        width: 50px;
        height: 30px;
        line-height: 30px;
    }
    .select .areaBox .area-box{
        width: 600px;
        margin-left: 40px;
    }
    .select .areaBox .area-box .public-item{
        height: 30px;
        margin-left: 0;
        margin-right: 30px;
        margin-bottom: 10px;
        line-height: 30px;
        font-size: 14px;
        color: #999;
        cursor: pointer;
    }
    .select-priceinput{
        width: 1100px;
        margin: 0 auto 20px;
    }
    b{
        line-height: 20px;
        color: #999;
    }
    b:nth-child(4){
        margin-left: 10px;
    }
    .price-input{
        width: 50px;
        height: 20px;
        border: 1px solid #999;
        outline: none;
    }
    .price-input:first-child{
        margin-left: 90px;
    }
    .price-btn{
        width: 50px;
        height: 22px;
        margin-left: 20px;
        background: #c30d23;
        text-align: center;
        line-height: 22px;
        color: #fff;
    }
    /*区域选择结束*/
    /*中部隐藏内容开始*/
    .flex-box{
        transition: height ease 3s;
        overflow: hidden;
        width: 1100px;
        margin: 0 auto;
    }
    .flex-box .areaBox{
        width: 1100px;
        margin-bottom: 20px;
    }
    .flex-box .areaBox .itemOne{
        width: 50px;
        height: 30px;
        line-height: 30px;
    }
    .flex-box .areaBox .area-box{
        width: 600px;
        margin-left: 40px;
    }
    .flex-box .areaBox .area-box .public-item{
        height: 30px;
        margin-left: 0;
        margin-right: 30px;
        margin-bottom: 10px;
        line-height: 30px;
        font-size: 14px;
        color: #999;
        cursor: pointer;
    }
    .otherBox{
        width: 1100px;
        margin: 0 auto;
    }
    .otherBox-desc{
        width: 50px;
        height: 30px;
    }
    .otherBox input{
        width: 160px;
        height: 20px;
        margin-left: 41px;
        outline: none;
        border: 1px solid #999;
    }
    .btn2{
        width: 55px;
        height: 25px;
        margin-left: 20px;
        text-align: center;
        line-height: 25px;
        color: #fff;
        font-size: 14px;
        background: #c30d23;
    }
    /*中部隐藏内容结束*/
    /*清除全部开始*/
    .bottom{
        width: 1100px;
        margin: 0 auto;
    }
    .selecttitle{
        font-size: 14px;
        color: #333;
    }
    .kong{

    }
    .bottom .clearbox{
        width: 600px;
    }
    .bottom .clearbox .clearall-button{
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
    }
    .bottom a{
        margin-left: 48px;
    }
    /*清除全部结束*/
    /*按钮内容开始*/
    .button-box{
        width: 1100px;
        height: 60px;
        margin: 10px auto;
        font-size: 16px;
        color: #bbb;
        background: none;
        outline: none;
        border: none;
        border-bottom: 1px solid #ccc;
        text-align: center;
        display: block;
    }
    /*按钮内容开始*/
</style>
<style>
    .el-checkbox__input{
        cursor: pointer;
        outline: 0;
        vertical-align: middle;
    }
    .el-checkbox__inner{
        width: 15px;
        height: 15px;
    }
    .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
        background-color: #c30d23;
        border-color: #c30d23;
    }
    .el-checkbox__input.is-checked+.el-checkbox__label{
        color: #999;
    }
    .el-checkbox__input .is-focus .el-checkbox__inner:hover{
        color: #999;
    }
</style>