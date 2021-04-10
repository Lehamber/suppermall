<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
     click: {
       type: Boolean,
       default: true
     },
     probeType: {
       type: Number,
       defatul: 1
     },
     pullUpLoad: {
       type: Boolean,
       default: true
     },
     scrollX: {
       type: Boolean,
       default: false
     },
     scrollY: {
       type: Boolean,
       default: true
     }
  },
  mounted() {
    // 在下一次dom 更新后 触发
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: this.click,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      });

      // 监听上拉事件
      if(this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('loadMore');
        });
      }

      // 监听 滚动事件
      if(this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', (position) => {
          this.$emit('scroll', position);
        });
      }
    }); 
  },
  methods: {
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    }
  },
};
</script>
<style lang='css' scoped>
</style>