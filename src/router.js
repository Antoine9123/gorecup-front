import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './pages/MainPage.vue';
import LoginPage from './pages/LoginPage.vue';
import SignupPage from './pages/SignupPage.vue';

import axios from 'axios';
import Cookies from 'js-cookie';


const routes = [
    {
      path: '/',
      name: 'main',
      component: MainPage
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


async function isAuthenticated() {
  const accessToken = Cookies.get('access_token');
  const refreshToken = Cookies.get('refresh_token');

  if (!accessToken || !refreshToken) {
    return false; 
  }

  try {
    
    const response = await axios.post('https://gorecup-back-114fb5f55ba8.herokuapp.com/auth/jwt/verify/', {
      token: accessToken
    });

    if (response.status === 200) {
      return true; 
    } else {
      return false; 
    }
  } catch (error) {
    console.error('Error verifying access token:', error);
    return false; 
  }
}

router.beforeEach(async (to, from, next) => {
  if (to.path === '/login' || to.path === '/signup') {
    next(); 
  } else {
    const authenticated = await isAuthenticated(); 

    if (!authenticated) {
      next('/login'); 
    } else {
      next();
    }
  }
});
  export default router;
