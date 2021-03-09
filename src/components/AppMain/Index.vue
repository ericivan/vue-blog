<template>
  <section class="app-main">
    <router-view :key="key"/>
  </section>
</template>

<script>
  export default {
    name: "AppMain",
    computed:{
      key(){
        console.log(this.$route.path)
        return this.$route.path;
      }
    }
  }
</script>

<style scoped lang="scss">

  .app-main{

  }
</style>
