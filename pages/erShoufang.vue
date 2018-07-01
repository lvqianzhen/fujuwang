<template>
    <div class="headerOne-box">
        <headerOne></headerOne>
        <listRight></listRight>
        <headerWrapone></headerWrapone>
        <middleone></middleone>
    </div>
</template>

<script>
    import headerOne from '~/components/headerOne'
    import listRight from '~/components/listRight'
    import middleone from '~/components/middleone'
    import headerWrapone from '~/components/headerWrapone'
    export default {
        name: "erShoufang",
        head(){
            return{
                title:'二手房'
            }
        },
        components:{
            headerOne,
            listRight,
            headerWrapone,
            middleone
        }
    }
</script>

<style scoped>

</style>