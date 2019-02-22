import Vue from 'vue'
import Router from 'vue-router'
import Full from '../container/Full.vue'
import Plain from '../container/Plain.vue'

const Dashboard = () => import('../views/dashboard/Dashboard.vue')
const UserProfile = () => import('../views/user/UserProfile.vue')
const Assignment = () => import('../views/assignment/Assignment.vue')
const AssignmentDetail = () => import('../views/assignment/AssignmentDetail.vue')
const SubmissionNew = () => import('../views/assignment/SubmissionNew.vue')

import Login from "../views/auth/AuthLogin";
const PasswordReset = () => import('../views/auth/AuthPasswordReset')
const ForgotPassword = () => import('../views/auth/AuthForgotPassword')
const Register = () => import('../views/auth/AuthRegister')
const ContractAgreed = () => import('../views/registration/ContractAgreed')
const DonationConfirmation = () => import('../views/confirmation/DonationConfirmation.vue')
Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: '/donor',
  linkActiveClass: 'open active',
  // scrollBehavior: () => ({
  //   y: 0
  // }),
  routes: [{
      path: '',
      redirect: '/login',
      component: Full,
      children: [{
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
          //   meta: {
          //     auth: true
          //   },
        },
        {
          path: 'user',
          children: [{
            path: '',
            name: 'UserProfile',
            component: UserProfile,
            // meta: {
            //   auth: true
            // },
          }, ]
        }
      ]
    },
    {
      path: '/assignment',
      component: Full,
      children: [{
          path: '',
          name: 'Assignment',
          component: Assignment,
          // meta: {
          //   auth: true
          // },
        },
        {
          path: ':assignmentId',
          name: 'AssignmentDetail',
          component: AssignmentDetail,
          // meta: {
          //   auth: true
          // },
        },
        {
          path: ':assignmentId/submission/create',
          name: 'SubmissionNew',
          component: SubmissionNew,
          // meta: {
          //   auth: true
          // },
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Plain,
      children: [{
        path: '',
        component: Login,
        meta: {
          guest: true
        },

      }]
    },
    {
      path: '/contract-agreed',
      component: Plain,
      children: [{
        path: '',
        name:'ContractAgreed',
        component: ContractAgreed,


      }]
    },
    {
      path: '/donation-confirmation',
      component: Plain,
      children: [{
        path: '',
        name:'DonationConfirmation',
        component: DonationConfirmation,


      }]
    },
    {
      path: '/register',
      name: 'Register',
      component: Plain,
      children: [{
          path: '',
          component: Register,
        },
      ]
    },
    {
      path: '/password-reset',
      component: Plain,
      children: [{
        path: '',
        name: 'PasswordReset',
        component: PasswordReset,
      }]
    },
    {
      path: '/forgot-password',
      component: Plain,
      children: [{
        path: '',
        name: 'ForgotPassword',
        component: ForgotPassword,
      }]
    },

    // {
    //   path: '/test/autocomplete',
    //   name: 'Autocomplete',
    //   component: Autocomplete
    // }
  ]
})
