<template>
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6" sm="8">
          <b-card no-body class="mx-4">
            <form class="card-body p-4" @submit.prevent="register">
              <h1>Register</h1>
              <p class="text-muted">Create new admin account</p>
              <b-form-group :invalid-feedback="errors.name" :state="stateName">
                <b-input-group>
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-input type="text" class="form-control" placeholder="Full Name" v-model="input.name" :state="stateName" />
                </b-input-group>
              </b-form-group>
              <b-form-group :invalid-feedback="errors.initial" :state="stateInitial">
                  <b-input-group class="">
                    <b-input-group-prepend>
                      <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                    </b-input-group-prepend>
                    <b-input type="text" class="form-control" placeholder="Initial" v-model="input.initial" :state="stateInitial" />
                  </b-input-group>
               </b-form-group>
                <b-form-group :invalid-feedback="errors.year" :state="stateYear">
                  <b-input-group class="">
                    <b-input-group-prepend>
                      <b-input-group-text><i class="icon-calendar"></i></b-input-group-text>
                    </b-input-group-prepend>
                    <b-input type="number" class="form-control" placeholder="Angkatan" v-model="input.year" :state="stateYear" />
                  </b-input-group>
                </b-form-group>
                <b-form-group :invalid-feedback="errors.department" :state="stateDepartment">
                <b-input-group class="">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-list"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-select plain id="department" :options="departmentOptions" v-model="input.department_id" :state="stateDepartment">
                    <template slot="first">
                      <option :value="null" disabled>-- Please select department --</option>
                    </template>
                  </b-form-select>
                </b-input-group>
              </b-form-group>
              <b-form-group :invalid-feedback="errors.email" :state="stateEmail">
                <b-input-group class="">
                  <b-input-group-prepend>
                    <b-input-group-text>@</b-input-group-text>
                  </b-input-group-prepend>
                  <b-input type="text" class="form-control" placeholder="Email" v-model="input.email" :state="stateEmail" />
                </b-input-group>
              </b-form-group>
              <b-form-group :invalid-feedback="errors.password" :state="statePassword">
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
              </b-form-group>
              <b-button type="submit" variant="success" block>Create Account</b-button>
            </form>

          </b-card>
        </b-col>
      </b-row>
    </div>
</template>
<script>
  export default {
    name: 'AuthRegister',
    data: function () {
      return {
        departmentOptions: [],
        errors: {
          name: '',
          initial: '',
          email: '',
          year:'',
          department_id: '',
          password: '',
        },
        input: {
          name: '',
          initial: '',
          year:null,
          department_id: null,
          email: '',
          password: '',
          password_confirmation: '',
        }
      }
    },
    created() {
      this.getDepartment()
    },
    computed: {
      stateName() {
        return this.errors.name == 'no-error' ? true : this.errors.name ? false : null
      },
      stateInitial() {
        return this.errors.initial == 'no-error' ? true : this.errors.initial ? false : null
      },
      stateEmail() {
        return this.errors.email == 'no-error' ? true : this.errors.email ? false : null
      },
      stateYear() {
        return this.errors.year == 'no-error' ? true : this.errors.year ? false : null
      },
      stateDepartment() {
        return this.errors.department == 'no-error' ? true : this.errors.department ? false : null
      },
      statePassword() {
        return this.errors.password == 'no-error' ? true : this.errors.password ? false : null
      },
    },
    methods: {
      getDepartment() {
        axios.get(`api/department`)
          .then((response) => {
            response.data.forEach(function (obj) {
              obj.value = obj.id
              obj.text = obj.department
              delete obj.id
              delete obj.department
            });
            this.departmentOptions = response.data;

          })
          .catch((error) => {
            console.log(error);
          })
      },
      register() {
        axios.post('api/auth/register', this.input)
          .then((response) => {
            this.$snotify.success(`New User Registered`, "SUCCESS");
            this.input.name = '',
              this.input.initial = '',
              this.input.department = null,
              this.input.email = '',
              this.input.year = '',
              this.input.password = '',
              this.input.password_confirmation = ''
              this.$router.push({
                name:'AccountAdmin'
              })
          })
          .catch((error) => {
            // console.log(error.response.data);
            let errors = error.response.data.errors
            // console.log(errors.name);
            this.errors.name = errors.name ? errors.name[0] : 'no-error';
            this.errors.email = errors.email ? errors.email[0] : 'no-error';
            this.errors.year = errors.year ? errors.year[0] : 'no-error';
            this.errors.department = errors.department ? errors.department[0] : 'no-error';
            this.errors.initial = errors.initial ? errors.initial[0] : 'no-error';
            this.errors.password = errors.password ? errors.password[0] : 'no-error';
            this.$snotify.error(error.response.data.message, "ERROR");
          })
      }
    },
  }
</script>
<style>
</style>
