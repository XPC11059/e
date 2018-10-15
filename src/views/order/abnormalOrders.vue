<!--异常订单-->
<template>
    <div class="" style="font-size: 14px">
        <div class="content">
            <div class="item">
                <span>日期类型</span>
                <select name="" id="" v-model="dateType" class="select">
                    <option value="全部">全部</option>
                    <option value="下单时间">下单时间</option>
                    <option value="付款时间">付款时间</option>
                </select>
            </div>
            <div class="item">
                <span>开始时间</span>
                <el-date-picker
                        class="select"
                        size="mini"
                        prefix-icon="none_icon"
                        v-model="startTime"
                        type="datetime"
                        placeholder="选择日期时间">
                </el-date-picker>
            </div>
            <div class="item">
                <span>结束时间</span>
                <el-date-picker
                        class="select"
                        size="mini"
                        prefix-icon="none_icon"
                        v-model="endTime"
                        type="datetime"
                        placeholder="选择日期时间">
                </el-date-picker>
            </div>
            <div class="item">
                <span>付款状态</span>
                <select name="" id="" class="select">
                    <option value="全部">全部</option>
                    <option value="已付款">已付款</option>
                    <option value="未付款">未付款</option>
                </select>
            </div>
            <div class="item">
                <span>平台名称</span>
                <select name="" id="" class="select">
                    <option value="全部">全部</option>
                    <option value="京东">京东</option>
                    <option value="天猫">天猫</option>
                    <option value="融e购">融e购</option>
                    <option value="E健康生活馆">E健康生活馆</option>
                    <option value="微商城">微商城</option>
                    <option value="苏宁易购">苏宁易购</option>
                </select>
            </div>
        </div>

        <div class="footer">
            <div class="condition">
                <div class="item">
                    <div class="item-left">条件</div>
                    <select name="" id="" class="item-right">
                        <option value="平台订单编号">平台订单编号</option>
                        <option value="订单编号">订单编号</option>
                        <option value="买家ID">买家ID</option>
                        <option value="收货人">收货人</option>
                        <option value="收货人手机">收货人手机</option>
                        <option value="快递单号">快递单号</option>
                        <option value="条形码(商品编码)">条形码(商品编码)</option>
                        <option value="商品名称">商品名称</option>
                        <option value="客服备注">客服备注</option>
                        <option value="买家留言">买家留言</option>
                    </select>
                </div>
                <div class="item">
                    <select name="" id="" class="item-left">
                        <option value="">等于</option>
                        <option value="">不等于</option>
                        <option value="">包含</option>
                        <option value="">不包含</option>
                    </select>
                    <input type="text" class="item-right">
                </div>
            </div>
            <div class="btn-box">
                <div class="btn">查询</div>
            </div>
        </div>

        <!--按钮操作部分-->
        <div class="btns">
            <div class="btns-left">
                <div class="common-btn">重新匹配</div>
                <div class="common-btn">导入订单</div>
            </div>
            <div class="btns-right">
                <div class="common-btn btn2">删除</div>
            </div>
        </div>

        <!--表格-->
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
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'home',
        components: {},
        data() {
            return {
                dateType: '',
                startTime: '',
                endTime: '',
                state: 0,
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
                    label: '异常原因',
                    width: 82
                }, {
                    prop: 'area',
                    label: '买家ID',
                    width: 82
                }, {
                    prop: 'area',
                    label: '收货人',
                    width: 72
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
                    label: '买家留言'
                },{
                    prop: 'area',
                    label: '客服备注'
                },{
                    prop: 'area',
                    label: '付款状态'
                }, {
                    prop: 'area',
                    label: '发货状态'
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
            //
            detailFn(val) {
                this.state = val
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
    .content{
        background-color: rgba(249, 249, 249, 0.59);
        padding: 10px 10px 0 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        .item{
            width: calc(20% - 5px);
            height: 40px;
            /*background-color: #fff;*/
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            margin-right: 5px;
            color: #4A4A4A;
            span{
                width: calc(100% / 3 - 5px);
                height: 30px;
                line-height: 30px;
                display: inline-block;
                font-size: 14px;
                text-align: center;
            }
            .select{
                width: calc(100% / 3 * 2);
                height: 30px;
                font-size: 12px;
            }
        }
    }
    .footer{
        background-color: rgba(249, 249, 249, 0.59);
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 30px;
        padding: 0 10px 10px 10px;
        .condition{
            display: flex;
            align-items: center;
            width: 80%;
            .item{
                width: calc(25% - 5px);
                margin-right: 5px;
                height: 30px;
                display: flex;
                align-items: center;
                .item-left{
                    width: calc(100% / 3 - 5px);
                    height: 30px;
                    line-height: 30px;
                    font-size: 14px;
                    text-align: right;
                    margin-right: 5px;
                }
                .item-right{
                    width: calc(100% / 3 * 2);
                    height: 30px;
                    font-size: 12px;
                }
            }
        }
    }
    select{
        font-size: 12px !important;
    }
    .btn-box{
        width: calc(20% - 5px);
        .btn{
            width: 140px;
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            color: #fff;
            border-radius: 140px;
            background-color: $theme-color;
            cursor: pointer;
            float: right;
        }
    }


    @media only screen and (max-width: 1220px) {
        .content{
            .item {
                width: calc(25% - 5px);
            }
        }
    }
    .none_icon{
        display: none;
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
            width: 80px;
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
</style>
