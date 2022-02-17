<template>
  <div class="product-wrap">
    <div class="top-wrap">
      <h3>厚仁留学服务</h3>
      <h5>暂时还没想好这个页面，先占个位置</h5>
      <img class="icon-list" src="@img/common/icon-list-blue.png" alt="" />
    </div>
    <div class="con-main-wrap">
      <div class="list-wrap">
        <div v-for="item in list" :key="item.title" class="list-item-wrap">
          <ListItem :item="item"></ListItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ListItem } from '@/components/product';
export default {
  components: { ListItem },
  props: {},
  data() {
    return {
      list: [
        {
          title: '美国高中申请'
        },
        {
          title: '美国本科申请'
        },
        {
          title: '研究生申请'
        },
        {
          title: 'Top50名校申请'
        },
        {
          title: '社区大学申请'
        },
        {
          title: '常春藤导师计划'
        },
        {
          title: 'F1签证辅导'
        },
        {
          title: '夏令营'
        },
        {
          title: '寄宿家庭'
        },
        {
          title: '美国高中转学'
        },
        {
          title: '美国本科转学'
        },
        {
          title: '社区大学转学'
        },
        {
          title: '全程学术辅导'
        },
        {
          title: '单科辅导'
        },
        {
          title: '开除应对'
        },
        {
          title: '护学星'
        },
        {
          title: '留美全程导师'
        },
        {
          title: '实习就业'
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.product-wrap {
  margin-top: 100px;
  .con-main-wrap {
    margin-top: 40px;
    .list-wrap {
      .flex-row;
      justify-content: flex-start;
      flex-wrap: wrap;
      .list-item-wrap {
        margin-right: 40px;
        margin-bottom: 40px;
        width: 150px;
        .flex-row;
        &:nth-child(7n) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
