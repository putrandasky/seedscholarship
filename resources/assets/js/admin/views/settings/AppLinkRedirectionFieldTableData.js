export const FieldTableData = {
  data() {
    return {
      fieldsDocuments: [{
          key: 'no',
          label: 'No',
          class: 'text-center',
          thStyle: {
            minWidth: '30px',
            width: '30px'
          }
        },
        {
          key: 'path',
          label: 'Link Name',
          thStyle: {
            minWidth: '100px',
            width: '100px'
          }
        },
        {
          key: 'url',
          label: 'Link Target',
          tdClass: 'truncate-cell',
          thStyle: {
            minWidth: '300px',
            width: '300px'
          }
        },
        {
          key: 'created_by',
          label: 'Creator',
          class: 'text-center',
          thStyle: {
            minWidth: '50px',
            width: '50px'
          }
        },
        {
          key: 'visited',
          label: 'Visit',
          class: 'text-center',
          thStyle: {
            minWidth: '50px',
            width: '50px'
          }
        },
        {
          key: 'action',
          label: '',
          class: 'text-center',
          thStyle: {
            minWidth: '100px',
            width: '100px'
          }
        }
      ]
    }
  },

}
