<template>
  <div>
    <template v-if="invoiceNo && !hasInvoice">
      <span v-if="permission(3)" @click="createInvoice"><i class="fa fa-refresh" :class="{'fa-spin':isDisabled}" v-b-tooltip.hover="'Create Payment Receipt'"
          style="color:blue;cursor:pointer"></i>
      </span>
      <span>
        {{invoiceNo}}
      </span>
    </template>
    <template v-if="hasInvoice">
      <span  v-if="permission(3)"  @click="deleteInvoice">
        <i class="fa fa-trash" v-b-tooltip.hover="'Delete Payment Receipt'" style="color:red;cursor:pointer"></i>
      </span>
      <b-link href="#" @click.stop="openInvoice">{{invoiceNo}}</b-link>
    </template>
  </div>
</template>
<script>
  export default {
    name: 'DetailDonorTransactionHistoryInvoice',
    props: ['invoiceNo', 'dataId', 'index', 'hasInvoice','userId'],
    data: function () {
      return {

        isDisabled: false,
        confirmModal: false,
        confirmModalTitle: '',
        confirmModalBody: '',
        confirmModalTempValue: '',
        confirmModalState: '',
        transactionTableIndex: null,
        transactionModal: false,
        transactionModalTitle: '',
        transactionModalState: '',
        input: {
          id: null,
          trx_date: null,
          amount: null,
          verification: null,
          invoice_no: '',
          status_invoice: null
        },
        errors: {
          trx_date: null,
          amount: null,
          verification: null,
          invoice_no: '',
          status_invoice: null
        },

      }
    },
    created() {},
    computed: {},
    methods: {
      triggerConfirmModal(title, body, state, value = '') {
        this.confirmModalTitle = title
        this.confirmModalBody = body
        this.confirmModal = true
        this.confirmModalState = state
        this.confirmModalTempValue = value
      },
      createInvoice(e) {
        if (this.isDisabled) {
          return
        }
        this.isDisabled = true
        axios.post(`api/file/donor-transaction/payment-receipt`, {
            periodYear: this.$route.params.periodYear,
            userId: this.userId,
            id: this.dataId,
            invoice_no: this.invoiceNo
          })
          .then((response) => {
            console.log(response.data)
            this.isDisabled = false
            this.hasInvoice = 1
            this.$emit('hasInvoice', this.hasInvoice)
          })
          .catch((error) => {
            console.log(error);
            this.isDisabled = false
          })
      },

      openInvoice() {
        let self = this
        window.open(
          `/api/file/donor-transaction/payment-receipt/${this.userId}?id=${this.dataId}&periodYear=${this.$route.params.periodYear}&invoice_no=${this.invoiceNo}`,
          self.invoice_no,
          `window,width=${screen.availWidth},height=${screen.availHeight},resizeable,left=200,top=100,directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0`
        );
      },
      deleteInvoice() {
        let self = this
        axios.delete(
            `/api/file/donor-transaction/payment-receipt/${this.userId}?id=${this.dataId}&periodYear=${this.$route.params.periodYear}&invoice_no=${this.invoiceNo}`
          )
          .then((response) => {
            console.log(response.data)
            this.hasInvoice = false
            this.$emit('hasInvoice', this.hasInvoice)
            this.$snotify.success(`Succesfully Deleted`, "DELETED");
          })
          .catch((error) => {
            console.log(error);
            this.$snotify.danger(`Ooops! Somethings Wrong, Try Again Later`, "ERROR");
          })
      },
      getBadgeVerification(status) {
        return status === 'VERIFIED' ? 'success' :
          status === 'UNVERIFIED' ? 'secondary' : 'primary'
      },
      getBadgeStatus(status) {
        return status === 'SENT' ? 'success' :
          status === 'NOT SENT' ? 'secondary' : 'primary'
      },
    },
  }

</script>
<style>
</style>
