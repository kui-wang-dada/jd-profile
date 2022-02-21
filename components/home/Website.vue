<template>
  <div class="wrap section-wrap">
    <div class="top-wrap">
      <h3>工作经验</h3>
      <h5>6年前端工作经验，业余时间自学java，golang等</h5>
      <img class="icon-list" src="@img/home/icon-list.png" alt="" />
    </div>

    <a-tabs :tab-bar-gutter="20">
      <a-tab-pane v-for="item in tabList" :key="item.name">
        <span slot="tab">
          <div class="tab-head">
            <img :src="item.tab.icon" />
            <p>{{ item.tab.title }}</p>
          </div>
        </span>
        <div class="tab-con">
          <div class="tab-left">
            <img class="logo" :src="item.tab.logo" alt="" />
            <h4>{{ item.tab.title }}</h4>
            <h6>{{ item.tab.label }}</h6>
            <a-button @click="goTo(item)"> 产品介绍<a-icon type="arrow-right" /> </a-button>
          </div>
          <img class="img-con" :src="item.tab.con" alt="" />
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState('common', ['tabList']),
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    goTo(item) {
      this.$router.push(`/website/${item.name}`);
    },
  },
};
</script>

<style scoped lang="less">
.wrap {
  padding-top: 60px;

  /deep/ .ant-tabs {
    margin-top: 50px;
    .ant-tabs-nav-scroll {
      .flex-row;
    }
    .ant-tabs-bar {
      margin: 0;
    }
    .ant-tabs-tab-active {
      .tab-head {
        p {
          font-weight: 500;
          color: #0c5afc;
        }
      }
    }
    .tab-head {
      .flex-col;
      img {
        width: 80px;
      }
      p {
        margin-top: 5px;
        font-size: 16px;
        color: #0c5afc;
      }
    }

    .tab-con {
      height: 550px;
      background: url('~@img/home/product/bg.png');
      background-size: 100% 100%;
      .flex-row;
      .tab-left {
        width: 500px;
        .logo {
          height: 60px;
        }
        h4 {
          margin-top: 40px;
          font-size: 34px;
          font-weight: 600;
          color: #333333;
        }
        h6 {
          margin-top: 12px;
          font-size: 18px;
          font-weight: 400;
          color: #333333;
        }
        .ant-btn {
          margin-top: 40px;
          width: 146px;
          height: 50px;
          background: linear-gradient(335deg, #0c5afc 0%, #1c93fe 100%);
          box-shadow: 0px 2px 12px 0px rgba(12, 90, 252, 0.28);
          border-radius: 4px;
          font-size: 16px;
          font-weight: 400;
          color: #ffffff;
        }
      }
      .img-con {
        margin-left: 80px;
        width: 550px;
        height: auto;
      }
    }
  }
}
</style>
