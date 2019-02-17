<template>
  <div class="app flex-row align-items-center">
    <loading :active="!loaded" :can-cancel="false" :opacity=0 loader='dots' transition='none' :is-full-page="true" />
    <div class="container" v-if="loaded">

      <b-row class="justify-content-center">
        <b-col sm="8" v-if="!authorized">
          <b-alert show variant="danger">YOU ARE NOT ALLOWED TO ACCESS THIS PAGE.
          </b-alert>
        </b-col>
        <b-col sm="8" v-if="authorized">
          <header class="text-center" id="header">
            <h1><strong>TERIMA KASIH</strong></h1>
          </header>

          <div class="text-center">
            <i class="fa fa-heart display-1" id="checkmark" style="color:red"></i>
            <p>Terima kasih telah begabung bersama kami menjadi donatur di SEED Scholarship Periode ke-5. Kami telah
              mengirimkan kontrak kerja sama, mohon cek email anda. Kontribusi anda sangat berharga bagi adik-adik kita
              di Departemen Teknik Sipil UI. Tim kami akan segera menghubungi Anda</p>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ContractAgreed',
    data: function () {
      return {
        loaded: false,
        authorized: false
      }
    },
    created() {
      this.getAgreedContract()
    },
    methods: {
      getAgreedContract() {
        axios.get(
            `api/auth/donor/contract-agreed?id=${this.$route.query.id}&email=${this.$route.query.email}&period=${this.$route.query.period}&token=${this.$route.query.token}`
          )
          .then((response) => {
            console.log(response.data)
            this.loaded = true
            this.authorized = true
          })
          .catch((error) => {
            console.log(error);
            this.loaded = true
            this.authorized = false
          })
      }
    },
  }

</script>
<style>
</style>
