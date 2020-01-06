<template>
  <slide-y-up-transition>
  <b-card v-show="loaded">
    <!-- <div slot="header" class="text-center">
      <strong>All BLOG</strong>
    </!-->
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
      <b-table stacked="sm" stack style="animation-duration: 1s" hover :fields="FieldTableItems" :items="filteredItemsData"
        thead-class="thead-light" :sort-by.sync="querySortBy" :sort-desc.sync="querySortDesc" @sort-changed="sortingChanged"
        :current-page="currentPage" :per-page="perPage" @row-clicked="handleRowClicked">
        <template  v-slot:cell(no)="data">
          {{data.index+1+((currentPage-1)*perPage)}}
        </template>
        <template  v-slot:cell(author)="data">
            <span v-b-tooltip.top.hover :title="data.item.author">
              {{data.item.author_initial}}
            </span>
        </template>
        <template  v-slot:cell(status)="data">
          <b-badge :variant="getBadge(data.item.status)">
            {{data.item.status}}
          </b-badge>
        </template>
      </b-table>
    </div>
  </b-card>
  </slide-y-up-transition>
</template>
<script>
  import {
    AppBlogFieldTableData
  } from "./AppBlogFieldTableData"
  import {
    instantSearch
  } from "../_share/mixins/instantSearch";
  import {
    OperationPage
  } from "../_share/mixins/OperationPage";
  export default {
    mixins: [AppBlogFieldTableData, instantSearch, OperationPage],
    name: 'AppBlog',
    data: function () {
      return {
      routeName: 'Blog',
      loaded:false,
      }
    },
    created() {
          this.$store.dispatch('storeBreadcrumbData', {
      linkBackButton: ``,
      currentPageName: `Blogs`
    });
    },
    methods: {
      handleRowClicked(record){
        this.$router.push({
          name:'BlogDetail',
          params:{
            blogId:record.id
          }
        })
      },
      getData() {
        axios.get(`api/blog`)
          .then((response) => {
            console.log(response.data)
            this.checkPage()
            const editData = (data) => {
              return data.map(item => {
                var temp = Object.assign({}, item);
                temp['author'] = temp.authorable.name
                temp['author_initial'] = temp.authorable.initial
                temp['category'] = temp.blog_category.category
                // temp.name = 'my name '+temp.name;
                return temp;
              });
            }
            this.itemsData = editData(response.data)
            this.loaded = true
          })
          .catch((error) => {
            console.log(error);
          })
      }
    },
  }

</script>
<style>
</style>
