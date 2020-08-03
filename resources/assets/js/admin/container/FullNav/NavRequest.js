export default {
  name: 'Request',
  icon: 'fa fa-user-plus',
  url: `/request`,
  children: [{
      name: 'Awardee',
      icon: '',
      url: `/request/awardee`
    },
    {
      name: 'Nonreg',
      icon: '',
      url: `/request/nonreg`
    }
    // {
    //     name: 'donor',
    //     icon: 'fa fa-list',
    //     url: `/request/donor`,
    // }
  ]
}
