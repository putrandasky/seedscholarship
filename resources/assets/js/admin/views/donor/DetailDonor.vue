<template>
  <slide-y-up-transition>
    <b-row v-if="loaded">
      <b-col cols="12">
        <b-card>
          <div slot="header" class="text-center">
            <strong>Profile Donatur</strong>
            <router-link tag="button" class="btn btn-sm btn-primary btn-sm float-left" :to="{name:'AccountDonorIndex',params:{periodYear:$route.params.periodYear}}">
              <i class="fa fa-arrow-left"></i>
              BACK
            </router-link>
          </div>
          <b-row>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5><i class="fa fa-user"></i> Full Name</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{data.name}}</span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5><i class="fa fa-envelope"></i> Email Address</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{data.email}}</span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5><i class="fa fa-calendar"></i> Year of Period (Angkatan)</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{data.year}}</span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5><i class="fa fa-phone"></i> Phone Number</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{data.phone}}</span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5><i class="fa fa-list"></i> Department</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{data.college_department.department}}</span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5><i class="fa fa-address-book"></i> Address</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{data.address}}</span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5><i class="fa fa-list-alt"></i> Donation Category</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{data.donor_periods[0].donation_category}}</span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3" v-if="data.donor_periods[0].donation_category == 'AKTIF'">
              <div class="border-bottom">
                <h5><i class="fa fa-dollar"></i> Amount Plan</h5>
              </div>
              <!-- <span style="font-size:large;padding-left:20px">Rp. {{data.donor_periods[0].amount | currency}} / year</span><br> -->
              <!-- <span style="font-size:large;padding-left:20px">Rp. {{data.donor_periods[0].amount /12 | currency}} /
                month</span> -->
              <span style="font-size:large;padding-left:20px">Rp. {{data.donor_periods[0].amount /10 | currency}} /
                month</span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3" v-if="data.donor_periods[0].donation_category == 'PASIF'">
              <div class="border-bottom">
                <h5><i class="fa fa-dollar"></i> Amount Plan</h5>
              </div>
              <span style="font-size:large;padding-left:20px">Rp. {{data.donor_periods[0].amount | currency}} /
                period</span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5><i class="fa fa-file-o"></i> Contract Agreed
                </h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{data.donor_periods[0].is_contract_agreed}}
                <b-button @click="seeContract" v-if="data.donor_periods[0].is_contract_agreed == 'AGREED'" class="btn--corner-15 btn--xs"
                  size="sm" variant="warning" v-b-tooltip.hover="'See Contract'"><i class="fa fa-search"></i></b-button>
              </span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5><i class="fa fa-file-o"></i> Contract Number
                </h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{data.donor_periods[0].contract_number}}

              </span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5><i class="fa fa-calendar-check-o"></i> Date Registered</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{data.donor_periods[0].created_at}}</span>
            </b-col>
            <collection-officer :dataProps="data.donor_periods[0].pco"/>
            <pr-officer :dataProps="data.donor_periods[0].pr"/>
          </b-row>
        </b-card>
      </b-col>
      <b-col sm="12">
        <transaction-history :transactions="data.donor_transactions" />
      </b-col>
    </b-row>
  </slide-y-up-transition>
</template>
<script>
  import TransactionHistory from './DetailDonorTransactionHistory.vue'
  import CollectionOfficer from './DetailDonorCollectionOfficer.vue'
  import PrOfficer from './DetailDonorPrOfficer.vue'
  export default {
    name: 'DetailRequestDonor',
    components: {
      TransactionHistory,
      CollectionOfficer,
      PrOfficer
    },
    data: function () {
      return {
        loaded: false,
        files: {},
        data: {
          name: '',
          email: '',
          phone: '',
          year: null,
          department: null,
          created_at: null,
          updated_at: null,
        },
      }
    },
    created() {
      this.getData()
    },
    computed: {

    },
    methods: {
      seeContract() {
        let self = this
        window.open(
          `/api/file/donor-contract/${this.$route.params.userId}?year=${this.$route.params.periodYear}`,
          this.data.donor_periods[0].contract_number,
          `window,width=${screen.availWidth},height=${screen.availHeight},resizeable,left=200,top=100,directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0`
        );
      },
      getData() {
        let self = this
        axios.get(`api/user-donor/${this.$route.params.userId}?year=${this.$route.params.periodYear}`)
          .then((response) => {
            console.log(response.data)
            self.data = response.data.user
            this.loaded = true
          })
          .catch((error) => {
            console.log(error);
          })
      },


    },
  }

</script>
<style>
</style>
