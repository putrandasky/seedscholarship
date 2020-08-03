import AppAccountAdmin from '../../views/admin/AppAdmin.vue';
import AppAccountAdminDepartment from '../../views/admin/AppAdminDepartment.vue';
import AppAccountAdminDepartmentRole from '../../views/admin/AppAdminDepartmentRole.vue';
import AppAccountAdminDepartmentPermission from '../../views/admin/AppAdminDepartmentPermission.vue';
import AccountAdminDetail from '../../views/admin/AdminDetail.vue';
import AppAccountAdminNew from '../../views/admin/AppAdminNew.vue';
import Full from '../../container/Full.vue';


export default {
  path: '/user',
  redirect: 'user/all',
  component: Full,
  children: [{
      path: 'all',
      name: 'AccountAdmin',
      component: AppAccountAdmin,
      meta: {
        auth: true
      }
    },
    {
      path: 'all/detail/:userId',
      name: 'AccountAdminDetail',
      component: AccountAdminDetail,
      meta: {
        auth: true
      }
    },
    {
      path: 'department',
      name: 'Department',
      component: AppAccountAdminDepartment,
      meta: {
        auth: true
      }
    },
    {
      path: 'department/:departmentId/role',
      name: 'DepartmentRoleIndex',
      component: AppAccountAdminDepartmentRole,
      meta: {
        auth: true
      }
    },
    {
      path: 'department/:departmentId/role/:roleId/permission',
      name: 'DepartmentRolePermission',
      component: AppAccountAdminDepartmentPermission,
      meta: {
        auth: true
      }
    },
    {
      path: 'new',
      name: 'NewAdmin',
      component: AppAccountAdminNew,
      meta: {
        auth: true
      }
    }
  ]
}
