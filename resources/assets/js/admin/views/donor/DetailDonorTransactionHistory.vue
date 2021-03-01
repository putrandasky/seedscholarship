<template>
  <b-card>
    <h4 class="card-title d-flex w-sm-100 justify-content-between">
      <span>Transaction History</span>
      <span class="d-flex">
        <b-btn v-b-tooltip.top.hover title="Untuk menyalin link upload mandiri donatur" variant="success" size="sm" @click="handleCopyClipboard">

          <b v-html="buttonCopyText">

          </b>
        </b-btn>
        <b-button class="ml-1" v-if="permission(3)" variant="primary" size="sm" @click="handleNewTransaction"><i class="fa fa-plus"></i>
          Add Data</b-button>
      </span>
    </h4>
    <div style="overflow-y:auto">
      <b-table stacked="sm" stack small :fields="FieldTableItems" :items="transactions" thead-class="thead-light" @row-clicked="handleRowClicked">
        <template v-slot:head(created_at)="data">
          <span>Input Date
          </span>
          <i v-b-tooltip.top.hover title="Tanggal submit/penerimaan konfirmasi donasi" style="cursor: pointer" class="fa fa-info-circle">
          </i>
        </template>
        <template v-slot:head(trx_date)="data">
          <span>Trx Date
          </span>
          <i v-b-tooltip.top.hover title="Tanggal actual transaksi" class="fa fa-info-circle" style="cursor: pointer"></i>
        </template>
        <template v-slot:head(evidence)="data">
          <span>Evidence
          </span>
          <i v-b-tooltip.top.hover title="Bukti transfer" class="fa fa-info-circle" style="cursor: pointer"></i>
        </template>
        <template v-slot:head(verification)="data">
          <span>Verification
          </span>
          <i v-b-tooltip.top.hover title="Status verifikasi transaksi" class="fa fa-info-circle" style="cursor: pointer"></i>
        </template>
        <template v-slot:head(invoice_no)="data">
          <span>Invoice
          </span>
          <i v-b-tooltip.top.hover title="Nomor invoice dan bukti penerimaan donasi" class="fa fa-info-circle" style="cursor: pointer"></i>
        </template>
        <template v-slot:head(status_invoice)="data">
          <span>Status
          </span>
          <i v-b-tooltip.top.hover title="Untuk menginformasikan status bukti penerimaan donasi sudah terkirim ke donatur atau belum" class="fa fa-info-circle" style="cursor: pointer"></i>
        </template>
        <template v-slot:cell(no)="data">
          {{data.index+1}}
        </template>
        <template v-slot:cell(amount)="data">
          Rp. {{data.item.amount|currency}}
        </template>
        <template v-slot:cell(evidence)="data">
          <evidence :propsFileName="data.item.evidence" :propsDataId="data.item.id" :propsIndex="data.index" :propsUserId="$route.params.userId" />
        </template>
        <template v-slot:cell(verification)="data">
          <b-badge :variant="getBadgeVerification(data.item.verification)">
            {{data.item.verification}}
          </b-badge>
        </template>
        <template v-slot:cell(invoice_no)="data">
          <invoice :invoiceNo="data.item.invoice_no" :dataId="data.item.id" :index="data.index" :hasInvoice="data.item.has_invoice" :userId="$route.params.userId" @hasInvoice=" data.item.has_invoice = $event " />
        </template>
        <template v-slot:cell(status_invoice)="data">
          <b-badge :variant="getBadgeStatus(data.item.status_invoice)">
            {{data.item.status_invoice}}
          </b-badge>
        </template>
        <template v-slot:cell(actions)="data">
          <b-btn-group>
            <b-btn variant="primary" size="sm" v-b-tooltip.hover="'Edit'" @click="handleEditTransaction(data.index)">
              <i class="fa fa-edit"></i>
            </b-btn>
            <b-btn v-if="permission(5) && sendInvoiceAvailable(data.index)" variant="success" size="sm" v-b-tooltip.hover="'Send Payment Receipt'" @click="triggerConfirmModal(
            'Send Payment Receipt',
            'Are You Sure To Send Payment Receipt for This Transaction?',
            'sendInvoice',
            {id:data.item.id,index:data.index}
             )"><i class="fa fa-send"></i></b-btn>
            <b-btn v-if="permission(5)" variant="danger" size="sm" v-b-tooltip.hover="'Delete'" @click="triggerConfirmModal(
            'Delete Transaction',
            'Are You Sure To Delete This Transaction? All related data, inc evidence and invoice, will be deleted',
            'deleteTransaction',
            {id:data.item.id,index:data.index}
             )">
              <i class="fa fa-trash"></i>
            </b-btn>
          </b-btn-group>
        </template>
      </b-table>
      <strong>Total Verified Donations: Rp. {{ total | currency}}</strong>
    </div>
    <b-modal :title="transactionModalTitle" :no-close-on-esc="true" :hide-header-close="false" :no-close-on-backdrop="false" @hidden="handleHiddenModal" size="md" v-model="transactionModal" @ok="sendTransactionData" :ok-disabled="!(permission(3) || permission(4))">
      <b-form-group :invalid-feedback="errors.trx_date" :state="stateTrxDate">
        <b-input-group>
          <b-input-group-prepend>
            <b-input-group-text><i class="icon-calendar"></i></b-input-group-text>
          </b-input-group-prepend>
          <flat-pickr placeholder="Transaction Date" id="date" v-b-tooltip.hover title="Click To Edit" class="form-control" v-bind:class="{'is-invalid':stateTrxDate==false,'is-valid':stateTrxDate==true}" style="background-color:white" :config="configCalendar" v-model="input.trx_date" />
        </b-input-group>
      </b-form-group>
      <b-form-group :invalid-feedback="errors.amount" :state="stateAmount">
        <b-input-group>
          <b-input-group-prepend>
            <b-input-group-text>Rp</b-input-group-text>
          </b-input-group-prepend>
          <b-input :disabled="!permission(3)" type="number" class="form-control" placeholder="Transaction Amount" v-model="input.amount" :state="stateAmount" />
        </b-input-group>
      </b-form-group>
      <b-form-group v-if="transactionModalState == 'editTransaction'" :invalid-feedback="errors.verification" :state="stateVerification">
        <b-input-group>
          <b-input-group-prepend>
            <b-input-group-text><i class="icon-check"></i></b-input-group-text>
          </b-input-group-prepend>
          <b-form-select :disabled="!permission(4)" plain id="verfication" :options="[
            {value:'UNVERIFIED',text:'UNVERIFIED'},
            {value:'VERIFIED',text:'VERIFIED'}]" v-model="input.verification" :state="stateVerification">
            <template slot="first">
              <option :value="null" disabled>-- Is It Verified? --</option>
            </template>
          </b-form-select>
        </b-input-group>
      </b-form-group>
      <b-form-group v-if="transactionModalState == 'editTransaction'" :invalid-feedback="errors.invoice_no" :state="stateInvoiceNumber">
        <b-input-group>
          <b-input-group-prepend>
            <b-input-group-text><i class="icon-doc"></i></b-input-group-text>
          </b-input-group-prepend>
          <!--       <b-input type="text" class="form-control" placeholder="Invoice Number (If Ready)" v-model="input.invoice_no"
            :state="stateInvoiceNumber" /> -->
          <b-input :disabled="!permission(3) || transactions[transactionTableIndex].has_invoice?true:false" type="text" class="form-control" placeholder="Invoice Number (If Ready)" v-model="input.invoice_no" :state="stateInvoiceNumber" />
        </b-input-group>
      </b-form-group>
      <!-- <b-form-group v-if="transactionModalState == 'editTransaction'" :invalid-feedback="errors.status_invoice" :state="stateStatusInvoice">
        <b-input-group>
          <b-input-group-prepend>
            <b-input-group-text><i class="icon-paper-plane"></i></b-input-group-text>
          </b-input-group-prepend>
          <b-form-select plain id="status_invoice" :options="[
            {value:'NOT SENT',text:'NOT SENT'},
            {value:'SENT',text:'SENT'}]"
            v-model="input.status_invoice" :state="stateStatusInvoice">
            <template slot="first">
              <option :value="null" disabled>-- Invoice Sent? --</option>
            </template>
          </b-form-select>
        </b-input-group>
      </b-form-group> -->
    </b-modal>
    <b-modal :no-close-on-esc="true" :hide-header-close="true" :no-close-on-backdrop="true" :title="confirmModalTitle" v-model="confirmModal" @ok="onConfirmModal">
      {{confirmModalBody}}
    </b-modal>
  </b-card>
</template>
<script>
  import Evidence from './DetailDonorTransactionHistoryEvidence'
  import Invoice from './DetailDonorTransactionHistoryInvoice'
  import flatPickr from 'vue-flatpickr-component';
  import {
    copyClipboard
  } from '../_share/mixins/copyClipboard'
  import 'flatpickr/dist/flatpickr.css';
  import {
    FieldTableData
  } from "./DetailDonorTransactionFieldTableData."
  export default {
    name: 'DetailDonorTransactionHistory',
    props: ['transactions', 'donationToken', 'donorEmail'],
    components: {
      flatPickr,
      Evidence,
      Invoice
    },
    mixins: [FieldTableData, copyClipboard],
    data: function() {
      return {
        confirmModal: false,
        confirmModalTitle: '',
        confirmModalBody: '',
        confirmModalTempValue: '',
        confirmModalState: '',
        transactionTableIndex: null,
        transactionModal: false,
        transactionModalTitle: '',
        transactionModalState: '',
        configCalendar: {
          dateFormat: 'd-M-y',
          clickOpens: this.permission(3)

        },
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
    computed: {
      stateTrxDate() {
        return this.errors.trx_date == 'no-error' ? true : this.errors.trx_date ? false : null
      },
      stateAmount() {
        return this.errors.amount == 'no-error' ? true : this.errors.amount ? false : null
      },
      stateVerification() {
        return this.errors.verification == 'no-error' ? true : this.errors.verification ? false : null
      },
      stateStatusInvoice() {
        return this.errors.status_invoice == 'no-error' ? true : this.errors.status_invoice ? false : null
      },
      stateInvoiceNumber() {
        return this.errors.invoice_no == 'no-error' ? true : this.errors.invoice_no ? false : null
      },
      sendInvoiceAvailable() {
        return index => this.transactions[index].has_invoice && this.transactions[index].invoice_no && this.transactions[
          index].verification == 'VERIFIED' ? true : false
      },
      total() {
        let sum = 0;
        for (let i = 0; i < this.transactions.length; i++) {

          sum += this.transactions[i].verification == 'VERIFIED' ? (parseFloat(this.transactions[i].amount)) : 0;
        }

        return sum;
      }
    },
    methods: {
      triggerConfirmModal(title, body, state, value = '') {
        this.confirmModalTitle = title
        this.confirmModalBody = body
        this.confirmModal = true
        this.confirmModalState = state
        this.confirmModalTempValue = value
      },
      test(e) {
        console.log('test');
        // e.preventDefault()
      },
      handleEditTransaction(index) {
        console.log(this.transactions[index]);
        this.input.trx_date = this.transactions[index].trx_date,
          this.input.amount = this.transactions[index].amount,
          this.input.verification = this.transactions[index].verification,
          this.input.invoice_no = this.transactions[index].invoice_no,
          this.input.status_invoice = this.transactions[index].status_invoice
        this.input.id = this.transactions[index].id
        this.transactionTableIndex = index
        console.log(this.input.id);

        this.transactionModal = true
        this.transactionModalTitle = 'Edit Transaction'
        this.transactionModalState = 'editTransaction'

      },
      handleNewTransaction() {
        this.input.trx_date = null,
          this.input.amount = null,
          this.input.verification = null,
          this.input.invoice_no = '',
          this.input.status_invoice = null,
          this.transactionModal = true
        this.transactionModalTitle = 'Add New Transaction'
        this.transactionModalState = 'addTransaction'
      },
      onConfirmModal() {
        if (this.confirmModalState == 'deleteTransaction') {
          this.deleteTransaction()
        }
        if (this.confirmModalState == 'sendInvoice') {
          this.sendInvoice()
        }
      },
      sendTransactionData(e) {
        e.preventDefault()
        if (this.transactionModalState == "addTransaction") {
          let self = this
          axios.post(
              `api/donor-transaction?donor_id=${this.$route.params.userId}&period_year=${this.$route.params.periodYear}`,
              this.input)
            .then((response) => {
              console.log(response.data)
              self.$snotify.success(response.data.message, "SUCCESS");
              self.transactions.push({
                trx_date: self.input.trx_date,
                amount: self.input.amount,
                verification: 'UNVERIFIED',
                has_invoice: null,
                invoice_no: '',
                status_invoice: 'NOT SENT',
                id: response.data.id,
                created_at: dayjs().format('DD-MMM-YY')
              })
              self.transactionModal = false
            })
            .catch((error) => {
              console.log(error);
              let errors = error.response.data.errors
              this.$snotify.error(error.response.data.message, "ERROR");
              this.errors.trx_date = errors.trx_date ? errors.trx_date[0] : 'no-error';
              this.errors.amount = errors.amount ? errors.amount[0] : 'no-error';
              this.errors.invoice_no = errors.invoice_no ? errors.invoice_no[0] : 'no-error';
              this.errors.verification = errors.verification ? errors.verification[0] : 'no-error';
              this.errors.status_invoice = errors.status_invoice ? errors.status_invoice[0] : 'no-error';
            })
        }
        if (this.transactionModalState == "editTransaction") {
          let self = this
          axios.put(`api/donor-transaction/${this.input.id}}`,
              this.input)
            .then((response) => {
              console.log(response.data)
              self.transactions[self.transactionTableIndex].trx_date = self.input.trx_date,
                self.transactions[self.transactionTableIndex].amount = self.input.amount,
                self.transactions[self.transactionTableIndex].verification = self.input.verification,
                self.transactions[self.transactionTableIndex].invoice_no = self.input.invoice_no,
                // self.transactions[self.transactionTableIndex].has_invoice = self.input.has_invoice,
                self.transactions[self.transactionTableIndex].status_invoice = self.input.status_invoice
              // console.log(self.transactions[self.transactionTableIndex]);

              self.$snotify.success(response.data.message, "SUCCESS");
              self.transactionModal = false

            })
            .catch((error) => {
              console.log(error);
              let errors = error.response.data.errors
              this.$snotify.error(error.response.data.message, "ERROR");
              this.errors.trx_date = errors.trx_date ? errors.trx_date[0] : 'no-error';
              this.errors.amount = errors.amount ? errors.amount[0] : 'no-error';
              this.errors.verification = errors.verification ? errors.verification[0] : 'no-error';
              this.errors.invoice_no = errors.invoice_no ? errors.invoice_no[0] : 'no-error';
              this.errors.status_invoice = errors.status_invoice ? errors.status_invoice[0] : 'no-error';
            })
        }
      },
      deleteTransaction() {
        axios.delete(
            `api/donor-transaction/${this.confirmModalTempValue.id}?donor_id=${this.$route.params.userId}&period_year=${this.$route.params.periodYear}`
          )
          .then((response) => {
            console.log(response.data)
            this.transactions.splice(this.confirmModalTempValue.index, 1)
          })
          .catch((error) => {
            console.log(error);
          })
      },
      handleHiddenModal() {
        this.errors.trx_date = null
        this.errors.amount = null
        this.errors.verification = null
        this.errors.status_invoice = null
        this.errors.invoice_no = null
      },
      sendInvoice() {
        this.$store.dispatch('stateLoadingFull', true)
        let self = this
        axios.post(`api/file/donor-transaction/payment-receipt/send`, {
            userId: this.$route.params.userId,
            periodYear: this.$route.params.periodYear,
            id: this.confirmModalTempValue.id,

          })
          .then((response) => {
            console.log(response.data)
            self.transactions[this.confirmModalTempValue.index].status_invoice = 'SENT'
            self.$snotify.success(response.data.message, "SUCCESS");
            this.$store.dispatch('stateLoadingFull', false)
          })
          .catch((error) => {
            console.log(error);
            self.$snotify.error(error.response.data.message, "ERROR");
            this.$store.dispatch('stateLoadingFull', false)
          })
      },
      handleRowClicked() {

      },
      getBadgeVerification(status) {
        return status === 'VERIFIED' ? 'success' :
          status === 'UNVERIFIED' ? 'secondary' : 'primary'
      },
      getBadgeStatus(status) {
        return status === 'SENT' ? 'success' :
          status === 'NOT SENT' ? 'secondary' : 'primary'
      },

      handleCopyClipboard() {
        let host = window.location.host
        let pathname = '/donor#/donation-confirmation?'
        this.copyTextToClipboard(`https://${host}${pathname}id=${this.$route.params.userId}&year=${this.$route.params.periodYear}&email=${this.donorEmail}&donation_token=${this.donationToken}`)
        this.buttonCopyText = '<i class="fa fa-check"></i> Copied!'
        setTimeout(() => {
          this.buttonCopyText = `<i class="fa fa-link"></i> Copy Link`
        }, 500);
      },
    },
  }
</script>
<style>
</style>
