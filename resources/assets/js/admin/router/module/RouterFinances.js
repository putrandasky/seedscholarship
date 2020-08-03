import AppAllDonation from '../../views/finance/donation/AppAllDonation.vue';
import AllDonationIndex from '../../views/finance/donation/AppAllDonationIndex.vue';
import AllDonationDefault from '../../views/finance/donation/AppAllDonationDefault.vue';
import Full from '../../container/Full.vue';


export default {
  path: '/finances',
  component: Full,
  children: [{
      path: 'donations',
      name: 'AllDonation',
      component: AppAllDonation,
      children: [{
          path: '',
          name: 'AllDonationDefault',
          component: AllDonationDefault,
          meta: {
            auth: true
          }
        },
        {
          path: ':periodYear',
          name: 'AllDonationIndex',
          component: AllDonationIndex,
          props: true,
          meta: {
            auth: true
          }
        }
      ]
    }
    // {
    //   path: 'period/:periodYear/:userId',
    //   name: 'DetailAccountDonor',
    //   component: DetailAccountDonor,
    //   meta: {
    //     auth: true
    //   },
    // },
  ]
}
