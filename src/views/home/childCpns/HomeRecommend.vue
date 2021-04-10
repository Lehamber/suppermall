<template>
  <div class="recommend">
     <div class="recommend__item" v-for="(item, index) in recommends" :key="index">
        <a :href="item.link">
           <img :src="item.image" alt="">
           <div>{{item.title}}</div>
        </a>
     </div>
  </div>
</template>

<script>
export default {
  name: "homeRecommend",
  data() {
    return {};
  },
  props: {
    recommends: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang='less'>
   .recommend {
      width: 100%;
      display: flex;
      font-size: 13px;
      text-align: center;
      padding: 10px 0 25px 0;
      border-bottom: 6px solid #eee;   
      background-color: #fff;
      &__item {
         flex: 1;
      }
      img {
         width: 65px;
         height: 65px;
         margin-bottom: 5px;
      }
   }
</style>