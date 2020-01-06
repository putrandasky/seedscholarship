export const FieldTableData = {
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
          key: 'awardee_total',
          label: 'Total',
          class: 'text-center'
        },
        {
          key: 'awardee_inprogress_total',
          label: 'In Progress',
          class: 'text-center'
        },
        {
          key: 'awardee_submitted_total',
          label: 'Submitted',
          class: 'text-center'
        },
        {
          key: 'awardee_approved_total',
          label: 'Approved',
          class: 'text-center'
        },
        {
          key: 'awardee_not_approved_total',
          label: 'Not Approved',
          class: 'text-center'
        }
      ],
      itemsData: []
    };
  },
  watch: {},
  computed: {}
};
