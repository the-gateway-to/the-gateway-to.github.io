import { createWebHistory, createRouter } from "vue-router";
import NotFound from '../components/NotFound.vue';
import AdventCalendar from "../components/advent/AdventCalendar.vue";
import AdventCalendarTest from "../components/advent/AdventCalendarTest.vue";

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
    name: "AdventCalendarTest",
    component: AdventCalendarTest,
    props: (route: any) => ({
      date: route.params.date || null, 
      debug: route.query.debug === 'true' 
    }),
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