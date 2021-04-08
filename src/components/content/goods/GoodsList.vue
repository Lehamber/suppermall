<template>
  <div class="goods-list">
    <goods-list-item  v-for="item in goods" :key="item.iid" :goodsItem="item">
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem';

export default {
  name: "goodsList",
  props: {
    goods: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  components: {
    GoodsListItem
  }
};
</script>
<style lang='less' scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>