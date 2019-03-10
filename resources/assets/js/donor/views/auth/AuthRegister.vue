<template>
  <div class="app flex-row align-items-center">
    <loading class="text-center" :active="isDisabled" :can-cancel="false" :opacity="0.9" :height="60" loader='dots'
      transition='fade' background-color="rgba(0,0,0,.85)" color="rgba(255,255,255,.9)" :is-full-page="true">
      <div class="text-center" slot="after" style="color:rgba(255,255,255,.9)">Mohon Tunggu...</div>
    </loading>
    <div class="container" v-if="loaded">
      <b-row class="justify-content-center">
        <b-col sm="8" v-if="registered">
          <header class="text-center" id="header">
            <h1><strong>TERIMA KASIH</strong></h1>
          </header>

          <div class="text-center">
            <i class="fa fa-heart display-1" id="checkmark" style="color:red"></i>
            <p>Terima kasih telah mendaftar menjadi donatur di SEED Scholarship. Mohon cek email anda, untuk menyetujui
              data yang sudah anda berikan agar kontrak kerja sama bisa segera kami kirimkan.</p>
          </div>
        </b-col>
        <b-col lg="6" md="8" v-if="!registered">

          <b-card no-body class="mx-4">
            <form class="card-body p-4" @submit.prevent="register" autocomplete="off">
              <h2>Donors Registration</h2>
              <p class="text-muted">Silahkan mengisi form berikut untuk menjadi donatur kami. </p>
              <b-row class="form-group">
                <b-col sm="12">
                  <b-form-group :invalid-feedback="errors.name" :state="stateName">
                    <b-input-group>
                      <b-input-group-prepend>
                        <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                      </b-input-group-prepend>
                      <b-input autocomplete="off" type="text" class="form-control" placeholder="Full Name" v-model="input.name"
                        :state="stateName" />
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col sm="12">
                  <b-form-group :invalid-feedback="errors.email" :state="stateEmail">
                    <b-input-group class="">
                      <b-input-group-prepend>
                        <b-input-group-text>@</b-input-group-text>
                      </b-input-group-prepend>
                      <b-input autocomplete="off" type="text" class="form-control" placeholder="Active Email" v-model="input.email"
                        :state="stateEmail" />
                    </b-input-group>
                  </b-form-group>
                </b-col>

                <b-col sm="6">
                  <b-form-group :invalid-feedback="errors.phone" :state="statePhone">
                    <b-input-group class="">
                      <b-input-group-prepend>
                        <b-input-group-text><i class="icon-phone"></i></b-input-group-text>
                      </b-input-group-prepend>
                      <b-input autocomplete="off" type="number" class="form-control" placeholder="Phone Number" v-model="input.phone"
                        :state="statePhone" />
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col sm="6">
                  <b-form-group :invalid-feedback="errors.year" :state="stateYear">
                    <b-input-group class="">
                      <b-input-group-prepend>
                        <b-input-group-text><i class="icon-calendar"></i></b-input-group-text>
                      </b-input-group-prepend>
                      <b-input autocomplete="off" type="number" min="1950" :max="maxYear" class="form-control"
                        placeholder="Year (Angkatan)" v-model="input.year" :state="stateYear" />
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col sm="12">
                  <b-form-group :invalid-feedback="errors.department" :state="stateDepartment">
                    <b-input-group class="">
                      <b-input-group-prepend>
                        <b-input-group-text><i class="icon-list"></i></b-input-group-text>
                      </b-input-group-prepend>
                      <b-form-select plain id="department" :options="departmentOptions" v-model="input.department"
                        :state="stateDepartment">
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
                      <b-input autocomplete="off" type="text" class="form-control" placeholder="Full Address" v-model="input.address"
                        :state="stateAddress" />
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col sm="12">
                  <b-form-group :invalid-feedback="errors.zip_code" :state="stateZipCode">
                    <b-input-group class="">
                      <b-input-group-prepend>
                        <b-input-group-text><i class="icon-direction"></i></b-input-group-text>
                      </b-input-group-prepend>
                      <b-input autocomplete="off" type="number" class="form-control" placeholder="Zip Code (Kode Pos)" v-model="input.zip_code"
                        :state="stateZipCode" v-on:focus.native="isShowCheckZipCode = true"  v-on:blur.native="onBlurInputZipCode" />
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
                      <b-form-select plain id="donationCategory" :options="[
                      {
                        value:'AKTIF',
                        text:'Donatur Aktif'
                      },
                      {
                        value:'PASIF',
                        text:'Donatur Pasif'
                      },
                      ]"
                        v-model="input.donation_category" :state="stateDonationCategory">
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
                        <b-input autocomplete="off" type="number" class="form-control" min="0" :placeholder="amountPlaceholder"
                          v-model="input.amount" :state="stateAmount" />
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
                    <b-form-checkbox id="term_condition" v-model="input.accept_term_condition" :value="true"
                      :unchecked-value="null" :state="stateAcceptTermCondition">
                      I already read & accept the terms and conditions.
                    </b-form-checkbox>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-button :disabled="isDisabled" type="submit" variant="success" block><i v-show="isDisabled" class="fa fa-spinner fa-spin"></i>
                Submit</b-button>
            </form>
          </b-card>
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
    data: function () {
      return {
        isShowCheckZipCode:false,
        showTotalAmount: false,
        isDisabled: false,
        registered: false,
        scholarshipOptions: [],
        departmentOptions: [],
        periodOptions: [],
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
    created() {
      this.getSchoarship()
      this.getPeriod()
      this.getDepartment()
    },
    computed: {
      maxYear() {
        return (new Date()).getFullYear() - 4
      },
      loaded() {
        return this.scholarshipOptions && this.departmentOptions && this.periodOptions ? true : false
      },
      stateName() {
        return this.errors.name == 'no-error' ? true : this.errors.name ? false : null
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
      amountPlaceholder() {
        return this.input.donation_category == 'PASIF' ? 'Planned amount of donations' :
          'Planned amount of donations per Month'
      }
    },
    methods: {
      onBlurInputZipCode(){
        setTimeout(() => this.isShowCheckZipCode = false, 200)
      },
      getPeriod() {
        axios.get(`api/period`)
          .then((response) => {
            response.data.forEach(function (obj) {
              obj.value = obj.id
              obj.text = `Seedscholarship #${obj.period} - Year ${obj.year}`
              delete obj.id
              delete obj.period
              delete obj.year
            });
            this.periodOptions = response.data;
            console.log(this.periodOptions);


          })
          .catch((error) => {
            console.log(error);
          })
      },
      getSchoarship() {
        axios.get(`api/scholarship`)
          .then((response) => {
            response.data.forEach(function (obj) {
              obj.value = obj.id
              obj.text = `${obj.name} - Year ${obj.year}`
              delete obj.id
              delete obj.name
              delete obj.year
            });
            this.scholarshipOptions = response.data;
            console.log(this.scholarshipOptions);


          })
          .catch((error) => {
            console.log(error);
          })
      },
      getDepartment() {
        axios.get(`api/college-department`)
          .then((response) => {
            response.data.forEach(function (obj) {
              obj.value = obj.id
              obj.text = obj.department
              delete obj.id
              delete obj.department
              delete obj.awardees_count
            });
            this.departmentOptions = response.data;

          })
          .catch((error) => {
            console.log(error);
          })
      },
      register() {
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
            // console.log(error.response.data);
            this.$snotify.error(error.response.data.message, "ERROR");
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
<style>
</style>
