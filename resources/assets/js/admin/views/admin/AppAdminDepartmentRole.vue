<template>
  <slide-y-up-transition>
    <div v-show="loaded">
      <b-row>
        <b-col lg="4">
          <b-card>
            <header slot="header"><strong>Add New Role</strong></header>
            <b-form-input type="text" v-model="input" />
            <div class="mt-2">
              <b-button
                v-show="input"
                variant="success"
                size="sm"
                class="float-right"
                @click="onAddRole"
                >Add</b-button
              >
            </div>
          </b-card>
        </b-col>
        <b-col lg="8">
          <b-card>
            <header slot="header">
              <strong>List of Available Role for {{ items.department }}</strong>
            </header>
            <b-alert variant="warning" :show="items.roles.length == 0">
              <h1 class="lead text-center">
                THERE IS NO AVAILABLE ROLES.
              </h1>
            </b-alert>
            <div style="overflow-y:auto" v-if="items.roles.length !== 0">
              <table class="table table-sm table-bordered">
                <thead>
                  <tr class="table-secondary">
                    <th style="width:30px;min-width:30px">
                      <strong>No</strong>
                    </th>
                    <th style="min-width:175px">
                      <strong>Role Name</strong>
                    </th>
                    <th class="text-center" style="width:75px;min-width:75px">
                      <strong>Users</strong>
                    </th>
                    <th style="width:200px;min-width:200px"></th>
                    <th style="width:50px;min-width:50px"></th>
                  </tr>
                </thead>
              </table>
              <draggable
                v-model="items.roles"
                :options="dragOptions"
                :move="onMove"
                @update="isChanged = true"
                @start="isDragging = true"
                @end="isDragging = false"
              >
                <transition-group
                  type="transition"
                  :name="'flip-list'"
                  tag="div"
                >
                  <table
                    v-for="(v, i) in items.roles"
                    :key="v.id"
                    class="table table-bordered table-sm mb-1"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="text-center"
                          style="width:30px;min-width:30px"
                        >
                          {{ i + 1 }}
                        </td>
                        <td style="min-width:175px">
                          {{ v.name }}
                        </td>
                        <td
                          class="text-center"
                          style="width:75px;min-width:75px"
                        >
                          {{ v.admins_count }}
                        </td>
                        <td
                          class="text-center"
                          style="width:200px;min-width:200px"
                        >
                          <b-button-group>
                            <b-button
                              v-if="permission(6)"
                              variant="success"
                              size="sm"
                              @click="onEditRoleModal(v.id, v.name)"
                              >Edit</b-button
                            >
                            <b-button
                              v-if="permission(8)"
                              variant="warning"
                              size="sm"
                              @click="handlePermissionButton(v.id)"
                              >Permission</b-button
                            >
                            <b-button
                              v-if="permission(6)"
                              variant="danger"
                              size="sm"
                              @click="
                                trigerConfirmModal(
                                  'Confirm Remove Role',
                                  'Are You Sure To Remove This Role?',
                                  'deleteRole',
                                  v.id
                                )
                              "
                              >Remove</b-button
                            >
                          </b-button-group>
                        </td>
                        <td
                          style="width:50px;min-width:50px"
                          class="my-handle text-center"
                        >
                          <i class="fa fa-arrows-alt "></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </transition-group>
              </draggable>
              <div class="text-right">
                <b-button
                  variant="warning"
                  size="sm"
                  v-show="isChanged"
                  @click="orderList"
                  >Cancel</b-button
                >
                <b-button
                  variant="success"
                  size="sm"
                  v-show="isChanged"
                  @click="
                    trigerConfirmModal(
                      'Reorder Tags',
                      'Are You Sure to Reordering This Tags',
                      'reordering'
                    )
                  "
                  >ApplyThis Order</b-button
                >
              </div>

              <!-- <b-table
                v-if="items.length !== 0"
                stacked="sm"
                small
                :fields="fieldsDocuments"
                :items="items.roles"
                thead-class="thead-light"
              >
                <template v-slot:cell(no)="data">
                  {{ data.index + 1 }}
                </template>
                <template v-slot:cell(name)="data">
                  <div>
                    {{ data.item.name }}
                  </div>
                  <div>Permissions :</div>
                  <ul>
                    <li v-for="(v, i) in data.item.permissions" :key="i">
                      {{ v.name }}
                    </li>
                  </ul>
                </template>
                <template v-slot:cell(action)="data">
                  <b-button
                    v-if="permission(6)"
                    variant="success"
                    size="sm"
                    @click="onEditRoleModal(data.item.id, data.item.name)"
                    >Edit</b-button
                  >
                  <b-button
                    v-if="permission(8)"
                    variant="warning"
                    size="sm"
                    @click="handlePermissionButton(data.item.id)"
                    >Permission</b-button
                  >
                  <b-button
                    v-if="permission(6)"
                    variant="danger"
                    size="sm"
                    @click="
                      trigerConfirmModal(
                        'Confirm Remove Role',
                        'Are You Sure To Remove This Role?',
                        'deleteRole',
                        data.item.id
                      )
                    "
                    >Remove</b-button
                  >
                </template>
              </b-table> -->
            </div>
          </b-card>
        </b-col>
      </b-row>
      <b-modal
        :no-close-on-esc="true"
        :hide-header-close="true"
        :no-close-on-backdrop="true"
        title="Edit Role"
        v-model="editModal"
        @ok="
          trigerConfirmModal(
            'Confirm Edit Role',
            'Are You Sure To Edit This Role From This User?',
            'editRole'
          )
        "
      >
        <b-form-input type="text" v-model="selected.role" />
      </b-modal>
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
import draggable from 'vuedraggable';
import { Dragging } from '../_share/mixins/dragging';

export default {
  name: 'AppAdminDepartmentRole',
  mixins: [Dragging],
  components: {
    draggable
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
          label: 'Role Name',
          class: 'truncate-cell',
          thStyle: {
            minWidth: '175px'
          }
        },
        {
          key: 'admins_count',
          label: 'Users',
          class: 'text-center',
          thStyle: {
            minWidth: '75px',
            width: '75px'
          }
        },
        {
          key: 'action',
          label: '',
          class: 'text-center',
          thStyle: {
            minWidth: '250px',
            width: '250px'
          }
        }
      ]
    };
  },
  created() {
    this.getData();
    this.$store.dispatch('storeBreadcrumbData', {
      linkBackButton: '/user/department',
      currentPageName: 'Role Register'
    });
  },
  methods: {
    onConfirmModal() {
      if (this.confirmModalState == 'deleteRole') {
        this.onDeleteRole();
      }
      if (this.confirmModalState == 'editRole') {
        this.onUpdateRole();
      }
      if (this.confirmModalState == 'reordering') {
        this.reorderData();
      }
    },
    orderList() {
      this.isChanged = false;
      this.items.roles = this.items.roles.sort((one, two) => {
        return one.order - two.order;
      });
    },
    handlePermissionButton(id) {
      this.$router.push({
        name: 'DepartmentRolePermission',
        params: {
          departmentId: this.$route.params.departmentId,
          roleId: id
        }
      });
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
    reorderData() {
      this.$store.dispatch('stateLoading', true);
      axios
        .post(`api/admin/auth/reordering`, {
          data: this.items.roles
        })
        .then(response => {
          console.log(response.data);
          this.$snotify.success(response.data.message, 'SUCCESS');
          this.$store.dispatch('stateLoading', false);
          this.isChanged = false;
        })
        .catch(error => {
          this.$snotify.error(error.response.statusText, 'ERROR');
          this.$store.dispatch('stateLoading', false);
        });
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
    onUpdateRole() {
      axios
        .patch(`api/admin/auth/role/${this.selected.id}`, {
          name: this.selected.role
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
    onClickBack() {
      this.$router.push('/project');
    },
    getData() {
      axios
        .get(
          `api/admin/auth/department/${this.$route.params.departmentId}/role`
        )
        .then(response => {
          // console.log(response.data)
          this.items = response.data;
          this.loaded = true;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.my-handle {
  cursor: move;
}
</style>
