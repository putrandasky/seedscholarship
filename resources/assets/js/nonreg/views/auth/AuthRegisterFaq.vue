<template>
  <div>
    <div class="float-button" v-b-tooltip.hover.left="'Term Conditions & FAQ'" @click="faqModal = true">
      <i class="fa fa-question"></i>
    </div>
    <b-modal :hide-footer="true" :no-close-on-esc="true" :hide-header-close="false" :no-close-on-backdrop="false" size="xl" title="Term, Conditions, & Frequently Asked Question"
      v-model="faqModal" >
      <strong>Pastikan kamu memenuhi syarat dan ketentuan dibawah ini</strong>
      <ol>
        <li>Mahasiswa Departemen Teknik Sipil, Universitas Indonesia.</li>
        <li>Telah melakukan sidang seminar dan sedang mengambil mata kuliah skripsi</li>
        <li>Tidak menerima bantuan pendanaan dari pihak lain terkait penelitian tugas akhir</li>
      </ol>
      <strong>Kemudian, siapkan persyaratan berikut sebagai berkas pendaftaran</strong>
      <ol>
        <li>CV / Riwayat Hidup</li>
        <li>Proposal penelitan dengan isi; latar belakang, tujuan, metodologi, RAB, referensi (Format diberikan di halaman upload setelah melakukan registrasi)</li>
        <li>Surat keterangan tidak menerima beasiswa riset lainnya (Format diberikan di halaman upload setelah melakukan registrasi)</li>
        <li>Print out halaman ringkasan dan riwayat SIAKNG</li>
      </ol>
      <strong>Tunggu konfirmasi dari Tim Recruitment SEED</strong>
      <p>Kandidat terpilih untuk mendapatkan beasiswa akan kami hubungi untuk mengikuti wawancara</p>
    </b-modal>
  </div>
</template>
<script>
  export default {
    name: 'AuthRegisterFaq',
    data: function () {
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
