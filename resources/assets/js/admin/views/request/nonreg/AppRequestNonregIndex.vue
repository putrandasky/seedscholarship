<template>
  <slide-y-up-transition>
    <div v-if="loaded" class="mt-3">
      <b-row>
        <b-col xl="4" md="6" class="mb-3">
          <b-input-group>
            <b-input-group-prepend>
              <b-form-select
                plain
                v-model="selectedInputSearch"
                :options="optionsInputSearch"
              />
            </b-input-group-prepend>
            <b-form-input
              autofocus
              v-model="search"
              @input="onInput"
              type="text"
              placeholder="Instant Search"
            >
            </b-form-input>
            <b-input-group-append>
              <b-btn :disabled="!search" @click="search = ''">Clear</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-col>
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
          <template  v-slot:cell(no)="data">
            {{ data.index + 1 + (currentPage - 1) * perPage }}
          </template>
          <template  v-slot:cell(status)="data">
            <b-badge
              :variant="
                getBadgeApproval(
                  data.item.status
                )
              "
            >
              {{ data.item.status }}
            </b-badge>
          </template>
        </b-table>
      </div>
    </div>
  </slide-y-up-transition>
</template>
<script>
import { AppRequestNonregFieldTableData } from './AppRequestNonregFieldTableData';
import { instantSearch } from '../../_share/mixins/instantSearch';
import { OperationPage } from '../../_share/mixins/OperationPage';
export default {
  name: 'AppDetailRequestNonreg',
  mixins: [AppRequestNonregFieldTableData, instantSearch, OperationPage],
  data: function() {
    return {
      routeName: 'RequestNonregIndex',
      loaded: false
    };
  },
  created() {
    this.$store.dispatch('storeBreadcrumbData', {
      linkBackButton: '/request/nonreg',
      currentPageName: `List of Awardee Nonreg`
    });
  },
  watch: {
    '$route.params.scholarshipId': 'getData'
  },
  methods: {
    handleRowClicked(record) {
      this.$router.push({
        name: 'DetailRequestNonreg',
        params: {
          userId: record.awardee_nonreg.id,
          scholarshipId: this.$route.params.scholarshipId
        }
      });
    },
    getData() {
      this.loaded = false;
      axios
        .get(`api/auth/nonreg?id=${this.$route.params.scholarshipId}`)
        .then(response => {
          // console.log(response.data)
          this.checkPage();
          const editData = data => {
            return data.map(item => {
              var temp = Object.assign({}, item);
              temp['department'] = temp.awardee_nonreg.college_department.department;
              temp['status'] = temp.status;
              temp['registered'] = temp.created_at;
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
