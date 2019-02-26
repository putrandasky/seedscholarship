<template>
  <b-col md="3" sm="6" class="pb-3">
    <div class="border-bottom">
      <h5><i class="fa fa-briefcase"></i> Collection Officer
        <b-button class="btn--corner-15 btn--xs" size="sm" variant="success" @click="editPcoModal = true"
          v-b-tooltip.hover="'Add/Edit Collection Officer'"><i class="fa fa-plus"></i></b-button>
      </h5>
    </div>
    <span v-if="data" style="font-size:large;padding-left:20px">
      {{data.name }} ({{data.year }})
    </span>
    <b-modal :ok-disabled="checkOkEditPco" :no-close-on-esc="true" :hide-header-close="true"
      :no-close-on-backdrop="true" title="Assign Payment and Collection Officer" v-model="editPcoModal" @cancel="selectedUser = null" @ok="sendData">
      <b-form-group>
        <vue-bootstrap-typeahead @keyup.native="onKeyUpSearchUser" class="mb-4" v-model="userSearch" :data="users"
          :serializer="user => user.name" @hit="selectedUser = $event" :minMatchingChars="3" placeholder="Search User">
          <template slot="suggestion" slot-scope="{ data, htmlText }">
            <span v-html="htmlText"></span> ({{ data.initial }}), {{data.department | uppercase}}
          </template>
        </vue-bootstrap-typeahead>
        <strong v-show="searchingFeedback" slot="description" style="position: absolute;top: 55px;left: 29px;">
          Searching User ....
        </strong>
        <strong v-show="searchingFeedbackNoUser" slot="description" style="position: absolute;top: 55px;left: 29px;color:red">
          There's No User With That Name!
        </strong>
      </b-form-group>
    </b-modal>
  </b-col>
</template>
<script>
  import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
  import _ from 'lodash';
  export default {
    name: 'DetailDonorCollectionOfficer',
    props:['dataProps'],
    components:{
      'vue-bootstrap-typeahead': VueBootstrapTypeahead
    },
    data: function () {
      return {
        data:this.dataProps,
        editPcoModal: false,
        searchingFeedback: false,
        searchingFeedbackNoUser: false,
        users: [],
        userSearch: '',
        selectedUser: null,
      }
    },
    created() {},
    computed: {
      checkOkEditPco() {
        return !this.selectedUser ? true : false
      },
    },
    methods: {
      onKeyUpSearchUser: _.debounce(function (event) {
        if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >=
            97 && event.keyCode <= 122) || event.keyCode == 8 || event.keyCode == 229) {
          this.selectedUser = null
          if (this.userSearch.length >= 3) {
            this.searchingFeedbackNoUser = false
            this.searchingFeedback = true
            this.getUser(this.userSearch)
          } else {
            this.searchingFeedbackNoUser = false
            this.searchingFeedback = false
          }
        }
      }, 500),
      getUser(query) {
        let self = this
        axios.get('api/user-admin/search?name=' + query)
          .then((response) => {
            console.log(response.data)
            if (response.data.length == 0) {
              this.searchingFeedback = false
              this.searchingFeedbackNoUser = true
            }
            if (response.data.length !== 0) {
              self.users = response.data
              this.searchingFeedback = false
            }
            // console.log(this.selectedUser)
          })
          .catch((error) => {
            console.log(error);
          })
        // this.addresses = suggestions.suggestions
      },
      sendData() {

        axios.post(`api/user-donor/${this.$route.params.periodYear}/${this.$route.params.userId}/assign-pco` , this.selectedUser)
          .then((response) => {
            console.log(response.data)
              this.$snotify.success(response.data.message, "SUCCESS");
              this.data = response.data.data
          })
          .catch((error) => {
              this.$snotify.error(error.response.data.status, "ERROR");

          })
      }
    },
  }

</script>
<style>
</style>
