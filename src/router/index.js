import { createMemoryHistory, createRouter } from "vue-router";

import dlview from "../views/dlView.vue";
import Main from "../views/Main.vue";

const routes = [
  { path: "/", component: dlview },
  { path: "/main", component: Main },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
export default router
