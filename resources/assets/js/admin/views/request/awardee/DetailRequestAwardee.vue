<template>
  <b-row>
    <b-col cols="12">
      <b-card>
        <div slot="header" class="text-center">
          <strong>Profile Awardee</strong>
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
              <h5><i class="fa fa-calendar"></i> Year of Period</h5>
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
              <h5><i class="fa fa-check"></i> Status Approval</h5>
            </div>
              <span style="font-size:large;padding-left:20px">{{data.periods[0].pivot.status}}</span>
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
    <b-col cols="12">
      <b-row>
        <b-col lg="3" sm="6">
          <file-card title="Curriculum Vitae" :periodId="data.periods[0].id" :registrationCode="data.periods[0].pivot.registration_code"
            folder="cv" :data="files.cv" />
        </b-col>
        <b-col lg="3" sm="6">
          <file-card title="Essay" folder="essay" :periodId="data.periods[0].id" :registrationCode="data.periods[0].pivot.registration_code"
            :data="files.essay" />
        </b-col>
        <b-col lg="3" sm="6">
          <file-card title="Slip Gaji/Rekening Listrik" :periodId="data.periods[0].id" :registrationCode="data.periods[0].pivot.registration_code"
            folder="slip" :data="files.slip" />
        </b-col>
        <b-col lg="3" sm="6">
          <file-card title="SiakNG" folder="siakng" :periodId="data.periods[0].id" :registrationCode="data.periods[0].pivot.registration_code"
            :data="files.siakng" />
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>
<script>
  import FileCard from './DetailRequestAwardeeUploadCard'
  export default {
    name: 'DetailRequestAwardee',
    components: {
      FileCard
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
    computed: {},
    methods: {

      getData() {
        let self = this
        axios.get(`api/registration-awardee/${this.$route.params.userId}?year=${this.$route.params.periodYear}`)
          .then((response) => {
            console.log(response.data)
            self.data = response.data.user
            self.files = response.data.files
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
