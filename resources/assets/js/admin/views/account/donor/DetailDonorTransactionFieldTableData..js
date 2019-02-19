export const FieldTableData = {
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
          key: 'created_at',
          label: 'Input Date',
          thStyle: {
            minWidth: '100px',
            width: '100px',
          },
        },
        {
          key: 'trx_date',
          label: 'Trx Date',
          thStyle: {
            minWidth: '100px',
            width: '100px',
          },
        },
        {
          key: 'amount',
          label: 'Amount',
          'class': 'text-right',
          thStyle: {
            minWidth: '100px',
            width: '100px'
          },

        },
        {
          key: 'evidence',
          label: 'Evidence',
          tdClass: 'truncate-cell',
          thStyle: {
            minWidth: '250px',
            // width: '250px'
          },
        },
        {
          key: 'verification',
          label: 'Verification',
          'class': 'text-center',
          thStyle: {
            minWidth: '150px',
            width: '150px'
          },
        },
        {
          key: 'invoice_no',
          label: 'Invoice No',
          'class': 'text-center',
          thStyle: {
            minWidth: '100px',
            width: '100px'
          },
        },
        {
          key: 'status_invoice',
          label: 'Status',
          'class': 'text-center',
          thStyle: {
            minWidth: '100px',
            width: '100px'
          },
        },
        {
          key: 'actions',
          label: 'Actions',
          'class': 'text-center',
          thStyle: {
            minWidth: '100px',
            width: '100px'
          },
        },
      ],
      itemsData: [],

    }
  },

}
