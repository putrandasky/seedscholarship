<template>
  <slide-y-up-transition>
    <restricted-area v-if="!permission(19)" />

    <b-card v-show="loaded" v-if="permission(19)">
      <div v-if="filteredItemsData.length == 0">
        <b-alert show variant="info">
          <h4 class="alert-heading">Belum Ada Undangan Yang Dikirim</h4>
          <p>
            Masih belum ada undangan donatur yang dikirim untuk periode ini
          </p>
          <hr />
          <p class="mb-0">
            Silahkan mengirimkan broadcast email undangan untuk mengajak donatur kembali berdonasi pada periode ini dengan menekan tombol yang tersedia dibawah ini
          </p>

        </b-alert>
        <div class="text-center">
          <b-btn class="px-5" variant="success" @click="triggerConfirmModal(
            'Konfirmasi Pengiriman Undangangan',
            'Apakah kamu yakin akan mengirimkan broadcast email untuk mengundang kembali menjadi donatur pada periode ini?',
            'send-broadcast'
          )">Kirim Undangan</b-btn>
        </div>
      </div>
      <div v-if="filteredItemsData.length !== 0">
        <b-row>
          <b-col xl="8" md="6" style="overflow-y:auto" v-if="getTotalPages > 1">
            <b-pagination-nav align="right" class="justify-content-end mb-0" :use-router="true" :link-gen="linkGen" :number-of-pages="getTotalPages" v-model="currentPage" />
          </b-col>
        </b-row>
        <div style="overflow-y:auto">
          <b-table stacked="sm" stack small style="animation-duration: 1s" hover :fields="FieldTableItems" :items="filteredItemsData" thead-class="thead-light" :current-page="currentPage" :per-page="perPage">

            <template v-slot:cell(no)="data">
              {{ data.index + 1 + (currentPage - 1) * perPage }}
            </template>
            <template v-slot:cell(status)="data">
              <b-badge :variant="getBadgeStatus(data.value)">
                {{ data.value }}
              </b-badge>
            </template>
            <!-- <template v-slot:cell(sender_name)="data">
            Rp. {{ data.item.plan_donation | currency }}
          </template>
          <template v-slot:cell(title)="data">
            Rp. {{ data.item.actual_donation | currency }}
          </template>
          <template v-slot:cell(broadcast)="data">
            Rp. {{ data.item.remaining_donation | currency }}
          </template> -->
          </b-table>
        </div>
      </div>

      <b-modal :no-close-on-esc="true" :hide-header-close="true" :no-close-on-backdrop="true" :title="confirmModalTitle" v-model="confirmModal" @ok="onConfirmModal">
        {{ confirmModalBody }}
      </b-modal>
    </b-card>
  </slide-y-up-transition>
</template>
<script>
  import {
    instantSearch
  } from "../_share/mixins/instantSearch";
  import {
    OperationPage
  } from "../_share/mixins/OperationPage";
  export default {
    name: 'ReinvitationDonor',
    mixins: [instantSearch, OperationPage],

    data: function() {
      return {
        routeName: "ReinvitationDonor",
        loaded: false,
        FieldTableItems: [{
            key: 'no',
            label: 'No',
            class: 'text-center',
            thStyle: {
              minWidth: '30px',
              width: '30px'
            }
          },
          {
            key: 'donor.name',
            label: 'Name',
            sortable: false,
            thStyle: {
              minWidth: '175px',
            }
          },
          {
            key: 'donor.email',
            label: 'email',
            sortable: false,
            thStyle: {
              minWidth: '175px',
            }
          },
          {
            key: 'status',
            label: 'Status',
            tdClass: 'truncate-cell',
            thStyle: {
              minWidth: '90px',
              width: '90px'
            },
            sortable: false
          },
          {
            key: 'updated_at',
            label: 'Updated',
            thStyle: {
              minWidth: '150px',
              width: '150px'
            },
            sortable: false
          }
        ],
        filteredItemsData: [],
        confirmModal: false,
        confirmModalTitle: '',
        confirmModalBody: '',
        confirmModalTempValue: '',
        confirmModalState: '',
        period: {}
      };
    },
    created() {
      this.$store.dispatch("storeBreadcrumbData", {
        linkBackButton: `/donors/period/${this.$route.params.periodYear}`,
        currentPageName: `Reinvitation Donatur Tahun ${this.$route.params.periodYear}`
      });
    },
    mounted() {

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
        if (this.confirmModalState == 'send-broadcast') {
          this.postReinvitation();
        }
      },
      postReinvitation() {
        axios.post(`api/admin/broadcast/reinvite-donor`, this.period)
          .then((response) => {
            console.log(response.data)
            this.$snotify.success(response.data.status, 'SUCCESS');

            this.getData()

          })
          .catch((error) => {
            this.$snotify.error(
              "Ooops, There's Something Error, Try Again Later",
              'ERROR'
            );
            console.log(error);
          })
      },
      getData() {
        this.loaded = false;
        axios
          .get(`api/admin/broadcast/reinvite-donor/${this.$route.params.periodYear}`)
          .then(response => {
            console.log(response.data);
            this.checkPage();

            this.filteredItemsData = response.data.donor_registration;
            this.period = response.data.period
            this.loaded = true;
          })
          .catch(error => {
            console.log(error);
          });
      },
      getBadgeStatus(status) {
        return status === "SENT" ?
          "success" :
          status === "FAILED" ?
          "danger" :
          "secondary";
      },
    }
  };
</script>
<style></style>
