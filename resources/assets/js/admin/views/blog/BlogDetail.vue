<template>
  <b-row v-show="loaded">
    <b-col md="9">
      <b-card>
        <div slot="header" class="text-center">
          <strong>BLOG</strong>
        </div>
        <b-form-group label="Slug (Required)" label-for="slug" :invalid-feedback="errors.slug" :state="stateTitle">
          <b-form-input required :state="stateTitle" id="slug" type="text" placeholder="Input slug of your post"
            v-model="data.slug"></b-form-input>
        </b-form-group>
        <b-form-group label="Title (Required)" label-for="title" :invalid-feedback="errors.title" :state="stateTitle">
          <b-form-input autocomplete="off" required :state="stateTitle" id="title" type="text" placeholder="Input title of your post"
            v-model="data.title"></b-form-input>
        </b-form-group>
        <b-form-group label="Description (Required but not mandatory)" label-for="body">
          <quill-editor v-model="data.body"> </quill-editor>
        </b-form-group>
      </b-card>
      <b-card>
        <div slot="header" class="text-center">
          <strong>Moderations</strong>
        </div>
        <b-card-body style="overflow-x: auto;max-height: 400px;">
          <b-card v-for="(v,i) in data.moderations" :key="i">
            <div class="card-title border-bottom">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{v.moderateable.name}}</h5>
                <small class="text-muted">{{v.mod_status}}</small>
              </div>
            </div>
            <p class="card-text">{{v.mod_message}}</p>
            <small class="text-muted">Last updated {{v.created_at}}</small>
          </b-card>
        </b-card-body>
      </b-card>
      <b-card>
        <div slot="header" class="text-center">
          <strong>Comments</strong>
        </div>
      </b-card>
    </b-col>
    <b-col md="3">
      <b-card>
        <div slot="header" class="text-center">
          <strong>Publish</strong>
        </div>
        <strong>Status</strong> : {{data.moderations[0].mod_status}}<br />
        <strong>Last Update</strong> : {{data.moderations[0].created_at}}<br />
        <strong>Created</strong> : {{data.created_at}}

        <div slot="footer">
          <div class="text-center">
            <b-button variant="secondary" @click="handlePublishButton('DRAFT')" size="sm">Save as Draft</b-button>
            <b-button variant="primary" @click="handlePublishButton('PUBLISH')" size="sm">Publish</b-button>
          </div>
        </div>
      </b-card>
      <b-card>
        <div slot="header" class="text-center">
          <strong>Categories</strong>
        </div>
        <b-form-group :invalid-feedback="errors.blog_category_id" :state="stateCategory">
          <b-form-select plain v-model="data.blog_category_id" :options="categoryOptions">
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
        <v-select plain placeholder="Select Tags (Optional)" :value="data.tags" :options="tagOptions" transition="fade-select"
          multiple label="name"></v-select>
      </b-card>
      <b-card no-body>
        <div slot="header" class="text-center">
          <strong>Cover Image</strong>
        </div>
        <b-card-img :src="url" style="border-radius:unset">
        </b-card-img>
        <b-btn v-show="data.cover_image || new_cover_image" class="btn--corner" variant="danger" size="sm" style="top:47px"
          @click="handleRemoveCoverImage">
          <i class="fa fa-close"></i>
        </b-btn>
        <b-btn v-show="old_cover_image && new_cover_image" class="btn--corner" variant="warning" size="sm" style="top:47px;right:22px"
          @click="handleUndoCoverImage">
          <i class="fa fa-undo"></i>
        </b-btn>
        <b-progress v-show="uploadPercentage>0" height="5px" :value="uploadPercentage" variant="primary"></b-progress>
        <b-card-body v-show="!data.cover_image && !new_cover_image">
          <b-form-file accept="image/jpeg, image/png, image/gif" ref="fileCoverImage" v-model="file" placeholder="Choose a file..."
            @change="onFileChange"></b-form-file>
        </b-card-body>
        <!-- <upload-cover-image ref="upload" /> -->
      </b-card>
    </b-col>
    <b-modal title="Leave Moderation Message" v-model="moderationModal" @ok="trigerConfirmModal(
      `${new_moderations.status} THIS BLOG`,
      `Are you sure?`,
      'postBlog'
    )">
      <b-form-group label-for="message" class="my-1">
        <b-form-input id="message" type="text" name="message" placeholder="Please leave a message why change this blog"
          v-model="new_moderations.message" />
      </b-form-group>
    </b-modal>
    <b-modal :no-close-on-esc="true" :hide-header-close="true" :no-close-on-backdrop="true" :title="confirmModalTitle"
      v-model="confirmModal" @ok="onConfirmModal" @cancel="onCancelConfirmModal">
      {{confirmModalBody}}
    </b-modal>
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
    name: 'BlogDetail',
    components: {
      quillEditor,
      vSelect,
      // UploadCoverImage,
      // 'file-upload': VueUploadComponent

    },
    data: function () {
      return {
        confirmModal: false,
        confirmModalTitle: '',
        confirmModalBody: '',
        confirmModalState: '',
        confirmModalTempValue: '',
        file: null,
        objectUrl: null,
        uploadPercentage: 0,
        new_cover_image: null,
        old_cover_image: null,
        new_moderations: {
          message: '',
          status: ''
        },
        moderationModal: false,
        data: {
          id: null,
          slug: '',
          title: '',
          body: '',
          blog_category_id: null,
          tags: [],
          cover_image: null,
          mod_status: '',
          created_at: null,
          moderations: [{
            id: '',
            mod_status: '',
            mod_message: '',
            created_at: null,
            moderateable: {
              name: ''
            }
          }]
        },
        errors: {
          slug: '',
          title: '',
          body: '',
          blog_category_id: ''
        },
        categoryOptions: [],
        tagOptions: [],
        loaded: false,
      }
    },
    created() {
      // this.getCategory()
      // this.getTags()
      this.getData()
    },
    computed: {
      url() {
        return this.new_cover_image ? this.objectUrl :
          this.data.cover_image ? `/storage/blog/${this.data.id}/cover/${this.data.cover_image}` :
          '/images/default-blog-cover.jpg'
      },
      stateTitle() {
        return this.errors.title == 'no-error' ? true : this.errors.title ? false : null
      },
      stateCategory() {
        return this.errors.category == 'no-error' ? true : this.errors.category ? false : null
      },
    },
    methods: {
      handlePublishButton(mod_status) {
        this.new_moderations.status = mod_status
        this.new_moderations.message = ''
        this.moderationModal = true
      },
      trigerConfirmModal(title, body, state, value = '') {
        this.confirmModalTitle = title
        this.confirmModalBody = body
        this.confirmModal = true
        this.confirmModalState = state
        this.confirmModalTempValue = value

      },
      onConfirmModal() {
        if (this.confirmModalState == 'postBlog') {
          this.postData()
        }
      },
      onCancelConfirmModal() {
        this.confirmModalTitle = '',
          this.confirmModalBody = '',
          this.confirmModal = false,
          this.confirmModalState = '',
          this.confirmModalTempValue = ''
      },
      handleUndoCoverImage() {
        this.data.cover_image = this.old_cover_image
        this.objectUrl = null
        this.new_cover_image = null
        this.$refs.fileCoverImage.reset()
      },
      handleRemoveCoverImage() {
        this.data.cover_image = null
        this.objectUrl = null
        this.new_cover_image = null
        this.$refs.fileCoverImage.reset()

      },
      onFileChange(e) {
        const file = e.target.files[0];
        // console.log(file);
        if (file.size > 1024 * 1024) {
          e.preventDefault()
          this.$refs.fileCoverImage.reset()
          return
        }
        // this.data.cover_image = file.name
        this.new_cover_image = file.name
        this.objectUrl = URL.createObjectURL(file);

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
      getData() {
        axios.get(`api/blog/${this.$route.params.blogId}`)
          .then((response) => {
            console.log(response.data)
            const editCategory = (category) => {
              return category.map(item => {
                var temp = Object.assign({}, item);
                temp['value'] = temp.id,
                  temp['text'] = temp.category
                // temp.name = 'my name '+temp.name;
                return temp;
              });
            }
            this.data = response.data.blog
            this.categoryOptions = editCategory(response.data.categories)
            this.tagOptions = response.data.tags
            this.old_cover_image = response.data.blog.cover_image
            this.loaded = true
          })
          .catch((error) => {
            console.log(error);
          })
      },
      postData() {
        let self = this
        axios.patch(`api/blog/${this.data.id}`, {
            data: this.data,
            moderation: this.new_moderations
          })
          .then((response) => {
            console.log(response.data)

            if (self.old_cover_image && !self.data.cover_image && !self.new_cover_image) {
              console.log('delete')
              self.deleteCover(self.data.id)
              return
            }
            if (self.old_cover_image && self.new_cover_image) {
              console.log('update')
              self.updateCover(self.data.id)
              return
            }
            if (!self.old_cover_image && self.new_cover_image) {
              console.log('upload')
              self.uploadCover(self.data.id)
              return
            }
            console.log('no action')
            self.getData()
            // this.$refs.upload.start(response.data.blog_id)
          })
          .catch((error) => {
            console.log(error);
          })
      },
      uploadCover(blogId) {
        // console.log(this.url);
        let formData = new FormData();
        let self = this
        formData.append('file', this.file)
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
            self.uploadPercentage = 0
            self.old_cover_image = self.new_cover_image
            self.data.cover_image = self.new_cover_image
            self.new_cover_image = null
            self.getData()
          })
          .catch((error) => {
            console.log(error);
          })

      },
      updateCover(blogId) {
        // console.log(this.url);
        let formData = new FormData();
        let self = this
        formData.append('file', this.file)
        axios.post(`api/file/blog-cover-image/update/${blogId}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: function (progressEvent) {
              this.uploadPercentage = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total));
            }.bind(this)
          })
          .then((response) => {
            console.log(response.data)
            self.uploadPercentage = 0
            self.old_cover_image = self.new_cover_image
            self.data.cover_image = self.new_cover_image
            self.new_cover_image = null
            self.getData()
          })
          .catch((error) => {
            console.log(error);
          })

      },
      deleteCover(blogId) {
        let self = this
        axios.delete(`api/file/blog-cover-image/${blogId}`)
          .then((response) => {
            console.log(response.data)
            self.old_cover_image = null
            self.getData()
          })
          .catch((error) => {
            console.log(error);
          })
      },
    }
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
