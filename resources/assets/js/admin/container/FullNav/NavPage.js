export default {
  name: 'Page',
  icon: 'fa fa-files-o',
  url: `/page`,
  children: [{
      name: 'All Page',
      icon: 'fa fa-list',
      url: `/page/all`,
    },
    {
      name: 'Add New',
      icon: 'fa fa-plus',
      url: `/page/new`
    }
  ]
},
