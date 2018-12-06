<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--<router-link to="/">Home</router-link> |-->
      <!--&lt;!&ndash;<router-link to="/about">About</router-link>&ndash;&gt;-->
    <!--</div>-->
    <el-container>
      <Aside v-show="$route.path !== '/'"></Aside>
      <el-container>
        <el-header v-show="$route.path !== '/'">
          <Header></Header>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import Aside from '@/components/aside.vue'
  import Header from '@/components/header.vue'
  export default {
      components: {
          Aside,
          Header
      }
  }
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
body, html{
  padding: 0;
  margin: 0;
  height: 100%;
}
input{
    border: 0;
    padding: 0 10px;
    outline: none;
    box-sizing: border-box;
}
.el-header{
  padding: 0 !important;
    min-width: 1020px;
}
.el-container{
  height: 100%;
}


.el-aside {
  /*background-image: linear-gradient(0deg, #5C8CFF 0%, #54C3FF 98%);*/
  /*background-color: #5C8CFF;*/
  background: url("~@/assets/aside-bg.jpg") center no-repeat;
  color: #333;
  text-align: center;
  height: 100%;
}
.el-menu{
  border: none !important;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  height: 100%;
  padding: 0 !important;
  /*line-height: 160px;*/
    min-width: 1020px;
}

.el-submenu__title:hover{
  background-color: #5C8CFF !important;
}
.el-submenu__title{
  display: flex;
  align-items: center;
  font-size: 18px !important;
  img{
    margin: 0 20px 0 10px;
  }
}
/*.el-table{*/
  /*width: 100% !important;*/
/*}*/
/*.el-submenu__title i{*/
  /*color: #fff !important;*/
/*}*/

.el-input__inner{
  padding: 4px !important;
  border: 1px solid rgb(169, 169, 169) !important;
  border-radius: 0 !important;
  height: 30px !important;
}


</style>
