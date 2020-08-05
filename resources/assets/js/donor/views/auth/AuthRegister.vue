<template>
  <div class="app bg-image-full flex-row align-items-center">
    <loading class="text-center" :active="isDisabled" :can-cancel="false" :opacity="0.9" :height="60" loader='dots' transition='fade' background-color="rgba(0,0,0,.85)" color="rgba(255,255,255,.9)" :is-full-page="true">
      <div class="text-center" slot="after" style="color:rgba(255,255,255,.9)">Mohon Tunggu...</div>
    </loading>
    <div class="container text-white" v-if="isClosed">
      <b-row class="justify-content-center">
        <b-col sm="8">
          <div class="text-center">
            <img src="/images/Seedlogo2.png" alt="" style="max-height:150px" />
          </div>
          <header class="text-center my-2" id="header">
            <h1><strong>PENDAFTARAN DITUTUP</strong></h1>
          </header>
          <div class="text-center">
            <p>Silahkan menghubungi contact person dibawah ini untuk informasi lebih lanjut</p>
            <div>{{cp1}}</div>
            <div>{{cp2}}</div>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="container" v-if="!isClosed" v-show="loaded">
      <b-row class="justify-content-center">
        <b-col sm="8" v-if="registered" class="text-white">
          <header class="text-center" id="header">
            <h1><strong>TERIMA KASIH</strong></h1>
          </header>

          <div class="text-center">
            <i class="fa fa-heart display-1" id="checkmark" style="color:red"></i>
            <p>Terima kasih telah mendaftar menjadi donatur di SEED Scholarship. Mohon cek email anda, untuk menyetujui
              data yang sudah anda berikan agar kontrak kerja sama bisa segera kami kirimkan.</p>
            <img class="mt-4" src="/images/Seedlogo-small.png" alt="" style="max-height:150px" />
          </div>

        </b-col>
        <b-col lg="6" md="8" v-if="!registered">

          <b-card no-body class="p-4">
            <div class="text-center mb-2">
              <img class="mb-4" src="/images/Seedlogo-small.png" alt="" style="max-height:150px" />
              <h3>Pendaftaran Donatur Seedscholarship</h3>
            </div>
            <div class="card-body p-0" v-if="showIntroForm">
              <b-row>
                <b-col cols="12">
                  <p class="text-muted">Klik tombol berikut jika <b> belum pernah mendaftar</b> periode sebelumnya. </p>
                  <b-button variant="success" block @click="handleIntroFormButton(1)">
                    Daftar Donatur Baru</b-button>
                </b-col>
                <b-col class="text-center mt-3" cols="12">
                  <h3>Atau</h3>
                </b-col>
                <b-col cols="12">

                  <p class="text-muted">Klik tombol berikut jika <b> pernah mendaftar</b> periode sebelumnya.</p>
                  <b-button variant="success" block @click="handleIntroFormButton(2)">
                    Daftar Donatur Lama</b-button>
                </b-col>
              </b-row>
            </div>
            <form class="card-body p-0" @submit.prevent="postOldRegister" autocomplete="off" v-if="showOldDonorForm">
              <b-row class="form-group ">
                <b-col sm="12">
                  <!-- <h3 class="text-center">Daftar Donatur Lama</h3> -->
                  <p class="text-muted">Silahkan memasukan email yang pernah dimasukan pada periode sebelumnya untuk mendaftar ulang sebagai donatur pada periode ini. </p>
                </b-col>
                <b-col sm="12">
                  <b-form-group :invalid-feedback="oldDonorForm.errors.email" :state="stateEmailOldDonor">
                    <b-input-group class="">
                      <b-input-group-prepend>
                        <b-input-group-text>@</b-input-group-text>
                      </b-input-group-prepend>
                      <b-input autocomplete="off" type="text" class="form-control" placeholder="Active Email" v-model="oldDonorForm.input.email" :state="stateEmailOldDonor" />
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col sm="12">
                  <b-form-group :invalid-feedback="oldDonorForm.errors.accept_term_condition" :state="stateAcceptTermConditionOldDonor">
                    <b-form-checkbox id="term_condition" v-model="oldDonorForm.input.accept_term_condition" :value="true" :unchecked-value="null" :state="stateAcceptTermConditionOldDonor">
                      I already read & accept the terms and conditions.
                    </b-form-checkbox>
                  </b-form-group>
                </b-col>
                <b-col cols="12">

                  <b-button :disabled="isDisabled" type="submit" variant="success" block><i v-show="isDisabled" class="fa fa-spinner fa-spin"></i>
                    Submit</b-button>
                </b-col>
              </b-row>
            </form>
            <form class="card-body p-0" @submit.prevent="postNewRegister" autocomplete="off" v-if="showNewDonorForm">
              <b-row class="form-group">
                <b-col sm="12">
                  <!-- <h3 class="text-center">Daftar Donatur Baru</h3> -->
                  <p class="text-muted">Silahkan mengisi form berikut untuk menjadi donatur baru kami. </p>

                </b-col>
                <b-col sm="12">
                  <b-form-group :invalid-feedback="errors.name" :state="stateName">
                    <b-input-group>
                      <b-input-group-prepend>
                        <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                      </b-input-group-prepend>
                      <b-input autocomplete="off" type="text" class="form-control" placeholder="Full Name" v-model="input.name" :state="stateName" />
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col sm="12">
                  <b-form-group :invalid-feedback="errors.email" :state="stateEmail">
                    <b-input-group class="">
                      <b-input-group-prepend>
                        <b-input-group-text>@</b-input-group-text>
                      </b-input-group-prepend>
                      <b-input autocomplete="off" type="text" class="form-control" placeholder="Active Email" v-model="input.email" :state="stateEmail" />
                    </b-input-group>
                  </b-form-group>
                </b-col>

                <b-col sm="6">
                  <b-form-group :invalid-feedback="errors.phone" :state="statePhone">
                    <b-input-group class="">
                      <b-input-group-prepend>
                        <b-input-group-text><i class="icon-phone"></i></b-input-group-text>
                      </b-input-group-prepend>
                      <b-input autocomplete="off" type="number" class="form-control" placeholder="Phone Number" v-model="input.phone" :state="statePhone" />
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col sm="6">
                  <b-form-group :invalid-feedback="errors.year" :state="stateYear">
                    <b-input-group class="">
                      <b-input-group-prepend>
                        <b-input-group-text><i class="icon-calendar"></i></b-input-group-text>
                      </b-input-group-prepend>
                      <b-input autocomplete="off" type="number" min="1950" :max="maxYear" class="form-control" placeholder="Year (Angkatan)" v-model="input.year" :state="stateYear" />
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col sm="12">
                  <b-form-group :invalid-feedback="errors.department" :state="stateDepartment">
                    <b-input-group class="">
                      <b-input-group-prepend>
                        <b-input-group-text><i class="icon-list"></i></b-input-group-text>
                      </b-input-group-prepend>
                      <b-form-select plain id="department" :options="departmentOptions" v-model="input.department" :state="stateDepartment">
                        <template slot="first">
                          <option :value="null" disabled>-- Please select your field of study --</option>
                        </template>
                      </b-form-select>
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col sm="12">
                  <b-form-group :invalid-feedback="errors.address" :state="stateAddress">
                    <b-input-group class="">
                      <b-input-group-prepend>
                        <b-input-group-text><i class="icon-direction"></i></b-input-group-text>
                      </b-input-group-prepend>
                      <b-input autocomplete="off" type="text" class="form-control" placeholder="Full Address" v-model="input.address" :state="stateAddress" />
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col sm="12">
                  <b-form-group :invalid-feedback="errors.zip_code" :state="stateZipCode">
                    <b-input-group class="">
                      <b-input-group-prepend>
                        <b-input-group-text><i class="icon-direction"></i></b-input-group-text>
                      </b-input-group-prepend>
                      <b-input autocomplete="off" type="number" class="form-control" placeholder="Zip Code (Kode Pos)" v-model="input.zip_code" :state="stateZipCode" v-on:focus.native="isShowCheckZipCode = true" v-on:blur.native="onBlurInputZipCode" />
                    </b-input-group>
                    <small slot="description" v-show="isShowCheckZipCode"><a href="https://carikodepos.com" target="_blank">cek kode pos</a></small>
                  </b-form-group>
                </b-col>
                <b-col sm="12">
                  <b-form-group :invalid-feedback="errors.period" :state="statePeriod">
                    <b-input-group class="">
                      <b-input-group-prepend>
                        <b-input-group-text><i class="icon-list"></i></b-input-group-text>
                      </b-input-group-prepend>
                      <b-form-select plain id="period" :options="periodOptions" v-model="input.period" :state="statePeriod">
                        <template slot="first">
                          <option :value="null" disabled>-- Please select seedscholarship period --</option>
                        </template>
                      </b-form-select>
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col sm="12">
                  <b-form-group :invalid-feedback="errors.donation_category" :state="stateDonationCategory">
                    <b-input-group class="">
                      <b-input-group-prepend>
                        <b-input-group-text><i class="icon-list"></i></b-input-group-text>
                      </b-input-group-prepend>
                      <b-form-select plain id="donationCategory" :options="options.donationCategory" v-model="input.donation_category" :state="stateDonationCategory">
                        <template slot="first">
                          <option :value="null" disabled>-- Please select donation category for this period --</option>
                        </template>
                      </b-form-select>
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <slide-y-up-transition>
                  <b-col sm="12">
                    <b-form-group :invalid-feedback="errors.amount" :state="stateAmount">
                      <b-input-group class="">
                        <b-input-group-prepend>
                          <b-input-group-text>Rp</b-input-group-text>
                        </b-input-group-prepend>
                        <b-input autocomplete="off" type="number" class="form-control" min="0" :placeholder="amountPlaceholder" v-model="input.amount" :state="stateAmount" />
                      </b-input-group>
                      <small v-show="input.donation_category == 'AKTIF'" slot="description">Rencana donasi anda akan
                        ditagihkan Rp. {{input.amount|currency}} / bulan</small>
                      <small v-show="input.donation_category == 'PASIF'" slot="description">Rencana donasi anda Rp.
                        {{input.amount | currency}} / periode</small>
                      <!-- <small v-show="input.donation_category == 'AKTIF'" slot="description" >Your total donation Rp. {{input.amount*12 | currency}} / year & will be billed Rp. {{input.amount|currency}} / month</small>
                        <small v-show="input.donation_category == 'PASIF'" slot="description" >Your total donation Rp. {{input.amount | currency}} / year</small> -->
                    </b-form-group>
                  </b-col>
                </slide-y-up-transition>
                <b-col sm="12">
                  <b-form-group :invalid-feedback="errors.accept_term_condition" :state="stateAcceptTermCondition">
                    <b-form-checkbox id="term_condition" v-model="input.accept_term_condition" :value="true" :unchecked-value="null" :state="stateAcceptTermCondition">
                      I already read & accept the terms and conditions.
                    </b-form-checkbox>
                  </b-form-group>
                </b-col>
                <b-col cols="12">

                  <b-button :disabled="isDisabled" type="submit" variant="success" block><i v-show="isDisabled" class="fa fa-spinner fa-spin"></i>
                    Submit</b-button>
                </b-col>
              </b-row>
            </form>
          </b-card>
          <b-modal centered :hide-footer="true" :no-close-on-esc="true" :hide-header-close="false" :no-close-on-backdrop="false" size="sm" title="Pendaftaran Gagal" v-model="errorEmailExistModal">
            Sepertinya email tersebut sudah pernah didaftarkan pada periode sebelumnya, silahkan mendaftar di form lain dengan menekan tombol "Daftar donatur lama"
            <b-btn class="mt-3" variant="success" block @click="handleClickErrorEmailExistModalButton">
              <b>
                Daftar donatur lama
              </b>
            </b-btn>
          </b-modal>
          <b-modal centered :hide-footer="true" :no-close-on-esc="true" :hide-header-close="false" :no-close-on-backdrop="false" size="sm" title="Pendaftaran Gagal" v-model="errorEmailUnexistModal">
            Sepertinya email tersebut belum pernah didaftarkan pada periode sebelumnya, silahkan mendaftar di form lain dengan menekan tombol "Daftar donatur baru"
            <b-btn class="mt-3" variant="success" block @click="handleClickErrorEmailUnexistModalButton">
              <b>
                Daftar donatur baru
              </b>
            </b-btn>
          </b-modal>
          <faq-modal />
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
  import FaqModal from './AuthRegisterFaq.vue'
  export default {
    name: 'AuthRegister',
    components: {
      FaqModal
    },
    data: function() {
      return {
        isShowCheckZipCode: false,
        showTotalAmount: false,
        isDisabled: false,
        registered: false,
        scholarshipOptions: [],
        departmentOptions: [],
        periodOptions: [],
        isClosed: false,
        loaded: false,
        showNewDonorForm: false,
        showOldDonorForm: false,
        showIntroForm: true,
        errorEmailExistModal: false,
        errorEmailUnexistModal: false,
        cp1: '',
        cp2: '',
        options: {
          donationCategory: [{
              value: 'AKTIF',
              text: 'Donatur Aktif'
            },
            {
              value: 'PASIF',
              text: 'Donatur Pasif'
            },
          ]
        },

        oldDonorForm: {
          errors: {
            email: '',
            accept_term_condition: null,
          },
          input: {
            email: '',
            accept_term_condition: null,
          }
        },
        errors: {
          name: '',
          year: '',
          phone: '',
          email: '',
          donation_category: '',
          department: '',
          initial: '',
          password: '',
          amount: null,
          address: '',
          zip_code: null,
          accept_term_condition: null,
          period: null
        },
        input: {
          name: '',
          year: '',
          phone: '',
          donation_category: null,
          department: null,
          email: '',
          amount: null,
          address: '',
          zip_code: null,
          accept_term_condition: null,
          period: null,
          password: '',
          password_confirmation: '',
        }
      }
    },
    mounted() {

      // this.chechOpenRegistration()
      this.getChoices()
    },
    computed: {
      maxYear() {
        return (new Date()).getFullYear() - 4
      },
      stateName() {
        return this.errors.name == 'no-error' ? true : this.errors.name ? false : null
      },
      stateEmailOldDonor() {
        return this.oldDonorForm.errors.email == 'no-error' ? true : this.oldDonorForm.errors.email ? false : null
      },
      stateEmail() {
        return this.errors.email == 'no-error' ? true : this.errors.email ? false : null
      },
      statePhone() {
        return this.errors.phone == 'no-error' ? true : this.errors.phone ? false : null
      },
      stateScholarship() {
        return this.errors.donation_category == 'no-error' ? true : this.errors.donation_category ? false : null
      },
      stateYear() {
        return this.errors.year == 'no-error' ? true : this.errors.year ? false : null
      },
      stateInitial() {
        return this.errors.initial == 'no-error' ? true : this.errors.initial ? false : null
      },
      statePassword() {
        return this.errors.password == 'no-error' ? true : this.errors.password ? false : null
      },
      stateDepartment() {
        return this.errors.department == 'no-error' ? true : this.errors.department ? false : null
      },
      stateAmount() {
        return this.errors.amount == 'no-error' ? true : this.errors.amount ? false : null
      },
      stateAddress() {
        return this.errors.address == 'no-error' ? true : this.errors.address ? false : null
      },
      stateZipCode() {
        return this.errors.zip_code == 'no-error' ? true : this.errors.zip_code ? false : null
      },
      stateDonationCategory() {
        return this.errors.donation_category == 'no-error' ? true : this.errors.donation_category ? false : null
      },
      statePeriod() {
        return this.errors.period == 'no-error' ? true : this.errors.period ? false : null
      },
      stateAcceptTermCondition() {
        return this.errors.accept_term_condition == 'no-error' ? true : this.errors.accept_term_condition ? false :
          null
      },
      stateAcceptTermConditionOldDonor() {
        return this.oldDonorForm.errors.accept_term_condition == 'no-error' ? true : this.oldDonorForm.errors.accept_term_condition ? false :
          null
      },
      amountPlaceholder() {
        return this.input.donation_category == 'PASIF' ? 'Planned amount of donations' :
          'Planned amount of donations per Month'
      }
    },
    methods: {
      onBlurInputZipCode() {
        setTimeout(() => this.isShowCheckZipCode = false, 200)
      },
      handleClickErrorEmailExistModalButton() {
        this.showOldDonorForm = true
        this.showNewDonorForm = false
        this.errorEmailExistModal = false

      },
      handleClickErrorEmailUnexistModalButton() {
        this.showOldDonorForm = false
        this.showNewDonorForm = true
        this.errorEmailUnexistModal = false

      },
      handleIntroFormButton(mode) {
        this.showIntroForm = false
        if (mode == 1) {
          this.showNewDonorForm = true
        }
        if (mode == 2) {
          this.showOldDonorForm = true
        }
      },
      getChoices() {
        let self = this
        axios.get(`api/donor/registration/choices`)
          .then((response) => {

            // console.log(this.cp);
            if (response.data.open_form == "0") {

              this.isClosed = true
              return
            }
            if (response.data.donor_passive_mode == "1") {
              this.options.donationCategory = [{
                value: 'PASIF',
                text: 'Donatur Pasif'
              }]
            }
            response.data.department.forEach(function(obj) {
              obj.value = obj.id
              obj.text = obj.department
              delete obj.id
              delete obj.department
              delete obj.awardees_count
            });
            this.departmentOptions = response.data.department;
            response.data.period.forEach(function(obj) {
              obj.value = obj.id
              obj.text = `Seedscholarship #${obj.period} - Year ${obj.year}`
              delete obj.id
              delete obj.period
              delete obj.year
            });
            this.periodOptions = response.data.period;
            console.log(this.periodOptions)
            this.loaded = true
            self.cp1 = response.data.cp1;
            self.cp2 = response.data.cp2;
          })
          .catch((error) => {
            console.log(error);
          })
      },
      postOldRegister() {
        this.isDisabled = true

        axios.post(`api/donor/registration/re-registration/self-invite`, {
            email: this.oldDonorForm.input.email,
            accept_term_condition: this.oldDonorForm.input.accept_term_condition,
            period_id: this.periodOptions[0].value
          })
          .then((response) => {
            console.log(response.data)
            this.registered = true
            this.isDisabled = false
            this.$snotify.success(response.data.message, "SUCCESS");

          })
          .catch((error) => {
            console.log(error);
            this.isDisabled = false
            let errors = error.response.data.errors
            if (error.response.data.status == 'Unauthorized') {
              this.errorEmailUnexistModal = true
            }
            this.$snotify.error(error.response.data.message, "ERROR");
            this.oldDonorForm.errors.email = errors.email ? errors.email[0] : 'no-error';
            this.oldDonorForm.errors.accept_term_condition = errors.accept_term_condition ? errors.accept_term_condition[0] :
              'no-error';

          })
      },
      postNewRegister() {
        this.isDisabled = true
        axios.post('api/auth/donor/register', this.input)
          .then((response) => {

            this.$snotify.success(`You Are Registered Successfully`, "SUCCESS");
            this.input.name = '',
              this.input.donation_category = null,
              this.input.department = null,
              this.input.email = '',
              this.input.password = '',
              this.input.password_confirmation = ''
            this.registered = true
            this.isDisabled = false

          })
          .catch((error) => {
            console.log(error.response.data.message);
            this.$snotify.error(error.response.data.message, "ERROR");

            if (error.response.data.status == 'Unauthorized') {
              this.errorEmailExistModal = true
            }
            this.isDisabled = false
            let errors = error.response.data.errors
            // console.log(errors.name);
            this.errors.name = errors.name ? errors.name[0] : 'no-error';
            this.errors.email = errors.email ? errors.email[0] : 'no-error';
            this.errors.phone = errors.phone ? errors.phone[0] : 'no-error';
            this.errors.year = errors.year ? errors.year[0] : 'no-error';
            this.errors.donation_category = errors.donation_category ? errors.donation_category[0] : 'no-error';
            this.errors.department = errors.department ? errors.department[0] : 'no-error';
            this.errors.password = errors.password ? errors.password[0] : 'no-error';
            this.errors.amount = errors.amount ? errors.amount[0] : 'no-error';
            this.errors.period = errors.period ? errors.period[0] : 'no-error';
            this.errors.address = errors.address ? errors.address[0] : 'no-error';
            this.errors.zip_code = errors.zip_code ? errors.zip_code[0] : 'no-error';
            this.errors.accept_term_condition = errors.accept_term_condition ? errors.accept_term_condition[0] :
              'no-error';
          })
      }
    },
  }
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
