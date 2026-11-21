import { createWebHistory, createRouter } from "vue-router";
import NotFound from '../components/NotFound.vue';
import AdventCalendar from "../components/advent/AdventCalendar.vue";
import AdventCalendarTest from "../components/advent/AdventCalendarTest.vue";
import AdventCalendar3 from "../components/advent/AdventCalendar3.vue";

const routes = [
  {
    path: "/christmas",
    name: "AdventCalendar",
    component: AdventCalendar3,
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
    path: "/test2",
    name: "AdventCalendar3",
    component: AdventCalendar,
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