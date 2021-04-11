<template>
  <div class="home">
    <nav-bar class="home__nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-contral
      :titles="titles"
      @tabClick="tabClick"
      :class="{ 'home__tab-contral': showTabContral }"
      ref="tabContral1"
    />

    <scroll
      class="home__content"
      ref="scroll"
      @scroll="scroll"
      :probeType="3"
      @loadMore="loadMore"
    >
      <home-swiper :banners="banners" @swperImgLoad="swperImgLoad" />
      <home-recommend :recommends="recommends" />
      <home-feature />
      <tab-contral :titles="titles" @tabClick="tabClick" ref="tabContral2" />
      <goods-list :goods="goods[currentType].list" />
    </scroll>
    <back-top v-show="showBackTop" @click.native="backTopClick" />
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import TabContral from "components/content/tabControl/TabContral";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./childCpns/HomeSwiper";
import HomeRecommend from "./childCpns/HomeRecommend";
import HomeFeature from "./childCpns/HomeFeature";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils";

export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      showBackTop: false,
      showTabContral: false,
      tabOffsetTop: 0,
      scrollSpan: 0,

      itemImgListener: {},
    };
  },
  components: {
    NavBar,
    TabContral,
    GoodsList,
    Scroll,
    BackTop,

    HomeSwiper,
    HomeRecommend,
    HomeFeature,
  },
  computed: {},
  created() {
    this.getHomeMultidata();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const deRefresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("homeImgLoad", () => {
      deRefresh();
    });
  },
  methods: {
    /**
     * 响应事件
     */
    // 监听 tabBar 点击
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      // 同步tabContral1 和 tabContral2 的currentIndex
      this.$refs.tabContral1.currentIndex = index;
      this.$refs.tabContral2.currentIndex = index;

      this.$refs.scroll.scrollTo(0, -(this.tabOffsetTop - 100), 500);
    },
    // 监听 scroll 滚动
    scroll(position) {
      this.showBackTop = -position.y > 1000;
      this.showTabContral = -position.y > this.tabOffsetTop;
    },
    // backTop 点击事件
    backTopClick() {
      this.$refs && this.$refs.scroll && this.$refs.scroll.scrollTo(0, 0);
    },
    // 加载更多商品
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    // 监听 滚动banner图片加载
    swperImgLoad() {
      // 获取tabContral 的offSetTop
      this.tabOffsetTop = this.$refs.tabContral2.$el.offsetTop;
    },

    /**
     * 网络请求相关方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(
        (res) => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        },
        (err) => {
          console.log(err);
        }
      );
    },
    // 获取主页商品数据
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(
        (res) => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page++;

          this.$refs.scroll && this.$refs.scroll.finishPullUp();
        },
        (err) => {
          console.log(err);
        }
      );
    },
  },
  activated() {
    // this.$refs.scroll.refresh();
    // 有时候 从详情页返回 会直接跳转到 主页顶部，我怀疑是content 高度计算的问题，
    // 所以就使用了 refresh 方法；
    this.$nextTick(() => {
      this.$refs.scroll.refresh();
      this.$refs.scroll.scrollTo(0, this.scrollSpan, 0);
    });
  },
  deactivated() {
    // 保存y值
    this.scrollSpan = this.$refs.scroll.getScrollY();
  },
};
</script>
<style lang='less' scoped>
.home {
  position: relative;
  &__nav {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
  &__content {
    height: calc(100vh - 93px);
    // z-index: 1;
    overflow: hidden;
    position: absolute;
    background-color: #fff;
    top: 44px;
    left: 0;
    right: 0;
  }
  &__tab-contral {
    position: relative;
    z-index: 10;
  }
}
</style>