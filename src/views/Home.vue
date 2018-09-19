<template>
  <div class="home">
    <div class="home-title">待办订单</div>
    <div class="home-content">
      <div class="home-content_item">
        <img src="@/assets/stay-check.png" alt="">
        <div class="home-content_item-font">
          <span>待审核</span>
          <div class="home-content_item-font2">
            <span class="span1">73</span>
            <span class="span2">单</span>
          </div>
        </div>
      </div>
      <div class="home-content_item">
        <img src="@/assets/stay-print.png" alt="">
        <div class="home-content_item-font">
          <span>待打印</span>
          <div class="home-content_item-font2">
            <span class="span1">100</span>
            <span class="span2">单</span>
          </div>
        </div>
      </div>
      <div class="home-content_item">
        <img src="@/assets/error-order.png" alt="">
        <div class="home-content_item-font">
          <span>异常订单</span>
          <div class="home-content_item-font2">
            <span class="span1">73</span>
            <span class="span2">单</span>
          </div>
        </div>
      </div>
      <div class="home-content_item">
        <img src="@/assets/shipping.png" alt="">
        <div class="home-content_item-font">
          <span>已发货</span>
          <div class="home-content_item-font2">
            <span class="span1">123</span>
            <span class="span2">单</span>
          </div>
        </div>
      </div>
    </div>

    <div class="home-title">待办售后</div>
    <div class="home-content">
      <div class="home-content_item after-sale">
        <img src="@/assets/shouhou.png" alt="">
        <div class="home-content_item-font">
          <span>未发货仅退款</span>
          <div class="home-content_item-font2">
            <span class="span1">46</span>
            <span class="span2">单</span>
          </div>
        </div>
      </div>
      <div class="home-content_item after-sale">
        <img src="@/assets/shouhou.png" alt="">
        <div class="home-content_item-font">
          <span>已发货退货退款</span>
          <div class="home-content_item-font2">
            <span class="span1">68</span>
            <span class="span2">单</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'home',
    components: {
    },
    data() {
      return {

      }
    },
    methods: {

    },
    created() {

    },
    mounted() {

    }
}
</script>
<style lang="scss" scoped>
  @import "~@/styles/themes";
  .home{
    padding: 50px;
    .home-title{
      width: 100%;
      height: 30px;
      line-height: 30px;
      text-align: left;
      color: $theme-color;
      font-size: 28px;
      border-left: 10px solid $theme-color;
      padding-left: 14px;
      box-sizing: border-box;
    }
    .home-content{
      margin: 24px 0 40px 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .home-content_item{
        border: 1px solid #EBEBEB;
        width: calc(25% - 26px);
        height: 150px;
        background-color: #fff;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 2.6%;
        .home-content_item-font{
          color: #4A4A4A;
          font-size: 20px;
          height: 80%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: space-between;
          .home-content_item-font2{
            .span1{
              color: #4A4A4A;
              font-size: 32px;
            }
            .span2{
              color: #9B9B9B;
              font-size: 20px;
              margin-left: 10px;
            }
          }
        }
      }
      .after-sale{
        padding-left: 5%;
        padding-right: 5%;
        width: calc(50% - 17px);
      }
    }
  }
</style>
