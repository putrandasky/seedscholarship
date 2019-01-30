<template>
<b-card>
                    <div slot="header" class="text-center">
                    <strong>BLOG CATEGORY</strong>
                </div>
  <b-row >
  <!-- <b-row v-show="loaded"> -->
    <b-col sm="12">
      <b-alert variant="info" :show="true">
        <h6 class="text-center">
          This page supposed to create category that will used in blog.
        </h6>
      </b-alert>
    </b-col>
    <b-col xl="3">
      <h6>Create New Blog Category</h6>
      <b-input-group class="mb-3">
        <b-form-input v-model="input" placeholder="Please Input..."></b-form-input>
        <b-input-group-append>
          <b-btn variant="success" @click="trigerConfirmModal(
            'Add New Blog Category',
            'Are You Sure To Add New Blog Category?',
            'post'
          )">Add</b-btn>
        </b-input-group-append>
      </b-input-group>
    </b-col>
    <b-col xl="9">
      <h6>Available Blog Category</h6>
      <b-alert variant="warning" :show="data.length == 0">
        <h1 class="lead text-center">
          THERE IS NO AVAILABLE CATEGORY.
        </h1>
      </b-alert>
      <!-- <b-row v-if="data.length !== 0"> -->
      <draggable v-model="data" :options="dragOptions" :move="onMove" @update="isChanged = true" @start="isDragging=true" @end="isDragging=false">
        <transition-group type="transition" :name="'flip-list'" tag="div" class="row">
          <b-col v-for="(v,i) in data"  md="4" sm="6" :key="v.id">
            <b-form-group size="sm">

              <b-input-group size="sm">
                <b-input-group-text slot="prepend">
                  {{i+1}}
                </b-input-group-text>
                <b-form-input v-model="v.name" size="sm"></b-form-input>
                <b-input-group-append>
                  <b-btn variant="success" @click="trigerConfirmModal(
                  'Edit Category',
                  'Are You Sure To Edit This Category?',
                  'update',
                  {id:v.id,name:v.name}
                )">
                    <i class="fa fa-edit" size="sm"></i></b-btn>
                  <b-btn variant="danger" @click="trigerConfirmModal(
                  'Delete Category',
                  'Are You Sure To Delete This Category ?',
                  'delete',
                  v.id
                )">
                    <i class="fa fa-trash" size="sm"></i></b-btn>
                </b-input-group-append>
                <b-input-group-text slot="append" class="my-handle">
                  <i class="fa fa-arrows-alt "></i>
                </b-input-group-text>
              </b-input-group>
            </b-form-group>
          </b-col>
        </transition-group>
      </draggable>

      <!-- </b-row> -->
      <div class="text-right">
        <b-button variant="warning" size="sm" v-show="isChanged" @click="orderList">Cancel</b-button>
        <b-button variant="success" size="sm" v-show="isChanged" @click="trigerConfirmModal(
          'Reorder Category',
          'Are You Sure to Reordering This Category',
          'reordering'
        )">ApplyThis Order</b-button>
      </div>
    </b-col>
    <b-modal :no-close-on-esc="true" :hide-header-close="true" :no-close-on-backdrop="true" :title="confirmModalTitle"
      v-model="confirmModal" @ok="onConfirmModal" @cancel="onCancelConfirmModal">
      {{confirmModalBody}}
    </b-modal>
  </b-row>
  </b-card>
</template>
<script>
  import draggable from 'vuedraggable'
  export default {
    name: 'SettingsCategoryDocument',
    components: {
      draggable,
    },
    data: function () {
      return {
        loaded: false,
        data: [{
            id:1,
            order:1,
            name:'test'
            
        },{
            id:2,
            order:2,
            name:'lagi'
            
        },{
            id:3,
            order:3,
            name:'lagi'
            
        },{
            id:4,
            order:4,
            name:'lagi'
            
        },{
            id:5,
            order:5,
            name:'lagi'
            
        },{
            id:6,
            order:6,
            name:'lagi'
            
        },{
            id:7,
            order:7,
            name:'lagi'
            
        },{
            id:8,
            order:8,
            name:'lagi'
            
        },{
            id:9,
            order:9,
            name:'lagi'
            

        }],
        input: '',
        confirmModal: false,
        confirmModalTitle: '',
        confirmModalBody: '',
        confirmModalState: '',
        confirmModalTempValue: '',
        editable: true,
        isDragging: false,
        delayedDragging: false,
        isChanged: false,
      }
    },
    watch: {
      isDragging(newValue) {
        if (newValue) {
          this.delayedDragging = true;
          return;
        }
        this.$nextTick(() => {
          this.delayedDragging = false;
        });
      }
    },
    created() {
    //   this.getData()
    },
    computed: {
      dragOptions() {
        return {
          animation: 0,
          group: "description",
          disabled: !this.editable,
          ghostClass: "ghost",
          handle: ".my-handle"
        };
      },
    },
    methods: {
      orderList() {
        this.isChanged = false
        this.data = this.data.sort((one, two) => {
          return one.order - two.order;
        });
      },
      onMove({
        relatedContext,
        draggedContext
      }) {
        const relatedElement = relatedContext.element;
        const draggedElement = draggedContext.element;
        return (
          (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
        );
      },
      test(val) {
        console.log(val[0]);

      },
      trigerConfirmModal(title, body, state, value = '') {
        this.confirmModalTitle = title
        this.confirmModalBody = body
        this.confirmModal = true
        this.confirmModalState = state
        this.confirmModalTempValue = value

      },
      onConfirmModal() {
        if (this.confirmModalState == 'post') {
          this.postData()
        }
        if (this.confirmModalState == 'update') {
          this.updateData()
        }
        if (this.confirmModalState == 'delete') {
          this.deleteData()
        }
        if (this.confirmModalState == 'reordering') {
          this.reorderData()
        }
      },
      onCancelConfirmModal() {
        this.confirmModalTitle = '',
          this.confirmModalBody = '',
          this.confirmModal = false,
          this.confirmModalState = '',
          this.confirmModalTempValue = ''
      },
      getData() {
        this.$store.dispatch('stateLoading', true)
        axios.get(`api/project/${this.$route.params.projectId}/category/document`)
          .then((response) => {
            console.log(response.data)
            this.data = response.data
            this.loaded = true
            this.$store.dispatch('stateLoading', false)
          })
          .catch((error) => {
            console.log(error);
          })
      },
      reorderData() {
        this.$store.dispatch('stateLoading', true)
        axios.post(`api/project/${this.$route.params.projectId}/category/document/reordering`, {data:this.data})
          .then((response) => {
            console.log(response.data)
            this.$snotify.success(response.data.status, "SUCCESS");
            this.$store.dispatch('stateLoading', false)
        this.isChanged = false
          })
          .catch((error) => {
            this.$snotify.error(error.response.statusText, "ERROR");
            this.$store.dispatch('stateLoading', false)
          })
      },
      postData() {
        this.$store.dispatch('stateLoading', true)
        axios.post(`api/project/${this.$route.params.projectId}/category/document`, {
            name: this.input
          })
          .then((response) => {
            console.log(response.data)
            this.getData()
            this.$snotify.success(response.data.status, "SUCCESS");
            this.input = ''
            this.$store.dispatch('stateLoading', false)
          })
          .catch((error) => {
            this.$snotify.error(error.response.data.status, "ERROR");
            this.$store.dispatch('stateLoading', false)
          })
      },
      updateData() {
        this.$store.dispatch('stateLoading', true)
        axios.patch(`api/project/${this.$route.params.projectId}/category/document`, {
            name: this.confirmModalTempValue.name,
            id: this.confirmModalTempValue.id
          })
          .then((response) => {
            this.getData()
            this.$snotify.success(response.data.status, "SUCCESS");
            this.$store.dispatch('stateLoading', false)
          })
          .catch((error) => {
            this.$snotify.error(error.response.data.status, "ERROR");
            this.$store.dispatch('stateLoading', false)
          })
      },
      deleteData() {
        console.log(this.confirmModalTempValue);
        this.$store.dispatch('stateLoading', true)
        axios.delete(`api/project/${this.$route.params.projectId}/category/document/${this.confirmModalTempValue}`)
          .then((response) => {
            console.log(response.data)
            this.getData()
            this.$snotify.success(response.data.status, "SUCCESS");
            this.$store.dispatch('stateLoading', false)
          })
          .catch((error) => {
            console.log(error);
          })
      }

    },
  }
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
