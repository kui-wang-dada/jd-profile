<template>
  <div class="wrap" :class="{ headerChange }">
    <div class="main-wrap">
      <img class="logo" src="@img/common/logo.png" alt="" />
      <div class="right-wrap">
        <div
          v-for="(item, index) in list"
          :key="index"
          :class="{ isActive: activeIndex === index }"
          class="right-item"
          @click="goTo(item, index)"
        >
          <p>{{ item.title }}</p>
        </div>
        <div class="lang-wrap">
          <img class="icon-lang" src="@img/common/icon-lang.png" alt="" />
          <a-dropdown>
            <p class="ant-dropdown-link">中文 <a-icon type="down" /></p>
            <a-menu slot="overlay" @click="handleMenu">
              <a-menu-item key="zh">
                <a href="javascript:;">中文简体</a>
              </a-menu-item>
              <a-menu-item key="en">
                <a href="javascript:;">English</a>
              </a-menu-item>
              <a-menu-item key="zh-tw">
                <a href="javascript:;">中文繁体</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
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
      activeIndex: 0,
      headerChange: false,
      shadowRoute: ['work'],
      list: [
        {
          title: '首页',
          name: '',
        },
        {
          title: '工作经验',
          name: 'work',
        },
        {
          title: '项目经历',
          name: 'project',
        },

        {
          title: '相关文章',
          name: 'blog',
        },
      ],
    };
  },
  computed: {},
  watch: {
    $route(newV) {
      this.checkRoute(newV);
    },
  },
  created() {},
  mounted() {
    this.checkRoute(this.$route);
    this.initDomHeight();
    window.addEventListener('scroll', this.onScroll);
  },

  destroyed() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    initDomHeight() {
      const sectionArr = document.getElementsByClassName('section-wrap');
      let initTop = 50;
      Array.prototype.map.call(sectionArr, (item, index) => {
        if (index === 0) {
          initTop = item.offsetTop + initTop;
        }
        this.list[index].num = item.offsetTop - initTop;
      });
    },
    handleMenu() {
      this.$notification.error({
        message: '正在开发中',
        description:
          '语言替换放在最后完成，当所有内容确定后，再去写语言配置文件，比较高效；暂时只考虑中文简体/繁体/英文',
      });
    },
    onScroll() {
      const scrollTop = document.documentElement.scrollTop;

      if (scrollTop > 140) {
        this.headerChange = true;
      } else {
        this.headerChange = false;
      }
      let activeIndex = 0;
      this.list.forEach((listItem, index) => {
        if (scrollTop >= listItem.num) {
          activeIndex = index;
        }
      });
      this.activeIndex = activeIndex;
    },
    goTo(item, index) {
      if (item.link) {
        window.open(item.link);
        return;
      }
      this.activeIndex = index;
      const top = this.list[index].num;
      console.log(top, this.list, 'top');
      document.documentElement.scrollTo({ left: 0, top, behavior: 'smooth' });
    },
    checkRoute(newV) {
      console.log(newV, 'newV');
      if (this.shadowRoute.includes(newV.name)) {
        this.headerChange = true;
      } else {
        this.headerChange = false;
      }
      if (newV) {
        const name = newV.name;
        const index = this.list.findIndex(item => item.name === name);
        this.activeIndex = index;
      }
    },
  },
};
</script>

<style scoped lang="less">
.wrap {
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  &.headerChange {
    height: 69px;
    background: #ffffff;
    box-shadow: 0px 6px 23px 0px rgba(16, 40, 90, 0.1);
    .main-wrap {
      .right-wrap {
        .right-item {
          p {
            color: #333333;
          }
          &.isActive {
            p {
              color: @primaryColor;
            }
            &::after {
              background: @primaryColor;
            }
          }
        }
        .lang-wrap {
          p {
            color: #4a5871;
          }
        }
      }
    }
  }
  .main-wrap {
    width: 1400px;
    height: 69px;
    margin: 0 auto;
    .flex-row();
    justify-content: space-between;
    .logo {
      width: 60px;
      height: 50px;
      border-radius: 25px;
    }
    .right-wrap {
      .flex-row();
      .right-item {
        margin-right: 100px;
        cursor: pointer;
        position: relative;
        width: auto;
        p {
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #ffffff;
        }
        &.isActive {
          font-size: 20px;
          font-weight: 500;
          border: none;

          &::after {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 3px;
            background: #fff;
            left: 50%;
            top: 30px;
            transform: translateX(-50%);
            border-radius: 10px;
          }
        }
      }
      .lang-wrap {
        .icon-lang {
          width: 14px;
          height: 14px;
        }
        p {
          margin-left: 10px;
          font-size: 14px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #ffffff;
        }
        .flex-row();
      }
    }
  }
}
</style>
