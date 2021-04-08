<template>
  <div class="home">
    <nav-bar class="home__nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swper :banners="banners" />
    <home-recommend :recommends="recommends" />
    <home-feature />
    <tab-contral :titles="titles" @tabClick="tabClick" class="home__tab-contral" />
    <goods-list :goods="goods[currentType].list"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar';
import TabContral from 'components/content/tabControl/TabContral';
import GoodsList from 'components/content/goods/GoodsList';

import HomeSwper from "./childCpns/HomeSwper";
import HomeRecommend from "./childCpns/HomeRecommend";
import HomeFeature from "./childCpns/HomeFeature";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
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
      currentType: 'pop'
    };
  },  
  components: {
    NavBar,
    TabContral,
    GoodsList,

    HomeSwper,
    HomeRecommend,
    HomeFeature,
  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /**
     * 响应事件
     */
    tabClick(index) {
      switch(index) {
        case 0: 
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
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
        },
        (err) => {
          console.log(err);
        }
      );
    },
  },
};
</script>
<style lang='less' scoped>
.home {
  margin-top: 44px;
  &__nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    font-weight: 700;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  &__tab-contral {
    position: sticky;
    top: 44px;
  }
}
</style>