<!--快速退货入库-->
<template>
    <div class="" style="font-size: 14px">
        <div class="header">
            <span>快递单号</span>
            <input type="text">
            <div class="btn">查询</div>
            <div class="btn">退货入库</div>
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
                    <!--<el-table-column-->
                            <!--:prop="column.prop"-->
                            <!--:label="column.label"-->
                            <!--:width="column.width"-->
                            <!--v-if="column.operation"-->
                            <!--:key="column.label">-->
                        <!--<template slot-scope="scope">-->
                            <!--<input type="text" ref="inputRef" @change="column.operation.func(scope)" :value="scope.row[column.prop]">-->
                        <!--</template>-->
                    <!--</el-table-column>-->
                    <!--没有操作的列-->
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
        <div class="header">
            <span>商品编号</span>
            <input type="text">
            <div class="btn">查询</div>
            <div class="btn">退货入库</div>
            <div class="btn">快速出库</div>
        </div>
        <footer>
            <div class="footer-right">
                <div class="title">买家留言</div>
                <div class="content">买家留言买家留言买家留言</div>
                <div class="title">客服备注</div>
                <div class="content">客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注客服备注</div>
            </div>
            <div class="footer-left">
                <div class="content">
                    <el-table
                            :data="tableData"
                            tooltip-effect="dark"
                            :cell-style="cellFn"
                            :header-cell-style="headerFn"
                            border
                            height="260">
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

    export default {
        name: 'home',
        components: {},
        data() {
            return {
                columns: [{
                    prop: 'num',
                    label: '序号',
                    width: 72
                }, {
                    prop: 'area',
                    label: '问题单编号',
                    width: 115
                }, {
                    prop: 'area',
                    label: '买家ID',
                    width: 82
                }, {
                    prop: 'area',
                    label: '退回快递单编号',
                    width: 200
                }, {
                    prop: 'area',
                    label: '发货快递单号',
                    width: 200
                }, {
                    prop: 'area',
                    label: '退货状态',
                    width: 82
                }, {
                    prop: 'area',
                    label: '收货人',
                    width: 82
                }, {
                    prop: 'area',
                    label: '买家地址',
                    width: 200
                },  {
                    prop: 'area',
                    label: '手机号',
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
                    label: '商品名称',
                    width: 160
                }, {
                    prop: 'area',
                    label: '商品编号',
                    width: 115
                }, {
                    prop: 'area',
                    label: '规格',
                    width: 84
                }, {
                    prop: 'area',
                    label: '实退到货数量',
                    width: 72
                }, {
                    prop: 'area',
                    label: '正品数',
                    width: 82
                }, {
                    prop: 'area',
                    label: '次品数',
                    width: 82
                }]
            }
        },
        methods: {
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
            checkFn() {
                this.dialogVisible = true
            }
        },
        created() {

        },
        mounted() {

        }
    }
</script>
<style lang="scss" scoped>
    @import "~@/styles/themes";
    .header{
        border-top: 1px solid #ccc;
        background-color: #fff;
        padding: 10px 15px;
        font-size: 14px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        input{
            height: 30px;
            width: 300px;
            border: 1px solid $border-color;
            margin: 0 20px;
        }
        .btn{
            width: 80px;
            height: 30px;
            line-height: 30px;
            color: #fff;
            background-color: $theme-color;
            cursor: pointer;
            margin-right: 20px;
            border-radius: 30px;
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
                height: 260px;
                border-right: 1px solid #ccc;
            }
        }
    }
</style>
