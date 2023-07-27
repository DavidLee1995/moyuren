import { createRouter, createWebHistory } from 'vue-router'
import login from "../views/login/router";
import main from "../views/main/router";
import house from "../views/house/router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...login,
    ...main,
    ...house
  ]
})

export default router
