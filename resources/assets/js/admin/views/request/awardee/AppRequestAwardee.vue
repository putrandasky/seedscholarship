<template>
  <b-card>
    <div slot="header" class="text-center">
      <strong>Awardee Request</strong>
    </div>
    <div>
      <slide-y-up-transition>
        <b-button-group v-show="loaded">
          <router-link v-for="(v) in periods" :key="v.id" tag="button" class="btn btn-outline-primary btn-sm" :to="{name:'RequestAwardeeIndex', params:{periodYear: v.year}}">
            Seedscholarship #{{v.period}} - year {{v.year}}
          </router-link>
        </b-button-group>
      </slide-y-up-transition>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </b-card>
</template>
<script>
  export default {
    name: 'AppRequestAwardee',
    data: function () {
      return {
        periods: [],
        loaded: false,
      }
    },
    created() {
      this.getPeriods()

    },
    methods: {
      getPeriods() {
        axios.get(`api/period`)
          .then((response) => {
            console.log(response.data)
            this.periods = response.data
            this.loaded = true

          })
          .catch((error) => {
            console.log(error);
          })
      }
    },
  }

</script>
<style>
</style>
