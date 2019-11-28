export const AppDonorDefaultFieldTableData = {
  data() {
    return {
      FieldTableItems: [{
          key: 'no',
          label: 'No',
          'class': 'text-center',
          thStyle: {
            minWidth: '30px',
            width: '30px'
          },
        },
        {
          key: 'year',
          label: 'Year',
        },
        {
          key: 'period',
          label: 'Period',
          'class': 'text-center',
        },
        {
          key: 'donor_active',
          label: 'Active',
          'class': 'text-center',
        },
        {
          key: 'donor_passive',
          label: 'Pasif',
          'class': 'text-center',
        },
        {
          key: 'total_donor',
          label: 'Total',
          'class': 'text-center',
        },
        {
          key: 'plan_donation',
          label: 'Plan Donation',
          'class': 'text-right',
          thStyle: {
            minWidth: '175px',
            width: '175px'
          },
        },
        {
          key: 'actual_donation',
          label: 'Actual Donation',
          'class': 'text-right',
          thStyle: {
            minWidth: '175px',
            width: '175px'
          },
        },
        {
          key: 'remaining_donation',
          label: 'Remaining Donation',
          'class': 'text-right',
          thStyle: {
            minWidth: '175px',
            width: '175px'
          },
        },
      ],
      itemsData: [],

    }
  },
  watch: {},
  computed: {

  }
}
