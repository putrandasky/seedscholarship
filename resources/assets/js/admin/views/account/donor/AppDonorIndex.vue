<template>
  <slide-y-up-transition>
    <div v-show="loaded" class="mt-3">
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

            <template slot="HEAD_unverified_transactions" slot-scope="data">
              <span>
              <i v-b-tooltip.top.hover title="Unverified Transactions"  class="fa fa-check" style="cursor: pointer;color:limegreen"></i>
              </span>
            </template>
            <template slot="HEAD_not_sent_invoice" slot-scope="data">
              <span>
              <i v-b-tooltip.top.hover title="Payment receipt to send"  class="fa fa-send" style="cursor: pointer"></i>
              </span>
            </template>
          <template slot="no" slot-scope="data">
            {{data.index+1+((currentPage-1)*perPage)}}
          </template>
          <template slot="category" slot-scope="data">
            <b-badge :variant="getBadgeCategory(data.item.category)">
              {{data.item.category}}
            </b-badge>
          </template>
          <template slot="contract" slot-scope="data">
            <b-badge :variant="getBadgeContract(data.item.contract)">
              {{data.item.contract}}
            </b-badge>
          </template>
        </b-table>
      </div>
    </div>
  </slide-y-up-transition>
</template>
<script>
  import {
    AppDonorFieldTableData
  } from "./AppDonorFieldTableData"
  import {
    instantSearch
  } from "../../_share/mixins/instantSearch";
  import {
    OperationPage
  } from "../../_share/mixins/OperationPage";
  export default {
    name: 'AppAdmin',
    mixins: [AppDonorFieldTableData, instantSearch, OperationPage],
    data: function () {
      return {
        routeName: 'AppDonorIndex',
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
          name: 'DetailAccountDonor',
          params: {
            userId: record.id,
            periodYear: this.$route.params.periodYear
          }
        })
      },
      getData() {
        this.loaded = false
        axios.get(`api/auth/donor?year=${this.$route.params.periodYear}`)
          .then((response) => {
            console.log(response.data)
            this.checkPage()
            const editData = (data) => {
              return data.map(item => {
                var temp = Object.assign({}, item);
                temp['department'] = temp.awardee_department.department
                temp['category'] = temp.periods[0].pivot.donation_category
                temp['registered'] = temp.created_at
                temp['contract'] = temp.periods[0].pivot.is_contract_agreed
                temp['last_donate'] = temp.donor_transactions[0].trx_date
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
      },
      getBadgeContract(status) {
        return status === 'AGREED' ? 'success' :
          status === 'NOT YET' ? 'secondary' : 'primary'
      },
      getBadgeCategory(status) {
        return status === 'AKTIF' ? 'primary' :
          status === 'PASIF' ? 'success' : 'secondary'
      },
    },
  }

</script>
<style>
</style>
