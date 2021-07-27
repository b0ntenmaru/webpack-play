import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import CalendarContainer from '@/container/CalendarContainer.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/google_calendar_clone',
    name: 'GoogleCalendarClone',
    component: CalendarContainer
  }
];

const router = new VueRouter({
  routes,
});

export default router;
