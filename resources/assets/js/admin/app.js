/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import VueRouter from 'vue-router';
import {
  store
} from './store';
import App from './components/App';
import router from './router'
import {
  sync
} from 'vuex-router-sync'
import BootstrapVue from 'bootstrap-vue'
import InterceptorSetup from './interceptor';
import './filter/filter';
import VueFilter from 'vue-filter';
import Snotify, {
  SnotifyPosition,
  showProgressBar
} from 'vue-snotify';
import {
  routerHistory,
  writeHistory
} from 'vue-router-back-button'
import FileSaver from 'file-saver';
import Loading from 'vue-loading-overlay';
import VuePellEditor from 'vue-pell-editor'
import 'vue-loading-overlay/dist/vue-loading.css';
import VueMq from 'vue-mq'
import Transitions from 'vue2-transitions'
require('./bootstrap');
require('vue2-animate/dist/vue2-animate.min.css')
window.Vue = require('vue');
sync(store, router);
Vue.use(BootstrapVue)
Vue.use(VueFilter);
Vue.use(VueRouter);
Vue.use(FileSaver);
Vue.use(VuePellEditor)
Vue.use(routerHistory)
Vue.use(Transitions)
Vue.component('loading', Loading);
const options = {
  toast: {
    position: SnotifyPosition.rightTop,
    showProgressBar: false,
    timeout: 1000,
  }
}
Vue.use(Snotify, options)
Vue.use(VueMq, {
  breakpoints: {
    sm: 576,
    md: 768,
    lg: 992,
    xs: 1200,
  }
})
window.dayjs = require('dayjs')
window.FileSaver = require('file-saver');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
router.afterEach(writeHistory)
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    const isLoggedOut = store.getters.isLoggedOut;
    if (isLoggedOut) {
      next('/login');
    } else {
      next();
    }
  } else if (to.meta.guest) {
    if (store.getters.isLoggedIn) {
      next(false);
    } else {
      next();
    }
  } else {
    next();
  }
});
InterceptorSetup();

const app = new Vue({
  el: '#apps',
  store,
  router,
  render: h => h(App),
});
