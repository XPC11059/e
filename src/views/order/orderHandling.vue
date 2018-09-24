<!--订单处理-->
<template>
    <div class="container">
        <div class="nav-bar">
            <div class="nav-bar-btn" :class="{'act' : state === 0}" @click="tabFn(0)">待审核</div>
            <div class="nav-bar-btn" :class="{'act' : state === 1}" @click="tabFn(1)">已审核</div>
            <div class="nav-bar-btn" :class="{'act' : state === 2}" @click="tabFn(2)">未付款</div>
            <div class="nav-bar-btn" :class="{'act' : state === 3}" @click="tabFn(3)">截单</div>
        </div>

        <orderSelect></orderSelect>
        <!--按钮操作部分-->
        <div class="btns">
            <div class="btns-left">
                <div class="common-btn">挂起</div>
                <div class="common-btn">解挂</div>
                <div class="common-btn">删除</div>
            </div>
            <div class="btns-right">
                <div class="common-btn btn1">反确认</div>
                <div class="common-btn btn2" @click="checkFn">确认审核</div>
                <div class="common-btn btn3">导出</div>
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


        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%">
            <span>确定审核吗？</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
    // @ is an alias to /src
    import orderSelect from '@/components/orderSelect'

    export default {
        name: 'home',
        components: {
            orderSelect
        },
        data() {
            return {
                dialogVisible: false,
                state: 0,
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
                    label: '处理状态',
                    width: 82
                }, {
                    prop: 'area',
                    label: '付款状态',
                    width: 82
                }, {
                    prop: 'area',
                    label: '收货人',
                    width: 72
                }, {
                    prop: 'area',
                    label: '买家留言',
                    width: 82
                }, {
                    prop: 'area',
                    label: '客户留言',
                    width: 82
                }, {
                    prop: 'area',
                    label: '快递公司',
                    width: 82
                }, {
                    prop: 'province',
                    label: '省',
                    filters: [{ text: '浙江省', value: '浙江省' }, { text: '江苏省', value: '江苏省' }],
                    func: this.provinceTag
                }, {
                    prop: 'city',
                    label: '市',
                    filters: [{ text: '杭州市', value: '杭州市' }, { text: '宁波市', value: '宁波市' }, { text: '苏州市', value: '苏州市' }],
                    func: this.cityTag
                }, {
                    prop: 'area',
                    label: '详细地址'
                }, {
                    prop: 'area',
                    label: '联系电话'
                }, {
                    prop: 'area',
                    label: '订单编号'
                }, {
                    prop: 'area',
                    label: '用户ID'
                }, {
                    prop: 'area',
                    label: '外部平台名称',
                    width: 120,
                    operation: {
                        label: '编辑',
                        func: this.disableTag
                    }
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
                }]
            }
        },
        methods: {
            // tabbar状态切换
            tabFn(val) {
                this.state = val
            },
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

    .container {
        font-size: 14px;
    }

    .nav-bar {
        height: 50px;
        background-color: #C1C0C9;
        display: flex;
        align-items: center;
        padding-left: 15px;
        .nav-bar-btn {
            width: 80px;
            height: 32px;
            line-height: 32px;
            color: #4A4A4A;
            background-color: #fff;
            margin-right: 20px;
            cursor: pointer;
            box-sizing: border-box;
        }
        .act {
            color: #fff;
            background-color: $theme-color;
        }
    }
    .btns{
        background-color: #fff;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .btns-left, .btns-right{
        display: flex;
        align-items: center;
    }
    .btns-left{
        .common-btn{
            width: 60px;
            border-radius: 32px;
            height: 32px;
            line-height: 32px;
            font-size: 14px;
            color: $theme-color;
            border: 1px solid $theme-color;
            cursor: pointer;
            margin-left: 20px;
        }
    }
    .btns-right{
        .btn1, .btn2, .btn3{
            height: 32px;
            line-height: 32px;
            cursor: pointer;
            margin-right: 15px;
        }
        .btn1{
            width: 70px;
            color: $theme-color;
            border: 1px solid $theme-color;
            box-sizing: border-box;
            border-radius: 16px;
        }
        .btn2{
            width: 80px;
            background-color: $theme-color;
            color: #fff;
            border-radius: 16px;
        }
        .btn3{
            width: 80px;
            background-color: #21D3CE;
            color: #fff;
            border-radius: 6px;
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
