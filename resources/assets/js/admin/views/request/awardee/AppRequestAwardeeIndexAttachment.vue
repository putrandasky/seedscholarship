<template>
  <div>
    <p>Sebelum memulai pendaftaran awardee, mohon upload form yang diperlukan (Jika ada)</p>
    <div class="w-100 text-center mb-3">
      <b-button variant="primary" @click="handleClickButtonUpload()">Upload Disini!</b-button>
      <input class="d-none" type="file" ref="fileInput" name="fileInput" id="fileInput" v-on:change="handleFileUpload()" />

    </div>
    <div style="overflow-y:auto">
      <b-table v-if="loaded" stacked="sm" small :items="files" :fields="fields">
        <template v-slot:cell(no)="data">
          {{ data.index + 1 }}
        </template>
        <template v-slot:cell(size)="data">
          {{ data.item.size | formatSize }}
        </template>
        <template v-slot:cell(action)="data">
          <b-btn variant="success" size="sm" @click="handleClickDownload(data.item.name)"><i class="fa fa-download"></i></b-btn>
          <b-btn variant="danger" size="sm" @click="handleClickDelete(data.item.name)"><i class="fa fa-trash"></i></b-btn>
        </template>
      </b-table>
      <!-- <ul class="list-group">
        <li class="list-group-item d-flex ">
          <div class="mr-auto">
            BEASISWA PENELITIAN SEEDS 2019 - II - FORMAT PROPOSAL.docx
          </div>
          <div>
            <b-btn variant="success" size="sm">Download</b-btn>
            <b-btn variant="danger" size="sm">Delete</b-btn>
          </div>

        </li>
      </ul> -->
    </div>
    <small>
      <b>Nb : Jika sudah ada awardee yang mendaftar, form yang sudah diupload tidak bisa diganti!</b>
    </small>
  </div>
</template>
<script>
  export default {
    name: 'AppRequestAwardeeIndexAttachment',
    data: function() {
      return {
        loaded: false,
        fields: ['no', 'name', 'date', 'size', 'action'],
        files: []
      }
    },
    created() {
      this.getAttachment()
    },
    methods: {
      handleClickButtonUpload() {
        this.$refs.fileInput.click()
        // this.$bvToast.show('not-pdf-toast')
      },
      handleClickDownload(filename) {
        window.open(
          `api/admin/awardee/attachment/download?periodYear=${this.$route.params.periodYear}&filename=${filename}`,
          `window,width=${screen.availWidth},height=${screen.availHeight},resizeable,left=200,top=100,directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0`
        );
      },
      handleClickDelete(filename) {
        axios.delete(`api/admin/awardee/attachment?periodYear=${this.$route.params.periodYear}&filename=${filename}`)
          .then((response) => {
            console.log(response.data);
            this.getAttachment()
            this.loaded = true
          })
          .catch((error) => {
            console.log(error);
          })
      },
      getAttachment() {
        axios.get(`api/admin/awardee/attachment`, {
            periodYear: this.$route.params.periodYear
          })
          .then((response) => {
            console.log(response.data);
            this.files = response.data
            this.loaded = true
          })
          .catch((error) => {
            console.log(error);
          })
      },
      handleFileUpload() {
        let formData = new FormData();
        let self = this
        let file = this.$refs.fileInput.files[0]
        formData.append('file', file)
        axios.post(`api/admin/awardee/attachment`, formData, {
            params: {
              periodYear: this.$route.params.periodYear,
            },
            headers: {
              'Content-Type': 'multipart/form-data'
            },
          })
          .then((response) => {
            console.log(response.data)
            this.getAttachment()

            // self.checkFile()
            this.$snotify.success(`Succesfully Uploaded`, "UPLOADED");
          })
          .catch((error) => {
            this.$snotify.danger(`Ooops! Somethings Wrong, Try Again Later`, "ERROR");
          })

      },
    },
  }
</script>
<style>
</style>
