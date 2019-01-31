<template>
    <b-card v-show="loaded">
        <div slot="header" class="text-center">
            <strong>BLOG TAGS</strong>
        </div>
        <b-row>
            <b-col sm="12">
                <b-alert variant="info" :show="true">
                    <h6 class="text-center">
                        This page supposed to create tags that will used in blog.
                    </h6>
                </b-alert>
            </b-col>
            <b-col xl="3">
                <h6>Create New Blog Tags</h6>
                <b-form-input id="category" v-model="input.tag" class="mb-2" placeholder="Tags"></b-form-input>
                <b-form-input id="description" v-model="input.description" class="mb-2" placeholder="Description"></b-form-input>
                <b-btn class="float-right" variant="success" @click="trigerConfirmModal(
            'Add New Blog Tags',
            'Are You Sure To Add New Blog Tags?',
            'post'
          )">Add</b-btn>
            </b-col>
            <b-col xl="9">
                <h6>Available Blog Tags</h6>
                <b-alert variant="warning" :show="data.length == 0">
                    <h1 class="lead text-center">
                        THERE IS NO AVAILABLE TAGS.
                    </h1>
                </b-alert>
                <!-- <table v-if="data.length !== 0"> -->
                <div style="overflow-y:auto" v-show="data.length !== 0">

                    <table class="table table-bordered">
                        <thead>
                            <tr class="table-primary">
                                <th style="width:50px;min-width:50px"><strong>No</strong></th>
                                <th style="width:200px;min-width:200px"><strong>Tags</strong></th>
                                <th style="min-width:200px"><strong>Description</strong></th>
                                <th class="text-center" style="width:80px;min-width:80px">Count</th>
                                <th style="width:100px;min-width:100px"></th>
                                <th style="width:50px;min-width:50px"></th>
                            </tr>
                        </thead>
                    </table>
                    <draggable v-model="data" :options="dragOptions" :move="onMove" @update="isChanged = true" @start="isDragging=true"
                        @end="isDragging=false">
                        <transition-group type="transition" :name="'flip-list'" tag="div">
                            <table v-for="(v,i) in data" :key="v.id" class="table table-bordered table-sm">
                                <tbody>
                                    <tr>
                                        <td class="text-center" style="width:50px;min-width:50px">
                                            {{i+1}}
                                        </td>
                                        <td style="width:200px;min-width:200px">
                                            <b-form-input v-model="v.name" size="sm"></b-form-input>
                                        </td>
                                        <td style="min-width:200px">
                                            <b-form-input v-model="v.description" size="sm"></b-form-input>
                                        </td>
                                        <td class="text-center" style="width:80px;min-width:80px">
                                            {{v.blogs_count}}
                                        </td>
                                        <td class="text-center" style="width:100px;min-width:100px">
                                            <b-button-group>
                                                <b-btn variant="success" @click="trigerConfirmModal(
                                            'Edit Tags',
                                            'Are You Sure To Edit This Tags?',
                                            'update',
                                            {id:v.id,tag:v.name,description:v.description}
                                            )">
                                                    <i class="fa fa-edit" size="sm"></i></b-btn>
                                                <b-btn variant="danger" @click="trigerConfirmModal(
                                            'Delete Tags',
                                            'Are You Sure To Delete This Tags ?',
                                            'delete',
                                            v.id
                                            )">
                                                    <i class="fa fa-trash" size="sm"></i></b-btn>
                                            </b-button-group>
                                        </td>
                                        <td style="width:50px;min-width:50px" class="my-handle text-center">
                                            <i class="fa fa-arrows-alt "></i>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </transition-group>
                    </draggable>
                    <!-- </b-row> -->
                    <div class="text-right">
                        <b-button variant="warning" size="sm" v-show="isChanged" @click="orderList">Cancel</b-button>
                        <b-button variant="success" size="sm" v-show="isChanged" @click="trigerConfirmModal(
          'Reorder Tags',
          'Are You Sure to Reordering This Tags',
          'reordering'
        )">ApplyThis
                            Order</b-button>
                    </div>
                </div>
            </b-col>
            <b-modal :no-close-on-esc="true" :hide-header-close="true" :no-close-on-backdrop="true" :title="confirmModalTitle"
                v-model="confirmModal" @ok="onConfirmModal" @cancel="onCancelConfirmModal">
                {{confirmModalBody}}
            </b-modal>
        </b-row>
    </b-card>
</template>
<script>
    import draggable from 'vuedraggable'
    export default {
        name: 'AppBlogTag',
        components: {
            draggable,
        },
        data: function () {
            return {
                loaded: false,
                data: [],
                input: {
                    tag: '',
                    description: ''
                },
                confirmModal: false,
                confirmModalTitle: '',
                confirmModalBody: '',
                confirmModalState: '',
                confirmModalTempValue: '',
                editable: true,
                isDragging: false,
                delayedDragging: false,
                isChanged: false,
            }
        },
        watch: {
            isDragging(newValue) {
                if (newValue) {
                    this.delayedDragging = true;
                    return;
                }
                this.$nextTick(() => {
                    this.delayedDragging = false;
                });
            }
        },
        created() {
            this.getData()
        },
        computed: {
            dragOptions() {
                return {
                    animation: 0,
                    group: "description",
                    disabled: !this.editable,
                    ghostClass: "ghost",
                    handle: ".my-handle"
                };
            },
        },
        methods: {
            orderList() {
                this.isChanged = false
                this.data = this.data.sort((one, two) => {
                    return one.order - two.order;
                });
            },
            onMove({
                relatedContext,
                draggedContext
            }) {
                const relatedElement = relatedContext.element;
                const draggedElement = draggedContext.element;
                return (
                    (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
                );
            },
            test(val) {
                console.log(val[0]);

            },
            trigerConfirmModal(title, body, state, value = '') {
                this.confirmModalTitle = title
                this.confirmModalBody = body
                this.confirmModal = true
                this.confirmModalState = state
                this.confirmModalTempValue = value

            },
            onConfirmModal() {
                if (this.confirmModalState == 'post') {
                    this.postData()
                }
                if (this.confirmModalState == 'update') {
                    this.updateData()
                }
                if (this.confirmModalState == 'delete') {
                    this.deleteData()
                }
                if (this.confirmModalState == 'reordering') {
                    this.reorderData()
                }
            },
            onCancelConfirmModal() {
                this.confirmModalTitle = '',
                    this.confirmModalBody = '',
                    this.confirmModal = false,
                    this.confirmModalState = '',
                    this.confirmModalTempValue = ''
            },
            getData() {
                this.$store.dispatch('stateLoading', true)
                axios.get(`api/blog-tag`)
                    .then((response) => {
                        console.log(response.data)
                        this.data = response.data
                        this.loaded = true
                        this.$store.dispatch('stateLoading', false)
                        this.loaded = true
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            reorderData() {
                this.$store.dispatch('stateLoading', true)
                axios.post(`api/blog-tag/reordering`, {
                        data: this.data
                    })
                    .then((response) => {
                        console.log(response.data)
                        this.$snotify.success(response.data.status, "SUCCESS");
                        this.$store.dispatch('stateLoading', false)
                        this.isChanged = false
                    })
                    .catch((error) => {
                        this.$snotify.error(error.response.statusText, "ERROR");
                        this.$store.dispatch('stateLoading', false)
                    })
            },
            postData() {
                this.$store.dispatch('stateLoading', true)
                axios.post(`api/blog-tag`, {
                        tag: this.input.tag,
                        description: this.input.description
                    })
                    .then((response) => {
                        console.log(response.data)
                        this.getData()
                        this.$snotify.success(response.data.status, "SUCCESS");
                        this.input.description = ''
                        this.input.tag = ''
                        this.$store.dispatch('stateLoading', false)
                    })
                    .catch((error) => {
                        this.$snotify.error(error.response.data.status, "ERROR");
                        this.$store.dispatch('stateLoading', false)
                    })
            },
            updateData() {
                this.$store.dispatch('stateLoading', true)
                axios.patch(`api/blog-tag/${this.confirmModalTempValue.id}`, {
                        tag: this.confirmModalTempValue.tag,
                        description: this.confirmModalTempValue.description,
                    })
                    .then((response) => {
                        this.getData()
                        this.confirmModalTempValue = ''
                        this.$snotify.success(response.data.status, "SUCCESS");
                        this.$store.dispatch('stateLoading', false)
                    })
                    .catch((error) => {
                        this.getData()
                        this.confirmModalTempValue = ''
                        this.$snotify.error(error.response.data.status, "ERROR");
                        this.$store.dispatch('stateLoading', false)
                    })
            },
            deleteData() {
                console.log(this.confirmModalTempValue);
                this.$store.dispatch('stateLoading', true)
                axios.delete(
                        `api/blog-tag/${this.confirmModalTempValue}`)
                    .then((response) => {
                        console.log(response.data)
                        this.getData()
                        this.confirmModalTempValue = ''
                        this.$snotify.success(response.data.status, "SUCCESS");
                        this.$store.dispatch('stateLoading', false)
                    })
                    .catch((error) => {
                        console.log(error);
                        this.confirmModalTempValue = ''
                        this.$snotify.success(response.data.status, "ERROR");
                        this.$store.dispatch('stateLoading', false)
                    })
            }

        },
    }

</script>
<style scoped>
    .flip-list-move {
        transition: transform 0.5s;
    }

    .no-move {
        transition: transform 0s;
    }

    .ghost {
        opacity: 0.5;
        background: #c8ebfb;
    }

    .my-handle {
        cursor: move;
    }

</style>
