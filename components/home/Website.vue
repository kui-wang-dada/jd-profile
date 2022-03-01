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
            <img :src="item.icon" />
            <p>{{ item.title }}</p>
          </div>
        </span>
        <div class="tab-con">
          <div class="tab-top">
            <h4>{{ item.title }}</h4>
            <h6>工作时间:{{ item.time }}</h6>
            <h6>{{ item.label }}</h6>
          </div>
          <div class="tab-con-main">
            <a-table style="background: #fff" :columns="columns" :data-source="item.con">
              <span slot="index" slot-scope="text, record, index">{{ index + 1 }}</span>
            </a-table>
          </div>
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
    return {
      columns: [
        {
          title: '序号',
          scopedSlots: { customRender: 'index' },
        },
        {
          title: '板块名称',
          dataIndex: 'name',
        },

        {
          title: '负责',
          dataIndex: 'duty',
        },
        {
          title: '技术栈',
          dataIndex: 'stack',
        },
        {
          title: '难点',
          dataIndex: 'hard',
        },
      ],
    };
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
      background: url('~@img/home/product/bg.png');
      background-size: 100% 100%;
      .flex-col;
      justify-content: flex-start;
      .tab-top {
        .flex-col;
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
      }
      .tab-con-main {
        width: 1200px;
        margin: 0 auto;

        margin-top: 40px;
        margin-bottom: 40px;
        div {
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
