<template>
  <div class="applet">
    <div class="applet-bg">
      <img src="@/assets/imgs/applet_bg.jpg" alt />
    </div>

    <div class="applet-info">
      <div class="info-title">超级流量平台，商户直达微信10亿用户</div>
      <div class="info-note">树品牌、做营销、护口碑，满足多元化的营销需求</div>
      <div class="info-content">
        <div class="info-content-left">
          <ul>
            <li>
              <span class="el-icon-success"></span>用户受众群体量大，小程序日使用用户超1.5亿
            </li>
            <li>
              <span class="el-icon-success"></span>新型商业模式，整合线上+线下互联网营销新模式
            </li>
            <li>
              <span class="el-icon-success"></span>使用场景丰富，高用户体验度，即用即走方便快捷
            </li>
            <li>
              <span class="el-icon-success"></span>安全性高，稳定性强，不用下载安装，不占内存
            </li>
            <li>
              <span class="el-icon-success"></span>跨平台式开发，基于微信环境产品，开发成本低，周期短
            </li>
            <li>
              <span class="el-icon-success"></span>开放性强，扫码、推送、搜索、附近定位等多流量入口
            </li>
          </ul>
        </div>
        <div class="info-content-right">
          <img src="@/assets/imgs/applet_img.jpg" alt />
        </div>
      </div>
    </div>

    <div class="applet-solve">
      <div class="solve">
        <div class="solve-title">解决企业开发成本高、周期长的难题</div>
        <ul class="solve-ul-1">
          <li>
            <img src="@/assets/imgs/applet_icon1.png" alt />
            <p>开发成本低</p>
            <p>小程序基于微信开发环境以及流量人群，开发成本、推广成本远远低于APP</p>
          </li>
          <li>
            <img src="@/assets/imgs/applet_icon2.png" alt />
            <p>开发周期短</p>
            <p>APP开发周期至少需要3个月，小程序10天左右即可，更能适应网络发展趋势</p>
          </li>
          <li>
            <img src="@/assets/imgs/applet_icon3.png" alt />
            <p>用户体验号</p>
            <p>微信小程序不需要考虑兼容性、稳定性、安全性等问题</p>
          </li>
          <li>
            <img src="@/assets/imgs/applet_icon4.png" alt />
            <p>操作更简单</p>
            <p>无需下载，使用方便，使用场景更丰富，操作实用性更强</p>
          </li>
        </ul>
      </div>

      <div class="solve">
        <div class="solve-title" style="margin-top: 80px;">我们能做什么</div>
        <ul class="solve-ul-2">
          <li>
            <div class="solve-li-title">公司企业</div>
            <ul class="ul1">
              <li>
                <img src="@/assets/imgs/applet_icon5.png" alt />
                <p>微官网</p>
              </li>
              <li>
                <img src="@/assets/imgs/applet_icon6.png" alt />
                <p>微商城</p>
              </li>
              <li>
                <img src="@/assets/imgs/applet_icon7.png" alt />
                <p>微分销</p>
              </li>
              <li>
                <img src="@/assets/imgs/applet_icon8.png" alt />
                <p>微团购</p>
              </li>
              <li>
                <img src="@/assets/imgs/applet_icon9.png" alt />
                <p>微拼团</p>
              </li>
              <li>
                <img src="@/assets/imgs/applet_icon10.png" alt />
                <p>微门店</p>
              </li>
              <li>
                <img src="@/assets/imgs/applet_icon11.png" alt />
                <p>金融理财</p>
              </li>
            </ul>
          </li>

          <li>
            <div class="solve-li-title">O2O开发</div>
            <ul>
              <li>
                <img src="@/assets/imgs/applet_icon12.png" alt />
                <p>外卖/点餐</p>
              </li>
              <li>
                <img src="@/assets/imgs/applet_icon13.png" alt />
                <p>生活服务</p>
              </li>
              <li>
                <img src="@/assets/imgs/applet_icon14.png" alt />
                <p>物流下单</p>
              </li>
              <li>
                <img src="@/assets/imgs/applet_icon15.png" alt />
                <p>预约挂号</p>
              </li>
              <li>
                <img src="@/assets/imgs/applet_icon16.png" alt />
                <p>旅游指南</p>
              </li>
              <li>
                <img src="@/assets/imgs/applet_icon17.png" alt />
                <p>招聘求职</p>
              </li>
            </ul>
          </li>

          <li>
            <div class="solve-li-title">功能开发</div>
            <ul>
              <li>
                <img src="@/assets/imgs/applet_icon18.png" alt />
                <p>小游戏</p>
              </li>
              <li>
                <img src="@/assets/imgs/applet_icon19.png" alt />
                <p>测试系统</p>
              </li>
              <li>
                <img src="@/assets/imgs/applet_icon20.png" alt />
                <p>投票系统</p>
              </li>
              <li>
                <img src="@/assets/imgs/applet_icon21.png" alt />
                <p>订单系统</p>
              </li>
              <li>
                <img src="@/assets/imgs/applet_icon22.png" alt />
                <p>管理系统</p>
              </li>
              <li>
                <img src="@/assets/imgs/applet_icon23.png" alt />
                <p>支付系统</p>
              </li>
            </ul>
          </li>
        </ul>

        <div class="me-btn">
          <span class="me-btn-text">我要咨询</span>
          <span class="iconfont icon-chat-linear"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Applet",
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style src="./applet.scss" lang="scss" scoped>
</style>
