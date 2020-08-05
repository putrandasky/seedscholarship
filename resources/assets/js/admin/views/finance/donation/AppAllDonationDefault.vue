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
          <template v-slot:cell(total_amount)="data">
            Rp. {{ data.item.total_amount | currency }}
          </template>
          <template v-slot:cell(verified_amount)="data">
            Rp. {{ data.item.verified_amount | currency }}
          </template>
          <template v-slot:cell(unverified_amount)="data">
            Rp. {{ data.item.unverified_amount | currency }}
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
    AppAllDonationDefaultFieldTableData
  } from "./AppAllDonationDefaultFieldTableData";
  import {
    OperationPage
  } from "../../_share/mixins/OperationPage";
  export default {
    name: "AppAllDonationDefault",
    mixins: [AppAllDonationDefaultFieldTableData, OperationPage],
    data: function() {
      return {
        routeName: "AllDonationDefault",
        loaded: false,
        filteredItemsData: []
      };
    },
    created() {
      this.$store.dispatch("storeBreadcrumbData", {
        linkBackButton: "",
        currentPageName: "Periode Transaksi"
      });
    },
    methods: {
      handleRowClicked(record) {
        this.$router.push({
          name: "AllDonationIndex",
          params: {
            periodYear: record.year
          }
        });
      },
      getData() {
        this.loaded = false;
        this.$store.dispatch('stateLoadingFull', true);
        axios
          .get(`api/donor-transaction/year-index`)
          .then(response => {
            console.log(response.data);
            this.checkPage();
            this.filteredItemsData = response.data;
            this.loaded = true;
            this.$store.dispatch('stateLoadingFull', false);
          })
          .catch(error => {
            this.$store.dispatch('stateLoadingFull', false);
            this.$snotify.error(
              "Ooops, There's Something Error, Try Again Later",
              'ERROR'
            );
            console.log(error);
          });
      }
    }
  };
</script>
<style></style>
