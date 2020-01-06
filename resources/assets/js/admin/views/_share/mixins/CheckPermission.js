export const checkPermission = {
  data() {
    return {};
  },
  methods: {
    permission(permissionId) {
      return this.$store.getters.user.permissions.find(
        item => item == permissionId
      )
        ? true
        : false;
    }
  }
};
