<template>
  <slide-y-up-transition>
    <div v-if="loaded">
      <div v-if="itemsData.length == 0">
        <b-alert show variant="info">
          <h4 class="alert-heading">Belum Ada Awardee</h4>
          <p>
            Masih belum ada awardee yang mendaftar untuk periode ini.
          </p>
          <hr>
          <attachment />
        </b-alert>
      </div>
      <div class="mt-3" v-if="itemsData.length !== 0">
        <b-row>
          <b-col xl="4" md="6" class="mb-3">
            <b-input-group>
              <b-input-group-prepend>
                <b-form-select plain v-model="selectedInputSearch" :options="optionsInputSearch" />
              </b-input-group-prepend>
              <b-form-input autofocus v-model="search" @input="onInput" type="text" placeholder="Instant Search">
              </b-form-input>
              <b-input-group-append>
                <b-btn :disabled="!search" @click="search = ''">Clear</b-btn>
              </b-input-group-append>
            </b-input-group>
          </b-col>
          <b-col xl="8" md="6" style="overflow-y:auto" v-if="getTotalPages > 1">
            <b-pagination-nav align="right" class="justify-content-end mb-0" :use-router="true" :link-gen="linkGen" :number-of-pages="getTotalPages" v-model="currentPage" />
          </b-col>
        </b-row>
        <div style="overflow-y:auto">
          <b-table stacked="sm" stack style="animation-duration: 1s" hover :fields="FieldTableItems" :items="filteredItemsData" thead-class="thead-light" :sort-by.sync="querySortBy" :sort-desc.sync="querySortDesc" @sort-changed="sortingChanged" :current-page="currentPage" :per-page="perPage" @row-clicked="handleRowClicked">
            <template v-slot:cell(no)="data">
              {{ data.index + 1 + (currentPage - 1) * perPage }}
            </template>
            <template v-slot:cell(status)="data">
              <b-badge :variant="getBadgeApproval(data.item.status)">
                {{ data.item.status }}
              </b-badge>
            </template>
          </b-table>
        </div>
      </div>
    </div>

  </slide-y-up-transition>
</template>
<script>
  import Attachment from './AppRequestAwardeeIndexAttachment'
  import {
    AppRequestAwardeeFieldTableData
  } from "./AppRequestAwardeeFieldTableData";
  import {
    instantSearch
  } from "../../_share/mixins/instantSearch";
  import {
    OperationPage
  } from "../../_share/mixins/OperationPage";
  export default {
    name: "AppRequestAwardeeIndex",
    components: {
      Attachment
    },
    mixins: [AppRequestAwardeeFieldTableData, instantSearch, OperationPage],
    data: function() {
      return {
        routeName: "RequestAwardeeIndex",
        loaded: false
      };
    },
    created() {
      this.$store.dispatch("storeBreadcrumbData", {
        linkBackButton: "/request/awardee",
        currentPageName: `List of Awardee Request ${this.$route.params.periodYear}`
      });
    },
    watch: {
      "$route.params.periodYear": "getData"
    },
    methods: {
      handleRowClicked(record) {
        this.$router.push({
          name: "DetailRequestAwardee",
          params: {
            userId: record.awardee.id,
            periodYear: this.$route.params.periodYear
          }
        });
      },

      getData() {
        this.loaded = false;
        this.$store.dispatch('stateLoadingFull', true);
        axios
          .get(`api/auth/awardee?year=${this.$route.params.periodYear}`)
          .then(response => {
            // console.log(response.data)
            this.checkPage();
            const editData = data => {
              return data.map(item => {
                var temp = Object.assign({}, item);
                temp["department"] = temp.awardee.college_department.department;
                temp["status"] = temp.status;
                temp["registered"] = temp.created_at;
                // temp.name = 'my name '+temp.name;
                return temp;
              });
            };
            this.itemsData = editData(response.data);
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
