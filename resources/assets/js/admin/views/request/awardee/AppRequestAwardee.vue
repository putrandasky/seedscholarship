<template>
<b-card>
  <div slot="header" class="text-center">
    <strong>Awardee Request</strong>
  </div>
  <div>

    <router-link v-for="(v) in periods" :key="v.id" tag="button" class="btn btn-primary" :to="{name:'RequestAwardeeIndex', params:{periodYear: v.year}}">
              Seedscholarship #{{v.period}} - year {{v.year}}
            </router-link>
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
              periods:[]
            }
        },
        created(){
          this.getPeriods()

        },
        methods:{
          getPeriods(){
            axios.get(`api/period`)
            .then((response) => {
            console.log(response.data)
            this.periods = response.data

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
