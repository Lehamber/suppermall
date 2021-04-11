<template>
  <swiper :indi_count="banners.length" activeColor="red" class="detail-swiper">
    <swiper-item v-for="(item, index) in banners" :key="index">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "DetailSwiper",
  data() {
    return {};
  },
  props: {
    banners: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  computed: {},
  methods: {},
};
</script>
<style lang='css' scoped>
  .detail-swiper{
    height: 280px;
  }
</style>