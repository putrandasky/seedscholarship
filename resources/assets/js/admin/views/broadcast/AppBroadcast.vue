<template>
  <div>
    <b-button-group class="mb-3">
      <router-link
        v-for="(v,i) in menus"
        :key="i"
        tag="button"
        class="btn btn-outline-primary btn-sm"
        :to="{ name: v.linkName}"
      >
        {{v.name}}
      </router-link>
    </b-button-group>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'BroadcastIndex',
  data: function() {
    return {
      loaded: true,
      menus: [
        {
          linkName: 'BroadcastMail',
          name:'Mail'
        },
        {
          linkName: 'BroadcastReInviteDonor',
          name:'Undang Ulang Donatur'
        }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>
<style></style>
