<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6" sm="8">
          <b-card class="mx-4">
            <form class="card-body p-4" @submit.prevent="sendForgotPasswordEmail()">
              <h1>FORGOT PASSWORD</h1>
              <p class="text-muted">Send link to reset password</p>
              <b-form-group :invalid-feedback="errors.email" :state="stateEmail">
                <b-input-group class="">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-envelope"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-input type="email" class="form-control" placeholder="Your Email" v-model="input.email" :state="stateEmail" />
                </b-input-group>
              </b-form-group>
              <b-button :disabled="isDisabled" type="submit" variant="success" block>Send Link</b-button>
            </form>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'AuthForgotPassword',
    data: function () {
      return {
        isDisabled: false,
        loaded: false,
        input: {
          email: '',
        },
        errors: {
          email: '',
        },
      }
    },
    created() {},
    computed: {
      stateEmail() {
        return this.errors.email == 'no-error' ? true : this.errors.email ? false : null
      },
    },
    methods: {
      sendForgotPasswordEmail() {
        this.isDisabled = true
        let self = this
        this.$snotify.async('Creating Link for Reseting Password', 'Please Wait', () => {
          return new Promise((resolve, reject) => {
            return axios.post(`api/forgot/password`, {
                email: this.input.email
              })
              .then(function (response) {
                console.log(response.data.status);
                self.isDisabled = false
                  self.input.email = ''
                resolve({
                  title: 'Success!!!',
                  body: response.data.status,
                  config: {
                    closeOnClick: true,
                  }
                })
              })
              .catch(function (error) {
                self.isDisabled = false
                reject({
                  title: 'Error!!!',
                  body: error.response.data.status,
                  config: {
                    closeOnClick: true,
                  }
                })
              });
          });
        });
      },
    },
  }
</script>
<style>
</style>