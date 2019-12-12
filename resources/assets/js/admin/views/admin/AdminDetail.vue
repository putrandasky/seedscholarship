<template>
  <slide-y-up-transition>
    <b-row v-show="loaded">
      <b-col md="3">
        <b-card no-body>
          <div slot="header" class="text-center">
            <strong>Profile Picture</strong>
          </div>
          <b-card-img :src="url" style="border-radius:unset"> </b-card-img>
          <b-btn
            v-show="data.photo || new_profile_picture"
            class="btn--corner"
            variant="danger"
            size="sm"
            style="top:47px"
            @click="handleRemoveCoverImage"
          >
            <i class="fa fa-close"></i>
          </b-btn>
          <b-btn
            v-show="old_profile_picture && new_profile_picture"
            class="btn--corner"
            variant="warning"
            size="sm"
            style="top:47px;right:22px"
            @click="handleUndoCoverImage"
          >
            <i class="fa fa-undo"></i>
          </b-btn>
          <b-progress
            v-show="uploadPercentage > 0"
            height="5px"
            :value="uploadPercentage"
            variant="primary"
          ></b-progress>
          <b-card-body v-show="!data.photo && !new_profile_picture">
            <b-form-file
              accept="image/jpeg, image/png, image/gif"
              ref="fileProfilePicture"
              v-model="file"
              placeholder="Choose a file..."
              @change="onFileChange"
            ></b-form-file>
          </b-card-body>
          <!-- <upload-cover-image ref="upload" /> -->
        </b-card>
      </b-col>
      <b-col md="9">
        <b-card>
          <div slot="header" class="text-center">
            <strong>Profile Data</strong>
          </div>
          <b-form-group
            label="Full Name"
            label-for="name"
            :label-cols="3"
            :horizontal="true"
            :invalid-feedback="errors.name"
            :state="stateName"
          >
            <b-form-input
              id="name"
              type="text"
              :state="stateName"
              v-model="data.name"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label="Angkatan"
            label-for="angkatan"
            :label-cols="3"
            :horizontal="true"
            :invalid-feedback="errors.year"
            :state="stateYear"
          >
            <b-form-input
              id="angkatan"
              type="text"
              :state="stateYear"
              v-model="data.year"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label="Email"
            label-for="email"
            :label-cols="3"
            :horizontal="true"
            :invalid-feedback="errors.email"
            :state="stateEmail"
          >
            <b-form-input
              id="email"
              type="email"
              :state="stateEmail"
              v-model="data.email"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label="Phone Number"
            label-for="number"
            :label-cols="3"
            :horizontal="true"
            :invalid-feedback="errors.phone"
            :state="statePhone"
          >
            <b-form-input
              id="number"
              type="text"
              :state="statePhone"
              v-model="data.phone"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label="Department"
            label-for="department"
            :label-cols="3"
            :horizontal="true"
            :invalid-feedback="errors.department_id"
            :state="stateDepartment_id"
          >
            <b-form-select
              plain
              id="department"
              :state="stateDepartment_id"
              v-model="data.department_id"
              :options="departmentOptions"
            >
              <template slot="first">
                <option :value="null" disabled
                  >-- Please Select Department --</option
                >
              </template>
            </b-form-select>
          </b-form-group>
          <b-button class="float-right" variant="primary" @click="postData"
            >Update Data</b-button
          >
          <div slot="footer">
            <small class="text-muted"
              >Registered : {{ data.created_at }} | Last updated :
              {{ data.updated_at }}</small
            >
          </div>
        </b-card>
      </b-col>
    </b-row>
  </slide-y-up-transition>
</template>
<script>
export default {
  name: "AdminDetail",
  data: function() {
    return {
      loaded: false,
      uploadPercentage: 0,
      new_profile_picture: null,
      old_profile_picture: null,
      file: null,
      objectUrl: null,
      data: {
        name: "",
        email: "",
        phone: "",
        department_id: null,
        year: null,
        created_at: null,
        updated_at: null,
        photo: null
      },
      errors: {
        name: "",
        year: "",
        email: "",
        department_id: null
      },
      departmentOptions: []
    };
  },
  created() {
    this.getDepartment();
    this.getData();
    this.$store.dispatch("storeBreadcrumbData", {
      linkBackButton: "/admin/all",
      currentPageName: "Admin Detail"
    });
  },
  computed: {
    url() {
      return this.new_profile_picture
        ? this.objectUrl
        : this.data.photo
        ? `/storage/user/${this.data.id}/profile-picture/${this.data.photo}`
        : "/images/default-user.jpg";
    },
    stateName() {
      return this.errors.name == "no-error"
        ? true
        : this.errors.name
        ? false
        : null;
    },
    stateEmail() {
      return this.errors.email == "no-error"
        ? true
        : this.errors.email
        ? false
        : null;
    },
    stateYear() {
      return this.errors.year == "no-error"
        ? true
        : this.errors.year
        ? false
        : null;
    },
    statePhone() {
      return this.errors.phone == "no-error"
        ? true
        : this.errors.phone
        ? false
        : null;
    },
    stateDepartment_id() {
      return this.errors.department_id == "no-error"
        ? true
        : this.errors.department_id
        ? false
        : null;
    }
  },
  methods: {
    getDepartment() {
      axios
        .get(`api/department`)
        .then(response => {
          response.data.forEach(function(obj) {
            obj.value = obj.id;
            obj.text = obj.department;
            delete obj.id;
            delete obj.department;
          });
          this.departmentOptions = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    handleUndoCoverImage() {
      this.data.photo = this.old_profile_picture;
      this.objectUrl = null;
      this.new_profile_picture = null;
      this.$refs.fileProfilePicture.reset();
    },
    handleRemoveCoverImage() {
      this.data.photo = null;
      this.objectUrl = null;
      this.new_profile_picture = null;
      this.$refs.fileProfilePicture.reset();
    },
    onFileChange(e) {
      const file = e.target.files[0];
      // console.log(file);
      if (file.size > 1024 * 1024) {
        e.preventDefault();
        this.$refs.fileProfilePicture.reset();
        return;
      }
      // this.data.photo = file.name
      this.new_profile_picture = file.name;
      this.objectUrl = URL.createObjectURL(file);
    },
    getData() {
      let self = this;
      axios
        .get(`api/user-admin/${this.$route.params.userId}`)
        .then(response => {
          // console.log(response.data)
          self.data = response.data;
          this.old_profile_picture = response.data.photo;
          this.loaded = true;
        })
        .catch(error => {
          console.log(error);
        });
    },
    postData() {
      let self = this;
      axios
        .patch(`api/user-admin/${this.$route.params.userId}`, this.data)
        .then(response => {
          // console.log(response.data)
          this.$snotify.success(`Profile Updated`, "SUCCESS");

          if (
            self.old_profile_picture &&
            !self.data.photo &&
            !self.new_profile_picture
          ) {
            // console.log('delete')
            self.deleteCover(self.data.id);
            return;
          }
          if (self.old_profile_picture && self.new_profile_picture) {
            // console.log('update')
            self.updateCover(self.data.id);
            return;
          }
          if (!self.old_profile_picture && self.new_profile_picture) {
            // console.log('upload')
            self.uploadCover(self.data.id);
            return;
          }
          // console.log('no action')
          self.getData();
          // this.$refs.upload.start(response.data.blog_id)
        })
        .catch(error => {
          console.log(error);
        });
    },
    uploadCover(blogId) {
      // console.log(this.url);
      let formData = new FormData();
      let self = this;
      formData.append("file", this.file);
      axios
        .post(`api/file/admin-cover-image/${blogId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          onUploadProgress: function(progressEvent) {
            this.uploadPercentage = parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            );
          }.bind(this)
        })
        .then(response => {
          // console.log(response.data)
          self.uploadPercentage = 0;
          self.old_profile_picture = self.new_profile_picture;
          self.data.photo = self.new_profile_picture;
          self.new_profile_picture = null;
          this.$snotify.success(`New Photo Added`, "SUCCESS");
          self.getData();
        })
        .catch(error => {
          console.log(error);
        });
    },
    updateCover(blogId) {
      // console.log(this.url);
      let formData = new FormData();
      let self = this;
      formData.append("file", this.file);
      axios
        .post(`api/file/admin-cover-image/update/${blogId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          onUploadProgress: function(progressEvent) {
            this.uploadPercentage = parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            );
          }.bind(this)
        })
        .then(response => {
          // console.log(response.data)
          self.uploadPercentage = 0;
          self.old_profile_picture = self.new_profile_picture;
          self.data.photo = self.new_profile_picture;
          self.new_profile_picture = null;
          this.$snotify.success(`Photo Updated`, "SUCCESS");
          self.getData();
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteCover(blogId) {
      let self = this;
      axios
        .delete(`api/file/admin-cover-image/${blogId}`)
        .then(response => {
          // console.log(response.data)
          self.old_profile_picture = null;
          this.$snotify.success(`Photo Deleted`, "SUCCESS");
          self.getData();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style></style>
