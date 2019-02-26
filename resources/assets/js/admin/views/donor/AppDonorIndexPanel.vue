<template>
  <b-card :no-body="true">

        <!-- <loading  v-if="typeof $route.query.filterTarget === 'undefined'"  :active.sync="this.$store.state.loading" :can-cancel="false"
        :opacity=0.9
        :height=30
        loader='bars'
        transition='none'
        :is-full-page="false"/> -->
    <b-card-body class="p-0 clearfix">
      <i class="fa px-4 py-3 font-2xl mr-3 float-left" :class="iconPanel"></i>
      <div v-if="title == 'total donor'" class="h5 mb-0 pt-2" :class="textPanel">{{data}}</div>
      <div  v-if="title !== 'total donor'"  class="h5 mb-0 pt-2" :class="textPanel">Rp. {{data | currency}}</div>
      <!-- <i class="fa p-4 font-2xl mr-3 float-left" :class="iconPanel"></i>
      <div class="h5 mb-0 pt-3" :class="textPanel">{{data}}</div> -->
      <div class="text-muted text-uppercase font-weight-bold font-xs">{{title}}</div>
    </b-card-body>
  </b-card>
</template>
<script>
  export default {
    props:[
      'title' ,'data'
    ],
    name: 'AppDonorIndexPanel',
    data: function () {
      return {
      }
    },
    created(){
    },
    computed:{
      iconPanel() {
        return this.title === 'total donor' ? 'fa-users bg-primary':
          this.title === 'target donation' ? 'fa-crosshairs bg-warning' :
          this.title === 'actual to date' ? 'fa-check bg-success' :
          this.title === 'remaining' ? 'fa-info-circle bg-danger' : ''
      },
      textPanel() {
        return this.title === 'total donor' ? 'text-primary':
          this.title === 'target donation' ? 'text-warning' :
          this.title === 'actual to date' ? 'text-success' :
          this.title === 'remaining' ? 'text-danger' : ''
      },
      },
    methods:{
    },
  }
</script>
<style>
</style>
