<template>
  <div class="">
    <TopBanner></TopBanner>
    <Website></Website>

    <CaseWrap></CaseWrap>

    <Blog></Blog>
  </div>
</template>

<script>
// 测试发布4
import { TopBanner, Website, Blog, CaseWrap } from '@/components/home';
export default {
  components: { TopBanner, Website, Blog, CaseWrap },
  props: {},
  data() {
    return {
      test: '',
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less"></style>
