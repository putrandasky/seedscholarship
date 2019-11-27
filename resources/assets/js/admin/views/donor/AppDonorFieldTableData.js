export const AppDonorFieldTableData = {
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
          key: 'name',
          label: 'Name',
          tdClass: 'truncate-cell',
          sortable: true,
          thStyle: {
            minWidth: '175px',
          },
        },
        // {
        //     key: 'email',
        //     label: 'Email',
        //     thStyle: {
        //         minWidth: '175px',
        //     },

        //     sortable: true
        // },
        {
          key: 'department',
          label: 'Department',
          thStyle: {
            minWidth: '120px',
            width: '120px'
          },
          sortable: true
        },
        {
          key: 'year',
          label: 'Year',
          thStyle: {
            minWidth: '50px',
            width: '50px'
          },
          sortable: true
        },
        {
          key: 'category',
          label: 'Category',
          'class': 'text-center',
          thStyle: {
            minWidth: '100px',
            width: '100px'
          },
          sortable: true
        },
        {
          key: 'contract',
          label: 'Contract',
          'class': 'text-center',
          thStyle: {
            minWidth: '100px',
            width: '100px'
          },
          sortable: true
        },
        {
          key: 'unverified_transactions',
          label: 'Unverified',
          'class': 'text-center',
          thStyle: {
            width: '50px'
          },
          sortable: true
        },
        {
          key: 'not_sent_invoice',
          label: 'To Invoice',
          'class': 'text-center',
          thStyle: {
            minWidth: '50px',
            width: '50px'
          },
          sortable: true
        },
        // {
        //     key: 'plan_donation',
        //     label: 'Plan Donation',
        //     'class': 'text-right',
        //     thStyle: {
        //         minWidth: '150px',
        //         width: '150px'
        //     },
        //     sortable: true
        // },
        {
          key: 'total_donation',
          label: 'Donation',
          'class': 'text-right',
          thStyle: {
            minWidth: '120px',
            width: '120px'
          },
          sortable: true
        },
        {
          key: 'plan',
          label: 'Plan to Date',
          'class': 'text-right',
          thStyle: {
            minWidth: '120px',
            width: '120px'
          },
          sortable: true
        },
        {
          key: 'last_donate',
          label: 'Last Donate',
          'class': 'text-center',
          thStyle: {
            minWidth: '120px',
            width: '120px'
          },
          sortable: true
        },
        // {
        //     key: 'registered',
        //     label: 'Registered',
        //     'class': 'text-center',
        //     thStyle: {
        //         minWidth: '150px',
        //         width: '150px'
        //     },
        //     sortable: true
        // },
      ],
      itemsData: [],
      selectedInputSearch: this.$route.query.searchKey || 'name',
      optionsInputSearch: [{
          value: 'name',
          text: 'Name'
        },
        {
          value: 'email',
          text: 'Email'
        },
        {
          value: 'department',
          text: 'Department',
        },
        {
          value: 'year',
          text: 'Year',
        },
        {
          value: 'contract',
          text: 'Contract',
        },
        {
          value: 'category',
          text: 'Category',
        },
        {
          value: 'pco',
          text: 'PCO',
        },
        {
          value: 'pr',
          text: 'PR',
        },
      ],
    }
  },
  watch: {},
  computed: {
    filteredItemsData() {
      if (this.selectedInputSearch == 'name') {
        return this.itemsData.filter(result =>
          result.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        )
      }
      if (this.selectedInputSearch == 'email') {
        return this.itemsData.filter(result =>
          result.email.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        )
      }
      if (this.selectedInputSearch == 'department') {
        return this.itemsData.filter(result =>
          result.department.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        )
      }
      if (this.selectedInputSearch == 'year') {
        return this.itemsData.filter(result =>
          result.year.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        )
      }
      if (this.selectedInputSearch == 'contract') {
        return this.itemsData.filter(result =>
          result.contract.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        )
      }
      if (this.selectedInputSearch == 'category') {
        return this.itemsData.filter(result =>
          result.category.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        )
      }
      if (this.selectedInputSearch == 'pco') {
        return this.itemsData.filter(result =>
          result.pco.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        )
      }
      if (this.selectedInputSearch == 'pr') {
        return this.itemsData.filter(result =>
          result.pr.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        )
      }
    }
  }
}
