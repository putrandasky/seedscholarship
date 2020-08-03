export const AppRequestNonregFieldTableData = {
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
                    key: 'awardee_nonreg.name',
                    label: 'Name',
                    tdClass: 'truncate-cell',
                    sortable: true,
                    thStyle: {
                        minWidth: '175px',
                    },
                },
                {
                    key: 'awardee_nonreg.email',
                    label: 'Email',
                    thStyle: {
                        minWidth: '150px',
                        width: '150px'
                    },

                    sortable: true
                },
                {
                    key: 'department',
                    label: 'Department',
                    thStyle: {
                        minWidth: '250px',
                        width: '250px'
                    },
                    sortable: true
                },
                {
                    key: 'status',
                    label: 'Status',
                    'class': 'text-center',
                    thStyle: {
                        minWidth: '150px',
                        width: '150px'
                    },
                    sortable: true
                },
                {
                    key: 'registered',
                    label: 'Registered',
                    'class': 'text-center',
                    thStyle: {
                        minWidth: '150px',
                        width: '150px'
                    },
                    sortable: true
                },
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
            ],
        }
    },
    watch: {
    },
    computed: {
        filteredItemsData() {
            if (this.selectedInputSearch == 'name') {
                return this.itemsData.filter(result =>
                    result.awardee_nonreg.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
                )
            }
            if (this.selectedInputSearch == 'email') {
                return this.itemsData.filter(result =>
                    result.awardee_nonreg.email.toLowerCase().indexOf(this.search.toLowerCase()) > -1
                )
            }
            if (this.selectedInputSearch == 'department') {
                return this.itemsData.filter(result =>
                    result.department.toLowerCase().indexOf(this.search.toLowerCase()) > -1
                )
            }
        }
    }
}
