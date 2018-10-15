import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login.vue'
import Home from './views/Home.vue'
import orderInquiry from '@/views/order/orderInquiry.vue'
import orderHandling from '@/views/order/orderHandling.vue'
import orderPrint from '@/views/order/orderPrint.vue'
import abnormalOrders from '@/views/order/abnormalOrders.vue'
import productMaintenance from '@/views/productMaintenance/productMaintenance.vue'
import activity from '@/views/productMaintenance/activity.vue'
import quickSalesReturn from '@/views/afterSale/quickSalesReturn.vue'
import afterSaleEnquiry from '@/views/afterSale/afterSaleEnquiry.vue'
import shipped from '@/views/afterSale/shipped.vue'
import unshipped from '@/views/afterSale/unshipped.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
      // 订单
    {
      path: '/order/orderInquiry',
      name: 'orderInquiry',
      component: orderInquiry
    },
    {
      path: '/order/orderHandling',
      name: 'orderHandling',
      component: orderHandling
    },
    {
      path: '/order/orderPrint',
      name: 'orderPrint',
      component: orderPrint
    },
    {
      path: '/order/abnormalOrders',
      name: 'abnormalOrders',
      component: abnormalOrders
    },
      //产品维护
    {
      path: '/productMaintenance/productMaintenance',
      name: 'productMaintenance',
      component: productMaintenance
    },
    {
      path: '/productMaintenance/activity',
      name: 'activity',
      component: activity
    },
      // 售后
    {
      path: '/afterSale/quickSalesReturn',
      name: 'quickSalesReturn',
      component: quickSalesReturn
    },
    {
      path: '/afterSale/afterSaleEnquiry',
      name: 'afterSaleEnquiry',
      component: afterSaleEnquiry
    },
    {
      path: '/afterSale/shipped',
      name: 'shipped',
      component: shipped
    },
    {
      path: '/afterSale/unshipped',
      name: 'unshipped',
      component: unshipped
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
