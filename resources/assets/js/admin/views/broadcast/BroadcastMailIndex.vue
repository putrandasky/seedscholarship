<template>
  <b-card>
    <slide-y-up-transition>
      <div v-show="loaded">
        <div>
          <b-button-group class="mb-3">
            <router-link v-for="(v,i) in menus" :key="i" tag="button" class="btn btn-outline-primary btn-sm" :to="{ name: routeName, params:{broadcastTypeId:v.id}}">
              {{v.name}}
            </router-link>
          </b-button-group>
        </div>
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
          <b-table stacked="sm" stack small style="animation-duration: 1s" hover :fields="FieldTableItems" :items="filteredItemsData" thead-class="thead-light" :sort-by.sync="querySortBy" :sort-desc.sync="querySortDesc" @sort-changed="sortingChanged" :current-page="currentPage" :per-page="perPage" @row-clicked="handleRowClicked">

            <template v-slot:cell(no)="data">
              {{ data.index + 1 + (currentPage - 1) * perPage }}
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
    TableData
  } from "./BroadcastMailIndex";
  import {
    instantSearch
  } from "../_share/mixins/instantSearch";
  import {
    OperationPage
  } from "../_share/mixins/OperationPage";
  export default {
    name: 'BroadcastMailIndex',
    mixins: [TableData, instantSearch, OperationPage],

    data: function() {
      return {
        routeName: "BroadcastMail",
        menus: [{
            id: 1,
            name: 'Awardee'
          },
          {
            id: 2,
            name: 'Donor'
          },
          {
            id: 3,
            name: 'Scholarship/NonReg'
          }
        ],
        loaded: false,
        title: '',
      };
    },
    created() {
      this.$store.dispatch("storeBreadcrumbData", {
        linkBackButton: "",
        currentPageName: "List Broadcast"
      });
    },
    mounted() {
      this.getData()
    },
    watch: {
      '$route.params.broadcastTypeId': 'getData',
      '$route.params.scholarshipId': 'getData'

    },
    methods: {
      handleRowClicked(record) {
        this.$router.push({
          name: "BroadcastMailDetail",
          params: {
            broadcastId: record.id,
            broadcastTypeId: record.broadcast_type_id
          }
        });
      },
      getData() {
        this.loaded = false;
        axios
          .get(`api/admin/broadcast/index/${this.$route.params.broadcastTypeId}`)
          .then(response => {
            console.log(response.data);
            this.checkPage();
            const editData = data => {
              return data.map(item => {
                var temp = Object.assign({}, item);
                temp["sender_name"] = temp.sender.name
                temp["period_year"] = temp.period.year || temp.scholarship.year
                temp["period_or_scholarship"] = temp.period.period || temp.scholarship.name
                // temp.name = 'my name '+temp.name;
                return temp;
              });
            };
            this.itemsData = editData(response.data);
            this.loaded = true;
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  };
</script>
<style></style>
