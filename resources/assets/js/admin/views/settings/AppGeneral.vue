<template>
  <slide-y-up-transition>
    <restricted-area  v-if="!permission(14)" />
    <b-row v-show="loaded"  v-if="permission(14)" >
      <b-col sm="6" md="4">
        <b-card title="Key Name">
          <b-form-group label="Seed Name" label-for="seed-name">
            <b-form-input
              id="seed-name"
              v-model="data[getIndex('Seed Name')].value"
            />
          </b-form-group>
          <b-form-group label="Head of Seeds Name" label-for="head-seed-name">
            <b-form-input
              id="head-seed-name"
              v-model="data[getIndex('Head of Seedscholarship Name')].value"
            />
          </b-form-group>
          <b-form-group label="Head of Seeds Title" label-for="head-seed-title">
            <b-form-input
              id="head-seed-title"
              v-model="data[getIndex('Head of Seedscholarship Title')].value"
            />
          </b-form-group>
          <b-form-group
            label="Head of Finance Name"
            label-for="head-finance-name"
          >
            <b-form-input
              id="head-finance-name"
              v-model="data[getIndex('Head of Finance Name')].value"
            />
          </b-form-group>
          <b-form-group
            label="Head of Finance Title"
            label-for="head-finance-title"
          >
            <b-form-input
              id="head-finance-title"
              v-model="data[getIndex('Head of Finance Title')].value"
            />
          </b-form-group>
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card title="Contact Person Name in Email">
          <b-form-group label="Contact Person 1" label-for="cp-email-1">
            <b-form-input
              id="cp-email-1"
              v-model="data[getIndex('Contact Person Email 1')].value"
            />
          </b-form-group>
          <b-form-group label="Contact Person 2" label-for="cp-email-2">
            <b-form-input
              id="cp-email-2"
              v-model="data[getIndex('Contact Person Email 2')].value"
            />
          </b-form-group>
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card title="Account Bank Data">
          <b-form-group label="Account Bank" label-for="account-bank">
            <b-form-input
              id="account-bank"
              v-model="data[getIndex('Account Bank')].value"
            />
          </b-form-group>
          <b-form-group label="Account Name" label-for="account-name">
            <b-form-input
              id="account-name"
              v-model="data[getIndex('Account Name')].value"
            />
          </b-form-group>
          <b-form-group label="Account Address" label-for="account-address">
            <b-form-input
              id="account-address"
              v-model="data[getIndex('Account Address')].value"
            />
          </b-form-group>
          <b-form-group label="Account Number" label-for="account-number">
            <b-form-input
              id="account-number"
              v-model="data[getIndex('Account Number')].value"
            />
          </b-form-group>
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card title="Registration Form Open">
          <div class=" d-flex  w-100 justify-content-between">
            <span>Reguler</span>
            <c-switch
              size="sm"
              type="default"
              :pill="true"
              variant="success"
              v-model="data[getIndex('Form Regular Open')].value"
              :value="'1'"
              :unchecked-value="'0'"
              @change="
                onSwitchChange(
                  getIndex('Form Regular Open'),
                  data[getIndex('Form Regular Open')].value
                )
              "
            />
          </div>
          <div class=" d-flex  w-100 justify-content-between">
            <span>Scholarship</span>
            <c-switch
              size="sm"
              type="default"
              :pill="true"
              variant="success"
              v-model="data[getIndex('Form Scholarship Open')].value"
              :value="'1'"
              :unchecked-value="'0'"
              @change="
                onSwitchChange(
                  getIndex('Form Scholarship Open'),
                  data[getIndex('Form Scholarship Open')].value
                )
              "
            />
          </div>
        </b-card>
      </b-col>
      <b-col cols="12" class="text-right">
        <b-button variant="success" size="sm" @click="postData">
          Submit
        </b-button>
      </b-col>
    </b-row>
  </slide-y-up-transition>
</template>
<script>
import cSwitch from '../../components/Switch';

export default {
  name: 'AppGeneral',
  components: {
    cSwitch
  },
  data: function() {
    return {
      loaded: false,
      data: []
    };
  },
  created() {
    this.permission(14) ? this.getData() : '';
    this.$store.dispatch('storeBreadcrumbData', {
      linkBackButton: '',
      currentPageName: 'General Settings'
    });
  },
  methods: {
    getIndex(key) {
      return this.data.findIndex(a => a.key == key);
    },
    onSwitchChange(index, value) {
      this.data[index].value = value;
    },
    getData() {
      axios
        .get('api/admin/setting/general')
        .then(response => {
          console.table(response.data);
          this.data = response.data;
          this.loaded = true;
        })
        .catch(error => {
          console.log(error);
        });
    },
    postData() {
      let self = this
      axios
        .post('api/admin/setting/general', this.data)
        .then(response => {
          self.$snotify.success(response.data.message, 'SUCCESS');
        })
        .catch(error => {
          console.log(error);
          this.$snotify.error(error.response.data.message, 'ERROR');
        });
    }
  }
};
</script>
<style></style>
