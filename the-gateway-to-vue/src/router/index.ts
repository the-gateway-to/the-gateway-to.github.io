import { createWebHistory, createRouter } from "vue-router";
import NotFound from '../components/NotFound.vue';
import AdventCalendar from "../components/advent/AdventCalendar.vue";

const routes = [
  {
    path: "/christmas",
    name: "AdventCalendar",
    component: AdventCalendar,
    props: (route) => ({ date: route.params.date || null }),
  },
  {
    path: "/test001",
    name: "Service",
    component: NotFound,
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