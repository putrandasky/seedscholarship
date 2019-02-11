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
    <b-button v-if="data.name" block fluid variant="primary" style="border-radius:unset" @click="openFile"><i class="fa fa-search"></i>
      See File
    </b-button>
  </b-card>
</template>
<script>
  export default {
    name: 'RegistrationUploadCard',
    props: [
      'title', 'folder', 'data','scholarshipId','registrationCode'
    ],
    data: function () {
      return {


      }
    },
    created() {
    },
    computed:{
      information(){
        return this.folder == 'cv'? 'Riwayat hidup dengan format bebas dengan informasi wajib berupa data diri dan riwayat pendidikan':
        this.folder == 'proposal'? 'Proposal penelitan dengan isi; latar belakang, tujuan, metodologi, RAB, dan referensi':
        this.folder == 'sktmb'? 'Surat keterangan yang menyatakan tidak menerima beasiswa riset lainnya':
        this.folder == 'siakng'? 'Print Out Ringkasan / Riwayat Akademis  SIAK NG': ''
      }
    },
    methods: {
      openFile() {
        let self = this
        window.open(
          `/api/registration-awardee-nonreg/upload/${this.$route.params.userId}?folder=${this.folder}&scholarship_id=${this.scholarshipId}&filename=${this.data.name}&registration_code=${this.registrationCode}`,
          self.data.name,
          `window,width=${screen.availWidth},height=${screen.availHeight},resizeable,left=200,top=100,directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0`
        );
      },
    },
  }

</script>
<style>
</style>
