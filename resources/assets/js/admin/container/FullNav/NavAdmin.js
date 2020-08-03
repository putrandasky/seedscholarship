export default {
  name: 'Admin',
  icon: 'fa fa-user-secret',
  url: `/user`,
  children: [{
      name: 'User',
      icon: '',
      url: `/user/all`
    },
    {
      name: 'Department',
      icon: '',
      url: `/user/department`
    },
    {
      name: 'Add New',
      icon: '',
      url: `/user/new`
    }
  ]
}
