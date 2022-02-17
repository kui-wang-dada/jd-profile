<template>
  <div class="filter-wrap">
    <a-form layout="inline" :form="form">
      <a-form-item>
        <a-select v-model="form.type" size="large" style="width: 200px" placeholder="选择类型" @change="changeType">
          <a-select-option v-for="type in typeList" :key="type.key" :value="type.key">
            {{ type.title }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item>
        <a-auto-complete
          v-model="form.school"
          size="large"
          placeholder="搜索学校"
          style="width: 200px"
          @select="selectSchool"
          @search="searchSchool"
          @change="changeSchool"
        >
          <template slot="dataSource">
            <a-select-option v-for="item in schoolList" :key="item.name" :title="item.name">
              {{ item.name }}
            </a-select-option>
          </template>
        </a-auto-complete>
      </a-form-item>
      <a-form-item>
        <a-range-picker
          v-model="form.range"
          size="large"
          :placeholder="['开始日期', '结束日期']"
          @change="changeRange"
        />
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  components: {},
  props: {},
  data() {
    return {
      form: {},
      schoolList: [],
      typeList: []
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    changeType() {},
    changeRange() {},
    selectSchool() {},
    searchSchool() {},
    changeSchool() {}
  }
};
</script>

<style scoped lang="less"></style>
