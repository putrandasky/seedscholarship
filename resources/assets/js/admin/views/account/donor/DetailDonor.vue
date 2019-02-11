<template>
  <slide-y-up-transition>
    <b-row v-show="loaded">
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
            <b-col md="3" sm="6">
              <div class="border-bottom">
                <h5><i class="fa fa-user"></i> Full Name</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{data.name}}</span>
            </b-col>
            <b-col md="3" sm="6">
              <div class="border-bottom">
                <h5><i class="fa fa-envelope"></i> Email Address</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{data.email}}</span>
            </b-col>
            <b-col md="3" sm="6">
              <div class="border-bottom">
                <h5><i class="fa fa-calendar"></i> Year of Period (Angkatan)</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{data.year}}</span>
            </b-col>
            <b-col md="3" sm="6">
              <div class="border-bottom">
                <h5><i class="fa fa-phone"></i> Phone Number</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{data.phone}}</span>
            </b-col>
            <b-col md="3" sm="6">
              <div class="border-bottom">
                <h5><i class="fa fa-list"></i> Department</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{data.awardee_department.department}}</span>
            </b-col>
            <b-col md="3" sm="6">
              <div class="border-bottom">
                <h5><i class="fa fa-address-book"></i> Address</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{data.address}}</span>
            </b-col>
            <b-col md="3" sm="6">
              <div class="border-bottom">
                <h5><i class="fa fa-list-alt"></i> Donation Category</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{data.periods[0].pivot.donation_category}}</span>
            </b-col>
            <b-col md="3" sm="6" v-if="data.periods[0].pivot.donation_category == 'aktif'">
              <div class="border-bottom">
                <h5><i class="fa fa-dollar"></i> Amount Plan</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{data.periods[0].pivot.amount}}</span>
            </b-col>

            <b-col md="3" sm="6">
              <div class="border-bottom">
                <h5><i class="fa fa-calendar-check-o"></i> Date Registered</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{data.created_at}}</span>
            </b-col>
            <!-- <b-col sm="9"></b-col>
          <b-col sm="3"><strong>Email Address</strong></b-col>
          <b-col sm="9">{{data.email}}</b-col>
          <b-col sm="3"><strong></strong></b-col>
          <b-col sm="9">{{data.year}}</b-col>
          <b-col sm="3"><strong></strong></b-col>
          <b-col sm="9">{{data.phone}}</b-col>
          <b-col sm="3"><strong></strong></b-col>
          <b-col sm="9">{{}}</b-col>
          <b-col sm="3"><strong></strong></b-col>
          <b-col sm="9">{{}}</b-col>
          <b-col sm="3"><strong></strong></b-col>
          <b-col sm="9">{{}}</b-col> -->
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </slide-y-up-transition>
</template>
<script>
  export default {
    name: 'DetailRequestDonor',
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
    computed: {},
    methods: {

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
