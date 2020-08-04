<template>
  <slide-y-up-transition>
    <b-row v-if="loaded">
      <b-col cols="12">
        <b-card>
          <div slot="header" class="text-center">
            <strong>Profile Awardee</strong>
            <!-- <router-link tag="button" class="btn btn-sm btn-primary btn-sm float-left" :to="{name:'RequestNonregIndex',params:{scholarshipId:$route.params.scholarshipId}}">
              <i class="fa fa-arrow-left"></i>
              BACK
            </router-link> -->
          </div>
          <b-row>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5><i class="fa fa-user"></i> Full Name</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{
                data.awardee_nonreg.name
              }}</span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5><i class="fa fa-envelope"></i> Email Address</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{
                data.awardee_nonreg.email
              }}</span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5><i class="fa fa-calendar"></i> Year of Period</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{
                data.awardee_nonreg.year
              }}</span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5><i class="fa fa-phone"></i> Phone Number</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{
                data.awardee_nonreg.phone
              }}</span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5><i class="fa fa-list"></i> Department</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{
                data.awardee_nonreg.college_department.department
              }}</span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5><i class="fa fa-check"></i> Status Approval</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{
                data.status
              }}</span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5><i class="fa fa-calendar-check-o"></i> Date Registered</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{
                data.created_at
              }}</span>
            </b-col>
            <!-- <b-col sm="9"></b-col>
          <b-col sm="3"><strong>Email Address</strong></b-col>
          <b-col sm="9">{{data.email}}</b-col>
          <b-col sm="3"><strong></strong></b-col>
          <b-col sm="9">{{data.year}}</b-col>
          <b-col sm="3"><strong></strong></b-col>
          <b-col sm="9">{{data.phone}}</b-col>
          <b-col sm="3"><strong></strong></b-col>
          <b-col sm="9">{{}}</b-col>
          <b-col sm="3"><strong></strong></b-col>
          <b-col sm="9">{{}}</b-col>
          <b-col sm="3"><strong></strong></b-col>
          <b-col sm="9">{{}}</b-col> -->
          </b-row>
        </b-card>
      </b-col>
      <b-col cols="12">
        <b-row>
          <b-col lg="3" sm="6">
            <file-card title="Curriculum Vitae" :scholarshipId="
                data.scholarship_id
              " :registrationCode="
                data.registration_code
              " folder="cv" :data="files.cv" />
          </b-col>
          <b-col lg="3" sm="6">
            <file-card title="Proposal" folder="proposal" :scholarshipId="
                data.scholarship_id
              " :registrationCode="
                data.registration_code
              " :data="files.proposal" />
          </b-col>
          <b-col lg="3" sm="6">
            <file-card title="Surat Keterangan" folder="sktmb" :scholarshipId="
                data.scholarship_id
              " :registrationCode="
                data.registration_code
              " :data="files.sktmb" />
          </b-col>
          <b-col lg="3" sm="6">
            <file-card title="SiakNG" folder="siakng" :scholarshipId="
                data.scholarship_id
              " :registrationCode="
                data.registration_code
              " :data="files.siakng" />
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12">
        <b-row v-if="data.status == 'SUBMITTED' && permission(20)">
          <b-col cols="12" class="text-right">
            <b-button variant="danger" @click="
                triggerConfirmModal(
                  'Set Approval Status',
                  'Are you sure to set status approval to NOT APPROVED? This action can not be undone',
                  'setStatus',
                  {
                    awardeeScholarshipId:
                      data.id,
                    status: `NOT APPROVED`
                  }
                )
              ">
              Not Approved
            </b-button>
            <b-button variant="success" @click="
                triggerConfirmModal(
                  'Set Approval Status',
                  'Are you sure to set status approval to APPROVED? This action can not be undone',
                  'setStatus',
                  {
                    awardeeScholarshipId:
                      data.id,
                    status: `APPROVED`
                  }
                )
              ">
              Approved
            </b-button>
          </b-col>
        </b-row>
      </b-col>
      <b-modal :no-close-on-esc="true" :hide-header-close="true" :no-close-on-backdrop="true" :title="confirmModalTitle" v-model="confirmModal" @ok="onConfirmModal">
        {{ confirmModalBody }}
      </b-modal>
    </b-row>
  </slide-y-up-transition>
</template>
<script>
  import FileCard from './DetailRequestNonregUploadCard';
  export default {
    name: 'DetailRequestNonreg',
    components: {
      FileCard
    },
    data: function() {
      return {
        loaded: false,
        files: {},
        confirmModal: false,
        confirmModalTitle: '',
        confirmModalBody: '',
        confirmModalTempValue: '',
        confirmModalState: '',
        data: {
          awardee_nonreg: {
            name: '',
            email: '',
            phone: '',
            year: null,
            department: null
          },
          created_at: null,
          updated_at: null
        }
      };
    },
    created() {
      this.$store.dispatch('storeBreadcrumbData', {
        linkBackButton: `/request/nonreg/${this.$route.params.scholarshipId}`,
        currentPageName: `Detail of Awardee Nonreg`
      });
      this.getData();
    },
    computed: {},
    methods: {
      triggerConfirmModal(title, body, state, value = '') {
        console.log('test');
        this.confirmModalTitle = title;
        this.confirmModalBody = body;
        this.confirmModal = true;
        this.confirmModalState = state;
        this.confirmModalTempValue = value;
        console.log(this.confirmModalTempValue);
      },
      onConfirmModal() {
        if (this.confirmModalState == 'setStatus') {
          this.setStatus();
        }
      },
      setStatus() {
        axios
          .post(
            `api/admin/scholarship/request/set-status`,
            this.confirmModalTempValue
          )
          .then(response => {
            this.$snotify.success(response.data.message, 'SUCCESS');
            this.data.status = this.confirmModalTempValue.status;
            console.log(this.data.status);

            this.confirmModalTempValue.status = '';
          })
          .catch(error => {
            console.log(error);
          });
      },
      getData() {
        let self = this;
        axios
          .get(
            `api/registration-awardee-nonreg/${this.$route.params.userId}?id=${this.$route.params.scholarshipId}`
          )
          .then(response => {
            console.log(response.data);
            self.data = response.data.user;
            self.files = response.data.files;
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
