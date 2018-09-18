<template>
    <div class="">
        <el-aside width="200px">
            <div class="name">四明E店保系统</div>
            <el-row>
            <el-col :span="24">
                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        background-color="#5C8CFF"
                        text-color="#fff"
                        active-text-color="#FAFF52"
                        unique-opened
                        router>

                    <el-menu-item index="/">
                        <img src="@/assets/index.png" />
                        <span slot="title">首页</span>
                    </el-menu-item>

                    <el-submenu index="2">
                        <template slot="title">
                            <img src="@/assets/order.png" />
                            <span>订单</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/order/orderInquiry">
                                <div class="nav-box">
                                    <div class="nav-box-t"></div>
                                    <div class="nav-box-b"></div>
                                </div>
                                <div>订单查询</div>
                            </el-menu-item>
                            <el-menu-item index="/order/orderHandling">
                                <div class="nav-box">
                                    <div class="nav-box-t"></div>
                                    <div class="nav-box-b"></div>
                                </div>
                                <div>订单处理</div>
                            </el-menu-item>
                            <el-menu-item index="/order/orderPrint">
                                <div class="nav-box">
                                    <div class="nav-box-t"></div>
                                    <div class="nav-box-b"></div>
                                </div>
                                <div>订单打印</div>
                            </el-menu-item>
                            <el-menu-item index="/order/abnormalOrders">
                                <div class="nav-box">
                                    <div class="nav-box-t"></div>
                                </div>
                                <div>异常订单</div>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="3">
                        <template slot="title">
                            <img src="@/assets/product-maintenance.png" />
                            <span>产品维护</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/productMaintenance/productMaintenance">
                                <div class="nav-box">
                                    <div class="nav-box-t"></div>
                                    <div class="nav-box-b"></div>
                                </div>
                                <div>产品维护</div>
                            </el-menu-item>
                            <el-menu-item index="/productMaintenance/activity">
                                <div class="nav-box">
                                    <div class="nav-box-t"></div>
                                </div>
                                <div>活动设置</div>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="4">
                        <template slot="title">
                            <img src="@/assets/after-sale.png" />
                            <span>售后</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/afterSale/quickSalesReturn">
                                <div class="nav-box">
                                    <div class="nav-box-t"></div>
                                    <div class="nav-box-b"></div>
                                </div>
                                <div>快速退货入库</div>
                            </el-menu-item>
                            <el-menu-item index="/afterSale/afterSaleEnquiry">
                                <div class="nav-box">
                                    <div class="nav-box-t"></div>
                                    <div class="nav-box-b"></div>
                                </div>
                                <div>售后单查询</div>
                            </el-menu-item>
                            <el-menu-item index="/afterSale/shipped">
                                <div class="nav-box">
                                    <div class="nav-box-t"></div>
                                    <div class="nav-box-b"></div>
                                </div>
                                <div>已发货退货退款</div>
                            </el-menu-item>
                            <el-menu-item index="/afterSale/unshipped">
                                <div class="nav-box">
                                    <div class="nav-box-t"></div>
                                </div>
                                <div>未发货仅退款</div>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
        </el-aside>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'home',
        components: {},
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
    .name{
        width: 100%;
        height: 60px;
        line-height: 60px;
        color: #fff;
        font-size: 20px;
        border-bottom: 1px solid #fff;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .el-menu-item{
        display: flex;
        align-items: center;
        font-size: 18px;
        img{
            margin: 0 20px 0 10px;
        }
        padding-right: 0 !important;
    }

    .el-menu-item:hover{
        background-color: #5C8CFF !important;
    }
    .el-menu-item-group{
        .el-menu-item{
            font-size: 16px;
        }
        .nav-box{
            height: 100%;
            width: 20px;
            margin-right: 14px;
            .nav-box-t, .nav-box-b{
                height: 50%;
                border-left: 1px solid #fff;
                box-sizing: border-box;
            }
            .nav-box-t{
                border-bottom: 1px solid #fff;
            }
        }
    }
</style>
