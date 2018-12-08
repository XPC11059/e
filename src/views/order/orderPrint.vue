<!--订单打印-->
<template>
    <div class="">
        <orderSelect></orderSelect>

        <div class="operation">
            <div class="operation-left"></div>
            <div class="operation-right">
                <div class="btn1" @click="markingPrinterFn">标记打印</div>
                <div class="btn1" @click="predistributionFn">预分配单号</div>
                <div class="btn2">打印快递单</div>
                <div class="btn2">打印发货单</div>
            </div>
        </div>

        <footer>
            <div class="title">
                <div class="order-detail" :class="{ 'act'  : state === 0}" @click="detailFn(0)">订单明细</div>
                <div class="operation-log" :class="{ 'act'  : state === 1}" @click="detailFn(1)">操作日志</div>
            </div>
            <el-table
                    :data="tableData"
                    tooltip-effect="dark"
                    :cell-style="cellFn"
                    :header-cell-style="headerFn"
                    height="204"
                    border>
                <template v-for="column in orderDetailColumns">
                    <el-table-column
                            :prop="column.prop"
                            :label="column.label"
                            :filters="column.filters"
                            :filter-method="column.func"
                            filter-placement="bottom-end"
                            :key="column.label">
                    </el-table-column>
                </template>
            </el-table>
        </footer>


        <!--预分配单号-->
        <el-dialog
                title="预分配单号"
                :visible.sync="predistribution"
                width="380px">
            <div class="predistribution-item">
                <span>物流公司</span>
                <select name="" id="">
                    <option value="申通">申通</option>
                    <option value="圆通">圆通</option>
                    <option value="顺丰">顺丰</option>
                </select>
            </div>
            <div class="predistribution-item">
                <span>快件种类</span>
                <select name="" id="">
                    <option value="标准快件">标准快件</option>
                    <option value="次日达">次日达</option>
                    <option value="当日达">当日达</option>
                </select>
            </div>
            <div class="predistribution-item">
                <span>付款方式</span>
                <select name="" id="">
                    <option value="月结">月结</option>
                    <option value="包月">包月</option>
                    <option value="年费">年费</option>
                </select>
            </div>
            <div class="predistribution-item">
                <span>发货人地址</span>
                <select name="" id="">
                    <option value="地址1">地址1</option>
                    <option value="地址2">地址2</option>
                </select>
            </div>
            <div class="predistribution-btn">开始分配</div>
            <div class="predistribution-tip">预分配单号进行中……</div>
            <div class="predistribution-tip">预分配单号完成</div>
            <div class="predistribution-detail">
                <div>正在预分配单号……</div>
                <div>当前时间：2018-08-22  12：22</div>
                <div>当前发货人地址：</div>
                <div>鄞州区学士路</div>
                <div>订单数量：20</div>
            </div>
        </el-dialog>

        <!--标记打印-->
        <el-dialog
                title="标记打印提示"
                :visible.sync="marking_printer"
                width="30%">
            <span>是否标记打印？</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="marking_printer = false">取 消</el-button>
    <el-button type="primary" @click="marking_printer = false">确 定</el-button>
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
                predistribution: false,
                marking_printer: false,
                state: 0,
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
            detailFn(val) {
                this.state = val
            },
            // 预分配
            predistributionFn() {
                this.predistribution = true;
            },
            // 标记打印
            markingPrinterFn() {
                this.marking_printer = true;
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
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        background-color: #fff;
        .operation-right{
            display: flex;
            align-items: center;
            .btn1{
                padding: 0 10px;
                height: 30px;
                line-height: 30px;
                color: $theme-color;
                border-radius: 30px;
                border: 1px solid $theme-color;
                cursor: pointer;
                margin-left: 20px;
            }
            .btn2{
                padding: 0 10px;
                background-color: $theme-color;
                height: 32px;
                line-height: 32px;
                border-radius: 32px;
                color: #fff;
                cursor: pointer;
                margin-left: 20px;
            }
        }
    }


    footer{
        .title{
            display: flex;
            align-items: center;
            padding: 10px;
            border-top: 1px solid #ccc;
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
    }

    .predistribution-item{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 14px;
        span{
            width: 80px;
            display: inline-block;
            text-align: left;
        }
        select{
            width: 240px;
        }
    }
    .predistribution-btn{
        width: 140px;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        color: #fff;
        border-radius: 140px;
        background-color: #54BEFF;
        cursor: pointer;
        margin: 0 auto;
    }
    .predistribution-tip{
        width: 100%;
        height: 30px;
        line-height: 30px;
        margin-top: 20px;
        border: 1px solid $border-color;

    }
    .predistribution-detail{
        margin-top: 10px;
        text-align: left;
        div{
            margin-top: 4px;
        }
    }
</style>
