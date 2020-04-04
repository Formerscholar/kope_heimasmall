<template>
  <div class="tabbar bg-primary d-flex text-md text-white jc-center ai-center">
    <div class="tab_text">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: "topTitle",
  props: {
    title: String
  }
};
</script>

<style  lang="scss">
.tabbar {
  height: 49px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  .tab_text {
  }
}
</style>
