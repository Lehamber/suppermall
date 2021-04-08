<template>
   <div class="tab">
     <div class="tab__item" v-for="(item,index) in titles" :key='index' @click="toActive(index)">
       <span class="text" :class="{'text--active': currentIndex === index}">{{item}}</span>
     </div>
   </div>
</template>

<script>
export default {
    name: 'tabContral',
    data () {
      return {
        currentIndex: 0  
      }
    },
    props: {
      titles: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      // isActive() {
      //   // return this.$route.path.indexOf(this.path) !== -1;
      //   return true;
      // }
    },
    methods: {
      toActive(index) {
        this.currentIndex = index;
        this.$emit('tabClick', index);
      }
    }
}
</script>
<style lang='less' scoped>
  .tab {
    display: flex;
    text-align: center;
    background-color: #fff;
    &__item {
      flex: 1;
      font-size: 12px;
      height: 35px;
      line-height: 35px;
      .text {
        padding: 5px;
        &--active {
          color: var(--color-high-text);
          border-bottom: 3px solid var(--color-tint);
        }
      }
    }
  }
</style>