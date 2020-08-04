<template>
  <div class="home">
    <el-carousel :interval="4000" height="630px">
      <el-carousel-item v-for="(item, index) in lists" :key="index">
        <img :src="item" alt />
      </el-carousel-item>
    </el-carousel>

    <div class="home-data">
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

    <div class="service">
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
            <div class="service-btn">我要咨询</div>
          </li>
          <li>
            <img class="service-img" src="@/assets/imgs/home_icon2.png" alt />
            <div class="service-li-title">微信应用开发</div>
            <div class="service-li-text">微商城开发</div>
            <div class="service-li-text">小程序开发</div>
            <div class="service-li-text">公众号开发</div>
            <div class="service-li-text">微分销系统</div>
            <div class="service-li-text">&nbsp;</div>
            <div class="service-btn">我要咨询</div>
          </li>
          <li>
            <img class="service-img" src="@/assets/imgs/home_icon3.png" alt />
            <div class="service-li-title">系统定制开发</div>
            <div class="service-li-text">OA系统开发</div>
            <div class="service-li-text">CRM系统开发</div>
            <div class="service-li-text">EPR系统开发</div>
            <div class="service-li-text">分销系统开发</div>
            <div class="service-li-text">积分系统开发</div>
            <div class="service-btn">我要咨询</div>
          </li>
          <li>
            <img class="service-img" src="@/assets/imgs/home_icon4.png" alt />
            <div class="service-li-title">APP定制开发</div>
            <div class="service-li-text">IOS APP开发</div>
            <div class="service-li-text">Android APP开发</div>
            <div class="service-li-text">原生APP开发</div>
            <div class="service-li-text">混合APP开发</div>
            <div class="service-li-text">&nbsp;</div>
            <div class="service-btn">我要咨询</div>
          </li>
        </ul>
      </div>
    </div>

    <div class="scene">
      <div class="scene-title">应用场景</div>
      <div class="scene-note">万狼科技为企业提供产业互联网生态体系深度定制开发服务</div>
      <div class="scene-way">
        <ul>
          <li class="active">
            <img src="@/assets/imgs/home_icon5.png" alt />
            <div class="scene-way-right">
              高效的定制
              <br />开发体系
            </div>
          </li>
          <li>
            <img src="@/assets/imgs/home_icon6.png" alt />
            <div class="scene-way-right">
              丰富的场景
              <br />应用模式
            </div>
          </li>
          <li>
            <img src="@/assets/imgs/home_icon7.png" alt />
            <div class="scene-way-right">
              全渠道互联网
              <br />开发服务
            </div>
          </li>
        </ul>
      </div>

      <div class="scene-content">
        <div class="scene-content-left">
          <img src="@/assets/imgs/home_computer.png" alt />
        </div>
        <div class="scene-content-right">
          <div class="scene-content-title">高效的定制开发体系</div>
          <div
            class="scene-content-note"
          >基于万狼科技独立研发的网站开发 后台、WFSHOP、WLSHOP、 WLCMS系统，服务化的业务系统、组件化拼装体系、集群开发模式</div>
          <div class="scene-btn">
            <span class="scene-btn-text">我要咨询</span>
            <span class="iconfont icon-chat-linear"></span>
          </div>
        </div>
      </div>
    </div>

    <div class="brand">
      <div class="brand-title">实力品牌</div>
      <div class="brand-note">专注互联网高端定制开发服务，以独到的创意、专业的眼光、高水平的技术助您提升企业实力</div>
      <div class="brand-list">
        <ul>
          <li>
            <img class="brand-bg" src="@/assets/imgs/brand_bg1.jpg" alt />
            <div class="brand-content">
              <div class="brand-content-title">50人技术团队</div>
              <div class="brand-content-line"></div>
              <div class="brand-content-main">万狼科技设计师、开发工程师必须有3年以上从业经验，每年负责各类大小项目超过30+</div>
            </div>
          </li>
          <li>
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
          <li>
            <img class="brand-bg" src="@/assets/imgs/brand_bg4.jpg" alt />
            <div class="brand-content">
              <div class="brand-content-title">5000个客户的选择</div>
              <div class="brand-content-line"></div>
              <div class="brand-content-main">10年间，万狼科技已服务超过5000个客户，8000多个成功案例，我们注重的不仅仅是数量，更注重质量</div>
            </div>
          </li>
          <li>
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

    <div class="brand">
      <div class="brand-title">开发流程</div>
      <div class="brand-note">标准化操作流程，系统化开发，人性化服务，最大化提高效率</div>
      <div class="brand-list">
        <ul>
          <li>
            <img class="brand-bg" src="@/assets/imgs/brand_bg1.jpg" alt />
            <div class="brand-content">
              <div class="brand-content-title">50人技术团队</div>
              <div class="brand-content-line"></div>
              <div class="brand-content-main">万狼科技设计师、开发工程师必须有3年以上从业经验，每年负责各类大小项目超过30+</div>
            </div>
          </li>
          <li>
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
          <li>
            <img class="brand-bg" src="@/assets/imgs/brand_bg4.jpg" alt />
            <div class="brand-content">
              <div class="brand-content-title">5000个客户的选择</div>
              <div class="brand-content-line"></div>
              <div class="brand-content-main">10年间，万狼科技已服务超过5000个客户，8000多个成功案例，我们注重的不仅仅是数量，更注重质量</div>
            </div>
          </li>
          <li>
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
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      lists: [
        require("@/assets/imgs/banner1.png"),
        require("@/assets/imgs/banner2.png"),
        require("@/assets/imgs/banner3.png"),
        require("@/assets/imgs/banner4.png"),
      ],
    };
  },
  created() {},
};
</script>

<style src="./home.scss" lang="scss" scoped>
</style>
