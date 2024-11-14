import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Calculadora from '../components/Calculadora.vue';
import Axios from '../components/Axios.vue';
import Fetch from '../components/Fetch.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/calculadora', component: Calculadora },
  { path: '/axios', component: Axios },
  { path: '/fetch', component: Fetch },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;