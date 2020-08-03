import AppGeneralSettings from '../../views/settings/AppGeneral.vue';
import AppPeriodSettings from '../../views/settings/AppPeriod.vue';
import AppScholarshipSettings from '../../views/settings/AppScholarship.vue';
import Full from '../../container/Full.vue';

export default {
  path: '/settings',
  component: Full,
  children: [{
      path: 'general',
      component: AppGeneralSettings,
      name: 'GeneralSettings',
      meta: {
        auth: true
      }
    },
    {
      path: 'period',
      component: AppPeriodSettings,
      name: 'PeriodSettings',
      meta: {
        auth: true
      }
    },
    {
      path: 'scholarship',
      component: AppScholarshipSettings,
      name: 'ScholarshipSettings',
      meta: {
        auth: true
      }
    }
  ]
}
