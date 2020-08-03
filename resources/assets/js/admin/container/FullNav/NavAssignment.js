export default {
  name: 'Assignment',
  icon: 'fa fa-book',
  url: `/assignment`,
  children: [{
      name: 'All Assignment',
      icon: 'fa fa-list',
      url: `/assignment/all`,
    },
    {
      name: 'Add New',
      icon: 'fa fa-plus',
      url: `/assignment/new`
    }
  ]
}
