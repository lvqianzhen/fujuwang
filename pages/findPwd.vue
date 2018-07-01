<template>
    <div>
        <zhuceHeader></zhuceHeader>
        <forgetMiddle></forgetMiddle>
        <zhuceFooter></zhuceFooter>
    </div>
</template>

<script>
    import zhuceHeader from '~/components/zhuce/zhuceHeader'
    import forgetMiddle from '~/components/forgetContent/forgetMiddle'
    import zhuceFooter from '~/components/zhuce/zhuceFooter'
    export default {
        name: "findPwd",
        components:{
            zhuceHeader,
            zhuceFooter,
            forgetMiddle
        }
    }
</script>

<style scoped>

</style>