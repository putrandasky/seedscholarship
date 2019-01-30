<template>
  <!-- <ol class="breadcrumb">
    <li class="breadcrumb-item" :key="index" v-for="(item, index) in list">
      <span class="active" v-if="isLast(index)">{{ showName(item) }}</span> -->
      <!-- <router-link :to="item" v-else>{{ showName(item) }}</router-link> -->
    <!-- </li>
  </ol> -->
  <strong class="breadcrumb d-lg-none">
    {{project.project_name}}
  </strong>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data(){
    return{
      project:'',
    }
  },
  created(){

  },
    watch:{
      checkProject(){
        this.project = this.$store.state.project
      }
    },  
    computed:{
    checkProject(){
      return this.$store.state.project
    }
  },
  methods: {

    isLast (index) {
      return index === this.list.length - 1
    },
    showName (item) {
      if (item.meta && item.meta.label) {
        item = item.meta && item.meta.label
      }
      if (item.name) {
        item = item.name
      }
      return item
    }
  }
}
</script>
