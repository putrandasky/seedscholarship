<template>
  <span>
    <b-link href="#" @click="faqModal = true">terms and conditions.</b-link>

    <b-modal :hide-footer="true" :no-close-on-esc="true" :hide-header-close="false" :no-close-on-backdrop="false" size="xl" title="Term, Conditions, & Frequently Asked Question" v-model="faqModal">
      <strong>Pastikan kamu memenuhi persyaratan dibawah ini</strong>
      <ol>
        <li>Mahasiswa tahun pertama Departemen Teknik Sipil, Universitas Indonesia.</li>
        <li>Memiliki keterbatasan finansial dan berkeinginan tinggi untuk belajar.</li>
        <li>Bersedia mengikuti program pengembangan diri selama menerima beasiswa.</li>
      </ol>
      <strong>Kemudian, siapkan berkas pendaftaran</strong>
      <ol>
        <li>Formulir pendaftaran SEED Scholarship yang sudah diisi (Bisa diunduh setelah registrasi)</li>
        <li>Essai dengan topik : Mengapa saya pantas mendapatkan beasiswa SEED (300-500 kata)</li>
        <li>Salinan slip gaji orangtua</li>
        <li>Rekening listrik 3 bulan terakhir</li>
        <li>Print out halaman ringkasan dan riwayat SIAKNG</li>
        <li>Foto close up casual 3x4</li>
        <li>Surat keterangan bukan perokok aktif</li>
      </ol>
      <strong>Tunggu konfirmasi dari Tim Recruitment SEED</strong>
      <p>Kandidat terpilih untuk mendapatkan beasiswa akan kami hubungi untuk mengikuti wawancara</p>
      <hr />
      <strong>Q : Kapan pembukaan pendaftaran penerima beasiswa?</strong>
      <p>A : Pendaftaran akan dibuka pada akhir semester 1</p>
      <strong>Q : Apa saja tahap seleksi Calon Penerima Beasiswa?</strong>
      <p>A : Seleksi terdiri dari 2 tahapan yaitu seleksi administrasi dan interview.</p>
      <strong>Q : Apa saja tahap syarat administrasi untuk seleksi Calon Penerima Beasiswa?</strong>
      <p>A : Team Recruitment akan melakukan screening dari CV, Essay, Transkrip Nilai dan data kondisi finansial keluarga yang didukung dengan data berupa slip gaji orang tua dan atau rekening listrik. Apabila tidak ada slip gaji maka dilengkapi juga essay mengenai kondisi finansial keluarga.</p>
      <strong>Q : Berapa jumlah Penerima Beasiswa ?</strong>
      <p>Jumlah mahasiswa yang akan menerima beasiswa akan disesuaikan dengan hasil proses seleksi. SEED Scholarship memiliki kuota penerima beasiswa hingga 10 awardee</p>
      <strong>Q : Berapa jumlah besaran beasiswa diberikan?</strong>
      <p>A : Besaran beasiswa yang diberikan oleh SEEDS adalah sebesar Rp 3.600.000,- untuk satu semester.</p>
      <strong>Q : Kapan beasiswa diberikan kepada Penerima Beasiswa?</strong>
      <p>A : Beasiswa akan diberikan pada bulan pertama atau paling lambat bulan kedua dari awal semester berjalan</p>
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
