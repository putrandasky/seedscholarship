import AppAssignment from '../../views/assignment/AppAssignment.vue';
import AppAssignmentNew from '../../views/assignment/AppNewAssignment.vue';
import AssignmentDetail from '../../views/assignment/AssignmentDetail.vue';
import Full from '../../container/Full.vue';

export default {
  path: '/assignment',
  redirect: '/assignment/all',
  component: Full,
  children: [{
      path: 'all',
      name: 'Assignment',
      component: AppAssignment,
      meta: {
        auth: true
      }
    },
    {
      path: 'detail/:assignmentId',
      name: 'AssignmentDetail',
      component: AssignmentDetail,
      meta: {
        auth: true
      }
    },
    {
      path: 'new',
      name: 'AssignmentNew',
      component: AppAssignmentNew,
      meta: {
        auth: true
      }

    }
  ]
}
