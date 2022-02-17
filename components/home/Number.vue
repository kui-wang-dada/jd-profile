<template>
  <div class="wrap">
    <div class="top-wrap blue">
      <h3>{{ conObj.title }}</h3>
    </div>
    <div class="con-main-wrap">
      <div class="list-wrap">
        <div v-for="(item, index) in conObj.con" :key="index" class="list-item">
          <div class="num-wrap">
            <h4>{{ item.num }}</h4>
            <div v-if="item.add || item.numTip" class="num-tip-wrap">
              <img v-if="item.add" src="@img/home/add.png" alt="" />
              <p v-if="item.numTip">{{ item.numTip }}</p>
            </div>
          </div>
          <p class="label">{{ item.label }}</p>
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
      conObj: {
        title: '赴美留学首选厚仁教育',
        con: [
          {
            num: '24000',
            numTip: '服务时长',
            add: true,
            label: '坚持把学生放在第一位，实战经验丰富'
          },
          {
            num: '3500',
            numTip: '美国院校资源',
            add: true,
            label: '直通美国院校招生官，活跃于主流国际教育舞台'
          },
          {
            num: '100%',
            numTip: '美名校服务团队',
            add: false,
            label: '服务导师均出自美国名校，亲身留美经验，学生的指路明灯'
          },
          {
            num: '200',
            numTip: '美企业资源',
            add: true,
            label: '合法正规的校外专业实践机会，稳步积累求职升学必备实习经历'
          },
          {
            num: '50',
            numTip: '不同行业导师资源',
            add: true,
            label: '厘清方向，与500强企业高管和TOP30名校教授1v1沟通'
          }
        ]
      }
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
  width: 100%;
  height: 360px;
  background: url('~@img/home/num-bg.png');
  background-size: 100% 100%;
  .flex-col;

  .con-main-wrap {
    width: 1400px;
    margin-top: 60px;
    .list-wrap {
      .flex-row;
      justify-content: space-around;
      .list-item {
        .flex-col;
        justify-content: flex-start;
        width: 220px;
        .num-wrap {
          .flex-row;
          h4 {
            font-size: 40px;
            font-weight: 600;
            color: #ffffff;
          }
          .num-tip-wrap {
            margin-left: 5px;
            .flex-col;
            align-items: flex-start;
            img {
              width: 20px;
            }
            p {
              margin-top: 10px;
              font-size: 14px;
              font-weight: 400;
              color: #ffffff;
            }
          }
        }
        .label {
          text-align: center;
          margin-top: 5px;
          font-size: 14px;
          font-weight: 400;
          color: #c8e1ff;
        }
      }
    }
  }
}
</style>
