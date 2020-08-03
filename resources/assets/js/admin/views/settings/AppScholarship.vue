<template>
  <slide-y-up-transition>
    <restricted-area v-if="!permission(14)" />

    <div v-show="loaded" v-if="permission(14)">
      <b-row>
        <b-col lg="4" md="5">
          <b-card>
            <header slot="header"><strong>Add New Scholarship</strong></header>
            <b-form-group label="Name">
              <b-form-input type="text" v-model="input.name" placeholder="Please input scholarship name" />
            </b-form-group>
            <b-form-group label="Year">
              <b-form-input type="number" v-model="input.year" min="4" max="4" placeholder="Please input year in 4 digits" />
            </b-form-group>
            <div class="mt-2">
              <b-button v-show="input" variant="success" size="sm" class="float-right" @click="onAddScholarship">Add</b-button>
            </div>
          </b-card>
        </b-col>
        <b-col lg="8" md="7">
          <b-card>
            <header slot="header">
              <strong>List of Available Scholarship</strong>
            </header>
            <div style="overflow-y:auto">
              <b-table v-if="items.length !== 0" stacked="sm" small :fields="fieldsDocuments" :items="items" thead-class="thead-light">
                <template v-slot:cell(no)="data">
                  {{ data.index + 1 }}
                </template>
                <template v-slot:cell(is_active)="data">
                  <c-switch size="sm" type="default" :pill="true" variant="success" v-model="data.item.is_active" :value="1" :unchecked-value="0" @change="onActiveChange(data.item.id, data.item.is_active)" />
                </template>
                <template v-slot:cell(is_open_registration)="data">
                  <c-switch size="sm" type="default" :pill="true" variant="success" v-model="data.item.is_open_registration" :value="1" :unchecked-value="0" @change="onOpenRegistrationChange(data.item.id, data.item.is_open_registration)" />
                </template>
                <template v-slot:cell(action)="data">
                  <b-button v-if="permission(6)" variant="success" size="sm" @click="
                      onEditScholarshipModal(
                        data.item.id,
                        data.item.name,
                        data.item.year
                      )
                    ">Edit</b-button>
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
      <b-modal :no-close-on-esc="true" :hide-header-close="true" :no-close-on-backdrop="true" title="Edit Scholarship" v-model="editModal" @ok="
          trigerConfirmModal(
            'Confirm Edit Scholarship',
            'Are You Sure To Edit This Scholarship?',
            'editScholarship'
          )
        ">
        <b-form-group label="Scholarship Name">
          <b-form-input type="text" v-model="selected.name" placeholder="Please input Scholarship name" />
        </b-form-group>
        <b-form-group label="Year">
          <b-form-input type="number" v-model="selected.year" min="4" max="4" placeholder="Please input year in 4 digits" />
        </b-form-group>
      </b-modal>
      <b-modal :no-close-on-esc="true" :hide-header-close="true" :no-close-on-backdrop="true" :title="confirmModalTitle" v-model="confirmModal" @ok="onConfirmModal">
        {{ confirmModalBody }}
      </b-modal>
    </div>
  </slide-y-up-transition>
</template>
<script>
  import cSwitch from '../../components/Switch';
  export default {
    name: 'AppScholarship',
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
          name: '',
          year: null
        },
        selected: {
          name: '',
          year: null,
          id: null
        },
        fieldsDocuments: [{
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
            label: 'Name',
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
            key: 'is_open_registration',
            label: 'Open',
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
        currentPageName: 'Scholarship Register'
      });
    },
    methods: {
      onConfirmModal() {
        if (this.confirmModalState == 'deleteScholarship') {
          this.onDeleteScholarship();
        }
        if (this.confirmModalState == 'editScholarship') {
          this.onUpdateScholarship();
        }
      },
      onEditScholarshipModal(id, name, year) {
        this.selected.id = id;
        this.selected.name = name;
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
          .patch(`api/admin/setting/scholarship/active/${id}`, {
            is_active: is_active
          })
          .then(response => {
            this.getData();
            this.input.name = null;
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
      onOpenRegistrationChange(id, is_open_registration) {
        axios
          .patch(`api/admin/setting/scholarship/open/${id}`, {
            is_open_registration: is_open_registration
          })
          .then(response => {
            this.getData();
            this.input.name = null;
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
      onAddScholarship() {
        axios
          .post('api/admin/setting/scholarship', this.input)
          .then(response => {
            this.getData();
            this.input.name = null;
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
      onUpdateScholarship() {
        axios
          .patch(`api/admin/setting/scholarship/${this.selected.id}`, this.selected)
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
          .get('api/admin/setting/scholarship')
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
