<template>
  <div class="app flex-row align-items-center" v-if="loaded">
    <loading class="text-center"  :active="isDisabled" :can-cancel="false" :opacity="0.9" :height="60"   loader='dots' transition='fade'  background-color="rgba(0,0,0,.85)" color="rgba(255,255,255,.9)" :is-full-page="true">
            <div class="text-center" slot="after" style="color:rgba(255,255,255,.9)">Mohon Tunggu...</div>
    </loading>
    <div class="container">
      <b-row class="justify-content-center">
        <b-col lg="6" md="8">
          <b-card no-body class="mx-4">
            <form class="card-body p-4" @submit.prevent="register" autocomplete="off">
              <h2>Research Awardee Registration</h2>
              <!-- <p class="text-muted">Create your first account</p> -->
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
                  <b-form-group :invalid-feedback="errors.year" :state="stateYear">
                    <b-input-group class="">
                      <b-input-group-prepend>
                        <b-input-group-text><i class="icon-calendar"></i></b-input-group-text>
                      </b-input-group-prepend>
                      <b-input autocomplete="off" type="number" :min="minYear" :max="maxYear" class="form-control" placeholder="Year (Angkatan)"
                        v-model="input.year" :state="stateYear" />
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
                <b-col sm="12">
                  <b-form-group :invalid-feedback="errors.department_id" :state="stateDepartment">
                    <b-input-group class="">
                      <b-input-group-prepend>
                        <b-input-group-text><i class="icon-list"></i></b-input-group-text>
                      </b-input-group-prepend>
                      <b-form-select plain id="department" :options="departmentOptions" v-model="input.department_id"
                        :state="stateDepartment">
                        <template slot="first">
                            <option :value="null" disabled>-- Please select your field of study --</option>
                        </template>
                      </b-form-select>
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col sm="12">
                  <b-form-group :invalid-feedback="errors.scholarship_id" :state="stateScholarship">
                    <b-input-group class="">
                      <b-input-group-prepend>
                        <b-input-group-text><i class="icon-list"></i></b-input-group-text>
                      </b-input-group-prepend>
                      <b-form-select plain id="scholarship" :options="scholarshipOptions" v-model="input.scholarship_id"
                        :state="stateScholarship">
                        <template slot="first">
                          <option :value="null" disabled>-- Please select program --</option>
                        </template>
                      </b-form-select>
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <!-- <b-col sm="12">
                  <b-form-file v-model="file" placeholder="Choose a file..."></b-form-file>
                </b-col> -->
                <!-- <b-form-group :invalid-feedback="errors.password" :state="statePassword">
                <b-input-group class="">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-input type="password" class="form-control" placeholder="Password" v-model="input.password" :state="statePassword" />
                </b-input-group>
              </b-form-group>
              <b-form-group :invalid-feedback="errors.password" :state="statePassword">
                <b-input-group class="mb-1">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-input type="password" class="form-control" placeholder="Repeat password" v-model="input.password_confirmation"
                    :state="statePassword" />
                </b-input-group>
              </b-form-group> -->

              </b-row>
              <b-button :disabled="isDisabled" type="submit" variant="success" block><i v-show="isDisabled" class="fa fa-spinner fa-spin"></i>
                Submit</b-button>
            </form>

          </b-card>
        </b-col>
      </b-row>
    </div>
    <faq-modal />
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
        isDisabled: false,
        scholarshipOptions: [],
        departmentOptions: [],
        errors: {
          name: '',
          year: '',
          phone: '',
          email: '',
          scholarship_id: '',
          department_id: '',
          initial: '',
          password: '',
        },
        input: {
          name: '',
          year: '',
          phone: '',
          scholarship_id: null,
          department_id: null,
          email: '',
          password: '',
          password_confirmation: '',
        }
      }
    },
    created() {
      this.getScholarship()
      this.getDepartment()
    },
    computed: {
            maxYear(){
        return (new Date()).getFullYear() - 1
      },
            minYear(){
        return (new Date()).getFullYear() - 7
      },
            loaded() {
        return this.scholarshipOptions && this.departmentOptions ? true : false
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
        return this.errors.scholarship_id == 'no-error' ? true : this.errors.scholarship_id ? false : null
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
        return this.errors.department_id == 'no-error' ? true : this.errors.department_id ? false : null
      },
    },
    methods: {
      getScholarship() {
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
            // console.log(this.scholarshipOptions);


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
        axios.post('api/auth/nonreg/register', this.input)
          .then((response) => {
            this.$snotify.success(`You Are Registered Successfully`, "SUCCESS");
            this.input.name = '',
              this.input.scholarship_id = null,
              this.input.department_id = null,
              this.input.email = '',
              this.input.password = '',
              this.input.password_confirmation = ''
            this.isDisabled = false
            this.$router.replace({
              name: 'RegistrationUpload',
              query: {
                id: response.data.id,
                email: response.data.email,
                scholarship_id: response.data.scholarship_id,
                registration_code: response.data.registration_code
              }
            })
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
            this.errors.scholarship_id = errors.scholarship_id ? errors.scholarship_id[0] : 'no-error';
            this.errors.department_id = errors.department_id ? errors.department_id[0] : 'no-error';
            this.errors.password = errors.password ? errors.password[0] : 'no-error';
          })
      }
    },
  }

</script>
<style>
</style>
