<template>
  <div class="home">
    <!--  title -->
    <topTitle title="优购商城" />
    <!-- 搜索栏 -->
    <topSeach />
    <!-- swiper -->
    <mySwiper :bannerItem="banners" />
    <!-- cat -->
    <Cat :catItems="catItem" />
    <!-- 楼层 -->
    <louCeng :cengItems="louItems" />
    <!-- tabbar -->
    <MainTabBar />
  </div>
</template>

<script>
import topSeach from "@/components/content/topSeach/topSeach";
import topTitle from "@/components/content/topTitle/topTitle";
import MainTabBar from "@/components/content/mainTabbar/MainTabBar";
import mySwiper from "@/components/content/Swiper/mySwiper";
import Cat from "@/views/home/children/cat/Cat";
import louCeng from "@/views/home/children/louceng/louCeng";
export default {
  name: "Home",
  data() {
    return {
      // 轮播图数据
      banners: [],
      // cat数据
      catItem: [],
      // 楼层数据
      louItems: []
    };
  },
  components: {
    topTitle,
    topSeach,
    MainTabBar,
    mySwiper,
    Cat,
    louCeng
  },
  created() {
    this.getSwiperItem();
    this.catitemItem();
    this.louItem();
  },
  methods: {
    // 请求数据
    async getSwiperItem() {
      const { data } = await this.$http({ url: "/home/swiperdata" });
      this.banners = data.message;
    },
    async catitemItem() {
      const { data } = await this.$http({ url: "/home/catitems" });
      this.catItem = data.message;
    },
    async louItem() {
      const { data } = await this.$http({ url: "/home/floordata" });
      this.louItems = data.message;
    }
  },
  computed: {}
};
</script>


<style lang="scss">
.home {
  padding-bottom: 39px;
  padding-top: 49px;
  overflow: hidden;
}
</style>