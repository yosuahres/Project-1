import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/home.vue';
import DataMesin from '../components/dataMesin.vue';
import Bypass from '../components/bypass.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/data-mesin', name: 'data-mesin', component: DataMesin },
  { path: '/bypass', name: 'bypass', component: Bypass },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;