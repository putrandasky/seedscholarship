<template>
    <div class="app" >
        <vue-snotify></vue-snotify>
      <!-- <transition :duration="300" name="fade"> -->
        <router-view></router-view>
      <!-- </transition> -->
    </div>
</template>
<script>
  export default {
    name: 'Plain',
    data: function () {
      return {
      }
    },
    created(){
    },
    methods:{
    },
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
