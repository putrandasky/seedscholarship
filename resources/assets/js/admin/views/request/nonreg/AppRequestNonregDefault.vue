<template>
<div class="mt-3">
  <b-alert show variant="info">Please select available Scholarship above</b-alert>
</div>
</template>
<script>
    export default {
        name: 'AppRequestNonregDefault',
        data: function () {
            return {
            }
        },
        created(){
    this.$store.dispatch("storeBreadcrumbData", {
      linkBackButton: "",
      currentPageName: `Awardee Nonreg`
    });
        },
        methods:{
        },
    }
</script>
<style>
</style>
