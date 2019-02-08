export const AssignmentFieldTableData = {
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
                    key: 'assignment',
                    label: 'Assignment Name',
                    tdClass: 'truncate-cell',
                    sortable: true,
                    thStyle: {
                        minWidth: '175px',
                    },
                },
                {
                    key: 'closed_date',
                    label: 'Closed Date',
                    'class': 'text-center',
                    thStyle: {
                        minWidth: '150px',
                        width: '150px'
                    },

                    sortable: true
                },
                {
                    key: 'created_at',
                    label: 'Created Date',
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
            ],
            itemsData: [
                {
                id:1,
                assignment:'lorem ipsum',
                closed_date: "2015-03-25",
                created_at: "2015-03-25",
                status:'Active'
            },
                {
                id:2,
                assignment:'Dolor Sit amet',
                closed_date: "2015-03-25",
                created_at: "2015-03-25",
                status:'Closed'
            },
        ],
            selectedInputSearch: this.$route.query.searchKey || 'assignment',
            optionsInputSearch: [{
                    value: 'assignment',
                    text: 'Assignment'
                },
                {
                    value: 'closed_date',
                    text: 'Closed Date'
                },
                {
                    value: 'created_at',
                    text: 'Created Date'
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
            if (this.selectedInputSearch == 'assignment') {
                return this.itemsData.filter(result =>
                    result.assignment.toLowerCase().indexOf(this.search.toLowerCase()) > -1
                )
            }
            if (this.selectedInputSearch == 'closed_date') {
                return this.itemsData.filter(result =>
                    result.closed_date.toLowerCase().indexOf(this.search.toLowerCase()) > -1
                )
            }
            if (this.selectedInputSearch == 'created_at') {
                return this.itemsData.filter(result =>
                    result.created_at.toLowerCase().indexOf(this.search.toLowerCase()) > -1
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
