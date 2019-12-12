<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col lg="6" sm="10">
          <b-card class="mx-4">
            <form
              class="card-body p-4"
              @submit.prevent="sendForgotPasswordEmail()"
            >
              <h1>FORGOT PASSWORD</h1>
              <p class="text-muted">Send link to reset password</p>
              <b-form-group
                :invalid-feedback="errors.email"
                :state="stateEmail"
              >
                <b-input-group class="">
                  <b-input-group-prepend>
                    <b-input-group-text
                      ><i class="icon-envelope"></i
                    ></b-input-group-text>
                  </b-input-group-prepend>
                  <b-input
                    :disabled="isInputDisabled"
                    type="email"
                    class="form-control"
                    placeholder="Your Email"
                    v-model="input.email"
                    :state="stateEmail"
                  />
                </b-input-group>
              </b-form-group>
              <b-button
                :disabled="isDisabled || input.email == ''"
                type="submit"
                variant="success"
                block
              >
                Send Link
              </b-button>
              <b-button variant="link" class="px-0" @click="handleToLoginPage()"
                >Go to Login Page
              </b-button>
            </form>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "AuthForgotPassword",
  data: function() {
    return {
      isDisabled: false,
      loaded: false,
      input: {
        email: ""
      },
      isInputDisabled: false,
      errors: {
        email: ""
      }
    };
  },
  created() {},
  computed: {
    stateEmail() {
      return this.errors.email == "no-error"
        ? true
        : this.errors.email
        ? false
        : null;
    }
  },
  methods: {
    handleToLoginPage() {
      this.$router.push("/login");
    },
    sendForgotPasswordEmail() {
      this.isDisabled = true;
      this.isInputDisabled = true;
      let self = this;
      this.$snotify.async(
        "Creating Link for Reseting Password",
        "Please Wait",
        () => {
          return new Promise((resolve, reject) => {
            return axios
              .post(`auth/forgot/password/admin`, {
                email: this.input.email
              })
              .then(function(response) {
                console.log(response.data.status);
                self.isDisabled = false;
                self.isInputDisabled = false;

                self.input.email = "";
                resolve({
                  title: "Success!!!",
                  body: response.data.status,
                  config: {
                    closeOnClick: true,
                    timeout: 2000
                  }
                });
              })
              .catch(function(error) {
                self.isDisabled = false;
                self.isInputDisabled = false;

                reject({
                  title: "Error!!!",
                  body: error.response.data.status,
                  config: {
                    closeOnClick: true,
                    timeout: 2000
                  }
                });
              });
          });
        }
      );
    }
  }
};
</script>
<style></style>
