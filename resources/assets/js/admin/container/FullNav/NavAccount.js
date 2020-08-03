export default {
  name: 'Account',
  icon: 'fa fa-users',
  url: `/account`,
  children: [{
      name: 'Awardee',
      icon: '',
      url: `/account/awardee`,
    },
    {
      name: 'Donor',
      icon: '',
      url: `/account/donor`,
    }
  ]
}
