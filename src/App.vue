<template>
  <div>
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar";
// import MainNavBar from 'components/content/MainNavBar';

export default {
  data() {
    return {};
  },

  components: {
    MainTabBar,
  },

  computed: {},

  methods: {},
};
</script>
<style lang='css' scoped>
@import "assets/css/base.css";
</style>