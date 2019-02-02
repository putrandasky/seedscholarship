<template>
  <router-view></router-view>
</template>
<script>
  export default {
    name: 'App',
    data: function () {
      return {}
    },
    beforeCreate: function () {
      document.body.className = 'app header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden';
      this.$store.dispatch("checkToken")
    },
    created() {

    },
    methods: {},
  }
</script>
<style lang="scss">
  /* Import Font Awesome Icons Set */
  $fa-font-path: '~font-awesome/fonts/';
  @import '~font-awesome/scss/font-awesome.scss';
  /* Import Simple Line Icons Set */
  $simple-line-font-path: '~simple-line-icons/fonts/';
  @import '~simple-line-icons/scss/simple-line-icons.scss';
  @import "~vue-snotify/styles/material";
  // @import "~@voerro/vue-tagsinput/dist/style.css";
</style>
<style >
  /* @import "~vue-wysiwyg/dist/vueWysiwyg.css"; */
  /* @import '~bootstrap-vue/dist/bootstrap-vue.css'; */
  /* @import '/css/vendor/vue2mediumeditor/medium-editor.min.css';
@import '/css/vendor/vue2mediumeditor/themes/beagle.min.css'; */
  /* .fade-leave-active {
    transition: opacity ease-in;
  }
  .fade-enter-active,
    {
    transition: opacity ease-out;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  } */
</style>

<style lang="scss">
  // Import Main styles for this application
  @import '../../../sass/style';
// @import "~bootswatch/dist/Darkly/variables";
// @import "~bootstrap/scss/bootstrap";
// @import "~bootswatch/dist/Darkly/bootswatch";
</style>
