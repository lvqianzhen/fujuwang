<template>
    <div class="box">
        <zhuceHeader></zhuceHeader>
        <div class="kong"></div>
        <zhuceContent></zhuceContent>
        <zhuceFooter></zhuceFooter>
    </div>
</template>
<script>
    import zhuceHeader from '~/components/zhuce/zhuceHeader'
    import zhuceContent from '~/components/zhuce/zhuceContent'
    import zhuceFooter from '~/components/zhuce/zhuceFooter'
    export default {
        name:"zhuce",
        components:{
            zhuceHeader,
            zhuceContent,
            zhuceFooter
        }
    }
</script>

<style scoped>
    *{
        padding: 0;
        margin: 0;
    }
    .box{
        background: #f2f2f2;
    }
    .kong{
        /*width: 100%;*/
        height: 30px;
        background: #f2f2f2;
    }
</style>