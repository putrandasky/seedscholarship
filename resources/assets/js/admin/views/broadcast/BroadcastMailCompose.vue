<template>
  <slide-y-up-transition>
    <restricted-area v-if="!permission(18)" />
    <b-card v-show="loaded" v-if="permission(18)">
      <b-form-group label="Groups (Required)" :invalid-feedback="errors.groups" :state="stateGroups">
        <b-form-select v-model="input.groups" :options="options.groups" @change="handleChangeGroupSelect">
          <template slot="first">
            <option :value="null" disabled>-- Please Select Group --</option>
          </template>
        </b-form-select>
      </b-form-group>
      <b-form-group label="Periods (Required)" :invalid-feedback="errors.periods" :state="statePeriods">
        <b-form-select :disabled="!input.groups" v-model="input.periods" :options="options.periods" @change="handleChangePeriodsSelect">
          <template slot="first">
            <option :value="null" disabled>-- Please Select Period --</option>
          </template>
        </b-form-select>
      </b-form-group>
      <b-form-group label="Title (Required)" label-for="title" :invalid-feedback="errors.title" :state="stateTitle">
        <b-form-input autocomplete="off" required :state="stateTitle" id="title" type="text" placeholder="Input title of your post" v-model="input.title"></b-form-input>
      </b-form-group>
      <b-form-group label="Description (Required but not mandatory)" label-for="body">
        <quill-editor v-model="input.body"> </quill-editor>
      </b-form-group>
      <b-btn size="sm" variant="primary" class="mb-2" @click="handleFileUploadButton()">Upload File</b-btn>
      <input class="d-none" type="file" multiple accept="application/pdf, image/jpeg, image/png, image/gif" ref="attachment" name="attachment" v-on:change="onFileChange" />
      <b-card class="shadow-none" v-show="files.length != 0">
        <b-badge v-for="(v,i) in files" :key="i" class="p-2 mr-1 border" variant="light">
          <i class="fa fa-times" style="cursor:pointer" @click="handleClickCloseBadge(i)"></i>
          {{v.name}} ({{v.size | formatSize}})
        </b-badge>
      </b-card>

      <div>
        <b-btn size="sm" variant="success" @click="sendNewModal = true">Send</b-btn>
      </div>
      <b-modal :no-close-on-esc="true" :hide-header-close="true" :no-close-on-backdrop="true" title="Kirim Broadcast" v-model="sendNewModal" @ok="
          triggerConfirmModal(
            'Konfirmasi Pengiriman Broadcast',
            'Apakah kamu yakin akan mengirimkan broadcast email?',
            'send-broadcast'
          )
        ">
        Kamu akan mengirimkan broadcast email untuk <b>{{ subscriber }}</b> orang pada group dan periode / scholarship yang kamu pilih.
      </b-modal>
      <b-modal :no-close-on-esc="true" :hide-header-close="true" :no-close-on-backdrop="true" :title="confirmModalTitle" v-model="confirmModal" @ok="onConfirmModal">
        {{ confirmModalBody }}
      </b-modal>
    </b-card>
  </slide-y-up-transition>
</template>
<script>
  import 'quill/dist/quill.core.css';
  import 'quill/dist/quill.snow.css';
  import {
    quillEditor
  } from 'vue-quill-editor';
  export default {
    name: 'BroadcastMailCompose',
    components: {
      quillEditor,

    },
    data: function() {
      return {
        loaded: false,
        input: {
          groups: null,
          title: '',
          body: '',
          periods: null,

        },

        errors: {
          groups: '',
          title: '',
          body: '',
          periods: '',
        },

        options: {
          periods: [{
            value: null,
            text: null,
          }],
          groups: [{
              value: 1,
              text: 'Awardee'
            },
            {
              value: 2,
              text: 'Donor'
            },
            {
              value: 3,
              text: 'Scholars / Nonreg Awardee'
            },
          ]
        },
        confirmModal: false,
        confirmModalTitle: '',
        confirmModalBody: '',
        confirmModalTempValue: '',
        confirmModalState: '',
        data: {},
        subscriber: null,
        groups: '',
        sendNewModal: false,
        files: [],
        maxFileSize: 2048,
      }
    },
    created() {
      this.$store.dispatch('storeBreadcrumbData', {
        linkBackButton: ``,
        currentPageName: `Compose Broadcast`
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
      pushRouterToDetail(broadcastId) {
        this.$router.push({
          name: "BroadcastMailDetail",
          params: {
            broadcastId: broadcastId,
            broadcastTypeId: this.input.groups
          }
        });
      },
      handleClickCloseBadge(i) {
        this.files.splice(i, 1)

      },
      handleChangePeriodsSelect(e) {
        // console.log(e);

        if (this.groups == 3) {
          this.subscriber = this.data.scholarship.find(data => data.id == e).awardee_nonreg_scholarship_count
          return
        }
        let getPeriod = this.data.periods.find(data => data.id == e)
        if (this.groups == 2) {
          this.subscriber = getPeriod.donor_periods_count
        }
        if (this.groups == 1) {
          this.subscriber = getPeriod.awardee_periods_count
        }

        // console.log(this.periods);
      },
      handleFileUploadButton() {
        this.$refs.attachment.click()
      },
      onFileChange(e) {
        const file = e.target.files[0];
        if (file.size > this.maxFileSize * 1024) {
          this.$snotify.error(`Maximum file size is ${this.$options.filters.formatSize(this.maxFileSize * 1024)}`, 'ERROR');

          e.preventDefault();
          return;
        }
        console.log(e.target.files.length);
        for (let i = 0; i < e.target.files.length; i++) {
          this.files.push(e.target.files[i])
        }
      },
      handleChangeGroupSelect(e) {
        console.log(e);
        this.groups = e
        this.input.periods = null
        //3 means scholars/nonreg awardee
        if (e == 3) {
          this.options.periods = this.mutateKey(this.data.scholarship)
          return
        }
        this.options.periods = this.mutateKey(this.data.periods)
      },
      triggerConfirmModal(title, body, state, value = '') {
        this.confirmModalTitle = title;
        this.confirmModalBody = body;
        this.confirmModal = true;
        this.confirmModalState = state;
        this.confirmModalTempValue = value;
      },
      onConfirmModal() {
        if (this.confirmModalState == 'send-broadcast') {
          this.postBroadcast();
        }
      },
      postBroadcast() {
        this.$store.dispatch('stateLoadingFull', true);
        let itemInput = JSON.stringify(this.input);
        let form = new FormData();
        form.append("itemInput", itemInput);
        for (let i = 0; i < this.files.length; i++) {
          form.append("itemFiles[]", this.files[i]);

        }

        axios.post(`api/admin/broadcast/compose`, form, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then((response) => {
            console.log(response.data)
            this.$snotify.success(response.data.message, 'SUCCESS');

            this.pushRouterToDetail(response.data.broadcast_id)
          })
          .catch((error) => {
            this.$store.dispatch('stateLoadingFull', false);
            this.$snotify.error(
              "Ooops, There's Something Error, Try Again Later",
              'ERROR'
            );
            console.log(error);
          })
      },
      getData() {

        axios.get(`api/admin/broadcast/compose`)
          .then((response) => {
            this.loaded = true
            console.log(response.data)
            this.data = response.data

          })
          .catch((error) => {
            console.log(error);
          })
      },
      mutateKey(data) {
        let mutateData = data.map(function(item) {
          return {
            value: item.id,
            text: item.name || item.year,
            state: false
          };
        });
        return mutateData;
      }
    },
  }
</script>
<style>

</style>
