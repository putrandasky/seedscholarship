export const AppBlogFieldTableData = {
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
                    key: 'title',
                    label: 'Title',
                    tdClass: 'truncate-cell',
                    sortable: true,
                    thStyle: {
                        minWidth: '175px',
                    },
                },
                {
                    key: 'author',
                    label: 'Author',
                    'class': 'text-center',
                    thStyle: {
                        minWidth: '100px',
                        width: '100px'
                    },

                    sortable: true
                },
                {
                    key: 'category',
                    label: 'Category',
                    'class': 'text-center',
                    thStyle: {
                        minWidth: '150px',
                        width: '150px'
                    },
                    sortable: true
                },
                {
                    key: 'status',
                    label: 'Status',
                    'class': 'text-center',
                    thStyle: {
                        minWidth: '25px',
                        width: '25px'
                    },
                    sortable: true
                },
                {
                    key: 'created_at',
                    label: 'Created',
                    'class': 'text-center',
                    thStyle: {
                        minWidth: '100px',
                        width: '100px'
                    },
                    sortable: true
                },
                {
                    key: 'updated_at',
                    label: 'Updated',
                    'class': 'text-center',
                    thStyle: {
                        minWidth: '100px',
                        width: '100px'
                    },
                    sortable: true
                },
            ],
            itemsData: [],
            selectedInputSearch: this.$route.query.searchKey || 'title',
            optionsInputSearch: [{
                    value: 'title',
                    text: 'Title'
                },
                {
                    value: 'author',
                    text: 'Author'
                },
                {
                    value: 'category',
                    text: 'Category',
                },
                {
                    value: 'status',
                    text: 'Status'
                }
            ],
        }
    },
    watch: {
    },
    computed: {
        filteredItemsData() {
            if (this.selectedInputSearch == 'title') {
                return this.itemsData.filter(result =>
                    result.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
                )
            }
            if (this.selectedInputSearch == 'author') {
                return this.itemsData.filter(result =>
                    result.author.toLowerCase().indexOf(this.search.toLowerCase()) > -1
                )
            }
            if (this.selectedInputSearch == 'category') {
                return this.itemsData.filter(result =>
                    result.category.toLowerCase().indexOf(this.search.toLowerCase()) > -1
                )
            }
            if (this.selectedInputSearch == 'status') {
                return this.itemsData.filter(result =>
                    result.status.toLowerCase().indexOf(this.search.toLowerCase()) > -1
                )
            }
        }
    }
}
