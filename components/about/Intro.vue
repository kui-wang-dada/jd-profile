<template>
  <div class="wrap">
    <div class="top-wrap">
      <h3>集团理念</h3>
      <h5>
        以专业教育服务，成就学生未来，是厚仁不断深研的问题。以经典教育理论为体，结合10年教育实践，厚仁逐渐形成特有的教育方法论，即FITS模型。我们以学生为中心（Focus），帮助学生取得成就（Impact），配备多对一的服务体系（Team），以及专业的结构性支持（Support）。厚仁教育各部门科学运用FITS模型，在服务周期每个环节产生效果，不仅帮助学生提升成绩、达成学业目标，更能培养出适应未来社会的杰出人才。
      </h5>
      <img class="icon-list" src="@img/home/icon-list.png" alt="" />
    </div>
    <div class="con-main-wrap">
      <div class="img-wrap">
        <img src="@img/about/intro.png" alt="" />
      </div>
      <div class="right-wrap">
        <div class="list-wrap">
          <div v-for="(item, index) in list" :key="index" class="list-item">
            <img :src="item.icon" alt="" />
            <div class="item-con">
              <h6>{{ item.title }}</h6>
              <p>{{ item.label }}</p>
            </div>
          </div>
        </div>
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
      list: [
        {
          icon: require('@img/about/icon-1.png'),
          title: 'Focus 专注',
          label: '专注学生发展，针对每个学生特质、兴趣和目标定制方案，发掘潜能'
        },
        {
          icon: require('@img/about/icon-2.png'),
          title: 'Impact 结果',
          label: '明确目标，不断形成闭环，正向反馈，实现长效影响，完成之前达不到的目标'
        },
        {
          icon: require('@img/about/icon-2.png'),
          title: 'Team 团队',
          label: '群策群力，用集体的经验和不断努力，作用于学生'
        },
        {
          icon: require('@img/about/icon-2.png'),
          title: 'Support 支持',
          label:
            '通过有结构的支持，包括流程，团队，学生信息系统，APP与小程序，掌握服务进展，查看交流记录，贯穿服务全过程'
        }
      ]
    };
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
  padding: 60px 0 90px;
  .con-main-wrap {
    margin-top: 40px;
    .flex-row;
    .img-wrap {
      background: linear-gradient(270deg, #90bafd 0%, #ffffff 50%);
      border-radius: 4px 0px 0px 4px;
      padding: 20px;
      img {
        width: 651px;
        height: 360px;
      }
    }
    .right-wrap {
      width: 720px;
      height: 400px;
      background: #f3f8fd;
      border-radius: 0px 4px 4px 0px;
      padding: 20px 60px;
      .list-wrap {
        .flex-col;
        align-items: flex-start;
        .list-item {
          margin-bottom: 30px;
          .flex-row;
          img {
            width: 40px;
            margin-right: 20px;
          }
          .item-con {
            h6 {
              font-size: 20px;
              font-weight: 500;
              color: #333333;
            }
            p {
              font-size: 16px;
              font-weight: 400;
              color: #4a5871;
            }
          }
        }
      }
    }
  }
}
</style>
