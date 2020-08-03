<template>
  <slide-y-up-transition>
    <div>
      <b-card v-show="loaded" header="Daftar Ulang Donatur">
        <div class="float-right">
          <b-btn variant="primary" size="sm" @click="sendNewModal = true"
            >Send New</b-btn
          >
        </div>
      </b-card>
      <b-modal
        :no-close-on-esc="true"
        :hide-header-close="true"
        :no-close-on-backdrop="true"
        title="Kirim Daftar Ulang"
        v-model="sendNewModal"
        @ok="
          triggerConfirmModal(
            'Konfirmasi Pengiriman Broadcast',
            'Apakah kamu yakin akan mengirimkan broadcast email untuk daftar ulang?',
            'daftar-ulang'
          )
        "
      >
        Kamu akan mengirimkan broadcast email untuk mendaftar kembali menjadi
        donatur SEEDS period <b>{{ data.period.period }}</b> tahun
        <b>{{ data.period.year }}</b> kepada <b> {{ data.donor }}</b> donatur
        yang pernah terdaftar menjadi donatur
      </b-modal>
      <b-modal
        :no-close-on-esc="true"
        :hide-header-close="true"
        :no-close-on-backdrop="true"
        :title="confirmModalTitle"
        v-model="confirmModal"
        @ok="onConfirmModal"
      >
        {{ confirmModalBody }}
      </b-modal>
    </div>
  </slide-y-up-transition>
</template>
<script>
export default {
  name: 'BroadcastReregisterDonorIndex',
  data: function() {
    return {
      loaded: false,
      sendNewModal: false,
      selectedPeriod: null,
      confirmModal: false,
      confirmModalTitle: '',
      confirmModalBody: '',
      confirmModalTempValue: '',
      confirmModalState: '',
      data: {}
    };
  },
  created() {
    this.getData();
  },
  methods: {
    triggerConfirmModal(title, body, state, value = '') {
      this.confirmModalTitle = title;
      this.confirmModalBody = body;
      this.confirmModal = true;
      this.confirmModalState = state;
      this.confirmModalTempValue = value;
    },
    onConfirmModal() {
      if (this.confirmModalState == 'daftar-ulang') {
        this.postBroadcast();
      }
    },
    getData() {
      this.loaded = false;
      axios
        .get(`api/admin/broadcast/index`)
        .then(response => {
          this.data = response.data;
          this.loaded = true;
        })
        .catch(error => {
          console.log(error);
        });
    },
    postBroadcast() {
      axios
        .post(`api/admin/broadcast/re-invite-donor/send`)
        .then(response => {})
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style></style>
