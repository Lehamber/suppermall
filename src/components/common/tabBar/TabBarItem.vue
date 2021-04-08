<template>
  <div class="tab-bar__item" @click="toActive">
    <div v-if="!isActive"><slot name="icon"></slot></div>
    <div v-else><slot name="icon-active"></slot></div>
    <div :style="setColor"  ><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "tabBarItem",
  data() {
    return {};
  },
  props: {
    path: {
      type: String,
      require: true
    },
    activeColor: {
      type: String,
      default: 'var(--color-tint)'
    }
  },
  methods: {
    toActive(path) {
      this.$router.push(this.path);
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    setColor() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  }
};
</script>
<style lang='css' scoped>
  .tab-bar__item {
    height: 49px;
    flex: 1;
    text-align: center;
    font-size: 13px;
  }
  .tab-bar__item img {
    height: 23px;
    width: 23px;
    /* vertical-align: middle; */
    margin-top: 3px;
  }
</style>