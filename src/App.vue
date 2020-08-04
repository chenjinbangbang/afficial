<template>
  <div class="app">
    <header class="header">
      <div class="header-home">
        <div class="header-left">
          <img src="@/assets/imgs/logo.png" alt />
        </div>
        <div class="header-right">
          <div class="contact">
            <span>全部免费咨询热线：</span>
            <span>400-838-5060</span>
          </div>
          <div class="nav">
            <ul>
              <li :class="{active: $route.path === '/'}">
                <router-link to="/">首页</router-link>
              </li>
              <li :class="{active: $route.path === '/about'}">
                <router-link to="/about">联系我们</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {},
};
</script>

<style src="./App.scss" lang="scss"></style>
