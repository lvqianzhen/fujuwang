<template>
    <div>
        <zhuceHeader></zhuceHeader>
        <xieyiContent></xieyiContent>
        <zhuceFooter></zhuceFooter>
    </div>
</template>

<script>
    import zhuceHeader from '~/components/zhuce/zhuceHeader'
    import xieyiContent from '~/components/zhucexieyi/xieyiContent'
    import zhuceFooter from '~/components/zhuce/zhuceFooter'
    export default {
        name: "zhucexieyi",
        components:{
            zhuceHeader,
            xieyiContent,
            zhuceFooter
        }
    }
</script>

<style scoped>

</style>