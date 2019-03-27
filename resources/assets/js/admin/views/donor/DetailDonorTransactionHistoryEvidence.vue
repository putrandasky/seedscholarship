<template>
  <div>
    <b-form-file plain v-if="!fileName && file.length == 0" accept="image/jpeg, image/png, image/gif, application/pdf" ref="upload"
      v-model="file" @change="onFileChange($event,dataId)" placeholder="Choose a file..." />
    <template v-if="file.length !== 0 && !fileName">
      <div>
        <span v-show="uploadPercentage == 0" @click="resetFile"><i class="fa fa-close" v-b-tooltip.hover="'Cancel'"
            style="color:red;cursor:pointer"></i></span>
        <span v-show="uploadPercentage == 0" @click="uploadFile"><i class="fa fa-upload" v-b-tooltip.hover="'Upload'"
            style="color:blue;cursor:pointer"></i></span>
        {{new_file}}
      </div>
      <div>
        <b-progress v-show="uploadPercentage == 100" height="5px" :value="uploadPercentage" variant="success"></b-progress>
      </div>
    </template>

    <div v-if="fileName">
      <span @click="confirmModal = true"><i class="fa fa-trash" v-b-tooltip.hover="'Delete'" style="color:red;cursor:pointer"></i></span>
      <b-link href="#" @click.stop="openFile">{{fileName}}</b-link>
    </div>
    <b-modal :no-close-on-esc="true" :hide-header-close="true" :no-close-on-backdrop="true" title="Delete Evidence"
      v-model="confirmModal" @ok="deleteFile">
      Are you sure want to delete this evidence?? This action can't be undone.
    </b-modal>
    </div>
</template>
<script>
  export default {
    name: 'DetailDonorTransactionHistoryEvidence',
    props: ['propsDataId', 'propsIndex', 'propsFileName','propsUserId'],
    data: function () {
      return {
        confirmModal:false,
        file: [],
        fileName: this.propsFileName,
        index: this.propsIndex,
        dataId: this.propsDataId,
        userId: this.propsUserId,

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
    created() {},
    methods: {
      onFileChange(e, id) {
        const file = e.target.files[0];
        // console.log(file);
        if (file.size > 2 * 1024 * 1024) {
          e.preventDefault()
          this.file = []
          return
        }
        // this.data.photo = file.name
        this.new_file = file.name
        // this.objectUrl = URL.createObjectURL(file);

      },
      resetFile() {
        this.file = []
      },
      openFile() {
        let self = this
        window.open(
          `/api/file/donor-transaction/evidence/${this.userId}?id=${this.dataId}&periodYear=${this.$route.params.periodYear}&fileName=${this.fileName}`,
          self.data.name,
          `window,width=${screen.availWidth},height=${screen.availHeight},resizeable,left=200,top=100,directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0`
        );
      },
      uploadFile() {
        this.uploadPercentage = 0
        let formData = new FormData();
        let self = this
        formData.append('file', this.file)
        axios.post(`api/file/donor-transaction/evidence`, formData, {
            params: {
              id: this.dataId,
              periodYear: this.$route.params.periodYear,
              userId: this.userId,
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
            self.fileName = response.data.filename
            self.new_file = null
            self.uploadPercentage = 0

            // self.checkFile()
            this.$snotify.success(`Succesfully Uploaded`, "UPLOADED");
          })
          .catch((error) => {
            console.log(error);
            self.uploadPercentage = 0
            this.$snotify.danger(`Ooops! Somethings Wrong, Try Again Later`, "ERROR");
          })

      },
      deleteFile() {

        let self = this
        axios.delete(
            `api/file/donor-transaction/evidence/${this.userId}?id=${this.dataId}&periodYear=${this.$route.params.periodYear}&fileName=${this.fileName}`
          )
          .then((response) => {
            console.log(response.data)
            self.fileName = ''
            this.$snotify.success(`Succesfully Deleted`, "DELETED");
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
