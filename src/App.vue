<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" />
    <router-view /> -->
    <el-button>xxxx</el-button>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    console.log(this.base);
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: $theme;
  margin-top: 60px;
}
</style>
