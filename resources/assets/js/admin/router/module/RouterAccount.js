import AppAccountAwardee from '../../views/admin/AppAwardee.vue';
import Full from '../../container/Full.vue';

export default {
  path: '/account',
  redirect: 'account/awardee',
  component: Full,
  children: [{
      path: 'awardee',
      name: 'AccountAwardee',
      component: AppAccountAwardee
    }
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
}
