import { debounce } from "common/utils";

export const itemListenerMixin = {
  mounted() {
    const deRefresh = debounce(this.$refs.scroll.refresh, 100);
    this.itemImgListener = () => {
      deRefresh(); 
    }
  }
}
