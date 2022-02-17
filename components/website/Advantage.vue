<template>
  <div class="wrap">
    <div class="top-wrap">
      <h3>{{ conObj.title }}</h3>

      <img class="icon-list" src="@img/home/icon-list.png" alt="" />
    </div>
    <div class="con-main-wrap">
      <div class="list-wrap">
        <div v-for="(item, index) in conObj.con" :key="index" class="list-item">
          <img :src="item.icon" alt="" />
          <h4>{{ item.title }}</h4>
          <p>{{ item.label }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    conObj: {
      default: () => ({}),
      type: Object,
    },
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="less">
.wrap {
  padding: 60px 0 90px;
  .con-main-wrap {
    margin-top: 50px;
    .list-wrap {
      .flex-row;
      flex-wrap: wrap;
      justify-content: space-between;
      .list-item {
        width: 420px;
        height: 320px;
        background: linear-gradient(180deg, #f3f8fd 0%, #ffffff 100%);
        box-shadow: 0px 4px 18px 0px rgba(24, 57, 127, 0.14),
          0px 4px 0px 0px #ffffff;
        border-radius: 4px;
        margin-bottom: 30px;
        padding: 0 50px;
        .flex-col;
        img {
          width: 100px;
        }
        h4 {
          margin-top: 20px;

          font-size: 26px;
          font-weight: 500;
          color: #000000;
          text-align: center;
        }
        p {
          margin-top: 13px;
          font-size: 16px;
          font-weight: 400;
          color: #4a5871;
          text-align: center;
          line-height: 30px;
        }
      }
    }
  }
}
</style>
