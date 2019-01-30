<template>
    <b-row>
        <b-col md="10">

            <b-card>
                <div slot="header" class="text-center">
                    <strong>CREATE NEW BLOG</strong>
                </div>
                <b-form-group label="Slug (Required)" label-for="slug" :invalid-feedback="errors.slug" :state="stateTitle">
                    <b-form-input  required :state="stateTitle" id="slug" type="text" placeholder="Input slug of your post"
                        v-model="input.slug"></b-form-input>
                </b-form-group>
                <b-form-group label="Title (Required)" label-for="title" :invalid-feedback="errors.title" :state="stateTitle">
                    <b-form-input    required :state="stateTitle" id="title" type="text" placeholder="Input title of your post"
                        v-model="input.title"></b-form-input>
                </b-form-group>
                <b-form-group label="Description (Required but not mandatory)" label-for="description">
                    <quill-editor v-model="input.description"> </quill-editor>
                </b-form-group>
            </b-card>
        </b-col>
        <b-col md="2">
            <b-card>
                <div slot="header" class="text-center">
                    <strong>Publish</strong>
                </div>
            </b-card>
            <b-card>
                <div slot="header" class="text-center">
                    <strong>Cover Image</strong>
                </div>
            </b-card>
            <b-card>
                <div slot="header" class="text-center">
                    <strong>Categories</strong>
                </div>
            </b-card>
            <b-card>
                <div slot="header" class="text-center">
                    <strong>Tags</strong>
                </div>
            </b-card>
        </b-col>
    </b-row>
</template>
<script>
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    // import 'quill/dist/quill.bubble.css'

    import {
        quillEditor
    } from 'vue-quill-editor'
    export default {
        name: 'AppBlogNew',
        components: {
            quillEditor
        },
        data: function () {
            return {
                input: {
                    slug: '',
                    title: '',
                    description: ''
                },
                errors: {
                    title: '',
                    description: ''
                }
            }
        },
        created() {},
        methods: {},
    }

</script>
<style lang="css" scoped>

</style>
