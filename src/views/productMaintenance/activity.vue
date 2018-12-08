<!--活动设置-->
<template>
    <div class="">
        <div class="nav">
            <div class="nav-btn1" :class="{'act': state === 1}" @click="navClick(1)">购物送</div>
            <div class="nav-btn2" :class="{'act': state === 2}" @click="navClick(2)">满减活动</div>
            <div class="nav-btn3" :class="{'act': state === 3}" @click="navClick(3)">套餐活动</div>
            <div class="nav-btn4" :class="{'act': state === 4}" @click="navClick(4)">限名额活动</div>
        </div>

        <div class="inquiry">
            <div class="inquiry-left">
                <div class="inquiry-select" @click="storeTypeFn('京东')" :class="{'act': storeType === '京东'}">京东</div>
                <div class="inquiry-select" @click="storeTypeFn('天猫')" :class="{'act': storeType === '天猫'}">天猫</div>
                <div class="inquiry-select" @click="storeTypeFn('融e购')" :class="{'act': storeType === '融e购'}">融e购</div>
                <div class="inquiry-select" @click="storeTypeFn('苏宁易购')" :class="{'act': storeType === '苏宁易购'}">苏宁易购</div>
                <div class="inquiry-select" @click="storeTypeFn('E健康生活馆')" :class="{'act': storeType === 'E健康生活馆'}">E健康生活馆</div>
                <div class="inquiry-select" @click="storeTypeFn('微商城')" :class="{'act': storeType === '微商城'}">微商城</div>
            </div>
            <div class="inquiry-right">
                <input type="text">
                <div class="btn">查询</div>
            </div>
        </div>
        <div style="padding: 16px;box-sizing: border-box;">
            <!--购物送-->
            <div v-if="state === 1">
                <div class="content">
                    <div class="condition">
                        <div class="condition-common">
                            <div class="label" style="width: 30px">买</div>
                            <input type="text" style="width: 22%">
                            <div class="search-btn" @click="goodChooseFn">搜索商品</div>
                            <div class="label">满</div>
                            <input type="text" style="width: 10%">
                            <select name="" id="" v-model="type" class="select">
                                <option value="jian">件</option>
                                <option value="yuan">元</option>
                            </select>
                            <div class="label">送</div>
                            <input type="text" style="width: 40%">
                        </div>
                        <div class="condition-common condition-1">
                            <div class="label" style="width: 30px">或送</div>
                            <input type="text" style="width: 22%">
                            <div class="search-btn" @click="goodChooseFn">搜索商品</div>
                            <img src="@/assets/add.png" alt="">
                            <input type="text" style="width: 22%">
                            <div class="search-btn" @click="goodChooseFn">搜索商品</div>
                            <img src="@/assets/add.png" alt="">
                            <input type="text" style="width: 22%">
                            <div class="search-btn" @click="goodChooseFn">搜索商品</div>
                        </div>
                    </div>
                    <div class="subtract">
                        <img src="@/assets/subtract.png" alt="">
                    </div>
                </div>
            </div>
            <!--套餐活动-->
            <div v-if="state === 2">
                <div class="content">
                    <div class="condition">
                        <div class="condition-common">
                            <div class="label" style="width: 50px">全场满</div>
                            <input type="text" style="width: 10%">
                            <select name="" id="" v-model="type" class="select">
                                <option value="jian">件</option>
                                <option value="yuan">元</option>
                            </select>
                            <div class="label">送</div>
                            <input type="text" style="width: 40%">
                        </div>
                        <div class="condition-common condition-1">
                            <div class="label" style="width: 50px">或送</div>
                            <input type="text" style="width: 22%">
                            <div class="search-btn" @click="goodChooseFn">搜索商品</div>
                            <img src="@/assets/add.png" alt="">
                            <input type="text" style="width: 22%">
                            <div class="search-btn" @click="goodChooseFn">搜索商品</div>
                        </div>
                    </div>
                    <div class="subtract">
                        <img src="@/assets/subtract.png" alt="">
                    </div>
                </div>
            </div>
            <!--全场满减活动-->
            <div v-if="state === 3">
                <div class="content">
                    <div class="condition">
                        <div class="condition-common">
                            <div class="label" style="width: 30px">买</div>
                            <input type="text" style="width: 22%">
                            <div class="search-btn" @click="goodChooseFn">搜索商品</div>
                            <img src="@/assets/add.png" alt="">
                            <input type="text" style="width: 22%">
                            <div class="search-btn" @click="goodChooseFn">搜索商品</div>
                            <img src="@/assets/add.png" alt="">
                            <div class="label">满</div>
                            <input type="text" style="width: 10%">
                            <select name="" id="" v-model="type" class="select">
                                <option value="jian">件</option>
                                <option value="yuan">元</option>
                            </select>
                        </div>
                        <div class="condition-common condition-1">
                            <div class="label" style="width: 30px">送</div>
                            <input type="text" style="width: 22%">
                            <div class="label" style="width: 33px">或送</div>
                            <input type="text" style="width: 22%">
                            <div class="search-btn" @click="goodChooseFn">搜索商品</div>
                            <img src="@/assets/add.png" alt="">
                            <input type="text" style="width: 22%">
                            <div class="search-btn" @click="goodChooseFn">搜索商品</div>
                        </div>
                    </div>
                    <div class="subtract">
                        <img src="@/assets/subtract.png" alt="">
                    </div>
                </div>
            </div>
            <!--限名额活动-->
            <div v-if="state === 4">
                <div class="content">
                    <div class="condition">
                        <div class="condition-common">
                            <div class="label" style="width: 30px"></div>
                            <input type="text" style="width: 22%">
                            <div class="search-btn" @click="goodChooseFn">搜索商品</div>
                            <div class="label">前</div>
                            <input type="text" style="width: 10%">
                            <select name="" id="" v-model="type" class="select">
                                <option value="jian">件</option>
                                <option value="yuan">名</option>
                            </select>
                            <div class="label">送</div>
                            <input type="text" style="width: 40%">
                        </div>
                        <div class="condition-common condition-1">
                            <div class="label" style="width: 30px">或送</div>
                            <input type="text" style="width: 22%">
                            <div class="search-btn" @click="goodChooseFn">搜索商品</div>
                            <img src="@/assets/add.png" alt="">
                            <input type="text" style="width: 22%">
                            <div class="search-btn" @click="goodChooseFn">搜索商品</div>
                        </div>
                    </div>
                    <div class="subtract">
                        <img src="@/assets/subtract.png" alt="">
                    </div>
                </div>
            </div>

            <div class="add">
                <img src="@/assets/add.png" alt="">
                <div>增加活动</div>
            </div>
        </div>

        <!--选择商品-->
        <el-dialog
                title="商品选择"
                :visible.sync="goods_choose"
                width="40%">
            <div class="goods_search">
                <input type="text">

                <div class="search-btn" @click="goodChooseFn">搜索商品</div>
            </div>

            <div style="text-align: left;margin: 10px 0" v-for="item in goodList">
                <el-radio v-model="goodId" :label="item.label">{{item.name}}</el-radio>
            </div>

            <el-pagination
                    @size-change="handleSizeChange"
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>

            <span slot="footer" class="dialog-footer">
    <el-button @click="goods_choose = false">取 消</el-button>
    <el-button type="primary" @click="goods_choose = false">确 定</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'home',
        components: {},
        data() {
            return {
                goodId: 1,
                goodList: [
                    {label: 1, name: '商品1'},
                    {label: 2, name: '商品2'},
                    {label: 3, name: '商品3'},
                    {label: 4, name: '商品4'},
                    {label: 5, name: '商品5'},
                    {label: 6, name: '商品6'},
                    {label: 7, name: '商品7'},
                    {label: 8, name: '商品8'},
                ],
                goods_choose: false,
                state: 1,
                storeType: '京东',
                type: 'jian'
            }
        },
        methods: {
            goodChooseFn() {
                this.goods_choose = true;
            },
            navClick(val) {
                this.state = val
            },
            storeTypeFn(val) {
                console.log(val);
                this.storeType = val
            },
            // 页数改变
            handleSizeChange() {

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
    .nav{
        display: flex;
        align-items: center;
        height: 50px;
        background-color: #C1C0C9;
        font-size: 14px;
        .act{
            background-color: $theme-color;
            color: #fff;
        }
    }
    .nav-btn1, .nav-btn2, .nav-btn3, .nav-btn4{
        width: 80px;
        height: 32px;
        line-height: 32px;
        background-color: #fff;
        margin-left: 20px;
        color: #4A4A4A;
        cursor: pointer;
    }
    .inquiry{
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #fff;
        font-size: 14px;
        color: #4A4A4A;
        .inquiry-left{
            display: flex;
            align-items: center;
            .inquiry-select{
                padding: 0 10px;
                height: 32px;
                line-height: 32px;
                background-color: #fff;
                margin-right: 10px;
                border-radius: 32px;
                border: 1px solid #E9E9E9;
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
            input{
                width: 294px;
                height: 30px;
                margin-right: 10px;
                border: 1px solid #E9E9E9;
            }
            .btn{
                width: 80px;
                height: 30px;
                line-height: 30px;
                cursor: pointer;
                color: #fff;
                background-color: $theme-color;
                border-radius: 30px;
            }
        }
    }

    .content{
        display: flex;
        align-items: center;
    }
    .condition{
        border: 1px solid $border-color;
        input{
            border: 1px solid $border-color;
            height: 30px;
        }
        .search-btn{
            width: 72px;
            height: 30px;
            background-color: $theme-color;
            color: #fff;
            cursor: pointer;
            font-size: 12px;
            line-height: 30px;
        }
        .label{
            margin: 0 10px;
            text-align: right;
        }
        font-size: 14px;
        width: calc(100% - 68px);
        background-color: #fff;
        padding: 22px;
        box-sizing: border-box;
        .condition-common{
            display: flex;
            align-items: center;
            select{
                width: 70px;
                height: 30px;
                margin-left: 10px;
            }
            img{
                margin: 0 10px;
            }
        }
        .condition-1{
            margin-top: 10px;
        }
    }
    .subtract{
        margin-left: 30px;
        img{
            width: 24px;
            height: 24px;
        }
    }

    .add{
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc(100% - 68px);
        height: 40px;
        background-color: #fff;
        margin-top: 20px;
        border: 1px solid $border-color;
        img{
            margin-right: 14px;
        }
    }
    .goods_search{
        overflow: hidden;
        input{
            width: calc(100% - 92px);
            border: 1px solid $border-color;
            height: 30px;
            float: left;
        }
        .search-btn{
            float: right;
            width: 72px;
            height: 30px;
            background-color: $theme-color;
            color: #fff;
            cursor: pointer;
            font-size: 12px;
            line-height: 30px;
        }
    }
</style>
