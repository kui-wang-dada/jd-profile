<template>
  <div class="filter-wrap">
    <div class="filter-item">
      <span class="label">项目类型：</span>
      <div class="list-wrap">
        <a-checkable-tag
          v-for="typeItem in typeList"
          :key="typeItem"
          :checked="typeCheck.includes(typeItem)"
          @change="checked => changeType(checked, typeItem)"
        >
          {{ typeItem }}
        </a-checkable-tag>
      </div>
    </div>
    <div class="filter-item">
      <span class="label">分类：</span>
      <div class="list-wrap">
        <a-checkable-tag
          v-for="stackItem in stackList"
          :key="stackItem"
          :checked="stackCheck.includes(stackItem)"
          @change="checked => changeStack(checked, stackItem)"
        >
          {{ stackItem }}
        </a-checkable-tag>
      </div>
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
      stackCheck: [],
      typeCheck: [],
    };
  },
  computed: {
    ...mapState('common', ['projectList']),
    stackList() {
      let list = [];
      this.projectList.forEach(item => {
        list = [...list, ...item.stack];
      });
      list = [...new Set(list)];
      return list;
    },
    typeList() {
      let list = [];
      this.projectList.forEach(item => {
        list = [...list, ...item.type];
      });
      list = [...new Set(list)];
      return list;
    },
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    changeType(checked, item) {
      console.log(checked, item);
      if (checked) {
        this.typeCheck = [...this.typeCheck, item];
      } else {
        const index = this.typeCheck.findIndex(type => type === item);
        this.typeCheck.splice(index, 1);
        // const data = this.typeCheck;
        // data.splice(index, 1);
        // this.typeCheck = data;
      }
    },
    changeStack(checked, item) {
      console.log(checked, item);
      if (checked) {
        this.stackCheck = [...this.stackCheck, item];
      } else {
        const index = this.stackCheck.findIndex(stack => stack === item);
        this.stackCheck.splice(index, 1);
        // const data = this.typeCheck;
        // data.splice(index, 1);
        // this.typeCheck = data;
      }
    },
  },
};
</script>

<style scoped lang="less">
.filter-wrap {
  .filter-item {
    .flex-row;
    justify-content: flex-start;
    .label {
      font-size: 16px;
      color: #333;
      font-weight: bold;
      width: 100px;
    }
    .list-wrap {
      margin-bottom: 10px;
    }
  }
}
</style>
