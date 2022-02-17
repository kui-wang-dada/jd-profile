<template>
  <div class="wrap">
    <div class="bg">
      <div class="item-con">
        <h3>{{ conObj.title }}</h3>
        <h5>{{ conObj.label }}</h5>
        <div class="btn-wrap">
          <a-button type="primary" @click="goToLink">查看原站</a-button>
        </div>
      </div>
      <img class="img-con" :src="conObj.con" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    conObj: {
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
    goToLink() {
      window.open(this.conObj.link);
    }
  }
};
</script>

<style scoped lang="less">
.wrap {
  background: url('~@img/home/banner.png');
  background-size: 100% 100%;
  .bg {
    width: 1400px;
    height: 500px;
    margin: 0 auto;
    .flex-row;
    justify-content: space-between;
    .item-con {
      h3 {
        font-size: 50px;
        font-weight: 600;
        color: #ffffff;
      }
      h5 {
        margin-top: 10px;
        font-size: 18px;
        font-weight: 400;
        color: #ffffff;
      }
      .btn-wrap {
        margin-top: 20px;
        .ant-btn {
          width: 100px;
          height: 40px;
          background: @assistColor;
          font-weight: bold;
        }
      }
    }
    .img-con {
      width: 500px;
    }
  }
}
</style>
