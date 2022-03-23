<template>
  <div class="wrap section-wrap">
    <div class="top-wrap">
      <h3>相关文章</h3>
      <h5>6年前端工作经验，业余时间自学java，golang等</h5>
      <img class="icon-list" src="@img/home/icon-list.png" alt="" />
    </div>
    <div class="blog-wrap">
      <div class="blog-item blog-1">
        <h4>个人经历经验</h4>
        <div class="list-wrap">
          <div v-for="item in list1" :key="item.title" class="list-item">
            <h3>title</h3>
          </div>
        </div>
      </div>
      <div class="blog-item blog-2">
        <h4>技术文章笔记</h4>
        <div class="list-wrap">
          <div v-for="item in list2" :key="item.title" class="list-item">
            <h3>title</h3>
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
          title: '',
          link: '',
        },
        {
          title: '',
          link: '',
        },
        {
          title: '',
          link: '',
        },
        {
          title: '',
          link: '',
        },
        {
          title: '',
          link: '',
        },
        {
          title: '',
          link: '',
        },
        {
          title: '',
          link: '',
        },
        {
          title: '',
          link: '',
        },
        {
          title: '',
          link: '',
        },
      ],
      list2: [
        {
          title: '',
          link: '',
        },
        {
          title: '',
          link: '',
        },
        {
          title: '',
          link: '',
        },
        {
          title: '',
          link: '',
        },
        {
          title: '',
          link: '',
        },
        {
          title: '',
          link: '',
        },
        {
          title: '',
          link: '',
        },
        {
          title: '',
          link: '',
        },
        {
          title: '',
          link: '',
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
    margin-top: 40px;
    .blog-item {
      width: 450px;
      &:nth-child(1) {
        margin-right: 60px;
      }
      h4 {
        font-size: 20px;
        font-weight: bold;
        border-bottom: 1px solid #000;
      }
      .list-wrap {
        .list-item {
          border-bottom: 1px solid #e1e1e1;
          font-size: 16px;
          padding: 10px 0;
        }
      }
    }
  }
}
</style>
