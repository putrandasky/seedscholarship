<template>
<div class="mt-3">
  <b-alert show variant="info">Please select Seedscholarship period above</b-alert>
</div>
</template>
<script>
    export default {
        name: 'AppRequestAwardeeDefault',
        data: function () {
            return {

            }
        },
        created(){
    this.$store.dispatch("storeBreadcrumbData", {
      linkBackButton: "",
      currentPageName: "Awardee Request Period"
    });            
        },
        methods:{
        },
    }
</script>
<style>
</style>
