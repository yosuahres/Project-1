import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/home.vue';
import DataMesin from '../components/dataMesin.vue';
import patientCard from '@/components/patientCard.vue';
// import keyboard from '@/components/keyboard.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/data-mesin', name: 'data-mesin', component: DataMesin },
  { path: '/patient-card', name: 'patientCard', component: patientCard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;