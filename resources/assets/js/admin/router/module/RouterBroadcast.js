import AppBroadcastIndex from '../../views/broadcast/AppBroadcast.vue';
import BroadcastMailIndex from '../../views/broadcast/BroadcastMailIndex.vue';
import BroadcastMailStatus from '../../views/broadcast/BroadcastMailStatus.vue';
import BroadcastMailCompose from '../../views/broadcast/BroadcastMailCompose.vue';
import BroadcastMailDetail from '../../views/broadcast/BroadcastMailDetail.vue';
import BroadcastReInviteDonorIndex from '../../views/broadcast/BroadcastReInviteDonorIndex.vue';
import Full from '../../container/Full.vue';


export default {
  path: '/broadcast',
  redirect: '/broadcast/list/2',
  component: Full,
  children: [{
      path: 'compose',
      component: BroadcastMailCompose,
      name: 'BroadcastCompose',
      meta: {
        auth: true
      }
    },
    {
      path: 'list',
      redirect: '/broadcast/list/2',
    },
    {
      path: 'list/:broadcastTypeId',
      component: BroadcastMailIndex,
      name: 'BroadcastMail',
      meta: {
        auth: true
      }
    },
    {
      path: 'list/:broadcastTypeId/:broadcastId',
      component: BroadcastMailDetail,
      name: 'BroadcastMailDetail',
      meta: {
        auth: true
      }
    },
    {
      path: 'list/:broadcastTypeId/:broadcastId/status',
      component: BroadcastMailStatus,
      name: 'BroadcastMailStatus',
      meta: {
        auth: true
      }
    },
    {
      path: 're-invite-donor',
      component: BroadcastReInviteDonorIndex,
      name: 'BroadcastReInviteDonor',
      meta: {
        auth: true
      }
    },
  ]
}
