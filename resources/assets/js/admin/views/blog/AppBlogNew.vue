<template>
  <b-row>
    <b-col md="9">

      <b-card>
        <div slot="header" class="text-center">
          <strong>CREATE NEW BLOG</strong>
        </div>
        <!-- <b-form-group label="Slug (Required)" label-for="slug" :invalid-feedback="errors.slug" :state="stateTitle">
          <b-form-input required :state="stateTitle" id="slug" type="text" placeholder="Input slug of your post"
            v-model="input.slug"></b-form-input>
        </b-form-group> -->
        <b-form-group label="Title (Required)" label-for="title" :invalid-feedback="errors.title" :state="stateTitle">
          <b-form-input autocomplete="off" required :state="stateTitle" id="title" type="text" placeholder="Input title of your post"
            v-model="input.title"></b-form-input>
        </b-form-group>
        <b-form-group label="Description (Required but not mandatory)" label-for="body">
          <quill-editor v-model="input.body"> </quill-editor>
        </b-form-group>
      </b-card>
    </b-col>
    <b-col md="3">
      <b-card>
        <div slot="header" class="text-center">
          <strong>Publish</strong>
        </div>
        <div class="text-center">

          <b-button variant="secondary"  @click="postData('DRAFT')">Save as Draft</b-button>
          <b-button variant="primary" @click="postData('PUBLISH')">Publish</b-button>
        </div>
      </b-card>

      <b-card>
        <div slot="header" class="text-center">
          <strong>Categories</strong>
        </div>
        <b-form-group :invalid-feedback="errors.category" :state="stateCategory">
          <b-form-select plain v-model="input.category" :options="categoryOptions">
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
        <v-select plain placeholder="Select Tags (Optional)" :value="input.tags" :options="tagOptions" transition="fade-select"
          multiple label="name"></v-select>
      </b-card>
      <b-card>
        <div slot="header" class="text-center">
          <strong>Cover Image</strong>
        </div>
        <div id="preview">
          <img v-if="url" :src="url" />
        </div>
        <b-progress v-if="url" class="mb-3" height="5px" :value="uploadPercentage" variant="primary"></b-progress>
        <b-form-file v-model="cover_image" placeholder="Choose a file..." @change="onFileChange"></b-form-file>
        <!-- <upload-cover-image ref="upload" /> -->
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  // import 'quill/dist/quill.bubble.css'
  import vSelect from 'vue-select'
  // const VueUploadComponent = require('vue-upload-component')
  // import UploadCoverImage from './BlogUploadCoverImage'
  import {
    quillEditor
  } from 'vue-quill-editor'
  export default {
    name: 'AppBlogNew',
    components: {
      quillEditor,
      vSelect,
      // UploadCoverImage,
      // 'file-upload': VueUploadComponent

    },
    data: function () {
      return {
        url: null,
        cover_image: {},
        uploadPercentage: 0,
        input: {
          slug: '',
          title: '',
          body: '',
          category: null,
          tags: [],
          mod_status: ''
        },
        errors: {
          title: '',
          body: '',
          category: ''
        },
        categoryOptions: [],
        tagOptions: []
      }
    },
    created() {
      this.getCategory()
      this.getTags()
    },
    computed: {
      stateTitle() {
        return this.errors.title == 'no-error' ? true : this.errors.title ? false : null
      },
      stateCategory() {
        return this.errors.category == 'no-error' ? true : this.errors.category ? false : null
      },
    },
    methods: {
      onFileChange(e) {
        const file = e.target.files[0];
        this.url = URL.createObjectURL(file);
      },
      getCategory() {
        this.$store.dispatch('stateLoading', true)
        axios.get(`api/blog-category`)
          .then((response) => {
            if (response.data.length !== 0) {
              this.categoryDocuments = response.data
              const editCategory = (category) => {
                return category.map(item => {
                  var temp = Object.assign({}, item);
                  temp['value'] = temp.id,
                    temp['text'] = temp.category
                  // temp.name = 'my name '+temp.name;
                  return temp;
                });
              }
              this.categoryOptions = editCategory(response.data)
              return
            }
            this.loaded = true
            this.$store.dispatch('stateLoading', false)
          })
          .catch((error) => {
            console.log(error);
          })
      },
      getTags() {
        axios.get(`api/blog-tag`)
          .then((response) => {
            // console.log(response.data)
            this.tagOptions = response.data
            this.$store.dispatch('stateLoading', false)
          })
          .catch((error) => {
            console.log(error);
          })
      },
      postData(mod_status) {
        this.input.mod_status = mod_status
        let self = this
        axios.post(`api/blog`, this.input)
          .then((response) => {
            console.log(response.data)
            self.uploadCover(response.data.blog_id)
            // this.$refs.upload.start(response.data.blog_id)
          })
          .catch((error) => {
            console.log(error);
          })
      },
      uploadCover(blogId) {
        // console.log(this.url);
        let formData = new FormData();
        formData.append('file', this.cover_image)
        axios.post(`api/file/blog-cover-image/${blogId}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: function (progressEvent) {
              this.uploadPercentage = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total));
            }.bind(this)
          })
          .then((response) => {
            console.log(response.data)
            this.$router.push({name:'BlogDetail',params:{blogId:blogId}})

          })
          .catch((error) => {
            console.log(error);
            this.$router.push({name:'BlogDetail',params:{blogId:blogId}})
          })

      }
    },
  }

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
