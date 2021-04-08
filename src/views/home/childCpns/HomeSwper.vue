<template>
  <swiper :indi_count="banners.length" activeColor="red">
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
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
</style>