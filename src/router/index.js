import { createRouter, createWebHistory } from "vue-router";
import DlView from "../views/dlView.vue";
import MainView from "../views/mainView.vue";

const routes = [
  { path: "/", component: DlView, name:"input" },
  { path: "/main", component: MainView, name: "main" },
];

const router = createRouter({
  history: createWebHistory(), // 使用 createWebHistory
  routes,
});

export default router;
