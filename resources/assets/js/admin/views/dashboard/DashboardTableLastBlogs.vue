<template>
  <b-card class="shadow h-100">
    <b-card-title>
      <strong>Last Blogs</strong>
    </b-card-title>
    <b-alert variant="info" :show="data.length == 0">
      <h1 class="lead text-center">
        THERE IS NO LAST BLOGS DATA.
      </h1>
    </b-alert>
    <template v-if="data.length !== 0">
      <div style="overflow-y:auto">

        <b-table stacked="sm" hover small :fields="fieldsDocuments" :items="data" thead-class="thead-light">
          <template v-slot:cell(no)="data">
            {{data.index+1}}
          </template>
          <template v-slot:cell(title)="data">
            {{data.item.title}}
          </template>
          <template v-slot:cell(status)="data">
            <b-badge :variant="getBadge(data.item.status)">

              {{data.item.status}}
            </b-badge>
          </template>
          <template v-slot:cell(category)="data">
            {{data.item.blog_category.category}}
          </template>
          <template v-slot:cell(created_at)="data">
            {{data.item.created_at}}
          </template>
        </b-table>
      </div>
    </template>
  </b-card>
</template>
<script>
  export default {
    name: 'DashboardTableLastBlogs',
    props: [
      'data'
    ],
    data: function() {
      return {
        fieldsDocuments: [{
            key: 'no',
            label: 'No',
            'class': 'text-center',
            thStyle: {
              minWidth: '30px',
              width: '30px'
            },
          },
          {
            key: 'title',
            label: 'Title',
            tdClass: 'truncate-cell',
          },
          {
            key: 'status',
            label: 'Status',
            'class': 'text-center',

            thStyle: {
              minWidth: '120px',
              width: '120px'
            },
          },
          {
            key: 'blog_category.category',
            label: 'Category',
            'class': 'text-center',

            thStyle: {
              minWidth: '120px',
              width: '120px'
            },
          },
          {
            key: 'created_at',
            label: 'Date',
            'class': 'text-center',

            thStyle: {
              minWidth: '120px',
              width: '120px'
            },
          },
        ],
      }
    },
    created() {},
    watch: {

    },
    computed: {

    },
    methods: {
      getBadge(status) {
        return status === 'PUBLISH' ?
          'primary' :
          status === 'DRAFT' ?
          'secondary' :
          'success';
      },

    },
  }
</script>
<style>
</style>
