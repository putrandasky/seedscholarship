<template>
  <div>
    <div class="float-button" v-b-tooltip.hover.left="'Term Conditions & FAQ'" @click="faqModal = true">
      <i class="fa fa-question"></i>
    </div>
    <b-modal :hide-footer="true" :no-close-on-esc="true" :hide-header-close="false" :no-close-on-backdrop="false" size="xl" title="Term, Conditions, & Frequently Asked Question"
      v-model="faqModal" >
      <p>Tim SEED Scholarship mengajak dan membuka peluang sebesar-besarnya bagi para calon donatur yang ingin ikut berpartisipasi dalam keberlangsungan program beasiswa SEED Scholarship. Demi memberikan kenyamanan dan menyesuaikan kemampuan calon donatur, kami memberikan pilihan 2 (dua) kategori donatur sebagai berikut</p>
            <ol>
        <li>Donatur Aktif adalah donatur yang memberikan donasi dengan jumlah minimal Rp. 100.000,00 rutin setiap bulan selama 12 bulan</li>
        <li>Donatur Pasif adalah donatur yang memberikan donasi dengan jumlah yang tidak ditetapkan sebanyak minimal 1 (satu) kali dalam 12 bulan.</li>
      </ol>
<hr/>
<strong>Q : Kapan donasi dibayarkan?</strong>
<p>A : Periode pembayaran donasi dibayarkan tanggal 25 s/d 5 bulan setelahnya. Contoh: Untuk pembayaran bulan November 2015, maka donasi dapat dibayarkan sejak tanggal 25 November 2015 s/d 5 Desember 2015</p>
<strong>Q : Kapan pembukaan pendaftaran donatur?</strong>
<p>A : Pendaftaran donatur akan dibuka sepanjang tahun. Anda cukup mengisi formulir pendaftaran kemudian tim PR akan mengubungi Anda untuk memberikan informasi selengkapnya</p>
<strong>Q: Untuk donatur aktif, dapatkah donasi dibayarkan langsung untuk beberapa bulan ke depan untuk menghindari lupa transfer ?</strong>
<p>A : Donasi bisa dibayarkan langsung untuk beberapa bulan donasi, misalkan langsung Rp 300.000,- untuk 3 bulan dst. Team finance akan mencatatnya. Yang ditekankan adalah dalam satu periode (selama 1 tahun) total donasi yang dikumpulkan adalah Rp 1.200.000,-

Kategori Donatur*
</p>
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
