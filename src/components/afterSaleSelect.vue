<template>
    <div class="" style="width: 100%">
        <div class="content">
            <div class="item">
                <span>时间类型</span>
                <select name="" id="" v-model="dateType" class="select">
                    <option value="123">全部</option>
                    <option value="12323">申请时间</option>
                    <option value="123323223">处理时间</option>
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
                <span>平台名称</span>
                <select name="" id="" class="select">
                    <option value="">123</option>
                    <option value="">12323</option>
                    <option value="">123323223</option>
                </select>
            </div>
            <div class="item">
                <span>退货状态</span>
                <select name="" id="" class="select">
                    <option value="">123</option>
                    <option value="">12323</option>
                    <option value="">123323223</option>
                </select>
            </div>
            <div class="item">
                <span>退款状态</span>
                <select name="" id="" class="select">
                    <option value="">123</option>
                    <option value="">12323</option>
                    <option value="">123323223</option>
                </select>
            </div>
            <div class="item">
                <span>售后类型</span>
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
                    <select name="" id="" class="item-left">
                        <option value="">平台订单编号</option>
                        <option value="">12323</option>
                        <option value="">123323223</option>
                    </select>
                    <input type="text" class="item-right">
                </div>
            </div>
            <div class="btns">
                <div class="btn">查询</div>
                <!--<div class="btn">导出</div>-->
            </div>
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
                dateType: 123
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
        background-color: rgba(249, 249, 249, 0.59);
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 30px;
        padding: 0 10px 10px 10px;
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
    .btns{
        display: flex;
        align-items: center;
        .btn:nth-child(1), .btn:nth-child(2) {
            width: 140px;
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            color: #fff;
            border-radius: 140px;
            background-color: $theme-color;
            cursor: pointer;
            margin-left: 20px;
        }
        .btn:nth-child(2){
            width: 80px;
            height: 32px;
            line-height: 32px;
            background-color: #21D3CE;
        }
    }
</style>
