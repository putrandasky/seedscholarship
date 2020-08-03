export default {
  name: 'Donor',
  icon: 'fa fa-users',
  url: `/donors`,
  children: [
    // {
    //   name: 'Awardee',
    //   icon: '',
    //   url: `/account/awardee`,
    // },
    {
      name: 'Period',
      icon: '',
      url: `/donors/period`
    }
  ]
}
