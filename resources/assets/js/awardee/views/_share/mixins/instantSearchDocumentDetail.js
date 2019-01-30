export const instantSearch = {
  data() {
    return {
      selectedInputSearch: this.$route.query.searchKey || 'item',
      search: this.$route.query.search || '',
      optionsInputSearch: [{
          value: 'item',
          text: 'Item'
        },
        {
          value: 'description',
          text: 'Description'
        },
        {
          value: 'action_plan',
          text: 'Action Plan'
        },
        {
          value: 'owner',
          text: 'Owner'
        },
        {
          value: 'source',
          text: 'Source'
        },
        {
          value: 'status',
          text: 'Status'
        },
      ],
    }
  },
  watch: {
    search(newVal) {
      let queryNewVal = Object.assign({}, this.$route.query, {
        searchKey: this.selectedInputSearch,
        search: newVal
      })
      if (newVal == '') {
        delete queryNewVal.searchKey
        delete queryNewVal.search
      }
      this.$router.replace({
        query: queryNewVal
      })
    }
  },
  computed: {
    filteredItemsDocuments() {
      if (this.selectedInputSearch == 'item') {
        return this.itemsDocuments.filter(result =>
          result.item.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        )
      }
      if (this.selectedInputSearch == 'description') {
        return this.itemsDocuments.filter(result =>
          result.description.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        )
      }
      if (this.selectedInputSearch == 'action_plan') {
        return this.itemsDocuments.filter(result =>
          result.action_plan.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        )
      }
      if (this.selectedInputSearch == 'owner') {
        return this.itemsDocuments.filter(result =>
          result.owner.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        )
      }
      if (this.selectedInputSearch == 'source') {
        return this.itemsDocuments.filter(result =>
          result.source.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        )
      }
      if (this.selectedInputSearch == 'status') {
        return this.itemsDocuments.filter(result =>
          result.status.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        )
      }
    }
  }
}