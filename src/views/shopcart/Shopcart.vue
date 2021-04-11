<template>
  <div>
    <h2>购物车</h2>
    <div v-for="(item, index) in 10" :key="index">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'shopcart',
  data() {
    return {};
  },
  methods: {},
  created() {
    console.log('created');
  },
  computed: {},
};
</script>

<style scoped>
</style>