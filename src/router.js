import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import LoginPage from './pages/LoginPage.vue';
import SignupPage from './pages/SignupPage.vue';


const routes = [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage
      },
      {
        path: '/signup',
        name: 'signup',
        component: SignupPage
      }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;
