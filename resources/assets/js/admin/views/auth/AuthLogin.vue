<template>
  <div class="app bg-image-full flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class=" d-md-down-none flex-row align-items-center" style="width:44%">
              <b-card-body class="text-center ">
                <b-img class="justify-content-center" src="/images/Seedlogo.png" fluid alt="Responsive image" />
              </b-card-body>
            </b-card>
            <b-card no-body class="p-4">
              <form class="card-body" @submit.prevent="login">
                <h1>Login Area</h1>
                <p class="text-muted">Sign In to your account</p>
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text>
                      <i class="icon-envelope"></i>
                    </b-input-group-text>
                  </b-input-group-prepend>
                  <b-input autofocus autocomplete type="email" v-model="input.email" placeholder="Email" />
                </b-input-group>
                <b-input-group class="mb-4">
                  <b-input-group-prepend>
                    <b-input-group-text>
                      <i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-input autocomplete type="password" v-model="input.password" placeholder="Password" />
                </b-input-group>
                <b-row>
                  <b-col cols="6">
                    <b-button type="submit" variant="primary" class="px-4">Login</b-button>
                  </b-col>
                  <b-col cols="6" class="text-right">
                    <b-button variant="link" class="px-0" @click="handleForgotPassword()">Forgot password?</b-button>
                  </b-col>
                </b-row>
              </form>
            </b-card>

          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login'
  }
</script>

<script>
  export default {
    name: 'AuthLogin',
    data: function() {
      return {
        input: {
          email: '',
          password: ''
        }
      }
    },

    mounted() {

    },
    methods: {
      handleForgotPassword() {
        this.$router.push('/forgot-password')
      },
      login: function() {
        // this.$store.commit('PENDING', true)
        let self = this;
        let params = Object.assign({}, self.input);
        this.$store.dispatch('stateLoadingFull', true)
        axios.post('/api/auth/login', params)
          .then((response) => {
            // this.$store.dispatch('stateLoadingFull', false)

            this.$store.dispatch("login", response.data)
            this.$store.dispatch("checkToken")
            //     this.$bvToast.toast('Toast body content', {
            //   title: `You're Logged In`,
            //   autoHideDelay: 10000,
            //   variant: 'success',
            //   toaster:'b-toaster-top-center',
            //   solid: true
            // })
            this.$snotify.info(`You're Logged In`, "WELCOME");
            setTimeout(() => {
              this.$router.push('/dashboard')
              // this.$store.dispatch('checkToken');
              // console.log('login success');
              // this.$store.commit('PENDING', false)
            }, 1000)
          })
          .catch((error) => {
            // console.log(error);
            this.$store.dispatch('stateLoadingFull', false)
            if (error.response.status == 401) {
              this.$snotify.error("Your Email or Password is Invalid", "ERROR");
              return
            }
            this.$snotify.error("Ooops, There's Something Error, Try Again Later", "ERROR");
          })
      }
    },
  }
</script>
<style scoped>
  .bg-image-full {
    /* Full height */
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/images/bg-admin-login.jpeg);
    height: 100%;
    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
