<template>
  <el-container>
    <el-header class="el-header" height="50px">
      <Top class="top"></Top>
    </el-header>
    <el-container class="layout-container">
      <el-aside width="220px" class="c_aside">
        <Aside></Aside>
      </el-aside>
      <el-container class="main_container">
        <el-main class="blog-main-content">
          <app-main></app-main>
        </el-main>
        <el-footer height="50px">Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>

  import Top from "@/components/Top";
  import Aside from "@/components/Aside"
  import AppMain from "@/components/AppMain";

  export default {
    name: "Index",
    components: {Top, Aside, AppMain}
  }
</script>
<style scoped>

  .el-header{
    height: 50px;
  }
  .layout-container {
    padding-top: 50px;
    overflow: hidden;
  }

  .top {
    justify-content: flex-start;
  }

  .main_container {
    background-color: #212121;
    padding: 0;
    /*overflow: hidden;*/
    height: 1660px;
    /*margin-bottom: 1px;*/
    margin-left: 220px;
  }

  .c_aside {
    position: fixed;
    height: 1610px;
  }

  .el-header {
    padding: 0;
    position: fixed;
    z-index: 99;
    box-shadow: 0 1px 1px 1px rgba(0, 0,0,0.25);
  }

  .blog-main-content {
    padding: 0;
    padding-bottom: 50px;
    overflow-y: hidden;
  }

  .el-footer {
    position: absolute;
    top: 1660px;
    width: 950px;
    height: 50px;
    background-color: #252525;
  }

  .app-main{
    height: 1660px;
  }
</style>
