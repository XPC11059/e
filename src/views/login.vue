<template>
    <div class="page">
        <div class="login-box">
            <div class="title">E店宝后台管理系统</div>
            <div class="login">
                <div style="display: flex;flex-direction: column;align-items: center">
                    <div class="login-title">欢迎使用E店保</div>
                    <div class="account">
                        <img src="@/assets/account.png" alt="">
                        <input type="text" placeholder="请输入账号">
                    </div>
                    <div class="password">
                        <img src="@/assets/password.png" alt="">
                        <input type="text" placeholder="请输入密码">
                    </div>
                    <div class="remember">
                        <input type="checkbox">
                        <span>记住用户名</span>
                    </div>
                    <div class="btn" @click="login">立即登录</div>
                </div>
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
        methods: {
            login() {
                this.$router.push('/Home')
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
    .page{
        background: url("~@/assets/banner.png") no-repeat;
        height: 100%;
        background-size: 100% 70%;
    }
    .login-box{
        position: absolute;
        width: 400px;
        /*height: 500px;*/
        display: table;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        .title{
            font-size: 30px;
            color: #fff;
            height: 50px;
            margin-bottom: 20px;
        }
    }
    .login{
        background-color: #fff;
        width: 100%;
        height: 400px;
        border-radius: 20px;
        box-shadow: #ccc 0 1px 15px 1px;
        .login-title{
            height: 100px;
            font-size: 24px;
            line-height: 100px;
            color: $theme-color;
        }
        .account, .password{
            width: 70%;
            margin-top: 20px;
            display: flex;
            align-items: center;
            padding: 10px 0;
            input{
                height: 24px;
                padding-left: 20px;
                width: 100%;
            }
        }
        .remember{
            display: flex;
            align-items: center;
            width: 70%;
            margin-top: 20px;
            font-size: 14px;
            color: $theme-color;
        }
        .btn{
            width: 70%;
            height: 50px;
            border-radius: 50px;
            color: #fff;
            font-size: 16px;
            line-height: 50px;
            background-color: $theme-color;
            margin-top: 30px;
            cursor: pointer;
        }
    }
    .account{
        border-bottom: 1px solid #E9E9E9;
        img{
            width: 24px;
            height: 24px;
        }
    }
    .password{
        border-bottom: 1px solid #E9E9E9;
        img{
            width: 24px;
            height: 30px;
        }
    }
</style>
