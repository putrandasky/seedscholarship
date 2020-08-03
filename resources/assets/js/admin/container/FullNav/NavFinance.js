export default {
  name: 'Finances',
  icon: 'fa fa-money',
  url: `/finances`,
  children: [
    // {
    //   name: 'Awardee',
    //   icon: '',
    //   url: `/account/awardee`,
    // },
    {
      name: 'Donations',
      icon: '',
      url: `/finances/donations`
    }
  ]
}
