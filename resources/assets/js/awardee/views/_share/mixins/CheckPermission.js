export const checkPermission = {
  data() {
    return {
    }
  },
  computed: {
    permission() {
      return permissionId => 
      this.$store.getters.user.permissions.find(item => item.pivot.permission_id == permissionId && item.pivot.project_id == this.$route.params.projectId)?true:
      this.$store.getters.user.superAdmin?true:false
    },
  }
}