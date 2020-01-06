<template>
  <slide-y-up-transition>
    <b-card v-show="loaded">
      <!-- <div slot="header" class="text-center">
        <strong>Awardee Request</strong>
      </div> -->
      <!-- <div>
        <b-button-group v-show="loaded">
          <router-link v-for="(v) in periods" :key="v.id" tag="button" class="btn btn-outline-primary btn-sm" :to="{name:'RequestAwardeeIndex', params:{periodYear: v.year}}">
            Seedscholarship #{{v.period}} - Year {{v.year}}
          </router-link>
        </b-button-group>
      </div> -->
      <div>
        <router-view></router-view>
      </div>
    </b-card>
  </slide-y-up-transition>
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
      // this.getPeriods()

    },
    mounted(){
      setTimeout(() => {
        
        this.loaded = true
      }, 100);
    },
    methods: {
      getPeriods() {
        axios.get(`api/period`)
          .then((response) => {
            // console.log(response.data)
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
