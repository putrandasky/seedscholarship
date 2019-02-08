<template>
  <div class="app flex-row align-items-center" v-show="loaded">
    <b-container  v-if="!authorized">
      <b-alert show variant="danger">YOU ARE NOT ALLOWED TO ACCESS THIS PAGE.
      </b-alert>
    </b-container>
    <div class="container" v-if="authorized">
      <b-alert show variant="info">Please upload this file below in <strong>pdf/jpeg/png</strong> file with max size
        <strong>3mb</strong>.</b-alert>
      <b-row>
        <b-col lg="3" sm="6">
          <upload-card title="Curriculum Vitae" folder="cv" />
        </b-col>
        <b-col lg="3" sm="6">
          <upload-card title="Essay" folder="essay" />

        </b-col>
        <b-col lg="3" sm="6">
          <upload-card title="Slip Gaji/Rekening Listrik" folder="slip" />

        </b-col>
        <b-col lg="3" sm="6">
          <upload-card title="SiakNG" folder="siakng" />

        </b-col>
      </b-row>
    </div>
  </div>

</template>
<script>
  import UploadCard from './RegistrationUploadCard.vue'
  export default {
    name: 'RegistrationUpload',
    components: {
      UploadCard
    },
    data: function () {
      return {
        loaded:false,
        authorized: false
      }
    },
    created() {
      this.checkAuthorization()
    },
    methods: {
      checkAuthorization() {
        axios.get(
            `api/registration-awardee/upload/authorized?id=${this.$route.query.id}&registration_code=${this.$route.query.registration_code}&email=${this.$route.query.email}`
          )
          .then((response) => {
            this.loaded = true
            this.authorized = true
          })
          .catch((error) => {
            console.log(error);
            this.loaded = true
            this.authorized = false

          })
      },
    },
  }

</script>
<style>
</style>
