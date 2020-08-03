import AppAccountDonor from '../../views/donor/AppDonor.vue';
import AccountDonorIndex from '../../views/donor/AppDonorIndex.vue';
import AccountDonorDefault from '../../views/donor/AppDonorDefault.vue';
import ReinvitationDonor from '../../views/donor/ReinvitationDonor.vue';
import DetailAccountDonor from '../../views/donor/DetailDonor.vue';
import Full from '../../container/Full.vue';


export default {
  path: '/donors',
  redirect: '/donors/period',
  component: Full,
  children: [{
      path: 'period',
      name: 'AccountDonor',
      component: AppAccountDonor,
      children: [{
          path: '',
          name: 'AccountDonorDefault',
          component: AccountDonorDefault,
          meta: {
            auth: true
          }
        },
        {
          path: ':periodYear',
          name: 'AccountDonorIndex',
          component: AccountDonorIndex,
          meta: {
            auth: true
          }
        }
      ]
    },
    {
      path: 'period/:periodYear/reinvitiation',
      name: 'ReinvitationDonor',
      component: ReinvitationDonor,
      props: true,
      meta: {
        auth: true
      }
    },
    {
      path: 'period/:periodYear/:userId',
      name: 'DetailAccountDonor',
      component: DetailAccountDonor,
      props: true,
      meta: {
        auth: true
      }
    }
  ]
}
