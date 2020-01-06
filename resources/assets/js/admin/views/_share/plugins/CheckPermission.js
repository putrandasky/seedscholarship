const CheckPermission = {
  install(Vue) {
    Vue.mixin({
      methods: {
        permission(permissionId) {
          return this.$store.getters.user.permissions.find(
            item => item == permissionId
          )
            ? true
            : false;
        }
      }
    });
  }
};

export default CheckPermission;
