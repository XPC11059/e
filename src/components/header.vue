<template>
    <div class="header">
        <input type="text" placeholder="请输入关键词搜索...">
        <div class="right-btns">
            <span>修改密码</span>
            <span>注销</span>
            <div class="logout">
                <img src="@/assets/logout.png" alt="">
                <span>退出</span>
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
    @import "~@/styles/themes";
    .header{
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        input{
            margin-left: 28px;
            width: 220px;
            height: 100%;
            font-size: 18px;
            padding-left: 50px;
            border: none;
            outline: none;
            background: url("../assets/search.png") no-repeat 0 center;
        }
    }
    .right-btns{
        color: $theme-color;
        font-size: 14px;
        height: 60px;
        display: flex;
        align-items: center;
        margin-right: 56px;
        span{
            margin-right: 50px;
            cursor: pointer;
        }
        .logout{
            display: flex;
            align-items: center;
            cursor: pointer;
            img{
                margin-right: 6px;
            }
        }
    }
</style>
