<template>
  <b-card class="shadow h-100">
    <b-card-title>
      <strong>Top Donatur</strong>
    </b-card-title>
    <b-alert variant="info" :show="data.length == 0">
      <h1 class="lead text-center">
        THERE IS NO TOTAL DONORS DATA.
      </h1>
    </b-alert>
    <template v-if="data.length !== 0">
      <div style="overflow-y:auto">

        <b-table stacked="sm" hover small :fields="fieldsDocuments" :items="data" thead-class="thead-light">
          <template v-slot:cell(no)="data">
            {{data.index+1 | ordinal}}
          </template>
          <template v-slot:cell(name)="data">
            {{data.item.donor.name}}
          </template>
          <template v-slot:cell(total)="data">
            Rp. {{data.item.total_donation | currency}}
          </template>
        </b-table>
      </div>
    </template>
  </b-card>
</template>
<script>
  export default {
    name: 'DashboardTableTopDonors',
    props: [
      'data'
    ],
    data: function() {
      return {
        fieldsDocuments: [{
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
          },
          {
            key: 'total',
            label: 'Total',
            'class': 'text-right',
            thStyle: {
              minWidth: '120px',
              width: '120px'
            },
          },
        ],
      }
    },
    created() {},
    watch: {

    },
    computed: {

    },
    methods: {

    },
  }
</script>
<style>
</style>
