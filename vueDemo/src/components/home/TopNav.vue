<!--
 * @Author: LinRenJie
 * @Date: 2022-12-10 13:25:17
 * @LastEditTime: 2022-12-10 14:18:44
 * @Description: 
 * @FilePath: \vue-demo\vueDemo\src\components\home\TopNav.vue
 * @Email: xoxosos666@gmail.com
-->
<template>
  <div class="topNav">
    <icon-svg iconName="gengduo" class="icon" />
    <div class="title">
      <span>我的</span>
      <span>发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <icon-svg iconName="sousuo" class="icon" />
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.topNav {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    display: flex;
    justify-content: space-around;
    width: 65%;
    align-items: center;
    font-size: 0.36rem;
    height: 100%;
  }
  .title :nth-child(2) {
    font-weight: 900;
  }
}
</style>
