<!--订单查询-->
<template>
    <div class="">
        <orderSelect></orderSelect>
        <!--按钮操作部分-->
        <!--<div class="btns">-->
            <!--<div class="btns-left">-->
                <!--<div class="common-btn">挂起</div>-->
                <!--<div class="common-btn">解挂</div>-->
                <!--<div class="common-btn">删除</div>-->
            <!--</div>-->
            <!--<div class="btns-right">-->
                <!--<div class="common-btn">反确认</div>-->
                <!--<div class="common-btn">确认审核</div>-->
                <!--<div class="common-btn">导出</div>-->
            <!--</div>-->
        <!--</div>-->
        <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                :cell-style="cellFn"
                :header-cell-style="headerFn"
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
                        v-if="column.operation">
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
                        v-else>
                </el-table-column>
            </template>
        </el-table>
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
            return {
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
                    width: 100
                }, {
                    prop: 'area',
                    label: '付款状态',
                    width: 100
                }, {
                    prop: 'area',
                    label: '收货人',
                    width: 100
                }, {
                    prop: 'area',
                    label: '买家留言',
                    width: 100
                }, {
                    prop: 'area',
                    label: '客户留言',
                    width: 100
                }, {
                    prop: 'area',
                    label: '快递公司',
                    width: 100
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
                    label: '收货人'
                }, {
                    prop: 'area',
                    label: '收货人'
                }, {
                    prop: 'area',
                    label: '收货人'
                }, {
                    prop: 'area',
                    label: '收货人'
                }, {
                    prop: 'area',
                    label: '收货人'
                }, {
                    prop: 'area',
                    label: '收货人',
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
                }]
            }
        },
        methods: {
            disableTag(scope) {
                console.log(scope);
                console.log(this.$refs.inputRef[scope.$index].value);
            },
            cityTag(value, row) {
                return row.city === value;
            },
            provinceTag(value, row) {
                console.log(value);
                // console.log(row);
                return row.province === value;
            },
            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value;
            },
            headerFn(row, column, rowIndex, columnIndex) {
                if (row.columnIndex === 0) {
                    return 'border: 1px solid #C1C0C9;background-color: #EBEBEB;height:20px'
                }
                return 'background-color: #EBEBEB;border-top: 1px solid #C1C0C9;border-right: 1px solid #C1C0C9;border-bottom: 1px solid #C1C0C9;height:20px'
            },
            cellFn(row) {
                if (row.columnIndex === 0) {
                    return 'border-left: 1px solid #C1C0C9;border-right: 1px solid #C1C0C9;border-bottom: 1px solid #C1C0C9'
                }
                return 'border-right: 1px solid #C1C0C9;border-bottom: 1px solid #C1C0C9'
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
    .btns{
        background-color: #fff;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .btns-left, .right{
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
        }
    }
</style>
