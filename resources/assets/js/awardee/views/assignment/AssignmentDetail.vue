<template>
<div>
    <b-card>
        <div slot="header" class="text-center">
            <strong>ASSIGNMENT DETAIL</strong>
        </div>
        <!-- <h3 class="card-title text-center">Lorem Ipsum</h3> -->
        <b-container fluid>

            <dl class="row">
                <dt class="col-sm-2">Title</dt>
                <dd class="col-sm-10">
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                </dd>
            </dl>
            <dl class="row">
                <dt class="col-sm-2">Closing Date</dt>
                <dd class="col-sm-10">
                    <span>22-July-2019</span>
                </dd>
            </dl>
            <dl class="row">
                <dt class="col-sm-2">Created Date</dt>
                <dd class="col-sm-10">
                    <span>22-July-2019</span>
                </dd>
            </dl>
            <dl class="row">
                <dt class="col-sm-2">Status</dt>
                <dd class="col-sm-10">
                    <span>Active</span>
                </dd>
            </dl>
            <dl class="row">
                <dt class="col-sm-12">Description</dt>
                <dd class="col-sm-12">
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorum libero incidunt minima
                        aperiam nobis temporibus delectus non? Tempora nulla nisi voluptatem est suscipit repudiandae,
                        illo ipsum praesentium nemo doloribus?</span>
                </dd>
            </dl>
        </b-container>
    </b-card>
<submission-list/>
</div>
</template>
<script>
import SubmissionList from './AssignmentSubmissionList'
    export default {
        name: 'AssignmentDetail',
        components:{
            SubmissionList
        },
        data: function () {
            return {}
        },
        created() {},
        methods: {},
    }

</script>
<style>
</style>
