<template>
  <slide-y-up-transition>

    <div v-show="loaded">
      <b-row>
        <b-col lg="4" md="5">
          <b-card>
            <header slot="header"><strong>Add New Link Redirection</strong></header>
            <b-form-group label="Link Name">
              <b-form-input type="text" v-model="input.path" min="4" placeholder="Please input link name" />
            </b-form-group>
            <b-form-group label="Link Target">
              <b-form-input type="text" v-model="input.url" min="4" placeholder="Please input link target" />
            </b-form-group>
            <div class="mt-2">
              <b-button v-show="input" variant="success" size="sm" class="float-right" @click="onAddNewLink">Add Link</b-button>
            </div>
          </b-card>
        </b-col>
        <b-col lg="8" md="7">
          <b-card>
            <header slot="header">
              <strong>List of Available Link</strong>
            </header>
            <div style="overflow-y:auto">

              <b-table v-if="items.length !== 0" stacked="sm" small :fields="fieldsDocuments" :items="items" thead-class="thead-light">
                <template v-slot:cell(no)="data">
                  {{ data.index + 1 }}
                </template>
                <template v-slot:cell(created_by)="data">
                  <span v-b-tooltip.top.hover :title="data.item.admin.name">
                    {{ data.item.admin.initial }}
                  </span>
                </template>

                <template v-slot:cell(action)="data">
                  <b-btn v-b-tooltip.top.hover title="Copy Link" variant="primary" size="sm" @click="handleCopyClipboard(data.item.path)">
                    <i class="fa fa-clipboard"></i>
                  </b-btn>
                  <b-button v-b-tooltip.top.hover title="Edit Link" v-if="data.item.admin.id == $store.state.user.id" variant="success" size="sm" @click="
                      onEditRedirectionModal(
                        data.item.id,
                        data.item.path,
                        data.item.url
                      )
                    "><i class="fa fa-edit"></i></b-button>
                  <b-button v-b-tooltip.top.hover title="Delete Link" v-if="data.item.admin.id == $store.state.user.id" variant="danger" size="sm" @click="
          trigerConfirmModal(
          'Confirm Delete Link Redirection',
          'Are You Sure To Delete This Link Redirection?',
          'deleteLinkRedirection',
          data.item.id
          )
                    "><i class="fa fa-trash"></i></b-button>

                </template>
              </b-table>
            </div>
          </b-card>
        </b-col>
      </b-row>
      <b-modal :no-close-on-esc="true" :hide-header-close="true" :no-close-on-backdrop="true" title="Edit Link Redirection" v-model="editModal" @ok="
          trigerConfirmModal(
            'Confirm Edit Link Redirection',
            'Are You Sure To Edit This Link Redirection?',
            'editLinkRedirection'
          )
        ">
        <b-form-group label="Link Name">
          <b-form-input type="text" v-model="selected.path" min="4" placeholder="Please input link name" />
        </b-form-group>
        <b-form-group label="Link Target">
          <b-form-input type="text" v-model="selected.url" min="4" placeholder="Please input link target" />
        </b-form-group>
      </b-modal>
      <b-modal :no-close-on-esc="true" :hide-header-close="true" :no-close-on-backdrop="true" :title="confirmModalTitle" v-model="confirmModal" @ok="onConfirmModal">
        {{ confirmModalBody }}
      </b-modal>
    </div>
  </slide-y-up-transition>
</template>
<script>
  import {
    FieldTableData
  } from "./AppLinkRedirectionFieldTableData"
  import {
    copyClipboard
  } from '../_share/mixins/copyClipboard'
  export default {
    name: 'AppLinkRedirection',
    mixins: [FieldTableData, copyClipboard],
    data: function() {
      return {
        confirmModal: false,
        editModal: false,
        loaded: false,
        confirmModal: false,
        confirmModalTitle: '',
        confirmModalBody: '',
        confirmModalState: '',
        confirmModalTempValue: '',
        items: [],
        input: {
          path: '',
          url: ''
        },
        selected: {
          path: '',
          url: ''
        },
        buttonCopyText: '<i class="fa fa-clipboard"></i>',
      }
    },
    created() {
      this.$store.dispatch('storeBreadcrumbData', {
        linkBackButton: '',
        currentPageName: 'Link Redirection'
      });
      this.getData();
    },

    methods: {
      onConfirmModal() {
        if (this.confirmModalState == 'deleteLinkRedirection') {
          this.onDeleteLinkRedirection();
        }
        if (this.confirmModalState == 'editLinkRedirection') {
          this.onUpdateLinkRedirection();
        }
      },
      onEditRedirectionModal(id, path, url) {
        this.selected.id = id;
        this.selected.path = path;
        this.selected.url = url;
        this.editModal = true;
      },
      trigerConfirmModal(title, body, state, value = '') {
        this.confirmModalTitle = title;
        this.confirmModalBody = body;
        this.confirmModal = true;
        this.confirmModalState = state;
        this.confirmModalTempValue = value;
      },
      onAddNewLink() {
        axios
          .post('api/admin/setting/redirection', this.input)
          .then(response => {
            this.getData();
            this.input.path = null;
            this.input.url = null;
            this.$snotify.success(response.data.message, response.data.status);
          })
          .catch(error => {
            console.log(error);
            this.$snotify.error(
              "Ooops, There's Something Error, Try Again Later",
              'ERROR'
            );
          });
      },
      onUpdateLinkRedirection() {
        axios
          .patch(`api/admin/setting/redirection/${this.selected.id}`, this.selected)
          .then(response => {
            this.getData();
            // this.input = null;
            this.$snotify.success(response.data.message, response.data.status);
          })
          .catch(error => {
            console.log(error);
            this.$snotify.error(
              "Ooops, There's Something Error, Try Again Later",
              'ERROR'
            );
          });
      },
      onDeleteLinkRedirection() {
        axios
          .delete(`api/admin/setting/redirection/${this.confirmModalTempValue}`)
          .then(response => {
            this.confirmModalTempValue = null;
            this.getData();
            this.$snotify.success(response.data.message, response.data.status);
          })
          .catch(error => {
            this.confirmModalTempValue = null;
            console.log(error);
            this.$snotify.error(
              "Ooops, There's Something Error, Try Again Later",
              'ERROR'
            );
          });
      },
      getData() {
        axios
          .get('api/admin/setting/redirection')
          .then((response) => {
            console.log(response.data)
            this.items = response.data;
            this.loaded = true;

          })
          .catch((error) => {
            console.log(error);
          })
      },
      handleCopyClipboard(pathname) {
        let host = window.location.host
        this.copyTextToClipboard(`https://${host}/${pathname}`)
        this.$snotify.info('Link Successfully Copied', 'INFO');

      },
    },
  }
</script>
<style>
</style>
