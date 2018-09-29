<template>
    <div class="" style="width: 100%">
        <div class="content">
            <div class="item" v-if="comType === 'enquiry'">
                <span>订单时期</span>
                <select name="" id="" v-model="orderTime" class="select">
                    <option value="一个月内订单">一个月内订单</option>
                    <option value="一周内订单">一周内订单</option>
                    <option value="半年内订单">半年内订单</option>
                </select>
            </div>
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
                <span>异常状态</span>
                <select name="" id="" class="select">
                    <option value="全部">全部</option>
                    <option value="异常">异常</option>
                    <option value="正常">正常</option>
                </select>
            </div>
            <div class="item">
                <span>快递</span>
                <select name="" id="" class="select">
                    <option value="全部">全部</option>
                    <option value="申通">申通</option>
                    <option value="中通">中通</option>
                    <option value="顺丰">顺丰</option>
                </select>
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
                <span>处理状态</span>
                <select name="" id="" class="select">
                    <option value="全部">全部</option>
                    <option value="已审核">已审核</option>
                    <option value="未审核">未审核</option>
                    <option value="已作废">已作废</option>
                </select>
            </div>
            <div class="item">
                <span>打印状态</span>
                <select name="" id="" class="select">
                    <option value="全部">全部</option>
                    <option value="已打印">已打印</option>
                    <option value="未打印">未打印</option>
                </select>
            </div>
            <div class="item">
                <span>发货状态</span>
                <select name="" id="" class="select">
                    <option value="全部">全部</option>
                    <option value="已发货">已发货</option>
                    <option value="未发货">未发货</option>
                </select>
            </div>
            <div class="item">
                <span>货到付款</span>
                <select name="" id="" class="select">
                    <option value="全部">全部</option>
                    <option value="非货到付款">非货到付款</option>
                    <option value="货到付款">货到付款</option>
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
            <div class="item">
                <span>挂起状态</span>
                <select name="" id="" class="select">
                    <option value="全部">全部</option>
                    <option value="已挂起">已挂起</option>
                    <option value="未挂起">未挂起</option>
                </select>
            </div>
            <div class="item">
                <span>收货状态</span>
                <select name="" id="" class="select">
                    <option value="全部">全部</option>
                    <option value="已收货">已收货</option>
                    <option value="未收货">未收货</option>
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
                <div class="item">
                    <select name="" id="" class="item-left">
                        <option value="">并且</option>
                        <option value="">或</option>
                    </select>
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
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'home',
        components: {},
        props: {
            comType: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                dateType: '全部',
                orderTime: '一个月内订单',
                startTime: '',
                endTime: ''
            }
        },
        methods: {
            test() {
                console.log(this.dateType);
            }
        },
        created() {

        },
        mounted() {

        }
    }
</script>
<style lang="scss" scoped>
    @import "~@/styles/themes.scss";
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
</style>
