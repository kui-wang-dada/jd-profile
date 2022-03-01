<template>
  <div class="wrap">
    <div class="con-main-wrap">
      <div class="contact-wrap">
        <div v-for="(item, index) in contact" :key="index" class="contact-item" @click="handleContact(item)">
          <i :class="[`iconfont ${item.icon}`]" alt="" />
          <div class="con-wrap">
            <h4>{{ item.title }}</h4>
            <p v-if="item.label">{{ item.label }}</p>
          </div>
        </div>
      </div>
      <div class="link-wrap">
        <div class="left-wrap">
          <div v-for="webType in majorList" :key="webType.title" class="left-item">
            <h3>{{ webType.title }}</h3>
            <div v-for="web in webType.con" :key="web.title" class="web-item" @click="handleLink(web)">
              <img :src="web.icon" alt="" />
              <p>{{ web.title }}</p>
            </div>
          </div>
        </div>
        <div class="right-wrap">
          <div class="link-list">
            <div v-for="(linkWrap, index) in linkList" :key="index" class="link-section">
              <h3>{{ linkWrap.title }}</h3>
              <div class="section-con">
                <div v-for="(link, index) in linkWrap.con" :key="index" class="link-item" @click="handleLink(link)">
                  <p>{{ link.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>Copyright © 2000 - 2021 美国厚仁教育. All Rights Reserved. 美国厚仁教育 版权所有</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  components: {},
  props: {},
  data() {
    return {
      contact: [
        {
          icon: 'icon-phone_circle',
          title: '美国拨打：+1 (412) 756-3137',
        },
        {
          icon: 'icon-phone_circle',
          title: '中国拨打：+86 (010) 5387-5758',
        },
        {
          icon: 'icon-email-circle',
          title: '邮件：info@wholeren.com',
        },
        {
          icon: 'icon-wechat-circle',
          title: '微信客服： wholerenguru5 （厚仁学术哥）',
        },
      ],
    };
  },
  computed: {
    ...mapState('common', ['tabList', 'serviceList']),
    majorList() {
      return [
        {
          title: '校园排名和资讯',
          con: [
            {
              icon: require('@img/home/icon-tab2.png'),
              title: '美国校园排名网',
              link: '',
            },
            {
              icon: require('@img/home/icon-tab2.png'),
              title: '美国校园资讯网',
              link: '',
            },
            {
              icon: require('@img/home/icon-tab2.png'),
              title: '厚仁知道论坛',
              link: '',
            },
          ],
        },
        {
          title: '转学与辅导',
          con: [
            {
              icon: require('@img/home/icon-tab2.png'),
              title: '美国转学录取中心',
              link: '',
            },
            {
              icon: require('@img/home/icon-tab2.png'),
              title: '辅道教育',
              link: '',
            },
            {
              icon: require('@img/home/icon-tab2.png'),
              title: '美国高校高考招生联盟',
              link: '',
            },
          ],
        },
        {
          title: '寄宿',
          con: [
            {
              icon: require('@img/home/icon-tab2.png'),
              title: '美寄宿',
              link: '',
            },
            {
              icon: require('@img/home/icon-tab2.png'),
              title: '寄宿家庭服务中心',
              link: '',
            },
          ],
        },
        {
          title: '求职和人工智能',
          con: [
            {
              icon: require('@img/home/icon-tab2.png'),
              title: 'Jobupper职尚行',
              link: '',
            },
            {
              icon: require('@img/home/icon-tab2.png'),
              title: 'ReadyAI',
              link: '',
            },
          ],
        },
      ];
    },
    linkList() {
      return [
        {
          title: 'Website',
          con: this.tabList.map(item => ({ title: item.title })),
        },
        {
          title: 'Before Abroad',
          con: this.serviceList.filter(item => item.type === 'before'),
        },
        {
          title: 'After Abroad',
          con: this.serviceList.filter(item => item.type === 'after'),
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
        color: #bfbfc0;
        margin-bottom: 20px;
      }
      .flex-row;
      align-items: flex-start;
      color: #fff;
      .left-wrap {
        width: 50%;
        .flex-row;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin-right: 100px;

        .left-item {
          .flex-col;
          align-items: flex-start;
          margin-right: 80px;
          margin-bottom: 80px;

          .web-item {
            .flex-row;
            justify-content: flex-start;
            margin-bottom: 20px;
            cursor: pointer;
            img {
              width: 30px;
              height: 30px;
              margin-right: 10px;
              border-radius: 15px;
            }
            p {
              font-size: 20px;
            }
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
                margin-bottom: 10px;
                cursor: pointer;
                p {
                  font-size: 16px;
                }
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
