<!--订单查询-->
<template>
    <div class="">
        <orderSelect></orderSelect>
    </div>
</template>

<script>
    // @ is an alias to /src
    import orderSelect from '@/components/orderSelect'
    export default {
        name: 'orderInquiry',
        components: {
            orderSelect
        },
        data() {
            return {}
        },
        methods: {},
        created() {

        },
        mounted() {

        }
    }
</script>
<style lang="scss" scoped>
    @import "~@/styles/themes";
</style>
