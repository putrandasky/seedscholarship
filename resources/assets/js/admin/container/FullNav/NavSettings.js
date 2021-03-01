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
      name: 'Link Redirection',
      icon: '',
      url: `/settings/link-redirection`
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
