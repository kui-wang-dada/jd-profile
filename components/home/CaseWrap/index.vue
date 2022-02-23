<template>
  <section class="case-wrap section-wrap">
    <div class="top-wrap">
      <h3>项目经历</h3>
      <img class="icon-list" src="@img/common/icon-list.png" alt="" />
    </div>
    <div class="con-main-wrap">
      <div class="case-filter">
        <CaseFilter :filter="filter" @changeFilter="changeFilter"></CaseFilter>
      </div>
      <div class="case-list">
        <CaseList :filter="filter"></CaseList>
      </div>

      <a-button type="primary" size="large" @click="goToCase">查看更多成功案例</a-button>
    </div>
  </section>
</template>

<script>
import CaseFilter from './CaseFilter';
import CaseList from './CaseList';
export default {
  components: { CaseFilter, CaseList },
  props: {},
  data() {
    return {
      filter: {
        stackCheck: [],
        typeCheck: [],
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleChange() {},
    goToCase() {
      this.$router.push('/trust/case');
    },
    changeFilter(filter) {
      this.filter = filter;
    },
  },
};
</script>

<style scoped lang="less">
.section-wrap {
  padding: 60px 0 90px;
  .top-wrap {
  }
  .con-main-wrap {
    margin-top: 40px;

    .case-filter {
      margin-bottom: 20px;
    }
    .ant-btn {
      margin-top: 40px;
    }
  }
}
</style>
