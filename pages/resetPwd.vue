<template>
    <div>
        <zhuceHeader></zhuceHeader>
        <resetpwdMiddle></resetpwdMiddle>
        <zhuceFooter></zhuceFooter>
    </div>
</template>

<script>
    import zhuceHeader from '~/components/zhuce/zhuceHeader'
    import resetpwdMiddle from '~/components/resetpwdContent/resetpwdMiddle'
    import zhuceFooter from '~/components/zhuce/zhuceFooter'
    export default {
        name: "resetPwd",
        components:{
            zhuceHeader,
            resetpwdMiddle,
            zhuceFooter
        }
    }
</script>

<style scoped>

</style>