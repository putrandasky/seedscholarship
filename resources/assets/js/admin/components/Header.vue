<template>
  <header class="app-header navbar">
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">
      <span class="navbar-toggler-icon"></span>
    </button>
    <b-link class="navbar-brand" @click="handleClickBrand"><img src="/images/Seedlogo.png" alt="" style="max-height:35px"></b-link>
    <button class="navbar-toggler sidebar-toggler d-md-down-none mr-auto" type="button" @click="sidebarToggle">
      <span class="navbar-toggler-icon"></span>
    </button>
    <strong class="d-md-down-none float-left">
      <!-- {{project.project_name}} -->
    </strong>
    <!-- <button class="navbar-toggler aside-menu-toggler d-md-down-none" type="button" @click="asideToggle">
      <span class="navbar-toggler-icon"></span>
    </button> -->
    <b-navbar-nav class="ml-auto">
      <!-- <b-navbar-nav class="ml-auto d-md-down-none"> -->
      <!-- <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Global Search" />
      </b-nav-form>
      <b-nav-item>
        <i class="fa fa-bell-o"></i>
        <b-badge pill variant="danger">5</b-badge>
      </b-nav-item> -->
      <!-- <b-nav-item  v-if="permission(1) || permission(5)" v-b-tooltip.hover.bottom title="Settings">
        <i class="fa fa-cog" @click="handleClickSettings"></i>
      </b-nav-item> -->
    <strong class="d-md-down-none pr-3">
      {{this.$store.getters.user.name}}
    </strong>
      <header-dropdown />
    </b-navbar-nav>
    <!-- <loading :active.sync="this.$store.state.loading" :can-cancel="false" :height=20 :opacity=0 loader='spinner'
      transition='none' :is-full-page="false" /> -->

  </header>
</template>
<script>
  import HeaderDropdown from './HeaderDropdown'
  export default {
    name: 'c-header',
  components: {
    HeaderDropdown
  },
    // mixins: [checkPermission],
    data() {
      return {
        user:'',
      }
    },
    watch: {

    },
    computed: {

    },
    methods: {
      sidebarToggle(e) {
        e.preventDefault()
        document.body.classList.toggle('sidebar-hidden')
      },
      sidebarMinimize(e) {
        e.preventDefault()
        document.body.classList.toggle('sidebar-minimized')
      },
      mobileSidebarToggle(e) {
        e.preventDefault()
        document.body.classList.toggle('sidebar-mobile-show')
      },
      asideToggle(e) {
        e.preventDefault()
        document.body.classList.toggle('aside-menu-hidden')
      },
      handleClickBrand() {
        this.$router.push('/dashboard')
      },
      // handleClickSettings() {
      //   this.$router.push({
      //     name: 'Settings',
      //     params: {
      //       projectId: this.$route.params.projectId,
      //     }
      //   })
      // },
    }
  }
</script>
<style scoped>
  .vld-overlay {
    position: absolute;
    right: -18px !important;
    top: 2px;
    /* display: block; */
    bottom: unset;
    left: unset;
  }
</style>
