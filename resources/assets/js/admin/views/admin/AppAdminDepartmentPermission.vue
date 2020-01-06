<template>
  <slide-y-up-transition>
    <restricted-area v-if="!permission(8)"/>
    <div v-show="loaded" v-if="permission(8)">
      <b-card>
        <header slot="header">
          <strong>List of Available Permission</strong>
        </header>
        <div style="overflow-y:auto">
          <b-table
            stacked="sm"
            small
            :fields="fieldsDocuments"
            :items="items"
            thead-class="thead-light"
          >
            <template v-slot:cell(no)="data">
              {{ data.index + 1 }}
            </template>
            <template v-slot:cell(checked)="data">
              <c-switch
                size="sm"
                type="default"
                :pill="true"
                variant="success"
                v-model="data.item.checked"
                :value="true"
                :unchecked-value="false"
                @change="onChange(data.index, data.item.checked)"
              />
            </template>
          </b-table>
          <b-btn variant="primary" size="sm" class="float-right" @click="trigerConfirmModal(
            'Confirm Update Permission',
            'Are You Sure To Update Permission to This Role?',
            'updatePermission'
          )">
            Update
          </b-btn>
        </div>
      </b-card>
      <b-modal
        :no-close-on-esc="true"
        :hide-header-close="true"
        :no-close-on-backdrop="true"
        :title="confirmModalTitle"
        v-model="confirmModal"
        @ok="onConfirmModal"
      >
        {{ confirmModalBody }}
      </b-modal>
    </div>
  </slide-y-up-transition>
</template>
<script>
import cSwitch from '../../components/Switch';

import { log } from 'util';
export default {
  name: 'AppAdminDepartmentPermission',
  components: {
    cSwitch
  },
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
      roleName: '',
      input: '',
      selected: {
        role: '',
        id: null
      },
      fieldsDocuments: [
        {
          key: 'no',
          label: 'No',
          class: 'text-center',
          thStyle: {
            minWidth: '30px',
            width: '30px'
          }
        },

        {
          key: 'name',
          label: 'Permission',
          class: 'truncate-cell',
          thStyle: {
            minWidth: '250px'
          }
        },
        // {
        //   key: 'admins_count',
        //   label: 'Users',
        //   'class': 'text-right',
        //   thStyle: {
        //     minWidth: '75px',
        //     width: '75px'
        //   },
        // },
        {
          key: 'checked',
          label: '',
          class: 'text-center',
          thStyle: {
            minWidth: '150px',
            width: '150px'
          }
        }
      ]
    };
  },
  created() {
    this.getPermissionIndex();
  },
  methods: {
    onConfirmModal() {

      if (this.confirmModalState == 'updatePermission') {
        this.onUpdatePermission();
      }
    },
    handlePermissionButton(id, role) {
      this.selected.id = id;
      this.selected.role = role;
      this.editModal = true;
    },
    onEditRoleModal(id, role) {
      this.selected.id = id;
      this.selected.role = role;
      this.editModal = true;
    },
    trigerConfirmModal(title, body, state, value = '') {
      this.confirmModalTitle = title;
      this.confirmModalBody = body;
      this.confirmModal = true;
      this.confirmModalState = state;
      this.confirmModalTempValue = value;
    },
    onChange(index,val){
      this.items[index].checked = val
      // console.log(this.items);
      
    },   

    onAddRole() {
      axios
        .post('api/admin/auth/role', {
          name: this.input,
          department_id: this.$route.params.departmentId
        })
        .then(response => {
          this.getData();
          this.input = null;
          this.$snotify.success(response.data.status, 'SUCCESS');
        })
        .catch(error => {
          console.log(error);
          this.$snotify.error(
            "Ooops, There's Something Error, Try Again Later",
            'ERROR'
          );
        });
    },
    onUpdatePermission() {
      let checkedPermission = this.items.filter(data => data.checked == true).map(data => data.id)

      
      
      axios
        .patch(`api/admin/auth/permissions/${this.$route.params.roleId}`, {
          checked_permissions: checkedPermission
        })
        .then(response => {
          this.getData();
          // this.input = null;
          this.$snotify.success(response.data.status, 'SUCCESS');
        })
        .catch(error => {
          console.log(error);
          this.$snotify.error(
            "Ooops, There's Something Error, Try Again Later",
            'ERROR'
          );
        });
    },
    onDeleteRole() {
      axios
        .delete(`api/admin/auth/role/${this.confirmModalTempValue}`)
        .then(response => {
          this.confirmModalTempValue = null;
          this.getData();
          this.$snotify.success(response.data.status, 'SUCCESS');
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
      let self = this;
      axios
        .get(`api/admin/auth/permissions/${this.$route.params.roleId}`)
        .then(response => {
          console.log(this.items);
          self.roleName = response.data.name;
          const editData = data => {
            return data.map(item => {
              item['checked'] = response.data.permissions
                .map(function(data) {
                  return data.id;
                })
                .includes(item.id);
              // }
            });
          };
          editData(self.items);
          this.$store.dispatch('storeBreadcrumbData', {
            linkBackButton: `/user/department/${this.$route.params.departmentId}/role`,
            currentPageName: `Permission Register for ${self.roleName}`
          });
          this.loaded = true;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getPermissionIndex() {
      let self = this;
      axios
        .get(`api/admin/auth/permissions`)
        .then(response => {
          self.items = response.data;
          self.getData();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style></style>
