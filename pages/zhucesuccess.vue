<template>
    <div class="success-box">
        <zhuceHeader></zhuceHeader>
        <div class="kong"></div>
        <zhucesuccessContent></zhucesuccessContent>
        <zhuceFooter></zhuceFooter>
    </div>
</template>

<script>
    import zhuceHeader from '~/components/zhuce/zhuceHeader'
    import zhucesuccessContent from '~/components/zhucesuccess/zhucesuccessContent'
    import zhuceFooter from '~/components/zhuce/zhuceFooter'
    export default {
        name:"zhucesuccess",
        components:{
            zhuceHeader,
            zhucesuccessContent,
            zhuceFooter
        }
    }
</script>

<style scoped>
    *{
        padding: 0;
        margin: 0;
    }
    .success-box{
        background: #f2f2f2;
        align-items: center;
        margin: 0 auto;
    }
    .kong{
        width: 1100px;
        height: 30px;
        background: #f2f2f2;
    }

</style>