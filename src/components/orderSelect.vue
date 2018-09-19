<template>
    <div class="">
        <div class="content">
            <div class="item">
                <span>日期类型</span>
                <select name="" id="" v-model="dateType" class="select">
                    <option value="123">123</option>
                    <option value="12323">12323</option>
                    <option value="123323223">123323223</option>
                </select>
            </div>
            <div class="item">
                <span>开始时间</span>
                <select name="" id="" class="select">
                    <option value="">123</option>
                    <option value="">12323</option>
                    <option value="">123323223</option>
                </select>
            </div>
            <div class="item">
                <span>结束时间</span>
                <select name="" id="" class="select">
                    <option value="">123</option>
                    <option value="">12323</option>
                    <option value="">123323223</option>
                </select>
            </div>
            <div class="item">
                <span>异常状态</span>
                <select name="" id="" class="select">
                    <option value="">123</option>
                    <option value="">12323</option>
                    <option value="">123323223</option>
                </select>
            </div>
            <div class="item">
                <span>快递</span>
                <select name="" id="" class="select">
                    <option value="">123</option>
                    <option value="">12323</option>
                    <option value="">123323223</option>
                </select>
            </div>
            <div class="item">
                <span>付款状态</span>
                <select name="" id="" class="select">
                    <option value="">123</option>
                    <option value="">12323</option>
                    <option value="">123323223</option>
                </select>
            </div>
            <div class="item">
                <span>处理状态</span>
                <select name="" id="" class="select">
                    <option value="">123</option>
                    <option value="">12323</option>
                    <option value="">123323223</option>
                </select>
            </div>
            <div class="item">
                <span>打印状态</span>
                <select name="" id="" class="select">
                    <option value="">123</option>
                    <option value="">12323</option>
                    <option value="">123323223</option>
                </select>
            </div>
            <div class="item">
                <span>发货状态</span>
                <select name="" id="" class="select">
                    <option value="">123</option>
                    <option value="">12323</option>
                    <option value="">123323223</option>
                </select>
            </div>
            <div class="item">
                <span>货到付款</span>
                <select name="" id="" class="select">
                    <option value="">123</option>
                    <option value="">12323</option>
                    <option value="">123323223</option>
                </select>
            </div>
            <div class="item">
                <span>平台名称</span>
                <select name="" id="" class="select">
                    <option value="">123</option>
                    <option value="">12323</option>
                    <option value="">123323223</option>
                </select>
            </div>
            <div class="item">
                <span>挂起状态</span>
                <select name="" id="" class="select">
                    <option value="">123</option>
                    <option value="">12323</option>
                    <option value="">123323223</option>
                </select>
            </div>
            <div class="item">
                <span>收货状态</span>
                <select name="" id="" class="select">
                    <option value="">123</option>
                    <option value="">12323</option>
                    <option value="">123323223</option>
                </select>
            </div>
        </div>
        <div class="footer">
            <div class="condition">
                <div class="item">
                    <div class="item-left">条件</div>
                    <select name="" id="" class="select">
                        <option value="">平台订单编号</option>
                        <option value="">12323</option>
                        <option value="">123323223</option>
                    </select>
                </div>
                <div class="item">
                    <select name="" id="" class="item-left">
                        <option value="">等于</option>
                        <option value="">或者</option>
                    </select>
                    <input type="text" class="item-right">
                </div>
                <div class="item">
                    <select name="" id="" class="item-left">
                        <option value="">并且</option>
                        <option value="">或者</option>
                    </select>
                    <select name="" id="" class="select">
                        <option value="">平台订单编号</option>
                        <option value="">12323</option>
                        <option value="">123323223</option>
                    </select>
                </div>
                <div class="item">
                    <select name="" id="" class="item-left">
                        <option value="">等于</option>
                        <option value="">或者</option>
                    </select>
                    <input type="text" class="item-right">
                </div>
            </div>
            <div class="btn">查询</div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'home',
        components: {},
        data() {
            return {
                dateType: 12323
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
        padding: 10px 10px 0 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    .item{
        width: 220px;
        height: 40px;
        /*background-color: #fff;*/
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-right: 10px;
        color: #4A4A4A;
        span{
            width: 72px;
            height: 30px;
            line-height: 30px;
            display: inline-block;
            font-size: 14px;
            text-align: right;
        }
        .select{
            width: 140px;
            height: 30px;
            font-size: 12px;
        }
    }
    .footer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 30px;
        padding: 0 10px;
        .condition{
            display: flex;
            align-items: center;
            .item{
                height: 30px;
                .item-left{
                    width: 72px;
                    height: 30px;
                    line-height: 30px;
                    font-size: 14px;
                    text-align: right;
                }
                .item-right{
                    width: 140px;
                    height: 30px;
                    font-size: 12px;
                }
            }
        }
    }
    select{
        font-size: 12px !important;
    }
    .btn{
        width: 140px;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        color: #fff;
        border-radius: 140px;
        background-color: $theme-color;
    }
</style>
