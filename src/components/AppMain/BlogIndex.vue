<template>

  <div class="b-main">
    <div class="blog-container">
      <header>
        <h1>分类 学习笔记下的文章</h1>
      </header>

      <div class="post-pannel">
        <BreakCrumb :router-link="RouterLink"></BreakCrumb>
      </div>
    </div>

    <div class="right-side">
      Right Side
    </div>
  </div>

</template>

<script>
  import BreakCrumb from '@/components/BreakCrumb';
  export default {
    name: "BlogIndex",
    components:{BreakCrumb},
    data(){
      return {
        RouterLink: ""
      }
    }
  }
</script>

<style scoped lang="scss">

  .b-main {
    height: 1610px;
    display: flex;
  }

  .blog-container {
    width: 710px;
    /*background-color: white;*/
    height: inherit;
  }

  .right-side {
    /*background-color: blue;*/
    width: 240px;
    height: inherit;
  }

  .el-aside {
    height: 1610px;
  }

  h1 {
    font-size: 24px;
    color: #AAAAAA;
    font-weight: 300;
  }

  header {
    line-height: 24px;
    height: 34px;
    padding: 20px 20px;
  }
</style>
