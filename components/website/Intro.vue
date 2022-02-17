<template>
  <div class="wrap">
    <div class="top-wrap">
      <h3>{{ conObj.title }}</h3>

      <img class="icon-list" src="@img/home/icon-list.png" alt="" />
    </div>
    <div class="con-main-wrap">
      <img class="img-con" :src="conObj.imgCon" alt="" />
      <div class="con">
        <p>{{ conObj.con }}</p>
      </div>
      <img class="img-tip" :src="conObj.imgTip" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    conObj: {
      default: () => ({}),
      type: Object,
    },
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="less">
.wrap {
  padding: 60px 0 90px;
  .con-main-wrap {
    margin-top: 40px;
    .flex-row;
    position: relative;
    .img-con {
      width: 647px;
      height: 384px;
      margin-right: 30px;
    }
    .con {
      flex: 1;
      height: 400px;
      .flex-row;
      background: #f3f8fd;
      border-radius: 0px 4px 4px 0px;
      padding: 0 50px;

      p {
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        white-space: pre-line;
        line-height: 30px;
      }
    }
    .img-tip {
      position: absolute;
      right: -72px;
      bottom: -72px;
      width: 144px;
      height: 144px;
    }
  }
}
</style>
