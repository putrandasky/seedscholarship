<template>
  <slide-y-up-transition>
    <div v-show="loaded">
      <b-row>
        <b-col lg="4" md="5">
          <b-card>
            <header slot="header"><strong>Add New Department</strong></header>
            <b-form-input type="text" v-model="input" />
            <div class="mt-2">
              <b-button v-show="input" variant="success" size="sm" class="float-right" @click="onAddDepartment">Add</b-button>
            </div>
          </b-card>
        </b-col>
        <b-col lg="8" md="7">
          <b-card>
            <header slot="header"><strong>List of Available Department</strong></header>
            <div style="overflow-y:auto">

              <b-table v-if="items.length !== 0" stacked="sm" small :fields="fieldsDocuments" :items="items"
                thead-class="thead-light">
                <template slot="no" slot-scope="data">
                  {{data.index+1}}
                </template>
                <template slot="action" slot-scope="data">
                  <b-button variant="success" size="sm" @click="onEditDepartmentModal(data.item.id,data.item.department)">Edit</b-button>
                  <b-button variant="danger" size="sm" @click="trigerConfirmModal(
            'Confirm Remove Department',
            'Are You Sure To Remove This Department From This User?',
            'deleteDepartment',data.item.id
          )">Remove</b-button>
                </template>

              </b-table>
            </div>
          </b-card>
        </b-col>
      </b-row>
      <b-modal :no-close-on-esc="true" :hide-header-close="true" :no-close-on-backdrop="true" title="Edit Depatment"
        v-model="editModal" @ok="trigerConfirmModal(
            'Confirm Edit Department',
            'Are You Sure To Edit This Department From This User?',
            'editDepartment'
          )">
        <b-form-input type="text" v-model="selected.department" />
      </b-modal>
      <b-modal :no-close-on-esc="true" :hide-header-close="true" :no-close-on-backdrop="true" :title="confirmModalTitle"
        v-model="confirmModal" @ok="onConfirmModal">
        {{confirmModalBody}}
      </b-modal>
    </div>
  </slide-y-up-transition>
</template>
<script>
  export default {
    name: 'AppAdminDepartment',
    data: function () {
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
        fieldsDocuments: [{
            key: 'no',
            label: 'No',
            'class': 'text-center',
            thStyle: {
              minWidth: '30px',
              width: '30px'
            },
          },

          {
            key: 'department',
            label: 'Department',
            'class': 'truncate-cell',
            thStyle: {
              minWidth: '175px',
            },
          },
          {
            key: 'admins_count',
            label: 'Users',
            'class': 'text-right',
            thStyle: {
              minWidth: '75px',
              width: '75px'
            },
          },
          {
            key: 'action',
            label: '',
            'class': 'text-center',
            thStyle: {
              minWidth: '150px',
              width: '150px'
            },
          },
        ]
      }
    },
    created() {
      this.getData()
    this.$store.dispatch("storeBreadcrumbData", {
      linkBackButton: "",
      currentPageName: "Department Register"
    });
    },
    methods: {
      onConfirmModal() {
        if (this.confirmModalState == 'deleteDepartment') {
          this.onDeleteDepartment()
        }
        if (this.confirmModalState == 'editDepartment') {
          this.onUpdateDepartment()
        }
      },
      onEditDepartmentModal(id, department) {
        this.selected.id = id
        this.selected.department = department
        this.editModal = true
      },
      trigerConfirmModal(title, body, state, value = '') {
        this.confirmModalTitle = title
        this.confirmModalBody = body
        this.confirmModal = true
        this.confirmModalState = state
        this.confirmModalTempValue = value
      },
      onAddDepartment() {
        axios.post('api/department', {
            department: this.input
          })
          .then((response) => {
            this.getData()
            this.input = null
            this.$snotify.success(`New Department Added`, "SUCCESS");
          })
          .catch((error) => {
            console.log(error);
            this.$snotify.error("Ooops, There's Something Error, Try Again Later", "ERROR");
          })
      },
      onUpdateDepartment() {
        axios.patch(`api/department/${this.selected.id}`, {
            department: this.selected.department
          })
          .then((response) => {
            this.getData()
            this.input = null
            this.$snotify.success(`New Department Added`, "SUCCESS");
          })
          .catch((error) => {
            console.log(error);
            this.$snotify.error("Ooops, There's Something Error, Try Again Later", "ERROR");
          })
      },
      onDeleteDepartment() {
        axios.delete(`api/department/${this.confirmModalTempValue}`)
          .then((response) => {
            this.confirmModalTempValue = null
            this.getData()
            this.$snotify.success(`Department Deleted`, "SUCCESS");
          })
          .catch((error) => {
            this.confirmModalTempValue = null
            console.log(error);
            this.$snotify.error("Ooops, There's Something Error, Try Again Later", "ERROR");
          })
      },
      onClickBack() {
        this.$router.push('/project')
      },
      getData() {
        axios.get('api/department')
          .then((response) => {
            console.log(response.data)
            this.items = response.data
            this.loaded = true
          })
          .catch((error) => {
            console.log(error);
          })
      }
    },
  }

</script>
<style>
</style>
