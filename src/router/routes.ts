import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        name: "home",
        meta: { auth: false, link: "online-scene" },
      },
      {
        path: "/online-scene",
        component: () => import("pages/OnlineScene.vue"),
        name: "online-scene",
        meta: { auth: false, link: "online-scene" },
      },
      {
        path: "/online-scene-history",
        component: () => import("pages/OnlineSceneHistory.vue"),
        name: "online-scene-history",
        meta: { auth: false, link: "os" },
      },
      {
        path: "/online-scene/:id",
        component: () => import("pages/Request.vue"),
        props: true,
        name: "request",
        meta: { auth: false, link: "os" },
      },
      {
        path: "/os",
        component: () => import("pages/OSList.vue"),
        name: "os-list",
        meta: { auth: false },
      },
      {
        path: "/os-history",
        component: () => import("pages/OSListHistory.vue"),
        name: "os-list-history",
        meta: { auth: false },
      },
      {
        path: "/os/:id",
        component: () => import("pages/OSDetail.vue"),
        props: true,
        name: "os-detail",
        meta: { auth: false },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
