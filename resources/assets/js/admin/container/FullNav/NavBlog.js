export default {
  name: 'Blog',
  icon: 'fa fa-pencil-square-o',
  url: `/blog`,
  children: [{
      name: 'All Blog',
      icon: 'fa fa-list',
      url: `/blog/list`
    },
    {
      name: 'Add New',
      icon: 'fa fa-plus',
      url: `/blog/new`
    },
    {
      name: 'Category',
      icon: 'fa fa-list-alt',
      url: `/blog/edit-category`
    },
    {
      name: 'Tag',
      icon: 'fa fa-tags',
      url: `/blog/edit-tag`
    }
  ]
}
