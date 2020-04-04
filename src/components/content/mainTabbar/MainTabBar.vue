<template>
  <tab-bar class="foot d-flex jc-center ai-center bg-white">
    <tab-bar-item
      :path="item.path"
      class="foot_item flex-1 d-flex jc-center ai-center text-foot"
      v-for="(item,index) in foot_title"
      :key="index"
    >
      <i slot="item-icon" :class="'iconfont ' + item.icon"></i>
      <div slot="item-text">{{item.text}}</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  data() {
    return {
      foot_title: [
        {
          text: "首页",
          icon: "icon-shouye",
          path: "/home"
        },
        {
          text: "分类",
          icon: "icon-leimupinleifenleileibie",
          path: "/category"
        },
        {
          text: "购物车",
          icon: "icon-gouwuche",
          path: "/cart"
        },
        {
          text: "我的",
          icon: "icon-wode",
          path: "/user"
        }
      ]
    };
  },
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style lang="scss">
.foot {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  .foot_item {
    height: 100%;
    flex-direction: column;
    img {
      width: 1.857143rem;
      height: 1.857143rem;
    }
  }
}
</style>
