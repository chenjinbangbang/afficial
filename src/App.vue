<template>
  <div class="app">
    <header class="header">
      <div class="header-home">
        <div class="header-left">
          <img src="@/assets/imgs/logo.png" alt />
        </div>
        <div class="header-right">
          <div class="header-contact">
            <span>全部免费咨询热线：</span>
            <span>400-838-5060</span>
          </div>
          <div class="nav">
            <ul>
              <li :class="{active: $route.path === '/'}">
                <router-link to="/">首页</router-link>
              </li>
              <li :class="{active: $route.path === '/about'}">
                <router-link to="/about">关于我们</router-link>
              </li>
              <li :class="{active: $route.path === '/contact'}">
                <router-link to="/contact">联系我们</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <div class="content">
      <router-view />
    </div>

    <div class="footer-contact">
      <div class="contact-home">
        <div class="contact-left">
          <div class="contact-icon">
            <img src="@/assets/imgs/contact_icon.png" alt />
          </div>
          <div class="contact-info">
            <p>全国免费咨询热线</p>
            <p>400-838-5060</p>
            <div class="me-base-btn">在线咨询</div>
          </div>
        </div>
        <div class="contact-right">
          <ul>
            <li>
              <div class="contact-right-title">移动开发</div>
              <p>小程序定制开发</p>
              <p>公众号定制开发</p>
              <p>APP定制开发</p>
            </li>
            <li>
              <div class="contact-right-title">系统开发</div>
              <p>分销系统开发</p>
              <p>ERP系统开发</p>
              <p>CRM系统开发</p>
              <p>OA定制开发</p>
              <p>其他系统定制开发</p>
            </li>
            <li>
              <div class="contact-right-title">成功案例</div>
              <p>商城开发</p>
              <p>系统开发</p>
              <p>小程序</p>
              <p>公众号</p>
              <p>移动APP</p>
            </li>
            <li>
              <div class="contact-right-title">新闻资讯</div>
              <p>签约动态</p>
              <p>万狼动态</p>
              <p>行业资讯</p>
              <p>建站知识</p>
            </li>
            <li>
              <div class="contact-right-title">关于我们</div>
              <p>关于万狼</p>
              <p>企业文化</p>
              <p>合作企业</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <footer class="footer">Coypright @ 万狼科技 -深圳网站建设 粤ICP备15011227号-1 版权所有</footer>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {},
};
</script>

<style src="./App.scss" lang="scss"></style>
