import AppPage from '../../views/page/AppPage.vue';
import AppPageNew from '../../views/page/AppPageNew.vue';
import PageDetail from '../../views/page/PageDetail.vue';
import Full from '../../container/Full.vue';

export default {
  path: '/page',
  redirect: '/page/all',
  component: Full,
  children: [{
      path: 'all',
      name: 'Page',
      component: AppPage,
      meta: {
        auth: true
      }
    },
    {
      path: ':pageId',
      name: 'PageDetail',
      component: PageDetail,
      meta: {
        auth: true
      }
    },
    {
      path: 'new',
      name: 'PageNew',
      component: AppPageNew,
      meta: {
        auth: true
      }
    }
  ]
}
