import { createWebHistory, createRouter } from "vue-router";
import NotFound from '../components/NotFound.vue';
import AdventCalendar from "../components/advent/AdventCalendar.vue";
import AdventCalendar2 from "../components/advent/AdventCalendar2.vue";

const routes = [
  {
    path: "/christmas",
    name: "AdventCalendar",
    component: AdventCalendar,
    props: (route: any) => ({ 
      date: route.params.date || null, 
      debug: route.query.debug === 'true' 
    }),
  },
  {
    path: "/test",
    name: "AdventCalendar2",
    component: AdventCalendar2,
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