<template>
  <div class="wrap section-wrap">
    <div class="con-wrap">
      <img class="bg" src="@img/home/banner.png" alt="" />
      <div class="main-wrap">
        <div class="item-con">
          <h3>{{ con.title }}</h3>
          <h5>{{ con.label1 }}</h5>
          <h5>{{ con.label2 }}</h5>
          <h5>{{ con.label3 }}</h5>
          <h5>{{ con.label4 }}</h5>
          <h5>{{ con.label5 }}</h5>
        </div>
        <img src="@img/common/profile.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      con: {
        title: '王逵',
        label1:
          '2014年毕业于华中农业大学，毕业后去乡镇事业单位从事基层党政工作一年半，期间自学java，前端等知识，于2016年10月转行',
        label2: '先后经历云里服务（一年），悠然一指（一年），科大讯飞（一年），厚仁服务（三年至今）',
        label3:
          '期间有生产项目的技术栈有：vue，小程序原生，react-native，egret小游戏，cordova，flutter，taro，uniapp，react+formily等',
        label4: '同时自学了node，java spring boot，golang等后端语言',
        label5: '期待同行！！',
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onChange() {},
  },
};
</script>

<style scoped lang="less">
.wrap {
  .con-wrap {
    width: 100%;

    // height: 410px;

    // position: absolute;
    // top: 0;
    // right: 0;
    // left: 0;
    // bottom: 0;

    position: relative;
    padding: 110px 0 50px;
    .bg {
      filter: brightness(60%);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    .main-wrap {
      width: @contentWidth;
      margin: 0 auto;
      .flex-row;
      justify-content: space-between;
      .item-con {
        h3 {
          font-size: 50px;
          font-weight: 600;
          color: #ffffff;
          text-align: left;
        }
        h5 {
          font-size: 20px;
          color: #ffffff;
          text-align: left;
          margin-top: 10px;
        }
      }
      img {
        width: 150px;
      }
    }
  }
}
</style>
