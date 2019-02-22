<template>
  <div class="app flex-row align-items-center">
    <loading class="text-center" :active="!loaded" :can-cancel="false" :opacity="0.9" :height="60" loader='dots'
      transition='fade' background-color="rgba(0,0,0,.85)" color="rgba(255,255,255,.9)" :is-full-page="true">
      <div class="text-center" slot="after" style="color:rgba(255,255,255,.9)">Mohon Tunggu...</div>

    </loading>
    <b-container fluid v-if="loaded">

      <b-row class="justify-content-center">
        <b-col sm="6" v-if="!authorized">
          <b-alert show variant="danger">YOU ARE NOT ALLOWED TO ACCESS THIS PAGE.
          </b-alert>
        </b-col>
        <b-col sm="8" v-if="confirmationFormSent">
          <header class="text-center" id="header">
            <h1><strong>TERIMA KASIH</strong></h1>
          </header>

          <div class="text-center">
            <i class="fa fa-heart display-1" id="checkmark" style="color:red"></i>
            <p>Terima kasih telah melakukan donasi untuk SEED Scholarship. Tim kami akan melakukan verifikasi dan
              segera mengirimkan bukti penerimaan donasi.</p>
          </div>
        </b-col>
        <b-col md="8" lg="6" v-if="authorized && !confirmationFormSent">
          <b-card no-body class="mx-4">
            <form class="card-body p-4" @submit.prevent="sendConfirmationForm" autocomplete="off">
              <h2>KONFIRMASI DONASI</h2>
              <p class="text-muted">Silahkan mengisi form berikut untuk mengkonfirmasi donasi anda. </p>
              <b-row class="form-group">

                <b-col lg="6">
                  <b-form-group :invalid-feedback="errors.trx_date" :state="stateTrxDate">
                    <b-input-group>
                      <b-input-group-prepend>
                        <b-input-group-text><i class="icon-calendar"></i></b-input-group-text>
                      </b-input-group-prepend>
                      <flat-pickr :allowInput="isDisabled" placeholder="Tanggal Transaksi" id="date" v-b-tooltip.hover
                        title="Click To Edit" class="form-control" v-bind:class="{'is-invalid':stateTrxDate==false,'is-valid':stateTrxDate==true}"
                        style="background-color:white" :config="configCalendar" v-model="input.trx_date" />
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col lg="6">
                  <b-form-group :invalid-feedback="errors.amount" :state="stateAmount">
                    <b-input-group class="">
                      <b-input-group-prepend>
                        <b-input-group-text>Rp</b-input-group-text>
                      </b-input-group-prepend>
                      <b-input :disabled="isDisabled" autocomplete="off" type="number" class="form-control" min="0"
                        placeholder="Jumlah Donasi" v-model="input.amount" :state="stateAmount" />
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col lg="12">
                  <b-form-group :invalid-feedback="errors.file" :state="stateFile" description="File jpeg/png/pdf (max: 1MB)">
                    <b-form-file :disabled="isDisabled" accept="image/jpeg, image/png, image/gif, application/pdf"
                      :state="stateFile" ref="upload" v-model="file" placeholder="Bukti Transfer." @change="onFileChange" />
                    <b-progress v-show="uploadPercentage !== 0" height="5px" :value="uploadPercentage" variant="success"></b-progress>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-button :disabled="isDisabled" type="submit" variant="success" block><i v-show="isDisabled" class="fa fa-spinner fa-spin"></i>
                Submit</b-button>
            </form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import flatPickr from 'vue-flatpickr-component';
  import 'flatpickr/dist/flatpickr.css';
  export default {
    name: 'DonationConfirmation',
    components: {
      flatPickr
    },
    data: function () {
      return {
        confirmationFormSent: false,
        uploadPercentage: 0,
        isDisabled: false,
        loaded: false,
        authorized: false,
        file: [],
        configCalendar: {
          dateFormat: 'd-M-y'
        },
        input: {
          trx_date: null,
          amount: '',
        },
        errors: {
          trx_date: null,
          amount: '',
          file: null,
        }

      }
    },
    created() {
      this.getAuthorized()
    },
    computed: {
      stateTrxDate() {
        return this.errors.trx_date == 'no-error' ? true : this.errors.trx_date ? false : null
      },
      stateAmount() {
        return this.errors.amount == 'no-error' ? true : this.errors.amount ? false : null
      },
      stateFile() {
        return this.errors.file == 'no-error' ? true : this.errors.file ? false : null
      },
    },
    methods: {
      onFileChange(e) {
        const file = e.target.files[0];
        console.log(file);
        if (file.size > 2 * 1024 * 1024) {
          e.preventDefault()
          this.file = []
          return
        }
        // this.data.photo = file.name
        // this.objectUrl = URL.createObjectURL(file);

      },
      getAuthorized() {
        axios.get(
            `api/donor-transaction/confirmation/authorized?id=${this.$route.query.id}&year=${this.$route.query.year}&email=${this.$route.query.email}&donation_token=${this.$route.query.donation_token}`
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
      },
      sendConfirmationForm() {
        this.isDisabled = true
        let formData = new FormData();
        let self = this
        formData.append('file', this.file)
        axios.post(`api/donor-transaction/confirmation`, formData, {
            params: {
              id: this.$route.query.id,
              year: this.$route.query.year,
              donation_token: this.$route.query.donation_token,
              trx_date: this.input.trx_date,
              amount: this.input.amount,
            },
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: function (progressEvent) {
              this.uploadPercentage = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total));
            }.bind(this)
          })
          .then((response) => {
            console.log(response.data)

            this.$snotify.success(`Confirmation Sent`, "SUCCESS");
            this.isDisabled = false
            this.confirmationFormSent = true
          })
          .catch((error) => {
            console.log(error);
            this.$snotify.error(error.response.data.message, "ERROR");
            this.isDisabled = false
            let errors = error.response.data.errors
            this.errors.trx_date = errors.trx_date ? errors.trx_date[0] : 'no-error';
            this.errors.amount = errors.amount ? errors.amount[0] : 'no-error';
            this.errors.file = errors.file ? errors.file[0] : 'no-error';
          })
      }
    },
  }

</script>
<style>
</style>
