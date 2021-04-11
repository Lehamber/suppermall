<template>
  <div class="wrapper" ref="wrapper">
    <div class="content" ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import ObserveDOM from "@better-scroll/observe-dom";
// import ObserveImage from "@better-scroll/observe-image";
import Pullup from "@better-scroll/pull-up";
import InfinityScroll from '@better-scroll/infinity'

BScroll.use(ObserveDOM);
// BScroll.use(ObserveImage);
BScroll.use(Pullup);
BScroll.use(InfinityScroll);

export default {
  name: "scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    observeDOM: {
      type: Boolean,
      default: true,
    },
    // observeImage: {
    //   type: Object,
    //   default: () => {
    //     return { debounceTime: 100 };
    //   },
    // },
    pullUpLoad: {
      type: Boolean,
      default: true,
    },
    probeType: {
      type: Number,
      default: 1,
    },
    click: {
      type: Boolean,
      default: true
    },
    scrollX: {
      type: Boolean,
      default: false,
    },
    scrollY: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: this.observeDOM,
      // observeImage: this.observeImage,
      pullUpLoad: this.pullUpLoad,
      probeType: this.probeType,
      click: true,
    });

    // 监听上拉事件
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("loadMore");
      });
    }

    // 监听 滚动事件
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
    }
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
    },
    getContentHeight() {
      return this.$refs.content.offsetHeight;
    }
  },
};
</script>
<style lang='css' scoped>
</style>