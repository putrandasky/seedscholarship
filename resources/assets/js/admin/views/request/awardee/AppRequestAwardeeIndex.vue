<template>
  <slide-y-up-transition>
    <div v-if="loaded" class="mt-3">
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
          <b-pagination-nav align="right" class="justify-content-end mb-0" :use-router="true" :link-gen="linkGen"
            :number-of-pages="getTotalPages" v-model="currentPage" />
        </b-col>
      </b-row>
      <div style="overflow-y:auto">
        <b-table stacked="sm" stack style="animation-duration: 1s" hover :fields="FieldTableItems" :items="filteredItemsData"
          thead-class="thead-light" :sort-by.sync="querySortBy" :sort-desc.sync="querySortDesc" @sort-changed="sortingChanged"
          :current-page="currentPage" :per-page="perPage" @row-clicked="handleRowClicked">
          <template slot="no" slot-scope="data">
            {{data.index+1+((currentPage-1)*perPage)}}
          </template>
          <template slot="status" slot-scope="data">
            <b-badge :variant="getBadgeApproval(data.item.awardee_periods[0].status)">
              {{data.item.status}}
            </b-badge>
          </template>
        </b-table>
      </div>
    </div>
  </slide-y-up-transition>
</template>
<script>
  import {
    AppRequestAwardeeFieldTableData
  } from "./AppRequestAwardeeFieldTableData"
  import {
    instantSearch
  } from "../../_share/mixins/instantSearch";
  import {
    OperationPage
  } from "../../_share/mixins/OperationPage";
  export default {
    name: 'AppAdmin',
    mixins: [AppRequestAwardeeFieldTableData, instantSearch, OperationPage],
    data: function () {
      return {
        routeName: 'AppRequestAwardeeIndex',
        loaded: false,
      }
    },
    created() {},
    watch: {
      '$route.params.periodYear': 'getData'
    },
    methods: {
      handleRowClicked(record) {
        this.$router.push({
          name: 'DetailRequestAwardee',
          params: {
            userId: record.id,
            periodYear: this.$route.params.periodYear
          }
        })
      },
      getData() {
        this.loaded = false
        axios.get(`api/auth/awardee?year=${this.$route.params.periodYear}`)
          .then((response) => {
            // console.log(response.data)
            this.checkPage()
            const editData = (data) => {
              return data.map(item => {
                var temp = Object.assign({}, item);
                temp['department'] = temp.college_department.department
                temp['status'] = temp.awardee_periods[0].status
                temp['registered'] = temp.created_at
                // temp.name = 'my name '+temp.name;
                return temp;
              });
            }
            this.itemsData = editData(response.data)
            this.loaded = true
          })
          .catch((error) => {
            console.log(error);
          })
      }
    },
  }

</script>
<style>
</style>
