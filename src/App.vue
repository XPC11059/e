<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--<router-link to="/">Home</router-link> |-->
      <!--&lt;!&ndash;<router-link to="/about">About</router-link>&ndash;&gt;-->
    <!--</div>-->
    <el-container>
      <Aside></Aside>
      <el-container>
        <el-header>
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
.el-header{
  padding: 0 !important;
}
.el-container{
  height: 100%;
}


.el-aside {
  /*background-image: linear-gradient(0deg, #5C8CFF 0%, #54C3FF 98%);*/
  background-color: #5C8CFF;
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
}

.el-submenu__title{
  display: flex;
  align-items: center;
  font-size: 18px !important;
  img{
    margin: 0 20px 0 10px;
  }
}
/*.el-submenu__title i{*/
  /*color: #fff !important;*/
/*}*/

</style>
