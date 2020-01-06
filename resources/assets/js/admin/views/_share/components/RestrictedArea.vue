<template>
  <b-alert show variant="danger">
    <h4 class="alert-heading">Restricted Area</h4>
    <p>
      You area not allowed to access this page. Only user with permission can
      access this page
    </p>
    <hr />
    <p class="mb-0">
      If you feel this is something wrong, please contact administrator.
    </p>
  </b-alert>
</template>
<script>
export default {
  name: 'RestrictedArea',
  data: function() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style></style>
