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
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'home',
        components: {},
        data() {
            return {
                state: 1,
                storeType: '京东'
            }
        },
        methods: {
            navClick(val) {
                this.state = val
            },
            storeTypeFn(val) {
                console.log(val);
                this.storeType = val
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
</style>
