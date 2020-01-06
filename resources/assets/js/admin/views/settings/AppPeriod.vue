<template>
  <slide-y-up-transition>
        <restricted-area  v-if="!permission(14)" />

    <div v-show="loaded"  v-if="permission(14)">
      <b-row>
        <b-col lg="4" md="5">
          <b-card>
            <header slot="header"><strong>Add New Period</strong></header>
            <b-form-group label="Period">
              <b-form-input
                type="number"
                v-model="input.period"
                placeholder="Please input in number"
              />
            </b-form-group>
            <b-form-group label="Year">
              <b-form-input
                type="number"
                v-model="input.year"
                min="4"
                max="4"
                placeholder="Please input year in 4 digits"
              />
            </b-form-group>
            <div class="mt-2">
              <b-button
                v-show="input"
                variant="success"
                size="sm"
                class="float-right"
                @click="onAddPeriod"
                >Add</b-button
              >
            </div>
          </b-card>
        </b-col>
        <b-col lg="8" md="7">
          <b-card>
            <header slot="header">
              <strong>List of Available Period</strong>
            </header>
            <div style="overflow-y:auto">
              <b-table
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
                <template v-slot:cell(is_active)="data">
                  <c-switch
                    size="sm"
                    type="default"
                    :pill="true"
                    variant="success"
                    v-model="data.item.is_active"
                    :value="1"
                    :unchecked-value="0"
                    @change="onActiveChange(data.item.id, data.item.is_active)"
                  />
                </template>
                <template v-slot:cell(action)="data">
                  <b-button
                    v-if="permission(6)"
                    variant="success"
                    size="sm"
                    @click="
                      onEditPeriodModal(
                        data.item.id,
                        data.item.period,
                        data.item.year
                      )
                    "
                    >Edit</b-button
                  >
                  <!-- <b-button
                    variant="info"
                    size="sm"
                    @click="handleRoleButton(data.item.id)"
                    >Role</b-button
                  > -->
                  <!-- <b-button
                    v-if="permission(6)"
                    variant="danger"
                    size="sm"
                    @click="
                      trigerConfirmModal(
                        'Confirm Remove Period',
                        'Are You Sure To Remove This Period?',
                        'deletePeriod',
                        data.item.id
                      )
                    "
                    >Remove</b-button> -->
                </template>
              </b-table>
            </div>
          </b-card>
        </b-col>
      </b-row>
      <b-modal
        :no-close-on-esc="true"
        :hide-header-close="true"
        :no-close-on-backdrop="true"
        title="Edit Period"
        v-model="editModal"
        @ok="
          trigerConfirmModal(
            'Confirm Edit Period',
            'Are You Sure To Edit This Period?',
            'editPeriod'
          )
        "
      >
            <b-form-group label="Period">
              <b-form-input
                type="number"
                v-model="selected.period"
                placeholder="Please input in number"
              />
            </b-form-group>
            <b-form-group label="Year">
              <b-form-input
                type="number"
                v-model="selected.year"
                min="4"
                max="4"
                placeholder="Please input year in 4 digits"
              />
            </b-form-group>
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
import cSwitch from '../../components/Switch';
export default {
  name: 'AppAdminDepartment',
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
      input: {
        period: null,
        year: null
      },
      selected: {
        period: null,
        year: null,
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
          key: 'period',
          label: 'Period',
          thStyle: {
            // minWidth: '100px'
          }
        },
        {
          key: 'year',
          label: 'Year',
          thStyle: {
            // minWidth: '100px',
          }
        },
        {
          key: 'is_active',
          label: 'Active',
          class: 'text-center',
          thStyle: {
            // minWidth: '150',
            // width: '150'
          }
        },
        {
          key: 'action',
          label: '',
          class: 'text-center',
          thStyle: {
            // minWidth: '150',
            // width: '150'
          }
        }
      ]
    };
  },
  created() {
    this.permission(14) ? this.getData() : '';
    this.$store.dispatch('storeBreadcrumbData', {
      linkBackButton: '',
      currentPageName: 'Period Register'
    });
  },
  methods: {
    onConfirmModal() {
      if (this.confirmModalState == 'deletePeriod') {
        this.onDeletePeriod();
      }
      if (this.confirmModalState == 'editPeriod') {
        this.onUpdatePeriod();
      }
    },
    onEditPeriodModal(id, period, year) {
      this.selected.id = id;
      this.selected.period = period;
      this.selected.year = year;
      this.editModal = true;
    },
    trigerConfirmModal(title, body, state, value = '') {
      this.confirmModalTitle = title;
      this.confirmModalBody = body;
      this.confirmModal = true;
      this.confirmModalState = state;
      this.confirmModalTempValue = value;
    },
    onActiveChange(id, is_active) {
      axios
        .patch(`api/admin/setting/period/active/${id}`, { is_active: is_active })
        .then(response => {
          this.getData();
          this.input.period = null;
          this.input.year = null;
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
    onAddPeriod() {
      axios
        .post('api/admin/setting/period', this.input)
        .then(response => {
          this.getData();
          this.input.period = null;
          this.input.year = null;
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
    onUpdatePeriod() {
      axios
        .patch(`api/admin/setting/period/${this.selected.id}`, this.selected)
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
    onDeletePeriod() {
      axios
        .delete(`api/department/${this.confirmModalTempValue}`)
        .then(response => {
          this.confirmModalTempValue = null;
          this.getData();
          this.$snotify.success(`Department Deleted`, 'SUCCESS');
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
        .get('api/admin/setting/period')
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
<style></style>
