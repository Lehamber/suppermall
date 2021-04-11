<template>
  <div class="goods-item" @click="goodsItemClick">
    <img :src="showImage" alt="" @load="imgLoad"/>
    <div class="text-bar">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <img src="~assets/img/common/collect.svg" alt="" />
      <span>{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodListItem",
  props: {
    goodsItem: {
      type: Object,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    },
  },
  methods: {
    imgLoad() {
      // 针对 不同的路由 可以 发送不同的事件
      if(this.$route.path.indexOf('/home') !== -1){
        this.$bus.$emit("homeImgLoad"); 
      }
      if(this.$route.path.indexOf('/detail') !== -1){
        this.$bus.$emit('detailImgLoad');
      }
    },
    goodsItemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
};
</script>
<style lang='less' scoped>
.goods-item {
  width: 48%;
  padding: 0 2px;
  margin: 4px 0;
  img {
    width: 100%;
    border-radius: 5px;
  }
  .text-bar {
    font-size: 12px;
    text-align: center;
    img {
      width: 13px;
      height: 13px;
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    span {
      margin: 0 2px;
      &:first-of-type {
        color: var(--color-high-text);
        margin-right: 7px;
      }
    }
  }
}
</style>