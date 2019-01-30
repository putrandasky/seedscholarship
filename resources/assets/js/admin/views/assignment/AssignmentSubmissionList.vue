<template>
    <b-card>
        <div slot="header" class="text-center">
            <strong>SUBMISSION LIST</strong>
        </div>
        <div class="text-right mb-3">
            <b-button size="sm" variant="primary" @click="handleSubmitAssignmentButton">Submit Assignment</b-button>
        </div>
        <b-row>
            <b-col sm="6" md="4" v-for="(v) in data" :key="v.id">
                <b-card>
                    <h5 class="card-title border-bottom pb-2">Title: {{v.title}}</h5>
                    <p class="card-text">
                        Submitted by : {{v.name}} <br /> Date : {{v.date}}
                    </p>
                    <div class="text-right">
                        <b-button size="sm" variant="secondary">Detail</b-button>
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </b-card>
</template>
<script>
    export default {
        name: 'AssignmentDetailSubmit',
        data: function () {
            return {
                data: [{
                        id: 1,
                        name: 'Radityo Putra',
                        title: 'Lorem ipsum dolor',
                        date: '22-july-2019'
                    },
                    {
                        id: 1,
                        name: 'Radityo Putra',
                        title: 'Lorem ipsum dolor',
                        date: '22-july-2019'
                    },
                    {
                        id: 1,
                        name: 'Radityo Putra',
                        title: 'Lorem ipsum dolor',
                        date: '22-july-2019'
                    },
                    {
                        id: 1,
                        name: 'Radityo Putra',
                        title: 'Lorem ipsum dolor',
                        date: '22-july-2019'
                    },
                ]
            }
        },
        created() {},
        methods: {
            handleSubmitAssignmentButton(){
                this.$router.push({name:'SubmissionNew', params:{assignmentId:this.$route.params.assignmentId}})
            }
        },
    }

</script>
<style>
</style>
