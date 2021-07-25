import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/container/HomeContainer.vue';
import CalendarContainer from '@/container/CalendarContainer.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
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
