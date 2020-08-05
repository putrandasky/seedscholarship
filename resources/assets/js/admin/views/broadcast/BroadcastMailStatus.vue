<template>
  <b-card>
    <slide-y-up-transition>
      <div v-show="loaded">
        <b-row>
          <b-col xl="8" md="6" style="overflow-y:auto" v-if="getTotalPages > 1">
            <b-pagination-nav align="right" class="justify-content-end mb-0" :use-router="true" :link-gen="linkGen" :number-of-pages="getTotalPages" v-model="currentPage" />
          </b-col>
        </b-row>
        <div style="overflow-y:auto">
          <b-table stacked="sm" stack small style="animation-duration: 1s" hover :fields="FieldTableItems" :items="filteredItemsData" thead-class="thead-light" :current-page="currentPage" :per-page="perPage">

            <template v-slot:cell(no)="data">
              {{ data.index + 1 + (currentPage - 1) * perPage }}
            </template>
            <template v-slot:cell(status)="data">
              <b-badge :variant="getBadgeStatus(data.value)">
                {{ data.value }}
              </b-badge>
            </template>
            <!-- <template v-slot:cell(sender_name)="data">
            Rp. {{ data.item.plan_donation | currency }}
          </template>
          <template v-slot:cell(title)="data">
            Rp. {{ data.item.actual_donation | currency }}
          </template>
          <template v-slot:cell(broadcast)="data">
            Rp. {{ data.item.remaining_donation | currency }}
          </template> -->
          </b-table>
        </div>
      </div>

    </slide-y-up-transition>
  </b-card>
</template>
<script>
  import {
    instantSearch
  } from "../_share/mixins/instantSearch";
  import {
    OperationPage
  } from "../_share/mixins/OperationPage";
  export default {
    name: 'BroadcastMailIndex',
    mixins: [instantSearch, OperationPage],

    data: function() {
      return {
        routeName: "BroadcastMailStatus",
        loaded: false,
        broadcastTypeId: this.$route.params.broadcastTypeId,
        broadcastId: this.$route.params.broadcastId,
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
            key: 'accountable.name',
            label: 'Name',
            sortable: false,
            thStyle: {
              minWidth: '175px',
            }
          },
          {
            key: 'status',
            label: 'Status',
            tdClass: 'truncate-cell',
            thStyle: {
              minWidth: '75px',
              width: '75px'
            },
            sortable: false
          },
          {
            key: 'updated_at',
            label: 'Updated',
            thStyle: {
              minWidth: '150px',
              width: '150px'
            },
            sortable: false
          }
        ],
        filteredItemsData: []
      };
    },
    created() {
      this.$store.dispatch("storeBreadcrumbData", {
        linkBackButton: `/broadcast/list/${this.broadcastTypeId}/${this.broadcastId}`,
        currentPageName: "Broadcast Status"
      });
    },
    mounted() {
      // this.getData()
    },
    methods: {
      getData() {
        this.$store.dispatch('stateLoadingFull', true);
        this.loaded = false;
        axios
          .get(`api/admin/broadcast/index/status/${this.broadcastId}`)
          .then(response => {
            console.log(response.data);
            this.checkPage();
            // const editData = data => {
            //   return data.map(item => {
            //     var temp = Object.assign({}, item);
            //     temp["sender_name"] = temp.sender.name
            //     temp["period_year"] = temp.period.year || temp.scholarship.year
            //     temp["period_or_scholarship"] = temp.period.period || temp.scholarship.name
            //     return temp;
            //   });
            // };
            this.filteredItemsData = response.data;
            this.loaded = true;
            this.$store.dispatch('stateLoadingFull', false);
          })
          .catch(error => {
            console.log(error);
            this.$store.dispatch('stateLoadingFull', false);
            this.$snotify.error(
              "Ooops, There's Something Error, Try Again Later",
              'ERROR'
            );
          });
      },
      getBadgeStatus(status) {
        return status === "SENT" ?
          "success" :
          status === "FAILED" ?
          "danger" :
          "secondary";
      },
    }
  };
</script>
<style></style>
