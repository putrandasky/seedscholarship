import Vue from 'vue';
import Router from 'vue-router';

import {
  Blog,
  User,
  Request,
  Settings,
  Broadcast,
  Donors,
  Finances,
  Page,
  Assignment,
  Account,
  Auth,
  Base
} from './module/index'

// import AppUserAdmin from '../views/user/AppAdmin.vue'
// import AppUserAwardee from '../views/user/AppAwardee.vue'
// import AppUserPatron from '../views/user/AppPatron.vue'


Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: '/admin',
  linkActiveClass: 'open active',
  // scrollBehavior: () => ({
  //   y: 0
  // }),
  routes: [
    Base,
    Assignment,
    Blog,
    Page,
    Request,
    User,
    Settings,
    Broadcast,
    Donors,
    Finances,
    Account,
    ...Auth
    // {
    //   path: '/test/autocomplete',
    //   name: 'Autocomplete',
    //   component: Autocomplete
    // }
  ]
});
