<template>
  <div class="wrap section-wrap">
    <div class="con-wrap">
      <div class="bg" />
      <div class="main-wrap">
        <div class="item-con">
          <h3>{{ con.title }}</h3>
          <h5>{{ con.label1 }}</h5>
          <h5>{{ con.label2 }}</h5>
          <h5>{{ con.label3 }}</h5>
          <h5>{{ con.label4 }}</h5>
          <h5>{{ con.label5 }}</h5>
        </div>
        <img v-if="lang === 'zh'" src="@img/home/wk-jd.png" />
        <img v-else src="@img/home/wk-jd-en.png" />

      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(['lang']),
    con() {
      return {
        title: this.$t('banner.title1'),
        label1: this.$t('banner.label1'),
        label2: this.$t('banner.label2'),
        label3: this.$t('banner.label3'),
        label4: this.$t('banner.label4'),
        label5: this.$t('banner.label5'),
      };
    },
  },
  watch: {},
  created() { },
  mounted() { },
  methods: {
    onChange() { },
  },
};
</script>

<style scoped lang="less">
.wrap {
  .con-wrap {
    width: 100%;

    // height: 410px;

    // position: absolute;
    // top: 0;
    // right: 0;
    // left: 0;
    // bottom: 0;

    position: relative;
    padding: 110px 0 50px;

    .bg {
      filter: brightness(60%);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-color: #1563f9;
    }

    .main-wrap {
      width: @contentWidth;
      margin: 0 auto;
      .flex-row;
      justify-content: space-between;

      .item-con {
        h3 {
          font-size: 50px;
          font-weight: 600;
          color: #ffffff;
          text-align: left;
        }

        h5 {
          font-size: 20px;
          color: #ffffff;
          text-align: left;
          margin-top: 10px;
        }
      }

      img {
        width: 150px;
      }
    }
  }
}
</style>
