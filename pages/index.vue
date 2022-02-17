<template>
  <div class="">
    <TopBanner></TopBanner>
    <Website></Website>
    <Service></Service>
    <CaseWrap></CaseWrap>
    <Team></Team>
    <Example></Example>
    <Number></Number>
  </div>
</template>

<script>
import { TopBanner, Website, Number, Example, Service } from '@/components/home';
import { CaseWrap, Team } from '@/components/common';
export default {
  components: { TopBanner, Website, Number, Example, Service, CaseWrap, Team },
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
