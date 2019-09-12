import Vue from 'nativescript-vue';
import Router from 'vue-router';

import Wrapper from '~/components/wrapper'; // container for empty parent 

import Login from '~/components/login';
import Dashboard from '~/components/dashboard';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*', 
      redirect: '/auth'
    },
    {
      path: '/auth',
      redirect: '/auth/login',
      component: Wrapper,
      children: [
        {
          path: 'login', 
          component: Login
        }
      ]
    },
    {
      path: '/main',
      redirect: '/main/dashboard',
      component: Wrapper,
      children: [
        {
          path: 'dashboard', 
          component: Dashboard
        },
      ]
    },
  ]
});

export default router;
