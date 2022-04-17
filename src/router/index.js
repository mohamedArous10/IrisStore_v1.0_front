import {  createRouter } from "vue-router";
import Home from "../components/CardsList.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  
];

const router = createRouter({
  routes,
});

export default router;