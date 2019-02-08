export const ProviderPage = {
  data() {
    return {
      isBusy: false,
      routeName: '',
      querySearchKey: '',
      querySearch: '',
      querySortDesc: '',
      querySortBy: this.$route.query.sortBy,
      defaultQuerySortBy:'item',
      currentPagePagination: 1,
      currentPageTable: 1,
      perPage: 10,
      totalRows: 0,
      search: this.$route.query.search || '',
      selectedInputSearch: this.$route.query.searchKey || 'item'
    }
  },
  created() {
    this.getdata()
  },
  watch: {
    search: _.debounce(function (newVal) {
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
      if (this.currentPagePagination !== 1) {
        this.$router.replace({
          name: this.routeName,
          query: Object.assign({}, this.$route.query, {
            page: 1,
            search: this.search
          })
        })
        this.currentPagePagination = 1
      }
      this.getdata()
    }, 500)
  },
  computed: {
    checkNav() {
      return this.$route.query.filterTarget ? this.$route.query.filterTarget : 'all'
    },
    },
  methods: {
    checkPage() {
      this.currentPageTable = Number(this.$route.query.page ? this.$route.query.page : 1)
      this.currentPagePagination = this.currentPageTable
    },
    changePage(page) {
      // let query = Object.assign({},this.$route.query,page)
      // this.$router.push({page:query})
      // this.get(query)
      if ((page == 1 && typeof this.$route.query.page === 'undefined') || page == this.$route.query.page) {
        return
      }
      this.$router.replace({
        name: this.routeName,
        query: Object.assign({}, this.$route.query, {
          page: page
        })
      })
      this.getdata()
    },
    checkSearch() {
      let getSearchKey = this.$route.query.searchKey ? this.$route.query.searchKey : ''
      let getSearch = this.$route.query.search ? this.$route.query.search : ''
      this.querySearchKey = getSearchKey;
      this.querySearch = getSearch;
    },
    sortingChanged(ctx) {
      console.log(ctx);
      this.$router.replace({
        name: this.routeName,
        query: Object.assign({}, this.$route.query, {
          sortBy: ctx.sortBy,
          sortDesc: ctx.sortDesc
        })
      })
      this.getdata();
    },
    getSort() {
      let getOrderingDesc = JSON.parse(typeof this.$route.query.sortDesc === 'undefined' ? false : this.$route.query.sortDesc)
      let getOrderingBy = this.$route.query.sortBy ? this.$route.query.sortBy : this.defaultQuerySortBy
      this.querySortDesc = getOrderingDesc;
      this.querySortBy = getOrderingBy;
    },
    filterTarget(target) {
      // console.log(target);
      if (target == this.$route.query.filterTarget || (target == 'all' && typeof this.$route.query.filterTarget === 'undefined')) {
        return
      }
      this.$router.replace({
        name: this.routeName,
        query: {
          filterTarget: target,
          page: 1
        }
      })
      this.search = ''
      this.getdata()

    },
    getPriority(data) {
      return data === 'high' ? 'text-danger' :
        data === 'medium' ? 'text-warning' : 'text-primary'
    },
    getBadge(status) {
      return status === 'closed' ? 'success' :
        status === 'in progress' ? 'info' :
        status === 'for info' ? 'secondary' :
        status === 'pending' ? 'warning' :
        status === 'canceled' ? 'danger' : 'primary'
    },
  }
}