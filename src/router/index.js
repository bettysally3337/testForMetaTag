import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import TestOne from "@/components/TestOne.vue";
import NoSiteName from "@/components/NoSiteName.vue";
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
  {
    path: "/nositename",
    name: "NoSiteName",
    component: NoSiteName,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
