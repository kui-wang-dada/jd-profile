<template>
  <div class="">
    <TopBanner></TopBanner>
    <Website></Website>

    <CaseWrap></CaseWrap>

    <Example></Example>
  </div>
</template>

<script>
import { TopBanner, Website, Example } from '@/components/home';
import { CaseWrap } from '@/components/common';
export default {
  components: { TopBanner, Website, Example, CaseWrap },
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
