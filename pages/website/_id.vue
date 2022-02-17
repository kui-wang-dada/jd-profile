<template>
  <div class="wrap">
    <Banner v-if="banner" :conObj="banner"></Banner>
    <Intro v-if="intro" :conObj="intro"></Intro>
    <!-- <PriceSection v-if="price" :conObj="price"></PriceSection>
    <Advantage v-if="advantage" :conObj="advantage"></Advantage> -->
    <Feature v-if="feature" :conObj="feature"></Feature>
    <Number v-if="number" :conObj="number"></Number>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Banner, Feature, Intro, Number } from '@/components/website';
export default {
  components: { Banner, Intro, Feature, Number },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(['lang']),
    ...mapState('common', ['tabList']),
    activeItem() {
      const name = this.$route.params.id;
      const item = this.tabList.filter(item => item.name === name);
      if (!Array.isArray(item)) {
        return {};
      }
      if (!item.length) {
        return {};
      }
      return item && item[0];
    },
    banner() {
      return this.activeItem.banner;
    },
    intro() {
      return this.activeItem.intro;
    },
    // price() {
    //   return this.activeItem.price;
    // },
    // demo() {
    //   return this.activeItem.demo;
    // },
    // advantage() {
    //   return this.activeItem.advantage;
    // },
    feature() {
      return this.activeItem.feature;
    },
    number() {
      return this.activeItem.number;
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less"></style>
