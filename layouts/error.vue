<template>
  <div class="error-layout">
    <img src="~/assets/img/common/404.png" alt="" />
  </div>
</template>

<script>
export default {
  props: ['error'],
};
</script>

<style lang="less" scoped>
.error-layout {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 420px;
  }
}
</style>
