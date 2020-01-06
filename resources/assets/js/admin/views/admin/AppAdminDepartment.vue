<template>
  <slide-y-up-transition>
    <div v-show="loaded">
      <b-row>
        <b-col lg="4">
          <b-card>
            <header slot="header"><strong>Add New Department</strong></header>
            <b-form-input type="text" v-model="input" />
            <div class="mt-2">
              <b-button
                v-show="input"
                variant="success"
                size="sm"
                class="float-right"
                @click="onAddDepartment"
                >Add</b-button
              >
            </div>
          </b-card>
        </b-col>
        <b-col lg="8">
          <b-card>
            <header slot="header">
              <strong>List of Available Department</strong>
            </header>
            <b-alert variant="warning" :show="items.length == 0">
              <h1 class="lead text-center">
                THERE IS NO AVAILABLE DEPARTMENT.
              </h1>
            </b-alert>
            <div style="overflow-y:auto" v-if="items.length !== 0">
              <table class="table table-sm table-bordered">
                <thead>
                  <tr class="table-secondary">
                    <th style="width:30px;min-width:30px">
                      <strong>No</strong>
                    </th>
                    <th style="min-width:175px">
                      <strong>Department</strong>
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
                v-model="items"
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
                    v-for="(v, i) in items"
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
                          {{ v.department }}
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
                              @click="onEditDepartmentModal(v.id, v.department)"
                              >Edit</b-button
                            >
                            <b-button
                              variant="info"
                              size="sm"
                              @click="handleRoleButton(v.id)"
                              >Role</b-button
                            >
                            <b-button
                              v-if="permission(6)"
                              variant="danger"
                              size="sm"
                              @click="
                                trigerConfirmModal(
                                  'Confirm Remove Department',
                                  'Are You Sure To Remove This Department From This User?',
                                  'deleteDepartment',
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
                :items="items"
                thead-class="thead-light"
              >
                <template v-slot:cell(no)="data">
                  {{ data.index + 1 }}
                </template>
                <template v-slot:cell(action)="data">
                  <b-button
                    v-if="permission(6)"
                    variant="success"
                    size="sm"
                    @click="
                      onEditDepartmentModal(data.item.id, data.item.department)
                    "
                    >Edit</b-button
                  >
                  <b-button
                    variant="info"
                    size="sm"
                    @click="handleRoleButton(data.item.id)"
                    >Role</b-button
                  >
                  <b-button
                    v-if="permission(6)"
                    variant="danger"
                    size="sm"
                    @click="
                      trigerConfirmModal(
                        'Confirm Remove Department',
                        'Are You Sure To Remove This Department From This User?',
                        'deleteDepartment',
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
        title="Edit Depatment"
        v-model="editModal"
        @ok="
          trigerConfirmModal(
            'Confirm Edit Department',
            'Are You Sure To Edit This Department From This User?',
            'editDepartment'
          )
        "
      >
        <b-form-input type="text" v-model="selected.department" />
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
  name: 'AppAdminDepartment',
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
        department: '',
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
          key: 'department',
          label: 'Department',
          class: 'truncate-cell',
          thStyle: {
            minWidth: '175px'
          }
        },
        {
          key: 'admins_count',
          label: 'Users',
          class: 'text-right',
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
            minWidth: '200px',
            width: '200px'
          }
        }
      ]
    };
  },
  created() {
    this.getData();
    this.$store.dispatch('storeBreadcrumbData', {
      linkBackButton: '',
      currentPageName: 'Department Register'
    });
  },

  methods: {
    handleRoleButton(departmentId) {
      this.$router.push({
        name: 'DepartmentRoleIndex',
        params: {
          departmentId: departmentId
        }
      });
    },
    onConfirmModal() {
      if (this.confirmModalState == 'deleteDepartment') {
        this.onDeleteDepartment();
      }
      if (this.confirmModalState == 'editDepartment') {
        this.onUpdateDepartment();
      }
      if (this.confirmModalState == 'reordering') {
        this.reorderData();
      }
    },
    onEditDepartmentModal(id, department) {
      this.selected.id = id;
      this.selected.department = department;
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
        .post(`api/department/reordering`, {
          data: this.items
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
    onAddDepartment() {
      axios
        .post('api/department', {
          department: this.input
        })
        .then(response => {
          this.getData();
          this.input = null;
          this.$snotify.success(response.data.message, 'SUCCESS');
        })
        .catch(error => {
          console.log(error);
          this.$snotify.error(
            "Ooops, There's Something Error, Try Again Later",
            'ERROR'
          );
        });
    },
    onUpdateDepartment() {
      axios
        .patch(`api/department/${this.selected.id}`, {
          department: this.selected.department
        })
        .then(response => {
          this.getData();
          this.input = null;
          this.$snotify.success(response.data.message, 'SUCCESS');
        })
        .catch(error => {
          console.log(error);
          this.$snotify.error(
            "Ooops, There's Something Error, Try Again Later",
            'ERROR'
          );
        });
    },
    onDeleteDepartment() {
      axios
        .delete(`api/department/${this.confirmModalTempValue}`)
        .then(response => {
          this.confirmModalTempValue = null;
          this.getData();
          this.$snotify.success(response.data.message, 'SUCCESS');
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
        .get('api/department')
        .then(response => {
          console.log(response.data);
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
