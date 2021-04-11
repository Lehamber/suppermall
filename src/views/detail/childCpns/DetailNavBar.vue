<template>
  <div>
    <nav-bar class="detail-nav-bar">
      <!-- <template #left>
        <img src="~assets/img/common/back.svg" alt="">
      </template> -->
      <div slot="left" class="detail-nav-bar__left" @click="backTo">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="detail-nav-bar__center">
        <div
          class="item"
          :class="{ 'item--active': currentIndex === index }"
          v-for="(item, index) in titles"
          :key="index"
          @click="itemClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";

export default {
  name: "detailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
    backTo() {
      // this.$router.back();
      this.$router.go(-1);
    }
  },
};
</script>
<style lang='less' scoped>
.detail-nav-bar {
  &__center {
    display: flex;
    font-size: 13px;
    .item {
      flex: 1;
      &--active {
        color: var(--color-high-text);
      }
    }
  }
  &__left {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 18px;
      height: 18px;
    }
  }
}
</style>