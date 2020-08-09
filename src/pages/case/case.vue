<template>
  <div class="case">
    <div class="case-bg">
      <img src="@/assets/imgs/case_bg.jpg" alt />
    </div>

    <div class="filter">
      <div class="filter-item">
        <div class="filter-title">所属案例</div>
        <div class="filter-all" :class="{active: belongType === ''}" @click="belongType = ''">全部</div>
        <ul>
          <li :class="{active: belongType === 1}" @click="belongType = 1">PC网站</li>
          <li :class="{active: belongType === 2}" @click="belongType = 2">手机网站</li>
          <li :class="{active: belongType === 3}" @click="belongType = 3">小程序开发</li>
          <li :class="{active: belongType === 4}" @click="belongType = 4">公众号开发</li>
          <li :class="{active: belongType === 5}" @click="belongType = 5">APP开发</li>
        </ul>
      </div>
      <div class="filter-item">
        <div class="filter-title">开发类型</div>
        <div class="filter-all" :class="{active: devType === ''}" @click="devType = ''">全部</div>
        <ul>
          <li :class="{active: devType === 1}" @click="devType = 1">企业官网</li>
          <li :class="{active: devType === 2}" @click="devType = 2">营销型网站</li>
          <li :class="{active: devType === 3}" @click="devType = 3">集团官网</li>
          <li :class="{active: devType === 4}" @click="devType = 4">购物商场</li>
          <li :class="{active: devType === 5}" @click="devType = 5">响应式，H5网站</li>
          <li :class="{active: devType === 6}" @click="devType = 6">外贸，多语言</li>
          <li :class="{active: devType === 7}" @click="devType = 7">门户论坛</li>
          <li :class="{active: devType === 8}" @click="devType = 8">平台开发</li>
          <li :class="{active: devType === 9}" @click="devType = 9">管理系统开发</li>
        </ul>
      </div>
    </div>

    <div class="case-list">
      <ul>
        <li v-for="(item,index) in lists" :key="index">
          <img :src="item.imgUrl" alt />
          <p>{{item.title}}</p>
        </li>
      </ul>

      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="lists.length"
          :page-size="12"
          :current-page="page"
          @current-change="changePage"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Case",
  data() {
    return {
      belongType: "", // ''：全部
      devType: "",
      classify: "",
      page: 1, // 当前页
      lists: [
        {
          id: 1,
          imgUrl: require("@/assets/imgs/case_img1.jpg"),
          title: "美容养生小程序开发制作",
        },
        {
          id: 2,
          imgUrl: require("@/assets/imgs/case_img2.jpg"),
          title: "角色扮演小程序开发",
        },
        {
          id: 3,
          imgUrl: require("@/assets/imgs/case_img3.jpg"),
          title: "万狼小程序商城系统",
        },
        {
          id: 4,
          imgUrl: require("@/assets/imgs/case_img4.jpg"),
          title: "服装公司网站开发-服装工厂网站建设",
        },
        {
          id: 5,
          imgUrl: require("@/assets/imgs/case_img5.jpg"),
          title: "服装网站建设-服饰网站制作",
        },
        {
          id: 6,
          imgUrl: require("@/assets/imgs/case_img6.jpg"),
          title: "母婴用品网站制作",
        },
        {
          id: 7,
          imgUrl: require("@/assets/imgs/case_img7.jpg"),
          title: "家具网站建设-家具网站制作",
        },
        {
          id: 8,
          imgUrl: require("@/assets/imgs/case_img8.jpg"),
          title: "家具网站建设-家具网站制作",
        },
        {
          id: 9,
          imgUrl: require("@/assets/imgs/case_img9.jpg"),
          title: "LED产品网站建设-灯具生产网站制作",
        },
        {
          id: 10,
          imgUrl: require("@/assets/imgs/case_img10.jpg"),
          title: "医疗网站建设-牙科网站制作",
        },
        {
          id: 11,
          imgUrl: require("@/assets/imgs/case_img11.jpg"),
          title: "化工网站制作-工业清洗剂网站建设",
        },
        {
          id: 12,
          imgUrl: require("@/assets/imgs/case_img12.jpg"),
          title: "化工网站建设-工业涂料网站制作",
        },
        // {
        //   id: 13,
        //   imgUrl: require("@/assets/imgs/case_img4.jpg"),
        //   title: "化工网站建设-工业涂料网站制作",
        // },
        // {
        //   id: 14,
        //   imgUrl: require("@/assets/imgs/case_img6.jpg"),
        //   title: "LED产品网站建设-灯具生产网站制作",
        // },
      ],
    };
  },
  created() {},
  methods: {
    // 改变当前页
    changePage(page) {
      this.page = page;
    },
  },
};
</script>

<style src="./case.scss" lang="scss" scoped>
</style>
