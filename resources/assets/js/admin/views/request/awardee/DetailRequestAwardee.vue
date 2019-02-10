<template>
  <b-row>
    <b-col cols="12">
      <b-card>
        <div slot="header" class="text-center">
          <strong>Profile Awardee</strong>
        </div>
        <b-row v-show="loaded" class="mt-3">
          <b-col cols="12">
            <b-row>
              <b-col sm="3"><strong>Name</strong></b-col>
              <b-col sm="9">{{data.name}}</b-col>
            </b-row>
            <b-row>
              <b-col sm="3"><strong>Email</strong></b-col>
              <b-col sm="9">{{data.email}}</b-col>
            </b-row>
            <b-row>
              <b-col sm="3"><strong>Year</strong></b-col>
              <b-col sm="9">{{data.year}}</b-col>
            </b-row>
            <b-row>
              <b-col sm="3"><strong>Phone</strong></b-col>
              <b-col sm="9">{{data.phone}}</b-col>
            </b-row>
            <b-row>
              <b-col sm="3"><strong>Department</strong></b-col>
              <b-col sm="9">{{data.awardee_department.department}}</b-col>
            </b-row>
            <b-row>
              <b-col sm="3"><strong>Status</strong></b-col>
              <b-col sm="9">{{data.periods[0].pivot.status}}</b-col>
            </b-row>
            <b-row>
              <b-col sm="3"><strong>Date Registered</strong></b-col>
              <b-col sm="9">{{data.created_at}}</b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-card>
    </b-col>
    <b-col cols="12">
      <b-row>
        <b-col lg="3" sm="6">
          <file-card title="Curriculum Vitae" :periodId="data.periods[0].id" :registrationCode="data.periods[0].pivot.registration_code" folder="cv" :data="files.cv"/>
        </b-col>
        <b-col lg="3" sm="6">
          <file-card title="Essay" folder="essay" :periodId="data.periods[0].id" :registrationCode="data.periods[0].pivot.registration_code" :data="files.essay"/>
        </b-col>
        <b-col lg="3" sm="6">
          <file-card title="Slip Gaji/Rekening Listrik" :periodId="data.periods[0].id" :registrationCode="data.periods[0].pivot.registration_code" folder="slip" :data="files.slip"/>
        </b-col>
        <b-col lg="3" sm="6">
          <file-card title="SiakNG" folder="siakng" :periodId="data.periods[0].id" :registrationCode="data.periods[0].pivot.registration_code"  :data="files.siakng"/>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>
<script>
  import FileCard from './DetailRequestAwardeeUploadCard'
  export default {
    name: 'DetailRequestAwardee',
    components:{
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
