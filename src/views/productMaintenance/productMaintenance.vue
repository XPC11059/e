<!--产品维护-->
<template>
    <div class="product">
        <div class="nav">
            <div class="act">进口药品</div>
            <div>中（草）药、饮片、参茸</div>
            <div>保健食品</div>
            <div>医疗器械及其他</div>
            <div>其他商品</div>
            <div>处方药</div>
            <div>非处方药</div>
            <div>其他</div>
            <div>玻璃仪器</div>
            <div>化学试剂</div>
            <div>消毒用品</div>
            <div>日用品</div>
        </div>
        <div class="inquiry">
            <div class="inquiry-left">
                <div class="act">进口非处方药</div>
                <div>进口处方药</div>
            </div>
            <div class="inquiry-right">
                <input type="text">
                <div>查询</div>
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

        <div class="operation">
            <div>商品设置</div>
            <div>保存</div>
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
                        :width="column.width"
                        :filters="column.filters"
                        :filter-method="column.func"
                        filter-placement="bottom-end"
                        :key="column.label">
                </el-table-column>
            </template>
        </el-table>
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
                    label: '序号'
                }, {
                    prop: 'area',
                    label: '商品编号'
                }, {
                    prop: 'area',
                    label: '产品名称'
                }, {
                    prop: 'area',
                    label: '产品规格'
                }, {
                    prop: 'area',
                    label: '厂家'
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
                    label: '序号'
                }, {
                    prop: 'area',
                    label: '商品编码'
                }, {
                    prop: 'area',
                    label: '批号'
                }, {
                    prop: 'area',
                    label: '库存'
                }, {
                    prop: 'area',
                    label: '有效期至'
                }, {
                    prop: 'area',
                    label: '颜色'
                }, {
                    prop: 'area',
                    label: '尺码'
                }, {
                    prop: 'area',
                    label: '货位号'
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
        },
        created() {

        },
        mounted() {

        }
    }
</script>
<style lang="scss" scoped>
    @import "~@/styles/themes";
    .product{
        font-size: 14px;
    }
    .nav{
        background-color: #C1C0C9;
        padding: 10px 20px 0 20px;
        overflow: hidden;
        div{
            padding: 0 10px;
            height: 32px;
            line-height: 32px;
            float: left;
            background-color: #fff;
            color: #4A4A4A;
            margin-right: 10px;
            cursor: pointer;
            margin-bottom: 10px;
        }
        .act{
            background-color: $theme-color;
            color: #fff;
        }
    }
    .inquiry{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        background-color: #fff;
        .inquiry-left{
            display: flex;
            align-items: center;
            div{
                padding: 0 10px;
                height: 32px;
                line-height: 32px;
                border: 1px solid #E9E9E9;
                margin-right: 20px;
                cursor: pointer;
                box-sizing: border-box;
            }
            .act{
                border: 1px solid $theme-color;
                color: $theme-color;
            }
        }
        .inquiry-right{
            display: flex;
            align-items: center;
            input{
                height: 30px;
                border: 1px solid #E9E9E9;
                width: 294px;
                margin-right: 20px;
            }
            div{
                width: 80px;
                height: 32px;
                line-height: 32px;
                background-color: $theme-color;
                color: #fff;
                cursor: pointer;
                border-radius: 32px;
            }
        }
    }

    .operation{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        div:nth-child(1) {
            height: 32px;
            line-height: 32px;
            padding: 0 10px;
            background-color: $theme-color;
            color: #fff;
        }
        div:nth-child(2) {
            width: 80px;
            height: 32px;
            line-height: 32px;
            border-radius: 32px;
            background-color: $theme-color;
            color: #fff;
            cursor: pointer;
        }
    }
</style>
