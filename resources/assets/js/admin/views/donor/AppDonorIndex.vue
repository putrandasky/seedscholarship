<template>
  <slide-y-up-transition v-show="loaded">
    <div>

      <div v-if="itemsData.length == 0">
        <b-alert show variant="info">
          <h4 class="alert-heading">Belum Ada Donatur</h4>
          <p>
            Masih belum ada donatur yang mendaftar untuk berdonasi pada periode ini
          </p>
          <hr />
          <p class="mb-0">
            Silahkan mengirimkan broadcast email undangan untuk mengajak donatur kembali berdonasi pada periode ini dengan menekan tombol yang tersedia dibawah ini
          </p>
        </b-alert>
      </div>
      <div v-if="itemsData.length !== 0">
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
          <b-table stacked="sm" style="animation-duration: 1s" hover :fields="FieldTableItems" :items="filteredItemsData" thead-class="thead-light" :sort-by.sync="querySortBy" :sort-desc.sync="querySortDesc" @sort-changed="sortingChanged" :current-page="currentPage" :per-page="perPage" @row-clicked="handleRowClicked">
            <template v-slot:head(unverified_transactions)>
              <span>
                <i v-b-tooltip.top.hover title="Unverified Transactions" class="fa fa-check" style="cursor: pointer;color:limegreen"></i>
              </span>
            </template>
            <template v-slot:head(not_sent_invoice)>
              <span>
                <i v-b-tooltip.top.hover title="Payment receipt to send" class="fa fa-send" style="cursor: pointer"></i>
              </span>
            </template>
            <template v-slot:head(pr_initial)>
              <span v-b-tooltip.top.hover title="Public Relation">
                PR
              </span>
            </template>
            <template v-slot:head(pco_initial)>
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
              <span :style="{
                color: moreDonationColor(
                  data.item.donor.total_donation,
                  data.item.amount,
                  data.item.donation_category
                )
              }">
                Rp. {{ data.item.total_donation | currency }}</span>
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

      <b-btn class="float-right mt-3" variant="secondary" size="sm" @click="handleClickReinvitation">Reinvitation Donatur</b-btn>
    </div>

  </slide-y-up-transition>
</template>
<script>
  import {
    AppDonorFieldTableData
  } from "./AppDonorFieldTableData";
  import panel from "./AppDonorIndexPanel";
  import {
    instantSearch
  } from "../_share/mixins/instantSearch";
  import {
    OperationPage
  } from "../_share/mixins/OperationPage";
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
        durationPeriod: null,
        durationUptoMonth: null,
        durationUptoLastMonth: null,
        startPeriod: null,
        endPeriod: null,
        period: {},
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
      handleClickReinvitation() {
        this.$router.push({
          name: "ReinvitationDonor",
          params: {
            periodYear: this.$route.params.periodYear
          }
        });
      },
      handleClickBackButton() {
        this.$router.push({
          name: "AccountDonorDefault"
        });
      },
      moreDonationColor(actual, plan, category) {
        // let thisDate = dayjs()
        let date = new Date().getDate();
        let today = new Date();

        //check if today is earlier than start period
        if (today < new Date(this.startPeriod)) {
          return "black"
        }
        //check if today is late than end period
        if (today > new Date(this.endPeriod)) {
          return actual == plan ? "black" : actual > plan ? "blue" : "red";
        }
        if (category === "AKTIF") {
          return 1 <= date && date < 25 ?
            actual == (plan / this.durationPeriod) * (this.durationUptoLastMonth) ?
            "black" :
            actual > (plan / this.durationPeriod) * (this.durationUptoLastMonth) ?
            "blue" :
            "red" : // actual == (plan/12 )* lastMonth ? 'black':actual > (plan/12 )* lastMonth ? 'blue':'red'
            actual == (plan / this.durationPeriod) * (this.durationUptoMonth) ?
            "black" :
            actual > (plan / this.durationPeriod) * (this.durationUptoMonth) ?
            "blue" :
            "red";
          // actual == (plan/12 )* month ? 'black':actual > (plan/12 )* month ? 'blue':'red'
        } else {
          return actual == plan ? "black" : actual > plan ? "blue" : "red";
        }
      },
      getPlanToDate(plan, category) {
        let date = new Date().getDate();
        let today = new Date();

        //check if today is earlier than start period
        if (today < new Date(this.startPeriod)) {
          return 0
        }
        //check if today is late than end period
        if (today > new Date(this.endPeriod)) {
          return plan
        }
        if (category === "AKTIF") {
          return 1 <= date && date < 25 ?
            (plan / this.durationPeriod) * (this.durationUptoLastMonth) :
            (plan / this.durationPeriod) * (this.durationUptoMonth);
        } else {
          return plan;
        }
      },
      handleRowClicked(record) {
        this.$router.push({
          name: "DetailAccountDonor",
          params: {
            userId: record.donor.id,
            periodYear: this.$route.params.periodYear
          }
        });
      },
      getData() {
        this.loaded = false;
        this.$store.dispatch('stateLoadingFull', true);
        axios
          .get(`api/auth/donor?year=${this.$route.params.periodYear}`)
          .then(response => {
            // console.log(response.data);
            this.checkPage();
            this.durationPeriod = response.data.duration_period
            this.durationUptoMonth = response.data.duration_uptomonth
            this.durationUptoLastMonth = response.data.duration_uptolastmonth
            this.startPeriod = response.data.start_period
            this.endPeriod = response.data.end_period
            this.period = response.data.period
            const editData = data => {
              return data.map(item => {
                var temp = Object.assign({}, item);
                // temp["name"] = temp.donor.name;
                temp["department"] = temp.donor.college_department ? temp.donor.college_department.department : '';
                temp["category"] = temp.donation_category;
                temp["registered"] = temp.created_at;
                temp["contract"] = temp.is_contract_agreed;
                temp["last_donate"] = temp.donor.last_donate;
                temp["total_donation"] = temp.donor.total_donation;
                temp["pr_initial"] = temp.pr ?
                  temp.pr.initial :
                  "";
                temp["pco_initial"] = temp.pco ?
                  temp.pco.initial :
                  "";
                temp["pr"] = temp.pr ?
                  temp.pr.name :
                  "";
                temp["pco"] = temp.pco ?
                  temp.pco.name :
                  "";
                temp["plan"] = this.getPlanToDate(
                  temp.amount,
                  temp.donation_category
                );
                temp["_rowVariant"] = this.getBadgeLastDonate(temp.donor.last_donate);
                // temp.name = 'my name '+temp.name;
                return temp;
              });
            };
            this.itemsData = editData(response.data.user);
            // console.log(this.itemsData);

            this.panel = {
              user: response.data.total_user,
              plan: response.data.plan_donation,
              actual: response.data.actual_donation,
              remaining: response.data.remaining
            };

            // console.log({
            //   'start': this.startPeriod,
            //   'today < start': new Date() < new Date(this.startPeriod),
            //   'today > start': new Date() > new Date(this.startPeriod),
            //   'end': this.endPeriod,
            //   'today < finish': new Date() < new Date(this.endPeriod),
            //   'today > finish': new Date() > new Date(this.endPeriod),
            // })
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
      },
      getBadgeContract(status) {
        return status === "AGREED" ?
          "success" :
          status === "NOT YET" ?
          "secondary" :
          "primary";
      },
      getBadgeCategory(status) {
        return status === "AKTIF" ?
          "primary" :
          status === "PASIF" ?
          "success" :
          "secondary";
      },
      getBadgeLastDonate(date) {
        let thisDate = dayjs(date);
        let todate = new Date().getDate();
        let month = new Date().getMonth();
        let year = new Date().getFullYear();
        let startPeriod1 = dayjs(new Date(year, month, 25)).subtract(1, "month");
        let endPeriod1 = dayjs(new Date(year, month, 25));
        let startPeriod2 = dayjs(new Date(year, month, 25));
        let endPeriod2 = dayjs(new Date(year, month, 25)).add(1, "month");
        let endOfMonth = dayjs(new Date())
          .endOf("month")
          .date();
        return 1 <= todate && todate < 25 ?
          startPeriod1 <= thisDate && thisDate <= endPeriod1 ?
          "success" :
          "" :
          25 <= todate && todate <= endOfMonth ?
          startPeriod2 <= thisDate && thisDate <= endPeriod2 ?
          "success" :
          "" :
          "";
      }
    }
  };
</script>
<style></style>
