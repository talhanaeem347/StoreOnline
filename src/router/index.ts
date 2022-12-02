import { createRouter, createWebHistory,  RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    name: `Home`,
    path: `/`,
    component: () => import('@/views/HomeView.vue')
  },
  {
    name: `About`,
    path: `/about`,
    component: () => import('@/views/AboutView.vue')
  },
  {
    name: `Policy`,
    path: `/policy`,
    component: () => import('@/views/PolicyView.vue')
  },
  {
    name: `Contect`,
    path: `/contect`,
    component: () => import('@/views/ContectView.vue')
  },
  {
    name: "Terms&Condition",
    path: "/policy/term-and-conditions",
    component: () => import('@/components/Policies/ReturnPolicy.vue')
  },
  {
    name: "SignUp",
    path: "/sign-up",
    component: () => import('@/components/Contect/SignUp.vue')
  },
  {
    name: "LogIn",
    path: "/log-in",
    component: () => import('@/components/Contect/LogIn.vue')
  },
  {
    name: "ResetPassword",
    path: "/reset-password",
    component: () => import('@/components/Contect/ResetPassword.vue')
  },
  {
    name: "CartView",
    path: "/my-cart",
    component: () => import('@/components/app/CartView.vue')
  },
  {
    name: "ProductView",
    path: "/products",
    component: () => import('@/views/ProductView.vue')
  },
  {
    name: "ItemView",
    path: "/item-detail",
    component: () => import('@/views/ItemView.vue')
  },
  {
    name: "TestCom",
    path: "/test",
    component: () => import('@/components/testCom.vue')
  },
  {
    name: "CancelationProperty",
    path: "/cancel",
    component: () => import('@/components/Policies/CancelationPolicy.vue')
  },
  {
    name: "ExcahangePolicy",
    path: "/exchange",
    component: () => import('@/components/Policies/ExchangePolicy.vue')
  },
  {
    name: "HstoryComponent",
    path: "/our-history",
    component: () => import('@/components/about/HistoryComponent.vue')
  },
  {
    name: "MsgComponent",
    path: "/msg",
    component: () => import('@/components/Contect/MsgComponent.vue')
  },
  {
    name: "Pricing",
    path: "/prices",
    component: () => import('@/components/Home/PricingComponent.vue')
  },
  {
    name: "PrivicyPolicy",
    path: "/privicy",
    component: () => import('@/components/Policies/PrivicyPolicy.vue')
  },
  {
    name: "Qualitys",
    path: "/qualitys",
    component: () => import('@/components/about/QualityComponent.vue')
  },
  {
    name: "Trending",
    path: "/trend",
    component: () => import('@/components/Home/TrendingItems.vue')
  },
  {
    name: "ReturnComponent",
    path: "/return-item",
    component: () => import('@/components/Return/ReturnComponent.vue')
  },
  {
    name: "LikeView",
    path: "/liked-items",
    component: () => import('@/components/app/LikeView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
