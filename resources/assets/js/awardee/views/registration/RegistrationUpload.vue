<template>
  <div class="app flex-row align-items-center" v-show="loaded">
    <b-container v-if="!authorized">
      <b-alert show variant="danger">YOU ARE NOT ALLOWED TO ACCESS THIS PAGE.
      </b-alert>
    </b-container>
    <div class="container" v-if="authorized">
      <b-alert show variant="primary">Please upload this file below in <strong>pdf/jpeg/png</strong> file with max size
        <strong>2mb</strong>.
        <hr>
        <small>Nb : Make sure you bookmark this page, if you need to update the file, you can back to this page later. or check your Inbox / Spam folder of your email</small>
      </b-alert>
      <b-row>
        <b-col lg="3" sm="6">
          <slide-y-up-transition>
          <upload-card title="Curriculum Vitae" folder="cv" />
          </slide-y-up-transition>
        </b-col>
        <b-col lg="3" sm="6">
          <slide-y-up-transition>
          <upload-card title="Essay" folder="essay" />
          </slide-y-up-transition>
        </b-col>
        <b-col lg="3" sm="6">
          <slide-y-up-transition>
          <upload-card title="Slip Gaji/Rekening Listrik" folder="slip" />
          </slide-y-up-transition>
        </b-col>
        <b-col lg="3" sm="6">
          <slide-y-up-transition>
          <upload-card title="SiakNG" folder="siakng" />
          </slide-y-up-transition>
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
        loaded: false,
        authorized: false
      }
    },
    created() {
      this.checkAuthorization()
    },
    methods: {
      checkAuthorization() {
        axios.get(
            `api/registration-awardee/upload/authorized?id=${this.$route.query.id}&registration_code=${this.$route.query.registration_code}&email=${this.$route.query.email}&period_id=${this.$route.query.period_id}`
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
