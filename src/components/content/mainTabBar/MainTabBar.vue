<template>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="icon" src="~assets/img/tabBar/home.svg" alt="home" />
        <img
          slot="icon-active"
          src="~assets/img/tabBar/home_active.svg"
          alt="home"
        />
        <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="icon" src="~assets/img/tabBar/category.svg" alt="home" />
        <img
          slot="icon-active"
          src="~assets/img/tabBar/category_active.svg"
          alt="home"
        />
        <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <img slot="icon" src="~assets/img/tabBar/shopcart.svg" alt="home" />
        <img
          slot="icon-active"
          src="~assets/img/tabBar/shopcart_active.svg"
          alt="home"
        />
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="icon" src="~assets/img/tabBar/profile.svg" alt="home" />
        <img
          slot="icon-active"
          src="~assets/img/tabBar/profile_active.svg"
          alt="home"
        />
        <div slot="text">首页</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import { TabBar, TabBarItem } from "components/common/tabBar";
 
export default {
  data() {
    return {};
  },

  components: {
    TabBar,
    TabBarItem,
  },

  computed: {},

  methods: {},
};
</script>
<style lang='css'>
</style>