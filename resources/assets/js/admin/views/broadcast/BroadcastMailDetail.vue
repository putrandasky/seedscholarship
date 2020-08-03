<template>
  <slide-y-up-transition>
    <b-card v-show="loaded">
      <div>
        <strong>
          Dari :
        </strong>
        <b-badge>
          {{data.from}}
        </b-badge>
        <small class="float-right">
          Dibuat : {{data.created}}
        </small>
      </div>
      <div class="mb-3">
        <strong>
          Untuk :
        </strong>
        <b-badge>
          {{data.groups}} ({{data.periods}} - {{data.year}})
        </b-badge>
      </div>
      <div class="pt-3 border-top">
        <strong>
          {{data.title}}
        </strong>
      </div>
      <div class="body-mail py-3" v-html="data.content">
      </div>
      <b-card class="shadow-none" v-if="data.attachments.length != 0">
        <b-badge v-for="(v,i) in data.attachments" :key="i" class="p-2 mr-1 border" variant="light">
          <b-link @click="openFile(v.name)">

            {{v.name}} ({{v.size | formatSize}})
          </b-link>
        </b-badge>
      </b-card>
      <div class="border-top pt-3">
        <b-button size="sm" @click="handleCheckStatusButton">
          Check Status
        </b-button>
      </div>
    </b-card>
  </slide-y-up-transition>
</template>
<script>
  export default {
    name: 'BroadcastMailDetail',

    data: function() {
      return {
        loaded: false,
        broadcastTypeId: this.$route.params.broadcastTypeId,
        broadcastId: this.$route.params.broadcastId,
        data: {
          groups: null,
          title: '',
          content: '',
          periods: null,
          from: '',
          year: '',
          attachments: []


        },


        files: []
      }
    },
    created() {
      this.$store.dispatch('storeBreadcrumbData', {
        linkBackButton: `/broadcast/list/${this.broadcastTypeId}`,
        currentPageName: "Detail Broadcast"
      });
    },
    mounted() {
      this.getData()
    },
    computed: {
      stateGroups() {
        return null
      },
      statePeriods() {
        return null
      },
      stateTitle() {
        return null
      },
      stateBody() {
        return null
      }
    },
    methods: {
      handleCheckStatusButton() {
        this.$router.push({
          name: "BroadcastMailStatus",
          params: {
            broadcastId: this.broadcastId,
            broadcastTypeId: this.broadcastTypeId
          }
        });
      },
      openFile(filename) {
        let self = this
        window.open(
          `/api/admin/broadcast/attachment/${this.broadcastId}?filename=${filename}`,
          `window,width=${screen.availWidth},height=${screen.availHeight},resizeable,left=200,top=100,directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0`
        );
      },
      getData() {

        axios.get(`api/admin/broadcast/index/${this.broadcastTypeId}/${this.broadcastId}`)
          .then((response) => {
            this.loaded = true

            this.data.groups = response.data.broadcast_type.name
            this.data.periods = this.broadcastTypeId == 3 ? response.data.scholarship.name : response.data.period.period
            this.data.year = this.broadcastTypeId == 3 ? response.data.scholarship.year : response.data.period.year
            this.data.from = response.data.sender.name
            this.data.title = response.data.title
            this.data.content = response.data.content
            this.data.created = response.data.created_at
            this.data.attachments = response.data.attachments
            console.log(response.data)
          })
          .catch((error) => {
            console.log(error);
          })
      },
      mutateKey(data) {
        let self = this
        let mutateData = data.map(function(item) {
          return {
            groups: item.broadcast_type.name,
            periods: self.broadcastTypeId == 3 ? item.scholarship.name : item.period.period,
            from: item.sender.name
          };
        });
        return mutateData;
      }
    },
  }
</script>
<style>
  .body-mail>p {
    margin-bottom: 0;
  }
</style>
