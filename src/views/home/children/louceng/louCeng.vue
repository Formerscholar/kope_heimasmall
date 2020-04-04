<template>
  <div>
    <div class="louceng" v-for="(item,index) in cengItems" :key="index">
      <div class="title">
        <img :src="item.floor_title.image_src" :alt="item.floor_title.name" />
      </div>
      <div class="lc_item" v-for="(item1,index1) in item.product_list" :key="index1">
        <a :href="item1.navigator_url">
          <img :src="item1.image_src" :alt="item1.name" />
        </a>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "louCeng",
  components: {},
  props: {
    cengItems: Array
  }
};
</script>
    
<style lang="scss">
.louceng {
  height: 280px;
  margin-bottom: 50px;
  .title {
    height: 32px;
    margin: 5px 0;
    img {
      height: 100%;
    }
  }
  .lc_item {
    height: calc(280px - 32px);
    overflow: hidden;
    width: 33.33%;
    height: 100%;

    float: left;
    &:nth-last-child(-n + 4) {
      height: 50%;
      border-left: 10px solid #fff;
    }
    &:nth-child(3),
    &:nth-child(4) {
      border-bottom: 10px solid #fff;
    }

    a {
      display: block;
      height: 100%;
      width: 100%;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
