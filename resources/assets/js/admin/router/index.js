import Vue from 'vue'
import Router from 'vue-router'
import Full from '../container/Full.vue'
import Plain from '../container/Plain.vue'

import AppDashboard from '../views/dashboard/AppDashboard.vue'

// import AppUserAdmin from '../views/user/AppAdmin.vue'
// import AppUserAwardee from '../views/user/AppAwardee.vue'
// import AppUserPatron from '../views/user/AppPatron.vue'

import AppAssignment from '../views/assignment/AppAssignment.vue'
import AppAssignmentNew from '../views/assignment/AppNewAssignment.vue'
import AssignmentDetail from '../views/assignment/AssignmentDetail.vue'

import AppBlog from '../views/blog/AppBlog.vue'
import AppBlogNew from '../views/blog/AppBlogNew.vue'
import AppBlogTag from '../views/blog/AppBlogTag.vue'
import AppBlogCategory from '../views/blog/AppBlogCategory.vue'
import BlogDetail from '../views/blog/BlogDetail.vue'

import AppPage from '../views/page/AppPage.vue'
import AppPageNew from '../views/page/AppPageNew.vue'
import PageDetail from '../views/page/PageDetail.vue'

import AppRequestAwardee from '../views/request/awardee/AppRequestAwardee.vue'
import RequestAwardeeIndex from '../views/request/awardee/AppRequestAwardeeIndex.vue'
import RequestAwardeeDefault from '../views/request/awardee/AppRequestAwardeeDefault.vue'
import DetailRequestAwardee from '../views/request/awardee/DetailRequestAwardee.vue'

import AppRequestNonreg from '../views/request/nonreg/AppRequestNonreg.vue'
import RequestNonregIndex from '../views/request/nonreg/AppRequestNonregIndex.vue'
import RequestNonregDefault from '../views/request/nonreg/AppRequestNonregDefault.vue'
import DetailRequestNonreg from '../views/request/nonreg/DetailRequestNonreg.vue'

import AppAccountAdmin from '../views/admin/AppAdmin.vue'
import AppAccountAdminDepartment from '../views/admin/AppAdminDepartment.vue'
import AccountAdminDetail from '../views/admin/AdminDetail.vue'
import AppAccountAdminNew from '../views/admin/AppAdminNew.vue'
import AppAccountAwardee from '../views/admin/AppAwardee.vue'

import AppAccountDonor from '../views/donor/AppDonor.vue'
import AccountDonorIndex from '../views/donor/AppDonorIndex.vue'
import AccountDonorDefault from '../views/donor/AppDonorDefault.vue'
import DetailAccountDonor from '../views/donor/DetailDonor.vue'

import AppAllDonation from '../views/finance/donation/AppAllDonation.vue'
import AllDonationIndex from '../views/finance/donation/AppAllDonationIndex.vue'
import AllDonationDefault from '../views/finance/donation/AppAllDonationDefault.vue'


import Login from "../views/auth/AuthLogin";
import PasswordReset from '../views/auth/AuthPasswordReset'
import ForgotPassword from '../views/auth/AuthForgotPassword'
import Register from '../views/auth/AuthRegister'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: '/admin',
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
        component: AppDashboard,
          meta: {
            auth: true
          },
      }, ]
    },
    {
      path: '/assignment',
      redirect: '/assignment/all',
      component: Full,
      children: [{
          path: 'all',
          name: 'Assignment',
          component: AppAssignment,
            meta: {
              auth: true
            },
        },
        {
          path: 'detail/:assignmentId',
          name: 'AssignmentDetail',
          component: AssignmentDetail,
            meta: {
              auth: true
            },
        },
      ]
    },
    {
      path: '/assignment/new',
      component: Full,
      children: [{
        path: '',
        name: 'AssignmentNew',
        component: AppAssignmentNew,
          meta: {
            auth: true
          },
      }]
    },
    {
      path: '/blog',
      component: Full,
      redirect: '/blog/list',
      children: [{
          path: 'list',
          name: 'Blog',
          component: AppBlog,
            meta: {
              auth: true
            },
        },
        {
          path: 'list/detail/:blogId',
          name: 'BlogDetail',
          component: BlogDetail,
            meta: {
              auth: true
            },
        },
      ]
    },
    {
      path: '/blog/new',
      component: Full,
      children: [{
        path: '',
        name: 'BlogNew',
        component: AppBlogNew,
          meta: {
            auth: true
          },
      }]
    },
    {
      path: '/blog/edit-tag',
      component: Full,
      children: [{
        path: '',
        name: 'BlogTag',
        component: AppBlogTag,
          meta: {
            auth: true
          },
      }]
    },
    {
      path: '/blog/edit-category',
      component: Full,
      children: [{
        path: '',
        name: 'BlogCategory',
        component: AppBlogCategory,
          meta: {
            auth: true
          },
      }]
    },
    {
      path: '/page',
      redirect: '/page/all',
      component: Full,
      children: [{
          path: 'all',
          name: 'Page',
          component: AppPage,
            meta: {
              auth: true
            },
        },
        {
          path: ':pageId',
          name: 'PageDetail',
          component: PageDetail,
            meta: {
              auth: true
            },
        },
      ]
    },
    {
      path: '/page/new',
      component: Full,
      children: [{
        path: '',
        name: 'PageNew',
        component: AppPageNew,
          meta: {
            auth: true
          },
      }]
    },
    {
      path: '/request',
      redirect: '/request/awardee',
      component: Full,
      children: [{
          path: 'awardee',
          name: 'RequestAwardee',
          component: AppRequestAwardee,
          children: [{
              path: '',
              name: 'RequestAwardeeDefault',
              component: RequestAwardeeDefault,
                meta: {
                  auth: true
                },
            },
            {
              path: ':periodYear',
              name: 'RequestAwardeeIndex',
              component: RequestAwardeeIndex,
                meta: {
                  auth: true
                },
            },
          ]
        },
        {
          path: 'awardee/:periodYear/:userId',
          name: 'DetailRequestAwardee',
          component: DetailRequestAwardee,
            meta: {
              auth: true
            },
        },
        {
          path: 'nonreg',
          name: 'RequestNonreg',
          component: AppRequestNonreg,
          children: [{
              path: '',
              name: 'RequestNonregDefault',
              component: RequestNonregDefault,
                meta: {
                  auth: true
                },
            },
            {
              path: ':scholarshipId',
              name: 'RequestNonregIndex',
              component: RequestNonregIndex,
                meta: {
                  auth: true
                },
            },

          ]
        }, {
          path: 'nonreg/:scholarshipId/:userId',
          name: 'DetailRequestNonreg',
          component: DetailRequestNonreg,
            meta: {
              auth: true
            },
        },
      ],
    },
    {
      path: '/admin',
      redirect: 'admin/all',
      component: Full,
      children: [{
          path: 'all',
          name: 'AccountAdmin',
          component: AppAccountAdmin,
            meta: {
              auth: true
            },
        },
        {
          path: 'all/detail/:userId',
          name: 'AccountAdminDetail',
          component: AccountAdminDetail,
            meta: {
              auth: true
            },
        },
        {
          path: 'department',
          name: 'Department',
          component: AppAccountAdminDepartment,
            meta: {
              auth: true
            },
        },
        {
          path: 'new',
          name: 'NewAdmin',
          component: AppAccountAdminNew,
            meta: {
              auth: true
            },
        },
      ]
    },
    {
      path:'/donors',
      redirect:'/donors/period',
      component: Full,
      children:[
        {
          path: 'period',
          name: 'AccountDonor',
          component: AppAccountDonor,
          children: [{
            path: '',
            name: 'AccountDonorDefault',
            component: AccountDonorDefault,
            meta: {
              auth: true
            },
          }, {
            path: ':periodYear',
            name: 'AccountDonorIndex',
            component: AccountDonorIndex,
            meta: {
              auth: true
            },
          }
        ]},
        {
          path: 'period/:periodYear/:userId',
          name: 'DetailAccountDonor',
          component: DetailAccountDonor,
            props: true,
          meta: {
            auth: true
          },
        },
      ]
    },
    {
      path:'/finances',
      component: Full,
      children:[
        {
          path: 'donations',
          name: 'AllDonation',
          component: AppAllDonation,
          children: [{
            path: '',
            name: 'AllDonationDefault',
            component: AllDonationDefault,
            meta: {
              auth: true
            },
          }, {
            path: ':periodYear',
            name: 'AllDonationIndex',
            component: AllDonationIndex,
            props: true,
            meta: {
              auth: true
            },
          }
        ]},
        // {
        //   path: 'period/:periodYear/:userId',
        //   name: 'DetailAccountDonor',
        //   component: DetailAccountDonor,
        //   meta: {
        //     auth: true
        //   },
        // },
      ]
    },
    {
      path: '/account',
      redirect: 'account/awardee',
      component: Full,
      children: [{
          path: 'awardee',
          name: 'AccountAwardee',
          component: AppAccountAwardee
        },
        // {
        //   path: 'donor',
        //   name: 'AccountDonor',
        //   component: AppAccountDonor,
        //   children:[{
        //     path:'',
        //     name:'AccountDonorDefault',
        //     component: AccountDonorDefault,
        //       meta: {
        //         auth: true
        //       },
        //   },{
        //     path:':periodYear',
        //     name:'AccountDonorIndex',
        //     component: AccountDonorIndex,
        //       meta: {
        //         auth: true
        //       },
        //   }]
        // },

      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Plain,
      children: [{
        path: '',
        component: Login,
        // meta: {
        //   guest: true
        // },

      }]
    },
    {
      path: '/register',
      name: 'Register',
      component: Plain,
      children: [{
        path: '',
        component: Register,

      }]
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
