import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import { projects } from "@/data/projects.js";

const projectModules = import.meta.glob("@/projects/Project*.vue");

const projectRoutes = Object.entries(projectModules)
  .map(([path, module]) => {
    const match = path.match(/\/Project(\d+)\.vue$/);
    const number = match ? Number(match[1]) : null;
    if (!number || !projects.some((p) => p.id === number)) return null;

    return {
      path: `/projekty/${number}`,
      name: `project-${number}`,
      component: module,
    };
  })
  .filter(Boolean);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    ...projectRoutes,
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("@/views/NotFound.vue"),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
