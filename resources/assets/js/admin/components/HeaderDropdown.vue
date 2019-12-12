<template>
  <b-nav-item-dropdown right no-caret>
    <template slot="button-content">
      <i class="fa fa-user-circle-o"></i>
    </template>
    <!-- <b-dropdown-item @click="handleClickUserProfile"><i class="fa fa-tasks"></i> My Tasks</b-dropdown-item>
    <b-dropdown-item @click="handleClickSettings">
      <i class="fa fa-cogs"></i> Settings
    </b-dropdown-item>
    <b-dropdown-item  @click="handleClickPermission">
      <i class="fa fa-key"></i> Permission
    </b-dropdown-item> -->
    <b-dropdown-item @click="handleLogout"><i class="fa fa-lock"></i> Logout</b-dropdown-item>
  </b-nav-item-dropdown>
</template>
<script>
  export default {
    name: 'header-dropdown',
    data: () => {
      return {}
    },
    methods: {
      handleLogout() {
      axios.post(`api/auth/logout`)
      .then((response) => {
            this.$snotify.info(`You're Logged Out`, "GOOD BYE");
              this.$store.dispatch('logout')
            setTimeout(() => {
              this.$router.push('/login')
            },200)
      })
      .catch((error) => {
      console.log(error);
      })
      },
    }
  }
</script>
