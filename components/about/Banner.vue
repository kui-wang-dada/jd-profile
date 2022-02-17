<template>
  <div class="wrap">
    <img src="@img/about/banner.png" class="bg" />
    <div class="item">
      <div class="item-con">
        <h3><span>美国厚仁集团 </span> 赴美留学第一选择</h3>
        <h5>
          美国厚仁教育集团总部位于宾州匹兹堡，分办公室遍布全美各大城市，主营业务集美国初/高中 留学申请
          及转学、紧急学术应对、美国本科/研究生申请和转学、学术辅导、美国寄宿家庭服务、前50美国名校保录、背景提升和职业规划等于一体，是全美首家荣获
          AIRC权威认证 的留学生综合教育集团。
        </h5>
      </div>
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
  position: relative;
  width: 100%;
  height: 410px;
  .bg {
    filter: brightness(60%);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  .item {
    position: absolute;
    top: 140px;
    left: 260px;
    right: 260px;

    .item-con {
      width: 900px;
      h3 {
        font-size: 40px;
        font-weight: 400;
        color: #ffffff;
        span {
          font-weight: 600;
        }
      }
      h5 {
        margin-top: 20px;
        font-size: 16px;
        font-weight: 400;
        color: #eef2ff;
        line-height: 28px;
      }
    }
  }
}
</style>
