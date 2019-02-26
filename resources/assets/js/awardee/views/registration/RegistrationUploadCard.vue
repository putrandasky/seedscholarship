<template>
  <b-card no-body>
    <div slot="header" class="text-center">
      <strong>{{title}}  <i class="fa fa-info-circle" v-b-tooltip.hover="information"></i></strong>
    </div>
    <!-- <b-card-img src="/images/default-file.png" style="border-radius:unset" /> -->
    <!-- <b-card-body class="" style="height:30vh;display:grid;align-content:center;align-self:center">
      <i class="fa fa-question fa-5x"></i>
    </b-card-body> -->
    <b-card-body body-bg-variant="danger" v-if="!data.name">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-0 pt-5 pb-5" style="align-self:center">No File Uploaded</h5>
        <i class="fa fa-close fa-2x" style="align-self:center"></i>
      </div>
      <b-progress v-show="uploadPercentage>0 " height="5px" :value="uploadPercentage" variant="success"></b-progress>
    </b-card-body>

    <b-card-body body-bg-variant="success" v-if="data.name">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-0" style="align-self:center">File Uploaded</h5>
        <i class="fa fa-check fa-2x" style="align-self:center"></i>
      </div>
    </b-card-body>

    <b-list-group flush v-if="data.name">
      <b-list-group-item>
        <strong>Name: </strong>
        {{data.name}}
      </b-list-group-item>
      <b-list-group-item>
        <strong>Size: </strong>
        {{data.size | formatSize}}
      </b-list-group-item>
      <b-list-group-item>
        <strong>Uploaded: </strong>
        {{data.date}}
      </b-list-group-item>
    </b-list-group>
    <b-card-body body-bg-variant="info" v-show="uploadPercentage>0 ">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-0" style="align-self:center">Uploading</h5>
        <i class="fa fa-spinner fa-spin fa-2x" style="align-self:center"></i>
      </div>
    </b-card-body>
    <b-card-body v-if="!data.name && !(uploadPercentage>0 ) ">
      <b-form-file accept="image/jpeg, image/png, image/gif, application/pdf" ref="upload" placeholder="Choose a file..."
        v-model="file" @change="onFileChange" />
    </b-card-body>
    <b-button :disabled="file.length == 0" v-if="!data.name && !(uploadPercentage>0 ) " block fluid class="mt-0" variant="success"
      style="border-top-left-radius:unset;border-top-right-radius:unset" @click="uploadFile"><i class="fa fa-paper-plane"></i>
      Upload
      File</b-button>
    <b-button v-if="data.name" block fluid variant="primary" style="border-radius:unset" @click="openFile"><i class="fa fa-search"></i>
      See File
    </b-button>
    <b-button v-if="data.name" block fluid class="mt-0" variant="danger" style="border-top-left-radius:unset;border-top-right-radius:unset"
      @click="trigerConfirmModal(
              `Delete ${title}`,
              `Are you sure want to delete this file?`,
              'deleteFile'
            )"><i
        class="fa fa-trash"></i> Delete File
    </b-button>
    <b-modal :no-close-on-esc="true" :hide-header-close="true" :no-close-on-backdrop="true" :title="confirmModalTitle"
      v-model="confirmModal" @ok="deleteFile">
      {{confirmModalBody}}
    </b-modal>
  </b-card>
</template>
<script>
  export default {
    name: 'RegistrationUploadCard',
    props: [
      'title', 'folder'
    ],
    data: function () {
      return {
        confirmModal: false,
        confirmModalTitle: '',
        confirmModalBody: '',
        confirmModalState: '',
        confirmModalTempValue: '',
        confirmModal: false,
        file: [],
        uploadPercentage: 0,
        new_file: '',
        old_file: '',
        data: {
          name: '',
          size: '',
          date: null,
        },

      }
    },
    created() {
      this.checkFile()
    },
    computed:{
      information(){
        return this.folder == 'cv'? 'Riwayat hidup dengan format bebas dengan informasi wajib berupa data diri dan riwayat pendidikan':
        this.folder == 'essay'? 'Esai dengan topik : Mengapa saya pantas mendapatkan beasiswa SEED (300-500 kata)':
        this.folder == 'slip'? 'Salinan slip gaji orangtua dan/atau rekening listrik':
        this.folder == 'siakng'? 'Print Out Ringkasan / Riwayat Akademis  SIAK NG': ''
      }
    },
    methods: {
      trigerConfirmModal(title, body, state, value = '') {
        this.confirmModalTitle = title
        this.confirmModalBody = body
        this.confirmModal = true
        this.confirmModalState = state
        this.confirmModalTempValue = value

      },
      onFileChange(e) {
        const file = e.target.files[0];
        // console.log(file);
        if (file.size > 2 * 1024 * 1024) {
          e.preventDefault()
          this.$refs.upload.reset()
          return
        }
        // this.data.photo = file.name
        this.new_file = file.name
        // this.objectUrl = URL.createObjectURL(file);

      },
      checkFile() {
        axios.get(`api/registration-awardee/upload?folder=${this.folder}&id=${this.$route.query.id}&period_id=${this.$route.query.period_id}&registration_code=${this.$route.query.registration_code}`)
          .then((response) => {
            console.log(response.data)
            this.data = response.data

          })
          .catch((error) => {
            console.log(error);
          })
      },
      openFile() {
        let self = this
        window.open(
          `/api/registration-awardee/upload/${this.$route.query.id}?folder=${this.folder}&period_id=${this.$route.query.period_id}&filename=${this.data.name}&registration_code=${this.$route.query.registration_code}`,
          self.data.name,
          `window,width=${screen.availWidth},height=${screen.availHeight},resizeable,left=200,top=100,directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0`
        );
      },
      uploadFile() {
        // console.log(this.url);
        let formData = new FormData();
        let self = this
        formData.append('file', this.file)
        axios.post(`api/registration-awardee/upload`, formData, {
            params: {
              id: this.$route.query.id,
              folder: this.folder,
              registration_code:this.$route.query.registration_code,
              period_id:this.$route.query.period_id
            },
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: function (progressEvent) {
              this.uploadPercentage = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total));
            }.bind(this)
          })
          .then((response) => {
            console.log(response.data)
            self.uploadPercentage = 0
            self.old_file = self.new_file
            self.new_file = null
            self.checkFile()
            this.$snotify.success(`${this.title} Succesfully Uploaded`, "UPLOADED");
          })
          .catch((error) => {
            console.log(error);
            this.$snotify.danger(`Ooops! Somethings Wrong, Try Again Later`, "ERROR");
          })

      },
      deleteFile() {
        console.log('deleting');

        let self = this
        axios.delete(
            `api/registration-awardee/upload/${this.$route.query.id}?folder=${this.folder}&filename=${this.data.name}&period_id=${this.$route.query.period_id}&registration_code=${this.$route.query.registration_code}`)
          .then((response) => {
            console.log(response.data)
            self.old_file = null
            self.data.name = ''
            self.data.size = ''
            self.data.date = null
            this.$snotify.success(`${this.title} Succesfully Deleted`, "DELETED");
            self.file = []
          })
          .catch((error) => {
            console.log(error);
            this.$snotify.danger(`Ooops! Somethings Wrong, Try Again Later`, "ERROR");
          })
      },
    },
  }

</script>
<style>
</style>
