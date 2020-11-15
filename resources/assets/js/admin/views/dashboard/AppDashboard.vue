<template>
  <slide-y-up-transition>

    <b-row v-show="loaded">
      <b-col md="2" sm="4">
        <panel :data="data.awardee_total" title="AWARDEE" icon="graduation-cap" variant="bg-primary"></panel>
      </b-col>
      <b-col md="2" sm="4">
        <panel :data="data.donor_total" title="DONATUR" icon="heart" variant="bg-info"></panel>
      </b-col>
      <b-col md="2" sm="4">
        <panel :data="data.admin_total" title="ADMIN ACTIVE" icon="user" variant="bg-warning"></panel>
      </b-col>
      <b-col md="6" sm="12">
        <panel :data="totalFundData" title="TOTAL FUND RAISED" icon="money" variant="bg-success"></panel>
      </b-col>
      <b-col sm="12">
        <b-card class="shadow">
          <b-card-title>
            <strong>Monthly Donation</strong>
          </b-card-title>
          <b-card-body class="p-0">
            <chart-monthly-donation :height="350" bgcolor="#24478c" bordercolor="#24478c" scaleLabel="Month" :labelData=" data.monthly_donation.label" :data="data.monthly_donation.dataset" label="Amount Donation" />
          </b-card-body>
        </b-card>
      </b-col>
      <b-col md="3" sm="6" class="py-2">
        <b-card class="shadow h-100">
          <b-card-title>
            <strong>Donation Status</strong>
          </b-card-title>
          <b-card-body class="p-0">
            <div>
              <div v-for="(v,k, i) in data.donation_status" :key="i" class="d-flex">
                <span>
                  {{k | _toSpace | ucfirst}}
                </span>
                <span class="ml-auto text-right">{{ v }}</span>
              </div>
            </div>
          </b-card-body>
        </b-card>

      </b-col>
      <b-col md="5" sm="6" class="py-2">
        <table-recent-donation :data="data.recent_donation"></table-recent-donation>
      </b-col>
      <b-col md="4" sm="6" class="py-2">
        <table-top-donors :data="data.top_donation"></table-top-donors>
      </b-col>

      <b-col md="4" sm="6" class="py-2">
        <b-card class="shadow h-100">
          <b-card-title>
            <strong>BPH In Charge</strong>
          </b-card-title>
          <b-card-body class="p-0">
            <div flush class="list-group-small">
              <div v-for="(v, i) in data.bph_in_charge" :key="i" class="d-flex">
                <span>
                  {{v.roles[0].admins[0].name}}
                </span>
                <span class="ml-auto text-right">{{ v.roles[0].name }}</span>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col md="8" sm="12" class="py-2">
        <table-last-blogs :data="data.last_blogs"></table-last-blogs>
      </b-col>
    </b-row>
  </slide-y-up-transition>
</template>
<script>
  import Panel from "./DashboardPanel";
  import TableRecentDonation from "./DashboardTableRecentDonation";
  import TableTopDonors from "./DashboardTableTopDonors";
  import TableLastBlogs from "./DashboardTableLastBlogs";
  import ChartMonthlyDonation from "./DashboardChartMonthlyDonation";

  export default {
    name: 'Dashboard',
    components: {
      Panel,
      TableTopDonors,
      TableRecentDonation,
      TableLastBlogs,
      ChartMonthlyDonation
    },
    data: function() {
      return {
        loaded: false,
        data: {}
      }
    },
    created() {
      this.$store.dispatch("storeBreadcrumbData", {
        linkBackButton: "",
        currentPageName: `Dashboard`
      });
    },
    mounted() {
      this.getData()
    },
    computed: {
      totalFundData() {
        return `Rp. ${this.$options.filters.currency(this.data.fund_total)}`
      }
    },
    methods: {
      getData() {
        this.$store.dispatch('stateLoadingFull', true);

        axios.get(`api/admin/dashboard/index`)
          .then((response) => {
            console.log(response.data)
            this.data = response.data
            this.$store.dispatch('stateLoadingFull', false);
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
