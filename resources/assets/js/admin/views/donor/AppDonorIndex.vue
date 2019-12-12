<template>
  <slide-y-up-transition>
    <div v-show="loaded">

      <!-- <b-btn class="mb-2" @click="handleClickBackButton" size="sm">
        Back
      </b-btn> -->

      <b-row>
        <b-col sm="6" md="3">
          <panel :data="panel.user" title="total donor" />
        </b-col>
        <b-col sm="6" md="3">
          <panel :data="panel.plan" title="target donation" />
        </b-col>
        <b-col sm="6" md="3">
          <panel :data="panel.actual" title="actual to date" />
        </b-col>
        <b-col sm="6" md="3">
          <panel :data="panel.remaining" title="remaining" />
        </b-col>
      </b-row>
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
          <template v-slot:head(unverified_transactions)="data">
            <span>
              <i
                v-b-tooltip.top.hover
                title="Unverified Transactions"
                class="fa fa-check"
                style="cursor: pointer;color:limegreen"
              ></i>
            </span>
          </template>
          <template v-slot:head(not_sent_invoice)="data">
            <span>
              <i
                v-b-tooltip.top.hover
                title="Payment receipt to send"
                class="fa fa-send"
                style="cursor: pointer"
              ></i>
            </span>
          </template>
          <template v-slot:head(pr_initial)="data">
            <span v-b-tooltip.top.hover title="Public Relation">
              PR
            </span>
          </template>
          <template v-slot:head(pco_initial)="data">
            <span v-b-tooltip.top.hover title="Payment Collection Officer">
              PCO
            </span>
          </template>
          <template v-slot:cell(no)="data">
            {{ data.index + 1 + (currentPage - 1) * perPage }}
          </template>
          <template v-slot:cell(pr_initial)="data">
            <span v-b-tooltip.top.hover :title="data.item.pr">
              {{ data.item.pr_initial }}
            </span>
          </template>
          <template v-slot:cell(pco_initial)="data">
            <span v-b-tooltip.top.hover :title="data.item.pco">
              {{ data.item.pco_initial }}
            </span>
          </template>
          <template v-slot:cell(category)="data">
            <b-badge :variant="getBadgeCategory(data.item.category)">
              {{ data.item.category }}
            </b-badge>
          </template>
          <template v-slot:cell(contract)="data">
            <b-badge :variant="getBadgeContract(data.value)">
              {{ data.value }}
            </b-badge>
          </template>
          <template v-slot:cell(total_donation)="data">
            <span
              :style="{
                color: moreDonationColor(
                  data.item.total_donation,
                  data.item.donor_periods[0].amount,
                  data.item.donor_periods[0].donation_category
                )
              }"
            >
              Rp. {{ data.item.total_donation | currency }}</span
            >
          </template>
          <template v-slot:cell(plan)="data">
            Rp. {{ data.item.plan | currency }}
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
import { AppDonorFieldTableData } from "./AppDonorFieldTableData";
import panel from "./AppDonorIndexPanel";
import { instantSearch } from "../_share/mixins/instantSearch";
import { OperationPage } from "../_share/mixins/OperationPage";
export default {
  name: "AppDonorIndex",
  mixins: [AppDonorFieldTableData, instantSearch, OperationPage],
  components: {
    panel
  },
  data: function() {
    return {
      routeName: "AccountDonorIndex",
      loaded: false,
      panel: {
        user: null,
        plan: null,
        actual: null,
        remaining: null
      }
    };
  },
  created() {
    this.$store.dispatch("storeBreadcrumbData", {
      linkBackButton: "/donors/period",
      currentPageName: `List Donatur ${this.$route.params.periodYear}`
    });
  },
  watch: {
    "$route.params.periodYear": "getData"
  },
  methods: {
    handleClickBackButton() {
      this.$router.push({
        name: "AccountDonorDefault"
      });
    },
    moreDonationColor(actual, plan, category) {
      // let thisDate = dayjs()
      let today = new Date().getDate();
      let day = new Date().getDate();
      let month = new Date().getMonth() + 1;
      let lastMonth = new Date().getMonth();
      if (category === "AKTIF") {
        return 1 <= today && today < 25
          ? actual == (plan / 10) * (lastMonth - 2)
            ? "black"
            : actual > (plan / 10) * (lastMonth - 2)
            ? "blue"
            : "red"
          : // actual == (plan/12 )* lastMonth ? 'black':actual > (plan/12 )* lastMonth ? 'blue':'red'
          actual == (plan / 10) * (month - 2)
          ? "black"
          : actual > (plan / 10) * (month - 2)
          ? "blue"
          : "red";
        // actual == (plan/12 )* month ? 'black':actual > (plan/12 )* month ? 'blue':'red'
      } else {
        return actual == plan ? "black" : actual > plan ? "blue" : "red";
      }
    },
    getPlanToDate(plan, category) {
      // let thisDate = dayjs()
      let today = new Date().getDate();
      let day = new Date().getDate();
      let month = new Date().getMonth() + 1;
      let lastMonth = new Date().getMonth();
      if (category === "AKTIF") {
        return 1 <= today && today < 25
          ? (plan / 10) * (lastMonth - 2)
          : (plan / 10) * (month - 2);
        // return 1 <= today && today < 25?(plan/12 )* (lastMonth ):(plan/12 )* (month )
      } else {
        return plan;
      }
    },
    handleRowClicked(record) {
      this.$router.push({
        name: "DetailAccountDonor",
        params: {
          userId: record.id,
          periodYear: this.$route.params.periodYear
        }
      });
    },
    getData() {
      this.loaded = false;
      axios
        .get(`api/auth/donor?year=${this.$route.params.periodYear}`)
        .then(response => {
          console.log(response.data);
          this.checkPage();
          const editData = data => {
            return data.map(item => {
              var temp = Object.assign({}, item);
              temp["department"] = temp.college_department.department;
              temp["category"] = temp.donor_periods[0].donation_category;
              temp["registered"] = temp.created_at;
              temp["contract"] = temp.donor_periods[0].is_contract_agreed;
              temp["last_donate"] = temp.last_donate;
              temp["total_donation"] = temp.total_donation;
              temp["pr"] = temp.donor_periods[0].pr
                ? temp.donor_periods[0].pr.name
                : "";
              temp["pco"] = temp.donor_periods[0].pco
                ? temp.donor_periods[0].pco.name
                : "";
              temp["pr_initial"] = temp.donor_periods[0].pr
                ? temp.donor_periods[0].pr.initial
                : "";
              temp["pco_initial"] = temp.donor_periods[0].pco
                ? temp.donor_periods[0].pco.initial
                : "";
              temp["plan"] = this.getPlanToDate(
                temp.donor_periods[0].amount,
                temp.donor_periods[0].donation_category
              );
              temp["_rowVariant"] = this.getBadgeLastDonate(temp.last_donate);
              // temp.name = 'my name '+temp.name;
              return temp;
            });
          };
          this.itemsData = editData(response.data.user);
          this.panel = {
            user: response.data.total_user,
            plan: response.data.plan_donation,
            actual: response.data.actual_donation,
            remaining: response.data.remaining
          };
          this.loaded = true;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getBadgeContract(status) {
      return status === "AGREED"
        ? "success"
        : status === "NOT YET"
        ? "secondary"
        : "primary";
    },
    getBadgeCategory(status) {
      return status === "AKTIF"
        ? "primary"
        : status === "PASIF"
        ? "success"
        : "secondary";
    },
    getBadgeLastDonate(date) {
      let thisDate = dayjs(date);
      let today = new Date().getDate();
      let day = new Date().getDate();
      let month = new Date().getMonth();
      let year = new Date().getFullYear();
      let dayEndOfMont = new Date(2019, 1, 0);
      let startPeriod1 = dayjs(new Date(year, month, 25)).subtract(1, "month");
      let endPeriod1 = dayjs(new Date(year, month, 25));
      let startPeriod2 = dayjs(new Date(year, month, 25));
      let endPeriod2 = dayjs(new Date(year, month, 25)).add(1, "month");
      let endOfMonth = dayjs(new Date())
        .endOf("month")
        .date();
      return 1 <= today && today < 25
        ? startPeriod1 <= thisDate && thisDate <= endPeriod1
          ? "success"
          : ""
        : 25 <= today && today <= endOfMonth
        ? startPeriod2 <= thisDate && thisDate <= endPeriod2
          ? "success"
          : ""
        : "";
    }
  }
};
</script>
<style></style>
