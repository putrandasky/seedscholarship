<template>
  <div class="app bg-image-full flex-row align-items-center">
    <loading class="text-center" :active="isDisabled" :can-cancel="false" :opacity="0.9" :height="60" loader="dots" transition="fade" background-color="rgba(0,0,0,.85)" color="rgba(255,255,255,.9)" :is-full-page="true">
      <div class="text-center" slot="after" style="color:rgba(255,255,255,.9)">
        Mohon Tunggu...
      </div>
    </loading>
    <div class="container" v-if="loaded">
      <b-row class="justify-content-center" v-if="!authorized">
        <b-col sm="6" v-if="!authorized">
          <b-alert show variant="danger">
            {{unathorizedMessage}}.
          </b-alert>
        </b-col>
      </b-row>
      <b-row class="justify-content-center" v-if="authorized">
        <b-col sm="8" v-if="registered" class="text-white">
          <header class="text-center" id="header">
            <h1><strong>TERIMA KASIH</strong></h1>
          </header>
          <div class="text-center">
            <i class="fa fa-heart display-1" id="checkmark" style="color:red"></i>
            <p>
              Terima kasih telah mendaftar kembali menjadi donatur di SEED
              Scholarship. Mohon cek email anda, untuk menyetujui data yang
              sudah anda berikan agar kontrak kerja sama bisa segera kami
              kirimkan.
            </p>
          </div>
        </b-col>
        <b-col lg="6" md="8" v-if="!registered">
          <b-card no-body class="mx-4">
            <form class="card-body p-4" @submit.prevent="postData" autocomplete="off">
              <h2>Daftar Ulang Donatur</h2>
              <div class="text-muted">
                Hai
                <b>
                  {{getFormsValue('name').value}}.
                </b>
              </div>
              <p class="text-muted">
                Kamu akan mendaftar kembali menjadi donatur SEED Scholarship period <b>{{info.period}}</b> tahun
                <b>{{info.year}}</b>.

              </p>
              <p class="text-muted">
                Silahkan mengisi form berikut untuk
                kembali menjadi donatur kami.
              </p>
              <b-row class="form-group">
                <b-col v-for="(v,i) in forms" :key="'form'+i" sm="12">
                  <b-form-group :invalid-feedback="v.errors" :state="v.state">
                    <b-input-group v-if="v.id == 'amount'?donationCategoryValue != null? true : false :true">
                      <b-input-group-prepend v-if=" v.id != 'accept_term_condition'">
                        <b-input-group-text v-html="v.icon"></b-input-group-text>
                      </b-input-group-prepend>

                      <b-input v-if="v.id == 'donation_category' || v.id == 'accept_term_condition' || v.id == 'degree_level'? false : true" autocomplete="off" :type="v.type" class="form-control" :placeholder="v.placeholder" v-model="v.value" :state="v.state" />

                      <b-form-select v-if="v.id == 'donation_category' || v.id == 'degree_level'" plain :options="v.options" v-model="v.value" :state="v.state">
                        <template slot="first">
                          <option :value="null" disabled>{{v.placeholder}}</option>
                        </template>
                      </b-form-select>
                    </b-input-group>

                    <div v-if="v.id == 'amount'" slot="description">
                      <small v-if=" donationCategoryValue == 'AKTIF'">Rencana donasi anda akan ditagihkan Rp.
                        {{ amountDonationValue | currency }} / bulan</small>
                      <small v-if=" donationCategoryValue == 'PASIF'">Rencana donasi anda Rp.
                        {{ amountDonationValue | currency }} /
                        periode</small>
                    </div>
                    <b-form-checkbox v-if="v.id == 'accept_term_condition'" :id="v.id" v-model="v.value" :value="1" :unchecked-value="null" :state="v.state">
                      I already read & accept the terms and conditions.
                    </b-form-checkbox>
                  </b-form-group>
                </b-col>

              </b-row>
              <b-button :disabled="isDisabled" type="submit" variant="success" block><i v-show="isDisabled" class="fa fa-spinner fa-spin"></i>
                Submit</b-button>
            </form>
          </b-card>
          <!-- <faq-modal /> -->
        </b-col>
        <faq-modal />

      </b-row>
    </div>
  </div>
</template>
<script>
  import FaqModal from '../auth/AuthRegisterFaq.vue'

  export default {
    name: 'ReRegistration',
    components: {
      FaqModal
    },
    data: function() {
      return {
        unathorizedMessage: '',
        isDisabled: true,
        loaded: false,
        authorized: false,
        registered: false,
        forms: [{
            id: 'name',
            value: '',
            errors: null,
            state: null,
            icon: '<i class="icon-user">',
            type: 'text',
            placeholder: 'Nama Lengkap'
          },
          {
            id: 'phone',
            value: '',
            errors: null,
            state: null,
            icon: '<i class="icon-phone">',
            type: 'number',
            placeholder: 'Nomor Telepon'
          },
          {
            id: 'address',
            value: '',
            errors: null,
            state: null,
            icon: '<i class="icon-direction">',
            type: 'text',
            placeholder: 'Alamat Lengkap'
          },
          {
            id: 'zip_code',
            value: '',
            errors: null,
            state: null,
            icon: '<i class="icon-direction">',
            type: 'text',
            placeholder: 'Kode Pos'
          },

          {
            id: 'degree_level',
            value: null,
            errors: null,
            state: null,
            icon: '<i class="icon-graduation">',
            type: 'select',
            placeholder: '-- Please select degree level--',
            options: []
          },
          {
            id: 'donation_category',
            value: null,
            errors: null,
            state: null,
            icon: '<i class="icon-list">',
            type: 'select',
            placeholder: '-- Please select donation category for this period--',
            options: [{
                value: 'AKTIF',
                text: 'Donatur Aktif'
              },
              {
                value: 'PASIF',
                text: 'Donatur Pasif'
              }
            ]
          },
          {
            id: 'amount',
            value: '',
            errors: null,
            state: null,
            icon: 'Rp',
            type: 'number',
            placeholder: 'Rencana Donasi'
          },
          {
            id: 'accept_term_condition',
            value: null,
            errors: null,
            state: null,
            type: 'checkbox',
          },
        ],
        info: {
          period: null,
          year: null,
        },
        errors: {
          donation_category: null,
          amount: null,
          accept_term_condition: null
        }
      };
    },
    created() {
      this.getAuthorization();
    },
    computed: {

      donationCategoryValue() {
        return this.forms.find(data => data.id == 'donation_category').value
      },
      amountDonationValue() {
        return this.forms.find(data => data.id == 'amount').value
      },
    },
    methods: {
      getAuthorization() {
        this.isDisabled = true;
        axios
          .get(
            `api/donor/registration/re-registration/authorized?
          id=${this.$route.query.id}&
          email=${this.$route.query.email}&
          period_id=${this.$route.query.period_id}&
          token=${this.$route.query.token}`
          )
          .then(response => {

            this.isDisabled = false;
            this.authorized = true;
            this.loaded = true;
            this.getFormsValue('name').value = response.data.data.donor.name
            this.getFormsValue('phone').value = response.data.data.donor.phone
            this.getFormsValue('address').value = response.data.data.donor.address
            this.getFormsValue('zip_code').value = response.data.data.donor.zip_code
            this.getFormsValue('degree_level').value = response.data.data.donor.degree_level ? response.data.data.donor.degree_level.id : null
            let degreeLevelIndex = this.forms.findIndex(data => data.id == 'degree_level')
            this.forms[degreeLevelIndex].options = this.mutateKey(response.data.data.degree_level)
            // console.log(this.getFormsValue('degree_level').value);

            this.info.period = response.data.data.period
            this.info.year = response.data.data.year
          })
          .catch(error => {
            this.unathorizedMessage = error.response.data.message;
            this.isDisabled = false;
            this.loaded = true;
            this.authorized = false;
          });
      },
      postData() {
        this.loaded = true;
        let formData = {};
        this.forms.forEach(function(item) {
          formData[item.id] = item.value
        })
        formData['period'] = this.info.period
        formData['year'] = this.info.year
        console.log(formData);
        axios
          .post(`api/donor/registration/re-registration?
          id=${this.$route.query.id}&
          email=${this.$route.query.email}&
          period_id=${this.$route.query.period_id}&
          token=${this.$route.query.token}`, formData)
          .then(response => {
            this.$snotify.success(`Registered On New Period`, 'SUCCESS');
            this.getFormsValue('donation_category').value = null
            this.getFormsValue('amount').value = null
            this.registered = true;
            this.isDisabled = false;
          })
          .catch(error => {
            // console.log(error.response.data);
            this.$snotify.error(error.response.data.message, 'ERROR');
            this.isDisabled = false;
            let errors = error.response.data.errors;
            console.log(errors);
            this.getFormsValue('name').errors = errors.name ? errors.name[0] : 'no-error';
            this.getFormsValue('phone').errors = errors.phone ? errors.phone[0] : 'no-error';
            this.getFormsValue('address').errors = errors.address ? errors.address[0] : 'no-error';
            this.getFormsValue('zip_code').errors = errors.zip_code ? errors.zip_code[0] : 'no-error';
            this.getFormsValue('donation_category').errors = errors.donation_category ?
              errors.donation_category[0] :
              'no-error';
            this.getFormsValue('amount').errors = errors.amount ? errors.amount[0] : 'no-error';
            this.getFormsValue('degree_level').errors = errors.degree_level ? errors.degree_level[0] : 'no-error';

            this.getFormsValue('accept_term_condition').errors = errors.accept_term_condition ? errors.accept_term_condition[0] :
              'no-error';
            let self = this
            this.forms.forEach(function(item) {
              self.getFormsValue(item.id).state = item.errors == 'no-error' ? true : item.errors ? false : null
            })

          });
      },
      getFormsValue(key) {
        return this.forms.find(data => data.id == key)

      },
      mutateKey(data) {
        let mutateData = data.map(function(item) {
          return {
            value: item.id,
            text: item.range || item.name || item.description,
            state: false
          };
        });
        return mutateData;
      }
    }
  };
</script>
<style scoped>
  .bg-image-full {
    /* Full height */
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/images/bg-donor-registration.jpg);
    height: 100%;
    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
