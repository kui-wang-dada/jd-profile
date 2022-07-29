<template>
  <div class="wrap section-wrap">
    <div class="top-wrap">
      <h3>工作经验</h3>
      <h5>6年前端工作经验，业余时间自学solidity，node，java，golang等</h5>
      <img class="icon-list" src="@img/home/icon-list.png" alt="" />
    </div>

    <a-tabs :tab-bar-gutter="20">
      <a-tab-pane v-for="item in tabList" :key="item.name">
        <span slot="tab">
          <div class="tab-head">
            <p>{{ item.title }}</p>
          </div>
        </span>
        <div class="tab-con">
          <div class="tab-top">
            <h4>{{ item.title }}</h4>
            <h5>工作时间:{{ item.time }}</h5>
            <h6 v-for="label_ in item.label" :key="label_">{{ label_ }}</h6>
          </div>
          <div class="tab-con-main">
            <a-table rowKey="name" style="background: #fff" :columns="columns" :data-source="item.con">
              <span slot="index" slot-scope="text, record, index">{{ index + 1 }}</span>
              <template slot="link" slot-scope="text, record">
                <a v-if="record.detail.link" :href="record.detail.link" target="_blank">{{ record.detail.label }}</a>
                <span v-else>{{ record.detail.label }}</span>
              </template>
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
        {
          title: '查看详情',
          scopedSlots: { customRender: 'link' },
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

      p {
        font-size: 20px;
        color: #0c5afc;
      }
    }

    .tab-con {
      background: #f3f8fd;
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
        h5 {
          margin-top: 12px;
          font-size: 18px;
          font-weight: 400;
          color: #333333;
        }
        h6 {
          margin-top: 5px;
          font-size: 16px;
          font-weight: 400;
          color: #333;
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
