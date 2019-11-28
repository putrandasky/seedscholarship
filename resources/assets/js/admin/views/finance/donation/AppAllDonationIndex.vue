<template>
  <slide-y-up-transition>
    <div v-show="loaded">
            <b-btn class="mb-2" @click="handleClickBackButton" size="sm">
        Back
      </b-btn>
      <b-row>
        <b-col xl="4" md="6" class="mb-3">
          <b-input-group>
            <b-input-group-prepend>
              <b-form-select plain v-model="selectedInputSearch" :options="optionsInputSearch" />
            </b-input-group-prepend>
            <b-form-input autofocus v-model="search" @input="onInput" type="text" placeholder="Instant Search">
            </b-form-input>
            <b-input-group-append>
              <b-btn :disabled="!search" @click="search = ''">Clear</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-col>
        <b-col xl="8" md="6" style="overflow-y:auto" v-if="getTotalPages > 1">
          <b-pagination-nav align="right" class="justify-content-end mb-0" :use-router="true" :link-gen="linkGen"
            :number-of-pages="getTotalPages" v-model="currentPage" />
        </b-col>
      </b-row>
      <div style="overflow-y:auto">
        <b-table stacked="sm" stack small :fields="FieldTableItems" :items="filteredItemsData" thead-class="thead-light" :sort-by.sync="querySortBy" :sort-desc.sync="querySortDesc" @sort-changed="sortingChanged" :current-page="currentPage"
            :per-page="perPage">
          <template slot="HEAD_created_at" slot-scope="data">
            <span>Input Date
            </span>
            <i v-b-tooltip.top.hover title="Tanggal submit/penerimaan konfirmasi donasi" style="cursor: pointer" class="fa fa-info-circle">
            </i>
          </template>
          <template slot="HEAD_trx_date" slot-scope="data">
            <span>Trx Date
            </span>
            <i v-b-tooltip.top.hover title="Tanggal actual transaksi" class="fa fa-info-circle" style="cursor: pointer"></i>
          </template>
          <template slot="HEAD_evidence" slot-scope="data">
            <span>Evidence
            </span>
            <i v-b-tooltip.top.hover title="Bukti transfer" class="fa fa-info-circle" style="cursor: pointer"></i>
          </template>
          <template slot="HEAD_verification" slot-scope="data">
            <span>Verification
            </span>
            <i v-b-tooltip.top.hover title="Status verifikasi transaksi" class="fa fa-info-circle" style="cursor: pointer"></i>
          </template>
          <template slot="HEAD_invoice_no" slot-scope="data">
            <span>Invoice
            </span>
            <i v-b-tooltip.top.hover title="Nomor invoice dan bukti penerimaan donasi" class="fa fa-info-circle" style="cursor: pointer"></i>
          </template>
          <template slot="HEAD_status_invoice" slot-scope="data">
            <span>Status
            </span>
            <i v-b-tooltip.top.hover title="Untuk menginformasikan status bukti penerimaan donasi sudah terkirim ke donatur atau belum"
              class="fa fa-info-circle" style="cursor: pointer"></i>
          </template>
          <template slot="no" slot-scope="data">
            {{data.index+1+((currentPage-1)*perPage)}}
          </template>
          <template slot="amount" slot-scope="data">
            Rp. {{data.item.amount|currency}}
          </template>
          <template slot="evidence" slot-scope="data">
            <evidence :propsFileName="data.item.evidence" :propsDataId="data.item.id" :propsIndex="data.index" :propsUserId="data.item.donor.id"/>
          </template>
          <template slot="verification" slot-scope="data">
            <b-badge :variant="getBadgeVerification(data.item.verification)">
              {{data.item.verification}}
            </b-badge>
          </template>
          <template slot="invoice_no" slot-scope="data">
            <invoice :invoiceNo="data.item.invoice_no" :dataId="data.item.id" :index="data.index" :hasInvoice="data.item.has_invoice" :userId="data.item.donor.id"
              @hasInvoice=" data.item.has_invoice = $event " />
          </template>
          <template slot="status_invoice" slot-scope="data">
            <b-badge :variant="getBadgeStatus(data.item.status_invoice)">
              {{data.item.status_invoice}}
            </b-badge>
          </template>
          <template slot="actions" slot-scope="data">
            <b-btn-group>
              <b-btn variant="primary" size="sm" v-b-tooltip.hover="'Edit'" @click="handleEditTransaction(data.index+((currentPage-1)*perPage))">
                <i class="fa fa-edit"></i>
              </b-btn>
              <b-btn :disabled="!sendInvoiceAvailable(data.index+((currentPage-1)*perPage))" variant="success" size="sm" v-b-tooltip.hover="'Send Payment Receipt'"
                @click="triggerConfirmModal(
            'Send Payment Receipt',
            'Are You Sure To Send Payment Receipt for This Transaction?',
            'sendInvoice',
            {id:data.item.id,donor_id:data.item.donor_id,index:data.index+((currentPage-1)*perPage)}
             )"><i
                  class="fa fa-send"></i>
                  </b-btn>
            <b-btn variant="danger" size="sm" v-b-tooltip.hover="'Delete'" @click="triggerConfirmModal(
            'Delete Transaction',
            'Are You Sure To Delete This Transaction? All related data, inc evidence and invoice, will be deleted',
            'deleteTransaction',
            {id:data.item.id,donor_id:data.item.donor_id,index:data.index+((currentPage-1)*perPage)}
             )">
                <i class="fa fa-trash"></i>
              </b-btn>

            </b-btn-group>
          </template>
        </b-table>
      </div>
    <b-modal :title="transactionModalTitle" :no-close-on-esc="true" :hide-header-close="false" :no-close-on-backdrop="false"
      @hidden="handleHiddenModal" size="md" v-model="transactionModal" @ok="sendTransactionData">

      <b-form-group :invalid-feedback="errors.trx_date" :state="stateTrxDate">
        <b-input-group>
          <b-input-group-prepend>
            <b-input-group-text><i class="icon-calendar"></i></b-input-group-text>
          </b-input-group-prepend>
          <flat-pickr placeholder="Transaction Date" id="date" v-b-tooltip.hover title="Click To Edit" class="form-control"
            v-bind:class="{'is-invalid':stateTrxDate==false,'is-valid':stateTrxDate==true}" style="background-color:white"
            :config="configCalendar" v-model="input.trx_date" />
        </b-input-group>
      </b-form-group>
      <b-form-group :invalid-feedback="errors.amount" :state="stateAmount">
        <b-input-group>
          <b-input-group-prepend>
            <b-input-group-text>Rp</b-input-group-text>
          </b-input-group-prepend>
          <b-input type="number" class="form-control" placeholder="Transaction Amount" v-model="input.amount" :state="stateAmount" />
        </b-input-group>
      </b-form-group>
      <b-form-group v-if="transactionModalState == 'editTransaction'" :invalid-feedback="errors.verification" :state="stateVerification">
        <b-input-group>
          <b-input-group-prepend>
            <b-input-group-text><i class="icon-check"></i></b-input-group-text>
          </b-input-group-prepend>
          <b-form-select plain id="verfication" :options="[
            {value:'UNVERIFIED',text:'UNVERIFIED'},
            {value:'VERIFIED',text:'VERIFIED'}]"
            v-model="input.verification" :state="stateVerification">
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
          <b-input type="text" :disabled="filteredItemsData[transactionTableIndex].has_invoice?true:false"  class="form-control" placeholder="Invoice Number (If Ready)" v-model="input.invoice_no"
            :state="stateInvoiceNumber" />
        </b-input-group>
      </b-form-group>
    </b-modal>
      <b-modal :no-close-on-esc="true" :hide-header-close="true" :no-close-on-backdrop="true" :title="confirmModalTitle"
        v-model="confirmModal" @ok="onConfirmModal">
        {{confirmModalBody}}
      </b-modal>
    </div>
  </slide-y-up-transition>
</template>
<script>
  import Evidence from '../../donor/DetailDonorTransactionHistoryEvidence'
  import Invoice from '../../donor/DetailDonorTransactionHistoryInvoice'
  import flatPickr from 'vue-flatpickr-component';
  import 'flatpickr/dist/flatpickr.css';

  import {
    FieldTableData
  } from "./AppAllDonationIndexFieldTableData"
  import {
    instantSearch
  } from "../../_share/mixins/instantSearch";
  import {
    OperationPage
  } from "../../_share/mixins/OperationPage";
  export default {
    name: 'AppAllDonationIndex',
    components: {
      flatPickr,
      Evidence,
      Invoice
    },
    mixins: [FieldTableData, instantSearch, OperationPage],
    data: function () {
      return {
        routeName: 'AllDonationIndex',
        loaded: false,
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
          dateFormat: 'd-M-y'
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
    created() {
      this.getData()
    },
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
        return index => this.filteredItemsData[index].has_invoice && this.filteredItemsData[index].invoice_no && this.filteredItemsData[
          index].verification == 'VERIFIED' ? true : false
      },
    },
    watch: {
      '$route.params.periodYear': 'getData'
    },

    methods: {
            handleClickBackButton() {
        this.$router.push({
          name: 'AllDonationDefault',
        })
      },
      onConfirmModal() {
        if (this.confirmModalState == 'deleteTransaction') {
          this.deleteTransaction()
        }
        if (this.confirmModalState == 'sendInvoice') {
          this.sendInvoice()
        }
      },
      triggerConfirmModal(title, body, state, value = '') {
        console.log('test');

        this.confirmModalTitle = title
        this.confirmModalBody = body
        this.confirmModal = true
        this.confirmModalState = state
        this.confirmModalTempValue = value
        console.log(this.confirmModalTempValue);

      },
      handleHiddenModal() {
        this.errors.trx_date = null
        this.errors.amount = null
        this.errors.verification = null
        this.errors.status_invoice = null
        this.errors.invoice_no = null
      },
      handleEditTransaction(index) {
        console.log(this.filteredItemsData[index]);
        this.input.trx_date = this.filteredItemsData[index].trx_date,
        this.input.amount = this.filteredItemsData[index].amount,
        this.input.verification = this.filteredItemsData[index].verification,
        this.input.invoice_no = this.filteredItemsData[index].invoice_no,
        this.input.status_invoice = this.filteredItemsData[index].status_invoice
        this.input.id = this.filteredItemsData[index].id
        this.transactionTableIndex = index
        console.log(this.input.id);
        console.log(index);

        this.transactionModal = true
        this.transactionModalTitle = 'Edit Transaction'
        this.transactionModalState = 'editTransaction'

      },
      sendTransactionData(e) {
        e.preventDefault()
        if (this.transactionModalState == "editTransaction") {
          let self = this
          axios.put(`api/donor-transaction/${this.input.id}}`,
              this.input)
            .then((response) => {
              console.log(response.data)
              self.filteredItemsData[self.transactionTableIndex].trx_date = self.input.trx_date,
                self.filteredItemsData[self.transactionTableIndex].amount = self.input.amount,
                self.filteredItemsData[self.transactionTableIndex].verification = self.input.verification,
                self.filteredItemsData[self.transactionTableIndex].invoice_no = self.input.invoice_no,
                self.filteredItemsData[self.transactionTableIndex].has_invoice = self.input.has_invoice,
                self.filteredItemsData[self.transactionTableIndex].status_invoice = self.input.status_invoice
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
          let self = this
        axios.delete(
            `api/donor-transaction/${this.confirmModalTempValue.id}?donor_id=${this.confirmModalTempValue.donor_id}&period_year=${this.$route.params.periodYear}`
          )
          .then((response) => {
            console.log(response.data)
            self.filteredItemsData.splice(this.confirmModalTempValue.index, 1)
            // this.getData()
          })
          .catch((error) => {
            console.log(error);
          })
      },
      sendInvoice() {
        this.$store.dispatch('stateLoadingFull', true)
        let self = this
        axios.post(`api/file/donor-transaction/payment-receipt/send`, {
            userId:this.confirmModalTempValue.donor_id,
            periodYear: this.$route.params.periodYear,
            id: this.confirmModalTempValue.id,
          })
          .then((response) => {
            console.log(response.data)
            self.filteredItemsData[this.confirmModalTempValue.index].status_invoice = 'SENT'
            self.$snotify.success(response.data.message, "SUCCESS");
            this.$store.dispatch('stateLoadingFull', false)
          })
          .catch((error) => {
            console.log(error);
            self.$snotify.error(error.response.data.message, "ERROR");
            this.$store.dispatch('stateLoadingFull', false)
          })
      },
      getData() {
        this.loaded = false
        axios.get(`api/donor-transaction?periodYear=${this.$route.params.periodYear}`)
          .then((response) => {
            this.checkPage()
            const editData = (data) => {
              return data.map(item => {

                var temp = Object.assign({}, item);
                temp['name'] = temp.donor.name
                temp['year'] = temp.donor.year
                // temp.name = 'my name '+temp.name;
                return temp;
              });
            }
            this.itemsData = editData(response.data)
            this.loaded = true
            console.log(this.itemsData);

          })
          .catch((error) => {
            console.log(error);
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
