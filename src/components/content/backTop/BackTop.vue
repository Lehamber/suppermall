<template>
   <div class="back-top">
     <img src="~assets/img/common/top.png" alt="">
   </div>
</template>

<script>
export default {
   name: 'backTop'
}
</script>
<style lang='less' scoped>
    .back-top {
      position: fixed;
      right: 6px;
      bottom: 50px;
      
      img {
        width: 40px;
        height: 40px;
        vertical-align: middle;
      }
    }
</style>