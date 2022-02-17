<template>
  <section id="team" class="tutor section-wrap">
    <div class="top-wrap">
      <h3>导师团队</h3>
      <img class="icon-list" src="@img/common/icon-list.png" alt="" />
    </div>
    <div class="con-main-wrap">
      <a-tabs tab-position="left">
        <a-tab-pane v-for="team in teamList" :key="team.title" :tab="team.title">
          <div class="tab-wrap">
            <div v-if="team.label" class="label-wrap">
              <p v-for="label in team.label" :key="label">{{ label }}</p>
            </div>

            <div class="tutor-wrap">
              <div v-for="(tutor, index) in team.con" :key="index" class="tutor-item">
                <img :src="tutor.img" alt="" />
                <div class="tutor-right">
                  <h4>{{ tutor.name }}</h4>
                  <p>{{ tutor.label }}</p>
                </div>
              </div>
            </div>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
    <a-button class="more-btn" type="primary" size="large" @click="goToCase">查看更多导师信息</a-button>
  </section>
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
    ...mapState('common', ['teamList']),
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    goToCase() {},
  },
};
</script>

<style scoped lang="less">
.section-wrap {
  background: #f3f8fd;
  padding: 60px 0 90px;
  .flex-col;
  .con-main-wrap {
    margin-top: 50px;
    background: #fff;
    /deep/ .ant-tabs {
      .ant-tabs-nav {
        .ant-tabs-tab {
          margin-bottom: 0;
          height: 60px;
          .flex-row;
          &.ant-tabs-tab-active {
            background: @primaryColor;
            color: #fff;
            font-weight: bold;
          }
        }
      }
    }
    .tab-wrap {
      padding: 20px;

      .label-wrap {
        margin-bottom: 20px;
        p {
          margin-bottom: 10px;
          font-size: 16px;
          color: #333;
          line-height: 24px;
        }
      }
      .tutor-wrap {
        .flex-col;
        .tutor-item {
          margin-bottom: 20px;
          cursor: pointer;
          .flex-row;
          img {
            width: 60px;
            height: 60px;
            border-radius: 30px;
            margin-right: 10px;
          }
          h4 {
            font-size: 16px;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
  .more-btn {
    margin-top: 40px;
  }
}
</style>
