<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">

@import "assets/fonts/style.css";

#app {
  font-family: "Source Sans Pro","Hiragino Sans GB","Microsoft Yahei",SimSun,Helvetica,Arial,Sans-serif,monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  width: 1170px;
  margin:0 auto;
}
*{
  margin: 0;
  padding: 0;
}
body{
  background-color: #191919;
}
a{
  text-decoration: none;
}
</style>
