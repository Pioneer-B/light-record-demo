import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/Main.vue"),
    redirect: "/main/t/t1",
    children: [
      {
        path: "/main/t",
        name: "t",
        meta: { title: "t", type: 1 },
        children: [
          {
            path: "/main/t/t1",
            name: "t1",
            meta: { title: "t1", type: 2 },
            component: () => import("@/views/t/T1.vue"),
          },
          {
            path: "/main/t/t2",
            name: "t2",
            meta: { title: "t2", type: 2 },
            component: () => import("@/views/t/T2.vue"),
          },
        ],
      },
      {
        path: "/main/y",
        name: "y",
        meta: { title: "y", type: 1 },
        children: [
          {
            path: "/main/y/y1",
            name: "y1",
            meta: { title: "y1", type: 2 },
            component: () => import("@/views/y/Y1.vue"),
          },
          {
            path: "/main/y/y2",
            name: "y2",
            meta: { title: "y2", type: 2 },
            component: () => import("@/views/y/Y2.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("@/components/not-found.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
