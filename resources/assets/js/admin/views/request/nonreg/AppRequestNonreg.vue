<template>
  <slide-y-up-transition>
    <b-card v-show="loaded">
      <!-- <div slot="header" class="text-center">
        <strong>Awardee Non Reguler Request</strong>
      </div> -->
      <div>
        <b-button-group>
          <router-link v-for="(v) in scholarships" :key="v.id" tag="button" class="btn btn-outline-primary btn-sm" :to="{name:'RequestNonregIndex', params:{scholarshipId: v.id}}">
            {{v.name}} - Year {{v.year}}
          </router-link>
        </b-button-group>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </b-card>
  </slide-y-up-transition>
</template>
<script>
  export default {
    name: 'AppRequestNonreg',
    data: function () {
      return {
        scholarships: [],
        loaded: false,
      }
    },
    created() {
      this.getPeriods()

    },
    methods: {
      getPeriods() {
        axios.get(`api/scholarship`)
          .then((response) => {
            // console.log(response.data)
            this.scholarships = response.data
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
