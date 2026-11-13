import { createWebHistory, createRouter } from "vue-router";
import Gateway from '../components/Gateway.vue';
import NotFound from '../components/NotFound.vue';
import Christmas from "../components/christmas/Christmas.vue";
import Test from '../components/advent/Test.vue'
import AdventCalendar from "../components/advent/AdventCalendar.vue";

const routes = [
  {
    path: "/christmas/:date?",
    name: "AdventCalendar",
    component: AdventCalendar,
  },
  {
    path: "/test001",
    name: "Service",
    component: NotFound,
  },
  {
    path: "/test/:date?",
    name: "Test",
    component: Test,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;