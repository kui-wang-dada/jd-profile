<template>
  <section class="case-wrap section-wrap">
    <div class="top-wrap">
      <h3>项目经历</h3>
      <img class="icon-list" src="@img/common/icon-list.png" alt="" />
    </div>
    <div class="con-main-wrap">
      <div class="case-filter">
        <CaseFilter></CaseFilter>
      </div>
      <div class="case-list">
        <CaseList></CaseList>
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
  props: {
    conObj: {
      default: () => ({}),
      type: Object,
    },
  },
  data() {
    return {
      tags: [
        '初高中申请',
        '本科申请',
        '研究生申请',
        '名校申请',
        '社大申请',
        '美国大学开除应对',
        '英澳加开除应对',
        '学术辅导',
        '求职规划',
      ],
      selectedTags: [],
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
