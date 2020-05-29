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
    icon: "partner",//"el-icon-star-on",
    children: [
      {
        path: "index",
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
  {
    path: "",
    name: "Info",
    component: Layout,
    icon: "international",//"el-icon-phone",
    meta: {
      name: "信息管理",
    },
    children: [
      {
        path: "infoIndex",
        name: "InfoIndex",
        meta: {
          name: "信息列表",
        },
        component: () => import("../views/Info/index.vue"),
      },
      {
        path: "infoCategory",
        name: "InfoCategory",
        meta: {
          name: "信息分类",
        },
        component: () => import("../views/Info/category.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes
});

export default router;
