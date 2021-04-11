<template>
  <div>
    <h2>分类</h2>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

export default {
  data() {
    return {
      scroll: null,
    };
  },
  components: {
    Scroll,
  },
  // created() {
  //   console.log("created");
  // },
};
</script>
<style lang='css' scoped>
.content {
  height: 300px;
  background-color: skyblue;
  overflow: hidden;
}
</style>