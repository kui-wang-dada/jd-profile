<template>
  <div class="wrap">
    <div class="con-main-wrap">
      <div class="link-wrap">
        <div class="left-wrap">
          <div v-for="webType in majorList" :key="webType.title" class="left-item">
            <h3>{{ webType.title }}</h3>
            <img :src="webType.icon" alt="" />
          </div>
        </div>
        <div class="right-wrap">
          <div class="link-list">
            <div v-for="(linkWrap, index) in linkList" :key="index" class="link-section">
              <h3>{{ linkWrap.title }}</h3>
              <div class="section-con">
                <div v-for="(link, index) in linkWrap.con" :key="index" class="link-item" @click="handleLink(link)">
                  <a v-if="link.link" :href="link.link">{{ link.title }}</a>
                  <div v-else>
                    <span>{{ link.title }}：</span>
                    <span>{{ link.value }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="copyright">
      <p>Copyright © 2000 - 2021 美国厚仁教育. All Rights Reserved. 美国厚仁教育 版权所有</p>
    </div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState('common', ['tabList', 'serviceList']),
    majorList() {
      return [
        {
          title: '前端自学社区联盟（公众号）',
          icon: require('@img/common/qrcode-1.png'),
        },
        {
          title: 'web前端自学社区（小程序）',
          icon: require('@img/common/qrcode-2.png'),
        },
      ];
    },
    linkList() {
      return [
        {
          title: '相关信息',
          con: [
            {
              title: '微信号',
              value: 'wangkui125',
            },
            {
              title: '手机号',
              value: '13100671550',
            },
            {
              title: '城市',
              value: '湖北武汉',
            },
            {
              title: 'github',
              link: 'https://github.com/wangkui1991',
            },
          ],
        },
      ];
    },
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleContact(item) {
      this.$notification.error({
        message: '正在开发中',
        description: '点击会复制，',
      });
    },
    handleLink(item) {
      this.$notification.error({
        message: '正在开发中',
        description: '点击会跳转',
      });
    },
  },
};
</script>

<style scoped lang="less">
.wrap {
  background: #2e3e5f;
  .flex-col;
  .con-main-wrap {
    .flex-col;
    justify-content: flex-start;
    .contact-wrap {
      width: 100%;
      height: 95px;
      .flex-row;
      justify-content: space-between;
      border-bottom: 1px solid #686a6d;
      .contact-item {
        .flex-row;
        cursor: pointer;
        .iconfont {
          margin-right: 20px;
          color: #fff;
          font-size: 30px;
        }
        h4 {
          font-size: 14px;
          font-weight: 500;
          color: #ffffff;
        }
        p {
          font-size: 12px;
          color: #ffffff;
        }
      }
    }
    .link-wrap {
      width: 100%;
      padding: 30px 0;
      h3 {
        font-size: 18px;
        color: #bfbfc0;
        margin-bottom: 20px;
      }
      .flex-row;
      align-items: flex-start;
      justify-content: space-between;
      color: #fff;
      .left-wrap {
        width: 50%;
        .flex-row;
        flex-wrap: wrap;

        margin-right: 100px;

        .left-item {
          .flex-col;
          align-items: flex-start;
          margin-right: 80px;
          margin-bottom: 80px;

          img {
            width: 250px;
            height: 80px;
            margin-right: 10px;
          }
        }
      }
      .right-wrap {
        .link-list {
          .flex-row;
          align-items: flex-start;
          .link-section {
            margin-right: 60px;
            .section-con {
              .link-item {
                font-size: 16px;
                margin-bottom: 10px;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
  .copyright {
    .flex-row;
    width: 100%;
    height: 60px;
    border-top: 1px solid #465471;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #969eaf;
  }
}
</style>
