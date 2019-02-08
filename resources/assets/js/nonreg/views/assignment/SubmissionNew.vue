<template>
    <b-card>
        <div slot="header" class="text-center">
            <strong>SUBMIT ASSIGNMENT FOR LOREM IPSUM</strong>
        </div>
        <b-form-group label="Title (Required)" label-for="title" :invalid-feedback="errors.title" :state="stateTitle">
            <b-form-input required :state="stateTitle" id="title" type="text" placeholder="Input title of your submission for this assignment"
                v-model="input.title"></b-form-input>
        </b-form-group>
        <b-form-group label="Description (Required but not mandatory)" label-for="description">
            <vue-pell-editor ref="description" v-model="input.description" :actions="editorOptions" :content="input.description"
                placeholder="Input description of your submission for this assignment" :style-with-css="true" :classes="editorClasses"
                default-paragraph-separator="div" />
        </b-form-group>
    </b-card>
</template>
<script>
    import PellEditor from "../_share/PellEditorOption"
    export default {
        name: 'SubmissionNew',
        data: function () {
            return {
                editorOptions: PellEditor.options,
                editorClasses: PellEditor.classes,
                input: {
                    title: '',
                    description: ''
                },
                errors: {
                    item: '',
                    description: ''
                }
            }
        },
        created() {},
        methods: {},
    }

</script>
<style scoped>
  .pell-content {
    height: unset;
    min-height: 50px;
  }
</style>
