<template>
    <b-card>
        <div slot="header" class="text-center">
            <strong>ASSIGNNEMT</strong>
        </div>
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
            <b-table stacked="sm" stack style="animation-duration: 1s" small hover :fields="FieldTableItems" :items="filteredItemsData"
                thead-class="thead-light" :sort-by.sync="querySortBy" :sort-desc.sync="querySortDesc" @sort-changed="sortingChanged"
                :current-page="currentPage" :per-page="perPage" @row-clicked="handleRowClicked">
                <template slot="no" slot-scope="data">
                    {{data.index+1+((currentPage-1)*perPage)}}
                </template>
                <template slot="status" slot-scope="data">
                    <b-badge :variant="getBadge(data.item.status)">
                        {{data.item.status}}
                    </b-badge>
                </template>

            </b-table>
        </div>
    </b-card>
</template>
<script>
    import {
        AssignmentFieldTableData
    } from "./AssignmentFieldTableData"
    import {
        instantSearch
    } from "../_share/mixins/instantSearch";
    import {
        OperationPage
    } from "../_share/mixins/OperationPage";
    export default {
        name: 'Assignment',
        mixins: [AssignmentFieldTableData, instantSearch, OperationPage],
        data: function () {
            return {}
        },
        created() {},
        methods: {
            handleRowClicked() {

            }
        },
    }

</script>
<style>
</style>
