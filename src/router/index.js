import { createMemoryHistory, createRouter } from "vue-router"

import dlView from "../view/dlView.vue"
import Main from "../view/Main.vue"

const routes = [
  { path: "/", component: dlView },
  { path: "/main", component: Main},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})