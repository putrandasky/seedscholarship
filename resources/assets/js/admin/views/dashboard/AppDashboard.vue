<template>
<b-alert show variant="info">
This Page to be developed later
</b-alert>
</template>
<script>
    export default {
        name: 'Dashboard',
        data: function () {
            return {
            }
        },
        created(){
                this.$store.dispatch("storeBreadcrumbData", {
      linkBackButton: "",
      currentPageName: `Dashboard`
    });
        },
        methods:{
        },
    }
</script>
<style>
</style>
