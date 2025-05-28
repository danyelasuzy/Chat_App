import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/login", component: LoginPage },
];

const router = createRouter({
  history: createWebHashHistory("/Chat_App/"),
  routes,
});

export default router;
