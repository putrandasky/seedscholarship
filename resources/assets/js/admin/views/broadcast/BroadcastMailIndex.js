export const TableData = {
  data() {
    return {
      FieldTableItems: [{
          key: 'no',
          label: 'No',
          class: 'text-center',
          thStyle: {
            minWidth: '30px',
            width: '30px'
          }
        },
        {
          key: 'sender_name',
          label: 'Sender',
          sortable: false,
          thStyle: {
            maxWidth: '175px',
            width: '175px'
          }
        },
        {
          key: 'title',
          label: 'Title',
          tdClass: 'truncate-cell',
          thStyle: {
            minWidth: '150px',
          },
          sortable: false
        },
        {
          key: 'period_or_scholarship',
          label: 'Period / Scholarship',
          thStyle: {
            minWidth: '250px',
            width: '250px'
          },
          sortable: false
        },
        {
          key: 'period_year',
          label: 'Year',
          thStyle: {
            minWidth: '50px',
            width: '50px'
          },
          sortable: false
        },
        {
          key: 'created_at',
          label: 'Created',
          thStyle: {
            minWidth: '75px',
            width: '75px'
          },
          sortable: false
        }
      ],
      itemsData: [],
      selectedInputSearch: this.$route.query.searchKey || 'sender_name',
      optionsInputSearch: [{
          value: 'sender_name',
          text: 'Sender'
        },
        {
          value: 'title',
          text: 'Title'
        },
        {
          value: 'period_or_scholarship',
          text: 'Period / Scholarship',
        },
        {
          value: 'period_year',
          text: 'Year',
        }
      ],
    }
  },
  watch: {},
  computed: {
    filteredItemsData() {
      if (this.selectedInputSearch == 'sender_name') {
        return this.itemsData.filter(result =>
          result.sender_name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        )
      }
      if (this.selectedInputSearch == 'title') {
        return this.itemsData.filter(result =>
          result.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        )
      }
      if (this.selectedInputSearch == 'period_or_scholarship') {
        return this.itemsData.filter(result =>
          result.period_or_scholarship.toString().toLowerCase().indexOf(this.search.toLowerCase()) > -1
        )
      }
      if (this.selectedInputSearch == 'period_year') {
        return this.itemsData.filter(result =>
          result.period_year.toString().toLowerCase().indexOf(this.search.toLowerCase()) > -1
        )
      }
    }
  }
}
