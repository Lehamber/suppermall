<template>
  <div
    class="details"
    v-if="
      Object.keys(detailInfo).length !== 0 &&
      detailInfo.detailImage[0].list !== null
    "
  >
    <div class="details__desc clear-fix">
      <div class="start"></div>
      <div class="text">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="details__key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="details__pics">
      <img
        :src="item"
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        @load="imgLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "detailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    imgLoad() {
      this.$emit("imgLoad");
    },
  },
};
</script>
<style lang='less' scoped>
.details {
  padding-top: 20px;
  border-bottom: 5px solid #f2f5f8;
  &__desc {
    padding: 0 10px;
    font-size: 12px;
    .text {
      padding: 12px 0;
    }
    .start {
      float: left;
      width: 100px;
      height: 0.5px;
      background-color: #999;
      position: relative;
      &::before {
        content: "";
        display: block;
        position: absolute;
        width: 4px;
        height: 4px;
        background-color: black;
        left: 0;
        bottom: 0;
      }
    }
    .end {
      float: right;
      width: 100px;
      height: 0.5px;
      background-color: #999;
      position: relative;
      &::after {
        content: "";
        display: block;
        position: absolute;
        width: 4px;
        height: 4px;
        background-color: black;
        right: 0;
        top: 0;
      }
    }
  }
  &__key {
    font-size: 13px;
    text-align: center;
    padding: 10px;
  }
  &__pics {
    img {
      width: 100%;
    }
  }
}
</style>