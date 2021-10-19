<template>
  <div class="app flex-row align-items-center" v-show="loaded">
    <b-container v-if="!authorized">
      <b-alert show variant="danger">YOU ARE NOT ALLOWED TO ACCESS THIS PAGE.
      </b-alert>
    </b-container>
    <div class="container" v-if="authorized">
      <b-alert show variant="info">

        <div v-if="attachments.length>0">
          Silahkan unduh dokumen / form persyaratan berikut terlebih dahulu :
          <br>
          <ul>
            <li v-for="(v,i) in attachments" :key="i">
              <b-link href="#" @click="handleClickDownload(v.name)">{{v.name}} ({{v.size | formatSize}})</b-link>
            </li>
          </ul>
        </div>
        <div>Silahkan unggah dokumen sesuai pada pos yang tersedia dalam bentuk file <strong>pdf/jpeg/png</strong> maksimum ukuran
          <strong>1mb</strong>.</div>
        <hr>

        <small>Nb : Pastikan kamu menyimpan link halaman ini, jika kamu ingin melakukan pembaharuan data, kamu bisa kembali ke halaman ini nanti. atau periksa <em>inbox</em> atau <em>spam</em> pada <em>email</em> kamu ya.</small>
      </b-alert>
      <b-row>
        <b-col v-for="(v,i) in files" :key="i" lg="3" sm="6">
          <slide-y-up-transition>
            <upload-card :title="setTitle(v.folder)" :folder="v.folder" />
          </slide-y-up-transition>
        </b-col>
        <!-- <b-col lg="3" sm="6">
          <slide-y-up-transition>
            <upload-card title="Proposal" folder="proposal" />
          </slide-y-up-transition>
        </b-col>
        <b-col lg="3" sm="6">
          <slide-y-up-transition>
            <upload-card title="Surat Keterangan" folder="sktmb" />
          </slide-y-up-transition>
        </b-col>
        <b-col lg="3" sm="6">
          <slide-y-up-transition>
            <upload-card title="SiakNG" folder="siakng" />
          </slide-y-up-transition>
        </b-col>-->
      </b-row>
    </div>
    <wa-button />

  </div>

</template>
<script>
  import UploadCard from './RegistrationUploadCard.vue'
  import WaButton from '../../../global/components/WaButton.vue'

  export default {
    name: 'RegistrationUpload',
    components: {
      UploadCard,
      WaButton

    },
    data: function() {
      return {
        loaded: false,
        authorized: false,
        files: [],
        attachments: []
      }
    },
    created() {
      this.checkAuthorization()
    },
    methods: {
      setTitle(title) {
        return title == 'cv' ? 'Curriculum Vitae' :
          title == 'proposal' ? 'Proposal' :
          title == 'siakng' ? 'SiakNg' :
          title == 'srta' ? 'Surat Rekomendasi' :
          title == 'rab' ? 'Rincian Kebutuhan Dana Penelitian' :
          title == 'sktmb' ? 'Surat keterangan' : ''
      },
      checkAuthorization() {
        axios.get(
            `api/registration-awardee-nonreg/upload/authorized?id=${this.$route.query.id}&registration_code=${this.$route.query.registration_code}&email=${this.$route.query.email}&scholarship_id=${this.$route.query.scholarship_id}`
          )
          .then((response) => {
            this.files = response.data.uploaded_files
            this.attachments = response.data.attachment_files
            this.loaded = true
            this.authorized = true
          })
          .catch((error) => {
            console.log(error);
            this.loaded = true
            this.authorized = false

          })
      },
      handleClickDownload(filename) {
        window.open(
          `api/registration-awardee-nonreg/attachment/download?scholarship_id=${this.$route.query.scholarship_id}&filename=${filename}`,
          `window,width=${screen.availWidth},height=${screen.availHeight},resizeable,left=200,top=100,directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0`
        );
      },
      handleDownload() {
        var element = document.createElement('a');
        element.setAttribute('href',
          `api/download/content/file/refference/${this.$route.params.projectId}/${this.document}/${this.$route.params.contentId}/${file}`
        );
        element.setAttribute('download', file);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
      }
    },
  }
</script>
<style>
</style>
