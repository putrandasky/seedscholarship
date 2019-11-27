<template>
  <div class="app flex-row align-items-center" v-show="this.loaded">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6" sm="8">
          <b-card v-if="!this.hasAuthorize">
            <div>
              You don't have authorization to access this page or your token already expired
              <hr>
              If you want to reset your password, please contact your super admin to send link reset password to your
              email.
            </div>
          </b-card>
          <b-card class="mx-4" v-if="this.hasAuthorize">
            <form class="card-body p-4" @submit.prevent="reset">
              <h1>RESET PASSWORD</h1>
              <p class="text-muted">Reset password for your account</p>
              <b-form-group :invalid-feedback="errors.password" :state="statePassword">
                <b-input-group class="">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-input type="password" class="form-control" placeholder="New Password" v-model="input.password"
                    :state="statePassword" />
                </b-input-group>
              </b-form-group>
              <b-form-group :invalid-feedback="errors.password" :state="statePassword">
                <b-input-group class="mb-1">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-input type="password" class="form-control" placeholder="Repeat New Password" v-model="input.password_confirmation"
                    :state="statePassword" />
                </b-input-group>
              </b-form-group>
              <b-button :disabled="isDisabled" type="submit" variant="success" block>Submit</b-button>
            </form>

          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'AuthPasswordReset',
    data: function () {
      return {
        isDisabled: false,
        loaded: false,
        hasAuthorize: false,
        errors: {
          password: '',
        },
        input: {
          token: '',
          email: '',
          password: '',
          password_confirmation: '',
        }
      }
    },
    created() {
      this.checkHasAuthorize()
    },
    computed:{
      statePassword() {
        return this.errors.password == 'no-error' ? true : this.errors.password ? false : null
      },

    },
    methods: {
      reset() {
        this.errors.password = null
        this.isDisabled = true
        axios.post('auth/reset/password/admin', this.input)
          .then((response) => {
            this.$snotify.success(response.data.status, "SUCCESS");
            this.input.password = '',
              this.input.password_confirmation = ''
            setTimeout(() => {
              this.$router.replace('/login')
            }, 1000);
          })
          .catch((error) => {
            this.isDisabled = false
            // console.log(error.response.data);
            if (error.response.status == 422) {
              let errors = error.response.data.errors
            this.errors.password = errors.password ? errors.password[0] : 'no-error';
            this.$snotify.error(errors.password[0], "ERROR");

            }else{
              this.$snotify.error(error.response.data.status, "ERROR");
            }
            // console.log(errors.name);
          })
      },
      checkHasAuthorize() {
        let getToken = this.$route.query.token
        let getEmail = this.$route.query.email
        axios.get(`auth/reset/password?email=${getEmail}&token=${getToken}`)
          .then((response) => {
            this.input.token = getToken
            this.input.email = getEmail
            this.hasAuthorize = true
            this.loaded = true
            console.log(response.data)

          })
          .catch((error) => {
            console.log(error);
            this.loaded = true
          })
      }
    },
  }
</script>
<style>
</style>
