import AppDashboard from '../../views/dashboard/AppDashboard.vue';
import Full from '../../container/Full.vue';


export default {
  path: '',
  redirect: '/login',
  component: Full,
  children: [{
    path: 'dashboard',
    name: 'Dashboard',
    component: AppDashboard,
    meta: {
      auth: true
    }
  }]
}
