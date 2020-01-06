<template>
 <slide-y-up-transition>
    <div  v-show="loaded">
      <b-row>
        <b-col cols="12">
          <h4>
            Please Select Period
          </h4>
        </b-col>
      </b-row>
      <b-row>
        <b-col xl="8" md="6" style="overflow-y:auto" v-if="getTotalPages > 1">
          <b-pagination-nav
            align="right"
            class="justify-content-end mb-0"
            :use-router="true"
            :link-gen="linkGen"
            :number-of-pages="getTotalPages"
            v-model="currentPage"
          />
        </b-col>
      </b-row>
      <div style="overflow-y:auto">
        <b-table
          stacked="sm"
          stack
          small
          style="animation-duration: 1s"
          hover
          :fields="FieldTableItems"
          :items="filteredItemsData"
          thead-class="thead-light"
          :sort-by.sync="querySortBy"
          :sort-desc.sync="querySortDesc"
          @sort-changed="sortingChanged"
          :current-page="currentPage"
          :per-page="perPage"
          @row-clicked="handleRowClicked"
        >
          <template v-slot:cell(no)="data">
            {{ data.index + 1 + (currentPage - 1) * perPage }}
          </template>
        </b-table>
      </div>
    </div>
 </slide-y-up-transition>
</template>
<script>
import { FieldTableData } from "./AppRequestAwardeeDefaultFieldTableData";

import { OperationPage } from "../../_share/mixins/OperationPage";
export default {
  name: 'AppRequestAwardeeDefault',
  mixins: [FieldTableData, OperationPage],
  data: function() {
    return {
      routeName: "RequestAwardeeDefault",
      loaded: false,
      filteredItemsData: []
    };
  },
  created() {
    // this.getData()
    this.$store.dispatch('storeBreadcrumbData', {
      linkBackButton: '',
      currentPageName: 'Awardee Request Period'
    });
  },
  methods: {
        handleRowClicked(record) {
      this.$router.push({
        name: "RequestAwardeeIndex",
        params: {
          periodYear: record.year
        }
      });
    },
    getData() {
      this.loaded = false;
      axios
        .get(`api/admin/awardee/request/index`)
        .then(response => {
          console.log(response.data);
          this.checkPage();
          this.filteredItemsData = response.data;
          setTimeout(() => {
            
            this.loaded = true;
          }, 100);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style></style>
