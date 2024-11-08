import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import TestOne from "@/components/TestOne.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HelloWorld,
  },
  {
    path: "/testone",
    name: "TestOne",
    component: TestOne,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
