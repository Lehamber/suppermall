<template>
  <div class="goods-list">
    <goods-list-item v-for="(item, index) in goods" :key="index" :goodsItem="item">
    </goods-list-item>
    <!-- key: 去item.iid 会报错，查阅资料，发现一般都取 index 就行 -->
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "goodsList",
  props: {
    goods: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  components: {
    GoodsListItem,
  },
};
</script>
<style lang='less' scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>