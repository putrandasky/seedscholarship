<template>
  <div class="example-drag">
    <div class="upload">
      <div v-if="files.length" class="pb-3" style="border: 2px dashed grey; ">

        <div class="mb-1 p-1" v-for="(file) in files" :key="file.id" style="position:relative">
          <img :src="file.blob" style="max-width:100%" />
          <div>
            <span><strong>File Name :</strong> {{file.name}}</span>
          </div>
          <div st>
            <span><strong>Size :</strong> {{file.size | formatSize}} </span>
            <span><strong>Status :</strong> </span>
            <span v-if="file.error">{{file.error}}</span>
            <span v-else-if="file.success">success</span>
            <span v-else-if="file.active">{{file.progress}}</span>
            <span v-else></span>
            <b-button class="btn--corner-3" size="sm" variant="danger" @click.prevent="$refs.upload.remove(file)"><i
                class="fa fa-times"></i></b-button>
          </div>
          <b-progress height="2px" v-if="file.active || file.success || file.error" :value="file.progress * 1" variant="primary"></b-progress>
        </div>
      </div>
      <div v-if="!files.length" class="text-center p-3" style="border: 2px dashed grey">
        <h4 class="text-muted">Drop photo anywhere to upload</h4>
        <h6 class="text-muted">(Accepted Files : jpeg/jpg/png & Max Size : 1mb)</h6>
        <!-- <label for="file" class="btn btn-lg btn-primary">Select Files</label> -->
      </div>

      <div v-show="$refs.upload && $refs.upload.dropActive" class="drop-active">
        <h3>Drop files to upload</h3>
      </div>

      <div class="example-btn mt-2 float-right">
        <!-- <button type="button" class="btn btn-success btn-sm" v-if="!$refs.upload || !$refs.upload.active"
          @click.prevent="$refs.upload.active = true">
          <i class="fa fa-arrow-up" aria-hidden="true"></i>
          Start Upload
        </button> -->
        <!-- <button type="button" class="btn btn-danger btn-sm" v-if="$refs.upload || $refs.upload.active" @click.prevent="$refs.upload.active = false">
          <i class="fa fa-stop" aria-hidden="true"></i>
          Stop Upload
        </button> -->
        <file-upload class="btn btn-primary btn-sm" :post-action="`api/file/blog/cover_photo/${blogId}`" :multiple="false" :drop="true" :drop-directory="true"
          v-model="files" ref="upload" @input-filter="inputFilter" @input-file="inputFile">
          <i class="fa fa-plus"></i>
          Select files
        </file-upload>
      </div>
    </div>
  </div>
</template>
<script>
  const VueUploadComponent = require('vue-upload-component')

  export default {
    name: 'BlogUploadCoverImage',
    props: ['propUrl'],
    components: {
      'file-upload': VueUploadComponent
    },
    data: function () {
      return {
        data: [],
        files: [],
        blogId:null
      }
    },
    created() {},
    watch:{
      // propUrl:function(newVal,oldVal){
      //   this.url = newVal
      //   this.$refs.upload.active = true
      // }
    },
    methods: {
      start(blogId) {
        this.blogId = blogId

        console.log(this.blogId);
        setTimeout(() => {

          this.$refs.upload.active = true
        }, 1000);

      },
      inputFile(newFile, oldFile) {
        if (newFile && !oldFile) {
          // Add file
        }

        if (newFile && oldFile) {
          // Update file

          // Start upload
          if (newFile.active !== oldFile.active) {
            console.log('Start upload', newFile.active, newFile)

            // min size
            // if (newFile.size >= 0 && newFile.size < 5000 * 1024) {
            //   newFile = this.$refs.upload.update(newFile, {
            //     error: 'size'
            //   })
            // }
          }

          // Upload progress
          if (newFile.progress !== oldFile.progress) {
            console.log('progress', newFile.progress, newFile)
          }

          // Upload error
          if (newFile.error !== oldFile.error) {
            console.log('error', newFile.error, newFile)
          }

          // Uploaded successfully
          if (newFile.success !== oldFile.success) {
            console.log('success', newFile.success, newFile)
            // this.$emit('uploaded',newFile.name)
          }
        }

        if (!newFile && oldFile) {
          // Remove file

          // Automatically delete files on the server
          if (oldFile.success && oldFile.response.id) {
            // $.ajax({
            //   type: 'DELETE',
            //   url: '/file/delete?id=' + oldFile.response.id,
            // });
          }
        }

        // Automatic upload
        // if (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error) {
        //   if (!this.$refs.upload.active) {
        //     this.$refs.upload.active = true
        //   }
        // }
      },
      inputFilter(newFile, oldFile, prevent) {
        if (newFile && !oldFile) {
          // Add file

          // Filter non-image file
          // Will not be added to files
          if (!/\.(jpeg|jpe|jpg|png|webp)$/i.test(newFile.name)) {
            return prevent()

          }
          if (newFile.size > 1000 * 1024) {

            return prevent()
          }

          // Create the 'blob' field for thumbnail preview
          newFile.blob = ''
          let URL = window.URL || window.webkitURL
          if (URL && URL.createObjectURL) {
            newFile.blob = URL.createObjectURL(newFile.file)
          }
          console.log(this.files);

          this.$emit('selected', this.files)
        }

        if (newFile && oldFile) {
          // Update file

          // Increase the version number
          if (!newFile.version) {
            newFile.version = 0
          }
          newFile.version++
        }
        // console.log(newFile);

        if (!newFile && oldFile) {
          // Remove file
          console.log('deleted');

          // Refused to remove the file
          // return prevent()
        }
      },
    },
  }

</script>
<style scoped>
  .example-drag label.btn {
    margin-bottom: 0;
    margin-right: 1rem;
  }

  .example-drag .drop-active {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 9999;
    opacity: .6;
    text-align: center;
    background: #000;
  }

  .example-drag .drop-active h3 {
    margin: -.5em 0 0;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 40px;
    color: #fff;
    padding: 0;
  }

</style>
