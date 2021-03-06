<template>
  <slide-y-up-transition>
    <b-row v-if="loaded">
      <b-col cols="12">
        <b-card>
          <div slot="header" class="text-center">
            <strong>Profile Awardee</strong>
            <!-- <router-link tag="button" class="btn btn-sm btn-primary btn-sm float-left" :to="{name:'RequestAwardeeIndex',params:{periodYear:$route.params.periodYear}}">
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
                data.awardee.name
              }}</span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5><i class="fa fa-envelope"></i> Email Address</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{
                data.awardee.email
              }}</span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5><i class="fa fa-calendar"></i> Year of Period</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{
                data.awardee.year
              }}</span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5><i class="fa fa-phone"></i> Phone Number</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{
                data.awardee.phone
              }}</span>
            </b-col>
            <b-col md="3" sm="6" class="pb-3">
              <div class="border-bottom">
                <h5><i class="fa fa-list"></i> Department</h5>
              </div>
              <span style="font-size:large;padding-left:20px">{{
                data.awardee.college_department.department
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
          <b-col v-for="(v,i) in files" :key="i" lg="3" sm="6">
            <file-card :title="setTitle(v.folder)" :folder="v.folder" :periodId="data.period_id" :registrationCode="data.registration_code" :data="v" />
          </b-col>
          <!--
          <b-col lg="3" sm="6">
            <file-card title="KTP" :periodId="data.period_id" :registrationCode="data.registration_code" folder="ktp" :data="files.ktp" />
          </b-col>
          <b-col lg="3" sm="6">
            <file-card title="Pas Photo" :periodId="data.period_id" :registrationCode="data.registration_code" folder="photo" :data="files.photo" />
          </b-col>
          <b-col lg="3" sm="6">
            <file-card title="Essay" folder="essay" :periodId="data.period_id" :registrationCode="data.registration_code" :data="files.essay" />
          </b-col>
          <b-col lg="3" sm="6">
            <file-card title="Slip Gaji" :periodId="data.period_id" :registrationCode="data.registration_code" folder="slip" :data="files.slip" />
          </b-col>
          <b-col lg="3" sm="6">
            <file-card title="Rekening Listrik" :periodId="data.period_id" :registrationCode="data.registration_code" folder="pln" :data="files.pln" />
          </b-col>
          <b-col lg="3" sm="6">
            <file-card title="Surat Bukan Perokok Aktif" :periodId="data.period_id" :registrationCode="data.registration_code" folder="nosmoke" :data="files.nosmoke" />
          </b-col> -->
        </b-row>
        <b-row v-if="data.status == 'SUBMITTED' && permission(20)">
          <b-col cols="12" class="text-right">
            <b-button variant="danger" @click="
                triggerConfirmModal(
                  'Set Approval Status',
                  'Are you sure to set status approval to NOT APPROVED? This action can not be undone',
                  'setStatus',
                  {
                    awardeePeriodId: data.id,
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
                    awardeePeriodId: data.id,
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
  import FileCard from './DetailRequestAwardeeUploadCard';
  export default {
    name: 'DetailRequestAwardee',
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
          awardee: {
            name: '',
            email: '',
            phone: '',
            year: null,
            college_department: {
              department: ''
            }
          },
          created_at: null,
          updated_at: null
        }
      };
    },
    created() {
      this.getData();
      this.$store.dispatch('storeBreadcrumbData', {
        linkBackButton: `/request/awardee/${this.$route.params.periodYear}`,
        currentPageName: 'Detail Awardee'
      });
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
            `api/admin/awardee/request/set-status`,
            this.confirmModalTempValue
          )
          .then(response => {
            this.$snotify.success(response.data.message, 'SUCCESS');
            this.data.status = this.confirmModalTempValue.status;
            this.confirmModalTempValue.status = '';
          })
          .catch(error => {
            console.log(error);
          });
      },
      setTitle(title) {
        return title == 'ktp' ? 'KTP' :
          title == 'essay' ? 'Essay' :
          title == 'slip' ? 'Slip Gaji' :
          title == 'form' ? 'Formulir Pendaftaran' :
          title == 'photo' ? 'Pas Photo' :
          title == 'nosmoke' ? 'Surat Bukan Perokok Aktif' :
          title == 'pln' ? 'Rekening Listrik' :
          title == 'siakng' ? 'SiakNG' : ''
      },
      getData() {
        let self = this;
        axios
          .get(
            `api/registration-awardee/${this.$route.params.userId}?year=${this.$route.params.periodYear}`
          )
          .then(response => {
            console.log(response.data.user.awardee);
            self.data = response.data.user;
            self.files = response.data.files;
            console.log(self.data);

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
