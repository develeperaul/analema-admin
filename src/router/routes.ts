import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      {
        path: "/",
        name: "login",
        component: () => import("pages/Auth/Login.vue"),
      },
      {
        path: "/restore",
        name: "restore",
        component: () => import("pages/Auth/Restore.vue"),
      },
      {
        path: "/register",
        name: "register",
        component: () => import("pages/Auth/Register.vue"),
      },
    ],
  },
];

export default routes;
