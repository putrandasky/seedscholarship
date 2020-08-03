<template>
  <slide-y-up-transition>

    <restricted-area v-if="!permission(15)" />
    <b-row class="d-flex" v-if="permission(15)">
      <b-col md="9" class="order-2 order-md-1">
        <b-card>
          <div slot="header" class="text-center">
            <strong>Blog Content</strong>
          </div>
          <!-- <b-form-group label="Slug (Required)" label-for="slug" :invalid-feedback="errors.slug" :state="stateTitle">
          <b-form-input required :state="stateTitle" id="slug" type="text" placeholder="Input slug of your post"
            v-model="input.slug"></b-form-input>
        </b-form-group> -->
          <b-form-group label="Title (Required)" label-for="title" :invalid-feedback="errors.title" :state="stateTitle">
            <b-form-input autocomplete="off" required :state="stateTitle" id="title" type="text" placeholder="Input title of your post" v-model="input.title"></b-form-input>
          </b-form-group>
          <b-form-group label="Summary (Required for Meta Tags)" label-for="title" :invalid-feedback="errors.summary" :state="stateSummary">
            <b-form-input autocomplete="off" required :state="stateSummary" id="summary" type="text" placeholder="Input summary of your post" v-model="input.summary"></b-form-input>
          </b-form-group>
          <b-form-group label="Description (Required but not mandatory)" label-for="body">
            <quill-editor v-model="input.body"> </quill-editor>
          </b-form-group>
        </b-card>
      </b-col>
      <b-col md="3" class=" order-1 order-md-2">
        <b-card>
          <div slot="header" class="text-center">
            <strong>Publish</strong>
          </div>
          <div class="text-center">
            <b-button variant="secondary" @click="postData('DRAFT')">Save as Draft</b-button>
            <b-button v-if="permission(16)" variant="primary" @click="postData('PUBLISH')">Publish</b-button>
          </div>
        </b-card>
        <b-card no-body>
          <div slot="header" class="text-center">
            <strong>Cover Image</strong>
          </div>
          <b-card-img :src="url" style="border-radius:unset"> </b-card-img>
          <b-btn v-show="input.cover_image" class="btn--corner" variant="danger" size="sm" style="top:47px" @click="handleRemoveCoverImage">
            <i class="fa fa-close"></i>
          </b-btn>
          <b-progress height="5px" :value="uploadPercentage" variant="primary"></b-progress>
          <b-card-body v-show="!input.cover_image">
            <b-form-file accept="image/jpeg, image/png, image/gif" ref="fileCoverImage" v-model="file" placeholder="Choose a file..." @change="onFileChange"></b-form-file>
          </b-card-body>
          <!-- <upload-cover-image ref="upload" /> -->
        </b-card>
        <b-card>
          <div slot="header" class="text-center">
            <strong>Categories</strong>
          </div>
          <b-form-group :invalid-feedback="errors.blog_category_id" :state="stateCategory">
            <b-form-select plain v-model="input.blog_category_id" :options="categoryOptions">
              <template slot="first">
                <option :value="null" disabled>-- Please Select Category --</option>
              </template>
            </b-form-select>
          </b-form-group>
        </b-card>
        <b-card>
          <div slot="header" class="text-center">
            <strong>Tags</strong>
          </div>
          <v-select plain placeholder="Select Tags (Optional)" :value="input.tags" :options="tagOptions" transition="fade-select" multiple label="name"></v-select>
        </b-card>
      </b-col>
    </b-row>
  </slide-y-up-transition>
</template>
<script>
  import 'quill/dist/quill.core.css';
  import 'quill/dist/quill.snow.css';
  // import 'quill/dist/quill.bubble.css'
  import vSelect from 'vue-select';
  // const VueUploadComponent = require('vue-upload-component')
  // import UploadCoverImage from './BlogUploadCoverImage'
  import {
    quillEditor
  } from 'vue-quill-editor';
  export default {
    name: 'AppBlogNew',
    components: {
      quillEditor,
      vSelect
      // UploadCoverImage,
      // 'file-upload': VueUploadComponent
    },
    data: function() {
      return {
        // url: null,
        file: null,
        objectUrl: null,
        uploadPercentage: 0,
        input: {
          slug: '',
          title: '',
          body: '',
          summary: '',
          blog_category_id: null,
          tags: [],
          cover_image: null,
          mod_status: ''
        },
        errors: {
          title: '',
          body: '',
          blog_category_id: ''
        },
        categoryOptions: [],
        tagOptions: []
      };
    },
    created() {
      this.getCategory();
      this.getTags();
      this.$store.dispatch("storeBreadcrumbData", {
        linkBackButton: ``,
        currentPageName: `Create New Blog`
      });
    },
    computed: {
      url() {
        return this.input.cover_image ?
          this.objectUrl :
          '/images/default-blog-cover.jpg';
      },
      stateTitle() {
        return this.errors.title == 'no-error' ?
          true :
          this.errors.title ?
          false :
          null;
      },
      stateSummary() {
        return this.errors.summary == 'no-error' ?
          true :
          this.errors.summary ?
          false :
          null;
      },
      stateCategory() {
        return this.errors.blog_category_id == 'no-error' ?
          true :
          this.errors.blog_category_id ?
          false :
          null;
      }
    },
    methods: {
      handleRemoveCoverImage() {
        this.input.cover_image = null;
        this.objectUrl = null;
        this.$refs.fileCoverImage.reset();
      },
      onFileChange(e) {
        const file = e.target.files[0];
        // console.log(file);
        if (file.size > 1024 * 1024) {
          e.preventDefault();
          this.$refs.fileCoverImage.reset();
          return;
        }
        this.input.cover_image = file.name;
        this.objectUrl = URL.createObjectURL(file);
        // let reader = new FileReader();
        // let self = this;
        // reader.onload = (e) => {
        //   self.file = e.target.result;
        // };
        // reader.readAsDataURL(file);
      },
      getCategory() {
        this.$store.dispatch('stateLoading', true);
        axios
          .get(`api/blog-category`)
          .then(response => {
            if (response.data.length !== 0) {
              // this.categoryDocuments = response.data
              const editCategory = category => {
                return category.map(item => {
                  var temp = Object.assign({}, item);
                  (temp['value'] = temp.id), (temp['text'] = temp.category);
                  // temp.name = 'my name '+temp.name;
                  return temp;
                });
              };
              this.categoryOptions = editCategory(response.data);
              return;
            }
            this.loaded = true;
            this.$store.dispatch('stateLoading', false);
          })
          .catch(error => {
            console.log(error);
          });
      },
      getTags() {
        axios
          .get(`api/blog-tag`)
          .then(response => {
            // console.log(response.data)
            this.tagOptions = response.data;
            this.$store.dispatch('stateLoading', false);
          })
          .catch(error => {
            console.log(error);
          });
      },
      postData(mod_status) {
        this.$store.dispatch('stateLoadingFull', true);

        this.input.mod_status = mod_status;
        let self = this;
        axios
          .post(`api/blog`, this.input)
          .then(response => {
            console.log(response.data);
            this.$snotify.success(response.data.message, 'SUCCESS');

            self.uploadCover(response.data.blog_id);
            // this.$refs.upload.start(response.data.blog_id)
          })
          .catch(error => {
            console.log(error);
          });
      },
      uploadCover(blogId) {
        // console.log(this.url);
        let formData = new FormData();
        formData.append('file', this.file);
        axios
          .post(`api/file/blog-cover-image/${blogId}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: function(progressEvent) {
              this.uploadPercentage = parseInt(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              );
            }.bind(this)
          })
          .then(response => {
            console.log(response.data);
            this.$store.dispatch('stateLoadingFull', false);
            this.$snotify.success(response.data.message, 'SUCCESS');

            this.$router.push({
              name: 'BlogDetail',
              params: {
                blogId: blogId
              }
            });
          })
          .catch(error => {
            console.log(error);
            this.$router.push({
              name: 'BlogDetail',
              params: {
                blogId: blogId
              }
            });
          });
      }
    }
  };
</script>
<style lang="css" scoped>
  #preview {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #preview img {
    max-width: 100%;
    max-height: 500px;
  }
</style>
