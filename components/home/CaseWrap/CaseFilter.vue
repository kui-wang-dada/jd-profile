<template>
  <div class="filter-wrap">
    <div class="filter-item">
      <span class="label">{{ $t('case.label1') }}：</span>
      <div class="list-wrap">
        <a-checkable-tag
          v-for="typeItem in typeList"
          :key="typeItem"
          :checked="filter.typeCheck.includes(typeItem)"
          @change="checked => changeType(checked, typeItem)"
        >
          {{ typeItem }}
        </a-checkable-tag>
      </div>
    </div>
    <div class="filter-item">
      <span class="label">{{ $t('case.label2') }}：</span>
      <div class="list-wrap">
        <a-checkable-tag
          v-for="stackItem in stackList"
          :key="stackItem"
          :checked="filter.stackCheck.includes(stackItem)"
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
  props: {
    filter: {
      type: Object,
      default: () => ({ stackCheck: [], typeCheck: [] }),
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(['projectList']),
    stackList() {
      let list = [];

      this.projectList.forEach(item => {
        list = [...list, ...item.stack];
      });
      list = [this.$t('common.all'), ...new Set(list)];
      return list;
    },
    typeList() {
      let list = [];
      console.log(this.projectList, '123');
      this.projectList.forEach(item => {
        list = [...list, ...item.type];
      });
      list = [this.$t('common.all'), ...new Set(list)];
      return list;
    },
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    changeType(checked, item) {
      console.log(checked, item);
      if (item === this.$t('common.all')) {
        const typeList = checked ? this.typeList : [];
        this.$emit('changeFilter', { stackCheck: this.filter.stackCheck, typeCheck: typeList });
        return;
      }
      let typeCheck = [...this.filter.typeCheck];
      if (checked) {
        typeCheck = [...typeCheck, item];
      } else {
        const index = typeCheck.findIndex(type => type === item);
        typeCheck.splice(index, 1);

        // const data = this.typeCheck;
        // data.splice(index, 1);
        // this.typeCheck = data;
      }
      this.$emit('changeFilter', { stackCheck: this.filter.stackCheck, typeCheck });
    },
    changeStack(checked, item) {
      console.log(checked, item);
      if (item === this.$t('common.all')) {
        const stackList = checked ? this.stackList : [];
        this.$emit('changeFilter', { typeCheck: this.filter.typeCheck, stackCheck: stackList });
        return;
      }
      let stackCheck = [...this.filter.stackCheck];
      if (checked) {
        stackCheck = [...stackCheck, item];
      } else {
        const index = stackCheck.findIndex(stack => stack === item);
        stackCheck.splice(index, 1);
        // const data = this.typeCheck;
        // data.splice(index, 1);
        // this.typeCheck = data;
      }
      this.$emit('changeFilter', { typeCheck: this.filter.typeCheck, stackCheck });
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
      font-size: 20px;
      color: #333;
      font-weight: bold;
      width: 150px;
    }
    .list-wrap {
      margin-bottom: 10px;
      .ant-tag {
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
}
</style>
