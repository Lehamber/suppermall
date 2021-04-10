<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" @load="imgLoad" alt="" />

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
  methods: {
    imgLoad() {
      this.$bus.$emit('imgLoad');
    }
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
    // height: 80%;
    border-radius: 5px;
  }
  .text-bar {
    font-size: 12px;
    text-align: center;
    img {
      width: 13px;
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