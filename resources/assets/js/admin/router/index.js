import Vue from 'vue'
import Router from 'vue-router'
import Full from '../container/Full.vue'
import Plain from '../container/Plain.vue'

const AppDashboard = () => import('../views/dashboard/AppDashboard.vue')

// const AppUserAdmin = () => import('../views/user/AppAdmin.vue')
// const AppUserAwardee = () => import('../views/user/AppAwardee.vue')
// const AppUserPatron = () => import('../views/user/AppPatron.vue')

const AppAssignment = () => import('../views/assignment/AppAssignment.vue')
const AppAssignmentNew = () => import('../views/assignment/AppNewAssignment.vue')
const AssignmentDetail = () => import('../views/assignment/AssignmentDetail.vue')

const AppBlog = () => import('../views/blog/AppBlog.vue')
const AppBlogNew = () => import('../views/blog/AppBlogNew.vue')
const AppBlogTag = () => import('../views/blog/AppBlogTag.vue')
const AppBlogCategory = () => import('../views/blog/AppBlogCategory.vue')
const BlogDetail = () => import('../views/blog/BlogDetail.vue')

const AppPage = () => import('../views/page/AppPage.vue')
const AppPageNew = () => import('../views/page/AppPageNew.vue')
const PageDetail = () => import('../views/page/PageDetail.vue')

const AppRequestAwardee = () => import('../views/request/AppRequestAwardee.vue')

const AppRequestPatron = () => import('../views/request/AppRequestPatron.vue')

const AppAccountAdmin = () => import('../views/account/AppAdmin.vue')
const AppAccountAdminDepartment = () => import('../views/account/AppAdminDepartment.vue')
const AccountAdminDetail = () => import('../views/account/AdminDetail.vue')
const AppAccountAdminNew = () => import('../views/account/AppAdminNew.vue')
const AppAccountAwardee = () => import('../views/account/AppAwardee.vue')
const AppAccountPatron = () => import('../views/account/AppPatron.vue')


import Login from "../views/auth/AuthLogin";
const PasswordReset = () => import('../views/auth/AuthPasswordReset')
const ForgotPassword = () => import('../views/auth/AuthForgotPassword')
const Register = () => import('../views/auth/AuthRegister')
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
            redirect: 'dashboard',
            component: Full,
            children: [{
                path: 'dashboard',
                name: 'Dashboard',
                component: AppDashboard,
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
                },
                {
                    path: 'detail/:assignmentId',
                    name: 'AssignmentDetail',
                    component: AssignmentDetail,
                },
            ]
        },
        {
            path: '/assignment/new',
            component: Full,
            children: [{
                path: '',
                name: 'AssignmentNew',
                component: AppAssignmentNew
            }]
        },
        {
            path: '/blog',
            component: Full,
            redirect: '/blog/list',
            children: [{
                    path: 'list',
                    name: 'Blog',
                    component: AppBlog
                },
                {
                    path: 'list/detail/:blogId',
                    name: 'BlogDetail',
                    component: BlogDetail
                },
            ]
        },
        {
            path: '/blog/new',
            component: Full,
            children: [{
                path: '',
                name: 'BlogNew',
                component: AppBlogNew
            }]
        },
        {
            path: '/blog/edit-tag',
            component: Full,
            children: [{
                path: '',
                name: 'BlogTag',
                component: AppBlogTag
            }]
        },
        {
            path: '/blog/edit-category',
            component: Full,
            children: [{
                path: '',
                name: 'BlogCategory',
                component: AppBlogCategory
            }]
        },
        {
            path: '/page',
            redirect: '/page/all',
            component: Full,
            children: [{
                    path: 'all',
                    name: 'Page',
                    component: AppPage
                },
                {
                    path: ':pageId',
                    name: 'PageDetail',
                    component: PageDetail
                },
            ]
        },
        {
            path: '/page/new',
            component: Full,
            children: [{
                path: '',
                name: 'PageNew',
                component: AppPageNew
            }]
        },
        {
            path: '/request',
            redirect: '/request/awardee',
            component: Full,
            children: [{
                    path: 'awardee',
                    name: 'RequestAwardee',
                    component: AppRequestAwardee
                },
                {
                    path: 'patron',
                    name: 'RequestPatron',
                    component: AppRequestPatron
                },
            ]
        },
        {
            path: '/admin',
            redirect: 'admin/all',
            component: Full,
            children: [{
                    path: 'all',
                    name: 'AccountAdmin',
                    component: AppAccountAdmin
                },
                {
                  path:'all/detail/:userId',
                  name:'AccountAdminDetail',
                  component:AccountAdminDetail
                },
                {
                    path: 'department',
                    name: 'Department',
                    component: AppAccountAdminDepartment
                },
                {
                    path: 'new',
                    name: 'NewAdmin',
                    component: AppAccountAdminNew
                },
            ]
        },
        {
            path: '/user',
            redirect: 'user/awardee',
            component: Full,
            children: [{
                    path: 'awardee',
                    name: 'AccountAwardee',
                    component: AppAccountAwardee
                },
                {
                    path: 'patron',
                    name: 'AccountPatron',
                    component: AppAccountPatron
                }
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
