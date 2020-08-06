<template>
  <div class="contact">
    <div class="contact-bg">
      <img src="@/assets/imgs/contact_bg.jpg" alt />
    </div>

    <div class="contact-link">
      <ul>
        <li>
          <div class="circle">
            <div class="c1"></div>
            <div class="c2"></div>
            <div class="c3"></div>
          </div>
          <img class="contact-link-icon" src="@/assets/imgs/icon_contact1.png" alt />
          <div class="contact-link-title">公司地址</div>
          <div class="contact-link-note">深圳市宝安区西乡大道与宝田一路交汇处中熙ECO16楼</div>
        </li>
        <li>
          <img class="contact-link-icon" src="@/assets/imgs/icon_contact2.png" alt />
          <div class="contact-link-title">联系方式</div>
          <div
            class="contact-link-note"
          >400-838-5060 | 0755-85000090 | QQ：160939872 | E-mail：admin@wanlang.cn</div>
        </li>
        <li>
          <img class="contact-link-icon" src="@/assets/imgs/icon_contact3.png" alt />
          <div class="contact-link-title">微信公众号</div>
          <div class="contact-link-code">
            <img src="@/assets/imgs/code.jpg" alt />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  created() {},
};
</script>

<style src="./contact.scss" lang="scss" scoped>
</style>
