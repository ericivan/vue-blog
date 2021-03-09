<template>
  <ol class="breadcrumb">
    <li>
      <a href="">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              </span>
        首页
      </a>
    </li>
    <li class="slash">/</li>
    <li>{{ routerLink }}</li>
  </ol>
</template>

<script>
    export default {
        name: "BreakCrumb",
        props:["routerLink"]
    }
</script>

<style scoped lang="scss">
  .breadcrumb{
    font-size: 14px;
    height: 20px;
    line-height: 20px;
    padding:8px 15px;
    list-style:none;
    display: flex;
    background-color: #212121;
    color:#656565;
  }

  .breadcrumb a{
    color:#656565;
  }

  .breadcrumb li{

  }

  .breadcrumb span svg{
    width: 14px;
    height: 14px;
    vertical-align: -2px
  }
  .post-pannel{
    background-color: #191919;
    height: 1496px;
    padding: 20px;
  }
  .slash{
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
