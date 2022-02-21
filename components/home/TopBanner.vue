<template>
  <div class="wrap section-wrap">
    <a-carousel :after-change="onChange">
      <div v-for="item in list" :key="item.title" class="item">
        <img class="bg" src="@img/home/banner.png" alt="" />
        <div class="item-con">
          <h3>{{ item.title }}</h3>
          <h5>{{ item.label }}</h5>
        </div>
      </div>
    </a-carousel>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      list: [
        {
          title: '王逵',
          label:
            '美国厚仁教育集团总部位于宾州匹兹堡，分办公室遍布全美各大城市，主营业务集美国初/高中 留学申请 及转学、紧急学术应对、美国本科/研究生申请和转学、学术辅导、美国寄宿家庭服务、前50美国名校保录、背景提升和职业规划等于一体，是全美首家荣获 AIRC权威认证 的留学生综合教育集团。',
        },
      ],
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
  /deep/ .ant-carousel {
    color: #fff;
    .slick-slide {
      text-align: center;
      height: 410px;

      overflow: hidden;

      .item {
        width: 100%;
        height: 410px;
        // position: absolute;
        // top: 0;
        // right: 0;
        // left: 0;
        // bottom: 0;

        position: relative;
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
        .item-con {
          position: absolute;
          top: 140px;
          left: 260px;
          right: 260px;

          h3 {
            font-size: 50px;
            font-weight: 600;
            color: #ffffff;
            text-align: left;
          }
          h5 {
            font-size: 18px;
            font-weight: 400;
            color: #ffffff;
            text-align: left;
          }
        }
      }
    }
  }
}
</style>
