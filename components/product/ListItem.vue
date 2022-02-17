<template>
  <div class="list-item" @click="goToDetail">
    <img src="@img/product/icon-circle.png" alt="" />
    <p>{{ item.title }}</p>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    item: {
      default: () => ({}),
      type: Object
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    goToDetail() {
      this.$notification.error({
        message: '正在开发中',
        description: '点击会跳转到服务详情页，还在考虑服务详情页的展现形式，国庆节会重点考虑这里'
      });
    }
  }
};
</script>

<style scoped lang="less">
.list-item {
  .flex-col;
  img {
    width: 100px;
    height: 100px;
  }
  p {
    font-size: 16px;
  }
}
</style>
