<template>
  <div class="app">
    <loading class="text-center" style="z-index:9999" :active.sync="this.$store.state.loadingFull" :can-cancel="false" :height="60" :opacity="0.9" loader='spinner' transition='fade' :is-full-page="true" background-color="rgba(0,0,0,.85)" color="rgba(255,255,255,.9)">
      <div class="text-center" slot="after" style="color:rgba(255,255,255,.9)">Please Wait...</div>
    </loading>
    <!-- <vue-snotify></vue-snotify> -->
    <!-- <transition :duration="300" name="fade"> -->
    <router-view></router-view>
    <!-- </transition> -->
  </div>
</template>
<script>
  import Loading from 'vue-loading-overlay';

  export default {
    name: 'Plain',
    components: {
      Loading
    },
    data: function() {
      return {}
    },
    mounted() {

    },
    methods: {},
  }
</script>
<style>
  table.table-hover>tbody>tr {
    cursor: pointer;
  }

  /* .fade-leave-active {
    transition: opacity  ease-in;
  }
  .fade-enter-active,
{
    transition: opacity  ease-out;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  } */
</style>
