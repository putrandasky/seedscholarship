export default {
  name: 'Broadcast',
  icon: 'fa fa-envelope',
  url: `/broadcast`,
  children: [{
      name: 'Compose',
      icon: 'fa fa-pencil',
      url: `/broadcast/compose`
    },
    {
      name: 'All',
      icon: 'fa fa-list',
      url: `/broadcast/list`
    }
  ]
}
