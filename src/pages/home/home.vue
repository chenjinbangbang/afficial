<template>
  <div class="home">
    <el-carousel :interval="4000">
      <el-carousel-item v-for="(item, index) in lists" :key="index">
        <img :src="isWidth640 ? item.imgUrl : item.imgUrlBig" alt />
      </el-carousel-item>
    </el-carousel>

    <div class="home-data" ref="home-data">
      <ul>
        <li>
          <span class="iconfont icon-diannao"></span>
          <div class="data-text">
            <div class="data-text-num">10年</div>
            <div class="data-text-note">互联网开发</div>
          </div>
        </li>
        <li>
          <span class="iconfont icon-duorenhuiyi"></span>
          <div class="data-text">
            <div class="data-text-num">50人</div>
            <div class="data-text-note">开发团队</div>
          </div>
        </li>
        <li>
          <span class="iconfont icon-ren111"></span>
          <div class="data-text">
            <div class="data-text-num">5000</div>
            <div class="data-text-note">签约客户</div>
          </div>
        </li>
        <li>
          <span class="iconfont icon-chenggong"></span>
          <div class="data-text">
            <div class="data-text-num">8000</div>
            <div class="data-text-note">成功案例</div>
          </div>
        </li>
      </ul>
    </div>

    <div class="service wow slideInUp" ref="service">
      <div class="service-title">产品服务</div>
      <div class="service-note">根据客户的个性化需求及行业特点，提供专业的策划方案，量身定制开发</div>
      <div class="service-data">
        <ul>
          <li>
            <img class="service-img" src="@/assets/imgs/home_icon1.png" alt />
            <div class="service-li-title">商城网站开发</div>
            <div class="service-li-text">拼团商城</div>
            <div class="service-li-text">分销商城</div>
            <div class="service-li-text">批发商城</div>
            <div class="service-li-text">多用户商城</div>
            <div class="service-li-text">B2C基础商城</div>
            <div class="me-base-btn">我要咨询</div>
          </li>
          <li>
            <img class="service-img" src="@/assets/imgs/home_icon2.png" alt />
            <div class="service-li-title">微信应用开发</div>
            <div class="service-li-text">微商城开发</div>
            <div class="service-li-text">小程序开发</div>
            <div class="service-li-text">公众号开发</div>
            <div class="service-li-text">微分销系统</div>
            <div class="service-li-text">&nbsp;</div>
            <div class="me-base-btn">我要咨询</div>
          </li>
          <li>
            <img class="service-img" src="@/assets/imgs/home_icon3.png" alt />
            <div class="service-li-title">系统定制开发</div>
            <div class="service-li-text">OA系统开发</div>
            <div class="service-li-text">CRM系统开发</div>
            <div class="service-li-text">EPR系统开发</div>
            <div class="service-li-text">分销系统开发</div>
            <div class="service-li-text">积分系统开发</div>
            <div class="me-base-btn">我要咨询</div>
          </li>
          <li>
            <img class="service-img" src="@/assets/imgs/home_icon4.png" alt />
            <div class="service-li-title">APP定制开发</div>
            <div class="service-li-text">IOS APP开发</div>
            <div class="service-li-text">Android APP开发</div>
            <div class="service-li-text">原生APP开发</div>
            <div class="service-li-text">混合APP开发</div>
            <div class="service-li-text">&nbsp;</div>
            <div class="me-base-btn">我要咨询</div>
          </li>
        </ul>
      </div>
    </div>

    <div class="scene wow slideInUp" ref="scene">
      <div class="scene-title">应用场景</div>
      <div class="scene-note">万狼科技为企业提供产业互联网生态体系深度定制开发服务</div>
      <div class="scene-way">
        <ul>
          <li :class="{active: sceneIndex === 0}" @click="sceneIndex = 0">
            <img src="@/assets/imgs/home_icon5.png" alt />
            <div class="scene-way-right">
              高效的定制
              <br />开发体系
            </div>
          </li>
          <li :class="{active: sceneIndex === 1}" @click="sceneIndex = 1">
            <img src="@/assets/imgs/home_icon6.png" alt />
            <div class="scene-way-right">
              丰富的场景
              <br />应用模式
            </div>
          </li>
          <li :class="{active: sceneIndex === 2}" @click="sceneIndex = 2">
            <img src="@/assets/imgs/home_icon7.png" alt />
            <div class="scene-way-right">
              全渠道互联网
              <br />开发服务
            </div>
          </li>
        </ul>
      </div>

      <div class="scene-content" :style="{ 'height': `${sceneHeight}px` }">
        <ul
          ref="scene-content-ul"
          :style="{'transform': `translateY(-${($refs['scene-content-ul'] ? $refs['scene-content-ul'].clientHeight : 0) / 3 * sceneIndex}px)` }"
        >
          <li>
            <div class="scene-content-left">
              <img src="@/assets/imgs/scene_img1.png" alt />
            </div>
            <div class="scene-content-right">
              <div class="scene-content-title">高效的定制开发体系</div>
              <div
                class="scene-content-note"
              >基于万狼科技独立研发的网站开发 后台、WFSHOP、WLSHOP、 WLCMS系统，服务化的业务系统、组件化拼装体系、集群开发模式</div>
              <div class="me-btn">
                <span class="me-btn-text">我要咨询</span>
                <span class="iconfont icon-chat-linear"></span>
              </div>
            </div>
          </li>
          <li>
            <div class="scene-content-left">
              <img src="@/assets/imgs/scene_img2.png" alt />
            </div>
            <div class="scene-content-right">
              <div class="scene-content-title">丰富的场景应用模式</div>
              <div
                class="scene-content-note"
              >万狼科技包含的应用模式：B2B、B2C、C2C、B2B2C、O2O、ERP、OA、CRM、HR、微商城、互联网金融、小程序等</div>
              <div class="me-btn">
                <span class="me-btn-text">我要咨询</span>
                <span class="iconfont icon-chat-linear"></span>
              </div>
            </div>
          </li>
          <li>
            <div class="scene-content-left">
              <img src="@/assets/imgs/scene_img3.png" alt />
            </div>
            <div class="scene-content-right">
              <div class="scene-content-title">全渠道互联网开发服务</div>
              <div class="scene-content-note">开发终端包括：PC端、手机端、微信端、移动APP、物联网等全网覆盖</div>
              <div class="me-btn">
                <span class="me-btn-text">我要咨询</span>
                <span class="iconfont icon-chat-linear"></span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="brand wow slideInUp" ref="brand">
      <div class="brand-title">实力品牌</div>
      <div class="brand-note">专注互联网高端定制开发服务，以独到的创意、专业的眼光、高水平的技术助您提升企业实力</div>
      <div class="brand-list">
        <ul>
          <li class="wow slideInLeft">
            <img class="brand-bg" src="@/assets/imgs/brand_bg1.jpg" alt />
            <div class="brand-content">
              <div class="brand-content-title">50人技术团队</div>
              <div class="brand-content-line"></div>
              <div class="brand-content-main">万狼科技设计师、开发工程师必须有3年以上从业经验，每年负责各类大小项目超过30+</div>
            </div>
          </li>
          <li class="wow slideInLeft" data-wow-duration="2s">
            <img class="brand-bg" src="@/assets/imgs/brand_bg2.jpg" alt />
            <div class="brand-content">
              <div class="brand-content-title">高效的开发流程</div>
              <div class="brand-content-line"></div>
              <div class="brand-content-main">系统化的开发流程造就了高品质的产品，万狼科技严格遵循开发流程，注重每一个环节，最大化提高产品的品质和效率</div>
            </div>
          </li>
          <li>
            <img class="brand-bg" src="@/assets/imgs/brand_bg3.jpg" alt />
            <div class="brand-content">
              <div class="brand-content-title">完善的测试系统</div>
              <div class="brand-content-line"></div>
              <div class="brand-content-main">专业的软件测试人员对产品得各个方面进行反复的测试，确保每个产品具备高强度的稳定性与安全性，再交付到客户手上</div>
            </div>
          </li>
          <li class="wow slideInRight" data-wow-duration="2s">
            <img class="brand-bg" src="@/assets/imgs/brand_bg4.jpg" alt />
            <div class="brand-content">
              <div class="brand-content-title">5000个客户的选择</div>
              <div class="brand-content-line"></div>
              <div class="brand-content-main">10年间，万狼科技已服务超过5000个客户，8000多个成功案例，我们注重的不仅仅是数量，更注重质量</div>
            </div>
          </li>
          <li class="wow slideInRight">
            <img class="brand-bg" src="@/assets/imgs/brand_bg5.jpg" alt />
            <div class="brand-content">
              <div class="brand-content-title">科学高效的售后服务</div>
              <div class="brand-content-line"></div>
              <div class="brand-content-main">产品上线一年之内免费为客户维护，超过90%的客户在维护期过后继续选择由万狼科技提供的有偿维护服务。</div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="process wow slideInUp" ref="process">
      <div class="process-title">开发流程</div>
      <div class="process-note">标准化操作流程，系统化开发，人性化服务，最大化提高效率</div>
      <div class="process-list">
        <ul>
          <li>
            <img class="process-img" src="@/assets/imgs/process1.png" alt />
            <div class="process-content">
              <div class="process-content-title">
                <span class="process-text">需求沟通</span>
                <span class="iconfont icon-jiantou2 icon1"></span>
                <span class="iconfont icon-jiantou2 icon2"></span>
              </div>
              <div class="process-content-main">了解客户需求，根据行业及需求制定最佳的解决方案。</div>
            </div>
          </li>
          <li>
            <img class="process-img" src="@/assets/imgs/process2.png" alt />
            <div class="process-content">
              <div class="process-content-title">
                <span class="process-text">视觉设计</span>
                <span class="iconfont icon-jiantou2 icon1"></span>
                <span class="iconfont icon-jiantou2 icon2"></span>
              </div>
              <div class="process-content-main">多元化设计，包括版面、视觉、色彩、元素以及整体协调性。</div>
            </div>
          </li>
          <li>
            <img class="process-img" src="@/assets/imgs/process3.png" alt />
            <div class="process-content">
              <div class="process-content-title">
                <span class="process-text">产品开发</span>
                <span class="iconfont icon-jiantou2 icon1"></span>
                <span class="iconfont icon-jiantou2 icon2"></span>
              </div>
              <div class="process-content-main">前端开发、后台编写、功能开发与实现，打造舒适交互界面与强大功能设定。</div>
            </div>
          </li>
          <li>
            <img class="process-img" src="@/assets/imgs/process4.png" alt />
            <div class="process-content">
              <div class="process-content-title">
                <span class="process-text">功能测试</span>
                <span class="iconfont icon-jiantou2 icon1"></span>
                <span class="iconfont icon-jiantou2 icon2"></span>
              </div>
              <div class="process-content-main">不同终端、平台兼容性测试，功能、性能检测，高密度实地测试调整。</div>
            </div>
          </li>
          <li>
            <img class="process-img" src="@/assets/imgs/process5.png" alt />
            <div class="process-content">
              <div class="process-content-title">
                <span class="process-text">售后维护</span>
                <!-- <span class="iconfont icon-jiantou2"></span> -->
              </div>
              <div class="process-content-main">项目完结后一年内免费维护，第二年起支付基本的人工成本维护费用。</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="process-btn">
        <div class="me-btn">
          <span class="me-btn-text">提交需求</span>
          <span class="iconfont icon-jiantou-you"></span>
        </div>
      </div>
    </div>

    <div class="plan">
      <div class="plan-title">我们以设计构思精巧细节，以技术彰显独特魅力</div>
      <div class="plan-note">为企业提供专业的互联网开发解决方案</div>
      <div class="plan-btn">
        <div class="me-btn">
          <span class="me-btn-text">免费获取方案</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";
export default {
  name: "Home",
  data() {
    return {
      isWidth640: false, // 屏幕宽度是否小于640px
      sceneIndex: 0, // 应用场景tab标签索引
      sceneHeight: 0, // 应用场景的高度

      lists: [
        {
          imgUrl: require("@/assets/imgs/banner1.jpg"),
          imgUrlBig: require("@/assets/imgs/banner1_big.png"),
        },
        {
          imgUrl: require("@/assets/imgs/banner2.jpg"),
          imgUrlBig: require("@/assets/imgs/banner2_big.png"),
        },
        {
          imgUrl: require("@/assets/imgs/banner3.jpg"),
          imgUrlBig: require("@/assets/imgs/banner3_big.png"),
        },
        {
          imgUrl: require("@/assets/imgs/banner4.jpg"),
          imgUrlBig: require("@/assets/imgs/banner4_big.png"),
        },
      ],
    };
  },
  created() {},
  mounted() {
    // let homeData = this.$refs["home-data"];
    // let service = this.$refs["service"];
    // let scene = this.$refs["scene"];
    // let brand = this.$refs["brand"];
    // let process = this.$refs["process"];
    // window.onscroll = function () {
    //   // 检测鼠标滚轮距离顶部的位置
    //   let top = document.documentElement.scrollTop || document.body.scrollTop;
    //   console.log(top);
    //   let animation = "slideTop .3s linear";
    //   if (top > 50) {
    //     service.style.animation = animation;
    //   }
    //   if (top > 500) {
    //     scene.style.animation = animation;
    //   }
    //   if (top > 1400) {
    //     brand.style.animation = animation;
    //   }
    //   if (top > 2000) {
    //     process.style.animation = animation;
    //   }
    // };
    console.log(new WOW());
    new WOW().init();

    this.sceneHeight = this.$refs["scene-content-ul"].clientHeight / 3; // 应用场景的高度
    window.onresize = () => {
      // console.log(document.body.clientWidth);
      if (document.body.clientWidth <= 640) {
        this.isWidth640 = true;
      } else {
        this.isWidth640 = false;
      }

      this.sceneHeight = this.$refs["scene-content-ul"].clientHeight / 3; // 应用场景的高度
      // console.log(this.sceneHeight);
    };
  },
};
</script>

<style src="./home.scss" lang="scss" scoped>
</style>
