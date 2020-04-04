<template>
  <div class="content bg-primary">
    <input type="text" placeholder="搜索" class="text-md" @click="inputClick" />
  </div>
</template>
    
<script>
export default {
  name: "topSeach",
  components: {},
  methods: {
    // 搜索框点击事件
    inputClick() {
      this.$router.push("/seach");
    }
  }
};
</script>
    
<style lang="scss">
.content {
  width: 100%;
  height: 39px;
  display: flex;
  justify-content: center;
  input {
    width: 95%;
    height: 36px;
    border-radius: 10px;
    border: none;
    text-align: center;
  }
}
</style>
