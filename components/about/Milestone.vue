<template>
  <div class="wrap">
    <div class="top-wrap blue">
      <h3>集团里程碑</h3>
      <h5>美国厚仁集团里程碑</h5>
      <img class="icon-list" src="@img/common/icon-list-blue.png" alt="" />
      <img class="img-title" src="@img/about/milestone.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.wrap {
  padding: 60px 0 80px;
  background: url('~@img/home/num-bg.png');
  background-size: 100% 100%;
  .top-wrap {
    .img-title {
      margin-top: 35px;
      width: 1380px;
      height: 330px;
    }
  }
}
</style>
