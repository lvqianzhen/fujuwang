<template>
    <div>
        <zhuceHeader></zhuceHeader>
        <loginmiddle></loginmiddle>
        <zhuceFooter></zhuceFooter>
    </div>
</template>

<script>
    import zhuceHeader from '~/components/zhuce/zhuceHeader'
    import loginmiddle from '~/components/loginContent/loginmiddle'
    import zhuceFooter from '~/components/zhuce/zhuceFooter'
    export default {
        name: "login",
        components:{
            zhuceHeader,
            loginmiddle,
            zhuceFooter
        }
    }
</script>

<style scoped>

</style>