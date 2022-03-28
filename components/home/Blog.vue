<template>
  <div class="wrap section-wrap">
    <div class="top-wrap">
      <h3>相关文章</h3>
      <h5>
        6年前端工作经验，业余时间自学java，golang等
        <a target="_blank" href="http://www.dadafastrun.com/blog/">查看详情</a>
      </h5>
      <img class="icon-list" src="@img/home/icon-list.png" alt="" />
    </div>
    <div class="blog-wrap">
      <div class="blog-item blog-1">
        <h4>个人经历经验</h4>
        <div class="list-wrap">
          <div v-for="item in list1" :key="item.title" class="list-item">
            <a :href="item.link">{{ item.title }}</a>
          </div>
        </div>
      </div>
      <div class="blog-item blog-2">
        <h4>技术文章笔记</h4>
        <div class="list-wrap">
          <div v-for="item in list2" :key="item.title" class="list-item">
            <a :href="item.link">{{ item.title }}</a>
          </div>
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
      list1: [
        {
          title: '27岁转行风雨路——那年毕业，不知换了多少工作...',
          link: 'https://juejin.cn/post/6961010353471750158',
        },
        {
          title: '27岁转行风雨路2——前端跳槽之路',
          link: 'https://juejin.cn/post/6963433125808455716',
        },
        {
          title: '27岁转行风雨路3——破局35岁，程序猿转型之路',
          link: 'https://juejin.cn/post/6968719664897589279',
        },
      ],
      list2: [
        {
          title: 'Javascript——面向对象程序设计和继承',
          link: 'http://www.dadafastrun.com/blog/JS/object.html#%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F',
        },
        {
          title: 'ReactNative技术栈总结',
          link: 'http://www.dadafastrun.com/blog/app/RNSummary.html',
        },
        {
          title: 'HTTP 协议总结',
          link: 'http://www.dadafastrun.com/blog/web/http.html',
        },
        {
          title: 'docker学习笔记',
          link: 'http://www.dadafastrun.com/blog/goujian/docker.html',
        },
      ],
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.wrap {
  padding-top: 60px;
  padding-bottom: 80px;
  .blog-wrap {
    .flex-row;
    align-items: flex-start;
    margin-top: 40px;
    .blog-item {
      width: 450px;
      &:nth-child(1) {
        margin-right: 60px;
      }
      h4 {
        font-size: 20px;
        font-weight: bold;
        border-bottom: 1px solid #e1e1e1;
        padding-bottom: 10px;
      }
      .list-wrap {
        .list-item {
          border-bottom: 1px solid #e1e1e1;
          font-size: 16px;
          padding: 10px 0;
          a {
            color: #333;
            &:hover {
              color: @primary-color;
            }
          }
        }
      }
    }
  }
}
</style>
