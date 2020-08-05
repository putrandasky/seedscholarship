<template>
  <!-- <div class="mt-3">
  <b-alert show variant="info">Please select Scholarship period above</b-alert>
</div> -->
  <slide-y-up-transition>
    <div v-show="loaded">
      <b-row>
        <b-col cols="12">
          <h4>
            Please Select Period
          </h4>
        </b-col>
      </b-row>
      <b-row>
        <b-col xl="8" md="6" style="overflow-y:auto" v-if="getTotalPages > 1">
          <b-pagination-nav align="right" class="justify-content-end mb-0" :use-router="true" :link-gen="linkGen" :number-of-pages="getTotalPages" v-model="currentPage" />
        </b-col>
      </b-row>
      <div style="overflow-y:auto">
        <b-table stacked="sm" stack small style="animation-duration: 1s" hover :fields="FieldTableItems" :items="filteredItemsData" thead-class="thead-light" :sort-by.sync="querySortBy" :sort-desc.sync="querySortDesc" @sort-changed="sortingChanged" :current-page="currentPage" :per-page="perPage" @row-clicked="handleRowClicked">
          <!-- <template slot="HEAD_unverified_transactions" slot-scope="data">
              <span>
              <i v-b-tooltip.top.hover title="Unverified Transactions"  class="fa fa-check" style="cursor: pointer;color:limegreen"></i>
              </span>
            </template>
            <template slot="HEAD_not_sent_invoice" slot-scope="data">
              <span>
              <i v-b-tooltip.top.hover title="Payment receipt to send"  class="fa fa-send" style="cursor: pointer"></i>
              </span>
            </template> -->
          <template v-slot:cell(no)="data">
            {{ data.index + 1 + (currentPage - 1) * perPage }}
          </template>
          <template v-slot:cell(plan_donation)="data">
            Rp. {{ data.item.plan_donation | currency }}
          </template>
          <template v-slot:cell(actual_donation)="data">
            Rp. {{ data.item.actual_donation | currency }}
          </template>
          <template v-slot:cell(remaining_donation)="data">
            Rp. {{ data.item.remaining_donation | currency }}
          </template>
          <!-- <template slot="last_donate" slot-scope="data">
            <b-badge :variant="getBadgeLastDonate(data.item.last_donate)">
            {{data.item.last_donate }}
            </b-badge>
          </template> -->
        </b-table>
      </div>
    </div>
  </slide-y-up-transition>
</template>
<script>
  import {
    AppDonorDefaultFieldTableData
  } from "./AppDonorDefaultFieldTableData";
  import {
    OperationPage
  } from "../_share/mixins/OperationPage";
  export default {
    name: "AppDonorDefault",
    mixins: [AppDonorDefaultFieldTableData, OperationPage],
    data: function() {
      return {
        routeName: "DonorDefault",
        loaded: false,
        filteredItemsData: []
      };
    },
    created() {
      this.$store.dispatch("storeBreadcrumbData", {
        linkBackButton: "",
        currentPageName: "Periode Donatur"
      });
    },
    methods: {
      handleRowClicked(record) {
        this.$router.push({
          name: "AccountDonorIndex",
          params: {
            periodYear: record.year
          }
        });
      },
      getData() {
        this.loaded = false;
        this.$store.dispatch('stateLoadingFull', true);
        axios
          .get(`api/auth/donor-index`)
          .then(response => {
            console.log(response.data);
            this.checkPage();
            const editData = data => {
              return data.map(item => {
                var temp = Object.assign({}, item);
                temp["period"] = temp.period;
                temp["year"] = temp.year;
                temp["donor_active"] = temp.donor_active;
                temp["donor_passive"] = temp.donor_passive;
                temp["total_donor"] = temp.donor_passive + temp.donor_active;
                temp["plan_donation"] = temp.plan_donation;
                temp["actual_donation"] = temp.actual_donation;
                temp["remaining_donation"] =
                  temp.actual_donation - temp.plan_donation;
                // temp.name = 'my name '+temp.name;
                return temp;
              });
            };
            this.filteredItemsData = editData(response.data);
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
      }
    }
  };
</script>
<style></style>
