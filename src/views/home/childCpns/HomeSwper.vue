<template>
  <swiper :indi_count="banners.length" activeColor="red">
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" @load="swperImgLoad"/>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  data() {
    return {
      imgLoad: false
    };
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

  methods: {
    swperImgLoad() {
      if(!this.imgLoad) {
        this.$emit('swperImgLoad');
        this.imgLoad = true;
      }
    }
  },
};
</script>
<style lang='css' scoped>
</style>