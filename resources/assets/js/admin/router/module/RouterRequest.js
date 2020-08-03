import AppRequestAwardee from '../../views/request/awardee/AppRequestAwardee.vue';
import RequestAwardeeIndex from '../../views/request/awardee/AppRequestAwardeeIndex.vue';
import RequestAwardeeDefault from '../../views/request/awardee/AppRequestAwardeeDefault.vue';
import DetailRequestAwardee from '../../views/request/awardee/DetailRequestAwardee.vue';

import AppRequestNonreg from '../../views/request/nonreg/AppRequestNonreg.vue';
import RequestNonregIndex from '../../views/request/nonreg/AppRequestNonregIndex.vue';
import RequestNonregDefault from '../../views/request/nonreg/AppRequestNonregDefault.vue';
import DetailRequestNonreg from '../../views/request/nonreg/DetailRequestNonreg.vue';

import Full from '../../container/Full.vue';

export default {
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
          }
        },
        {
          path: ':periodYear',
          name: 'RequestAwardeeIndex',
          component: RequestAwardeeIndex,
          meta: {
            auth: true
          }
        }
      ]
    },
    {
      path: 'awardee/:periodYear/:userId',
      name: 'DetailRequestAwardee',
      component: DetailRequestAwardee,
      meta: {
        auth: true
      }
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
          }
        },
        {
          path: ':scholarshipId',
          name: 'RequestNonregIndex',
          component: RequestNonregIndex,
          meta: {
            auth: true
          }
        }
      ]
    },
    {
      path: 'nonreg/:scholarshipId/:userId',
      name: 'DetailRequestNonreg',
      component: DetailRequestNonreg,
      meta: {
        auth: true
      }
    }
  ]
}
