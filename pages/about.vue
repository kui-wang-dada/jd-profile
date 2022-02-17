<template>
  <div class="wrap">
    <Banner></Banner>
    <Intro></Intro>
    <Milestone></Milestone>
    <Offer></Offer>
    <Letter></Letter>
  </div>
</template>

<script>
import { Banner, Intro, Milestone, Offer, Letter } from '@/components/about';
export default {
  components: { Banner, Intro, Milestone, Offer, Letter },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less"></style>
