<!--
 * @Author: LinRenJie
 * @Date: 2022-12-10 14:20:37
 * @LastEditTime: 2022-12-10 14:35:55
 * @Description: 
 * @FilePath: \vue-demo\vueDemo\src\components\home\SwiperTop.vue
 * @Email: xoxosos666@gmail.com
-->
<template>
  <div class="content">
    <van-swipe class="mySwipe" :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
const images = [
  "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
  "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
];
</script>

<style lang="less" scoped>
.mySwipe .van-swipe-item img {
  width: 100%;
  height: 4rem;
}
</style>
