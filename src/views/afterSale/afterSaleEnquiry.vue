<!--售后单查询-->
<template>
    <div class="">
        <sel></sel>
        <div class="operation">
            <div class="operation-left">
                <!--<div>同意退货</div>-->
                <!--<div>拒绝退货</div>-->
                <!--<div>同意退款</div>-->
                <!--<div>拒绝退款</div>-->
                <!--<div>退货到货</div>-->
                <!--<div>拒绝收货</div>-->
            </div>
            <div class="operation-right">
                <div>导出</div>
            </div>
        </div>
        <!--表格-->
        <div style="border-bottom: 1px solid #ccc">
            <el-table
                    :data="tableData"
                    tooltip-effect="dark"
                    :cell-style="cellFn"
                    :header-cell-style="headerFn"
                    height="310"
                    border>
                <el-table-column v-if="true"
                                 type="selection"
                                 width="55">
                </el-table-column>

                <template v-for="column in columns">
                    <!--操作的列-->
                    <el-table-column
                            :prop="column.prop"
                            :label="column.label"
                            :width="column.width"
                            v-if="column.operation"
                            :key="column.label">
                        <template slot-scope="scope">
                            <input type="text" ref="inputRef" @change="column.operation.func(scope)" :value="scope.row[column.prop]">
                        </template>
                    </el-table-column>
                    <!--没有操作的列-->
                    <el-table-column
                            :prop="column.prop"
                            :label="column.label"
                            :width="column.width"
                            :filters="column.filters"
                            :filter-method="column.func"
                            filter-placement="bottom-end"
                            :key="column.label"
                            v-else>
                    </el-table-column>
                </template>
            </el-table>
        </div>

        <footer>
            <div class="footer-right">
                <div class="title">买家留言</div>
                <div class="content">买家留言买家留言买家留言</div>
                <div class="title">客服备注</div>
                <div class="content">客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注</div>
            </div>
            <div class="footer-left">
                <div class="title">
                    <div class="order-detail" :class="{ 'act'  : operaState === 0}" @click="detailFn(0)">订单明细</div>
                    <div class="operation-log" :class="{ 'act'  : operaState === 1}" @click="detailFn(1)">操作日志</div>
                </div>
                <div class="content">
                    <el-table
                            :data="tableData"
                            tooltip-effect="dark"
                            :cell-style="cellFn"
                            :header-cell-style="headerFn"
                            border
                            height="204">
                        <template v-for="column in orderDetailColumns">
                            <el-table-column
                                    :prop="column.prop"
                                    :label="column.label"
                                    :width="column.width"
                                    :filters="column.filters"
                                    :filter-method="column.func"
                                    filter-placement="bottom-end"
                                    :key="column.label">
                            </el-table-column>
                        </template>
                    </el-table>
                </div>
            </div>
        </footer>

    </div>
</template>

<script>
    // @ is an alias to /src
    import sel from '@/components/afterSaleSelect.vue'
    export default {
        name: 'home',
        components: {
            sel
        },
        data() {
            return {
                operaState: 0,
                columns: [{
                    prop: 'num',
                    label: '序号',
                    width: 72
                }, {
                    prop: 'area',
                    label: '平台订单编号',
                    width: 115
                }, {
                    prop: 'area',
                    label: '平台售后单编号',
                    width: 150
                }, {
                    prop: 'area',
                    label: '买家ID',
                    width: 82
                }, {
                    prop: 'area',
                    label: '退货原因',
                    width: 82
                }, {
                    prop: 'area',
                    label: '售后类型',
                    width: 82
                }, {
                    prop: 'area',
                    label: '退款状态',
                    width: 82
                }, {
                    prop: 'area',
                    label: '退货状态',
                    width: 82
                }, {
                    prop: 'area',
                    label: '付款时间',
                    width: 82
                }, {
                    prop: 'area',
                    label: '退回快递公司',
                    width: 115
                }, {
                    prop: 'area',
                    label: '退回快递单号',
                    width: 115
                }, {
                    prop: 'area',
                    label: '退款总金额',
                    width: 115
                }, {
                    prop: 'area',
                    label: '外部平台名称',
                    width: 115
                }, {
                    prop: 'area',
                    label: '问题单编号',
                    width: 115
                }],
                tableData: [{
                    num: 1,
                    company: '某某某',
                    area: '区域1',
                    province: '浙江省',
                    city: '宁波市',
                    district: '鄞州区'
                }, {
                    num: 2,
                    company: '某某某',
                    area: '区域1',
                    province: '浙江省',
                    city: '杭州市',
                    district: '滨江区'
                }, {
                    company: '某某某',
                    area: '区域2',
                    province: '江苏省',
                    city: '苏州市',
                    district: '昆山市'
                }, {
                    company: '某某某',
                    area: '区域2',
                    province: '江苏省',
                    city: '苏州市',
                    district: '昆山市'
                }],
                orderDetailColumns: [{
                    prop: 'num',
                    label: '序号',
                    width: 72
                }, {
                    prop: 'area',
                    label: '商品编码',
                    width: 160
                }, {
                    prop: 'area',
                    label: '商品名称',
                    width: 115
                }, {
                    prop: 'area',
                    label: '规格',
                    width: 84
                }, {
                    prop: 'area',
                    label: '报价',
                    width: 72
                }, {
                    prop: 'area',
                    label: '打折金额',
                    width: 82
                }, {
                    prop: 'area',
                    label: '数量',
                    width: 82
                }, {
                    prop: 'area',
                    label: '成交金额',
                    width: 82
                }, {
                    prop: 'area',
                    label: '成交单价',
                    width: 82
                }, {
                    prop: 'area',
                    label: '商品编号',
                    width: 112
                }]}
        },
        methods: {
            // 操作日志切换
            detailFn(val) {
                this.operaState = val
            },
            headerFn(row) {
                if (row.columnIndex === 0) {
                    return 'border: 1px solid #C1C0C9;background-color: #EBEBEB;height:30px;padding: 0;margin: 0;font-size: 14px;color: #4A4A4A;text-align: center'
                }
                return 'background-color: #EBEBEB;border-top: 1px solid #C1C0C9;border-right: 1px solid #C1C0C9;border-bottom: 1px solid #C1C0C9;height:30px;padding: 0;margin: 0;font-size: 14px;color: #4A4A4A;text-align: center'
            },
            cellFn(row) {
                if (row.columnIndex === 0) {
                    return 'border-left: 1px solid #C1C0C9;border-right: 1px solid #C1C0C9;border-bottom: 1px solid #C1C0C9;height:30px;padding: 0;'
                }
                return 'border-right: 1px solid #C1C0C9;border-bottom: 1px solid #C1C0C9;height:30px;padding: 0;'
            },
        },
        created() {

        },
        mounted() {

        }
    }
</script>
<style lang="scss" scoped>
    @import "~@/styles/themes";
    .operation{
        height: 50px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;
        .operation-left{
            display: flex;
            align-items: center;
            div:nth-child(1), div:nth-child(2), div:nth-child(3), div:nth-child(4), div:nth-child(5), div:nth-child(6) {
                height: 32px;
                width: 80px;
                border-radius: 32px;
                border: 1px solid $theme-color;
                font-size: 14px;
                line-height: 32px;
                color: $theme-color;
                margin-right: 20px;
                cursor: pointer;
            }
        }
        .operation-right{
            width: 80px;
            height: 32px;
            line-height: 32px;
            background-color: #21D3CE;
            color: #fff;
            border-radius: 32px;
            cursor: pointer;
        }
    }
    footer{
        width: 100%;
        height: 260px;
        overflow: hidden;
        .footer-left{
            margin-right: 320px;
        }
        .footer-right{
            float: right;
            width: 290px;
            height: 260px;
            padding-top: 14px;
            color: #4A4A4A;
            box-sizing: border-box;
            .title{
                height: 40px;
                line-height: 40px;
                text-align: left;
            }
            .content{
                height: 70px;
                width: 260px;
                border: 1px solid #979797;
                background-color: #fff;
                box-sizing: border-box;
                font-size: 12px;
                padding: 10px;
                text-align: left;
                overflow-x: hidden;
                overflow-y: scroll;
            }
            .content::-webkit-scrollbar {
                display: none;
            }
        }
        .footer-left{
            .title{
                display: flex;
                align-items: center;
                padding: 10px;
                .order-detail, .operation-log{
                    color: $theme-color;
                    width: 100px;
                    height: 32px;
                    line-height: 32px;
                    font-size: 14px;
                    border: 1px solid $theme-color;
                    cursor:pointer;
                    margin-right: 20px;
                }
                .act{
                    background-color: $theme-color;
                    color: #fff;
                }
            }
            .content{
                height: 210px;
                border-right: 1px solid #ccc;
            }
        }
    }
</style>
