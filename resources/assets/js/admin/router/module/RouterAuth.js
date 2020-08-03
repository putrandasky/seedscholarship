import Login from '../../views/auth/AuthLogin';
import PasswordReset from '../../views/auth/AuthPasswordReset';
import ForgotPassword from '../../views/auth/AuthForgotPassword';
import Register from '../../views/auth/AuthRegister';
import Plain from '../../container/Plain.vue';

export default [{
  path: '/login',
  name: 'Login',
  component: Plain,
  children: [{
    path: '',
    component: Login
    // meta: {
    //   guest: true
    // },
  }]
}, {
  path: '/register',
  name: 'Register',
  component: Plain,
  children: [{
    path: '',
    component: Register
  }]
}, {
  path: '/password-reset',
  component: Plain,
  children: [{
    path: '',
    name: 'PasswordReset',
    component: PasswordReset
  }]
}, {
  path: '/forgot-password',
  component: Plain,
  children: [{
    path: '',
    name: 'ForgotPassword',
    component: ForgotPassword
  }]
}]
