<template>
  <slide-y-up-transition>
    <b-row v-if="loaded">
      <b-col cols="12">
        <b-card>
          <div
            slot="header"
            class=" d-sm-flex w-sm-100 justify-content-sm-between"
          >
            <!-- <router-link
              tag="button"
              class="btn btn-sm btn-primary btn-sm"
              :to="{
                name: 'AccountDonorIndex',
                params: { periodYear: $route.params.periodYear }
              }"
            >
              <i class="fa fa-arrow-left"></i>
              BACK
            </router-link> -->
            <strong>User Profile</strong>
          </div>
          <b-row>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5>
                  <i class="fa fa-user"></i> Full Name
                  <b-button
                    class="btn--corner-15 btn--xs"
                    size="sm"
                    variant="success"
                    @click="
                      triggerEditProfileModal(
                        'Edit Full Name',
                        'name',
                        'text',
                        data.name
                      )
                    "
                    v-b-tooltip.hover="'Edit Full Name'"
                  >
                    <i class="fa fa-edit"></i>
                  </b-button>
                </h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{
                data.name
              }}</span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5>
                  <i class="fa fa-envelope"></i> Email Address
                  <b-button
                    class="btn--corner-15 btn--xs"
                    size="sm"
                    variant="success"
                    @click="
                      triggerEditProfileModal(
                        'Edit Email Address',
                        'email',
                        'text',
                        data.email
                      )
                    "
                    v-b-tooltip.hover="'Edit Email Address'"
                  >
                    <i class="fa fa-edit"></i>
                  </b-button>
                </h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{
                data.email
              }}</span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5>
                  <i class="fa fa-calendar"></i> Year of Period (Angkatan)
                  <b-button
                    class="btn--corner-15 btn--xs"
                    size="sm"
                    variant="success"
                    @click="
                      triggerEditProfileModal(
                        'Edit Year Of Period (Angkatan)',
                        'year',
                        'number',
                        data.year
                      )
                    "
                    v-b-tooltip.hover="'Edit Year Of Period (Angkatan)'"
                  >
                    <i class="fa fa-edit"></i>
                  </b-button>
                </h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{
                data.year
              }}</span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5>
                  <i class="fa fa-phone"></i> Phone Number
                  <b-button
                    class="btn--corner-15 btn--xs"
                    size="sm"
                    variant="success"
                    @click="
                      triggerEditProfileModal(
                        'Edit Phone Number',
                        'phone',
                        'number',
                        data.phone
                      )
                    "
                    v-b-tooltip.hover="'Edit Phone Number'"
                  >
                    <i class="fa fa-edit"></i>
                  </b-button>
                </h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{
                data.phone
              }}</span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5><i class="fa fa-list"></i> Department</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{
                data.college_department.department
              }}</span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5>
                  <i class="fa fa-address-book"></i> Address
                  <b-button
                    class="btn--corner-15 btn--xs"
                    size="sm"
                    variant="success"
                    @click="
                      triggerEditProfileModal(
                        'Edit Address',
                        'address',
                        'text',
                        data.address
                      )
                    "
                    v-b-tooltip.hover="'Edit Address'"
                  >
                    <i class="fa fa-edit"></i>
                  </b-button>
                </h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{
                data.address
              }}</span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5>
                  <i class="fa fa-address-book"></i> Zip Code
                  <b-button
                    class="btn--corner-15 btn--xs"
                    size="sm"
                    variant="success"
                    @click="
                      triggerEditProfileModal(
                        'Edit Zip Code',
                        'zip_code',
                        'number',
                        data.zip_code
                      )
                    "
                    v-b-tooltip.hover="'Edit Zip Code'"
                  >
                    <i class="fa fa-edit"></i>
                  </b-button>
                </h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{
                data.zip_code
              }}</span>
            </b-col>
          </b-row>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Donation Profile</strong>
          </div>
          <b-row>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5><i class="fa fa-list-alt"></i> Donation Category</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{
                data.donor_periods[0].donation_category
              }}</span>
            </b-col>
            <b-col
              md="3"
              sm="6"
              class="pb-3"
              v-if="data.donor_periods[0].donation_category == 'AKTIF'"
            >
              <div class="border-bottom">
                <h5><i class="fa fa-dollar"></i> Amount Plan</h5>
              </div>
              <!-- <span style="font-size:large;padding-left:20px">Rp. {{data.donor_periods[0].amount | currency}} / year</span><br> -->
              <!-- <span style="font-size:large;padding-left:20px">Rp. {{data.donor_periods[0].amount /12 | currency}} /
                month</span> -->
              <span style="font-size:large;padding-left:20px"
                >Rp. {{ (data.donor_periods[0].amount / 10) | currency }} /
                month</span
              >
            </b-col>
            <b-col
              md="3"
              sm="6"
              class="pb-3"
              v-if="data.donor_periods[0].donation_category == 'PASIF'"
            >
              <div class="border-bottom">
                <h5><i class="fa fa-dollar"></i> Amount Plan</h5>
              </div>
              <span style="font-size:large;padding-left:20px"
                >Rp. {{ data.donor_periods[0].amount | currency }} /
                period</span
              >
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5><i class="fa fa-file-o"></i> Contract Agreed</h5>
              </div>
              <span style="font-size:large;padding-left:20px"
                >{{ data.donor_periods[0].is_contract_agreed }}
                <b-button
                  @click="seeContract"
                  v-if="data.donor_periods[0].is_contract_agreed == 'AGREED'"
                  class="btn--corner-15 btn--xs"
                  size="sm"
                  variant="warning"
                  v-b-tooltip.hover="'See Contract'"
                  ><i class="fa fa-search"></i
                ></b-button>
                <b-button
                  @click="resendEmailPostRegister"
                  v-if="data.donor_periods[0].is_contract_agreed !== 'AGREED'"
                  class="btn--corner-15 btn--xs"
                  size="sm"
                  variant="success"
                  v-b-tooltip.hover="'Resend Email Confirmation'"
                  ><i class="fa fa-send"></i
                ></b-button>
              </span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5><i class="fa fa-file-o"></i> Contract Number</h5>
              </div>
              <span style="font-size:large;padding-left:20px"
                >{{ data.donor_periods[0].contract_number }}
              </span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5><i class="fa fa-calendar-check-o"></i> Date Registered</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{
                data.donor_periods[0].created_at
              }}</span>
            </b-col>
            <collection-officer :dataProps="data.donor_periods[0].pco" />
            <pr-officer :dataProps="data.donor_periods[0].pr" />
          </b-row>
        </b-card>
      </b-col>
      <b-col sm="12">
        <transaction-history :transactions="data.donor_transactions" />
      </b-col>
      <b-modal
        :no-close-on-esc="true"
        :hide-header-close="true"
        :no-close-on-backdrop="true"
        :title="editProfileModalTitle"
        v-model="editProfileModal"
        @ok="onConfirmEditProfileModal"
      >
        <b-form-group
          :invalid-feedback="selectedEditProfileData.error"
          :state="selectedEditProfileData.state"
        >
          <b-input
            :type="editProfileTypeModal"
            class="form-control"
            placeholder="Please Input Data"
            v-model="selectedEditProfileData.input"
            :state="selectedEditProfileData.state"
          />
        </b-form-group>
      </b-modal>
    </b-row>
  </slide-y-up-transition>
</template>
<script>
import TransactionHistory from "./DetailDonorTransactionHistory.vue";
import CollectionOfficer from "./DetailDonorCollectionOfficer.vue";
import PrOfficer from "./DetailDonorPrOfficer.vue";
export default {
  name: "DetailRequestDonor",
  components: {
    TransactionHistory,
    CollectionOfficer,
    PrOfficer
  },
  data: function() {
    return {
      loaded: false,
      editProfileModal: false,
      editProfileTypeModal: "text",
      editProfileModalTitle: "",
      editProfileModalState: "",
      selectedEditProfileData: {
        input: "",
        error: null,
        state: null,
        key: ""
      },
      files: {},
      data: {
        name: "",
        email: "",
        phone: "",
        year: null,
        department: null,
        created_at: null,
        updated_at: null
      }
    };
  },
  created() {
    this.getData();
    this.$store.dispatch("storeBreadcrumbData", {
      linkBackButton: `/donors/period/${this.$route.params.periodYear}`,
      currentPageName: `Detail Donatur`
    });
  },
  computed: {},
  methods: {
    triggerEditProfileModal(title, key, type, data) {
      this.editProfileModalTitle = title;
      this.selectedEditProfileData.input = data;
      this.selectedEditProfileData.key = key;
      this.editProfileTypeModal = type;
      this.editProfileModal = true;
    },
    onConfirmEditProfileModal() {
      axios
        .patch(`api/user-donor/update-single/${this.$route.params.userId}`, {
          value: this.selectedEditProfileData.input,
          key: this.selectedEditProfileData.key
        })
        .then(response => {
          console.log(response.data);
          this.data[
            this.selectedEditProfileData.key
          ] = this.selectedEditProfileData.input;
          this.$snotify.success(response.data.message, "SUCCESS");
        })
        .catch(error => {
          console.log(error);
          this.$snotify.error(error.response.data.status, "ERROR");
        });
    },
    resendEmailPostRegister() {
      this.$store.dispatch("stateLoadingFull", true);
      axios
        .post(
          `api/auth/donor/register/email-post-register/${this.$route.params.userId}`,
          { periodId: this.data.donor_periods[0].period_id }
        )
        .then(response => {
          this.$store.dispatch("stateLoadingFull", false);
          this.$snotify.success(response.data.status, "SUCCESS");
        })
        .catch(error => {
          console.log(error);
          this.$store.dispatch("stateLoadingFull", false);
          this.$snotify.error(error.response.data.message, "ERROR");
        });
    },
    seeContract() {
      let self = this;
      window.open(
        `/api/file/donor-contract/${this.$route.params.userId}?year=${this.$route.params.periodYear}`,
        this.data.donor_periods[0].contract_number,
        `window,width=${screen.availWidth},height=${screen.availHeight},resizeable,left=200,top=100,directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0`
      );
    },
    getData() {
      let self = this;
      axios
        .get(
          `api/user-donor/${this.$route.params.userId}?year=${this.$route.params.periodYear}`
        )
        .then(response => {
          console.log(response.data);
          self.data = response.data.user;
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
