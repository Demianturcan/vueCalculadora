import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Calculadora from '../components/Calculadora.vue';
import Fetch from '../components/Fetch.vue';
import Axios from '../components/Axios.vue';
import Navbar from '../components/Navbar.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/services',
        name: 'Services',
        component: Services
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
];

const router = new Router({
    routes
});

export default router;