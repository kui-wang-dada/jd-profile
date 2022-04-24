/** @format */
import { tabList, projectList } from '@/utils';
export default {
  state: () => ({
    tabList,
    projectList,
  }),
  mutations: {
    // 设置用户信息
    SET_TAB_LIST: (state, data) => {
      state.tabList = data;
    },
    SET_PROJECT_LIST: (state, data) => {
      state.projectList = data;
    },
  },
  actions: {},
};
