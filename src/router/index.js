import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/Layout/"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    meta: {
      name: "主页",
    },
    icon: "partner", //"el-icon-star-on",
    children: [
      {
        path: "/",
        name: "Index",
        meta: {
          name: "首页",
        },
        component: () => import("../views/Console/index.vue"),
      },
      {
        path: "console",
        name: "Console",
        meta: {
          name: "控制台",
        },
        component: () => import("../views/Console/console.vue"),
      },
    ],
  },
  // {
  //   path: "/login",
  //   name:"Login",
  //   component: () => import("../views/login.vue")
  // },
  {
    path: "",
    name: "RouterPage",
    component: Layout,
    icon: "international", //"el-icon-phone",
    meta: {
      name: "路由",
    },
    children: [
      {
        path: "router",
        name: "Router",
        meta: {
          name: "五种跳转方式",
        },
        component: () => import("../views/routerPage/router.vue"),
      },
      {
        path: "infoindex",
        name: "InfoIndex",
        hidden: true,
        meta: {
          name: "信息分类",
        },
        component: () => import("../views/routerPage/index.vue"),
      },
      {
        path: "riskRouter/:id/:title",
        name:"Risk",
        hidden:true,
        meta: {
          name: "冒号路由"
        },
        component: () => import("../views/routerPage/riskRouter.vue")
      }
    ],
  },
];

const router = new VueRouter({
  routes
});

export default router;
