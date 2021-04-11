<template>
  <div class="detail">
    <!-- 详情页顶部导航 -->
    <detail-nav-bar />
    <scroll ref="scroll" 
    class="content">
      <!-- 详情页轮播图 -->
      <detail-swiper :banners="topImages" />
      <!-- 商品基本信息 -->
      <detail-base-info :goods="goods" />
      <!-- 店铺信息 -->
      <detail-shop-info :shop="shopInfo" />
      <!-- 商品细节展示 -->
      <detail-goods-info :detailInfo="detailInfo"/>
      <detail-param-info :paramInfo="paramInfo" />
      <detail-comment-info :commentInfo="commentInfo"/>
      <goods-list :goods="recommendList"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import GoodsList from 'components/content/goods/GoodsList';

import DetailNavBar from "./childCpns/DetailNavBar";
import DetailSwiper from "./childCpns/DetailSwiper";
import DetailBaseInfo from "./childCpns/DetailBaseInfo";
import DetailShopInfo from "./childCpns/DetailShopInfo";
import DetailGoodsInfo from "./childCpns/DetailGoodsInfo";
import DetailParamInfo from "./childCpns/DetailParamInfo";
import DetailCommentInfo from './childCpns/DetailCommentInfo';
  

import { getDetail, Goods, GoodsParam, getRecommend } from "network/detail";
import { debounce } from "common/utils";

export default {
  name: "detail",
  data() {
    return {
      iid: "",
      topImages: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: [],
    };
  },
  components: {
    Scroll,
    GoodsList,

    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetail(this.iid);
    this.getRecommend();
  },
  mounted () {
    const deRefresh = debounce(this.$refs.scroll.refresh, 100);
    this.$bus.$on('detailImgLoad', () => {
      deRefresh();
    });
  },
  methods: {
    /**
     * 监听相关事件
     */
    getDetail(iid) {
      getDetail(iid).then(
        (res) => {
          const data = res.result;
          // 获取顶部的图片详情数据
          this.topImages = data.itemInfo.topImages;
          // 获取商品信息
          this.goods = new Goods(
            data.itemInfo,
            data.columns,
            data.shopInfo.services
          );
          // 获取店铺信息
          this.shopInfo = data.shopInfo;
          // 获取下面的图片展示数据
          this.detailInfo = data.detailInfo;
          // 获取参数 尺寸 信息
          this.paramInfo = new GoodsParam(
            data.itemParams.info,
            data.itemParams.rule
          );
          // 获取评论数据
          if (data.rate.cRate !== 0) {
            this.commentInfo = data.rate.list[0] || {};
          }
        },
        (err) => {
          console.log(err);
        }
      );
    },
    // 请求推荐数据
    getRecommend() {
      getRecommend().then(res => {
        this.recommendList = res.data.list;
      });
    }
  } 
};
</script>
<style lang='less' scoped>
.detail {
  .content {
    height: calc(100vh - 44px);
    // height: 400px;
    overflow: hidden;
    background-color: #fff;
    z-index: 9;
    position: relative;
  }
}
</style>