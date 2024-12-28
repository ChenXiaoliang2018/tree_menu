import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
    redirect: "/vue",
    children: [
      {
        path: "/vue",
        name: "vue",
        component: () => import("@/views/pages/vue.vue"),
      },
      {
        path: "/react",
        name: "react",
        component: () => import("@/views/pages/react.vue"),
      },
      {
        path: "/angular",
        name: "angular",
        component: () => import("@/views/pages/angular.vue"),
      },
      {
        path: "/spring",
        name: "spring",
        component: () => import("@/views/pages/spring.vue"),
      },
      {
        path: "/springBoot",
        name: "springBoot",
        component: () => import("@/views/pages/springBoot.vue"),
      },
      {
        path: "/mysql",
        name: "mysql",
        component: () => import("@/views/pages/mysql.vue"),
      },
      {
        path: "/mybatis",
        name: "mybatis",
        component: () => import("@/views/pages/mybatis.vue"),
      },
      {
        path: "/redis",
        name: "redis",
        component: () => import("@/views/pages/redis.vue"),
      },
      {
        path: "/onlyOne",
        name: "onlyOne",
        component: () => import("@/views/pages/onlyOne.vue"),
      },
      {
        path: "/new",
        name: "new",
        component: () => import("@/views/other/new.vue"),
      },
      {
        path: "/new1",
        name: "new1",
        component: () => import("@/views/other/new1.vue"),
      },
      {
        path: "/new2",
        name: "new2",
        component: () => import("@/views/other/new2.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
