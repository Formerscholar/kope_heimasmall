<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="banner.goods_id" v-for="banner in bannerItem">
        <a :href="banner.navigator_url">
          <img :src="banner.image_src" />
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
    
<script>
export default {
  name: "mySwiper",
  components: {},
  props: {
    bannerItem: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: {
          delay: 1800,
          disableOnInteraction: true
        },
        loop: true
      }
    };
  }
};
</script>
    
<style lang="scss">
.swiper-container {
  height: 187px;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
