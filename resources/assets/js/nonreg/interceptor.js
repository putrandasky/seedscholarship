import axios from 'axios';
import {
  store
} from './store';
import router from './router'
import Snotify, { SnotifyPosition, showProgressBar } from 'vue-snotify';
const options = {
  toast: {
    position: SnotifyPosition.rightTop,
    showProgressBar: false,
    timeout: 1000,
  }
}
export default function setup() {
  axios.interceptors.request.use(function (config) {
    const token = store.state.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  }, function (err) {
    return Promise.reject(err);
  });
  axios.interceptors.response.use(response => {
      // NProgress.done()
      // console.log('test');

      // router.push({path:'Project'})

      return response
    },
    function (error) {
      // console.log(error.response.statusText);
      // console.log(error.response)
      if (error.response.status == 401) {
        // store.dispatch('logout')
        // router.push({
        //   path: '/login'
        // })
      }
      if (error.response.status == 500) {

        // Snotify.error("Ooops, There's Something Error, Try Again Later", "ERROR");
        // setTimeout(() => {
        //   window.location.reload(true);
        // }, 500);
      }
      // Do something with response error
      return Promise.reject(error);
    })
}