<template>
    <div>
        <zhuceHeader></zhuceHeader>
        <bindingMiddle></bindingMiddle>
        <zhuceFooter></zhuceFooter>
        <!--<middletwo></middletwo>-->
    </div>
</template>

<script>
    // import middletwo from '~/components/middletwo'
    import zhuceHeader from '~/components/zhuce/zhuceHeader'
    import bindingMiddle from '~/components/bangding/bindingMiddle'
    import zhuceFooter from '~/components/zhuce/zhuceFooter'
    export default {
        name: "binding",
        components:{
            // middletwo,
            zhuceHeader,
            zhuceFooter,
            bindingMiddle
        }
    }
</script>

<style scoped>

</style>