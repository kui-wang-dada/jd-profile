<template>
  <div class="wrap section-wrap">
    <div class="top-wrap">
      <h3>权威认证+媒体报道</h3>

      <img class="icon-list" src="@img/home/icon-list.png" alt="" />
    </div>
    <div class="record-wrap">
      <div v-for="(item, index) in record" :key="index" class="item-record">
        <img :src="item.icon" alt="" />
      </div>
    </div>
    <div class="example-wrap">
      <div v-for="(item, index) in list" :key="index" class="item" @click="handleItem(item)">
        <img :src="item.icon" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      record: [
        {
          icon: require('@img/home/example/1.png'),
        },
        {
          icon: require('@img/home/example/2.png'),
        },
        {
          icon: require('@img/home/example/3.png'),
        },
      ],
      list: [
        {
          icon: require('@img/home/example/4.png'),
        },
        {
          icon: require('@img/home/example/5.png'),
        },
        {
          icon: require('@img/home/example/6.png'),
        },
        {
          icon: require('@img/home/example/7.png'),
        },
        {
          icon: require('@img/home/example/8.png'),
        },
        {
          icon: require('@img/home/example/9.png'),
        },
        {
          icon: require('@img/home/example/10.png'),
        },
        {
          icon: require('@img/home/example/11.png'),
        },
        {
          icon: require('@img/home/example/12.png'),
        },
        {
          icon: require('@img/home/example/13.png'),
        },
        {
          icon: require('@img/home/example/14.png'),
        },
        {
          icon: require('@img/home/example/15.png'),
        },
        {
          icon: require('@img/home/example/16.png'),
        },
        {
          icon: require('@img/home/example/17.png'),
        },
        {
          icon: require('@img/home/example/18.png'),
        },
      ],
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleItem(item) {
      this.$notification.error({
        message: '正在开发中',
        description: '点击会跳转到对应的新闻详情，暂时来不及完善',
      });
    },
  },
};
</script>

<style scoped lang="less">
.wrap {
  padding-top: 60px;
  padding-bottom: 80px;
  .record-wrap {
    width: 1400px;
    margin: 0 auto;
    margin-top: 64px;
    .flex-row;
    .item-record {
      margin-right: 25px;

      img {
        height: 110px;
      }
    }
  }
  .example-wrap {
    width: 1400px;
    margin: 0 auto;
    margin-top: 34px;
    .flex-row;
    flex-wrap: wrap;
    .item {
      width: 260px;
      height: 110px;
      background: #f3f8fd;
      margin-right: 25px;
      margin-bottom: 24px;
      .flex-row;
      &:nth-child(5n) {
        margin-right: 0;
      }
      img {
        cursor: pointer;
        width: 100%;
      }
    }
  }
}
</style>
