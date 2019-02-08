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
    <b-dropdown-item><i class="fa fa-lock"></i> Logout</b-dropdown-item>
  </b-nav-item-dropdown>
</template>
<script>
  export default {
    name: 'header-dropdown',
    data: () => {
      return {}
    },
    methods: {
      handleClickUserProfile() {
        this.$router.replace({
          name: 'MyTask',
          params: {
            projectId: this.$route.params.projectId
          }
        })
      },
      handleClickSettings() {
        this.$router.push({
          name: 'Settings',
          params: {
            projectId: this.$route.params.projectId,
          }
        })
      },
      handleClickPermission() {
        this.$router.push({
          name: 'PermissionProject',
          params: {
            projectId: this.$route.params.projectId,
          }
        })
      }
    }
  }
</script>
