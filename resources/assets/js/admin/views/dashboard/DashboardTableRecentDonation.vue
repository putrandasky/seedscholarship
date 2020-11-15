<template>
  <b-card class="shadow h-100">
    <b-card-title>
      <strong>Recent Donation</strong>
    </b-card-title>
    <b-alert variant="info" :show="data.length == 0">
      <h1 class="lead text-center">
        THERE IS NO RECENTLY ADDED DONATION.
      </h1>
    </b-alert>
    <template v-if="data.length !== 0">
      <div style="overflow-y:auto">

        <b-table stacked="sm" hover small :fields="fieldsDocuments" :items="data" thead-class="thead-light">
          <!-- <template v-slot:cell(no)="data">
            {{data.index+1}}
          </template> -->
          <template v-slot:cell(name)="data">
            {{data.item.donor.name}}
          </template>
          <template v-slot:cell(amount)="data">
            Rp. {{data.item.amount | currency}}
          </template>
          <template v-slot:cell(created_at)="data">
            {{data.item.created_at}}

          </template>
        </b-table>
      </div>
    </template>
  </b-card>
</template>
<script>
  export default {
    name: 'DashboardTableRecentDonation',
    props: [
      'data'
    ],
    data: function() {
      return {
        fieldsDocuments: [
          // {
          //   key: 'no',
          //   label: 'No',
          //   'class': 'text-center',
          //   thStyle: {
          //     minWidth: '30px',
          //     width: '30px'
          //   },
          // },
          {
            key: 'created_at',
            label: 'Date',
            'class': 'text-center',
            thStyle: {
              minWidth: '100px',
              width: '100px'
            },
          },
          {
            key: 'name',
            label: 'Name',
            tdClass: 'truncate-cell',
          },
          {
            key: 'amount',
            label: 'Amount',
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
