<template>
  <div class="cat">
    <div class="catitem" v-for="(item,index) in catItems" :key="index">
      <img :src="item.image_src" :alt="item.name" />
    </div>
  </div>
</template>
    
<script>
export default {
  components: {},
  props: {
    catItems: {
      type: Array,
      default: []
    }
  }
};
</script>
    
<style lang="scss">
.cat {
  height: 115px;
  width: 100%;
  display: flex;
  .catitem {
    flex: 1;
    padding: 5px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
