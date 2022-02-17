<template>
  <div class="">
    <a-list :grid="{ gutter: 24, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 }" :data-source="list">
      <a-list-item slot="renderItem">
        <a-card title="GPA 3.2 却收获常春藤工程专业研究生offer！">
          原学校：UC Davis （加州大学戴维斯分校） GPA：3.2+ GRE：323+4.0 申请专业：生物技术/ 纳米工程 录取结果
          University of Pennsylvania （2020 US News美国大学排名：6) Johns Hopkins University （2020 US
          News美国大学排名：10) Brown University （2020 US News美国大学排名：14)
        </a-card>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      list: [1, 2, 3, 4, 5, 7]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less"></style>
