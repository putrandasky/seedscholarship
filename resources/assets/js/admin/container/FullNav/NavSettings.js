export default {
  name: 'Settings',
  icon: 'fa fa-cog',
  url: `/settings`,
  children: [{
      name: 'General',
      icon: '',
      url: `/settings/general`
    },
    {
      name: 'Period',
      icon: '',
      url: `/settings/period`
    },
    {
      name: 'Scholarship',
      icon: '',
      url: `/settings/scholarship`
    }
  ]
}
