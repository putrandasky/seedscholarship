<template>
  <span>
    <b-link href="#" @click="faqModal = true">terms and conditions.</b-link>

    <b-modal :hide-footer="true" :no-close-on-esc="true" :hide-header-close="false" :no-close-on-backdrop="false" size="xl" title="Term, Conditions, & Frequently Asked Question" v-model="faqModal">
      <strong>Pastikan kamu memenuhi syarat dan ketentuan dibawah ini</strong>
      <ol>
        <li>Mahasiswa Departemen Teknik Sipil, Universitas Indonesia.</li>
        <li>Telah melakukan sidang seminar dan sedang mengambil mata kuliah skripsi</li>
        <li>Tidak menerima bantuan pendanaan dari pihak lain terkait penelitian tugas akhir</li>
      </ol>
      <strong>Kemudian, siapkan persyaratan berikut sebagai berkas pendaftaran</strong>
      <ol>
        <!-- <li>CV / Riwayat Hidup</li> -->
        <li>Proposal penelitan dengan isi; latar belakang, tujuan, metodologi, referensi</li>
        <li>Surat rekomendasi dosen/pembimbing Tugas Akhir (formate bisa didownload setelah halaman pendaftaran in)</li>
        <!-- <li>Surat keterangan tidak menerima beasiswa riset lainnya <strong>(Format diberikan di halaman upload setelah melakukan registrasi)</strong></li> -->
        <li>Print out halaman ringkasan dan riwayat SIAKNG</li>
        <li>Rincian kebutuhan dana penelitian</li>
      </ol>
      <strong>Tunggu konfirmasi dari Tim Recruitment SEEDS</strong>
      <p>Kandidat terpilih untuk mendapatkan beasiswa akan kami hubungi untuk mengikuti wawancara</p>
    </b-modal>
  </span>
</template>
<script>
  export default {
    name: 'AuthRegisterFaq',
    data: function() {
      return {
        faqModal: false,
      }
    },
    created() {},
    methods: {},
  }
</script>
<style>
</style>
