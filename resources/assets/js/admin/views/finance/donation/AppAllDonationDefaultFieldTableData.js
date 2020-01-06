export const AppAllDonationDefaultFieldTableData = {
  data() {
    return {
      FieldTableItems: [
        {
          key: 'no',
          label: 'No',
          class: 'text-center',
          thStyle: {
            minWidth: '30px',
            width: '30px'
          }
        },
        {
          key: 'year',
          label: 'Year'
        },
        {
          key: 'period',
          label: 'Period',
          class: 'text-center'
        },
        {
          key: 'total_transaction',
          label: 'Total Transaction',
          class: 'text-center'
        },
        {
          key: 'verified_transaction',
          label: 'Verified Transaction',
          class: 'text-center'
        },
        {
          key: 'unverified_transaction',
          label: 'Unverified Transaction',
          class: 'text-center'
        },
        {
          key: 'total_amount',
          label: 'Total Amount',
          class: 'text-right'
        },
        {
          key: 'verified_amount',
          label: 'Verified Amount',
          class: 'text-right'
        },
        {
          key: 'unverified_amount',
          label: 'Unverified Amount',
          class: 'text-right'
        },
        {
          key: 'not_sent_invoice',
          label: 'Unsent Receipt',
          class: 'text-right'
        }
      ],
      itemsData: []
    };
  },
  watch: {},
  computed: {}
};
