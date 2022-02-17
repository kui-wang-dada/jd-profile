<template>
  <div class="wrap">
    <div class="top-wrap blue">
      <h3>{{ conObj.title }}</h3>
    </div>
    <div class="con-main-wrap">
      <div class="list-wrap">
        <div v-for="(item, index) in conObj.con" :key="index" class="list-item">
          <div class="num-wrap">
            <h4>{{ item.num }}</h4>
            <div v-if="item.add || item.numTip" class="num-tip-wrap">
              <img v-if="item.add" src="@img/home/add.png" alt="" />
              <p v-if="item.numTip">{{ item.numTip }}</p>
            </div>
          </div>
          <p class="label">{{ item.label }}</p>
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
      type: Object
    }
  },
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

<style scoped lang="less">
.wrap {
  width: 100%;
  height: 360px;
  background: url('~@img/home/num-bg.png');
  background-size: 100% 100%;
  .flex-col;

  .con-main-wrap {
    margin-top: 60px;
    .list-wrap {
      .flex-row;
      justify-content: space-around;
      .list-item {
        .flex-col;
        .num-wrap {
          .flex-row;
          h4 {
            font-size: 60px;
            font-weight: 600;
            color: #ffffff;
          }
          .num-tip-wrap {
            margin-left: 5px;
            .flex-col;
            align-items: flex-start;
            img {
              width: 20px;
            }
            p {
              margin-top: 10px;
              font-size: 18px;
              font-weight: 400;
              color: #ffffff;
            }
          }
        }
        .label {
          margin-top: 5px;
          font-size: 16px;
          font-weight: 400;
          color: #c8e1ff;
        }
      }
    }
  }
}
</style>
