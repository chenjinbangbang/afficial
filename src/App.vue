<template>
  <div class="app">
    <header class="header">
      <!-- <div class="h1">1454545</div>
      <div class="h2">1454545</div>-->

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
              <li
                :class="{active: custommadeRouter.includes($route.path)}"
                @mouseenter="mouseenter"
                @mouseleave="mouseleave"
              >
                <a>高端定制</a>

                <transition name="accord">
                  <div class="custommade-classify" v-show="custommadeShow">
                    <ul>
                      <li>
                        <router-link to="/construction">
                          <img src="@/assets/imgs/nav1.png" alt />
                          <div class="classify-right">
                            <div class="classify-title">网站定制</div>
                            <div class="classify-note">全网型网站高端定制</div>
                          </div>
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/applet">
                          <img src="@/assets/imgs/nav2.png" alt />
                          <div class="classify-right">
                            <div class="classify-title">小程序开发</div>
                            <div class="classify-note">线上线下整合开发方案</div>
                          </div>
                        </router-link>
                      </li>
                      <!-- <li>
                        <router-link to="/construction">
                          <img src="@/assets/imgs/nav3.png" alt />
                          <div class="classify-right">
                            <div class="classify-title">公众号开发</div>
                            <div class="classify-note">微信功能应用定制开发</div>
                          </div>
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/construction">
                          <img src="@/assets/imgs/nav4.png" alt />
                          <div class="classify-right">
                            <div class="classify-title">APP定制</div>
                            <div class="classify-note">全行业一体化解决方案</div>
                          </div>
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/construction">
                          <img src="@/assets/imgs/nav5.png" alt />
                          <div class="classify-right">
                            <div class="classify-title">系统开发</div>
                            <div class="classify-note">企业软件系统定制开发</div>
                          </div>
                        </router-link>
                      </li>-->
                    </ul>
                  </div>
                </transition>
              </li>
              <li :class="{active: $route.path === '/case'}">
                <router-link to="/case">成功案例</router-link>
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

        <div class="header-right1">
          <div class="header-contact">
            <span>全部免费咨询热线：</span>
            <span>400-838-5060</span>
          </div>
          <i class="iconfont icon-caidan" @click="navShow = !navShow"></i>

          <div class="nav" v-if="navShow">
            <div class="nav-bg" @click="navShow = false"></div>
            <ul>
              <li :class="{active: $route.path === '/'}">
                <div class="nav-child" @click="goTo('/')">首页</div>
              </li>
              <li :class="{active1: custommadeRouter.includes($route.path)}">
                <div class="nav-child" @click="custommadeShow = !custommadeShow">
                  <span>高端定制</span>
                  <i
                    :class="{'el-icon-caret-bottom': !custommadeShow, 'el-icon-caret-top': custommadeShow}"
                  ></i>
                </div>

                <transition name="accord">
                  <div class="custommade-classify" v-show="custommadeShow">
                    <ul>
                      <li :class="{active: $route.path === '/construction'}">
                        <div class="nav-child" @click="goTo('/construction')">网站定制</div>
                      </li>
                      <li :class="{active: $route.path === '/applet'}">
                        <div class="nav-child" @click="goTo('/applet')">小程序开发</div>
                      </li>
                    </ul>
                  </div>
                </transition>
              </li>
              <li :class="{active: $route.path === '/case'}">
                <div class="nav-child" @click="goTo('/case')">成功案例</div>
              </li>
              <li :class="{active: $route.path === '/about'}">
                <div class="nav-child" @click="goTo('/about')">关于我们</div>
              </li>
              <li :class="{active: $route.path === '/contact'}">
                <div class="nav-child" @click="goTo('/contact')">联系我们</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <div class="content">
      <router-view />
    </div>

    <!-- <div class="footer-contact">
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
    </div> -->

    <footer class="footer">Coypright @ 万狼科技 -深圳网站建设 粤ICP备15011227号-1 版权所有</footer>

    <div class="contact-way">
      <ul>
        <li>
          <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1312480793&site=qq&menu=yes">
            <i class="iconfont icon-QQ"></i>
          </a>
        </li>
        <el-tooltip effect="light" placement="left">
          <div slot="content">
            <div class="arcode">
              <img src="@/assets/imgs/qrcode.png" alt />
              <p>万狼科技公众号</p>
            </div>
          </div>
          <li>
            <i class="iconfont icon-erweima"></i>
          </li>
        </el-tooltip>
      </ul>
    </div>

    <el-backtop>
      <ul>
        <li>
          <i class="el-icon-arrow-up"></i>
        </li>
      </ul>
    </el-backtop>

    <!-- <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1312480793&site=qq&menu=yes">
      <img border="0" src="http://wpa.qq.com/pa?p=2:1312480793:41" alt="联系客服1" title="联系客服1" />
    </a>-->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      navShow: false, // 导航的显示与隐藏

      custommadeShow: false, // 高端定制类型弹框的显示与隐藏
      custommadeRouter: ["/construction", "/applet"], // 高端定制的路由
    };
  },
  created() {},
  methods: {
    // 跳转nav路由
    goTo(path) {
      this.$router.push({ path });
      this.navShow = false;
    },

    mouseenter() {
      this.custommadeShow = true;
      // console.log("mouseenter");
    },
    mouseleave() {
      this.custommadeShow = false;
      // console.log("mouseleave");
    },
  },
};
</script>

<style src="./App.scss" lang="scss"></style>
