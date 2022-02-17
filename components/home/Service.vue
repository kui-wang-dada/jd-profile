<template>
  <div class="wrap">
    <div class="top-wrap">
      <h3>行业领先的专业服务</h3>
      <h5>坚持把学生放在第一位，实力提升留学价值</h5>
      <img class="icon-list" src="@img/home/icon-list.png" alt="" />
    </div>
    <div class="con-main-wrap">
      <div class="left-wrap">
        <div class="left-con">
          <h4>留学前</h4>
          <p>选城市/地区、选校、选专业、申请准备、选中介、行前准备</p>
          <div class="section-tip">
            <div v-for="(item, index) in leftTip" :key="index" class="tip-item" @click="handleItem(item)">
              <img :src="item.icon" alt="" />
              <p>{{ item.title }}</p>
            </div>
          </div>
          <a-button @click="goToList('game')">查看详情</a-button>
        </div>
      </div>
      <div class="right-wrap">
        <h4>留学后</h4>
        <p>学校资源、学习、生活、转学、时间节点、择业就业、被开除</p>
        <div class="section-tip">
          <div v-for="(item, index) in rightTip" :key="index" class="tip-item" @click="handleItem(item)">
            <img :src="item.icon" alt="" />
            <p>{{ item.title }}</p>
          </div>
        </div>
        <a-button @click="goToList('sport')">查看详情</a-button>
        <img class="icon-bg" src="@img/home/apiData/icon-bg.png" alt="" />
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
      leftTip: [
        {
          title: '美国高中申请',
          icon: require('@img/home/apiData/icon-1.png')
        },
        {
          title: '美国本科申请',
          icon: require('@img/home/apiData/icon-2.png')
        },
        {
          title: '研究生申请',
          icon: require('@img/home/apiData/icon-3.png')
        },
        {
          title: 'Top50名校申请',
          icon: require('@img/home/apiData/icon-4.png')
        },
        {
          title: '社区大学申请',
          icon: require('@img/home/apiData/icon-1.png')
        },
        {
          title: '常春藤导师计划',
          icon: require('@img/home/apiData/icon-2.png')
        },
        {
          title: 'F1签证辅导',
          icon: require('@img/home/apiData/icon-3.png')
        },
        {
          title: '夏令营',
          icon: require('@img/home/apiData/icon-4.png')
        },
        {
          title: '寄宿家庭',
          icon: require('@img/home/apiData/icon-4.png')
        }
      ],
      rightTip: [
        {
          title: '美国高中转学',
          icon: require('@img/home/apiData/icon-5.png')
        },
        {
          title: '美国本科转学',
          icon: require('@img/home/apiData/icon-6.png')
        },
        {
          title: '社区大学转学',
          icon: require('@img/home/apiData/icon-5.png')
        },
        {
          title: '全程学术辅导',
          icon: require('@img/home/apiData/icon-6.png')
        },
        {
          title: '单科辅导',
          icon: require('@img/home/apiData/icon-5.png')
        },
        {
          title: '开除应对',
          icon: require('@img/home/apiData/icon-6.png')
        },
        {
          title: '护学星',
          icon: require('@img/home/apiData/icon-5.png')
        },
        {
          title: '留美全程导师',
          icon: require('@img/home/apiData/icon-6.png')
        },
        {
          title: '实习就业',
          icon: require('@img/home/apiData/icon-5.png')
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    goToList(type) {
      this.$notification.error({
        message: '正在开发中',
        description: '点击会跳转到服务列表页，还在考虑列表页的展现形式，国庆节会重点考虑这里'
      });
    },
    handleItem(item) {
      this.$notification.error({
        message: '正在开发中',
        description: '点击会跳转到服务详情页，还在考虑列表页的展现形式，国庆节会重点考虑这里'
      });
    }
  }
};
</script>

<style scoped lang="less">
.wrap {
  padding-top: 60px;
  padding-bottom: 90px;
  .con-main-wrap {
    margin-top: 50px;
    .flex-row;
    justify-content: space-between;
    .left-wrap {
      .flex-row;
      padding: 30px 50px;
      width: 680px;
      height: 500px;
      background: linear-gradient(180deg, #f3f8fd 0%, #ffffff 100%);
      box-shadow: 0px 6px 23px 0px rgba(24, 57, 127, 0.21), 0px 4px 0px 0px #ffffff;
      border-radius: 4px;
      .left-con {
        h4 {
          font-size: 30px;
          font-weight: 600;
          color: #333333;
        }
        p {
          margin-top: 10px;
          font-size: 16px;
          font-weight: 400;
          color: #4a5871;
        }

        .ant-btn {
          margin-top: 40px;
          width: 146px;
          height: 50px;
          background: linear-gradient(335deg, #0c5afc 0%, #1c93fe 100%);
          box-shadow: 0px 2px 12px 0px rgba(12, 90, 252, 0.28);
          border-radius: 4px;
          color: #fff;
        }
      }
      .img-title {
        width: 467px;
        height: 356px;
        margin: 20px 30px 0 20px;
      }
    }
    .right-wrap {
      width: 680px;
      height: 500px;
      padding: 30px 50px;
      background: linear-gradient(207deg, #023efe 0%, #2782fe 100%);
      border-radius: 4px;
      position: relative;
      .flex-col;
      align-items: flex-start;
      h4 {
        font-size: 30px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #ffffff;
        text-align: left;
      }
      p {
        margin-top: 10px;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
      }

      .ant-btn {
        margin-top: 40px;
        width: 146px;
        height: 50px;
        background: rgba(255, 255, 255, 0.09);
        border-radius: 4px;
        border: 1px solid #cfdaff;
        color: #fff;
      }
      .icon-bg {
        position: absolute;
        right: 0;
        bottom: -75px;
        width: 150px;
        height: 150px;
      }
    }
    .section-tip {
      margin-top: 30px;
      width: 100%;
      flex-wrap: wrap;
      .flex-row;
      justify-content: space-between;
      .tip-item {
        .flex-row;
        width: 125px;
        height: 70px;
        padding: 0 10px;
        margin-bottom: 10px;
        background: linear-gradient(180deg, #edf6ff 2%, #ffffff 100%);
        box-shadow: 0px 6px 23px 0px rgba(24, 57, 127, 0.21), 0px 1px 0px 0px #ffffff;
        border-radius: 4px;
        cursor: pointer;
        img {
          width: 25px;
          margin-right: 8px;
        }
        p {
          margin: 0;
          font-size: 16px;
          color: #4a5871;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
