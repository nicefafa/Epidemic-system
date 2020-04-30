import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import layout from "@/views/layout/index"
const routes = [{
    path: '/',
    redirect: "login",
    hidden: true,
    meta: {
      name: "登录",
    }
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    meta: {
      name: "登录"
    },
    component: () => import("../views/login/index")
  },
  {
    path: '/console',
    name: 'console',
    redirect:"index",
    meta: {
      name: "全区疫情情况",
      icon: "console"
    },
    component: layout,
    children: [{
      path: '/index',
      name: 'Index',
      meta: {
        name: "首页"
      },
      component: () => import("../views/console/index")
    }]
  },
  {
    path: '/info',
    name: 'info',
    meta: {
      name: "查询信息",
      icon: "info"
    },
    component: layout,
    children: [{
        path: '/info/addCases',
        name: 'addCases',
        meta: {
          name: "新增病例信息"
        },
        component: () => import("../views/info/addCases.vue")
      },
      {
        path: '/info/suspectedCases',
        name: 'suspectedCases',
        meta: {
          name: "疑似病例信息"
        },
        component: () => import("../views/info/suspectedCases.vue")
      },
      {
        path: '/info/isolatedCases',
        name: 'isolatedCases',
        meta: {
          name: "隔离病例信息"
        },
        component: () => import("../views/info/isolatedCases.vue")
      },

    ]
  },
  {
    path: '/turnoverSituation',
    name: 'turnoverSituation',
    meta: {
      name: "流动人员详情",
      icon: "turnoverSituation"
    },
    component: layout,
    children: [{
        path: '/turnoverSituation/comeBack',
        name: 'comeBack',
        meta: {
          name: "人员返乡情况"
        },
        component: () => import("../views/turnoverSituation/comeBack")
      },
      {
        path: '/turnoverSituation/out',
        name: 'out',
        meta: {
          name: "人员外出情况"
        },
        component: () => import("../views/turnoverSituation/out")
      },

    ]

  }

]

const router = new VueRouter({
  routes
})

export default router