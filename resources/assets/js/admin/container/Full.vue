<template>
    <div class="app">
        <vue-snotify></vue-snotify>
        <AppHeader />
        <div class="app-body">
            <Sidebar :navItems="nav" />
            <main class="main">
                <!-- <loading :active.sync="this.$store.state.loading" :can-cancel="false" :height=60 :opacity=0.9 loader='bars'
      transition='fade' :is-full-page="false" /> -->
                <breadcrumb :list="list" />
                <div class="container-fluid mt-3">
                    <!-- <transition :duration="300" name="fade"> -->
                    <router-view></router-view>
                    <!-- </transition> -->
                </div>
            </main>
            <!-- <AppAside/> -->
        </div>
        <AppFooter />
    </div>
</template>

<script>
    import {
        Header as AppHeader,
        Sidebar,
        Aside as AppAside,
        Footer as AppFooter,
        Breadcrumb
    } from '../components/'

    export default {
        name: 'Wrapper',
        components: {
            AppHeader,
            Sidebar,
            AppAside,
            AppFooter,
            Breadcrumb
        },
        data() {
            return {
                nav: [{
                        name: 'Dashboard',
                        url: `/dashboard`,
                        icon: 'fa fa-bar-chart',
                    },
                    {
                        name: 'Assignment',
                        icon: 'fa fa-book',
                        url: `/assignment`,
                        children: [{
                                name: 'All Assignment',
                                icon: 'fa fa-list',
                                url: `/assignment/all`,
                            },
                            {
                                name: 'Add New',
                                icon: 'fa fa-plus',
                                url: `/assignment/new`
                            }
                        ]
                    },
                    {
                        name: 'Blog',
                        icon: 'fa fa-pencil-square-o',
                        url: `/blog`,
                        children: [{
                                name: 'All Blog',
                                icon: 'fa fa-list',
                                url: `/blog/list`,
                            },
                            {
                                name: 'Add New',
                                icon: 'fa fa-plus',
                                url: `/blog/new`
                            },
                            {
                                name: 'Category',
                                icon: 'fa fa-list-alt',
                                url: `/blog/edit-category`
                            },
                            {
                                name: 'Tag',
                                icon: 'fa fa-tags',
                                url: `/blog/edit-tag`
                            }
                        ]
                    },
                    {
                        name: 'Page',
                        icon: 'fa fa-files-o',
                        url: `/page`,
                        children: [{
                                name: 'All Page',
                                icon: 'fa fa-list',
                                url: `/page/all`,
                            },
                            {
                                name: 'Add New',
                                icon: 'fa fa-plus',
                                url: `/page/new`
                            }
                        ]
                    },
                    {
                        name: 'Request',
                        icon: 'fa fa-user-plus',
                        url: `/request`,
                        children: [
                          {
                                name: 'Awardee',
                                icon: 'fa fa-list',
                                url: `/request/awardee`,
                            },
                          {
                                name: 'Nonreg',
                                icon: 'fa fa-list',
                                url: `/request/nonreg`,
                            },
                            {
                                name: 'donor',
                                icon: 'fa fa-list',
                                url: `/request/donor`,
                            }
                        ]
                    },
                    {
                        name: 'Admin',
                        icon: 'fa fa-user-secret',
                        url: `/admin`,
                        children: [{
                                name: 'All Admin',
                                icon: 'fa fa-list',
                                url: `/admin/all`,
                            },
                            {
                                name: 'Department',
                                icon: 'fa fa-list',
                                url: `/admin/department`,
                            },
                            {
                                name: 'Add New',
                                icon: 'fa fa-list',
                                url: `/admin/new`,
                            }
                        ]
                    },
                    {
                        name: 'Users',
                        icon: 'fa fa-users',
                        url: `/user`,
                        children: [
                            {
                                name: 'Awardee',
                                icon: 'fa fa-list',
                                url: `/user/awardee`,
                            },
                            {
                                name: 'Patron',
                                icon: 'fa fa-list',
                                url: `/user/patron`,
                            }
                        ]
                    },

                ]
            }
        },
        created() {
            //   this.$store.dispatch('getProject')
            //   this.$store.dispatch('getSidebarData')
        },
        mounted() {
            // console.log(this.$store.state.tagSidebar);
            // console.log(this.nav[5].children);

        },
        watch: {
            sidebarData() {

                // this.nav[2].children = this.$store.state.sidebarData.categories
                // this.nav[3].children[0].badge.text = this.$store.state.sidebarData.claim.cost_to_client
                // this.nav[3].children[1].badge.text = this.$store.state.sidebarData.claim.cost_from_client
                // this.nav[3].children[2].badge.text = this.$store.state.sidebarData.claim.cost_to_vendor
                // this.nav[3].children[3].badge.text = this.$store.state.sidebarData.claim.cost_from_vendor
                // this.nav[3].children[4].badge.text = this.$store.state.sidebarData.claim.schedule_to_client
                // this.nav[3].children[5].badge.text = this.$store.state.sidebarData.claim.schedule_from_client
                // this.nav[3].children[6].badge.text = this.$store.state.sidebarData.claim.schedule_to_vendor
                // this.nav[3].children[7].badge.text = this.$store.state.sidebarData.claim.schedule_from_vendor
                // this.nav[5].children = this.$store.state.sidebarData.tags
            }

        },
        computed: {
            name() {
                // return this.$route.name
            },
            list() {
                // return this.$route.matched
            },
            sidebarData() {
                // return this.$store.state.sidebarData
            },
        },
        method: {}
    }

</script>
<style>
    .ql-container,
  .ql-editor {
    min-height: 25em
  }

    .dropdown.v-select>.dropdown-toggle {
        border-radius: unset
    }

    .pell-actionbar {
        border-color: #c2cfd6;
        border-style: solid;
        border-width: 1px 1px 0px 1px;
    }

    .pell-content {
        height: unset;
        min-height: 100px;
    }

    /*.fade-select-enter-active,
  .fade-select-leave-active {
    transition: opacity .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .fade-select-enter,
  .fade-select-leave-to {
    opacity: 0;
  }*/

    table.table-hover>tbody>tr {
        cursor: pointer;
    }

    .customBox {
        display: none;
    }

    .customBox+label {
        cursor: pointer;
        position: fixed;
        right: 1em;
        bottom: 1em;
        background-color: tomato;
        height: 3em;
        width: 3em;
        border-radius: 50%;
        z-index: 2;
    }

    .customBox+label:before,
    .customBox+label:after {
        position: absolute;
        content: '';
        height: 2em;
        width: .25em;
        background-color: #fff;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        border-radius: .5em;
        transition: all .25s;
    }

    .customBox+label:before {
        height: 2em;
        width: .25em;
    }

    .customBox+label:after {
        width: 2em;
        height: .25em;
    }

    .customBox:checked+label:before {
        transform: rotatez(-45deg);
    }

    .customBox:checked+label:after {
        transform: rotatez(-45deg);
    }

    .one,
    .two,
    .three {
        cursor: pointer;
        position: fixed;
        right: 1em;
        bottom: 1.5em;
        padding: 1em;
        width: 3em;
        height: 3em;
        border-radius: 50%;
        opacity: 0;
        z-index: 1;
        transform: rotateZ(90deg);
        font-size: 1em;
        color: #fff;
        transition-property: all;
        transition-duration: .35s;
        transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
        display: grid;
        justify-content: center
    }

    .customBox:checked~.one,
    .customBox:checked~.two,
    .customBox:checked~.three {
        opacity: 1;
    }

    .customBox:checked~.one {
        background-color: purple;
        transform: translateY(-15em);
        transition-delay: .2s;
    }

    .customBox:checked~.two {
        background-color: slateblue;
        transform: translateY(-4em);
        transition-delay: .1s;
    }

    .customBox:checked~.three {
        background-color: mediumorchid;
        transform: translateY(-8em);
    }

    .customBox:checked~.one:hover,
    .customBox:checked~.two:hover,
    .customBox:checked~.three:hover {
        opacity: .9;
    }

    .float-button {
        position: fixed;
        width: 60px;
        height: 60px;
        bottom: 40px;
        right: 40px;
        background-color: tomato;
        color: #FdFF;
        border-radius: 50px;
        text-align: center;
        box-shadow: 2px 2px 3px #999;
        cursor: pointer;
        margin: 1px;
        z-index: 100;
    }

    .float-button:hover {
        opacity: .9;
    }

    .float-button>i {
        margin-top: 18px;
        font-size: 27px;

    }

    .btn--corner {
        position: absolute;
        top: 1px;
        right: 1px;
        padding: 0rem 0.2rem;
    }

    .btn--corner-3 {
        position: absolute;
        top: 3px;
        right: 3px;
        padding: 0rem 0.2rem;
    }

    .btn--xs {
        padding: 0rem 0.2rem;
    }

    .dimmer {
        position: absolute;
        z-index: 100;
        height: 100%;
        width: 100%;
        left: 0;
        vertical-align: middle;
        top: 0;
        display: grid;
        align-content: center;
        background-color: rgba(255, 255, 255, .85);
    }

    dl {
        margin-bottom: 1rem;
        border: 1px solid #A4B7C1;
        height: 100%;
    }

    dl dt {
        /* background: #C2CFD6; */
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;

    }

    dl dd {
        /* border-left: 1px solid #A4B7C1; */
        margin-bottom: 0.5rem;
        margin-top: 0.5rem
    }



    .fade-leave-active {
        transition: opacity ease-in;
    }

    .fade-enter-active,
        {
        transition: opacity ease-out;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .page-item.active .page-link,
    .pagination-datatables li.active .page-link,
    .pagination li.active .page-link,
    .page-item.active .pagination-datatables li a,
    .pagination-datatables li .page-item.active a,
    .pagination-datatables li.active a,
    .page-item.active .pagination li a,
    .pagination li .page-item.active a,
    .pagination li.active a {
        z-index: 0;
    }

    @media (min-width: 1024px) {

        .modal-xl {
            max-width: 1000px;
        }
    }

    @media (min-width: 576px) {

        .truncate-cell {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            max-width: 1px;
        }
    }

</style>
