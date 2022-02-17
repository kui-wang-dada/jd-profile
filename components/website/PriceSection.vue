<template>
  <div class="wrap">
    <div class="top-wrap">
      <h3>{{ conObj.title }}</h3>

      <img class="icon-list" src="@img/home/icon-list.png" alt="" />
    </div>
    <div class="con-main-wrap" :class="[`list-${conObj.con.length}`]">
      <div
        v-for="(item, index) in conObj.con"
        :key="index"
        :class="{
          'list-item': !item.icon,
          'list-final': !item.icon && !item.list,
        }"
      >
        <template v-if="item.icon">
          <img class="img-step" :src="item.icon" alt="" />
        </template>
        <template v-else>
          <div class="item-top" :style="{ background: item.topColor }">
            <span>{{ item.topTitle }}</span>
            <p>{{ item.topPrice }}</p>
            <span>{{ item.topTip }}</span>
          </div>
          <div v-if="item.list" class="item-con">
            <div
              v-for="(allItem, allIndex) in item.list"
              :key="allIndex"
              class="text-item"
            >
              <a-icon type="check" />
              <p>{{ allItem }}</p>
            </div>
          </div>
          <div v-else class="item-final">
            <img
              class="icon-price"
              src="@img/product/icon-price-3.png"
              alt=""
            />
            <p>{{ item.listTitle1 }}</p>
            <p>{{ item.listTitle2 }}</p>
          </div>
        </template>
      </div>

      <!-- <img class="img-step" src="@img/product/icon-price-1.png" alt="" />
      <div class="list-item">
        <div class="item-top">
          <span>月维护费</span>
          <p>{{ conObj.price2 }}</p>
        </div>
        <div class="item-con">
          <div
            v-for="(monthItem, monthIndex) in monthList"
            :key="monthIndex"
            class="text-item"
          >
            <a-icon type="check" />
            <p>{{ monthItem }}</p>
          </div>
        </div>
      </div>
      <img class="img-step" src="@img/product/icon-price-2.png" alt="" />
      <div class="list-item final">
        <div class="item-top">
          <span>最终开展费用</span>
          <p>{{ conObj.price3 }}</p>
        </div>
        <div class="item-con">
          <img class="icon-price" src="@img/product/icon-price-3.png" alt="" />
          <p>最终洽谈后如期交付原生APP、电脑端、H5端</p>
          <p>（定制化平台或者需求及时联系商务哦）</p>
        </div>
      </div> -->
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
  computed: {
    allList() {
      return [
        '专业团队技术配置指导开站事宜',
        '高级UI设计师协助处理页面展示效果',
        '专业技术团队高效快捷部署开站',
        '免费对接三方支付、短信平台等',
        '运维团队项目部署，域名解析等',
      ]
    },
    monthList() {
      return [
        '1.7*24小时在线客服协助处理问题',
        '技术团队高效积极协助处理解答疑惑',
        '平台自定义简单需求，免费开发维护',
        '运维团队24小时保证网站安全',
      ]
    },
  },
  watch: {},
  created() {},
  mounted() {},

  methods: {},
}
</script>

<style scoped lang="less">
.wrap {
  padding-top: 60px;
  padding-bottom: 90px;
  background: #f3f8fd;
  .con-main-wrap {
    margin-top: 50px;
    .flex-row;
    justify-content: space-between;

    &.list-4 {
      width: 1700px;
    }
    &.list-5{
      .list-final{
        flex:1
      }
    }
    .list-item {
      width: 380px;
      height: 520px;
      background: linear-gradient(
        180deg,
        #fbfcff 0%,
        #ffffff 10%,
        #ffffff 100%
      );
      box-shadow: 0px 6px 23px 0px rgba(24, 57, 127, 0.21),
        0px 4px 0px 0px #ffffff;
      border-radius: 4px;

      .item-top {
        .flex-col;
        width: 380px;
        height: 180px;
        background: linear-gradient(225deg, #809dca 3%, #c3d4ec 100%);
        border-radius: 4px 4px 0px 0px;
        span {
          font-size: 24px;
          font-weight: 600;
          color: #ffffff;
        }
        p {
          font-size: 50px;
          font-weight: 600;
          color: #ffffff;
        }
      }
      .item-con {
        padding: 40px 20px;
        .text-item {
          .flex-row;
          justify-content: flex-start;
          margin-bottom: 20px;
        }

        i {
          font-size: 18px;
          color: @primaryColor;
          margin-right: 20px;
        }
        p {
          font-size: 18px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #4a5871;
        }
      }
      .item-final {
        .flex-col;
        padding: 40px 20px;
        .icon-price {
          width: 150px;
        }
        p {
          margin-top: 15px;
        }
      }
      &.list-final {
        // flex: 1;
        .item-top {
          width: 100%;
          background: linear-gradient(207deg, #023efe 0%, #2782fe 100%);
          border-radius: 4px 4px 0px 0px;
        }

        .item-con {
          .flex-col;
          .icon-price {
            width: 150px;
          }
          p {
            margin-top: 15px;
          }
        }
      }
    }
    .img-step {
      width: 108px;
      height: 108px;
    }
  }
}
</style>
